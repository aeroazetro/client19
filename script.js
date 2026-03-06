let currentSubject = 'geometry';
let currentTest = 'module1';
let currentQuestionIndex = 0;
let score = 0;
let activeRefTab = 'geometry';
const SINGLE_SESSION_PRICE = 500;
const BUNDLE_SIZE = 10;
const BUNDLE_PRICE = 4500;
const BILLING_LOGS_FILE = 'billing-logs.csv';
const BILLING_TABLE = 'billing_sessions';
const PROOF_BUCKET = 'payment-proofs';
const PROOF_MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB
const PROOF_RETENTION_MONTHS = 6;
const BILLING_CLIENT_PASSWORD = 'climb123'; // Change client password here.
const BILLING_TUTOR_PASSWORD = 'teach123'; // Change tutor password here.
const BILLING_STORAGE_KEY = 'billingSessionsStateV1';
const BILLING_STORAGE_VERSION_KEY = 'billingSessionsStateVersionV1';
const BILLING_STORAGE_VERSION = '2026-03-06-history-topic-hours';
const BILLING_ROLE_KEY = 'billingRole';
let billingRole = sessionStorage.getItem(BILLING_ROLE_KEY) || '';
let billingUnlocked = billingRole === 'client' || billingRole === 'tutor';
let selectedBillingRole = 'client';
let billingHistoryFilter = 'all';
let billingSessions = [];
let supabaseClient = null;
let billingPersistenceMode = 'local';
const PAYMENT_METHOD_DETAILS = {
    gotyme: {
        label: 'GoTyme Bank',
        accountNumber: '0148 5367 2011',
        accountName: 'Israel John Penalosa'
    },
    gcash: {
        label: 'GCash',
        accountNumber: '0966 253 5576',
        accountName: 'Rachel Penalosa'
    }
};

// Theme Logic
// 1. Check LocalStorage
// 2. Fallback to System Preference
const getPreferredTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const savedTheme = getPreferredTheme();
document.documentElement.setAttribute('data-theme', savedTheme);

function getSupabaseConfig() {
    const config = window.SUPABASE_CONFIG || {};
    const url = (config.url || '').trim();
    const anonKey = (config.anonKey || '').trim();
    const hasValidUrl = url && !url.includes('YOUR-PROJECT') && !url.includes('your-project');
    const hasValidAnon = anonKey && !anonKey.includes('YOUR-ANON-KEY') && !anonKey.includes('your-anon-key');
    if (!hasValidUrl || !hasValidAnon) {
        return null;
    }
    return { url, anonKey };
}

function initSupabaseClient() {
    const cfg = getSupabaseConfig();
    if (!cfg || !window.supabase || typeof window.supabase.createClient !== 'function') {
        billingPersistenceMode = 'local';
        return;
    }
    supabaseClient = window.supabase.createClient(cfg.url, cfg.anonKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        }
    });
    billingPersistenceMode = 'supabase';
}

function hasSupabaseBilling() {
    return !!supabaseClient;
}

function isTutorAccess() {
    return billingRole === 'tutor';
}

function setBillingRole(role) {
    billingRole = role;
    billingUnlocked = role === 'client' || role === 'tutor';
    sessionStorage.removeItem('billingUnlocked');
    if (billingUnlocked) {
        sessionStorage.setItem(BILLING_ROLE_KEY, role);
    } else {
        sessionStorage.removeItem(BILLING_ROLE_KEY);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log("Script loaded successfully");
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    initSupabaseClient();
    initPaymentCountSelector();
    await loadBillingSessions();
    renderBillingDashboard();
});

window.toggleTheme = function () {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = next === 'light' ? '🌙' : '☀️';
}

function parseBillingSessionsCSV(data) {
    if (!data) return [];
    const lines = data.trim().split('\n').slice(1);
    return lines.map((line, idx) => {
        const parts = line.split(',');
        const date = parts[0] || '';
        const time = parts[1] || '';
        const tutee = parts[2] || '';
        let hours = '1';
        let topic = '';
        let status = 'unpaid';

        if (parts.length >= 6) {
            hours = parts[3] || '1';
            topic = parts[4] || '';
            status = parts[5] || 'unpaid';
        } else if (parts.length >= 5) {
            hours = parts[3] || '1';
            status = parts[4] || 'unpaid';
        }
        return normalizeBillingRow({
            date,
            time,
            tutee,
            hours,
            topic,
            status
        }, idx);
    }).filter(item => item.date && item.time && item.tutee);
}

function initPaymentCountSelector() {
    const select = document.getElementById('billing-pay-count');
    if (!select) return;
    select.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = String(i);
        option.textContent = `${i} session${i === 1 ? '' : 's'}`;
        select.appendChild(option);
    }
    select.value = '1';
    select.addEventListener('change', () => {
        updateDiscountMeter();
        setBillingPaymentStatus('');
    });
    const methodSelect = document.getElementById('billing-payment-method');
    if (methodSelect) {
        methodSelect.addEventListener('change', () => {
            renderPaymentMethodDetails();
            setBillingPaymentStatus('');
        });
    }
    const proofInput = document.getElementById('billing-proof-file');
    if (proofInput) {
        proofInput.addEventListener('change', () => {
            setBillingPaymentStatus('');
            updateProofFileState();
        });
    }
    const historyFilterSelect = document.getElementById('billing-history-filter');
    if (historyFilterSelect) {
        historyFilterSelect.addEventListener('change', () => {
            billingHistoryFilter = historyFilterSelect.value || 'all';
            renderPaymentHistory();
        });
    }
    renderPaymentMethodDetails();
    updateProofFileState();
    updateDiscountMeter();
}

async function loadBillingSessions() {
    if (hasSupabaseBilling()) {
        try {
            const remoteRows = await loadBillingSessionsFromSupabase();
            if (remoteRows.length > 0) {
                billingSessions = remoteRows;
                await cleanupExpiredProofs();
                saveBillingSessions();
                return;
            }

            // First run on a fresh database: seed from billing-logs.csv if available.
            const seedRows = await loadBillingSessionsFromFile();
            billingSessions = await seedSupabaseBilling(seedRows);
            await cleanupExpiredProofs();
            saveBillingSessions();
            return;
        } catch (error) {
            console.warn('Supabase billing load failed. Falling back to local storage.', error);
            billingPersistenceMode = 'local';
            supabaseClient = null;
        }
    }

    try {
        const saved = localStorage.getItem(BILLING_STORAGE_KEY);
        const savedVersion = localStorage.getItem(BILLING_STORAGE_VERSION_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (savedVersion === BILLING_STORAGE_VERSION && Array.isArray(parsed) && parsed.every(row => row && row.date && row.time && row.tutee)) {
                billingSessions = parsed.map((row, idx) => normalizeBillingRow(row, idx));
                return;
            }
        }
    } catch (error) {
        console.warn('Failed to load billing sessions from storage. Reverting to file seed.', error);
    }
    billingSessions = await loadBillingSessionsFromFile();
    saveBillingSessions();
}

async function loadBillingSessionsFromSupabase() {
    if (!hasSupabaseBilling()) return [];
    const { data, error } = await supabaseClient
        .from(BILLING_TABLE)
        .select('id,date,time,tutee,sessions,hours,topic,status,sort_order,payment_batch_id,payment_method,payment_amount,payment_account_name,payment_account_number,proof_path,proof_uploaded_at,approved_at')
        .order('date', { ascending: true })
        .order('time', { ascending: true })
        .order('sort_order', { ascending: true });
    if (error) throw error;
    if (!Array.isArray(data)) return [];
    return data.map((row, idx) => normalizeBillingRow({
        id: row.id,
        date: row.date,
        time: row.time,
        tutee: row.tutee,
        sessions: row.sessions,
        hours: row.hours,
        topic: row.topic,
        status: row.status,
        sort_order: row.sort_order,
        payment_batch_id: row.payment_batch_id,
        payment_method: row.payment_method,
        payment_amount: row.payment_amount,
        payment_account_name: row.payment_account_name,
        payment_account_number: row.payment_account_number,
        proof_path: row.proof_path,
        proof_uploaded_at: row.proof_uploaded_at,
        approved_at: row.approved_at
    }, idx));
}

async function seedSupabaseBilling(seedRows) {
    if (!hasSupabaseBilling()) return seedRows;
    if (!Array.isArray(seedRows) || !seedRows.length) return [];
    const payload = seedRows.map((row, idx) => ({
        date: row.date,
        time: row.time,
        tutee: row.tutee,
        sessions: 1,
        hours: row.hours,
        topic: row.topic,
        status: row.status,
        sort_order: idx
    }));
    const { data, error } = await supabaseClient
        .from(BILLING_TABLE)
        .insert(payload)
        .select('id,date,time,tutee,sessions,hours,topic,status,sort_order,payment_batch_id,payment_method,payment_amount,payment_account_name,payment_account_number,proof_path,proof_uploaded_at,approved_at');
    if (error) throw error;
    return (data || []).map((row, idx) => normalizeBillingRow({
        id: row.id,
        date: row.date,
        time: row.time,
        tutee: row.tutee,
        sessions: row.sessions,
        hours: row.hours,
        topic: row.topic,
        status: row.status,
        sort_order: row.sort_order,
        payment_batch_id: row.payment_batch_id,
        payment_method: row.payment_method,
        payment_amount: row.payment_amount,
        payment_account_name: row.payment_account_name,
        payment_account_number: row.payment_account_number,
        proof_path: row.proof_path,
        proof_uploaded_at: row.proof_uploaded_at,
        approved_at: row.approved_at
    }, idx));
}

async function loadBillingSessionsFromFile() {
    try {
        const response = await fetch(BILLING_LOGS_FILE, { cache: 'no-store' });
        if (!response.ok) return [];
        const csvText = await response.text();
        return parseBillingSessionsCSV(csvText);
    } catch (error) {
        return [];
    }
}

function saveBillingSessions() {
    try {
        localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(billingSessions));
        localStorage.setItem(BILLING_STORAGE_VERSION_KEY, BILLING_STORAGE_VERSION);
    } catch (error) {
        console.warn('Failed to save billing sessions state.', error);
    }
}

function setBillingPaymentStatus(message = '', isError = false) {
    const statusEl = document.getElementById('billing-payment-status');
    if (!statusEl) return;
    if (!message) {
        statusEl.classList.add('hidden');
        statusEl.classList.remove('is-error', 'is-success');
        statusEl.textContent = '';
        return;
    }
    statusEl.classList.remove('hidden');
    statusEl.classList.toggle('is-error', isError);
    statusEl.classList.toggle('is-success', !isError);
    statusEl.textContent = message;
}

function formatPeso(amount) {
    return `₱${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatSessionCount(count) {
    return `${count} session${count === 1 ? '' : 's'}`;
}

function formatHours(hours) {
    if (!Number.isFinite(hours)) return '1 hr';
    const normalized = Math.abs(hours % 1) < 0.001 ? String(Math.trunc(hours)) : String(hours);
    return `${normalized} hr${Number(hours) === 1 ? '' : 's'}`;
}

function getSessionAmount(item) {
    return (Number(item.hours) || 1) * SINGLE_SESSION_PRICE;
}

function calculatePaymentBreakdownForRows(rows) {
    const rowCount = Array.isArray(rows) ? rows.length : 0;
    const baseTotal = (rows || []).reduce((sum, item) => sum + getSessionAmount(item), 0);
    const discount = rowCount >= BUNDLE_SIZE ? Math.floor(rowCount / BUNDLE_SIZE) * (BUNDLE_SIZE * SINGLE_SESSION_PRICE - BUNDLE_PRICE) : 0;
    const discountedTotal = Math.max(0, baseTotal - discount);
    return {
        sessionCount: rowCount,
        baseTotal,
        discountedTotal,
        discount
    };
}

function getEarliestUnpaidRows(limit = 10) {
    return billingSessions
        .filter(item => item.status === 'unpaid')
        .sort((a, b) => {
            const diff = getBillingTimestamp(a) - getBillingTimestamp(b);
            if (diff !== 0) return diff;
            return (a.order || 0) - (b.order || 0);
        })
        .slice(0, Math.max(0, limit));
}

function normalizeBillingRow(row, index) {
    const parsedOrder = Number(row.sort_order);
    const normalizedTime = (row.time || '').trim().slice(0, 5);
    const normalizedDate = (row.date || '').trim();
    const normalizedStatus = (row.status || '').trim().toLowerCase();
    const parsedHours = Number.parseFloat(row.hours);
    return {
        id: Number.isFinite(Number(row.id)) ? Number(row.id) : null,
        date: normalizedDate,
        time: normalizedTime,
        tutee: (row.tutee || '').trim(),
        // Billing is now strictly tracked per session-log unit for 1-10 payments.
        sessions: 1,
        hours: Number.isFinite(parsedHours) && parsedHours > 0 ? parsedHours : 1,
        topic: (row.topic || '').trim(),
        status: normalizedStatus === 'paid' || normalizedStatus === 'pending' ? normalizedStatus : 'unpaid',
        paymentBatchId: (row.payment_batch_id || '').trim() || null,
        paymentMethod: (row.payment_method || '').trim() || null,
        paymentAmount: Number.isFinite(Number(row.payment_amount)) ? Number(row.payment_amount) : null,
        paymentAccountName: (row.payment_account_name || '').trim() || null,
        paymentAccountNumber: (row.payment_account_number || '').trim() || null,
        proofPath: (row.proof_path || '').trim() || null,
        proofUploadedAt: (row.proof_uploaded_at || '').trim() || null,
        approvedAt: (row.approved_at || '').trim() || null,
        order: Number.isFinite(parsedOrder)
            ? parsedOrder
            : (Number.isFinite(Number(row.order)) ? Number(row.order) : index)
    };
}

function updateDiscountMeter() {
    const select = document.getElementById('billing-pay-count');
    const fill = document.getElementById('billing-discount-fill');
    const meterText = document.getElementById('billing-discount-text');
    const bundleChip = document.getElementById('billing-bundle-chip');
    if (!select || !fill || !meterText) return;

    const selectedCount = Number.parseInt(select.value || '1', 10);
    const previewRows = getEarliestUnpaidRows(selectedCount);
    const breakdown = calculatePaymentBreakdownForRows(previewRows);
    const progressPct = Math.max(0, Math.min(100, (breakdown.sessionCount / BUNDLE_SIZE) * 100));
    fill.style.width = `${progressPct}%`;

    if (breakdown.sessionCount < BUNDLE_SIZE) {
        const remaining = BUNDLE_SIZE - breakdown.sessionCount;
        meterText.textContent = `Pay now: ${formatPeso(breakdown.discountedTotal)}. +${remaining} to unlock ₱500 discount.`;
        if (bundleChip) {
            bundleChip.classList.add('hidden');
            bundleChip.textContent = '';
        }
        return;
    }

    meterText.textContent = `Bundle total: ${formatPeso(breakdown.discountedTotal)}.`;
    if (bundleChip) {
        bundleChip.classList.remove('hidden');
        bundleChip.textContent = `Bundle Applied: -${formatPeso(breakdown.discount)}`;
    }
}

function getSelectedPaymentCount() {
    const select = document.getElementById('billing-pay-count');
    return Number.parseInt(select && select.value ? select.value : '1', 10);
}

function getSelectedPaymentMethod() {
    const methodSelect = document.getElementById('billing-payment-method');
    const key = (methodSelect && methodSelect.value) ? methodSelect.value : 'gotyme';
    return PAYMENT_METHOD_DETAILS[key] ? key : 'gotyme';
}

function renderPaymentMethodDetails() {
    const target = document.getElementById('billing-method-details');
    if (!target) return;
    const methodKey = getSelectedPaymentMethod();
    const details = PAYMENT_METHOD_DETAILS[methodKey];
    target.innerHTML = `
        <strong>${details.label}</strong>
        <span>${details.accountNumber} • ${details.accountName}</span>
    `;
}

function updateProofFileState() {
    const state = document.getElementById('billing-proof-file-state');
    const proofInput = document.getElementById('billing-proof-file');
    if (!state || !proofInput) return;

    const file = proofInput.files && proofInput.files[0] ? proofInput.files[0] : null;
    if (!file) {
        state.textContent = 'No file selected.';
        state.classList.remove('ready');
        return;
    }
    const mb = (file.size / (1024 * 1024)).toFixed(2);
    state.textContent = `Ready: ${file.name} (${mb}MB)`;
    state.classList.add('ready');
}

function createPaymentBatchId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID();
    }
    return `batch_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function getProofFileExtension(file) {
    const type = (file.type || '').toLowerCase();
    if (type === 'image/png') return 'png';
    return 'jpg';
}

function validateProofFile(file) {
    if (!file) return 'Upload a proof image.';
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes((file.type || '').toLowerCase())) {
        return 'Only JPG/PNG files are allowed.';
    }
    if (file.size > PROOF_MAX_SIZE_BYTES) {
        return `File is too large. Max size is ${Math.floor(PROOF_MAX_SIZE_BYTES / (1024 * 1024))}MB.`;
    }
    return '';
}

async function uploadProofFile(file, batchId) {
    if (!hasSupabaseBilling()) {
        throw new Error('Supabase is required for proof upload.');
    }
    const ext = getProofFileExtension(file);
    const path = `${batchId}.${ext}`;
    const { error } = await supabaseClient
        .storage
        .from(PROOF_BUCKET)
        .upload(path, file, {
            contentType: file.type,
            upsert: false
        });
    if (error) throw error;
    return path;
}

async function getSignedProofUrl(path) {
    if (!hasSupabaseBilling()) return '';
    const { data, error } = await supabaseClient
        .storage
        .from(PROOF_BUCKET)
        .createSignedUrl(path, 120);
    if (error || !data || !data.signedUrl) return '';
    return data.signedUrl;
}

function formatPendingAge(isoDate) {
    if (!isoDate) return '';
    const parsed = new Date(isoDate);
    if (Number.isNaN(parsed.getTime())) return '';
    return parsed.toLocaleString();
}

function groupPendingBatches(rows) {
    const pending = rows.filter(item => item.status === 'pending' && item.paymentBatchId);
    const grouped = new Map();
    pending.forEach(item => {
        const key = item.paymentBatchId;
        if (!grouped.has(key)) {
            grouped.set(key, {
                batchId: key,
                sessions: [],
                method: item.paymentMethod || '',
                amount: Number.isFinite(Number(item.paymentAmount)) ? Number(item.paymentAmount) : 0,
                proofPath: item.proofPath || '',
                submittedAt: item.proofUploadedAt || '',
                accountName: item.paymentAccountName || '',
                accountNumber: item.paymentAccountNumber || ''
            });
        }
        grouped.get(key).sessions.push(item);
    });
    return [...grouped.values()].sort((a, b) => {
        const at = Date.parse(a.submittedAt || '') || 0;
        const bt = Date.parse(b.submittedAt || '') || 0;
        return bt - at;
    });
}

function groupApprovedBatches(rows) {
    const approved = rows.filter(item => item.status === 'paid' && item.paymentBatchId && item.proofPath);
    const grouped = new Map();
    approved.forEach(item => {
        const key = item.paymentBatchId;
        if (!grouped.has(key)) {
            grouped.set(key, {
                batchId: key,
                sessions: [],
                method: item.paymentMethod || '',
                amount: Number.isFinite(Number(item.paymentAmount)) ? Number(item.paymentAmount) : 0,
                proofPath: item.proofPath || '',
                submittedAt: item.proofUploadedAt || '',
                approvedAt: item.approvedAt || '',
                accountName: item.paymentAccountName || '',
                accountNumber: item.paymentAccountNumber || ''
            });
        }
        grouped.get(key).sessions.push(item);
        if (item.approvedAt && !grouped.get(key).approvedAt) {
            grouped.get(key).approvedAt = item.approvedAt;
        }
    });
    return [...grouped.values()].sort((a, b) => {
        const at = Date.parse(a.approvedAt || a.submittedAt || '') || 0;
        const bt = Date.parse(b.approvedAt || b.submittedAt || '') || 0;
        return bt - at;
    });
}

function getHistoryMonthKey(group) {
    const source = group.approvedAt || group.submittedAt || '';
    const date = new Date(source);
    if (Number.isNaN(date.getTime())) return '';
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    return `${yyyy}-${mm}`;
}

function formatHistoryMonthLabel(monthKey) {
    const [yearStr, monthStr] = monthKey.split('-');
    const year = Number.parseInt(yearStr || '', 10);
    const month = Number.parseInt(monthStr || '', 10);
    if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) {
        return monthKey;
    }
    const date = new Date(year, month - 1, 1);
    return date.toLocaleString(undefined, { month: 'long', year: 'numeric' });
}

function syncHistoryFilterOptions(groups) {
    const select = document.getElementById('billing-history-filter');
    if (!select) return;

    const keys = [...new Set(groups.map(getHistoryMonthKey).filter(Boolean))];
    keys.sort((a, b) => (a < b ? 1 : -1));

    const allowed = new Set(['all', ...keys]);
    if (!allowed.has(billingHistoryFilter)) {
        billingHistoryFilter = 'all';
    }

    select.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'All';
    select.appendChild(allOpt);

    keys.forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = formatHistoryMonthLabel(key);
        select.appendChild(opt);
    });

    select.value = billingHistoryFilter;
}

async function cleanupExpiredProofs() {
    if (!hasSupabaseBilling()) return;
    const now = new Date();
    const cutoff = new Date(now);
    cutoff.setMonth(cutoff.getMonth() - PROOF_RETENTION_MONTHS);

    const expiredRows = billingSessions.filter(item => {
        if (!item.proofPath || !item.proofUploadedAt) return false;
        const proofDate = new Date(item.proofUploadedAt);
        return !Number.isNaN(proofDate.getTime()) && proofDate < cutoff;
    });

    if (!expiredRows.length) return;

    const paths = [...new Set(expiredRows.map(item => item.proofPath).filter(Boolean))];
    const ids = expiredRows.map(item => item.id).filter(id => Number.isFinite(Number(id)));

    if (paths.length) {
        await supabaseClient.storage.from(PROOF_BUCKET).remove(paths);
    }
    if (ids.length) {
        await supabaseClient
            .from(BILLING_TABLE)
            .update({ proof_path: null })
            .in('id', ids);
        billingSessions = billingSessions.map(item => {
            if (!ids.includes(item.id)) return item;
            return { ...item, proofPath: null };
        });
    }
}

function setBillingPasswordError(message = '') {
    const error = document.getElementById('billing-password-error');
    if (!error) return;
    if (message) {
        error.textContent = message;
        error.classList.remove('hidden');
    } else {
        error.classList.add('hidden');
    }
}

function setBillingAddError(message = '') {
    const error = document.getElementById('billing-add-error');
    if (!error) return;
    if (message) {
        error.textContent = message;
        error.classList.remove('hidden');
    } else {
        error.classList.add('hidden');
        error.textContent = '';
    }
}

function selectBillingRole(role) {
    selectedBillingRole = role === 'tutor' ? 'tutor' : 'client';
    const clientBtn = document.getElementById('billing-role-client');
    const tutorBtn = document.getElementById('billing-role-tutor');
    if (clientBtn) clientBtn.classList.toggle('active', selectedBillingRole === 'client');
    if (tutorBtn) tutorBtn.classList.toggle('active', selectedBillingRole === 'tutor');
}

function getBillingTimestamp(item) {
    const datePart = item.date || '1970-01-01';
    const timePart = item.time || '00:00';
    const parsed = Date.parse(`${datePart}T${timePart}:00`);
    return Number.isNaN(parsed) ? 0 : parsed;
}

function renderBillingList(targetId, sessions, emptyText, sortOrder = 'desc') {
    const list = document.getElementById(targetId);
    if (!list) return;
    list.innerHTML = '';
    list.scrollTop = 0;

    if (!sessions.length) {
        const empty = document.createElement('div');
        empty.className = 'billing-empty';
        empty.textContent = emptyText;
        list.appendChild(empty);
        return;
    }

    const direction = sortOrder === 'asc' ? 1 : -1;
    const sorted = [...sessions].sort((a, b) => {
        const diff = getBillingTimestamp(a) - getBillingTimestamp(b);
        if (diff !== 0) return direction * diff;
        return direction * ((a.order || 0) - (b.order || 0));
    });
    sorted.forEach(item => {
        const amount = getSessionAmount(item);
        const topicText = item.topic || 'No topic';
        const entry = document.createElement('div');
        entry.className = `billing-item ${item.status}`;
        entry.innerHTML = `
            <div class="billing-item-head">
                <span class="billing-item-date">${item.date} ${item.time}</span>
                <strong class="billing-item-amount">${formatPeso(amount)}</strong>
            </div>
            <div class="billing-item-top">
                <span class="billing-item-name">${item.tutee}</span>
                <span class="billing-status ${item.status}">${item.status.toUpperCase()}</span>
            </div>
            <div class="billing-item-meta">
                <span class="billing-meta-pill">Duration: ${formatHours(item.hours)}</span>
                <span class="billing-meta-pill">Topic: ${topicText}</span>
            </div>
        `;
        list.appendChild(entry);
    });
}

function renderPendingPayments() {
    const list = document.getElementById('billing-pending-list');
    if (!list) return;
    list.innerHTML = '';

    const groups = groupPendingBatches(billingSessions);
    if (!groups.length) {
        const empty = document.createElement('div');
        empty.className = 'billing-empty';
        empty.textContent = 'No pending payment proofs.';
        list.appendChild(empty);
        return;
    }

    groups.forEach(group => {
        const wrapper = document.createElement('div');
        wrapper.className = 'billing-pending-item';
        const methodLabel = PAYMENT_METHOD_DETAILS[group.method] ? PAYMENT_METHOD_DETAILS[group.method].label : 'Payment';
        wrapper.innerHTML = `
            <div class="billing-pending-top">
                <strong>${formatSessionCount(group.sessions.length)} • ${formatPeso(group.amount || 0)}</strong>
                <span class="billing-status pending">PENDING</span>
            </div>
            <div class="billing-pending-meta">
                <span>${methodLabel} • ${group.accountNumber || ''} • ${group.accountName || ''}</span>
                <span>Submitted: ${formatPendingAge(group.submittedAt)}</span>
            </div>
            <div class="billing-pending-actions"></div>
        `;

        const actions = wrapper.querySelector('.billing-pending-actions');
        const viewBtn = document.createElement('button');
        viewBtn.className = 'btn btn-secondary';
        viewBtn.textContent = 'View Proof';
        viewBtn.onclick = () => openPaymentProof(group.batchId);
        actions.appendChild(viewBtn);

        if (isTutorAccess()) {
            const approveBtn = document.createElement('button');
            approveBtn.className = 'btn btn-primary billing-pay-btn';
            approveBtn.textContent = 'Approve Pending';
            approveBtn.onclick = () => approvePendingBatch(group.batchId);
            actions.appendChild(approveBtn);
        }

        list.appendChild(wrapper);
    });
}

function renderPaymentHistory() {
    const list = document.getElementById('billing-history-list');
    if (!list) return;
    list.innerHTML = '';

    const groups = groupApprovedBatches(billingSessions);
    syncHistoryFilterOptions(groups);

    if (!groups.length) {
        const empty = document.createElement('div');
        empty.className = 'billing-empty';
        empty.textContent = 'No approved payment history with proofs yet.';
        list.appendChild(empty);
        return;
    }

    const filteredGroups = billingHistoryFilter === 'all'
        ? groups
        : groups.filter(group => getHistoryMonthKey(group) === billingHistoryFilter);

    if (!filteredGroups.length) {
        const empty = document.createElement('div');
        empty.className = 'billing-empty';
        empty.textContent = `No approved payments for ${formatHistoryMonthLabel(billingHistoryFilter)}.`;
        list.appendChild(empty);
        return;
    }

    filteredGroups.forEach(group => {
        const wrapper = document.createElement('div');
        wrapper.className = 'billing-pending-item';
        const methodLabel = PAYMENT_METHOD_DETAILS[group.method] ? PAYMENT_METHOD_DETAILS[group.method].label : 'Payment';
        wrapper.innerHTML = `
            <div class="billing-pending-top">
                <strong>${formatSessionCount(group.sessions.length)} • ${formatPeso(group.amount || 0)}</strong>
                <span class="billing-status paid">PAID</span>
            </div>
            <div class="billing-pending-meta">
                <span>${methodLabel} • ${group.accountNumber || ''} • ${group.accountName || ''}</span>
                <span>Submitted: ${formatPendingAge(group.submittedAt)}</span>
                <span>Approved: ${formatPendingAge(group.approvedAt)}</span>
            </div>
            <div class="billing-pending-actions"></div>
        `;

        const actions = wrapper.querySelector('.billing-pending-actions');
        const viewBtn = document.createElement('button');
        viewBtn.className = 'btn btn-secondary';
        viewBtn.textContent = 'View Proof';
        viewBtn.onclick = () => openPaymentProof(group.batchId);
        actions.appendChild(viewBtn);
        list.appendChild(wrapper);
    });
}

function renderBillingDashboard() {
    const unpaidSessions = billingSessions.filter(item => item.status === 'unpaid');
    const clientControls = document.getElementById('billing-client-controls');
    const adminControls = document.getElementById('billing-admin-controls');
    const clientNote = document.getElementById('billing-client-note');
    const pendingCard = document.getElementById('billing-pending-card');
    const isTutor = isTutorAccess();

    if (clientControls) clientControls.classList.remove('hidden');
    if (adminControls) adminControls.classList.toggle('hidden', !isTutor);
    if (clientNote) clientNote.classList.toggle('hidden', isTutor);
    if (pendingCard) pendingCard.classList.remove('hidden');

    const unpaidCountEl = document.getElementById('billing-unpaid-count');
    const totalLogsEl = document.getElementById('billing-total-logs');

    if (unpaidCountEl) unpaidCountEl.textContent = String(unpaidSessions.length);
    if (totalLogsEl) totalLogsEl.textContent = String(billingSessions.length);

    renderBillingList('billing-unpaid-list', unpaidSessions, 'No unpaid sessions right now.', 'asc');
    renderBillingList('billing-log-list', billingSessions, 'No session logs found.', 'desc');
    renderPendingPayments();
    renderPaymentHistory();
    renderPaymentMethodDetails();
    updateDiscountMeter();
}

async function submitPaymentProof() {
    const requested = getSelectedPaymentCount();
    if (!Number.isFinite(requested) || requested < 1 || requested > 10) {
        setBillingPaymentStatus('Select a valid payment count from 1 to 10.', true);
        return;
    }
    if (!hasSupabaseBilling()) {
        setBillingPaymentStatus('Payment proof upload requires Supabase connection.', true);
        return;
    }

    const unpaidSorted = getEarliestUnpaidRows(9999);

    if (unpaidSorted.length < requested) {
        setBillingPaymentStatus(`Only ${unpaidSorted.length} unpaid session(s) available.`, true);
        return;
    }

    const proofInput = document.getElementById('billing-proof-file');
    const proofFile = proofInput && proofInput.files ? proofInput.files[0] : null;
    const proofValidation = validateProofFile(proofFile);
    if (proofValidation) {
        setBillingPaymentStatus(proofValidation, true);
        return;
    }

    const methodKey = getSelectedPaymentMethod();
    const methodDetails = PAYMENT_METHOD_DETAILS[methodKey];
    const payNow = unpaidSorted.slice(0, requested);
    const ids = payNow.map(item => item.id).filter(id => Number.isFinite(Number(id)));
    if (ids.length !== payNow.length) {
        setBillingPaymentStatus('Sync issue: refresh first, then retry.', true);
        return;
    }

    const breakdown = calculatePaymentBreakdownForRows(payNow);
    const batchId = createPaymentBatchId();
    const uploadedAt = new Date().toISOString();

    let proofPath = '';
    try {
        proofPath = await uploadProofFile(proofFile, batchId);
        const { error } = await supabaseClient
            .from(BILLING_TABLE)
            .update({
                status: 'pending',
                payment_batch_id: batchId,
                payment_method: methodKey,
                payment_amount: breakdown.discountedTotal,
                payment_account_name: methodDetails.accountName,
                payment_account_number: methodDetails.accountNumber,
                proof_path: proofPath,
                proof_uploaded_at: uploadedAt,
                approved_at: null
            })
            .in('id', ids);
        if (error) throw error;
    } catch (error) {
        if (proofPath) {
            await supabaseClient.storage.from(PROOF_BUCKET).remove([proofPath]);
        }
        setBillingPaymentStatus(`Proof submission failed: ${error.message}`, true);
        return;
    }

    payNow.forEach(item => {
        item.status = 'pending';
        item.paymentBatchId = batchId;
        item.paymentMethod = methodKey;
        item.paymentAmount = breakdown.discountedTotal;
        item.paymentAccountName = methodDetails.accountName;
        item.paymentAccountNumber = methodDetails.accountNumber;
        item.proofPath = proofPath;
        item.proofUploadedAt = uploadedAt;
        item.approvedAt = null;
    });

    if (proofInput) proofInput.value = '';
    updateProofFileState();
    saveBillingSessions();
    closeBillingPayModal();
    renderBillingDashboard();
    setBillingPaymentStatus(`Proof submitted for ${formatSessionCount(requested)} (${formatPeso(breakdown.discountedTotal)}). Status is now PENDING.`, false);
    const pendingCard = document.getElementById('billing-pending-card');
    if (pendingCard) {
        pendingCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        pendingCard.classList.add('billing-card-highlight');
        setTimeout(() => pendingCard.classList.remove('billing-card-highlight'), 1400);
    }
}

async function approvePendingBatch(batchId) {
    if (!isTutorAccess()) {
        setBillingPaymentStatus('Tutor access is required to approve pending payments.', true);
        return;
    }
    const pendingRows = billingSessions.filter(item => item.status === 'pending' && item.paymentBatchId === batchId);
    if (!pendingRows.length) {
        setBillingPaymentStatus('No pending rows found for this batch.', true);
        return;
    }
    const ids = pendingRows.map(item => item.id).filter(id => Number.isFinite(Number(id)));
    const approvedAt = new Date().toISOString();

    if (hasSupabaseBilling()) {
        const { error } = await supabaseClient
            .from(BILLING_TABLE)
            .update({
                status: 'paid',
                approved_at: approvedAt
            })
            .in('id', ids);
        if (error) {
            setBillingPaymentStatus(`Approval failed: ${error.message}`, true);
            return;
        }
    }

    pendingRows.forEach(item => {
        item.status = 'paid';
        item.approvedAt = approvedAt;
    });
    saveBillingSessions();
    renderBillingDashboard();
    setBillingPaymentStatus(`Approved ${formatSessionCount(pendingRows.length)} from pending batch.`, false);
}

async function openPaymentProof(batchId) {
    const row = billingSessions.find(item => item.paymentBatchId === batchId && item.proofPath);
    if (!row || !row.proofPath) {
        setBillingPaymentStatus('No proof file found for this payment batch.', true);
        return;
    }

    const proofUrl = await getSignedProofUrl(row.proofPath);
    if (!proofUrl) {
        setBillingPaymentStatus('Could not open proof image.', true);
        return;
    }

    const modal = document.getElementById('billing-proof-modal');
    const image = document.getElementById('billing-proof-image');
    const meta = document.getElementById('billing-proof-meta');
    if (!modal || !image || !meta) return;

    image.src = proofUrl;
    meta.textContent = `${PAYMENT_METHOD_DETAILS[row.paymentMethod] ? PAYMENT_METHOD_DETAILS[row.paymentMethod].label : 'Payment'} • ${formatPeso(row.paymentAmount || 0)} • ${formatPendingAge(row.proofUploadedAt)}`;

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeBillingProofModal() {
    const modal = document.getElementById('billing-proof-modal');
    const image = document.getElementById('billing-proof-image');
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    if (image) image.src = '';
}

function openBillingPayModal() {
    const modal = document.getElementById('billing-pay-modal');
    if (!modal) return;
    setBillingPaymentStatus('');
    updateProofFileState();
    renderPaymentMethodDetails();
    updateDiscountMeter();
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeBillingPayModal() {
    const modal = document.getElementById('billing-pay-modal');
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

async function applyBulkPayment() {
    if (!isTutorAccess()) {
        setBillingPaymentStatus('Client access is read-only. Tutor access is required for payment updates.', true);
        return;
    }
    const select = document.getElementById('billing-pay-count');
    const requested = Number.parseInt(select && select.value ? select.value : '1', 10);
    if (!Number.isFinite(requested) || requested < 1 || requested > 10) {
        setBillingPaymentStatus('Select a valid payment count from 1 to 10.', true);
        return;
    }

    const unpaidSorted = billingSessions
        .filter(item => item.status === 'unpaid')
        .sort((a, b) => {
            const diff = getBillingTimestamp(a) - getBillingTimestamp(b);
            if (diff !== 0) return diff;
            return (a.order || 0) - (b.order || 0);
        });

    if (!unpaidSorted.length) {
        setBillingPaymentStatus('No unpaid sessions to mark as paid.', true);
        return;
    }

    const payNow = unpaidSorted.slice(0, requested);
    const idsToUpdate = payNow.map(item => item.id).filter(id => Number.isFinite(Number(id)));
    if (hasSupabaseBilling()) {
        if (idsToUpdate.length !== payNow.length) {
            setBillingPaymentStatus('Sync issue: some billing rows are missing Supabase IDs. Refresh and try again.', true);
            return;
        }
        const { error } = await supabaseClient
            .from(BILLING_TABLE)
            .update({ status: 'paid' })
            .in('id', idsToUpdate);
        if (error) {
            setBillingPaymentStatus(`Supabase update failed: ${error.message}`, true);
            return;
        }
    }

    payNow.forEach(item => {
        item.status = 'paid';
    });
    saveBillingSessions();
    renderBillingDashboard();

    const paidCount = payNow.length;
    const breakdown = calculatePaymentBreakdownForRows(payNow);
    const remaining = billingSessions.filter(item => item.status === 'unpaid').length;
    const discountText = breakdown.discount > 0 ? ` Saved ${formatPeso(breakdown.discount)}.` : '';
    const modeText = billingPersistenceMode === 'supabase' ? 'Synced to Supabase.' : 'Saved locally.';
    setBillingPaymentStatus(`Marked ${formatSessionCount(paidCount)} as PAID (FIFO). Charged ${formatPeso(breakdown.discountedTotal)}.${discountText} ${remaining} unpaid remaining. ${modeText}`);
    updateDiscountMeter();
}

function showBillingPasswordModal() {
    const modal = document.getElementById('billing-password-modal');
    const input = document.getElementById('billing-password-input');
    if (!modal) return;

    selectedBillingRole = 'client';
    selectBillingRole(selectedBillingRole);
    setBillingPasswordError('');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    if (input) input.focus();
}

function closeBillingPasswordModal() {
    const modal = document.getElementById('billing-password-modal');
    const input = document.getElementById('billing-password-input');
    if (!modal) return;

    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    if (input) input.value = '';
    setBillingPasswordError('');
}

function submitBillingPassword() {
    const input = document.getElementById('billing-password-input');
    if (!input) return;

    const expectedPassword = selectedBillingRole === 'tutor' ? BILLING_TUTOR_PASSWORD : BILLING_CLIENT_PASSWORD;
    if (input.value === expectedPassword) {
        setBillingRole(selectedBillingRole);
        closeBillingPasswordModal();
        openBillingDashboard();
    } else {
        setBillingPasswordError('Incorrect password. Try again.');
        input.focus();
    }
}

function handleBillingPasswordKeydown(event) {
    if (event.key === 'Enter') {
        submitBillingPassword();
    }
}

async function openBillingDashboard() {
    await loadBillingSessions();
    renderBillingDashboard();
    navTo('billing');
}

function openBilling() {
    showBillingPasswordModal();
}

function openBillingAddSessionModal() {
    if (!isTutorAccess()) {
        setBillingPaymentStatus('Client access is read-only. Tutor access is required to add sessions.', true);
        return;
    }
    const modal = document.getElementById('billing-add-modal');
    const dateInput = document.getElementById('billing-add-date');
    const timeInput = document.getElementById('billing-add-time');
    const tuteeInput = document.getElementById('billing-add-tutee');
    const topicInput = document.getElementById('billing-add-topic');
    const hoursInput = document.getElementById('billing-add-hours');
    const statusInput = document.getElementById('billing-add-status');
    const now = new Date();

    if (dateInput && !dateInput.value) dateInput.value = now.toISOString().slice(0, 10);
    if (timeInput && !timeInput.value) timeInput.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    if (tuteeInput && !tuteeInput.value.trim()) tuteeInput.value = 'JC';
    if (topicInput && !topicInput.value) topicInput.value = '';
    if (hoursInput && !hoursInput.value) hoursInput.value = '1';
    if (statusInput) statusInput.value = 'unpaid';

    setBillingAddError('');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeBillingAddSessionModal() {
    const modal = document.getElementById('billing-add-modal');
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    setBillingAddError('');
}

async function submitBillingAddSession() {
    if (!isTutorAccess()) {
        setBillingAddError('Tutor access is required.');
        return;
    }

    const dateInput = document.getElementById('billing-add-date');
    const timeInput = document.getElementById('billing-add-time');
    const tuteeInput = document.getElementById('billing-add-tutee');
    const topicInput = document.getElementById('billing-add-topic');
    const hoursInput = document.getElementById('billing-add-hours');
    const statusInput = document.getElementById('billing-add-status');
    if (!dateInput || !timeInput || !tuteeInput || !topicInput || !hoursInput || !statusInput) return;

    const date = (dateInput.value || '').trim();
    const time = (timeInput.value || '').trim().slice(0, 5);
    const tutee = (tuteeInput.value || '').trim();
    const topic = (topicInput.value || '').trim();
    const hours = Number.parseFloat(hoursInput.value || '1');
    const status = statusInput.value === 'paid' ? 'paid' : 'unpaid';

    if (!date || !time || !tutee) {
        setBillingAddError('Fill date, time, and tutee.');
        return;
    }
    if (!Number.isFinite(hours) || hours <= 0 || Math.round(hours * 2) !== hours * 2) {
        setBillingAddError('Hours must be in 0.5 steps (0.5, 1, 1.5, 2, ...).');
        return;
    }

    const nextOrder = billingSessions.reduce((maxVal, item) => Math.max(maxVal, Number(item.order) || 0), -1) + 1;
    let createdRow = {
        id: null,
        date,
        time,
        tutee,
        topic,
        hours,
        sessions: 1,
        status,
        sort_order: nextOrder
    };

    if (hasSupabaseBilling()) {
        const { data, error } = await supabaseClient
            .from(BILLING_TABLE)
            .insert({
                date,
                time,
                tutee,
                topic,
                hours,
                sessions: 1,
                status,
                sort_order: nextOrder
            })
            .select('id,date,time,tutee,sessions,hours,topic,status,sort_order,payment_batch_id,payment_method,payment_amount,payment_account_name,payment_account_number,proof_path,proof_uploaded_at,approved_at')
            .single();
        if (error) {
            setBillingAddError(`Supabase insert failed: ${error.message}`);
            return;
        }
        createdRow = data || createdRow;
    }

    billingSessions.push(normalizeBillingRow(createdRow, nextOrder));
    saveBillingSessions();
    closeBillingAddSessionModal();
    renderBillingDashboard();
    const modeText = billingPersistenceMode === 'supabase' ? 'Synced to Supabase.' : 'Saved locally.';
    setBillingPaymentStatus(`Added ${formatHours(hours)} for ${tutee} on ${date} ${time}.${topic ? ` Topic: ${topic}.` : ''} ${modeText}`);
}

function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\[", right: "\\]", display: true }
            ]
        });
    }
}

// === IMPROVED QUICK REFERENCE ===
function openQuickRef() {
    const modal = document.getElementById('quick-ref-modal');
    modal.classList.add('active');
    // Ensure MathJax renders if not already
    renderMath();
}

function closeQuickRef() {
    const modal = document.getElementById('quick-ref-modal');
    modal.classList.remove('active');
}

// === CORE NAVIGATION ===
function scrollToSection(id) {
    if (document.getElementById('landing').classList.contains('hidden')) {
        navTo('landing');
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
}

function navTo(screenId) {
    // Hide all main sections
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

    // Show target
    const target = document.getElementById(screenId);
    if (target) target.classList.remove('hidden');

    // Close overlays
    document.getElementById('feedback-overlay').classList.remove('active');

    // Scroll handling
    if (screenId === 'landing') {
        window.scrollTo(0, 0);
    }
}

// Subject Selection
function selectSubject(subject) {
    currentSubject = subject;
    const testGrid = document.getElementById('test-grid');
    testGrid.innerHTML = '';

    if (subject === 'linear_functions' || subject === 'line_equation') {
        const titles = {
            'linear_functions': 'Linear Functions',
            'line_equation': 'Equation of a Line & Graphing'
        };
        document.getElementById('subject-title').textContent = titles[subject];

        const emptyState = document.createElement('div');
        emptyState.style.gridColumn = "1 / -1";
        emptyState.style.textAlign = "center";
        emptyState.style.padding = "4rem 2rem";
        emptyState.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚧</div>
            <h3>Module Under Construction</h3>
            <p style="color: var(--text-secondary);">Content for Linear Functions is being prepared. Check back soon!</p>
            <button class="btn btn-secondary" style="margin-top: 1rem;" onclick="navTo('landing')">Return Home</button>
        `;
        testGrid.appendChild(emptyState);
        navTo('test-selection');
        return;
    }

    // Dynamic Title Logic
    const titles = {
        'geometry': 'Parallel & Perpendicular Lines',
        'polynomials': 'Polynomial Functions',
        'circles': 'Circles'
    };
    document.getElementById('subject-title').textContent = titles[subject] || 'Module Selection';

    // Group modules by difficulty
    const rawModules = window.questions[subject] || {};
    const modulesByDiff = {
        'Foundation': [],
        'Intermediate': [],
        'Elite': []
    };

    // Sort valid modules into categories
    Object.keys(rawModules).forEach(key => {
        const mod = rawModules[key];
        const diff = mod.difficulty || 'Foundation'; // Default fallback
        if (!modulesByDiff[diff]) modulesByDiff[diff] = [];

        modulesByDiff[diff].push({
            id: key,
            ...mod
        });
    });

    // Render Categories
    const diffOrder = ['Foundation', 'Intermediate', 'Elite'];

    diffOrder.forEach(diff => {
        const mods = modulesByDiff[diff];
        if (!mods || mods.length === 0) return;

        // Category Header
        const catHeader = document.createElement('div');
        catHeader.style.gridColumn = "1 / -1";
        catHeader.style.marginTop = "2rem";
        catHeader.style.marginBottom = "1rem";

        let desc = "Build your core understanding.";
        if (diff === 'Intermediate') desc = "Apply concepts to standard problems.";
        if (diff === 'Elite') desc = "Complex synthesis and proofs.";

        catHeader.innerHTML = `
            <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.25rem;">${diff} Level</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">${desc}</p>
            <hr style="border: 0; border-top: 1px solid var(--border); margin-top: 0.5rem;">
        `;
        testGrid.appendChild(catHeader);

        // Modules
        mods.forEach(mod => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.padding = '1.5rem';
            const subjectIcons = {
                polynomials: '✖️',
                geometry: '📐',
                circles: '⭕'
            };
            const icon = subjectIcons[subject] || '📘';
            card.innerHTML = `
                <div class="card-icon" style="margin-bottom:1rem; font-size:2.5rem;">${icon}</div>
                <h3 style="font-size:1.1rem;">${mod.title}</h3>
                <p style="margin-bottom: 0.5rem; font-weight:600;">${mod.subtitle}</p>
                <p style="margin-bottom: 1rem; font-size: 0.9rem;">${mod.description}</p>
                <span class="badge" style="margin-top:auto;">Start</span>
            `;
            card.onclick = () => startTest(mod.id);
            testGrid.appendChild(card);
        });
    });

    navTo('test-selection');
}

// Quiz Functions
function startTest(testKey) {
    currentTest = testKey;
    currentQuestionIndex = 0;
    score = 0;
    const subjectLabels = {
        geometry: 'Geometry / Lines',
        polynomials: 'Polynomials',
        circles: 'Geometry / Circles'
    };
    document.getElementById('quiz-subject-label').textContent = subjectLabels[currentSubject] || 'Subject';
    navTo('quiz');
    loadQuestion();
}

function loadQuestion() {
    try {
        document.getElementById('feedback-overlay').classList.remove('active');

        // Ensure data exists or throw error
        if (!window.questions || !window.questions[currentSubject]) {
            throw new Error(`Data missing. Please reload. (Subject: ${currentSubject})`);
        }

        // Access the .questions array now
        const moduleData = window.questions[currentSubject][currentTest];
        const qData = moduleData.questions[currentQuestionIndex];
        const totalQ = moduleData.questions.length;

        document.getElementById('question-tracker').textContent = `Question ${currentQuestionIndex + 1} / ${totalQ}`;


        const passageEl = document.getElementById('reading-passage');
        const quizContainer = document.querySelector('.quiz-container');

        // Reset Layout
        passageEl.classList.add('hidden');
        quizContainer.classList.remove('split-mode');
        document.getElementById('question-text').textContent = '';
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        // LINKED PASSAGE MODE
        if (qData.passageText) {
            passageEl.textContent = qData.passageText;
            passageEl.classList.remove('hidden');
            quizContainer.classList.add('split-mode'); // Trigger CSS Grid Side-by-Side
        }

        // RENDER BASED ON TYPE

        // 0. FIGURE QUESTION
        if (qData.image) {
            const img = document.createElement('img');
            img.src = qData.image;
            img.className = 'question-figure';
            img.alt = "Question Diagram";

            const figureBox = document.createElement('div');
            figureBox.style.textAlign = 'center';
            figureBox.appendChild(img);
            // Insert before options container
            const qTextBox = document.getElementById('question-text');
            qTextBox.parentNode.insertBefore(figureBox, optionsContainer);
        }

        // 1. ERROR RECOGNITION
        if (qData.type === 'error_recognition') {
            // Render Question Text with Markdown Support (Bold)
            const rawText = qData.question || "";
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
            document.getElementById('question-text').innerHTML = formattedText;
            const sentenceBox = document.createElement('div');
            sentenceBox.className = 'error-sentence-box';

            // Clean the text of [A], [B] markers first
            let cleanText = qData.text.replace(/\[[A-D]\]\s*/g, '').replace(/\*/g, '');
            let htmlText = cleanText;

            // Sort segments by length to avoid replacing sub-segments accidentally (e.g., "is" vs "island")
            // though unlikely given the context, safest to do.
            // Actually, we must use the segments in order or carefully replace.

            qData.segments.forEach((seg, idx) => {
                // We create the replacement HTML. 
                // We must be careful not to replace inside already replaced tags.
                // A safe way is to split the string? Or just replace global?
                // Given the specific nature of these questions, simple replacement is usually safe enough if text is unique.
                const replacement = `
                    <span class="sentence-segment" onclick="handleAnswer(${idx}, this)" data-idx="${idx}">
                        <span class="segment-text">${seg.text}</span>
                        <span class="segment-label">${seg.label}</span>
                    </span>
                `;
                htmlText = htmlText.replace(seg.text, replacement);
            });

            sentenceBox.innerHTML = htmlText;
            optionsContainer.appendChild(sentenceBox);

            // Add Option E (No Error)
            const noErrorBtn = document.createElement('button');
            noErrorBtn.className = 'option-btn';
            noErrorBtn.style.marginTop = '1.5rem';
            noErrorBtn.onclick = () => handleAnswer(4, noErrorBtn);
            noErrorBtn.innerHTML = `<div class="option-marker">E</div><span>NO ERROR</span>`;
            optionsContainer.appendChild(noErrorBtn);
        }
        // 2. SENTENCE ORDERING
        else if (qData.type === 'sentence_ordering') {
            // Render Question Text with Markdown Support (Bold)
            const rawText = qData.question || "";
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
            document.getElementById('question-text').innerHTML = formattedText;

            const orderBox = document.createElement('div');
            orderBox.className = 'ordering-box';
            orderBox.innerHTML = qData.options.map(s => `<div class="order-item">${s}</div>`).join('');
            optionsContainer.appendChild(orderBox);

            const choices = qData.orderingChoices || ['Option A', 'Option B', 'Option C', 'Option D'];
            choices.forEach((choiceText, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.onclick = () => handleAnswer(idx, btn);
                const label = String.fromCharCode(65 + idx);
                btn.innerHTML = `<div class="option-marker">${label}</div><span>${choiceText}</span>`;
                optionsContainer.appendChild(btn);
            });

        }
        // 3. STANDARD
        else {
            // Render Question Text with Markdown Support (Bold)
            const rawText = qData.question || "";
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
            document.getElementById('question-text').innerHTML = formattedText;
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.onclick = () => handleAnswer(idx, btn);
                const letter = String.fromCharCode(65 + idx); // A, B, C, D, E...
                btn.innerHTML = `<div class="option-marker">${letter}</div><span>${opt}</span>`;
                optionsContainer.appendChild(btn);
            });
        }

        renderMath();
    } catch (e) {
        console.error("Load Error:", e);
        document.getElementById('question-text').textContent = "⚠️ Error loading question: " + e.message;
        document.getElementById('options-container').innerHTML = `<div style="padding:1rem; color:var(--text-secondary)">Please tell the developer: ${e.message}</div>`;
    }
}

function formatErrorSentence(text) {
    return text.replace(/\[([A-D])\]/g, '<span class="error-badge">$1</span>');
}

function handleAnswer(selectedIndex, btnElement) {
    // Select both buttons and segments
    const interactiveElements = document.querySelectorAll('.option-btn, .sentence-segment');
    interactiveElements.forEach(el => {
        el.disabled = true; // Works for buttons
        el.style.pointerEvents = 'none'; // Works for spans/divs
    });

    const qData = window.questions[currentSubject][currentTest].questions[currentQuestionIndex];
    const isCorrect = selectedIndex === qData.correctAnswer;

    if (isCorrect) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('incorrect');

        // Highlight the correct answer
        // We need to find the element that corresponds to the correct index
        // Since we might have buttons OR segments, we check data-idx or implicit order?
        // Safest is to check both collections.

        if (qData.type === 'error_recognition') {
            const allSegments = document.querySelectorAll('.sentence-segment');
            if (allSegments[qData.correctAnswer]) {
                allSegments[qData.correctAnswer].classList.add('correct');
            }
        } else {
            const allBtns = document.querySelectorAll('.option-btn');
            if (allBtns[qData.correctAnswer]) {
                allBtns[qData.correctAnswer].classList.add('correct');
            }
        }
    }

    showFeedback(isCorrect, qData);
}

function showFeedback(isCorrect, qData) {
    const overlay = document.getElementById('feedback-overlay');
    document.getElementById('feedback-status').textContent = isCorrect ? 'Correct!' : 'Incorrect';
    document.getElementById('feedback-status').style.color = isCorrect ? 'var(--success)' : 'var(--error)';

    const correctContainer = document.getElementById('feedback-correct-answer');
    if (!isCorrect) {
        // If ordered/advanced, we might default to just showing explanation or finding the text
        let correctText = '';
        if (qData.type === 'sentence_ordering') correctText = "See ordering above";
        else if (qData.type === 'error_recognition') correctText = qData.segments[qData.correctAnswer].text;
        else correctText = qData.options[qData.correctAnswer];

        correctContainer.innerHTML = `Correct Answer: ${correctText}`;
        correctContainer.style.display = 'block';
    } else {
        correctContainer.style.display = 'none';
    }

    document.getElementById('feedback-explanation').innerHTML = qData.solution;
    renderMath();

    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    document.querySelector('.btn-next').textContent = (currentQuestionIndex === totalQ - 1) ? 'View Results' : 'Next Question →';
    overlay.classList.add('active');
}

function nextQuestion() {
    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    if (currentQuestionIndex < totalQ - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishExam();
    }
}

function finishExam() {
    navTo('results');
    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    document.getElementById('score-display').textContent = `${score}/${totalQ}`;

    const pct = (score / totalQ) * 100;
    let rating = 'Keep Practicing';
    if (pct >= 90) rating = 'Excellent (Elite Standard)';
    else if (pct >= 80) rating = 'Very Good (Advanced)';
    else if (pct >= 60) rating = 'Good (Proficient)';

    document.getElementById('rating-text').textContent = rating;
}

// Window click for modal close
window.onclick = function (event) {
    const quickRefModal = document.getElementById('quick-ref-modal');
    const billingModal = document.getElementById('billing-password-modal');
    const addSessionModal = document.getElementById('billing-add-modal');
    const proofModal = document.getElementById('billing-proof-modal');
    const payModal = document.getElementById('billing-pay-modal');
    if (event.target === quickRefModal) {
        closeQuickRef();
    }
    if (event.target === billingModal) {
        closeBillingPasswordModal();
    }
    if (event.target === addSessionModal) {
        closeBillingAddSessionModal();
    }
    if (event.target === proofModal) {
        closeBillingProofModal();
    }
    if (event.target === payModal) {
        closeBillingPayModal();
    }
}

function switchQuickRefTab(tabId) {
    // Hide all sections - using class toggle for animation support
    document.querySelectorAll('.ref-section').forEach(el => {
        if (el.id === tabId) {
            el.classList.add('active');
            el.style.display = 'block'; // Ensure display is set
        } else {
            el.classList.remove('active');
            el.style.display = 'none';
        }
    });

    // Update Sidebar Navigation
    const buttons = document.querySelectorAll('.ref-nav-item');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });

    // Ensure MathJax renders on the newly visible content
    if (typeof renderMath === 'function') renderMath();
}

// SKIP LOGIC
let hasSeenSkipWarning = false;

function handleSkipClick() {
    if (hasSeenSkipWarning) {
        confirmSkip();
    } else {
        const modal = document.getElementById('skip-modal');
        modal.classList.remove('hidden');
        // Small delay to allow display flex to apply before opacity transition
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeSkipModal() {
    const modal = document.getElementById('skip-modal');
    modal.classList.remove('active');
    // Wait for transition to finish before hiding
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function confirmSkip() {
    hasSeenSkipWarning = true;
    closeSkipModal();

    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    if (currentQuestionIndex < totalQ - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishExam();
    }
}

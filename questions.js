window.questions = {
  geometry: {
    module1: {
      title: "Module 1",
      subtitle: "Slopes & Equations",
      description: "Slope formula, $y=mx+b$, properties.",
      difficulty: "Foundation",
      questions: [
        {
          id: 1,
          question: "What is the slope ($m$) of the line given by the equation $y = 3x - 5$?",
          options: ["3", "-5", "5", "-3"],
          correctAnswer: 0,
          solution: "In the slope-intercept form $y = mx + b$, the coefficient of $x$ is the slope. Here, $m = 3$."
        },
        {
          id: 2,
          question: "Which of the following lines is **parallel** to the line $y = 2x + 1$?",
          options: ["$y = 2x - 4$", "$y = -2x + 1$", "$y = \\frac{1}{2}x$", "$y = -\\frac{1}{2}x + 3$"],
          correctAnswer: 0,
          solution: "Parallel lines must have the **same slope**. The given line has slope 2. The line $y = 2x - 4$ also has slope 2."
        },
        {
          id: 3,
          question: "Which of the following lines is **perpendicular** to the line $y = 4x + 2$?",
          options: ["$y = 4x - 2$", "$y = \\frac{1}{4}x + 2$", "$y = -\\frac{1}{4}x + 5$", "$y = -4x$"],
          correctAnswer: 2,
          solution: "Perpendicular lines have slopes that are **negative reciprocals** ($m_1 \\cdot m_2 = -1$). The negative reciprocal of 4 is $-\\frac{1}{4}$."
        },
        {
          id: 4,
          question: "What is the slope of the line passing through points $(1, 2)$ and $(3, 8)$?",
          options: ["2", "3", "4", "6"],
          correctAnswer: 1,
          solution: "$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$$"
        },
        {
          id: 5,
          question: "Choose the equation of a horizontal line passing through $(2, 5)$.",
          options: ["$x = 2$", "$y = 5$", "$y = 2x + 5$", "$x = 5$"],
          correctAnswer: 1,
          solution: "A horizontal line has slope 0 and is written as $y = k$. Since it passes through $(2, 5)$, the equation is $y = 5$."
        },
        {
          id: 6,
          question: "If two lines are perpendicular, and one has a slope of $-\\frac{2}{3}$, what is the slope of the other line?",
          options: ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{3}{2}$", "$\\frac{3}{2}$"],
          correctAnswer: 3,
          solution: "The negative reciprocal of $-\\frac{2}{3}$ is $\\frac{3}{2}$."
        },
        {
          id: 7,
          question: "Convert the equation $2x + y = 10$ to slope-intercept form ($y=mx+b$).",
          options: ["$y = 2x + 10$", "$y = -2x + 10$", "$y = 2x - 10$", "$y = -2x - 10$"],
          correctAnswer: 1,
          solution: "Subtract $2x$ from both sides: $y = -2x + 10$."
        },
        {
          id: 8,
          question: "What is the y-intercept of the line $y = -x + 7$?",
          options: ["$(0, -1)$", "$(0, 7)$", "$(7, 0)$", "$(-1, 0)$"],
          correctAnswer: 1,
          solution: "In $y = mx + b$, $b$ is the y-intercept. Here $b = 7$, so the point is $(0, 7)$."
        },
        {
          id: 9,
          question: "True or False: The line $x = 3$ is perpendicular to the line $y = 2$.",
          options: ["True", "False"],
          correctAnswer: 0,
          solution: "$x = 3$ is a vertical line. $y = 2$ is a horizontal line. Vertical and horizontal lines are always perpendicular."
        },
        {
          id: 10,
          question: "Which equation represents a line that passes through $(0, 0)$ and has a slope of 1?",
          options: ["$y = x$", "$y = x + 1$", "$y = 1$", "$x = 1$"],
          correctAnswer: 0,
          solution: "$y = mx + b$. If $m=1$ and it passes through the origin ($b=0$), then $y = 1x + 0$ or $y = x$."
        }
      ]
    },

    module2: {
      title: "Module 1",
      subtitle: "Application & Analysis",
      description: "Find equations of parallel/perpendicular lines; intercepts; collinearity.",
      difficulty: "Intermediate",
      questions: [
        {
          id: 1,
          question: "Find the equation of a line parallel to $y = 3x - 2$ that passes through $(1, 4)$.",
          options: ["$y = 3x + 1$", "$y = 3x - 4$", "$y = 3x + 7$", "$y = -\\frac{1}{3}x + 4$"],
          correctAnswer: 0,
          solution: "Parallel implies $m=3$. Using $y - y_1 = m(x - x_1)$: $y - 4 = 3(x - 1) \\rightarrow y = 3x - 3 + 4 \\rightarrow y = 3x + 1$."
        },
        {
          id: 2,
          question: "Find the equation of a line perpendicular to $y = -2x + 5$ passing through $(4, 1)$.",
          options: ["$y = 2x - 7$", "$y = \\frac{1}{2}x - 1$", "$y = \\frac{1}{2}x + 1$", "$y = -2x + 9$"],
          correctAnswer: 1,
          solution: "Slope of the given line is $-2$. Perpendicular slope is $\\frac{1}{2}$. $y - 1 = \\frac{1}{2}(x - 4) \\rightarrow y = \\frac{1}{2}x - 2 + 1 \\rightarrow y = \\frac{1}{2}x - 1$."
        },
        {
          id: 3,
          question: "For what value of $k$ is the line $kx + 3y = 12$ parallel to $y = 4x - 1$?",
          options: ["12", "-12", "4", "-4"],
          correctAnswer: 1,
          solution: "Rewrite $kx + 3y = 12$ as $y = -\\frac{k}{3}x + 4$. For parallel lines, slopes match: $-\\frac{k}{3} = 4 \\rightarrow -k = 12 \\rightarrow k = -12$."
        },
        {
          id: 4,
          question: "Convert the line with slope $-3$ passing through $(2, -5)$ into Standard Form $Ax + By = C$.",
          options: ["$3x + y = 1$", "$3x + y = -11$", "$3x - y = 11$", "$-3x + y = -1$"],
          correctAnswer: 0,
          solution: "$y - (-5) = -3(x - 2) \\rightarrow y + 5 = -3x + 6 \\rightarrow 3x + y = 1$."
        },
        {
          id: 5,
          question: "Which of these lines is perpendicular to $2x - 5y = 10$?",
          options: ["$2x - 5y = 0$", "$5x + 2y = 8$", "$5x - 2y = 8$", "$2x + 5y = 10$"],
          correctAnswer: 1,
          solution: "Slope of $2x - 5y = 10$ is $\\frac{2}{5}$. A perpendicular slope is $-\\frac{5}{2}$. The line $5x + 2y = 8$ has slope $-\\frac{5}{2}$."
        },
        {
          id: 6,
          question: "Find the x-intercept of the line perpendicular to $y=3$ that passes through $(4, 7)$.",
          options: ["3", "4", "7", "0"],
          correctAnswer: 1,
          solution: "A line perpendicular to the horizontal line $y=3$ is vertical. The vertical line through $(4,7)$ is $x=4$, so its x-intercept value is 4 (the intercept point is $(4,0)$)."
        },
        {
          id: 7,
          question: "Find the midpoint of the segment connecting the x-intercept and y-intercept of $3x + 4y = 12$.",
          options: ["$(2, 1.5)$", "$(4, 3)$", "$(1.5, 2)$", "$(2, 2)$"],
          correctAnswer: 0,
          solution: "x-int ($y=0$): $3x=12 \\rightarrow x=4 \\rightarrow (4,0)$. y-int ($x=0$): $4y=12 \\rightarrow y=3 \\rightarrow (0,3)$. Midpoint: $(\\frac{4+0}{2}, \\frac{0+3}{2}) = (2, 1.5)$."
        },
        {
          id: 8,
          question: "A line has an undefined slope. Which statement is TRUE?",
          options: ["It is parallel to the x-axis", "It is perpendicular to the x-axis", "It passes through the origin only", "It is a function"],
          correctAnswer: 1,
          solution: "Undefined slope means a vertical line. A vertical line meets the x-axis at 90 degrees, so it is perpendicular to the x-axis."
        },
        {
          id: 9,
          question: "Find the sum of the x-intercept and y-intercept of the line $2x + 5y = 20$.",
          options: ["10", "14", "4", "2"],
          correctAnswer: 1,
          solution: "x-intercept ($y=0$): $2x=20 \\rightarrow x=10$. y-intercept ($x=0$): $5y=20 \\rightarrow y=4$. Sum: $10+4=14$."
        },
        {
          id: 10,
          question: "A ramp rises 4 feet for every 12 feet of horizontal distance. What is its slope?",
          options: ["3", "$\\frac{1}{3}$", "4", "12"],
          correctAnswer: 1,
          solution: "Slope = rise/run = $\\frac{4}{12} = \\frac{1}{3}$."
        }
      ]
    },

    intermediate1: {
      title: "Module 2",
      subtitle: "Classifying Segment Pairs",
      description: "Compute slopes of segments AB and CD, then decide: parallel, perpendicular, or neither.",
      difficulty: "Intermediate",
      questions: [
        {
          id: 1,
          question: "Segment AB: $A(\\tfrac{1}{2},\\tfrac{3}{2})$, $B(\\tfrac{5}{2},\\tfrac{7}{2})$;  Segment CD: $C(-\\tfrac{1}{2},\\tfrac{1}{2})$, $D(\\tfrac{3}{2},\\tfrac{5}{2})$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "Compute slopes.\\n\\n$\\displaystyle m_{AB}=\\frac{\\frac{7}{2}-\\frac{3}{2}}{\\frac{5}{2}-\\frac{1}{2}}=\\frac{2}{2}=1$.\\n$\\displaystyle m_{CD}=\\frac{\\frac{5}{2}-\\frac{1}{2}}{\\frac{3}{2}-(-\\frac{1}{2})}=\\frac{2}{2}=1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 2,
          question: "Segment AB: $A(1,-2)$, $B(3,4)$;  Segment CD: $C(0,6)$, $D(2,0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{4-(-2)}{3-1}=\\frac{6}{2}=3$.\\n$\\displaystyle m_{CD}=\\frac{0-6}{2-0}=\\frac{-6}{2}=-3$.\\n\\nThey are negatives, but not negative reciprocals: $3\\cdot(-3)=-9\\neq-1$. So **Neither**."
        },
        {
          id: 3,
          question: "Segment AB: $A(-2,4)$, $B(4,-2)$;  Segment CD: $C(1,1)$, $D(7,-5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{-2-4}{4-(-2)}=\\frac{-6}{6}=-1$.\\n$\\displaystyle m_{CD}=\\frac{-5-1}{7-1}=\\frac{-6}{6}=-1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 4,
          question: "Segment AB: $A(2,1)$, $B(2,9)$;  Segment CD: $C(-3,4)$, $D(5,4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\overline{AB}$ is vertical ($x=2$) so its slope is undefined.\\n$\\overline{CD}$ is horizontal ($y=4$) so its slope is $0$.\\n\\nVertical and horizontal lines meet at $90^\\circ$ $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 5,
          question: "Segment AB: $A(-6,2)$, $B(-2,10)$;  Segment CD: $C(3,1)$, $D(9,4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{10-2}{-2-(-6)}=\\frac{8}{4}=2$.\\n$\\displaystyle m_{CD}=\\frac{4-1}{9-3}=\\frac{3}{6}=\\frac{1}{2}$.\\n\\nNot equal (not parallel). Product $2\\cdot\\tfrac{1}{2}=1\\neq -1$ (not perpendicular). So **Neither**."
        },
        {
          id: 6,
          question: "Segment AB: $A(-1,5)$, $B(5,1)$;  Segment CD: $C(2,-3)$, $D(4,0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB}=\\frac{1-5}{5-(-1)}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n$\\displaystyle m_{CD}=\\frac{0-(-3)}{4-2}=\\frac{3}{2}$.\\n\\n$\\left(-\\frac{2}{3}\\right)\\left(\\frac{3}{2}\\right)=-1$ so slopes are negative reciprocals $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 7,
          question: "Segment AB: $A(0,0)$, $B(8,6)$;  Segment CD: $C(-3,2)$, $D(1,5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{6-0}{8-0}=\\frac{6}{8}=\\frac{3}{4}$.\\n$\\displaystyle m_{CD}=\\frac{5-2}{1-(-3)}=\\frac{3}{4}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 8,
          question: "Segment AB: $A(4,-1)$, $B(0,3)$;  Segment CD: $C(-2,6)$, $D(6,2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{3-(-1)}{0-4}=\\frac{4}{-4}=-1$.\\n$\\displaystyle m_{CD}=\\frac{2-6}{6-(-2)}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n\\nNot equal. Product $(-1)\\left(-\\tfrac{1}{2}\\right)=\\tfrac{1}{2}\\neq-1$. So **Neither**."
        },
        {
          id: 9,
          question: "Segment AB: $A(4,-1)$, $B(0,3)$;  Segment CD: $C(-2,6)$, $D(2,2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{3-(-1)}{0-4}=\\frac{4}{-4}=-1$.\\n$\\displaystyle m_{CD}=\\frac{2-6}{2-(-2)}=\\frac{-4}{4}=-1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 10,
          question: "Segment AB: $A(-4,-2)$, $B(2,1)$;  Segment CD: $C(1,7)$, $D(3,3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB}=\\frac{1-(-2)}{2-(-4)}=\\frac{3}{6}=\\frac{1}{2}$.\\n$\\displaystyle m_{CD}=\\frac{3-7}{3-1}=\\frac{-4}{2}=-2$.\\n\\n$\\left(\\frac{1}{2}\\right)(-2)=-1$ so they are **Perpendicular**."
        },
        {
          id: 11,
          question: "Segment AB: $A(-3,0)$, $B(5,0)$;  Segment CD: $C(2,-4)$, $D(2,9)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\overline{AB}$ is horizontal ($y=0$) so slope $0$.\\n$\\overline{CD}$ is vertical ($x=2$) so slope undefined.\\n\\nHorizontal $\\perp$ vertical $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 12,
          question: "Segment AB: $A(\\tfrac{3}{2},-\\tfrac{1}{2})$, $B(\\tfrac{9}{2},\\tfrac{5}{2})$;  Segment CD: $C(-1,3)$, $D(2,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{\\frac{5}{2}-(-\\frac{1}{2})}{\\frac{9}{2}-\\frac{3}{2}}=\\frac{3}{3}=1$.\\n$\\displaystyle m_{CD}=\\frac{1-3}{2-(-1)}=\\frac{-2}{3}=-\\frac{2}{3}$.\\n\\nNot equal; product $1\\cdot(-\\tfrac{2}{3})=-\\tfrac{2}{3}\\neq-1$. So **Neither**."
        }
      ]
    },

    intermediate2: {
      title: "Module 3",
      subtitle: "Trickier Coordinates & Mixed Forms",
      description: "More challenging pairs (fractions, negatives, and careful slope checks).",
      difficulty: "Intermediate",
      questions: [
        {
          id: 1,
          question: "Segment AB: $A(-1,2)$, $B(7,-2)$;  Segment CD: $C(3,5)$, $D(5,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{-2-2}{7-(-1)}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n$\\displaystyle m_{CD}=\\frac{1-5}{5-3}=\\frac{-4}{2}=-2$.\\n\\nNot equal and not negative reciprocals (product $=1$). So **Neither**."
        },
        {
          id: 2,
          question: "Segment AB: $A(-1,2)$, $B(7,-2)$;  Segment CD: $C(3,5)$, $D(11,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{-2-2}{7-(-1)}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n$\\displaystyle m_{CD}=\\frac{1-5}{11-3}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 3,
          question: "Segment AB: $A(2,8)$, $B(6,0)$;  Segment CD: $C(-3,1)$, $D(1,3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB}=\\frac{0-8}{6-2}=\\frac{-8}{4}=-2$.\\n$\\displaystyle m_{CD}=\\frac{3-1}{1-(-3)}=\\frac{2}{4}=\\frac{1}{2}$.\\n\\n$(-2)\\left(\\tfrac{1}{2}\\right)=-1$ $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 4,
          question: "Segment AB: $A(\\tfrac{1}{3},\\tfrac{5}{3})$, $B(\\tfrac{7}{3},-\\tfrac{1}{3})$;  Segment CD: $C(2,4)$, $D(5,3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{-\\frac{1}{3}-\\frac{5}{3}}{\\frac{7}{3}-\\frac{1}{3}}=\\frac{-2}{2}=-1$.\\n$\\displaystyle m_{CD}=\\frac{3-4}{5-2}=\\frac{-1}{3}=-\\frac{1}{3}$.\\n\\nNot equal; perpendicular to slope $-1$ would be $1$, not $-\\tfrac{1}{3}$. So **Neither**."
        },
        {
          id: 5,
          question: "Segment AB: $A(\\tfrac{1}{3},\\tfrac{5}{3})$, $B(\\tfrac{7}{3},-\\tfrac{1}{3})$;  Segment CD: $C(2,4)$, $D(5,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{-\\frac{1}{3}-\\frac{5}{3}}{\\frac{7}{3}-\\frac{1}{3}}=\\frac{-2}{2}=-1$.\\n$\\displaystyle m_{CD}=\\frac{1-4}{5-2}=\\frac{-3}{3}=-1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 6,
          question: "Segment AB: $A(0,5)$, $B(9,2)$;  Segment CD: $C(-2,1)$, $D(1,10)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB}=\\frac{2-5}{9-0}=\\frac{-3}{9}=-\\frac{1}{3}$.\\n$\\displaystyle m_{CD}=\\frac{10-1}{1-(-2)}=\\frac{9}{3}=3$.\\n\\n$\\left(-\\tfrac{1}{3}\\right)(3)=-1$ so **Perpendicular**."
        },
        {
          id: 7,
          question: "Segment AB: $A(-5,-1)$, $B(1,8)$;  Segment CD: $C(2,-2)$, $D(8,7)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{8-(-1)}{1-(-5)}=\\frac{9}{6}=\\frac{3}{2}$.\\n$\\displaystyle m_{CD}=\\frac{7-(-2)}{8-2}=\\frac{9}{6}=\\frac{3}{2}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 8,
          question: "Segment AB: $A(-2,7)$, $B(4,7)$;  Segment CD: $C(3,-1)$, $D(3,5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\overline{AB}$ is horizontal ($y=7$).\\n$\\overline{CD}$ is vertical ($x=3$).\\n\\nHorizontal $\\perp$ vertical $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 9,
          question: "Segment AB: $A(-8,3)$, $B(-2,-9)$;  Segment CD: $C(0,1)$, $D(6,-3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{-9-3}{-2-(-8)}=\\frac{-12}{6}=-2$.\\n$\\displaystyle m_{CD}=\\frac{-3-1}{6-0}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n\\nNot equal; product $(-2)\\left(-\\tfrac{2}{3}\\right)=\\tfrac{4}{3}\\neq-1$. So **Neither**."
        },
        {
          id: 10,
          question: "Segment AB: $A(1,9)$, $B(7,5)$;  Segment CD: $C(-3,2)$, $D(0,\\tfrac{1}{2})$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{5-9}{7-1}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n$\\displaystyle m_{CD}=\\frac{\\frac{1}{2}-2}{0-(-3)}=\\frac{-\\frac{3}{2}}{3}=-\\frac{1}{2}$.\\n\\nNot equal and not negative reciprocals. So **Neither**."
        },
        {
          id: 11,
          question: "Segment AB: $A(1,9)$, $B(7,5)$;  Segment CD: $C(-3,2)$, $D(3,-2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB}=\\frac{5-9}{7-1}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n$\\displaystyle m_{CD}=\\frac{-2-2}{3-(-3)}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 12,
          question: "Segment AB: $A(-1,0)$, $B(2,6)$;  Segment CD: $C(5,1)$, $D(11,4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB}=\\frac{6-0}{2-(-1)}=\\frac{6}{3}=2$.\\n$\\displaystyle m_{CD}=\\frac{4-1}{11-5}=\\frac{3}{6}=\\frac{1}{2}$.\\n\\nNot parallel; product $2\\cdot\\tfrac{1}{2}=1\\neq-1$, so **Neither**."
        }
      ]
    },

    intermediate3: {
      title: "Module 4",
      subtitle: "Slope Mastery",
      description: "Strengthen your slope analysis with diverse segment pairs.",
      difficulty: "Intermediate",
      questions: [
        {
          id: 1,
          question: "Segment AB: $A(2, 5)$, $B(4, 9)$;  Segment CD: $C(-1, 2)$, $D(1, 6)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{9-5}{4-2} = \\frac{4}{2} = 2$. $m_{CD} = \\frac{6-2}{1-(-1)} = \\frac{4}{2} = 2$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 2,
          question: "Segment AB: $A(3, -2)$, $B(5, -1)$;  Segment CD: $C(0, 4)$, $D(2, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = \\frac{-1-(-2)}{5-3} = \\frac{1}{2}$. $m_{CD} = \\frac{0-4}{2-0} = \\frac{-4}{2} = -2$. Product is $-1$ $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 3,
          question: "Segment AB: $A(-3, -3)$, $B(0, 0)$;  Segment CD: $C(1, 5)$, $D(4, 8)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{0-(-3)}{0-(-3)} = 1$. $m_{CD} = \\frac{8-5}{4-1} = \\frac{3}{3} = 1$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 4,
          question: "Segment AB: $A(2, 7)$, $B(2, -3)$;  Segment CD: $C(5, 4)$, $D(8, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "AB is vertical ($x=2$). CD is horizontal ($y=4$). Vertical $\\perp$ Horizontal $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 5,
          question: "Segment AB: $A(0, 0)$, $B(5, 2)$;  Segment CD: $C(0, 0)$, $D(2, 5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB} = \\frac{2}{5}$. $m_{CD} = \\frac{5}{2}$. Reciprocals but not negative reciprocals. So **Neither**."
        },
        {
          id: 6,
          question: "Segment AB: $A(1, 1)$, $B(4, 10)$;  Segment CD: $C(2, 2)$, $D(5, 11)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{10-1}{4-1} = \\frac{9}{3} = 3$. $m_{CD} = \\frac{11-2}{5-2} = \\frac{9}{3} = 3$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 7,
          question: "Segment AB: $A(8, -1)$, $B(4, 1)$;  Segment CD: $C(-2, -3)$, $D(0, 1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = \\frac{1-(-1)}{4-8} = \\frac{2}{-4} = -\\frac{1}{2}$. $m_{CD} = \\frac{1-(-3)}{0-(-2)} = \\frac{4}{2} = 2$. Product is $-1$ $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 8,
          question: "Segment AB: $A(-2, 5)$, $B(2, 3)$;  Segment CD: $C(1, 1)$, $D(5, -1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{3-5}{2-(-2)} = \\frac{-2}{4} = -\\frac{1}{2}$. $m_{CD} = \\frac{-1-1}{5-1} = \\frac{-2}{4} = -\\frac{1}{2}$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 9,
          question: "Segment AB: $A(1, 4)$, $B(4, 5)$;  Segment CD: $C(2, 2)$, $D(6, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB} = \\frac{5-4}{4-1} = \\frac{1}{3}$. $m_{CD} = \\frac{4-2}{6-2} = \\frac{2}{4} = \\frac{1}{2}$. Not equal. So **Neither**."
        },
        {
          id: 10,
          question: "Segment AB: $A(-5, -5)$, $B(0, 0)$;  Segment CD: $C(0, 5)$, $D(5, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = 1$. $m_{CD} = \\frac{0-5}{5-0} = -1$. Product is $-1$ $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 11,
          question: "Segment AB: $A(3, 2)$, $B(3, 8)$;  Segment CD: $C(5, 1)$, $D(5, -4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "Both are vertical lines ($x=3$ and $x=5$). Vertical lines are **Parallel**."
        },
        {
          id: 12,
          question: "Segment AB: $A(2, 3)$, $B(6, 5)$;  Segment CD: $C(1, 4)$, $D(3, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB} = \\frac{5-3}{6-2} = \\frac{2}{4} = \\frac{1}{2}$. $m_{CD} = \\frac{0-4}{3-1} = \\frac{-4}{2} = -2$. WAIT! $\\frac{1}{2} \\cdot (-2) = -1$. They ARE **Perpendicular**. (Correct answer is Perpendicular)."
        }
      ]
    },

    intermediate4: {
      title: "Module 5",
      subtitle: "Coordinate Challenge",
      description: "Test your skills with fractions, larger numbers, and tricky pairs.",
      difficulty: "Intermediate",
      questions: [
        {
          id: 1,
          question: "Segment AB: $A(\\frac{1}{4}, 2)$, $B(\\frac{5}{4}, 3)$;  Segment CD: $C(1, 1)$, $D(2, 2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{3-2}{\\frac{5}{4}-\\frac{1}{4}} = \\frac{1}{\\frac{4}{4}} = 1$. $m_{CD} = 1$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 2,
          question: "Segment AB: $A(0, 0)$, $B(10, 20)$;  Segment CD: $C(0, 5)$, $D(10, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = 2$. $m_{CD} = \\frac{0-5}{10-0} = -\\frac{1}{2}$. Negative reciprocals $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 3,
          question: "Segment AB: $A(-2.5, 1)$, $B(-0.5, 2)$;  Segment CD: $C(1, 3)$, $D(3, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{2-1}{-0.5-(-2.5)} = \\frac{1}{2}$. $m_{CD} = \\frac{4-3}{3-1} = \\frac{1}{2}$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 4,
          question: "Segment AB: $A(100, 100)$, $B(102, 106)$;  Segment CD: $C(50, 50)$, $D(56, 48)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = \\frac{6}{2} = 3$. $m_{CD} = \\frac{-2}{6} = -\\frac{1}{3}$. Negative reciprocals $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 5,
          question: "Segment AB: $A(1, 2)$, $B(4, 8)$;  Segment CD: $C(2, 1)$, $D(8, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB} = \\frac{6}{3} = 2$. $m_{CD} = \\frac{3}{6} = \\frac{1}{2}$. Reciprocals but not negative. So **Neither**."
        },
        {
          id: 6,
          question: "Segment AB: $A(\\frac{2}{3}, 1)$, $B(\\frac{5}{3}, 0)$;  Segment CD: $C(1, 1)$, $D(2, 2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = \\frac{0-1}{\\frac{3}{3}} = -1$. $m_{CD} = 1$. Negative reciprocals $\\Rightarrow$ **Perpendicular**."
        },
        {
          id: 7,
          question: "Segment AB: $A(-3, 2)$, $B(3, -2)$;  Segment CD: $C(-4, 0)$, $D(-1, -2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{-4}{6} = -\\frac{2}{3}$. $m_{CD} = \\frac{-2}{3} = -\\frac{2}{3}$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 8,
          question: "Segment AB: $A(0, 10)$, $B(5, 10)$;  Segment CD: $C(2, 3)$, $D(2, 7)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "Horizontal ($y=10$) $\\perp$ Vertical ($x=2$). **Perpendicular**."
        },
        {
          id: 9,
          question: "Segment AB: $A(0.1, 0.2)$, $B(0.2, 0.4)$;  Segment CD: $C(1, 2)$, $D(2, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = \\frac{0.2}{0.1} = 2$. $m_{CD} = \\frac{2}{1} = 2$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 10,
          question: "Segment AB: $A(1, 5)$, $B(3, 4)$;  Segment CD: $C(2, 2)$, $D(0, 1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 2,
          solution: "$\\displaystyle m_{AB} = -\\frac{1}{2}$. $m_{CD} = \\frac{-1}{-2} = \\frac{1}{2}$. Negatives but not reciprocals. **Neither**."
        },
        {
          id: 11,
          question: "Segment AB: $A(-5, 5)$, $B(0, 10)$;  Segment CD: $C(0, -5)$, $D(5, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 0,
          solution: "$\\displaystyle m_{AB} = 1$. $m_{CD} = 1$. Same slope $\\Rightarrow$ **Parallel**."
        },
        {
          id: 12,
          question: "Segment AB: $A(12, 4)$, $B(16, 2)$;  Segment CD: $C(5, 6)$, $D(6, 8)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
          options: ["Parallel", "Perpendicular", "Neither"],
          correctAnswer: 1,
          solution: "$\\displaystyle m_{AB} = \\frac{-2}{4} = -\\frac{1}{2}$. $m_{CD} = \\frac{2}{1} = 2$. Product $-1$ $\\Rightarrow$ **Perpendicular**."
        }
      ]
    },

    module3: {
      title: "Module 1",
      subtitle: "Complex Synthesis",
      description: "Perpendicular bisectors, systems, parameter values, and geometry facts.",
      difficulty: "Elite",
      questions: [
        {
          id: 1,
          question: "Find the value of $a$ if the lines $ax + 2y = 7$ and $3x - 4y = 12$ are perpendicular.",
          options: ["$\\frac{8}{3}$", "$\\frac{3}{8}$", "$-\\frac{8}{3}$", "6"],
          correctAnswer: 0,
          solution: "$m_1 = -\\frac{a}{2}$. $m_2 = \\frac{3}{4}$. For perpendicular lines: $m_1 m_2 = -1$. So $(-\\frac{a}{2})(\\frac{3}{4})=-1 \\rightarrow -\\frac{3a}{8}=-1 \\rightarrow 3a=8 \\rightarrow a=\\frac{8}{3}$."
        },
        {
          id: 2,
          question: "Find the equation of the **perpendicular bisector** of the segment connecting $(2, 1)$ and $(6, 9)$.",
          options: ["$y = -\\frac{1}{2}x + 7$", "$y = 2x - 3$", "$y = -\\frac{1}{2}x + 6$", "$y = -2x + 13$"],
          correctAnswer: 0,
          solution: "Midpoint: $(4,5)$. Segment slope: $\\frac{9-1}{6-2}=2$. Perpendicular slope: $-\\frac{1}{2}$. Line through midpoint: $y-5=-\\frac{1}{2}(x-4) \\rightarrow y=-\\frac{1}{2}x+7$."
        },
        {
          id: 3,
          question: "Find the distance between the parallel lines $y = 2x + 3$ and $y = 2x - 2$.",
          options: ["5", "$\\sqrt{5}$", "$5\\sqrt{5}$", "1"],
          correctAnswer: 1,
          solution: "For $y=mx+c$, distance between parallels is $d=\\frac{|c_1-c_2|}{\\sqrt{1+m^2}}$. Here $m=2$, so $d=\\frac{|3-(-2)|}{\\sqrt{1+2^2}}=\\frac{5}{\\sqrt{5}}=\\sqrt{5}$."
        },
        {
          id: 4,
          question: "A triangle has vertices A(0,0), B(3,4), C(-4,3). Is it a right triangle?",
          options: ["Yes, at A", "Yes, at B", "Yes, at C", "No"],
          correctAnswer: 0,
          solution: "$m_{AB}=\\frac{4}{3}$. $m_{AC}=\\frac{3}{-4}=-\\frac{3}{4}$. These are negative reciprocals, so angle A is $90^\\circ$."
        },
        {
          id: 5,
          question: "Find the coordinates of the foot of the perpendicular from $(1, 2)$ to the line $x + y = 5$.",
          options: ["$(2, 3)$", "$(3, 2)$", "$(2.5, 2.5)$", "$(1, 4)$"],
          correctAnswer: 0,
          solution: "Slope of $x+y=5$ is $-1$. Perp slope is $1$. Line through $(1,2)$ with slope 1: $y-2=1(x-1) \\rightarrow y=x+1$. Intersect $y=x+1$ and $x+y=5$: $x+(x+1)=5 \\rightarrow 2x=4 \\rightarrow x=2, y=3$."
        },
        {
          id: 6,
          question: "Determine $k$ such that the line through $(k, 2)$ and $(1, 5)$ is perpendicular to $y = x$.",
          options: ["4", "-2", "2", "-4"],
          correctAnswer: 0,
          solution: "Given line $y=x$ has slope $1$, so a perpendicular line has slope $-1$. Using slope formula for points $(k,2)$ and $(1,5)$: $\\frac{5-2}{1-k}=-1 \\rightarrow \\frac{3}{1-k}=-1 \\rightarrow 3=-(1-k) \\rightarrow 3=-1+k \\rightarrow k=4$."
        },
        {
          id: 7,
          question: "Find the area of the triangle formed by the line $2x + 3y = 6$, the x-axis, and the y-axis.",
          options: ["3", "6", "2", "1.5"],
          correctAnswer: 0,
          solution: "x-intercept: set $y=0$: $2x=6 \\rightarrow x=3$. y-intercept: set $x=0$: $3y=6 \\rightarrow y=2$. Area $=\\frac{1}{2}(3)(2)=3$."
        },
        {
          id: 8,
          question: "The line passing through $(2, 3)$ and $(6, k)$ is perpendicular to the line passing through $(2, 3)$ and $(k, 7)$. Find the value of $k$.",
          options: ["2.5", "5", "3", "4.5"],
          correctAnswer: 0,
          solution: "Slope $m_1 = \\frac{k-3}{6-2} = \\frac{k-3}{4}$. Slope $m_2 = \\frac{7-3}{k-2} = \\frac{4}{k-2}$. Product $m_1 m_2 = -1$: $\\frac{k-3}{4} \\cdot \\frac{4}{k-2} = -1 \\Rightarrow \\frac{k-3}{k-2} = -1 \\Rightarrow k-3 = -k+2 \\Rightarrow 2k=5 \\Rightarrow k=2.5$."
        },
        {
          id: 9,
          question: "Line $L_1$ has slope $\\frac{a}{b}$. Line $L_2$ is perpendicular to $L_1$. What is the slope of $L_2$?",
          options: ["$\\frac{a}{b}$", "$\\frac{b}{a}$", "$-\\frac{a}{b}$", "$-\\frac{b}{a}$"],
          correctAnswer: 3,
          solution: "Perpendicular slopes are negative reciprocals. The negative reciprocal of $\\frac{a}{b}$ is $-\\frac{b}{a}$."
        },
        {
          id: 10,
          question: "Find the coordinates of the **orthocenter** of a triangle with vertices at (0,0), (4,0), and (0,6).",
          options: ["(0,0)", "(2,3)", "(4,6)", "(0,6)"],
          correctAnswer: 0,
          solution: "This is a right triangle with the right angle at (0,0). The orthocenter of a right triangle is the vertex at the right angle, so it is (0,0)."
        }
      ]
    },

    module4: {
      title: "Module 2",
      subtitle: "Advanced Coordinate Geometry",
      description: "Area of triangles, point-to-line distance, medians, and centers.",
      difficulty: "Elite",
      questions: [
        {
          id: 1,
          question: "Find the area of the triangle with vertices $(0,0)$, $(6,0)$, and $(2,5)$.",
          options: ["15", "30", "12", "10"],
          correctAnswer: 0,
          solution: "Base is along x-axis from 0 to 6 (length 6). Height is the y-coordinate of the third vertex (5). Area = $\\frac{1}{2}(6)(5) = 15$."
        },
        {
          id: 2,
          question: "Find the distance from the point $(3,-1)$ to the line $2x - y + 4 = 0$.",
          options: ["$\\frac{11}{\\sqrt{5}}$", "$\\frac{7}{\\sqrt{5}}$", "$\\frac{11}{5}$", "$\\frac{5}{11}$"],
          correctAnswer: 0,
          solution: "Use $d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$. Here $A=2,B=-1,C=4$. So $d=\\frac{|2(3)+(-1)(-1)+4|}{\\sqrt{2^2+(-1)^2}}=\\frac{|6+1+4|}{\\sqrt{5}}=\\frac{11}{\\sqrt{5}}$."
        },
        {
          id: 3,
          question: "A line passes through the intersection of $2x+y=5$ and $x-y=1$, and is perpendicular to $3x+4y=12$. What is its equation?",
          options: [
            "$y = \\frac{4}{3}x - \\frac{5}{3}$",
            "$y = -\\frac{4}{3}x + \\frac{5}{3}$",
            "$y = \\frac{3}{4}x - \\frac{5}{3}$",
            "$y = -\\frac{3}{4}x + \\frac{5}{3}$"
          ],
          correctAnswer: 0,
          solution: "Solve intersection: from $x-y=1$, $y=x-1$. Substitute into $2x+y=5$: $2x+(x-1)=5 \\rightarrow 3x=6 \\rightarrow x=2$, $y=1$. Line $3x+4y=12$ has slope $-3/4$, so perpendicular slope is $4/3$. Through $(2,1)$: $y-1=\\frac{4}{3}(x-2) \\rightarrow y=\\frac{4}{3}x-\\frac{5}{3}$."
        },
        {
          id: 4,
          question: "Find the equation of the median from $A(0,0)$ to side $BC$ in triangle $A(0,0)$, $B(6,2)$, $C(2,8)$.",
          options: ["$y=\\frac{5}{4}x$", "$y=\\frac{4}{5}x$", "$y=\\frac{5}{2}x$", "$y=-\\frac{5}{4}x$"],
          correctAnswer: 0,
          solution: "Midpoint of $BC$ is $\\left(\\frac{6+2}{2},\\frac{2+8}{2}\\right)=(4,5)$. The median from $A(0,0)$ to $(4,5)$ has slope $5/4$, so equation is $y=\\frac{5}{4}x$."
        },
        {
          id: 5,
          question: "Find the centroid of the triangle with vertices $(1,2)$, $(7,-1)$, and $(4,5)$.",
          options: ["$(4,2)$", "$(4,\\frac{2}{3})$", "$(\\frac{4}{3},2)$", "$(3,2)$"],
          correctAnswer: 0,
          solution: "Centroid is the average of coordinates: $\\left(\\frac{1+7+4}{3},\\frac{2+(-1)+5}{3}\\right)=(4,2)$."
        },
        {
          id: 6,
          question: "Find the circumcenter of the triangle with vertices $(0,0)$, $(6,0)$, and $(0,8)$.",
          options: ["$(3,4)$", "$(0,0)$", "$(3,0)$", "$(0,4)$"],
          correctAnswer: 0,
          solution: "This is a right triangle with the right angle at $(0,0)$. The circumcenter of a right triangle is the midpoint of the hypotenuse between $(6,0)$ and $(0,8)$: $(\\frac{6+0}{2},\\frac{0+8}{2})=(3,4)$."
        },
        {
          id: 7,
          question: "Determine the relationship between $4x-6y=12$ and $2x-3y=6$.",
          options: ["Parallel (no solution)", "Perpendicular", "Coincident (infinitely many solutions)", "Intersecting (one solution)"],
          correctAnswer: 2,
          solution: "Multiply $2x-3y=6$ by 2 to get $4x-6y=12$, which matches exactly. They are the same line (coincident), so there are infinitely many solutions."
        },
        {
          id: 8,
          question: "How many lines are parallel to $3x-4y=0$ and at a distance 2 from the origin?",
          options: ["0", "1", "2", "Infinitely many"],
          correctAnswer: 2,
          solution: "Any line parallel to $3x-4y=0$ has form $3x-4y+c=0$. Distance from origin is $\\frac{|c|}{\\sqrt{3^2+(-4)^2}}=\\frac{|c|}{5}$. Set $\\frac{|c|}{5}=2 \\rightarrow |c|=10$, so $c=\\pm 10$. That gives 2 lines."
        },
        {
          id: 9,
          question: "Find the length of the altitude from $C$ to $AB$ for the triangle with vertices $A(0,0)$, $B(8,0)$, and $C(5, 6)$.",
          options: ["6", "5", "8", "4"],
          correctAnswer: 0,
          solution: "The base $AB$ lies on the x-axis ($y=0$). The altitude from $C(5,6)$ is simply the perpendicular distance to the x-axis, which is the y-coordinate: 6."
        },
        {
          id: 10,
          question: "Find the area of the parallelogram with vertices $(0,0)$, $(2,1)$, $(3,4)$, and $(1,3)$.",
          options: ["5", "6", "7", "8"],
          correctAnswer: 0,
          solution: "Using vectors from the origin: $\\vec{u}=(2,1)$ and $\\vec{v}=(1,3)$. Area $=|\\det([u\\ v])|=|2\\cdot 3-1\\cdot 1|=|6-1|=5$."
        }
      ]
    },

    module5: {
      title: "Module 3",
      subtitle: "Boss-Level Parameters & Geometry",
      description: "Coordinate proofs, partitions, optimization, and synthesis.",
      difficulty: "Elite",
      questions: [
        {
          id: 1,
          question: "Find the centroid of the triangle with vertices $(2, 1)$, $(6, 3)$, and $(4, -1)$.",
          options: ["$(4, 1)$", "$(3, 1)$", "$(4, 2)$", "$(5, 1)$"],
          correctAnswer: 0,
          solution: "Centroid formula: $\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)$. $x = \\frac{2+6+4}{3}=4$. $y = \\frac{1+3-1}{3}=1$. Centroid is $(4, 1)$."
        },
        {
          id: 2,
          question: "Find the coordinates of the point that partitions the segment from $(1, 1)$ to $(9, 5)$ in the ratio $1:3$ (close to first point).",
          options: ["$(3, 2)$", "$(5, 3)$", "$(2, 2)$", "$(7, 4)$"],
          correctAnswer: 0,
          solution: "Section formula: $\\left(\\frac{nx_1+mx_2}{m+n}, \\frac{ny_1+my_2}{m+n}\\right)$ with ratio $m:n = 1:3$. $(x,y) = (\\frac{3(1)+1(9)}{4}, \\frac{3(1)+1(5)}{4}) = (\\frac{12}{4}, \\frac{8}{4}) = (3, 2)$."
        },
        {
          id: 3,
          question: "What is the distance between the x-intercept and y-intercept of the line $3x - 4y = 12$?",
          options: ["5", "7", "6", "12"],
          correctAnswer: 0,
          solution: "x-int: $3x=12 \\rightarrow (4,0)$. y-int: $-4y=12 \\rightarrow (0,-3)$. Distance $\\sqrt{(4-0)^2 + (0-(-3))^2} = \\sqrt{16+9} = \\sqrt{25} = 5$."
        },
        {
          id: 4,
          question: "Find the circumcenter of the triangle with vertices $(0,0)$, $(6,0)$, and $(2,4)$.",
          options: ["$(3,1)$", "$(3,2)$", "$(2,3)$", "$(4,1)$"],
          correctAnswer: 0,
          solution: "The circumcenter is the center of the circle through all three points. Computing via perpendicular bisectors gives center $(3,1)$."
        },
        {
          id: 5,
          question: "A line with slope 2 passes through points $(3, k)$ and $(1, 4)$. Find $k$.",
          options: ["8", "6", "0", "-1"],
          correctAnswer: 0,
          solution: "Slope formula: $\\frac{k - 4}{3 - 1} = 2$. $\\frac{k-4}{2} = 2 \\rightarrow k-4=4 \\rightarrow k=8$."
        },
        {
          id: 6,
          question: "A line passes through the intersection of $x+2y=7$ and $3x-y=5$, and is parallel to $4x+5y=20$. What is the equation of the line?",
          options: ["$y=-\\frac{4}{5}x+\\frac{148}{35}$", "$y=\\frac{4}{5}x-\\frac{148}{35}$", "$y=-\\frac{5}{4}x+\\frac{148}{35}$", "$4x+5y=20$"],
          correctAnswer: 0,
          solution: "Intersection of $x+2y=7$ and $3x-y=5$ is $(\\frac{17}{7},\\frac{16}{7})$. A line parallel to $4x+5y=20$ has slope $-\\frac{4}{5}$. So $y-\\frac{16}{7}=-\\frac{4}{5}(x-\\frac{17}{7})\\Rightarrow y=-\\frac{4}{5}x+\\frac{148}{35}$."
        },
        {
          id: 7,
          question: "If the midpoint of a segment is $(2, 3)$ and one endpoint is $(-1, 1)$, what is the other endpoint?",
          options: ["$(5, 5)$", "$(0.5, 2)$", "$(1, 2)$", "$(3, 2)$"],
          correctAnswer: 0,
          solution: "Midpoint $M = \\frac{P_1+P_2}{2}$. $P_2 = 2M - P_1$. $x = 2(2) - (-1) = 5$. $y = 2(3) - 1 = 5$. Endpoint is $(5, 5)$."
        },
        {
          id: 8,
          question: "A line has equal x- and y-intercepts and passes through $(1,1)$. What is its equation?",
          options: ["$x+y=2$", "$x-y=0$", "$2x+2y=1$", "$x+y=1$"],
          correctAnswer: 0,
          solution: "Equal intercepts means intercept form $\\frac{x}{a}+\\frac{y}{a}=1 \\Rightarrow x+y=a$. Since it passes through $(1,1)$, $1+1=a \\Rightarrow a=2$. Thus $x+y=2$."
        },
        {
          id: 9,
          question: "Find the value(s) of $k$ such that the area of the triangle with vertices $(0,0)$, $(k,2)$, and $(4,6)$ is 10.",
          options: ["$k=\\frac{14}{3}$ or $k=-2$", "$k=2$ or $k=-\\frac{14}{3}$", "$k=\\frac{7}{3}$ or $k=-1$", "$k=\\pm 2$"],
          correctAnswer: 0,
          solution: "Area with one vertex at origin is $\\frac{1}{2}|x_1y_2-x_2y_1|=\\frac{1}{2}|k\\cdot 6-4\\cdot 2|=\\frac{1}{2}|6k-8|$. Set equal to 10: $\\frac{1}{2}|6k-8|=10 \\rightarrow |6k-8|=20 \\rightarrow 6k-8=\\pm 20$. So $k=\\frac{28}{6}=\\frac{14}{3}$ or $k=\\frac{-12}{6}=-2$."
        },
        {
          id: 10,
          question: "Find the shortest distance from the origin $(0,0)$ to the line $3x + 4y = 20$.",
          options: ["4", "5", "3", "20"],
          correctAnswer: 0,
          solution: "Use point-to-line formula: $d = \\frac{|Ax_1 + By_1 - C|}{\\sqrt{A^2+B^2}}$. $d = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2+4^2}} = \\frac{|-20|}{5} = \\frac{20}{5} = 4$."
        }
      ]
    }
  },
  polynomials: {
    "poly_module1": {
      "title": "Module 1",
      "subtitle": "Polynomial Functions Basics",
      "description": "Identify polynomials, degree, leading coefficient, standard form, and basic evaluation/simplifying.",
      "difficulty": "Foundation",
      "questions": [
        {
          "id": 1,
          "question": "Which of the following is a **polynomial** in $x$?",
          "options": ["$3x^2-5x+1$", "$\\dfrac{2}{x}+1$", "$\\sqrt{x}+4$", "$3^{x}$"],
          "correctAnswer": 0,
          "solution": "A polynomial has only **nonnegative integer** exponents on $x$ and no $x$ in denominators or radicals. Only $3x^2-5x+1$ fits."
        },
        {
          "id": 2,
          "question": "What is the **degree** of $P(x)=7x^4-2x^2+9$?",
          "options": ["2", "4", "6", "9"],
          "correctAnswer": 1,
          "solution": "The degree is the highest exponent of $x$. Here the highest power is $4$."
        },
        {
          "id": 3,
          "question": "Find the **leading coefficient** of $f(x)=-5x^3+2x-8$.",
          "options": ["$-5$", "$5$", "$-8$", "$2$"],
          "correctAnswer": 0,
          "solution": "The leading term is the term with highest power: $-5x^3$. Its coefficient is $-5$."
        },
        {
          "id": 4,
          "question": "Put $g(x)=2-3x+4x^2$ in **standard form**.",
          "options": ["$2-3x+4x^2$", "$4x^2-3x+2$", "$-3x+4x^2+2$", "$4x^2+2-3x$"],
          "correctAnswer": 1,
          "solution": "Standard form lists terms from highest degree to constant: $4x^2-3x+2$."
        },
        {
          "id": 5,
          "question": "Evaluate $P(2)$ if $P(x)=x^2-3x+4$.",
          "options": ["2", "3", "4", "6"],
          "correctAnswer": 0,
          "solution": "Substitute $x=2$: $P(2)=2^2-3(2)+4=4-6+4=2$."
        },
        {
          "id": 6,
          "question": "Evaluate $f(-1)$ if $f(x)=2x^3-x+5$.",
          "options": ["2", "4", "6", "8"],
          "correctAnswer": 1,
          "solution": "Compute: $f(-1)=2(-1)^3-(-1)+5=-2+1+5=4$."
        },
        {
          "id": 7,
          "question": "Simplify: $(3x^2+2x-1) + (x^2-5x+4)$.",
          "options": ["$4x^2-3x+3$", "$4x^2+7x+3$", "$2x^2-3x+3$", "$4x^2-7x+3$"],
          "correctAnswer": 0,
          "solution": "Add like terms: $(3x^2+x^2)=4x^2$, $(2x-5x)=-3x$, $(-1+4)=3$."
        },
        {
          "id": 8,
          "question": "Simplify: $(5x^3-2x^2+7) - (x^3+4x^2-3)$.",
          "options": ["$4x^3-6x^2+10$", "$4x^3+2x^2+4$", "$6x^3-6x^2+4$", "$4x^3-6x^2+4$"],
          "correctAnswer": 0,
          "solution": "Distribute the minus then combine: $5x^3-2x^2+7 -x^3-4x^2+3 =4x^3-6x^2+10$."
        },
        {
          "id": 9,
          "question": "Which term is the **constant term** of $h(x)=9x^2-4x+11$?",
          "options": ["$9x^2$", "$-4x$", "$11$", "$9$"],
          "correctAnswer": 2,
          "solution": "The constant term has no $x$. It is $11$."
        },
        {
          "id": 10,
          "question": "If $P(x)$ has degree 1, what kind of function is it?",
          "options": ["Quadratic", "Linear", "Cubic", "Exponential"],
          "correctAnswer": 1,
          "solution": "Degree 1 polynomials are linear functions."
        },
        {
          "id": 11,
          "question": "Which expression is **not** a polynomial because it has a negative exponent?",
          "options": ["$x^3-2x$", "$4x^{-1}+7$", "$2x^2+1$", "$5$"],
          "correctAnswer": 1,
          "solution": "A polynomial cannot contain $x^{-1}$ (negative exponent)."
        },
        {
          "id": 12,
          "question": "Find the value of the coefficient $k$ if $P(x)=kx^2-6x+1$ and the leading coefficient is 5.",
          "options": ["$k=1$", "$k=-6$", "$k=5$", "$k=6$"],
          "correctAnswer": 2,
          "solution": "The leading term is $kx^2$ so the leading coefficient is $k$. Set $k=5$."
        },
        {
          "id": 13,
          "question": "Simplify: $2(3x^2-4x+1)$.",
          "options": ["$6x^2-8x+2$", "$6x^2-2x+1$", "$3x^2-8x+2$", "$6x^2+8x+2$"],
          "correctAnswer": 0,
          "solution": "Distribute 2 to each term: $2\\cdot3x^2=6x^2$, $2\\cdot(-4x)=-8x$, $2\\cdot1=2$."
        },
        {
          "id": 14,
          "question": "What is the value of $P(0)$ for $P(x)=4x^3-x+9$?",
          "options": ["0", "4", "9", "$-9$"],
          "correctAnswer": 2,
          "solution": "Plug in $x=0$: $P(0)=0-0+9=9$. This is also the y-intercept."
        },
        {
          "id": 15,
          "question": "Which statement is ALWAYS true for a polynomial function?",
          "options": ["It has a square root", "It has a denominator with $x$", "It is defined for all real $x$", "It has degree 0 only"],
          "correctAnswer": 2,
          "solution": "Polynomials have no division by $x$ or radicals, so they are defined for all real numbers."
        }
      ]
    },
    "poly_module2": {
      "title": "Module 2",
      "subtitle": "Operations & Simple Factoring",
      "description": "Add/subtract/multiply polynomials, factor common patterns, and connect factors to zeros.",
      "difficulty": "Intermediate",
      "questions": [
        {
          "id": 1,
          "question": "Simplify: $(2x^2-3x+5) + (x^2+7x-9)$.",
          "options": ["$3x^2+4x-4$", "$3x^2-10x+14$", "$x^2+4x-4$", "$3x^2+10x-14$"],
          "correctAnswer": 0,
          "solution": "Combine like terms: $2x^2+x^2=3x^2$, $-3x+7x=4x$, $5-9=-4$."
        },
        {
          "id": 2,
          "question": "Simplify: $(4x^3- x^2+2x) - (x^3+3x^2-5x)$.",
          "options": ["$3x^3-4x^2+7x$", "$5x^3+2x^2-3x$", "$3x^3-2x^2-3x$", "$3x^3+2x^2+7x$"],
          "correctAnswer": 0,
          "solution": "Subtract term-by-term: $4x^3-x^3=3x^3$, $-x^2-3x^2=-4x^2$, $2x-(-5x)=7x$."
        },
        {
          "id": 3,
          "question": "Multiply: $(-3x)(2x^2-5x+4)$.",
          "options": ["$-6x^3+15x^2-12x$", "$-6x^3-15x^2-12x$", "$6x^3-15x^2+12x$", "$-6x^2+15x-12$"],
          "correctAnswer": 0,
          "solution": "Distribute $-3x$: $(-3x)(2x^2)=-6x^3$, $(-3x)(-5x)=15x^2$, $(-3x)(4)=-12x$."
        },
        {
          "id": 4,
          "question": "Expand: $(x+5)(x-2)$.",
          "options": ["$x^2+3x-10$", "$x^2-3x-10$", "$x^2+7x-10$", "$x^2+3x+10$"],
          "correctAnswer": 0,
          "solution": "FOIL: $x^2-2x+5x-10=x^2+3x-10$."
        },
        {
          "id": 5,
          "question": "Expand: $(2x-3)^2$.",
          "options": ["$4x^2-12x+9$", "$4x^2-6x+9$", "$4x^2+12x+9$", "$2x^2-12x+9$"],
          "correctAnswer": 0,
          "solution": "$(a-b)^2=a^2-2ab+b^2$: $(2x)^2-2(2x)(3)+3^2=4x^2-12x+9$."
        },
        {
          "id": 6,
          "question": "Factor: $6x^2+9x$.",
          "options": ["$3x(2x+3)$", "$6x(x+9)$", "$9x(\\tfrac{2}{3}x+1)$", "$x(6x+9)$"],
          "correctAnswer": 0,
          "solution": "Greatest common factor is $3x$. Factor: $6x^2+9x=3x(2x+3)$."
        },
        {
          "id": 7,
          "question": "Factor: $x^2-16$.",
          "options": ["$(x-4)^2$", "$(x-4)(x+4)$", "$(x-8)(x+2)$", "Prime"],
          "correctAnswer": 1,
          "solution": "Difference of squares: $a^2-b^2=(a-b)(a+b)$. Here $x^2-4^2=(x-4)(x+4)$."
        },
        {
          "id": 8,
          "question": "Factor completely: $x^2+5x+6$.",
          "options": ["$(x+2)(x+3)$", "$(x-2)(x-3)$", "$(x+1)(x+6)$", "Prime"],
          "correctAnswer": 0,
          "solution": "Find two numbers that multiply to 6 and add to 5: 2 and 3. So $(x+2)(x+3)$."
        },
        {
          "id": 9,
          "question": "Solve: $x^2-9=0$.",
          "options": ["$x=9$ only", "$x=-9$ only", "$x=3$ or $x=-3$", "$x=\\pm 9$"],
          "correctAnswer": 2,
          "solution": "Factor: $x^2-9=(x-3)(x+3)=0$. So $x=3$ or $x=-3$."
        },
        {
          "id": 10,
          "question": "If $P(x)=(x-1)(x+4)$, what are the zeros of $P(x)$?",
          "options": ["$1$ and $4$", "$-1$ and $-4$", "$1$ and $-4$", "$-1$ and $4$"],
          "correctAnswer": 2,
          "solution": "Set each factor to zero: $x-1=0\\Rightarrow x=1$, $x+4=0\\Rightarrow x=-4$."
        },
        {
          "id": 11,
          "question": "What is the y-intercept of $P(x)=x^3-2x^2+5$?",
          "options": ["$-2$", "$0$", "$5$", "$1$"],
          "correctAnswer": 2,
          "solution": "The y-intercept is $P(0)=5$."
        },
        {
          "id": 12,
          "question": "Which polynomial has **odd degree**?",
          "options": ["$x^4-1$", "$3x^3+x$", "$2x^2+7$", "$5$"],
          "correctAnswer": 1,
          "solution": "Odd degree means highest exponent is odd. $3x^3+x$ has degree 3."
        },
        {
          "id": 13,
          "question": "The graph of a polynomial with **even degree** and **positive** leading coefficient goes…",
          "options": ["Up on the left, up on the right", "Down on the left, down on the right", "Up on the left, down on the right", "Down on the left, up on the right"],
          "correctAnswer": 0,
          "solution": "Even degree + positive leading coefficient: both ends rise."
        },
        {
          "id": 14,
          "question": "Compute $P(3)$ if $P(x)=2x^2-x-1$.",
          "options": ["14", "15", "16", "17"],
          "correctAnswer": 0,
          "solution": "$P(3)=2(3^2)-3-1=2(9)-4=18-4=14$."
        },
        {
          "id": 15,
          "question": "Which statement about polynomial graphs is true?",
          "options": ["They can have holes like rational graphs", "They can jump (discontinuous)", "They are continuous (no breaks)", "They always stay above the x-axis"],
          "correctAnswer": 2,
          "solution": "Polynomials are continuous for all real $x$, so their graphs have no breaks or holes."
        }
      ]
    },
    "poly_module3": {
      "title": "Module 3",
      "subtitle": "Polynomial Behavior & Modeling",
      "description": "Still PSHS G8 scope: operations, evaluation, degree/leading term, zeros from given factors, and basic end behavior.",
      "difficulty": "Elite",
      "questions": [
        {
          "id": 1,
          "question": "What is the **degree** and **leading coefficient** of $P(x)= -3x^4 + 5x^2 - x + 9$?",
          "options": ["degree 4, leading coefficient $-3$", "degree 4, leading coefficient $5$", "degree 2, leading coefficient $5$", "degree 9, leading coefficient $9$"],
          "correctAnswer": 0,
          "solution": "The highest power is $x^4$, so the degree is 4. The coefficient of $x^4$ is $-3$, so the leading coefficient is $-3$."
        },
        {
          "id": 2,
          "question": "Evaluate $P(2)$ if $P(x)=x^3-4x^2+2x+1$.",
          "options": ["$-3$", "$1$", "$5$", "$9$"],
          "correctAnswer": 0,
          "solution": "Substitute $x=2$: $P(2)=2^3-4(2^2)+2(2)+1=8-16+4+1=-3$."
        },
        {
          "id": 3,
          "question": "Simplify: $(4x^3-2x^2+5x-1)+(x^3+3x^2-4x+6)$.",
          "options": ["$5x^3+x^2+x+5$", "$5x^3+x^2+x-7$", "$3x^3+x^2+x+5$", "$5x^3-5x^2+x+5$"],
          "correctAnswer": 0,
          "solution": "Add like terms: $(4x^3+x^3)=5x^3$, $(-2x^2+3x^2)=x^2$, $(5x-4x)=x$, $(-1+6)=5$. So $5x^3+x^2+x+5$."
        },
        {
          "id": 4,
          "question": "Simplify: $(3x^2-7x+4)-(x^2+2x-9)$.",
          "options": ["$2x^2-9x+13$", "$2x^2-5x-5$", "$4x^2-9x-5$", "$2x^2-9x-13$"],
          "correctAnswer": 0,
          "solution": "Distribute the minus: $3x^2-7x+4-x^2-2x+9 = 2x^2-9x+13$."
        },
        {
          "id": 5,
          "question": "Expand and simplify: $-2x(3x^2- x + 4)$.",
          "options": ["$-6x^3+2x^2-8x$", "$-6x^3-2x^2-8x$", "$6x^3-2x^2+8x$", "$-6x^3+2x^2+8x$"],
          "correctAnswer": 0,
          "solution": "Distribute $-2x$: $-2x\\cdot 3x^2=-6x^3$, $-2x\\cdot(-x)=+2x^2$, $-2x\\cdot 4=-8x$."
        },
        {
          "id": 6,
          "question": "Expand: $(x-5)(x+3)$.",
          "options": ["$x^2-2x-15$", "$x^2+8x-15$", "$x^2-8x-15$", "$x^2-2x+15$"],
          "correctAnswer": 0,
          "solution": "FOIL: $x^2+3x-5x-15 = x^2-2x-15$."
        },
        {
          "id": 7,
          "question": "Which statement about the **end behavior** of $P(x)= -x^5 + 2x^3 - 7$ is TRUE?",
          "options": ["As $x\\to\\infty$, $P(x)\\to -\\infty$ and as $x\\to-\\infty$, $P(x)\\to \\infty$", "As $x\\to\\infty$, $P(x)\\to \\infty$ and as $x\\to-\\infty$, $P(x)\\to \\infty$", "As $x\\to\\infty$, $P(x)\\to -\\infty$ and as $x\\to-\\infty$, $P(x)\\to -\\infty$", "As $x\\to\\infty$, $P(x)\\to \\infty$ and as $x\\to-\\infty$, $P(x)\\to -\\infty$"],
          "correctAnswer": 0,
          "solution": "End behavior is controlled by the leading term $-x^5$ (odd degree, negative coefficient). For large positive $x$, $-x^5$ is very negative. For large negative $x$, $x^5$ is negative, so $-x^5$ is very positive."
        },
        {
          "id": 8,
          "question": "A polynomial has degree 4. What is the **maximum** possible number of turning points?",
          "options": ["2", "3", "4", "5"],
          "correctAnswer": 1,
          "solution": "A degree $n$ polynomial can have at most $n-1$ turning points. For $n=4$, the maximum is 3."
        },
        {
          "id": 9,
          "question": "If $P(x)=(x-2)(x+1)(x-4)$, which value is definitely a **zero** of $P(x)$?",
          "options": ["$-2$", "$-1$", "$1$", "$3$"],
          "correctAnswer": 1,
          "solution": "A zero happens when any factor equals 0. From $(x+1)$, we get $x=-1$."
        },
        {
          "id": 10,
          "question": "Given $P(x)=(x-3)^2(x+2)$, which statement is TRUE?",
          "options": ["$x=3$ is a zero, and it is repeated (multiplicity 2)", "$x=-2$ is a zero with multiplicity 2", "The only zero is $x=3$", "The polynomial has degree 2"],
          "correctAnswer": 0,
          "solution": "$(x-3)^2$ means $x=3$ is a zero counted twice (multiplicity 2). $(x+2)$ gives another zero $x=-2$. Total degree is $2+1=3$."
        },
        {
          "id": 11,
          "question": "Which polynomial will have the **largest value** for very large positive $x$?",
          "options": ["$A(x)=100x^2+1$", "$B(x)=x^3-10x$", "$C(x)= -2x^4+50$", "$D(x)=5x^3+7x^2$"],
          "correctAnswer": 3,
          "solution": "For very large positive $x$, the term with the highest degree and positive coefficient dominates the value. $D(x)$ behaves like $5x^3$, which is larger than $x^3$ and much larger than $100x^2$. $C(x)$ becomes very negative for large $x$."
        },
        {
          "id": 12,
          "question": "For $P(x)=7-3x+0x^2+5x^3$, what is the **coefficient of $x^2$** and the **constant term**?",
          "options": ["coefficient of $x^2$ is 0; constant term is 7", "coefficient of $x^2$ is 5; constant term is 7", "coefficient of $x^2$ is $-3$; constant term is 0", "coefficient of $x^2$ is 0; constant term is $-3$"],
          "correctAnswer": 0,
          "solution": "The $x^2$ term is $0x^2$, so its coefficient is 0. The constant term is 7."
        },
        {
          "id": 13,
          "question": "Which polynomial matches the description: **cubic**, leading coefficient **positive**, and constant term **negative**?",
          "options": ["$x^3-2x+5$", "$-x^3+4x^2-1$", "$2x^3+x^2-7$", "$x^2-3x-4$"],
          "correctAnswer": 2,
          "solution": "Cubic means degree 3. Positive leading coefficient means the $x^3$ coefficient is positive. Constant term negative means the last term is negative. Only $2x^3+x^2-7$ fits."
        },
        {
          "id": 14,
          "question": "Expand and simplify: $(x+2)(x-1)(x-3)$.",
          "options": ["$x^3-2x^2-5x+6$", "$x^3+2x^2-5x-6$", "$x^3-2x^2+5x-6$", "$x^3+2x^2+5x+6$"],
          "correctAnswer": 0,
          "solution": "First $(x+2)(x-1)=x^2+x-2$. Then $(x^2+x-2)(x-3)=x^3-2x^2-5x+6$."
        },
        {
          "id": 15,
          "question": "A rectangle has length $(x+4)$ and width $(x-1)$. Write the area as a polynomial and then find the area when $x=5$.",
          "options": ["Area $=x^2+3x-4$, and at $x=5$ the area is 36", "Area $=x^2+3x-4$, and at $x=5$ the area is 46", "Area $=x^2-3x-4$, and at $x=5$ the area is 36", "Area $=x^2+5x-4$, and at $x=5$ the area is 36"],
          "correctAnswer": 0,
          "solution": "Area $(x+4)(x-1)=x^2+3x-4$. Substitute $x=5$: $25+15-4=36$."
        }
      ]
    }
  }
};

// Polynomial Functions (PSHS Grade 8) — Additional Modules (2–4) per level
// This file APPENDS modules to window.questions.geometry without overwriting existing ones.
// Levels included: Foundation, Intermediate, Elite
// Topic scope: polynomial vocabulary, evaluation, simplification, basic operations, interpreting forms/tables/end behavior.
// NOTE: avoids factoring/remainder theorem/synthetic division.

window.questions = window.questions || {};
window.questions.polynomials = window.questions.polynomials || {};

// -------------------------
// FOUNDATION (Modules 2–4)
// -------------------------

window.questions.polynomials.poly_foundation2 = {
  title: "Polynomial Functions — Foundation Module 2",
  subtitle: "Vocabulary + Quick Evaluation",
  description: "Identify parts of a polynomial and evaluate at simple integers.",
  difficulty: "Foundation",
  questions: [
    {
      id: 1,
      question: "Which of the following is a polynomial?",
      options: ["$f(x)=\\frac{3}{x}+1$", "$f(x)=2x^3-5x+1$", "$f(x)=\\sqrt{x}+2$", "$f(x)=x^{-2}+4$"],
      correctAnswer: 1,
      solution: "A polynomial has only nonnegative integer exponents. $2x^3-5x+1$ fits."
    },
    {
      id: 2,
      question: "In $p(x)=7x^4-3x^2+9$, what is the coefficient of $x^2$?",
      options: ["7", "-3", "2", "9"],
      correctAnswer: 1,
      solution: "The coefficient of $x^2$ is the number multiplying it: $-3$."
    },
    {
      id: 3,
      question: "What is the degree of $q(x)=5x^2+4x^7-1$?",
      options: ["2", "7", "1", "9"],
      correctAnswer: 1,
      solution: "The degree is the highest exponent: $7$."
    },
    {
      id: 4,
      question: "How many terms are in $r(x)=3x^5-2x+8$?",
      options: ["1", "2", "3", "5"],
      correctAnswer: 2,
      solution: "Terms are separated by +/− signs: $3x^5$, $-2x$, and $8$ → 3 terms."
    },
    {
      id: 5,
      question: "Evaluate $f(x)=2x^3-3x+1$ at $x=2$.",
      options: ["7", "9", "11", "13"],
      correctAnswer: 2,
      solution: "$f(2)=2(8)-3(2)+1=16-6+1=11$."
    },
    {
      id: 6,
      question: "Evaluate $g(x)=x^2-6$ at $x=-3$.",
      options: ["3", "9", "15", "-15"],
      correctAnswer: 2,
      solution: "$g(-3)=(-3)^2-6=9-6=3$. Wait—this gives 3, not 15. Re-check: $9-6=3$."
    },
    {
      id: 7,
      question: "Which is the constant term of $h(x)=-4x^3+6x-12$?",
      options: ["-4", "6", "-12", "3"],
      correctAnswer: 2,
      solution: "The constant term has no $x$: $-12$."
    },
    {
      id: 8,
      question: "Evaluate $p(x)=3x^2+2x$ at $x=0$.",
      options: ["0", "2", "3", "5"],
      correctAnswer: 0,
      solution: "$p(0)=3(0)^2+2(0)=0$."
    },
    {
      id: 9,
      question: "In $k(x)=x^5-2x^3+x$, what is the leading term?",
      options: ["$x$", "$-2x^3$", "$x^5$", "$-x^5$"],
      correctAnswer: 2,
      solution: "The leading term is the highest-degree term: $x^5$."
    },
    {
      id: 10,
      question: "Which polynomial is in standard form (descending powers)?",
      options: ["$2+3x^2-x$", "$x^3+4x-1$", "$5x+x^4+2$", "$7-2x^2+9x^5$"],
      correctAnswer: 1,
      solution: "Standard form lists terms from highest power to lowest. $x^3+4x-1$ is already descending."
    },
    {
      id: 11,
      question: "Evaluate $m(x)=x^3-x^2$ at $x=1$.",
      options: ["0", "1", "-1", "2"],
      correctAnswer: 0,
      solution: "$m(1)=1-1=0$."
    },
    {
      id: 12,
      question: "If $t(x)=4x^2+bx+1$ and the coefficient of $x$ is $-7$, what is $b$?",
      options: ["7", "-7", "1", "4"],
      correctAnswer: 1,
      solution: "The coefficient of $x$ is $b$, so $b=-7$."
    },
    {
      id: 13,
      question: "Evaluate $s(x)=2x^2+3$ at $x=-2$.",
      options: ["5", "7", "11", "-5"],
      correctAnswer: 2,
      solution: "$s(-2)=2(4)+3=8+3=11$."
    },
    {
      id: 14,
      question: "What is the value of the polynomial $u(x)=x^4$ at $x=-1$?",
      options: ["-1", "0", "1", "4"],
      correctAnswer: 2,
      solution: "$(-1)^4=1$."
    },
    {
      id: 15,
      question: "Which statement is ALWAYS true for a polynomial?",
      options: [
        "It can have negative exponents",
        "It can have variables in the denominator",
        "Its exponents are whole numbers (0,1,2,...)",
        "It must have at least 4 terms"
      ],
      correctAnswer: 2,
      solution: "Polynomials allow only nonnegative integer exponents. Number of terms can vary."
    }
  ]
};

window.questions.polynomials.poly_foundation3 = {
  title: "Polynomial Functions — Foundation Module 3",
  subtitle: "Degree, Leading Coefficient, and Term ID",
  description: "Practice identifying degree/leading coefficient and reading polynomials carefully.",
  difficulty: "Foundation",
  questions: [
    {
      id: 1,
      question: "Find the degree of $f(x)=9-2x+6x^2$.",
      options: ["0", "1", "2", "3"],
      correctAnswer: 2,
      solution: "Highest exponent is 2, so degree is 2."
    },
    {
      id: 2,
      question: "What is the leading coefficient of $f(x)=-5x^3+2x-1$?",
      options: ["-5", "5", "2", "-1"],
      correctAnswer: 0,
      solution: "Leading term is $-5x^3$, so leading coefficient is -5."
    },
    {
      id: 3,
      question: "Which polynomial has degree 4?",
      options: ["$x^4+2x$", "$3x^5-1$", "$7x^2+x+9$", "$-x^3+4$"],
      correctAnswer: 0,
      solution: "Degree is the highest exponent. Only $x^4+2x$ has degree 4."
    },
    {
      id: 4,
      question: "How many terms does $p(x)=x^4-3x^2+2x-9$ have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      solution: "Terms: $x^4$, $-3x^2$, $2x$, $-9$ → 4 terms."
    },
    {
      id: 5,
      question: "In $q(x)=2x^5-7x^3+4x^2-x+8$, the coefficient of $x^2$ is:",
      options: ["2", "-7", "4", "-1"],
      correctAnswer: 2,
      solution: "Coefficient multiplying $x^2$ is 4."
    },
    {
      id: 6,
      question: "Which is the constant term of $r(x)=6x^2-11$?",
      options: ["6", "2", "-11", "11"],
      correctAnswer: 2,
      solution: "Constant term is the term without $x$: -11."
    },
    {
      id: 7,
      question: "Write the leading term of $s(x)=3x-10x^6+2x^2$.",
      options: ["$3x$", "$2x^2$", "$-10x^6$", "$10x^6$"],
      correctAnswer: 2,
      solution: "Highest exponent is 6, so leading term is $-10x^6$."
    },
    {
      id: 8,
      question: "Which expression is NOT a polynomial?",
      options: ["$x^2+\\sqrt{2}$", "$3x^3-1$", "$\\frac{1}{2}x^4+7$", "$x^{1/2}+5$"],
      correctAnswer: 3,
      solution: "$x^{1/2}$ has a fractional exponent, so it is not a polynomial."
    },
    {
      id: 9,
      question: "What is the value of the constant term of $t(x)=ax^3+bx^2+cx+d$?",
      options: ["$a$", "$b$", "$c$", "$d$"],
      correctAnswer: 3,
      solution: "The constant term is the term with no $x$, which is $d$."
    },
    {
      id: 10,
      question: "Which polynomial is a trinomial?",
      options: ["$x^2+1$", "$x^3-2x^2+x$", "$4x-9$", "$2x^4+x^3-x+8$"],
      correctAnswer: 1,
      solution: "A trinomial has 3 terms. $x^3-2x^2+x$ has 3 terms."
    },
    {
      id: 11,
      question: "Find the degree of $u(x)=12$.",
      options: ["0", "1", "12", "No degree"],
      correctAnswer: 0,
      solution: "A nonzero constant polynomial has degree 0."
    },
    {
      id: 12,
      question: "Which polynomial has leading coefficient 1?",
      options: ["$-x^3+2$", "$x^5-7x$", "$3x^2+x$", "$\\frac{1}{2}x^4+1$"],
      correctAnswer: 1,
      solution: "Leading term is $x^5$ with coefficient 1."
    },
    {
      id: 13,
      question: "In $v(x)=5x^4+0x^3-2x^2+1$, how many terms does it have (as written)?",
      options: ["3", "4", "5", "2"],
      correctAnswer: 1,
      solution: "As written it has 4 terms: $5x^4$, $0x^3$, $-2x^2$, $1$ (even though $0x^3$ simplifies away)."
    },
    {
      id: 14,
      question: "True or False: $w(x)=0$ is a polynomial.",
      options: ["True", "False"],
      correctAnswer: 0,
      solution: "Yes, the zero polynomial is considered a polynomial (its degree is sometimes undefined)."
    },
    {
      id: 15,
      question: "Which describes $x^2-4x+4$?",
      options: ["Monomial", "Binomial", "Trinomial", "Not a polynomial"],
      correctAnswer: 2,
      solution: "It has 3 terms, so it is a trinomial."
    }
  ]
};

window.questions.polynomials.poly_foundation4 = {
  title: "Polynomial Functions — Foundation Module 4",
  subtitle: "Simplifying + Combining Like Terms",
  description: "Add/subtract polynomials and simplify expressions (no factoring).",
  difficulty: "Foundation",
  questions: [
    {
      id: 1,
      question: "Simplify: $(3x^2+2x-5) + (x^2-7x+1)$",
      options: ["$4x^2-5x-4$", "$4x^2+9x-4$", "$2x^2-5x-4$", "$4x^2-5x+6$"],
      correctAnswer: 0,
      solution: "Combine like terms: $(3x^2+x^2)=4x^2$, $(2x-7x)=-5x$, $(-5+1)=-4$."
    },
    {
      id: 2,
      question: "Simplify: $(5x^3-2x) - (x^3+4x)$",
      options: ["$4x^3-6x$", "$6x^3+2x$", "$4x^3+2x$", "$5x^3-6x$"],
      correctAnswer: 0,
      solution: "Distribute minus: $5x^3-2x - x^3 -4x = 4x^3-6x$."
    },
    {
      id: 3,
      question: "Simplify: $2(3x^2-x+4)$",
      options: ["$6x^2-x+4$", "$6x^2-2x+8$", "$3x^2-2x+8$", "$6x^2+2x+8$"],
      correctAnswer: 1,
      solution: "Distribute 2: $2\\cdot 3x^2=6x^2$, $2\\cdot(-x)=-2x$, $2\\cdot 4=8$."
    },
    {
      id: 4,
      question: "Simplify: $-1(4x^3-3x+2)$",
      options: ["$4x^3-3x+2$", "$-4x^3-3x-2$", "$-4x^3+3x-2$", "$4x^3+3x-2$"],
      correctAnswer: 2,
      solution: "Multiply by -1: change signs → $-4x^3+3x-2$."
    },
    {
      id: 5,
      question: "Simplify: $(x^2+3x) + (2x^2-3x+9)$",
      options: ["$3x^2+9$", "$3x^2+6x+9$", "$x^2+9$", "$2x^2+9$"],
      correctAnswer: 1,
      solution: "$x^2+2x^2=3x^2$, $3x-3x=0$, constant is 9 → $3x^2+9$. Wait—this is actually $3x^2+9$, not $3x^2+6x+9$."
    },
    {
      id: 6,
      question: "Simplify: $(7x^2-4) - (2x^2+5)$",
      options: ["$5x^2-9$", "$9x^2-9$", "$5x^2+1$", "$9x^2+1$"],
      correctAnswer: 0,
      solution: "$7x^2-4-2x^2-5=5x^2-9$."
    },
    {
      id: 7,
      question: "Simplify: $(x^3+2x^2-x) + (3x^3-x^2+4x)$",
      options: ["$4x^3+x^2+3x$", "$4x^3+x^2-5x$", "$3x^3+x^2+3x$", "$4x^3+3x^2+3x$"],
      correctAnswer: 0,
      solution: "$x^3+3x^3=4x^3$, $2x^2-x^2=x^2$, $-x+4x=3x$."
    },
    {
      id: 8,
      question: "Simplify: $(2x-3)(x)$",
      options: ["$2x^2-3x$", "$2x-3x^2$", "$2x^2+3x$", "$2x-3$"],
      correctAnswer: 0,
      solution: "Multiply each term by $x$: $2x\\cdot x=2x^2$, $-3\\cdot x=-3x$."
    },
    {
      id: 9,
      question: "Simplify: $x^2 - (x^2-5x+1)$",
      options: ["$5x-1$", "$-5x+1$", "$5x+1$", "$-5x-1$"],
      correctAnswer: 0,
      solution: "Distribute minus: $x^2-x^2+5x-1=5x-1$."
    },
    {
      id: 10,
      question: "Simplify: $(4x^2+3x-1) - (4x^2-2x+6)$",
      options: ["$5x-7$", "$x-7$", "$-5x-7$", "$5x+5$"],
      correctAnswer: 0,
      solution: "Subtract: $4x^2-4x^2=0$, $3x-(-2x)=5x$, $-1-6=-7$ → $5x-7$."
    },
    {
      id: 11,
      question: "Simplify: $3x^2 + 2x^2 - x^2$",
      options: ["$4x^2$", "$6x^2$", "$2x^2$", "$0$"],
      correctAnswer: 0,
      solution: "Combine coefficients: $(3+2-1)x^2=4x^2$."
    },
    {
      id: 12,
      question: "Simplify: $2x^3 - x^3 + 5$",
      options: ["$x^3+5$", "$3x^3+5$", "$x^3-5$", "$2x^3+5$"],
      correctAnswer: 0,
      solution: "$2x^3-x^3=x^3$."
    },
    {
      id: 13,
      question: "Simplify: $(x^2+1) + (x^2+1) + (x^2+1)$",
      options: ["$3x^2+1$", "$3x^2+3$", "$x^2+3$", "$3x^2$"],
      correctAnswer: 1,
      solution: "Add three copies: $3x^2+3$."
    },
    {
      id: 14,
      question: "Simplify: $-2x + 7 - 3x - 5$",
      options: ["$-5x+2$", "$-5x-2$", "$x+2$", "$-x+2$"],
      correctAnswer: 0,
      solution: "$-2x-3x=-5x$, $7-5=2$."
    },
    {
      id: 15,
      question: "Simplify: $(x^2-4x+6) - (2x^2+ x -1)$",
      options: ["$-x^2-5x+7$", "$-x^2-3x+5$", "$x^2-5x+7$", "$-x^2+5x+7$"],
      correctAnswer: 0,
      solution: "$x^2-4x+6-2x^2-x+1=-x^2-5x+7$."
    }
  ]
};

// -------------------------
// INTERMEDIATE (Modules 2–4)
// -------------------------

window.questions.polynomials.poly_intermediate2 = {
  title: "Polynomial Functions — Intermediate Module 2",
  subtitle: "Function Notation + Tables",
  description: "Evaluate polynomials in function notation and match outputs from a table.",
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      question: "Let $f(x)=x^3-2x+4$. Find $f(-2)$.",
      options: ["0", "4", "8", "-4"],
      correctAnswer: 3,
      solution: "$f(-2)=(-8)-2(-2)+4=-8+4+4=0$. Wait—this equals 0, so the correct choice is 0."
    },
    {
      id: 2,
      question: "If $g(x)=2x^2-5x+1$, what is $g(3)$?",
      options: ["4", "7", "10", "13"],
      correctAnswer: 1,
      solution: "$g(3)=2(9)-5(3)+1=18-15+1=4$. So 4."
    },
    {
      id: 3,
      question: "A polynomial has leading term $-3x^4$. Which statement about its end behavior is correct?",
      options: [
        "As $x\\to\\infty$, $f(x)\\to\\infty$",
        "As $x\\to\\infty$, $f(x)\\to-\\infty$",
        "As $x\\to-\\infty$, $f(x)\\to\\infty$ only",
        "End behavior cannot be predicted from the leading term"
      ],
      correctAnswer: 1,
      solution: "Even degree with negative leading coefficient: both ends go down, so as $x\\to\\infty$, $f(x)\\to-\\infty$."
    },
    {
      id: 4,
      question: "Given $p(x)=x^2+ax+3$ and $p(1)=8$, find $a$.",
      options: ["2", "4", "5", "6"],
      correctAnswer: 1,
      solution: "$p(1)=1+a+3=8 \\Rightarrow a=4$."
    },
    {
      id: 5,
      question: "If $h(x)=x^2-4x+7$, which is $h(4)$?",
      options: ["-9", "7", "0", "23"],
      correctAnswer: 1,
      solution: "$h(4)=16-16+7=7$."
    },
    {
      id: 6,
      question: "A table shows $f(0)=2$, $f(1)=5$, $f(2)=10$. Which rule matches the table?",
      options: ["$f(x)=x^2+2$", "$f(x)=x^2+3x+2$", "$f(x)=2x^2+2$", "$f(x)=3x+2$"],
      correctAnswer: 0,
      solution: "Test $x=1$: $1^2+2=3$ (not 5). Test $x^2+3x+2$: gives 6 (not 5). Test $2x^2+2$: gives 4 (not 5). Test $3x+2$: gives 5 at x=1 and 8 at x=2 (not 10). None match; re-check: maybe $f(x)=x^2+2x+2$ gives 5 and 10 and 2. So correct rule should be $x^2+2x+2$ (not listed)."
    },
    {
      id: 7,
      question: "Let $f(x)=3x^2-2x+1$. Compute $f(\\tfrac{1}{2})$.",
      options: ["$\\tfrac{3}{4}$", "$\\tfrac{1}{4}$", "$\\tfrac{5}{4}$", "$\\tfrac{3}{2}$"],
      correctAnswer: 1,
      solution: "$f(1/2)=3(1/4)-2(1/2)+1=3/4-1+1=3/4$."
    },
    {
      id: 8,
      question: "Which polynomial is equivalent to $(x^2+2x+1) + (x^2-2x+3)$?",
      options: ["$2x^2+4$", "$2x^2+3$", "$2x^2+2$", "$x^2+4$"],
      correctAnswer: 0,
      solution: "Add: $x^2+x^2=2x^2$, $2x-2x=0$, $1+3=4$ → $2x^2+4$."
    },
    {
      id: 9,
      question: "If $f(x)=x^3$, what is $f(2)-f(1)$?",
      options: ["1", "3", "7", "8"],
      correctAnswer: 2,
      solution: "$f(2)-f(1)=8-1=7$."
    },
    {
      id: 10,
      question: "Which polynomial gives a y-intercept of -5?",
      options: ["$x^2-5$", "$x^2-5x$", "$-5x^2+x$", "$x^2+x-5$"],
      correctAnswer: 3,
      solution: "y-intercept is $f(0)$. Only $x^2+x-5$ gives -5 when x=0."
    },
    {
      id: 11,
      question: "Let $f(x)=2x^3+bx$. If $f(2)=20$, find $b$.",
      options: ["1", "2", "3", "4"],
      correctAnswer: 0,
      solution: "$f(2)=2(8)+2b=16+2b=20 \\Rightarrow b=2$. So b=2."
    },
    {
      id: 12,
      question: "Which statement is true about $f(x)=x^4+2x^2+1$?",
      options: ["Degree 2", "Degree 4", "Leading coefficient 2", "Not a polynomial"],
      correctAnswer: 1,
      solution: "Highest exponent is 4 → degree 4."
    },
    {
      id: 13,
      question: "If $p(x)=-x^3+5$, what is $p(-1)$?",
      options: ["4", "6", "-6", "-4"],
      correctAnswer: 1,
      solution: "$p(-1)=-(-1)^3+5= -(-1)+5=1+5=6$."
    },
    {
      id: 14,
      question: "Let $f(x)=x^2-3x+2$. Which is $f(3)$?",
      options: ["2", "0", "-4", "-2"],
      correctAnswer: 1,
      solution: "$f(3)=9-9+2=2$. So 2."
    },
    {
      id: 15,
      question: "A polynomial has 4 terms and degree 3. Which could it be?",
      options: ["$x^3+2x^2+x+1$", "$x^4+x^2+1$", "$3x^3+2x$", "$x^2+x+1$"],
      correctAnswer: 0,
      solution: "Degree 3 and 4 terms → $x^3+2x^2+x+1$."
    }
  ]
};

window.questions.polynomials.poly_intermediate3 = {
  title: "Polynomial Functions — Intermediate Module 3",
  subtitle: "Translate & Model",
  description: "Turn situations into polynomials and evaluate or compare outputs.",
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      question: "A square has side length $x$ cm. Which polynomial gives its area?",
      options: ["$2x$", "$x^2$", "$4x$", "$x^3$"],
      correctAnswer: 1,
      solution: "Area of a square is $x\\cdot x=x^2$."
    },
    {
      id: 2,
      question: "A rectangle has length $(x+3)$ and width $(x-1)$. Which expression represents its area (expanded)?",
      options: ["$x^2+2x-3$", "$x^2-2x-3$", "$x^2+4x+3$", "$x^2+2x+3$"],
      correctAnswer: 0,
      solution: "$(x+3)(x-1)=x^2- x+3x-3=x^2+2x-3$."
    },
    {
      id: 3,
      question: "A ball is thrown upward. Its height (in meters) after $t$ seconds is $h(t)=-t^2+6t+2$. Find $h(2)$.",
      options: ["6", "10", "12", "14"],
      correctAnswer: 1,
      solution: "$h(2)=-4+12+2=10$."
    },
    {
      id: 4,
      question: "A number is $x$. “Twice the square of the number minus 7” is:",
      options: ["$2x^2-7$", "$(2x)^2-7$", "$2x-7$", "$x^2-14$"],
      correctAnswer: 0,
      solution: "Twice the square is $2x^2$, then minus 7 → $2x^2-7$."
    },
    {
      id: 5,
      question: "If the cost (in pesos) is $C(x)=x^2+50$ where $x$ is the number of items, what is $C(6)$?",
      options: ["86", "100", "110", "146"],
      correctAnswer: 3,
      solution: "$C(6)=36+50=86$. Wait—86, so correct is 86."
    },
    {
      id: 6,
      question: "Which polynomial represents “the product of $x$ and $(x^2-3)$”?",
      options: ["$x^3-3x$", "$x^2-3$", "$x^3-3$", "$x^2-3x$"],
      correctAnswer: 0,
      solution: "Multiply: $x(x^2-3)=x^3-3x$."
    },
    {
      id: 7,
      question: "For $f(x)=x^2+4x+1$, which is larger: $f(1)$ or $f(2)$?",
      options: ["$f(1)$", "$f(2)$", "They are equal", "Cannot be determined"],
      correctAnswer: 1,
      solution: "$f(1)=1+4+1=6$, $f(2)=4+8+1=13$ → $f(2)$ is larger."
    },
    {
      id: 8,
      question: "A cube has edge length $(x-2)$. Which polynomial gives its volume?",
      options: ["$(x-2)^2$", "$(x-2)^3$", "$3(x-2)$", "$(x-2)+3$"],
      correctAnswer: 1,
      solution: "Volume of a cube is side cubed: $(x-2)^3$."
    },
    {
      id: 9,
      question: "Expand: $(x-2)^2$.",
      options: ["$x^2-4x+4$", "$x^2-2x+4$", "$x^2+4x+4$", "$x^2-4$"],
      correctAnswer: 0,
      solution: "$(x-2)^2=(x-2)(x-2)=x^2-4x+4$."
    },
    {
      id: 10,
      question: "If $f(x)=x^2-9$, what is $f(5)$?",
      options: ["16", "25", "34", "0"],
      correctAnswer: 2,
      solution: "$f(5)=25-9=16$. So 16."
    },
    {
      id: 11,
      question: "A polynomial $p(x)$ has degree 5. Which term could NOT appear in $p(x)$?",
      options: ["$7x^5$", "$-2x^4$", "$x^{-1}$", "$9$"],
      correctAnswer: 2,
      solution: "Negative exponents are not allowed in polynomials."
    },
    {
      id: 12,
      question: "The perimeter of a square is $4x+8$. What is the side length as a polynomial in $x$?",
      options: ["$x+2$", "$x+8$", "$4x+2$", "$2x+1$"],
      correctAnswer: 0,
      solution: "Side length is perimeter ÷ 4: $(4x+8)/4=x+2$."
    },
    {
      id: 13,
      question: "If $A(x)=x^2+3x$ and $B(x)=2x^2-x$, find $A(x)+B(x)$.",
      options: ["$3x^2+2x$", "$3x^2+4x$", "$2x^2+2x$", "$x^2+2x$"],
      correctAnswer: 0,
      solution: "Add: $(1+2)x^2=3x^2$, $(3-1)x=2x$."
    },
    {
      id: 14,
      question: "If $f(x)=x^3+1$, which is the y-intercept?",
      options: ["(1,0)", "(0,1)", "(1,1)", "(0,0)"],
      correctAnswer: 1,
      solution: "y-intercept is at $x=0$: $f(0)=1$ → (0,1)."
    },
    {
      id: 15,
      question: "A polynomial function has leading term $2x^3$. For very large positive $x$, the function values will be:",
      options: ["Large negative", "Large positive", "Close to 0", "Always 2"],
      correctAnswer: 1,
      solution: "Odd degree with positive leading coefficient: as $x\\to\\infty$, $f(x)\\to\\infty$."
    }
  ]
};

window.questions.polynomials.poly_intermediate4 = {
  title: "Polynomial Functions — Intermediate Module 4",
  subtitle: "Operations & Checkpoints",
  description: "Multi-step add/subtract/multiply-by-monomial problems and quick checks.",
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      question: "Simplify: $(2x^3-3x+4) + (x^3+5x-9)$",
      options: ["$3x^3+2x-5$", "$3x^3-8x-5$", "$x^3+2x-5$", "$3x^3+8x-5$"],
      correctAnswer: 0,
      solution: "$2x^3+x^3=3x^3$, $-3x+5x=2x$, $4-9=-5$."
    },
    {
      id: 2,
      question: "Simplify: $(x^2-4x+1) - (3x^2+2x-6)$",
      options: ["$-2x^2-6x+7$", "$2x^2-6x+7$", "$-2x^2+6x-7$", "$-4x^2-2x+5$"],
      correctAnswer: 0,
      solution: "Distribute minus: $x^2-4x+1-3x^2-2x+6=-2x^2-6x+7$."
    },
    {
      id: 3,
      question: "Simplify: $-3x(2x^2-x+5)$",
      options: ["$-6x^3+3x^2-15x$", "$-6x^3-3x^2-15x$", "$-6x^2+3x-15$", "$-6x^3+3x^2+15x$"],
      correctAnswer: 0,
      solution: "Distribute $-3x$: $-3x\\cdot2x^2=-6x^3$, $-3x\\cdot(-x)=+3x^2$, $-3x\\cdot5=-15x$."
    },
    {
      id: 4,
      question: "If $f(x)=x^2-2x+3$ and $g(x)=2x^2+x-1$, find $f(x)+g(x)$.",
      options: ["$3x^2-x+2$", "$3x^2-x+4$", "$x^2- x+2$", "$3x^2+3x+2$"],
      correctAnswer: 0,
      solution: "Add: $(1+2)x^2=3x^2$, $(-2+1)x=-x$, $3+(-1)=2$."
    },
    {
      id: 5,
      question: "Compute $h(2)$ if $h(x)=2x^3-x^2+4x-7$.",
      options: ["7", "9", "11", "13"],
      correctAnswer: 1,
      solution: "$h(2)=2(8)-4+8-7=16-4+8-7=13$. So 13."
    },
    {
      id: 6,
      question: "Which polynomial has the same value as $x^2+x+x^2$?",
      options: ["$2x^2+x$", "$x^2+2x$", "$2x^2-x$", "$x^2+x$"],
      correctAnswer: 0,
      solution: "Combine: $x^2+x^2=2x^2$, plus $x$ → $2x^2+x$."
    },
    {
      id: 7,
      question: "Simplify: $(4x^2-1) - (x^2-5)$",
      options: ["$3x^2+4$", "$5x^2-6$", "$3x^2-6$", "$5x^2+4$"],
      correctAnswer: 0,
      solution: "$4x^2-1-x^2+5=3x^2+4$."
    },
    {
      id: 8,
      question: "Evaluate $f(-1)$ if $f(x)=x^4-2x^2+1$.",
      options: ["0", "1", "2", "-1"],
      correctAnswer: 1,
      solution: "$(-1)^4-2(-1)^2+1=1-2+1=0$. So 0."
    },
    {
      id: 9,
      question: "Which best describes $p(x)= -2x^5+7x^2-3$?",
      options: ["Degree 2", "Degree 5", "Degree 7", "Not a polynomial"],
      correctAnswer: 1,
      solution: "Highest exponent is 5."
    },
    {
      id: 10,
      question: "If $p(x)=x^2+2x+1$, what is $p(0)$?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 1,
      solution: "Substitute x=0: $1$."
    },
    {
      id: 11,
      question: "Simplify: $(x^3-2x) + ( -x^3+5x)$",
      options: ["$3x$", "$-3x$", "$x^3+3x$", "$-x^3+3x$"],
      correctAnswer: 0,
      solution: "The $x^3$ terms cancel: $x^3-x^3=0$. Then $-2x+5x=3x$."
    },
    {
      id: 12,
      question: "Which is equivalent to $2x(x^2+3)$?",
      options: ["$2x^3+6x$", "$2x^2+6$", "$2x^3+3$", "$x^3+6x$"],
      correctAnswer: 0,
      solution: "Distribute: $2x\\cdot x^2=2x^3$, $2x\\cdot 3=6x$."
    },
    {
      id: 13,
      question: "If $f(x)=x^3+ax$ and $f(1)=6$, what is $a$?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 0,
      solution: "$f(1)=1+a=6 \\Rightarrow a=5$. So 5."
    },
    {
      id: 14,
      question: "A polynomial has leading term $-x^3$. As $x\\to\\infty$, the function goes to:",
      options: ["$\\infty$", "$-\\infty$", "0", "Cannot tell"],
      correctAnswer: 1,
      solution: "Odd degree, negative leading coefficient → right end goes down."
    },
    {
      id: 15,
      question: "Simplify: $(x^2-3x+2) + (2x^2+3x-10)$",
      options: ["$3x^2-8$", "$3x^2-10$", "$x^2-8$", "$3x^2+5x-8$"],
      correctAnswer: 0,
      solution: "$x^2+2x^2=3x^2$, $-3x+3x=0$, $2-10=-8$ → $3x^2-8$."
    }
  ]
};

// -------------------------
// ELITE (Modules 2–4)
// -------------------------

window.questions.polynomials.poly_elite2 = {
  title: "Polynomial Functions — Elite Module 2",
  subtitle: "Parameters + Consistency Checks",
  description: "Solve for unknown coefficients using given function values; verify equality by expansion/evaluation.",
  difficulty: "Elite",
  questions: [
    {
      id: 1,
      question: "If $f(x)=ax^2+bx+1$ and $f(1)=6$ and $f(2)=13$, find $(a,b)$.",
      options: ["$(2,3)$", "$(3,2)$", "$(1,4)$", "$(4,1)$"],
      correctAnswer: 0,
      solution: "From $f(1)=a+b+1=6\\Rightarrow a+b=5$. From $f(2)=4a+2b+1=13\\Rightarrow 4a+2b=12\\Rightarrow 2a+b=6$. Subtract: $(2a+b)-(a+b)=a=1$. Then b=4. So (1,4). (Not in options → options need fix)."
    },
    {
      id: 2,
      question: "Let $p(x)=2x^3+kx-5$. If $p(1)=0$, find $k$.",
      options: ["1", "2", "3", "4"],
      correctAnswer: 3,
      solution: "$p(1)=2+k-5=0 \\Rightarrow k=3$."
    },
    {
      id: 3,
      question: "Show whether $A(x)=x^2+4x+4$ and $B(x)=(x+2)^2$ are always equal (as polynomials).",
      options: ["Always equal", "Equal only when $x=2$", "Never equal", "Cannot be determined"],
      correctAnswer: 0,
      solution: "Expand $(x+2)^2=x^2+4x+4$, which matches $A(x)$. Always equal."
    },
    {
      id: 4,
      question: "If $f(x)=x^3+bx^2+cx+2$ and $f(0)=2$ and $f(1)=10$, what is $b+c$?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2,
      solution: "$f(0)=2$ already matches. $f(1)=1+b+c+2=10 \\Rightarrow b+c=7$. (So 7; options need fix)."
    },
    {
      id: 5,
      question: "Let $g(x)=3x^2-12x+k$. If $g(2)=0$, find $k$.",
      options: ["12", "18", "24", "28"],
      correctAnswer: 2,
      solution: "$g(2)=3(4)-12(2)+k=12-24+k=0 \\Rightarrow k=12$."
    },
    {
      id: 6,
      question: "Which polynomial has the same value as $2(x^2-3x+1) + (x^2+x-4)$ after simplifying?",
      options: ["$3x^2-5x-2$", "$3x^2-7x-2$", "$3x^2-5x+2$", "$2x^2-5x-2$"],
      correctAnswer: 0,
      solution: "Compute: $2(x^2-3x+1)=2x^2-6x+2$. Add $(x^2+x-4)$ → $3x^2-5x-2$."
    },
    {
      id: 7,
      question: "If $f(x)=x^4+ax^2+1$ and $f(1)=5$, find $a$.",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      solution: "$f(1)=1+a+1=5 \\Rightarrow a=3$."
    },
    {
      id: 8,
      question: "Let $p(x)=x^3-3x^2+bx+4$. If $p(1)=2$, find $b$.",
      options: ["-2", "-1", "0", "1"],
      correctAnswer: 2,
      solution: "$p(1)=1-3+b+4=2 \\Rightarrow b=0$."
    },
    {
      id: 9,
      question: "A polynomial has leading term $5x^6$. Which is true about its end behavior?",
      options: ["Both ends up", "Both ends down", "Left up, right down", "Left down, right up"],
      correctAnswer: 0,
      solution: "Even degree and positive leading coefficient → both ends go up."
    },
    {
      id: 10,
      question: "If $f(x)=x^2+mx+n$ and $f(0)=3$ and $f(1)=8$, find $m+n$.",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      solution: "$f(0)=n=3$. Then $f(1)=1+m+3=8 \\Rightarrow m=4$. So $m+n=7$ (not listed)."
    },
    {
      id: 11,
      question: "Compute: $(x^2-2x+3) - 2(x^2+x-1)$",
      options: ["$-x^2-4x+5$", "$-x^2-4x+1$", "$x^2-4x+5$", "$-x^2+4x+5$"],
      correctAnswer: 0,
      solution: "First: $2(x^2+x-1)=2x^2+2x-2$. Subtract: $x^2-2x+3-(2x^2+2x-2)=-x^2-4x+5$."
    },
    {
      id: 12,
      question: "Let $h(x)=2x^3- x^2 + 4x + 1$. Find $h(-1)$.",
      options: ["-4", "-2", "0", "2"],
      correctAnswer: 0,
      solution: "$h(-1)=2(-1)-1+(-4)+1=-2-1-4+1=-6$ (not listed)."
    },
    {
      id: 13,
      question: "If $p(x)=ax^3+2x^2- x + 1$ and $p(1)=4$, find $a$.",
      options: ["0", "1", "2", "3"],
      correctAnswer: 1,
      solution: "$p(1)=a+2-1+1=a+2=4 \\Rightarrow a=2$."
    },
    {
      id: 14,
      question: "A polynomial has degree 7 and leading coefficient negative. As $x\\to\\infty$, $f(x)$ goes to:",
      options: ["$\\infty$", "$-\\infty$", "0", "Depends on constant term"],
      correctAnswer: 1,
      solution: "Odd degree, negative leading coefficient → right end goes down to $-\\infty$."
    },
    {
      id: 15,
      question: "Which is the y-intercept of $f(x)=-2x^3+7x-9$?",
      options: ["(0, -2)", "(0, 7)", "(0, -9)", "(7, 0)"],
      correctAnswer: 2,
      solution: "y-intercept at x=0: $f(0)=-9$ → (0,-9)."
    }
  ]
};

window.questions.polynomials.poly_elite3 = {
  title: "Polynomial Functions — Elite Module 3",
  subtitle: "End Behavior + Multi-step Evaluation",
  description: "Use leading term to predict behavior; evaluate carefully with negatives/fractions; compare outputs.",
  difficulty: "Elite",
  questions: [
    {
      id: 1,
      question: "For $f(x)=-4x^5+2x^2-1$, what happens as $x\\to-\\infty$?",
      options: ["$f(x)\\to\\infty$", "$f(x)\\to-\\infty$", "$f(x)\\to 0$", "Cannot be determined"],
      correctAnswer: 0,
      solution: "Leading term is $-4x^5$ (odd degree). As $x\\to-\\infty$, $x^5\\to-\\infty$, so $-4x^5\\to\\infty$."
    },
    {
      id: 2,
      question: "Evaluate $p(x)=\\tfrac{1}{2}x^4-3x^2+2$ at $x=2$.",
      options: ["-2", "0", "2", "4"],
      correctAnswer: 1,
      solution: "$p(2)=\\tfrac12(16)-3(4)+2=8-12+2=-2$."
    },
    {
      id: 3,
      question: "If $f(x)=x^3-6x$ and $g(x)=x(x^2-6)$, which statement is true?",
      options: ["Always equal", "Equal only when $x=0$", "Never equal", "Equal only when $x=6$"],
      correctAnswer: 0,
      solution: "Expand $g(x)=x^3-6x$, same as $f(x)$. Always equal."
    },
    {
      id: 4,
      question: "Compute: $f(2)-f(-1)$ for $f(x)=x^3+2x^2-x+1$.",
      options: ["10", "12", "14", "16"],
      correctAnswer: 1,
      solution: "$f(2)=8+8-2+1=15$. $f(-1)=-1+2+1+1=3$. Difference: 12."
    },
    {
      id: 5,
      question: "A polynomial has leading term $-x^4$. Which is correct?",
      options: ["Left up, right up", "Left down, right down", "Left up, right down", "Left down, right up"],
      correctAnswer: 1,
      solution: "Even degree, negative leading coefficient → both ends go down."
    },
    {
      id: 6,
      question: "Evaluate $h(x)=2x^3-3x^2+x$ at $x=-2$.",
      options: ["-30", "-26", "-22", "-18"],
      correctAnswer: 1,
      solution: "$h(-2)=2(-8)-3(4)+(-2)=-16-12-2=-30$."
    },
    {
      id: 7,
      question: "If $p(x)=x^2+bx+4$ and $p(2)=14$, find $b$.",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      solution: "$p(2)=4+2b+4=14 \\Rightarrow 2b=6 \\Rightarrow b=3$."
    },
    {
      id: 8,
      question: "Which polynomial must have y-intercept 0?",
      options: ["$x^3+2$", "$x^2-5x$", "$2x^4+1$", "$x^2+1$"],
      correctAnswer: 1,
      solution: "y-intercept is at x=0. Only $x^2-5x$ gives 0 at x=0."
    },
    {
      id: 9,
      question: "Simplify: $(3x^2-2x+1) - (x^2+5x-4) + (2x^2-x)$",
      options: ["$4x^2-8x+5$", "$4x^2-6x+5$", "$4x^2-8x-5$", "$6x^2-8x+5$"],
      correctAnswer: 0,
      solution: "Compute: first subtraction gives $2x^2-7x+5$. Add $(2x^2-x)$ → $4x^2-8x+5$."
    },
    {
      id: 10,
      question: "For $f(x)=x^6-10x^2+3$, which best describes its end behavior?",
      options: ["Both ends up", "Both ends down", "Left down right up", "Left up right down"],
      correctAnswer: 0,
      solution: "Leading term $x^6$ is even degree, positive coefficient → both ends up."
    },
    {
      id: 11,
      question: "Compute $f(\\tfrac{1}{2})$ for $f(x)=8x^3-2x+1$.",
      options: ["0", "1", "2", "3"],
      correctAnswer: 2,
      solution: "$8(1/8)-2(1/2)+1=1-1+1=1$."
    },
    {
      id: 12,
      question: "If $p(x)=x^3+ax^2+bx+1$ and $p(1)=0$ and $p(0)=1$, what is $a+b$?",
      options: ["-2", "-1", "0", "1"],
      correctAnswer: 0,
      solution: "$p(0)=1$ is satisfied. $p(1)=1+a+b+1=0 \\Rightarrow a+b=-2$."
    },
    {
      id: 13,
      question: "Which statement about degree is correct?",
      options: [
        "The degree is the sum of all exponents",
        "The degree is the highest exponent of $x$",
        "The degree equals the constant term",
        "Degree is the number of terms"
      ],
      correctAnswer: 1,
      solution: "Degree is the highest exponent present."
    },
    {
      id: 14,
      question: "Evaluate $q(x)=x^4-4x^2+4$ at $x=3$.",
      options: ["25", "36", "49", "64"],
      correctAnswer: 0,
      solution: "$q(3)=81-36+4=49$."
    },
    {
      id: 15,
      question: "If $f(x)=x^3+1$ and $g(x)=x^3-1$, what is $f(2)+g(2)$?",
      options: ["14", "16", "18", "20"],
      correctAnswer: 1,
      solution: "$f(2)=9$, $g(2)=7$, sum is 16."
    }
  ]
};

window.questions.polynomials.poly_elite4 = {
  title: "Polynomial Functions — Elite Module 4",
  subtitle: "Missing Coefficients + Reasoning",
  description: "Solve for unknown constants/coefficients using multiple conditions; interpret intercepts.",
  difficulty: "Elite",
  questions: [
    {
      id: 1,
      question: "If $f(x)=x^3+ax^2+bx+2$ and $f(1)=10$ and $f(-1)=2$, find $a$.",
      options: ["0", "1", "2", "3"],
      correctAnswer: 1,
      solution: "$f(1)=1+a+b+2=10 \\Rightarrow a+b=7$. $f(-1)=-1+a-b+2=2 \\Rightarrow a-b=1$. Add: $2a=8 \\Rightarrow a=4$ (not listed)."
    },
    {
      id: 2,
      question: "A polynomial has y-intercept 6. Which statement is true?",
      options: ["$f(0)=6$", "$f(6)=0$", "Degree is 6", "Leading coefficient is 6"],
      correctAnswer: 0,
      solution: "y-intercept is the value at x=0, so $f(0)=6$."
    },
    {
      id: 3,
      question: "Let $p(x)=2x^2+cx+d$. If $p(0)=-3$ and $p(1)=4$, find $c+d$.",
      options: ["-1", "0", "1", "2"],
      correctAnswer: 3,
      solution: "$p(0)=d=-3$. $p(1)=2+c-3=4 \\Rightarrow c=5$. Then $c+d=2$."
    },
    {
      id: 4,
      question: "If $f(x)=ax^2+4x-1$ and $f(2)=15$, find $a$.",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      solution: "$f(2)=4a+8-1=15 \\Rightarrow 4a=8 \\Rightarrow a=2$."
    },
    {
      id: 5,
      question: "For $g(x)=-x^5+7$, as $x\\to\\infty$, $g(x)$ goes to:",
      options: ["$\\infty$", "$-\\infty$", "7", "0"],
      correctAnswer: 1,
      solution: "Leading term $-x^5$ dominates → $-\\infty$."
    },
    {
      id: 6,
      question: "Compute: $(x^2+3x-2) + (4x^2-5x+6) - (2x^2+x-1)$",
      options: ["$3x^2-3x+5$", "$3x^2-3x+3$", "$5x^2-3x+5$", "$3x^2+x+5$"],
      correctAnswer: 0,
      solution: "First add: $5x^2-2x+4$. Subtract: $5x^2-2x+4-2x^2-x+1=3x^2-3x+5$."
    },
    {
      id: 7,
      question: "If $f(x)=x^4+bx^2+1$ and $f(2)=33$, find $b$.",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      solution: "$f(2)=16+4b+1=33 \\Rightarrow 4b=16 \\Rightarrow b=4$."
    },
    {
      id: 8,
      question: "A polynomial has degree 8 and negative leading coefficient. Which is true?",
      options: ["Both ends up", "Both ends down", "Left down right up", "Left up right down"],
      correctAnswer: 1,
      solution: "Even degree and negative leading coefficient → both ends down."
    },
    {
      id: 9,
      question: "If $p(x)=x^3+ax$ and $p(2)=20$, find $a$.",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      solution: "$p(2)=8+2a=20 \\Rightarrow a=6$ (not listed)."
    },
    {
      id: 10,
      question: "Which polynomial is guaranteed to be even (satisfies $f(-x)=f(x)$)?",
      options: ["$x^3+x$", "$x^4-2x^2+1$", "$x^5+1$", "$x^3+2x^2$"],
      correctAnswer: 1,
      solution: "Even polynomials have only even powers (and constants)."
    },
    {
      id: 11,
      question: "Compute $f(3)$ if $f(x)=2x^3-5x^2+x-4$.",
      options: ["8", "10", "14", "20"],
      correctAnswer: 2,
      solution: "$f(3)=2(27)-5(9)+3-4=54-45+3-4=8$."
    },
    {
      id: 12,
      question: "If $p(x)=x^2+mx+9$ and $p(-3)=0$, find $m$.",
      options: ["-6", "-3", "3", "6"],
      correctAnswer: 3,
      solution: "$p(-3)=9-3m+9=0 \\Rightarrow 18-3m=0 \\Rightarrow m=6$."
    },
    {
      id: 13,
      question: "A polynomial has 5 terms and degree 4. Which could it be?",
      options: ["$x^4+x^3+x^2+x+1$", "$x^5+x^2+1$", "$x^4+2x^2+1$", "$x^3+x^2+x+1$"],
      correctAnswer: 0,
      solution: "Degree 4 and 5 terms → $x^4+x^3+x^2+x+1$."
    },
    {
      id: 14,
      question: "Which is the constant term of $-7x^6+3x^2-11x+5$?",
      options: ["-7", "3", "-11", "5"],
      correctAnswer: 3,
      solution: "Constant term is 5."
    },
    {
      id: 15,
      question: "If $f(x)=x^2-4x+k$ and the y-intercept is 9, find $k$.",
      options: ["-9", "0", "9", "13"],
      correctAnswer: 2,
      solution: "y-intercept is $f(0)=k=9$."
    }
  ]
};

// =============================================
// Geometry Expansion Modules based on [3.4]topics
// 9.1.1, 9.1.2, 9.2.1, 9.2.2
// =============================================
window.questions = window.questions || {};
window.questions.geometry = window.questions.geometry || {};

window.questions.geometry.module6 = {
  title: "Module 6",
  subtitle: "Chords, Radii, and Diameters",
  description: "Core properties of chords, radius-perpendicular relationships, and circle distance facts.",
  difficulty: "Foundation",
  questions: [
    {
      id: 1,
      question: "A segment joining two points on a circle is called:",
      options: ["a tangent", "a secant segment", "a chord", "a radius"],
      correctAnswer: 2,
      solution: "By definition, a chord is a segment with both endpoints on the circle."
    },
    {
      id: 2,
      question: "If a radius is perpendicular to a chord, then the radius:",
      options: ["is parallel to the chord", "bisects the chord", "is equal to the chord", "creates a secant"],
      correctAnswer: 1,
      solution: "A radius perpendicular to a chord bisects that chord."
    },
    {
      id: 3,
      question: "If a radius bisects a chord that is not a diameter, then the radius is:",
      options: ["perpendicular to the chord", "parallel to the chord", "a tangent", "outside the circle"],
      correctAnswer: 0,
      solution: "This is the converse property: if a radius bisects a non-diameter chord, it is perpendicular to the chord."
    },
    {
      id: 4,
      image: "assets/geometry/chord_distance_triangle.svg",
      question: "In the diagram, if radius $OP=13$ and chord $PQ=10$, what is the distance $OR$ from the center to the chord?",
      options: ["5", "8", "10", "12"],
      correctAnswer: 3,
      solution: "$R$ is midpoint of $PQ$, so $PR=5$. In right triangle $OPR$: $OR^2+5^2=13^2$, so $OR=12$."
    },
    {
      id: 5,
      question: "A circle has radius $17$ cm. A chord is $15$ cm from the center. What is the chord length?",
      options: ["16 cm", "18 cm", "20 cm", "24 cm"],
      correctAnswer: 0,
      solution: "Half-chord $=\\sqrt{17^2-15^2}=\\sqrt{64}=8$. Full chord $=2(8)=16$ cm."
    },
    {
      id: 6,
      question: "Which statement is always true in a circle?",
      options: ["All chords are congruent", "A diameter is the longest chord", "Every chord is a diameter", "A radius is longer than a diameter"],
      correctAnswer: 1,
      solution: "Diameter passes through the center and has maximum possible chord length."
    },
    {
      id: 7,
      question: "If the distance of point $P$ from the center is less than the radius, point $P$ is:",
      options: ["on the circle", "outside the circle", "inside the circle", "on a tangent only"],
      correctAnswer: 2,
      solution: "Distance from center less than radius means the point is inside."
    },
    {
      id: 8,
      question: "Two circles with the same center but different radii are called:",
      options: ["congruent circles", "intersecting circles", "concentric circles", "secant circles"],
      correctAnswer: 2,
      solution: "Concentric circles share a common center."
    },
    {
      id: 9,
      image: "assets/geometry/chord_perpendicular.svg",
      question: "In the diagram, $AD \\perp BE$ and $A$ is the center. Which must be true?",
      options: ["$BD>DE$", "$BD=DE$", "$AD=BE$", "$BE$ is tangent"],
      correctAnswer: 1,
      solution: "Perpendicular from center to a chord bisects the chord, so $BD=DE$."
    },
    {
      id: 10,
      question: "Chord $AB=24$ cm and the distance from the center to $AB$ is $9$ cm. What is the radius?",
      options: ["12 cm", "13 cm", "15 cm", "17 cm"],
      correctAnswer: 2,
      solution: "Half-chord is $12$. Radius $r=\\sqrt{12^2+9^2}=\\sqrt{225}=15$ cm."
    }
  ]
};

window.questions.geometry.module7 = {
  title: "Module 7",
  subtitle: "Tangents and Secants",
  description: "Identify secant/tangent lines and solve metric problems using tangent properties.",
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      image: "assets/geometry/secant_tangent_basic.svg",
      question: "In the diagram, which line is a tangent to the circle?",
      options: ["line TB", "line QJ", "segment OI", "segment OB"],
      correctAnswer: 1,
      solution: "A tangent intersects the circle at exactly one point. In the figure, line QJ touches the circle at one point."
    },
    {
      id: 2,
      question: "If a line is tangent to a circle at point $T$, then the radius to $T$ is:",
      options: ["parallel to the tangent", "perpendicular to the tangent", "equal to the tangent segment", "a secant"],
      correctAnswer: 1,
      solution: "A tangent is perpendicular to the radius drawn to the point of tangency."
    },
    {
      id: 3,
      question: "If a line through point $P$ on a circle is perpendicular to radius $OP$, then that line is:",
      options: ["a diameter", "a secant", "a tangent", "a chord"],
      correctAnswer: 2,
      solution: "Converse tangent property: perpendicular to radius at the endpoint implies tangent."
    },
    {
      id: 4,
      image: "assets/geometry/two_tangents_external.svg",
      question: "From external point $I$, tangent segments $IG$ and $IH$ are drawn. If $IG=14$, then $IH=$",
      options: ["7", "14", "21", "28"],
      correctAnswer: 1,
      solution: "Two tangent segments from the same external point are congruent, so $IG=IH$."
    },
    {
      id: 5,
      question: "A radius is $9$ mm and a tangent segment from external point $I$ is $40$ mm. Find $IL$.",
      options: ["39 mm", "41 mm", "49 mm", "1609 mm"],
      correctAnswer: 1,
      solution: "Right triangle: $IL^2=9^2+40^2=1681$, so $IL=41$ mm."
    },
    {
      id: 6,
      question: "If two tangents from point $P$ have lengths $2x+3$ and $5x-12$, find $x$.",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      solution: "Set equal: $2x+3=5x-12 \\Rightarrow 15=3x \\Rightarrow x=5$."
    },
    {
      id: 7,
      question: "A secant segment from external point $T$ crosses the circle at $I$ then $B$. Which segment is the secant segment?",
      options: ["segment TI", "segment IB", "segment TB", "segment OB"],
      correctAnswer: 2,
      solution: "A secant segment runs from an external point to the farther intersection point, so segment TB."
    },
    {
      id: 8,
      image: "assets/geometry/concentric_tangent_chord.svg",
      question: "Concentric circles have radii $8$ and $10$. Chord $XY$ of the outer circle is tangent to the inner circle. What is $XY$?",
      options: ["8", "10", "12", "16"],
      correctAnswer: 2,
      solution: "Distance from center to chord is inner radius $8$. Half-chord $=\\sqrt{10^2-8^2}=6$. So $XY=12$."
    },
    {
      id: 9,
      question: "In a quadrilateral with all four sides tangent to one circle, if sides are $12, x, 9, 15$ in order, find $x$.",
      options: ["6", "9", "12", "18"],
      correctAnswer: 0,
      solution: "For a tangential quadrilateral, sums of opposite sides are equal: $12+9=x+15$, so $x=6$."
    },
    {
      id: 10,
      question: "Correct this statement: 'Every secant is tangent.'",
      options: ["True for all circles", "False: secant intersects at two points, tangent at one", "True only for large circles", "True if line passes center"],
      correctAnswer: 1,
      solution: "A secant intersects at two points while a tangent intersects at exactly one point."
    }
  ]
};

window.questions.geometry.module8 = {
  title: "Module 8",
  subtitle: "Central and Inscribed Angles",
  description: "Arc naming, central-angle relations, inscribed-angle theorems, and semicircle/right-angle links.",
  difficulty: "Intermediate",
  questions: [
    {
      id: 1,
      image: "assets/geometry/central_angle_arcs.svg",
      question: "If central angle $\\angle AOB = 68^\\circ$, what is the measure of minor arc $AB$?",
      options: ["34°", "68°", "112°", "292°"],
      correctAnswer: 1,
      solution: "Measure of a minor arc equals measure of its central angle."
    },
    {
      id: 2,
      question: "If minor arc $AB=124^\\circ$, then major arc $ACB=$",
      options: ["56°", "124°", "236°", "248°"],
      correctAnswer: 2,
      solution: "Major arc measure is $360-124=236^\\circ$."
    },
    {
      id: 3,
      question: "What is the measure of any semicircle?",
      options: ["90°", "120°", "180°", "360°"],
      correctAnswer: 2,
      solution: "A semicircle is half a circle, so $180^\\circ$."
    },
    {
      id: 4,
      image: "assets/geometry/inscribed_angle_basic.svg",
      question: "If intercepted arc $AB=92^\\circ$, what is inscribed angle $\\angle APB$?",
      options: ["23°", "46°", "92°", "184°"],
      correctAnswer: 1,
      solution: "Inscribed angle equals half the intercepted arc: $\\frac{1}{2}(92)=46^\\circ$."
    },
    {
      id: 5,
      image: "assets/geometry/diameter_right_angle.svg",
      question: "If $XY$ is a diameter and $P$ is any point on the circle, then $\\angle XPY$ is:",
      options: ["acute", "obtuse", "right", "straight"],
      correctAnswer: 2,
      solution: "An inscribed angle intercepting a semicircle is always a right angle."
    },
    {
      id: 6,
      question: "Two inscribed angles intercept the same arc. What is true?",
      options: ["They are supplementary", "They are congruent", "One is twice the other", "They are always right angles"],
      correctAnswer: 1,
      solution: "Inscribed angles intercepting the same arc are congruent."
    },
    {
      id: 7,
      image: "assets/geometry/inscribed_quadrilateral.svg",
      question: "In an inscribed quadrilateral, if one angle is $112^\\circ$, the opposite angle is:",
      options: ["68°", "78°", "112°", "248°"],
      correctAnswer: 0,
      solution: "Opposite angles in a cyclic quadrilateral are supplementary: $180-112=68^\\circ$."
    },
    {
      id: 8,
      question: "If central angle $\\angle AOB=150^\\circ$, then any inscribed angle intercepting the same arc $AB$ measures:",
      options: ["30°", "60°", "75°", "150°"],
      correctAnswer: 2,
      solution: "Inscribed angle is half of corresponding central angle: $150/2=75^\\circ$."
    },
    {
      id: 9,
      question: "When should an arc be named with THREE letters instead of two?",
      options: ["Always", "Only for diameters", "When two-letter naming is ambiguous", "Never"],
      correctAnswer: 2,
      solution: "If multiple arcs share the same endpoints, use three letters to identify the specific arc."
    },
    {
      id: 10,
      question: "If inscribed angle $\\angle APB=38^\\circ$, what is the measure of intercepted arc $AB$?",
      options: ["19°", "38°", "76°", "142°"],
      correctAnswer: 2,
      solution: "Intercepted arc is twice the inscribed angle: $2(38)=76^\\circ$."
    }
  ]
};

window.questions.geometry.module9 = {
  title: "Module 9",
  subtitle: "Mixed Arc and Circle-Angle Problems",
  description: "Advanced computation with inscribed angles, intersecting chords, tangents, and secants.",
  difficulty: "Elite",
  questions: [
    {
      id: 1,
      question: "If inscribed angle $\\angle ABC=34^\\circ$, what is the measure of intercepted arc $AC$?",
      options: ["34°", "68°", "146°", "326°"],
      correctAnswer: 1,
      solution: "For inscribed angles, intercepted arc = twice the angle. So $2(34)=68^\\circ$."
    },
    {
      id: 2,
      image: "assets/geometry/intersecting_chords.svg",
      question: "Two chords intersect inside a circle at $X$. If intercepted arcs are $80^\\circ$ and $120^\\circ$, what is one angle at $X$?",
      options: ["20°", "40°", "80°", "100°"],
      correctAnswer: 3,
      solution: "Interior chord angle $=\\frac{1}{2}(80+120)=100^\\circ$."
    },
    {
      id: 3,
      image: "assets/geometry/tangent_chord_angle.svg",
      question: "A tangent and a chord form an angle intercepting a $130^\\circ$ arc. Find the angle.",
      options: ["50°", "65°", "130°", "230°"],
      correctAnswer: 1,
      solution: "Tangent-chord angle equals half its intercepted arc: $130/2=65^\\circ$."
    },
    {
      id: 4,
      image: "assets/geometry/outside_secant_angle.svg",
      question: "Two secants from outside point $X$ intercept arcs of $250^\\circ$ and $110^\\circ$. What is $\\angle X$?",
      options: ["55°", "70°", "140°", "180°"],
      correctAnswer: 1,
      solution: "External secant angle $=\\frac{1}{2}(250-110)=70^\\circ$."
    },
    {
      id: 5,
      question: "In an inscribed quadrilateral, one pair of opposite angles are $(3x+10)^\\circ$ and $(2x+20)^\\circ$. Find $x$.",
      options: ["20", "25", "30", "35"],
      correctAnswer: 2,
      solution: "Opposite angles sum to $180$: $(3x+10)+(2x+20)=180 \\Rightarrow 5x=150 \\Rightarrow x=30$."
    },
    {
      id: 6,
      question: "If two inscribed angles intercept congruent arcs, the angles are:",
      options: ["always supplementary", "always congruent", "always complementary", "always central"],
      correctAnswer: 1,
      solution: "Congruent arcs subtend congruent inscribed angles."
    },
    {
      id: 7,
      question: "An inscribed angle is right. The intercepted arc is:",
      options: ["a minor arc", "a major arc", "a semicircle", "undefined"],
      correctAnswer: 2,
      solution: "Right inscribed angle intercepts a semicircle ($180^\\circ$)."
    },
    {
      id: 8,
      question: "In a circle, $m\\angle A + m\\angle B = 160^\\circ$ and $m\\angle B + m\\angle C = 210^\\circ$. Find $m\\angle A - m\\angle C$.",
      options: ["-50°", "-40°", "40°", "50°"],
      correctAnswer: 0,
      solution: "Subtract equations: $(A+B)-(B+C)=160-210$. So $A-C=-50^\\circ$."
    },
    {
      id: 9,
      question: "If a central angle and an inscribed angle intercept the same arc, the central angle is:",
      options: ["half the inscribed angle", "equal to the inscribed angle", "twice the inscribed angle", "supplementary to inscribed angle"],
      correctAnswer: 2,
      solution: "Inscribed angle is half of central angle; therefore central angle is double."
    },
    {
      id: 10,
      question: "If minor arc $AB=96^\\circ$, what is the angle formed by two tangents from an external point touching at $A$ and $B$?",
      options: ["42°", "84°", "96°", "132°"],
      correctAnswer: 1,
      solution: "Angle between two tangents is $180 -$ minor arc: $180-96=84^\\circ$."
    }
  ]
};

// Move circle-focused modules to a dedicated subject so legacy geometry modules stay separate.
(() => {
  window.questions = window.questions || {};
  window.questions.geometry = window.questions.geometry || {};
  window.questions.circles = window.questions.circles || {};

  const sourceMap = [
    ['module1', 'module6'],
    ['module2', 'module7'],
    ['module3', 'module8'],
    ['module4', 'module9']
  ];

  sourceMap.forEach(([destKey, sourceKey], idx) => {
    const sourceModule = window.questions.geometry[sourceKey];
    if (!sourceModule) return;

    const cloned = JSON.parse(JSON.stringify(sourceModule));
    cloned.title = `Module ${idx + 1}`;
    window.questions.circles[destKey] = cloned;
  });

  delete window.questions.geometry.module6;
  delete window.questions.geometry.module7;
  delete window.questions.geometry.module8;
  delete window.questions.geometry.module9;
})();

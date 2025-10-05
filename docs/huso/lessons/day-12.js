const lesson = {
    day: 12,
    subject: 'math',
    title: 'Algebraic Expressions & Equations - The Language of Mathematics',
    emoji: '🔢',
    learningGoal: 'Master the fundamentals of algebraic expressions and linear equations to solve real-world mathematical problems',
    estimatedTime: 70,
    objectives: [
        'Simplify algebraic expressions using combining like terms and distributive property',
        'Solve linear equations using inverse operations',
        'Translate word problems into algebraic equations and solve them',
        'Apply algebraic thinking to real-world scenarios'
    ],
    discoveryStory: {
        title: 'Al-Khwarizmi and the Birth of Algebra',
        content: "Picture this: It's 820 CE in Baghdad, and a brilliant mathematician named Muhammad ibn Musa al-Khwarizmi is about to revolutionize mathematics forever. He's writing a book called 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' (The Compendious Book on Calculation by Completion and Balancing). That word 'al-jabr' would eventually become our word 'algebra'! Al-Khwarizmi realized something mind-blowing: instead of always using specific numbers, you could use symbols (letters) to represent unknown values and create general rules that work for ANY numbers. Imagine the power - one equation could solve not just one problem, but MILLIONS of similar problems! He showed merchants how to divide inheritances fairly, engineers how to design irrigation systems, and astronomers how to predict planetary movements. His revolutionary idea: mathematics isn't just about numbers you know - it's about finding numbers you DON'T know yet!",
        emoji: '📜'
    },
    keyTerms: [
        {
            term: 'Variable',
            definition: 'A letter (usually x, y, or z) that represents an unknown number or a value that can change',
            example: 'In the expression 3x + 5, the letter x is a variable that could represent any number'
        },
        {
            term: 'Coefficient',
            definition: 'The number multiplied by a variable in an algebraic term',
            example: 'In 7x, the coefficient is 7 (it means 7 times x)'
        },
        {
            term: 'Constant',
            definition: 'A number on its own that doesn\'t change (has no variable attached)',
            example: 'In 4x + 9, the number 9 is a constant'
        },
        {
            term: 'Like Terms',
            definition: 'Terms that have exactly the same variable(s) raised to the same power(s)',
            example: '3x and 7x are like terms, but 3x and 3x² are NOT like terms'
        },
        {
            term: 'Linear Equation',
            definition: 'An equation where the highest power of the variable is 1 (variables are not squared, cubed, etc.)',
            example: '2x + 5 = 13 is linear, but x² + 5 = 13 is NOT linear'
        },
        {
            term: 'Distributive Property',
            definition: 'A rule that says a(b + c) = ab + ac - you multiply what\'s outside the parentheses by everything inside',
            example: '3(x + 4) = 3x + 12'
        }
    ],
    concepts: [
        {
            title: 'What Are Algebraic Expressions?',
            explanation: 'An algebraic expression is like a mathematical sentence that combines numbers, variables, and operations (+, -, ×, ÷). Unlike equations, expressions don\'t have an equals sign - they\'re incomplete thoughts waiting to be evaluated or simplified.',
            analogy: {
                type: 'Recipe',
                description: 'Think of an algebraic expression like a recipe:\n• Variables (x, y) are like ingredients you haven\'t measured yet\n• Coefficients (3x, 5y) tell you how much of each ingredient\n• Constants (+ 7) are fixed amounts you always add\n• The whole expression (3x + 5y + 7) is your recipe!\n\nJust like "3 eggs + 2 cups flour + 1 cup sugar" becomes a cake recipe, "3x + 2y + 1" becomes a mathematical recipe for calculating values!'
            },
            mindBlowingFacts: [
                'The word "algebra" comes from Arabic "al-jabr" meaning "reunion of broken parts" - because you\'re finding missing pieces!',
                'Every time you split a restaurant bill or calculate a discount, you\'re using algebra (even if you don\'t realize it)',
                'Google\'s search algorithm uses algebra with BILLIONS of variables to rank web pages'
            ],
            whyYouCare: 'Algebra is the foundation for EVERYTHING in advanced math, science, engineering, computer programming, economics, and even social media algorithms. It\'s literally the language that describes how our world works!'
        },
        {
            title: 'Combining Like Terms',
            explanation: 'Like terms are terms you can add or subtract because they have the same variable parts. It\'s like organizing similar items together.',
            analogy: {
                type: 'Fruit Basket',
                description: 'Imagine you have:\n• 3 apples + 5 apples + 2 oranges + 4 apples + 1 orange\n\nYou can only combine apples with apples and oranges with oranges:\n• (3 + 5 + 4) apples + (2 + 1) oranges = 12 apples + 3 oranges\n\nSame with algebra:\n• 3x + 5x + 2y + 4x + y = (3 + 5 + 4)x + (2 + 1)y = 12x + 3y\n\nYou can\'t combine apples with oranges, and you can\'t combine x terms with y terms!'
            },
            mindBlowingFacts: [
                'Your brain automatically combines like terms when you think "I have 3 dollars in my pocket and 5 dollars in my wallet, so I have 8 dollars total"',
                'Combining like terms is how GPS systems simplify millions of position calculations per second'
            ],
            whyYouCare: 'Simplifying expressions makes complex problems manageable - it\'s like decluttering your room so you can find what you need!'
        },
        {
            title: 'The Distributive Property',
            explanation: 'The distributive property lets you "distribute" multiplication over addition or subtraction. It\'s one of the most powerful tools in algebra.',
            analogy: {
                type: 'Party Bags',
                description: 'Imagine you\'re making 4 party bags, and each bag needs:\n• 1 candy bar + 2 stickers\n\nTotal items = 4(candy bars + stickers) = 4 candy bars + 4 × 2 stickers = 4 candy bars + 8 stickers\n\nIn algebra: 4(x + 2) = 4x + 8\n\nYou distribute the 4 to EVERYTHING inside the parentheses!'
            },
            mindBlowingFacts: [
                'The distributive property works backwards too: 6x + 15 = 3(2x + 5) - this is called "factoring"',
                'Computer processors use the distributive property billions of times per second in calculations'
            ],
            whyYouCare: 'The distributive property is essential for solving complex equations, understanding area formulas, and even calculating taxes and discounts!'
        },
        {
            title: 'Solving Linear Equations',
            explanation: 'Solving an equation means finding the value of the variable that makes the equation true. Think of it as a mathematical detective game!',
            analogy: {
                type: 'Balance Scale',
                description: 'An equation is like a perfectly balanced scale:\n\nLeft side = Right side\n\nTo find x, you need to:\n1. Keep the scale balanced (whatever you do to one side, do to the other)\n2. Isolate x (get it alone on one side)\n\nExample: x + 5 = 12\n• Subtract 5 from BOTH sides: x + 5 - 5 = 12 - 5\n• Result: x = 7\n\nIt\'s like unwrapping a present - remove everything around x until you see what\'s inside!'
            },
            mindBlowingFacts: [
                'The equation-solving method you learn today is essentially the same one Al-Khwarizmi invented 1,200 years ago!',
                'NASA uses linear equations to calculate rocket trajectories - one wrong equation could miss Mars by millions of miles',
                'Every "if-then" statement in computer code is basically solving an equation'
            ],
            whyYouCare: 'Equation-solving is how you figure out: How much money do I need? How long will this take? What grade do I need on the final exam? It turns questions into answers!'
        },
        {
            title: 'Word Problems to Equations',
            explanation: 'Word problems describe real-world situations using words. Your job is to translate those words into mathematical equations.',
            analogy: {
                type: 'Language Translation',
                description: 'Think of it like translating English to Spanish:\n\n"A number plus 7 equals 15" → x + 7 = 15\n\nKey translation phrases:\n• "A number" or "some number" → x\n• "plus" or "sum" or "more than" → +\n• "minus" or "less than" or "difference" → -\n• "times" or "product" → ×\n• "equals" or "is" → =\n\nExample: "Sarah has 3 more books than Tom. Together they have 17 books."\n• Let x = Tom\'s books\n• Then Sarah has: x + 3\n• Together: x + (x + 3) = 17\n• Solve: 2x + 3 = 17'
            },
            mindBlowingFacts: [
                'Ancient Babylonians wrote word problems on clay tablets 4,000 years ago - and we can still solve them today!',
                'Medical dosage calculations are word problems - "If the patient weighs x kg, give y mg of medicine"',
                'Every business decision involves translating situations into equations: profit = revenue - costs'
            ],
            whyYouCare: 'Real life doesn\'t give you equations - it gives you situations. The ability to turn "I need to save $500 in 3 months" into an equation is a superpower for planning your life!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Simplifying Complex Expression',
            problemSetup: 'Simplify the expression: 4(2x + 3) - 5x + 7',
            steps: [
                {
                    step: 1,
                    description: 'Apply distributive property: 4(2x + 3) = 8x + 12',
                    reasoning: 'Multiply 4 by everything inside parentheses: 4 × 2x = 8x and 4 × 3 = 12'
                },
                {
                    step: 2,
                    description: 'Rewrite expression: 8x + 12 - 5x + 7',
                    reasoning: 'Replace 4(2x + 3) with the expanded form'
                },
                {
                    step: 3,
                    description: 'Group like terms: (8x - 5x) + (12 + 7)',
                    reasoning: 'Put x terms together and constants together (you can rearrange using commutative property)'
                },
                {
                    step: 4,
                    description: 'Combine like terms: 3x + 19',
                    reasoning: '8x - 5x = 3x and 12 + 7 = 19'
                }
            ],
            solution: '4(2x + 3) - 5x + 7 = 3x + 19',
            realWorldApplication: 'This is exactly how you\'d calculate total cost: "I bought 4 packages of (2 pens + 3 pencils), returned 5 pens, and added 7 more pencils" → Total = 3 pens + 19 pencils'
        },
        {
            scenario: 'Solving a Linear Equation',
            problemSetup: 'Solve for x: 3(x - 4) + 5 = 2x + 7',
            steps: [
                {
                    step: 1,
                    description: 'Distribute the 3: 3x - 12 + 5 = 2x + 7',
                    reasoning: 'Apply distributive property: 3(x - 4) = 3x - 12'
                },
                {
                    step: 2,
                    description: 'Simplify left side: 3x - 7 = 2x + 7',
                    reasoning: 'Combine constants on left: -12 + 5 = -7'
                },
                {
                    step: 3,
                    description: 'Subtract 2x from both sides: x - 7 = 7',
                    reasoning: 'Get all x terms on one side: 3x - 2x = x'
                },
                {
                    step: 4,
                    description: 'Add 7 to both sides: x = 14',
                    reasoning: 'Isolate x by undoing the -7: -7 + 7 = 0'
                },
                {
                    step: 5,
                    description: 'Check: 3(14 - 4) + 5 = 3(10) + 5 = 35, and 2(14) + 7 = 35 ✓',
                    reasoning: 'Always verify your answer works in the original equation'
                }
            ],
            solution: 'x = 14',
            realWorldApplication: 'This type of equation solves problems like: "A streaming service costs $3(x - 4) + $5 for x months. A competitor costs $2x + $7. When do they cost the same?" Answer: 14 months'
        },
        {
            scenario: 'Word Problem Translation',
            problemSetup: 'Emily is 3 years older than twice her brother\'s age. If Emily is 17 years old, how old is her brother?',
            steps: [
                {
                    step: 1,
                    description: 'Define the variable: Let x = brother\'s age',
                    reasoning: 'Choose what to represent with x (usually the unknown we\'re looking for)'
                },
                {
                    step: 2,
                    description: 'Translate "3 years older than twice her brother\'s age": 2x + 3',
                    reasoning: '"Twice brother\'s age" = 2x, "3 years older" = + 3'
                },
                {
                    step: 3,
                    description: 'Write equation: 2x + 3 = 17',
                    reasoning: 'Emily\'s age (2x + 3) equals 17'
                },
                {
                    step: 4,
                    description: 'Solve: 2x + 3 - 3 = 17 - 3 → 2x = 14',
                    reasoning: 'Subtract 3 from both sides to isolate the term with x'
                },
                {
                    step: 5,
                    description: 'Divide both sides by 2: x = 7',
                    reasoning: 'Divide by the coefficient to get x alone'
                },
                {
                    step: 6,
                    description: 'Check: "Brother is 7, twice his age is 14, add 3 = 17 ✓"',
                    reasoning: 'Verify the answer makes sense in the original problem'
                }
            ],
            solution: 'Brother is 7 years old',
            realWorldApplication: 'Age problems like this appear in logic puzzles, family planning, legal age requirements, and even carbon dating in archaeology!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Simplify the expression: 5(2x - 3) + 4x - 7',
            hints: [
                'First, use the distributive property on 5(2x - 3)',
                'Then combine all x terms together and all constant terms together',
                'Remember: 5 × 2x = 10x and 5 × (-3) = -15'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Solve for x: 4x + 9 = 2x + 21',
            hints: [
                'Get all x terms on one side by subtracting 2x from both sides',
                'Then get x alone by subtracting 9 from both sides',
                'Finally, divide by the coefficient of x'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p3',
            question: 'A rectangle\'s length is 5 cm more than twice its width. If the length is 17 cm, what is the width?',
            hints: [
                'Let x = width',
                'Translate: "5 cm more than twice the width" = 2x + 5',
                'Set up equation: 2x + 5 = 17'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p4',
            question: 'Solve for x: 3(x + 4) - 2(x - 1) = 18',
            hints: [
                'Distribute both 3 and -2 to their respective parentheses',
                'Be careful with the negative sign: -2(x - 1) = -2x + 2',
                'Combine like terms before isolating x'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p5',
            question: 'Marcus has $5 more than three times what Jenna has. Together they have $45. How much does each person have?',
            hints: [
                'Let x = Jenna\'s money',
                'Then Marcus has: 3x + 5',
                'Together: x + (3x + 5) = 45',
                'After solving for x (Jenna), calculate Marcus\'s amount'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'What is the coefficient of x in the expression 7x - 3?',
            options: [
                { label: 'A', text: '7' },
                { label: 'B', text: '-3' },
                { label: 'C', text: 'x' },
                { label: 'D', text: '7x' },
                { label: 'E', text: '4' }
            ],
            correctAnswer: 'A',
            explanation: 'The coefficient is the number being multiplied by the variable. In 7x, the coefficient is 7.',
            storyExplanation: 'Think of the coefficient as "how many x\'s you have" - like having 7 apples means the "coefficient" of apples is 7!'
        },
        {
            id: 'q2',
            question: 'Simplify: 3x + 5x - 2x',
            options: [
                { label: 'A', text: '6x' },
                { label: 'B', text: '10x' },
                { label: 'C', text: '3x' },
                { label: 'D', text: '8x' },
                { label: 'E', text: '5x' }
            ],
            correctAnswer: 'A',
            explanation: 'Combine like terms: 3x + 5x - 2x = (3 + 5 - 2)x = 6x',
            storyExplanation: 'Imagine you have 3 oranges, someone gives you 5 more oranges, then you give away 2 oranges. You end up with 3 + 5 - 2 = 6 oranges (or 6x)!'
        },
        {
            id: 'q3',
            question: 'Apply the distributive property: 4(x + 3) = ?',
            options: [
                { label: 'A', text: '4x + 3' },
                { label: 'B', text: 'x + 12' },
                { label: 'C', text: '4x + 12' },
                { label: 'D', text: '4x + 7' },
                { label: 'E', text: '7x' }
            ],
            correctAnswer: 'C',
            explanation: 'Multiply 4 by both terms inside: 4 × x = 4x and 4 × 3 = 12, so 4(x + 3) = 4x + 12',
            storyExplanation: 'If you\'re making 4 party bags with 1 toy (x) and 3 candies each, you need 4 toys (4x) and 4 × 3 = 12 candies total!'
        },
        {
            id: 'q4',
            question: 'Solve for x: x + 7 = 15',
            options: [
                { label: 'A', text: 'x = 22' },
                { label: 'B', text: 'x = 7' },
                { label: 'C', text: 'x = 8' },
                { label: 'D', text: 'x = 15' },
                { label: 'E', text: 'x = 8' }
            ],
            correctAnswer: 'C',
            explanation: 'Subtract 7 from both sides: x + 7 - 7 = 15 - 7, so x = 8',
            storyExplanation: 'Think: "Some number plus 7 equals 15. What\'s the number?" 8 + 7 = 15, so x = 8! It\'s like reverse addition.'
        },
        {
            id: 'q5',
            question: 'Which equation correctly represents: "A number decreased by 5 equals 12"?',
            options: [
                { label: 'A', text: 'x + 5 = 12' },
                { label: 'B', text: 'x - 5 = 12' },
                { label: 'C', text: '5 - x = 12' },
                { label: 'D', text: '12 - x = 5' },
                { label: 'E', text: 'x = 12 - 5' }
            ],
            correctAnswer: 'B',
            explanation: '"Decreased by 5" means subtract 5, so "a number (x) decreased by 5" is x - 5. This equals 12, giving us x - 5 = 12',
            storyExplanation: '"Decreased by" is math language for "take away" or "minus". If you had x dollars and spent 5, you\'d have x - 5 dollars left. That equals 12, so x - 5 = 12!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'Remember equation-solving steps with "KISS": Keep it Simple, Swap (move terms to opposite sides)',
            example: 'For 3x + 5 = 14, KISS: Keep x on left, Swap +5 to right (becomes -5): 3x = 9, then divide: x = 3'
        },
        {
            technique: 'Visual',
            description: 'The equation is a BALANCE SCALE: whatever you do to one side, do to the other to keep it balanced',
            example: 'x + 3 = 10 → Remove 3 from LEFT, remove 3 from RIGHT → x = 7'
        },
        {
            technique: 'Story',
            description: 'Distributive property: "Share fairly" - the number outside shares with everyone inside the parentheses',
            example: '3(x + 2) → "3 shares with x AND with 2" → 3x + 6'
        },
        {
            technique: 'Phrase',
            description: 'Word problem translations: "More than/older than" = ADD (+), "Less than/younger than" = SUBTRACT (-), "Times/product" = MULTIPLY (×)',
            example: '"5 more than x" = x + 5, "5 less than x" = x - 5, "5 times x" = 5x'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Forgetting to distribute to ALL terms',
            correction: '3(x + 4) is NOT 3x + 4. You must multiply 3 by BOTH x AND 4 to get 3x + 12',
            whyItMatters: 'This error can make your answer completely wrong and is one of the most common mistakes in algebra exams'
        },
        {
            mistake: 'Combining unlike terms',
            correction: 'You CANNOT combine 3x + 4y (different variables) or 2x + 3x² (different powers). Only combine terms with identical variable parts',
            whyItMatters: 'It\'s like trying to add apples and oranges - they\'re fundamentally different things that can\'t be combined into one term'
        },
        {
            mistake: 'Only operating on one side of equation',
            correction: 'If you subtract 5 from the left side of x + 5 = 12, you MUST subtract 5 from the right side too: x + 5 - 5 = 12 - 5',
            whyItMatters: 'The equation is an equality - it must stay balanced. Operating on only one side breaks the equation and gives wrong answers'
        },
        {
            mistake: 'Sign errors with negative distributive',
            correction: '-2(x - 3) is NOT -2x - 6. It\'s -2x + 6 because -2 × (-3) = +6',
            whyItMatters: 'Negative times negative equals positive! Missing this changes signs throughout your work and leads to wrong final answers'
        },
        {
            mistake: 'Translating "less than" backwards',
            correction: '"5 less than x" is x - 5, NOT 5 - x. The order matters! "Less than" means subtract FROM the number mentioned after',
            whyItMatters: 'Word order in English doesn\'t always match math order. This mistake flips your equation and gives the opposite answer'
        }
    ],
    quickReference: [
        {
            title: 'Distributive Property',
            content: 'a(b + c) = ab + ac\nExample: 3(x + 4) = 3x + 12',
            category: 'rule'
        },
        {
            title: 'Combining Like Terms',
            content: 'Add/subtract coefficients of identical variable parts:\n3x + 5x = 8x\n7y² - 2y² = 5y²\nBut 3x + 5y CANNOT be combined',
            category: 'rule'
        },
        {
            title: 'Equation Solving Steps',
            content: '1. Simplify both sides (distribute, combine like terms)\n2. Move variable terms to one side\n3. Move constants to other side\n4. Divide by coefficient\n5. Check your answer',
            category: 'process'
        },
        {
            title: 'Word Problem Translations',
            content: '"Sum/more than/increased by" → +\n"Difference/less than/decreased by" → -\n"Product/times/of" → ×\n"Quotient/divided by/per" → ÷\n"Is/equals/gives" → =',
            category: 'rule'
        }
    ],
    summary: [
        'Algebraic expressions combine variables, coefficients, and constants using mathematical operations',
        'The distributive property a(b + c) = ab + ac is essential for expanding expressions and solving equations',
        'Combine like terms by adding/subtracting their coefficients (only terms with identical variable parts)',
        'Solve linear equations by isolating the variable: perform inverse operations on both sides to maintain balance',
        'Word problems translate to equations using key phrases: "more than" → +, "less than" → -, "times" → ×, "is" → =',
        'Always check your solution by substituting it back into the original equation',
        'Algebra is the foundation of all advanced mathematics and appears in real-world applications from budgeting to engineering'
    ],
    selfAssessment: [
        'I can identify variables, coefficients, and constants in algebraic expressions',
        'I can apply the distributive property correctly, including with negative numbers',
        'I can simplify expressions by combining like terms',
        'I can solve linear equations by performing the same operations on both sides',
        'I can translate word problems into algebraic equations',
        'I can check my solutions to verify they\'re correct',
        'I understand how algebra applies to real-world problem solving'
    ]
};
export default lesson;
//# sourceMappingURL=day-12.js.map
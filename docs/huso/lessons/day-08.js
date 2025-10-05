const lesson = {
    day: 8,
    subject: 'math',
    title: 'Fractions, Decimals & Percentages - Three Forms of the Same Thing',
    emoji: '🔢',
    learningGoal: 'Master conversions between fractions, decimals, and percentages, and use them to solve real-world problems',
    estimatedTime: 60,
    objectives: [
        'Convert fluently between fractions, decimals, and percentages',
        'Perform operations with fractions (add, subtract, multiply, divide)',
        'Solve real-world problems involving percentages (discounts, tips, interest)'
    ],
    discoveryStory: {
        title: 'Simon Stevin and the Decimal Revolution',
        content: "In 1585, Flemish mathematician Simon Stevin published a tiny 7-page booklet called 'De Thiende' (The Tenth) that changed mathematics FOREVER. His radical idea? Instead of using clunky fractions like 3/10 + 4/100, just write them as 0.34! People thought he was crazy - fractions had been used for thousands of years! But Stevin showed that decimals made calculations SO MUCH EASIER. Adding 0.25 + 0.5 is way simpler than adding 1/4 + 1/2! Within 50 years, decimals spread across Europe. Today, every calculator, computer, and phone uses Stevin's decimal system. The stock market, science, engineering - all run on decimals. And here's the mind-blowing part: decimals, fractions, and percentages are just THREE DIFFERENT WAYS to write the SAME NUMBER! 0.5 = 1/2 = 50% - same amount, different notation. It's like calling the same person by their first name, nickname, and formal title - still the same person!",
        emoji: '💰'
    },
    keyTerms: [
        {
            term: 'Fraction',
            definition: 'A number expressed as one integer divided by another (numerator/denominator)',
            example: '3/4 means "3 parts out of 4 equal parts" - like 3 slices of a pizza cut into 4 pieces'
        },
        {
            term: 'Decimal',
            definition: 'A number expressed using a decimal point, with digits representing tenths, hundredths, etc.',
            example: '0.75 means 7 tenths + 5 hundredths = 75/100 = 3/4'
        },
        {
            term: 'Percentage',
            definition: 'A fraction expressed as parts per hundred (literally "per cent" = per hundred)',
            example: '75% means 75 per 100 = 75/100 = 0.75 = 3/4'
        },
        {
            term: 'Equivalent Fractions',
            definition: 'Different fractions that represent the same value',
            example: '1/2 = 2/4 = 3/6 = 50/100 - all equal to the same amount!'
        },
        {
            term: 'Simplest Form',
            definition: 'A fraction where the numerator and denominator have no common factors except 1',
            example: '6/8 simplified is 3/4 (divide both by 2, their GCD)'
        },
        {
            term: 'Common Denominator',
            definition: 'A shared denominator used when adding or subtracting fractions',
            example: 'To add 1/4 + 1/6, find common denominator 12: 3/12 + 2/12 = 5/12'
        }
    ],
    concepts: [
        {
            title: 'The Holy Trinity: Fraction = Decimal = Percentage',
            explanation: "These three forms represent the SAME value, just written differently. Converting between them is like translating between languages - same meaning, different words!",
            analogy: {
                type: 'Three Languages',
                description: 'Imagine the number "half" in three languages:\n• **Fraction language**: 1/2 (1 divided by 2)\n• **Decimal language**: 0.5 (5 tenths)\n• **Percentage language**: 50% (50 per hundred)\n\nAll say "HALF"! Just different notation.\n\nConversion tricks:\n• **Fraction → Decimal**: Divide top by bottom (1÷2 = 0.5)\n• **Decimal → Percentage**: Multiply by 100 (0.5 × 100 = 50%)\n• **Percentage → Fraction**: Over 100, then simplify (50/100 = 1/2)\n• **Fraction → Percentage**: Convert to decimal first, then multiply by 100'
            },
            mindBlowingFacts: [
                'Some decimals never end! 1/3 = 0.333333... forever (repeating decimal)',
                '0.999999... (repeating forever) actually EQUALS 1 exactly! (Mind = blown)',
                'Pi (π) is an irrational decimal - it never ends AND never repeats!',
                'Ancient Babylonians used fractions based on 60 - that\'s why we have 60 minutes in an hour!',
                'Percentages over 100% are totally fine - 150% means one and a half times something'
            ],
            whyYouCare: 'Shopping discounts (50% off!), test scores (got 85%!), sports statistics (batting average .300), cooking (3/4 cup flour), money ($0.50), grades (75/100) - you use all three forms daily without thinking!'
        },
        {
            title: 'Fraction Operations: Add, Subtract, Multiply, Divide',
            explanation: "Different operations have different rules. Addition/subtraction need common denominators. Multiplication is easy (multiply across). Division = multiply by reciprocal!",
            analogy: {
                type: 'Pizza Math',
                description: '**ADDITION**: 1/4 + 1/2 pizza\nCan\'t add different-sized slices! Convert to same size: 1/4 + 2/4 = 3/4 pizza\nRule: Find common denominator, then add numerators\n\n**MULTIPLICATION**: 1/2 × 3/4 pizza  \nTake 1/2 of a 3/4 pizza = 3/8 pizza\nRule: Multiply numerators, multiply denominators (1×3)/(2×4) = 3/8\n\n**DIVISION**: 1/2 ÷ 1/4  \n"How many 1/4 pieces fit in 1/2?" = 2 pieces\nRule: Keep-Change-Flip! Keep first, change ÷ to ×, flip second → 1/2 × 4/1 = 2'
            },
            mindBlowingFacts: [
                'Dividing by a fraction makes the answer BIGGER! (6 ÷ 1/2 = 12, not 3!)',
                'When multiplying fractions, you can "cancel" across before multiplying (saves work!)',
                'Mixed numbers (2 1/3) are actually addition! 2 + 1/3 = 7/3',
                'The reciprocal of a fraction (flip it upside down) is what you multiply by to get 1',
                'Ancient Egyptians ONLY used unit fractions (numerator = 1) like 1/2, 1/3, 1/5'
            ],
            whyYouCare: 'Cooking recipes (double a recipe = multiply fractions), splitting bills (divide by fractions), construction measurements (1/2 inch + 3/8 inch = ?), understanding sale prices, calculating tips!'
        },
        {
            title: 'Percentage Problems: The Three Types',
            explanation: "Every percentage problem asks one of three questions: (1) Find the part, (2) Find the whole, (3) Find the percentage. Formula: Part = Percent × Whole.",
            analogy: {
                type: 'The Triangle Method',
                description: 'Draw a triangle:\n```\n    Part\n   ------\n  %  |  Whole\n```\n\n**Type 1 - Find the PART**: "What is 20% of 50?"\nPart = 20% × 50 = 0.20 × 50 = 10\n\n**Type 2 - Find the WHOLE**: "15 is 30% of what number?"\nWhole = Part ÷ Percent = 15 ÷ 0.30 = 50\n\n**Type 3 - Find the PERCENT**: "12 is what percent of 40?"\nPercent = Part ÷ Whole = 12 ÷ 40 = 0.30 = 30%\n\nCover what you\'re looking for, do the operation shown!'
            },
            mindBlowingFacts: [
                'A 50% increase followed by a 50% decrease does NOT get you back to the original! (100 → 150 → 75)',
                'Banks use compound interest - earning interest on interest (exponential growth!)',
                'Sales tax percentages vary by state/country - Nevada 0%, Tennessee 9.55%!',
                'Your body is about 60% water by weight (percentage of a living thing!)',
                'Tipping percentages: 15% standard, 20% good service, 25% exceptional'
            ],
            whyYouCare: 'Sales (30% off!), tips (15-20% of bill), taxes (7% sales tax), test scores (85%), interest rates (5% APR), statistics (48% voted yes), growth rates (population up 3%), discounts everywhere!'
        }
    ],
    workedExamples: [
        {
            scenario: 'The Triple Discount Trap',
            problemSetup: 'A store advertises: "40% off, then take an additional 20% off, then get another 10% off!" The original price is $100. How much do you actually pay?',
            steps: [
                {
                    step: 1,
                    description: 'Apply first discount (40% off)',
                    reasoning: 'Pay 60% of $100 = 0.60 × $100 = $60\n(Or: $100 - $40 = $60)'
                },
                {
                    step: 2,
                    description: 'Apply second discount (20% off the NEW price)',
                    reasoning: 'Pay 80% of $60 = 0.80 × $60 = $48\n(Not 20% of original! 20% off the already-discounted price)'
                },
                {
                    step: 3,
                    description: 'Apply third discount (10% off the NEW price)',
                    reasoning: 'Pay 90% of $48 = 0.90 × $48 = $43.20'
                },
                {
                    step: 4,
                    description: 'Calculate total discount',
                    reasoning: 'Original: $100, Final: $43.20\nTotal discount: $56.80 = 56.8% off\nNOT 70% off (40+20+10)!'
                }
            ],
            solution: 'You pay $43.20 (56.8% total discount, NOT 70%!). Successive discounts multiply, they don\'t add!',
            realWorldApplication: 'Stores love advertising "additional discounts" because customers think they add! Really: 40% off then 20% off = 52% total (not 60%). Always calculate step-by-step!'
        },
        {
            scenario: 'The Tip Calculator',
            problemSetup: 'Your restaurant bill is $47.80. You want to leave an 18% tip. How much should you tip? What\'s the total?',
            steps: [
                {
                    step: 1,
                    description: 'Calculate 18% of the bill',
                    reasoning: 'Tip = 18% × $47.80 = 0.18 × 47.80 = $8.604 ≈ $8.60'
                },
                {
                    step: 2,
                    description: 'Mental math shortcut (optional)',
                    reasoning: '10% of $47.80 = $4.78\n5% = half of 10% = $2.39\n3% = roughly $1.43\n18% = 10% + 5% + 3% ≈ $8.60\n\nOr: 20% = $9.56, subtract a bit for 18%'
                },
                {
                    step: 3,
                    description: 'Calculate total',
                    reasoning: 'Total = Bill + Tip = $47.80 + $8.60 = $56.40'
                }
            ],
            solution: 'Tip: $8.60, Total: $56.40. Quick mental check: ~$9 tip on ~$48 bill = ~$57 total ✓',
            realWorldApplication: 'Real tipping trick: For 20%, move decimal left one place and double (47.80 → 4.78 → $9.56). For 15%, do 10% + half of 10%. For 18%, do 20% - 2%.'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Convert the following to the other two forms: (a) 3/5 = ? (decimal) = ? (percentage), (b) 0.625 = ? (fraction) = ? (percentage), (c) 45% = ? (decimal) = ? (fraction simplified)',
            hints: [
                'Fraction to decimal: divide top by bottom',
                'Decimal to percentage: multiply by 100',
                'Percentage to fraction: over 100, then simplify using GCD'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'A jacket costs $80. It goes on sale for 25% off. You have a coupon for an additional 10% off the sale price. (a) What is the final price? (b) What is the total percentage discount? (c) Is this the same as a 35% discount? Explain.',
            hints: [
                'Apply discounts one at a time, not all at once!',
                'First discount: 25% off $80',
                'Second discount: 10% off the NEW price',
                'Successive discounts multiply: (1-0.25) × (1-0.10)'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which of the following is equivalent to 0.6?',
            options: [
                { label: 'A', text: '6/100' },
                { label: 'B', text: '3/5' },
                { label: 'C', text: '6%' },
                { label: 'D', text: '1/6' },
                { label: 'E', text: '60/10' }
            ],
            correctAnswer: 'B',
            explanation: '0.6 = 6/10 = 3/5 (simplified) = 60%. Not 6/100 (that\'s 0.06).',
            storyExplanation: '0.6 means 6 tenths. Write as fraction: 6/10. Simplify by dividing both by 2: 3/5. Check: 3÷5 = 0.6 ✓'
        },
        {
            id: 'q2',
            question: 'What is 1/4 + 1/6?',
            options: [
                { label: 'A', text: '2/10' },
                { label: 'B', text: '1/5' },
                { label: 'C', text: '5/12' },
                { label: 'D', text: '2/24' },
                { label: 'E', text: '1/3' }
            ],
            correctAnswer: 'C',
            explanation: 'Find common denominator (LCM of 4 and 6 = 12): 1/4 = 3/12, 1/6 = 2/12, so 3/12 + 2/12 = 5/12.',
            storyExplanation: 'You can\'t add 1/4 and 1/6 directly - different slice sizes! Convert both to 12ths: 1/4 = 3/12 (multiply by 3/3), 1/6 = 2/12 (multiply by 2/2). Now add: 3/12 + 2/12 = 5/12!'
        },
        {
            id: 'q3',
            question: 'What is 20% of 150?',
            options: [
                { label: 'A', text: '20' },
                { label: 'B', text: '30' },
                { label: 'C', text: '130' },
                { label: 'D', text: '3' },
                { label: 'E', text: '750' }
            ],
            correctAnswer: 'B',
            explanation: '20% of 150 = 0.20 × 150 = 30. Or: 10% of 150 is 15, so 20% is 15 × 2 = 30.',
            storyExplanation: 'Think of "of" as multiplication: 20% OF 150 = 0.20 × 150 = 30. Mental math shortcut: 10% of 150 is 15, so 20% (double it) is 30!'
        },
        {
            id: 'q4',
            question: 'A price increases from $50 to $65. What is the percentage increase?',
            options: [
                { label: 'A', text: '15%' },
                { label: 'B', text: '23%' },
                { label: 'C', text: '30%' },
                { label: 'D', text: '65%' },
                { label: 'E', text: '50%' }
            ],
            correctAnswer: 'C',
            explanation: 'Increase = $65 - $50 = $15. Percentage = (increase ÷ original) × 100 = (15÷50) × 100 = 30%.',
            storyExplanation: 'Find the CHANGE ($15), then ask "what percent of the ORIGINAL ($50) is this?" Answer: 15 is 30% of 50 (because 15÷50 = 0.30 = 30%).'
        },
        {
            id: 'q5',
            question: 'Which is the correct way to divide fractions: 2/3 ÷ 1/4 = ?',
            options: [
                { label: 'A', text: '2/12' },
                { label: 'B', text: '8/3' },
                { label: 'C', text: '3/8' },
                { label: 'D', text: '2/7' },
                { label: 'E', text: '6/4' }
            ],
            correctAnswer: 'B',
            explanation: 'Keep-Change-Flip! Keep 2/3, change ÷ to ×, flip 1/4 to 4/1: 2/3 × 4/1 = 8/3.',
            storyExplanation: 'Dividing by a fraction is the same as multiplying by its reciprocal (upside-down version). So 2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3. Check: "How many 1/4s fit in 2/3?" About 2.67, which is 8/3!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'To convert Fraction → Decimal → Percentage: "DVD" - Divide (fraction), then Verify, then times 100',
            example: '3/4: Divide (3÷4=0.75), times 100 (75%)'
        },
        {
            technique: 'Rhyme',
            description: 'For dividing fractions: "Dividing fractions is no big deal, just flip the second and multiply for real!"',
            example: 'a/b ÷ c/d = a/b × d/c (flip the second fraction)'
        },
        {
            technique: 'Visual',
            description: 'Percentages are always "out of 100" - imagine a 10×10 grid. 75% means 75 squares shaded out of 100!',
            example: 'Visualize a percentage as a partially filled 100-square grid'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Adding percentages directly when applying multiple discounts',
            correction: 'Successive discounts MULTIPLY, don\'t add! 50% off then 20% off ≠ 70% off. It\'s (0.50) × (0.80) = 0.40 = 60% total discount.',
            whyItMatters: 'Stores advertise "additional discounts" because customers think they add up. They don\'t! Always calculate each discount applied to the new price.'
        },
        {
            mistake: 'Forgetting to simplify fractions',
            correction: '6/8 is not in simplest form - always divide both parts by their GCD. 6/8 = 3/4 (divide by 2).',
            whyItMatters: 'Unsimplified fractions are harder to work with and can make you miss equivalent answers on tests!'
        },
        {
            mistake: 'Confusing "of" and "off" in percentage problems',
            correction: '"20% OF 50" means 0.20 × 50 = 10. "20% OFF $50" means pay 80% of $50 = $40. Very different!',
            whyItMatters: 'OF = multiply to find amount. OFF = subtract from 100% to find what you pay. Mixing these up costs money!'
        }
    ],
    quickReference: [
        {
            title: 'Conversion Formulas',
            content: 'Fraction → Decimal: Divide numerator by denominator\nDecimal → Percentage: Multiply by 100\nPercentage → Decimal: Divide by 100\nPercentage → Fraction: Over 100, then simplify',
            category: 'formula'
        },
        {
            title: 'Fraction Operations',
            content: 'Add/Subtract: Common denominator required\nMultiply: Multiply across (numerators × numerators, denominators × denominators)\nDivide: Keep-Change-Flip (multiply by reciprocal)',
            category: 'rule'
        },
        {
            title: 'Percentage Formula',
            content: 'Part = Percent × Whole\nPercent = (Part ÷ Whole) × 100\nWhole = Part ÷ Percent',
            category: 'formula'
        }
    ],
    summary: [
        'Fractions, decimals, and percentages are three different ways to represent the same value',
        'Convert fraction to decimal by dividing; decimal to percentage by multiplying by 100',
        'Adding/subtracting fractions requires common denominators; multiplying is straight across; dividing uses "keep-change-flip"',
        'Percentage problems have three types: find the part, find the whole, or find the percentage',
        'Successive discounts multiply (not add): 50% off then 20% off = 60% total discount, not 70%',
        'Simplify fractions by dividing numerator and denominator by their GCD'
    ],
    selfAssessment: [
        'I can convert fluently between fractions, decimals, and percentages',
        'I can add, subtract, multiply, and divide fractions correctly',
        'I understand the "keep-change-flip" rule for dividing fractions',
        'I can solve percentage problems (finding part, whole, or percent)',
        'I know that successive discounts multiply, not add',
        'I can calculate tips, discounts, and sales tax in real-world situations'
    ]
};
export default lesson;
//# sourceMappingURL=day-08.js.map
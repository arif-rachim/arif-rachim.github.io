const lesson = {
    day: 4,
    subject: 'math',
    title: 'Number Systems & Divisibility - The Building Blocks',
    emoji: '🔢',
    learningGoal: 'Master the fundamental rules of numbers, discover divisibility shortcuts, and understand why prime numbers are the "atoms" of mathematics',
    estimatedTime: 60,
    objectives: [
        'Apply divisibility rules to quickly determine if numbers are divisible by 2, 3, 4, 5, 6, 8, 9, 10',
        'Find the greatest common divisor (GCD) and least common multiple (LCM) using prime factorization',
        'Identify prime numbers and understand their importance in mathematics'
    ],
    discoveryStory: {
        title: 'The Ancient Mystery of Prime Numbers',
        content: "Around 300 BCE, Greek mathematician Euclid proved something ASTONISHING: there are INFINITELY many prime numbers! But here's where it gets mysterious - prime numbers seem to appear randomly (2, 3, 5, 7, 11, 13...), yet they follow hidden patterns mathematicians are STILL discovering today. Fast forward to World War II: Alan Turing and his team at Bletchley Park used prime number properties to crack the Nazi Enigma code, helping win the war! Today, every time you shop online or send a private message, HUGE prime numbers (hundreds of digits long!) protect your data through encryption. Banks transfer trillions of dollars daily using prime number security. The crazy part? We still don't have a formula to predict the next prime number! They're like mathematical diamonds - rare, valuable, and full of mystery. A $1 million prize STILL awaits anyone who can solve the Riemann Hypothesis about prime number distribution!",
        emoji: '🔐'
    },
    keyTerms: [
        {
            term: 'Prime Number',
            definition: 'A whole number greater than 1 that has exactly two factors: 1 and itself',
            example: '7 is prime because its only factors are 1 and 7. It can\'t be divided evenly by any other number.'
        },
        {
            term: 'Composite Number',
            definition: 'A whole number greater than 1 that has more than two factors (can be broken down into smaller factors)',
            example: '12 is composite because it has factors 1, 2, 3, 4, 6, and 12. It can be written as 2 × 2 × 3.'
        },
        {
            term: 'Prime Factorization',
            definition: 'Breaking a number down into a product of prime numbers only',
            example: '60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Every composite number has exactly ONE unique prime factorization!'
        },
        {
            term: 'GCD (Greatest Common Divisor)',
            definition: 'The largest number that divides evenly into two or more numbers',
            example: 'GCD(12, 18) = 6 because 6 is the biggest number that divides both 12 and 18'
        },
        {
            term: 'LCM (Least Common Multiple)',
            definition: 'The smallest number that is a multiple of two or more numbers',
            example: 'LCM(4, 6) = 12 because 12 is the smallest number that both 4 and 6 divide into'
        },
        {
            term: 'Divisibility',
            definition: 'When one number can be divided by another with no remainder',
            example: '24 is divisible by 6 because 24 ÷ 6 = 4 with no remainder'
        }
    ],
    concepts: [
        {
            title: 'Prime Numbers: The Atoms of Mathematics',
            explanation: "Just like all matter is made of atoms, all whole numbers are made of prime numbers! Every composite number can be broken down into a unique set of prime factors - this is called the Fundamental Theorem of Arithmetic.",
            analogy: {
                type: 'LEGO Blocks',
                description: 'Think of prime numbers as LEGO base blocks that can\'t be broken down further. Composite numbers are structures BUILT from these blocks. For example:\n• 2, 3, 5, 7 are like red, blue, green, yellow base blocks (primes)\n• 12 is like a structure: 🔴🔴🔵 (2 × 2 × 3)\n• 30 is like: 🔴🔵🟢 (2 × 3 × 5)\nNo matter how you try, you can ONLY build 12 using two reds and one blue - that\'s its unique prime factorization!'
            },
            mindBlowingFacts: [
                '2 is the ONLY even prime number - all other even numbers are divisible by 2!',
                'The largest known prime number (as of 2024) has over 24 MILLION digits - it would take months to write it out!',
                'Twin primes are primes that differ by 2 (like 11 & 13, or 17 & 19). We still don\'t know if there are infinitely many!',
                'There\'s a $1 million prize for proving the Riemann Hypothesis about prime number patterns',
                'Cicadas evolved to emerge every 13 or 17 years (both primes!) to avoid predators with different life cycles'
            ],
            whyYouCare: 'Every password, every online purchase, every encrypted message relies on the fact that multiplying two large primes is easy, but factoring the result back is nearly IMPOSSIBLE. Your credit card security depends on prime numbers!'
        },
        {
            title: 'Divisibility Rules: Math Shortcuts',
            explanation: "Instead of doing long division, you can instantly tell if a number is divisible by 2, 3, 4, 5, 6, 8, 9, or 10 using simple tricks!",
            analogy: {
                type: 'Detective Clues',
                description: 'Divisibility rules are like detective shortcuts. Instead of interrogating every suspect (dividing every number), you look for telltale clues:\n• Divisible by 2? Check last digit (even = yes)\n• Divisible by 3? Add all digits - if sum divisible by 3, YES!\n• Divisible by 5? Last digit 0 or 5? Case closed!\nIt\'s like being able to tell someone\'s age just by looking at their hands - a quick glance gives you the answer!'
            },
            mindBlowingFacts: [
                'The rule for 7 is so complicated most people just divide! (Double last digit, subtract from rest)',
                '142,857 is divisible by 3 (1+4+2+8+5+7 = 27, which is divisible by 3)',
                'ANY number with alternating 1s and 0s (like 10101010) is divisible by 11',
                'A number is divisible by 6 if it passes BOTH the test for 2 AND 3 (since 6 = 2 × 3)',
                'The divisibility rule for 9 also tells you the "digital root" of a number'
            ],
            whyYouCare: 'These shortcuts make mental math LIGHTNING fast. Imagine splitting a pizza bill: "Is $147 divisible by 3?" → Add digits: 1+4+7=12, 1+2=3 → YES! Each person pays $49. No calculator needed!'
        },
        {
            title: 'GCD and LCM: Finding Patterns',
            explanation: "GCD finds the 'greatest common divisor' (biggest number that divides all given numbers). LCM finds the 'least common multiple' (smallest number all given numbers divide into).",
            analogy: {
                type: 'Gear System',
                description: 'Imagine two gears - one with 12 teeth, one with 18 teeth:\n• GCD(12,18) = 6 → The biggest gear tooth size that fits BOTH gears evenly\n• LCM(12,18) = 36 → When both gears start together, after how many teeth will they align again?\n\nReal world: If you have 12 red tiles and 18 blue tiles, and want to make identical rows, GCD(12,18)=6 tells you that you can make 6 rows (2 red + 3 blue per row)!'
            },
            mindBlowingFacts: [
                'GCD × LCM = product of the two numbers! For example: GCD(12,18) × LCM(12,18) = 6 × 36 = 216 = 12 × 18',
                'The Euclidean Algorithm (from 300 BCE!) finds GCD incredibly fast even for HUGE numbers',
                'If GCD(a,b) = 1, we say a and b are "coprime" or "relatively prime" - they share NO common factors except 1',
                'LCM is used to add fractions with different denominators (find common denominator)',
                'Traffic lights are timed using LCM to synchronize patterns!'
            ],
            whyYouCare: 'GCD helps simplify fractions: GCD(24,36)=12, so 24/36 = 2/3. LCM solves scheduling problems: "Buses A and B leave every 12 and 18 minutes. When will they next leave together?" LCM(12,18)=36 minutes!'
        }
    ],
    workedExamples: [
        {
            scenario: 'The Cookie Division Problem',
            problemSetup: 'Sarah has 48 chocolate chip cookies and 36 oatmeal cookies. She wants to make identical gift bags with the same number of each type in every bag, using ALL cookies. What\'s the maximum number of bags she can make?',
            steps: [
                {
                    step: 1,
                    description: 'Identify what we\'re looking for',
                    reasoning: 'We want the MAXIMUM number of bags where cookies divide evenly = Greatest Common Divisor of 48 and 36'
                },
                {
                    step: 2,
                    description: 'Find prime factorization of both numbers',
                    reasoning: '48 = 2 × 24 = 2 × 2 × 12 = 2 × 2 × 2 × 6 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3\n36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3 = 2² × 3²'
                },
                {
                    step: 3,
                    description: 'Find GCD by taking lowest power of common primes',
                    reasoning: 'Common primes: 2 and 3\nLowest power of 2: 2² (from 36)\nLowest power of 3: 3¹ (from 48)\nGCD = 2² × 3 = 4 × 3 = 12'
                },
                {
                    step: 4,
                    description: 'Calculate cookies per bag',
                    reasoning: '12 bags total\nChocolate chips per bag: 48 ÷ 12 = 4\nOatmeal per bag: 36 ÷ 12 = 3\nEach bag has 4 chocolate chip and 3 oatmeal cookies'
                }
            ],
            solution: 'Sarah can make 12 gift bags, each with 4 chocolate chip cookies and 3 oatmeal cookies!',
            realWorldApplication: 'This same method is used in factories to optimize packaging, in construction to find tile patterns, and in music to find rhythm patterns that sync up!'
        },
        {
            scenario: 'The Traffic Light Synchronization',
            problemSetup: 'At an intersection, the north-south light changes every 45 seconds, and the east-west light changes every 60 seconds. If both lights turn green at 3:00 PM, when will they next turn green at the same time?',
            steps: [
                {
                    step: 1,
                    description: 'Identify what we need',
                    reasoning: 'We want the SMALLEST time when both cycles align = Least Common Multiple of 45 and 60'
                },
                {
                    step: 2,
                    description: 'Prime factorization',
                    reasoning: '45 = 9 × 5 = 3 × 3 × 5 = 3² × 5\n60 = 4 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5'
                },
                {
                    step: 3,
                    description: 'Find LCM by taking highest power of all primes',
                    reasoning: 'All primes appearing: 2, 3, 5\nHighest power of 2: 2² (from 60)\nHighest power of 3: 3² (from 45)\nHighest power of 5: 5¹ (from both)\nLCM = 2² × 3² × 5 = 4 × 9 × 5 = 180'
                },
                {
                    step: 4,
                    description: 'Convert to time',
                    reasoning: '180 seconds = 3 minutes\nNext alignment: 3:00 PM + 3 minutes = 3:03 PM'
                }
            ],
            solution: 'Both lights will turn green together again at 3:03 PM, and then every 3 minutes after that (3:06, 3:09, 3:12...).',
            realWorldApplication: 'Cities use LCM to synchronize traffic lights for "green waves" where you can drive through multiple lights without stopping. It saves fuel and reduces traffic!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Without dividing, determine if 5,742 is divisible by 2, 3, 4, 5, 6, 9, and 10. Show your reasoning for each.',
            hints: [
                'Last digit test for 2, 5, 10',
                'Sum of digits for 3 and 9: 5+7+4+2 = ?',
                'Last TWO digits for 4',
                'For 6: must pass both 2 AND 3 tests'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'A carpenter has three wooden planks: 72 cm, 96 cm, and 120 cm. He wants to cut them into pieces of equal length with NO waste. What is the longest possible length for each piece?',
            hints: [
                'Equal length pieces with no waste means finding...',
                'You need the GREATEST COMMON DIVISOR',
                'Find prime factorization of each number first'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which of the following is a prime number?',
            options: [
                { label: 'A', text: '1' },
                { label: 'B', text: '21' },
                { label: 'C', text: '29' },
                { label: 'D', text: '51' },
                { label: 'E', text: '63' }
            ],
            correctAnswer: 'C',
            explanation: '29 is prime (only divisible by 1 and 29). The others: 1 is not prime, 21=3×7, 51=3×17, 63=9×7.',
            storyExplanation: 'Remember: 1 is the "oddball" - it\'s neither prime nor composite! And 29 is prime because no matter how hard you try, you can\'t break it down into smaller whole number factors.'
        },
        {
            id: 'q2',
            question: 'A number is divisible by 3 if:',
            options: [
                { label: 'A', text: 'Its last digit is 0, 3, 6, or 9' },
                { label: 'B', text: 'The sum of its digits is divisible by 3' },
                { label: 'C', text: 'It ends in an even number' },
                { label: 'D', text: 'It is an odd number' },
                { label: 'E', text: 'It is less than 100' }
            ],
            correctAnswer: 'B',
            explanation: 'Add all digits. If the sum is divisible by 3, the whole number is too! Example: 147 → 1+4+7=12 → divisible by 3 ✓',
            storyExplanation: 'This is MAGIC! You can test a million-digit number for divisibility by 3 just by adding its digits. Try it: 123,456,789 → sum = 45 → 4+5 = 9 → divisible by 3!'
        },
        {
            id: 'q3',
            question: 'What is the prime factorization of 60?',
            options: [
                { label: 'A', text: '2 × 3 × 10' },
                { label: 'B', text: '4 × 15' },
                { label: 'C', text: '2² × 3 × 5' },
                { label: 'D', text: '5 × 12' },
                { label: 'E', text: '3² × 5' }
            ],
            correctAnswer: 'C',
            explanation: '60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5. All factors must be PRIME numbers!',
            storyExplanation: 'Break it down like a factor tree: 60 splits to 2×30, then 30 splits to 2×15, then 15 splits to 3×5. Keep going until all branches are prime!'
        },
        {
            id: 'q4',
            question: 'What is GCD(24, 36)?',
            options: [
                { label: 'A', text: '4' },
                { label: 'B', text: '6' },
                { label: 'C', text: '12' },
                { label: 'D', text: '72' },
                { label: 'E', text: '144' }
            ],
            correctAnswer: 'C',
            explanation: '24 = 2³ × 3, and 36 = 2² × 3². Taking lowest powers: 2² × 3 = 12.',
            storyExplanation: 'Factors of 24: {1,2,3,4,6,8,12,24}. Factors of 36: {1,2,3,4,6,9,12,18,36}. The GREATEST common one is 12!'
        },
        {
            id: 'q5',
            question: 'Two neon signs blink at different rates. Sign A blinks every 6 seconds, Sign B blinks every 8 seconds. If they blink together now, in how many seconds will they next blink together?',
            options: [
                { label: 'A', text: '2 seconds' },
                { label: 'B', text: '14 seconds' },
                { label: 'C', text: '24 seconds' },
                { label: 'D', text: '48 seconds' },
                { label: 'E', text: '6 seconds' }
            ],
            correctAnswer: 'C',
            explanation: 'We need LCM(6, 8). 6 = 2 × 3, and 8 = 2³. LCM = 2³ × 3 = 24 seconds.',
            storyExplanation: 'Multiples of 6: {6,12,18,24,30...}. Multiples of 8: {8,16,24,32...}. First time they match? 24 seconds! This is why you see patterns in flashing lights.'
        }
    ],
    memoryAids: [
        {
            technique: 'Rhyme',
            description: 'To remember which is prime: "Two is the only even prime, all others odd, throughout all time!"',
            example: 'All even numbers (except 2) are divisible by 2, so they can\'t be prime'
        },
        {
            technique: 'Acronym',
            description: 'Divisibility by 2, 3, 5: "Last, Sum, Last" - 2 checks LAST digit, 3 checks SUM of digits, 5 checks LAST digit',
            example: 'Quick divisibility checks for the most common divisors'
        },
        {
            technique: 'Visual',
            description: 'For GCD vs LCM: GCD is "Greatest Common Divisor" - think DIVISION (going DOWN). LCM is "Least Common Multiple" - think MULTIPLICATION (going UP).',
            example: 'GCD ≤ both numbers, LCM ≥ both numbers'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Thinking 1 is a prime number',
            correction: '1 is neither prime nor composite. Primes must have EXACTLY two factors (1 and itself). 1 only has one factor - itself!',
            whyItMatters: 'If 1 were prime, the Fundamental Theorem of Arithmetic would break! (Every number would have infinite prime factorizations: 6=2×3=1×2×3=1×1×2×3...)'
        },
        {
            mistake: 'Confusing GCD and LCM',
            correction: 'GCD is the LARGEST number that divides all given numbers (always ≤ smallest number). LCM is the SMALLEST number that all given numbers divide into (always ≥ largest number).',
            whyItMatters: 'GCD(12,18)=6 (divides both), LCM(12,18)=36 (both divide it). Mix them up and your answer is wildly wrong!'
        },
        {
            mistake: 'Forgetting to check if a factorization is completely prime',
            correction: 'Prime factorization must have ONLY prime numbers. "30 = 5 × 6" is incomplete (6 isn\'t prime!). Correct: 30 = 2 × 3 × 5.',
            whyItMatters: 'Incomplete factorization gives wrong GCD/LCM. Always break down until every factor is prime!'
        }
    ],
    quickReference: [
        {
            title: 'Divisibility Rules Quick Guide',
            content: '2: Last digit even\n3: Sum of digits divisible by 3\n4: Last 2 digits divisible by 4\n5: Last digit 0 or 5\n6: Divisible by both 2 AND 3\n8: Last 3 digits divisible by 8\n9: Sum of digits divisible by 9\n10: Last digit is 0',
            category: 'rule'
        },
        {
            title: 'GCD and LCM Formulas',
            content: 'GCD: Take LOWEST power of common prime factors\nLCM: Take HIGHEST power of all prime factors\nRelation: GCD(a,b) × LCM(a,b) = a × b',
            category: 'formula'
        },
        {
            title: 'First 20 Prime Numbers',
            content: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71',
            category: 'rule'
        }
    ],
    summary: [
        'Prime numbers have exactly two factors (1 and itself) and are the "building blocks" of all whole numbers',
        'Every composite number has a unique prime factorization (Fundamental Theorem of Arithmetic)',
        'Divisibility rules provide shortcuts: check last digit(s) for 2/5/10, sum of digits for 3/9',
        'GCD is the greatest number dividing all given numbers; LCM is the smallest number all divide into',
        'Prime factorization method: GCD uses lowest powers, LCM uses highest powers of prime factors'
    ],
    selfAssessment: [
        'I can quickly determine if a number is divisible by 2, 3, 4, 5, 6, 8, 9, or 10 using divisibility rules',
        'I can find the prime factorization of any number using a factor tree or repeated division',
        'I understand the difference between GCD and LCM and when to use each',
        'I can calculate GCD and LCM using prime factorization method',
        'I know why prime numbers are important in mathematics and cryptography'
    ]
};
export default lesson;
//# sourceMappingURL=day-04.js.map
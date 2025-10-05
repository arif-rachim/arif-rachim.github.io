const lesson = {
    day: 2,
    subject: 'chemistry',
    title: 'Atomic Structure & The Periodic Table',
    emoji: '🧪',
    learningGoal: 'Understand how atoms are structured and discover the amazing patterns hidden in the periodic table',
    estimatedTime: 60,
    objectives: [
        'Describe the structure of an atom and identify its subatomic particles',
        'Explain what isotopes are and how they differ from regular atoms',
        'Identify periodic trends and predict element properties based on position'
    ],
    discoveryStory: {
        title: 'Mendeleev\'s Dream - The Periodic Table Prophecy',
        content: "Picture this: It's 1869, and Russian chemist Dmitri Mendeleev has been working for days, trying to organize 63 known elements. Exhausted, he falls asleep at his desk. In his dream, he sees all the elements arranging themselves into a beautiful table, like a perfectly organized filing cabinet! When he wakes up, he frantically writes down what he saw. But here's the MIND-BLOWING part - he left gaps in his table for elements that hadn't been discovered yet, and he predicted EXACTLY what their properties would be! Years later, when gallium and germanium were discovered, they matched his predictions perfectly. It was like he had a crystal ball for chemistry! Today, that dream became the periodic table hanging in every chemistry classroom in the world.",
        emoji: '🔬'
    },
    keyTerms: [
        {
            term: 'Atom',
            definition: 'The smallest unit of a chemical element that retains all the properties of that element',
            example: 'A single gold atom is the smallest piece of gold that still behaves like gold'
        },
        {
            term: 'Proton',
            definition: 'A positively charged particle found in the nucleus of an atom; the number of protons defines what element it is',
            example: 'Every carbon atom has exactly 6 protons - if it had 7, it would be nitrogen instead!'
        },
        {
            term: 'Neutron',
            definition: 'A neutral particle (no charge) found in the nucleus alongside protons',
            example: 'Neutrons act like nuclear glue, keeping protons from repelling each other'
        },
        {
            term: 'Electron',
            definition: 'A negatively charged particle that orbits the nucleus in shells or energy levels',
            example: 'Electrons are responsible for chemical bonds - they\'re like the "hands" atoms use to hold onto each other'
        },
        {
            term: 'Isotope',
            definition: 'Atoms of the same element (same protons) but with different numbers of neutrons',
            example: 'Carbon-12 and Carbon-14 are both carbon, but Carbon-14 has 2 extra neutrons and is radioactive'
        },
        {
            term: 'Periodic Trend',
            definition: 'A pattern in element properties that repeats as you move across or down the periodic table',
            example: 'Atomic size increases as you go down a group - like stacking bigger and bigger LEGOs'
        }
    ],
    concepts: [
        {
            title: 'The Atom: A Tiny Solar System',
            explanation: "An atom is like a miniature solar system. At the center is the nucleus (like the sun), containing protons and neutrons packed together. Orbiting around it are electrons (like planets) in specific energy levels or 'shells'.",
            analogy: {
                type: 'Stadium',
                description: 'Imagine a stadium with a marble (nucleus) at the center of the field. The electrons would be tiny specks orbiting at the TOP of the stadium! That\'s how much empty space is in an atom - atoms are 99.9999% empty space. If an atom were the size of a football stadium, the nucleus would be the size of a marble!'
            },
            mindBlowingFacts: [
                'There are about 7,000,000,000,000,000,000,000,000,000 (7 octillion) atoms in your body!',
                'Hydrogen is the simplest atom with just 1 proton and 1 electron - no neutrons needed!',
                'The gold atoms in your jewelry were formed inside a supernova (exploding star) billions of years ago',
                'If you could remove all the empty space from atoms, all of humanity would fit in a sugar cube!'
            ],
            whyYouCare: 'Every single thing you touch, see, smell, or taste is made of atoms. Understanding atoms means understanding why diamond is hard but graphite is soft (same atoms, different arrangement!), why some elements glow in the dark, and why nuclear power works.'
        },
        {
            title: 'Atomic Number vs Mass Number',
            explanation: 'Two numbers tell you almost everything about an atom: Atomic Number = number of protons (this DEFINES the element). Mass Number = protons + neutrons (this tells you the isotope).',
            analogy: {
                type: 'ID Card',
                description: 'Think of atomic number as your name (it identifies WHO you are - you can\'t change it and still be you). Mass number is like your weight - different people with the same name can have different weights, just like different isotopes of the same element can have different mass numbers!'
            },
            mindBlowingFacts: [
                'Carbon-14 has 6 protons and 8 neutrons (mass = 14). Forensic scientists use it to date ancient artifacts!',
                'Uranium-235 vs Uranium-238 differ by just 3 neutrons, but only U-235 can fuel nuclear reactors',
                'Most hydrogen (99.98%) has no neutrons at all, but deuterium (heavy hydrogen) has 1 neutron'
            ],
            whyYouCare: 'Isotopes aren\'t just academic - Carbon-14 dating revealed how old the Egyptian pyramids are, radioactive iodine treats thyroid cancer, and uranium isotopes power nuclear submarines that can stay underwater for months!'
        },
        {
            title: 'The Periodic Table: Element Neighborhoods',
            explanation: 'The periodic table isn\'t random - it\'s organized like a city map with neighborhoods. Elements in the same column (group) are like family members with similar personalities. Elements in the same row (period) have the same number of electron shells.',
            analogy: {
                type: 'Apartment Building',
                description: 'Think of the periodic table as an apartment building. Each floor (period) represents electron shells - 1st floor has 1 shell, 2nd floor has 2 shells, etc. Each vertical column (group) is like a family living in stacked apartments - they all behave similarly! Group 1 (alkali metals) are the "explosive" family, Group 18 (noble gases) are the "loner" family that doesn\'t like to bond.'
            },
            mindBlowingFacts: [
                'The periodic table has grown from 63 elements in Mendeleev\'s time to 118 today!',
                'Elements 95-118 are ALL man-made in laboratories - they don\'t exist naturally on Earth',
                'Group 1 metals (sodium, potassium) explode when they touch water!',
                'Noble gases (Group 18) are so "snobby" they almost never form compounds with other elements'
            ],
            whyYouCare: 'Once you understand the periodic table, you can predict how elements will react! You\'ll know why chlorine gas is dangerous but sodium chloride (table salt) is essential for life, just by looking at their positions.'
        },
        {
            title: 'Periodic Trends: The Patterns of the Table',
            explanation: 'As you move across and down the periodic table, element properties change in predictable ways. This is called periodic trends.',
            analogy: {
                type: 'Growing Up',
                description: 'Atomic size going down a group is like kids growing taller as they age - each period adds a new electron shell, making atoms bigger. Atomic size going LEFT to RIGHT across a period shrinks because the nucleus pulls electrons closer - like a magnet getting stronger!'
            },
            mindBlowingFacts: [
                'Francium (bottom left) is the LARGEST atom; Helium (top right) is the SMALLEST',
                'Fluorine is the most electronegative element - it\'s the GREEDIEST for electrons!',
                'Cesium and francium are so reactive they burst into flames in air',
                'Going right across a period, elements change from metals → metalloids → nonmetals'
            ],
            whyYouCare: 'These trends explain why oxygen (top right) greedily takes electrons and forms rust, while gold (bottom left metals) barely reacts and stays shiny forever. This is why gold jewelry doesn\'t tarnish but silver does!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Mystery Element Detective Case',
            problemSetup: 'Dr. Chen found an unknown element. She knows it has 17 protons, 18 neutrons, and 17 electrons. Can you identify the element and its properties?',
            steps: [
                {
                    step: 1,
                    description: 'Find the atomic number',
                    reasoning: 'Atomic number = number of protons = 17. Looking at the periodic table, atomic number 17 is CHLORINE (Cl)!'
                },
                {
                    step: 2,
                    description: 'Calculate the mass number',
                    reasoning: 'Mass number = protons + neutrons = 17 + 18 = 35. This is Chlorine-35 (written as Cl-35 or ³⁵Cl)'
                },
                {
                    step: 3,
                    description: 'Predict properties from periodic table position',
                    reasoning: 'Chlorine is in Group 17 (halogens), Period 3. This tells us: (1) It\'s a nonmetal, (2) Very reactive, (3) It wants to GAIN 1 electron to become stable, (4) Forms compounds like NaCl (table salt)'
                }
            ],
            solution: 'The mystery element is Chlorine-35! It\'s a greenish-yellow toxic gas at room temperature, but when combined with sodium, it makes table salt that we eat every day. Chemistry is wild!',
            realWorldApplication: 'This is exactly how chemists identify unknown substances in forensic investigations, quality control in factories, and even in space exploration when analyzing samples from Mars!'
        },
        {
            scenario: 'Isotope Puzzle',
            problemSetup: 'Carbon has two common isotopes: Carbon-12 and Carbon-14. Both have 6 protons. Why are they different, and why is Carbon-14 used in archaeology?',
            steps: [
                {
                    step: 1,
                    description: 'Understand what makes them different',
                    reasoning: 'Both have 6 protons (that\'s why they\'re both carbon). Carbon-12 has 6 neutrons (mass = 12). Carbon-14 has 8 neutrons (mass = 14). Extra neutrons make C-14 unstable (radioactive).'
                },
                {
                    step: 2,
                    description: 'Why is C-14 radioactive?',
                    reasoning: 'Too many neutrons make the nucleus unstable - like stacking too many blocks, it becomes wobbly. C-14 slowly decays, releasing radiation, with a half-life of 5,730 years.'
                },
                {
                    step: 3,
                    description: 'How does this help archaeologists?',
                    reasoning: 'Living things absorb C-14 from the atmosphere. When they die, C-14 starts decaying. By measuring how much C-14 is left, scientists can calculate how long ago the organism died!'
                }
            ],
            solution: 'Carbon-14 is like a built-in clock in all living things. By measuring its decay, we discovered King Tut died around 1323 BCE, the Dead Sea Scrolls were written 2000 years ago, and woolly mammoths went extinct 4,000 years ago!',
            realWorldApplication: 'Museums use C-14 dating to verify if artifacts are authentic or forgeries. If a "ancient" Egyptian statue has too much C-14, it\'s probably a modern fake!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'An atom has 20 protons, 20 neutrons, and 20 electrons. (a) What element is it? (b) What is its mass number? (c) Looking at the periodic table, predict if it\'s a metal or nonmetal.',
            hints: [
                'Atomic number (which defines the element) = number of protons',
                'Mass number = protons + neutrons',
                'Elements on the LEFT side of the periodic table are metals, RIGHT side are nonmetals'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Explain why atoms are mostly empty space, yet solid objects feel solid when you touch them. (This is a deep question - think about electron repulsion!)',
            hints: [
                'Electrons orbit far from the nucleus (remember the stadium analogy)',
                'What happens when electron clouds of different atoms get close?',
                'Electrons repel each other (like charges repel)'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which subatomic particle determines what element an atom is?',
            options: [
                { label: 'A', text: 'Neutron' },
                { label: 'B', text: 'Electron' },
                { label: 'C', text: 'Proton' },
                { label: 'D', text: 'Nucleus' },
                { label: 'E', text: 'Mass number' }
            ],
            correctAnswer: 'C',
            explanation: 'The number of protons (atomic number) defines the element. If you change the protons, you change the element entirely!',
            storyExplanation: 'Think of it like your DNA - it defines WHO you are. An atom with 6 protons is carbon, with 7 is nitrogen, with 8 is oxygen. Change the proton count, and you have a completely different element!'
        },
        {
            id: 'q2',
            question: 'Carbon-12 and Carbon-14 are isotopes. What is the difference between them?',
            options: [
                { label: 'A', text: 'Different number of protons' },
                { label: 'B', text: 'Different number of electrons' },
                { label: 'C', text: 'Different number of neutrons' },
                { label: 'D', text: 'Different atomic number' },
                { label: 'E', text: 'One is a metal, one is a nonmetal' }
            ],
            correctAnswer: 'C',
            explanation: 'Isotopes have the same number of protons (same element) but different numbers of neutrons. C-12 has 6 neutrons, C-14 has 8 neutrons.',
            storyExplanation: 'Isotopes are like identical twins who weigh different amounts. They\'re the same person (same protons = same element), but one has "extra weight" (extra neutrons)!'
        },
        {
            id: 'q3',
            question: 'According to Mendeleev\'s periodic table, what did he do that was revolutionary?',
            options: [
                { label: 'A', text: 'He discovered all 118 elements' },
                { label: 'B', text: 'He left gaps for undiscovered elements and predicted their properties' },
                { label: 'C', text: 'He invented the atomic bomb' },
                { label: 'D', text: 'He proved atoms exist' },
                { label: 'E', text: 'He arranged elements by mass only' }
            ],
            correctAnswer: 'B',
            explanation: 'Mendeleev\'s genius was leaving gaps for unknown elements and accurately predicting their properties - like predicting the future!',
            storyExplanation: 'Imagine creating a seating chart for a party where some guests haven\'t been born yet, and you correctly describe their height, weight, and personality! That\'s what Mendeleev did with elements.'
        },
        {
            id: 'q4',
            question: 'As you move from LEFT to RIGHT across a period in the periodic table, atomic size generally:',
            options: [
                { label: 'A', text: 'Increases because more electrons are added' },
                { label: 'B', text: 'Decreases because nuclear charge pulls electrons closer' },
                { label: 'C', text: 'Stays the same' },
                { label: 'D', text: 'Increases because more protons are added' },
                { label: 'E', text: 'Randomly changes' }
            ],
            correctAnswer: 'B',
            explanation: 'Moving right adds protons (stronger positive charge in nucleus) which pulls electrons CLOSER, shrinking the atom.',
            storyExplanation: 'It\'s like a tug-of-war. More protons = stronger magnet pulling electrons toward the nucleus = smaller atom. Francium (far left) is HUGE, Helium (far right) is tiny!'
        },
        {
            id: 'q5',
            question: 'Why are atoms considered to be mostly empty space?',
            options: [
                { label: 'A', text: 'Because protons are very small' },
                { label: 'B', text: 'Because electrons orbit far from the nucleus' },
                { label: 'C', text: 'Because neutrons have no charge' },
                { label: 'D', text: 'Because atoms don\'t have a nucleus' },
                { label: 'E', text: 'They aren\'t - atoms are solid' }
            ],
            correctAnswer: 'B',
            explanation: 'The nucleus is tiny (like a marble in a stadium), and electrons orbit at the "edges" of the atom, leaving most of the space in between empty.',
            storyExplanation: 'If an atom were a football stadium, the nucleus would be a marble on the 50-yard line, and the electrons would be gnats flying around the top of the stadium. Everything in between? Empty space!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'To remember subatomic particles: "PEN" - Protons (positive, in nucleus), Electrons (negative, orbit), Neutrons (neutral, in nucleus)',
            example: 'Write with a PEN to remember atomic particles!'
        },
        {
            technique: 'Rhyme',
            description: 'Atomic number = protons you see, Mass number = protons plus neutrons, you\'ll agree!',
            example: 'Use this rhyme when solving isotope problems'
        },
        {
            technique: 'Visual',
            description: 'For periodic trends, remember: "Small and Greedy up and Right" - As you go UP and RIGHT, atoms get SMALLER and more GREEDY for electrons (more electronegative)',
            example: 'Fluorine is top-right = smallest and greediest!'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Confusing mass number with atomic mass',
            correction: 'Mass number is a whole number (protons + neutrons). Atomic mass on the periodic table is a decimal (weighted average of all isotopes)',
            whyItMatters: 'Carbon\'s atomic mass is 12.01 because it\'s an average of C-12 (98.9%) and C-13 (1.1%). But each individual atom has a whole number mass!'
        },
        {
            mistake: 'Thinking electrons are IN the nucleus',
            correction: 'Only protons and neutrons are in the nucleus. Electrons orbit AROUND the nucleus in shells',
            whyItMatters: 'Chemical reactions involve electrons being shared or transferred - the nucleus stays untouched! Nuclear reactions (radioactivity) involve the nucleus.'
        },
        {
            mistake: 'Assuming isotopes behave chemically different',
            correction: 'Isotopes have identical chemical properties (same electron configuration), only physical properties differ (mass, radioactivity)',
            whyItMatters: 'C-12 and C-14 both form the same compounds (CO₂, CH₄, etc.) - only difference is C-14 is radioactive'
        }
    ],
    quickReference: [
        {
            title: 'Atomic Structure Formulas',
            content: 'Atomic Number = # of protons\nMass Number = protons + neutrons\nNeutral atom: # electrons = # protons',
            category: 'formula'
        },
        {
            title: 'Periodic Trends (going RIGHT and UP)',
            content: '↑ Electronegativity (greedier for electrons)\n↓ Atomic Size (smaller atoms)\n↑ Ionization Energy (harder to remove electrons)',
            category: 'rule'
        },
        {
            title: 'Element Categories',
            content: 'Left side = Metals (shiny, conduct electricity)\nRight side = Nonmetals (dull, insulators)\nMiddle = Metalloids (in-between properties)\nFar right = Noble Gases (don\'t react)',
            category: 'rule'
        }
    ],
    summary: [
        'Atoms are made of protons (+), neutrons (neutral), and electrons (-) - mostly empty space with a tiny dense nucleus',
        'Atomic number (# of protons) defines the element; mass number (protons + neutrons) identifies the isotope',
        'Isotopes are atoms with same protons but different neutrons - same element, different mass',
        'The periodic table organizes elements by atomic number, showing patterns (trends) in properties',
        'Periodic trends: going right/up = smaller atoms, more electronegative; going left/down = larger atoms, more reactive metals'
    ],
    selfAssessment: [
        'I can identify the number of protons, neutrons, and electrons in an atom given its atomic number and mass number',
        'I understand the difference between isotopes and can explain why they have different properties',
        'I can use the periodic table to predict if an element is a metal, nonmetal, or metalloid',
        'I can explain at least two periodic trends (atomic size, electronegativity, or reactivity)',
        'I know why Mendeleev\'s periodic table was revolutionary and how it predicted undiscovered elements'
    ]
};
export default lesson;
//# sourceMappingURL=day-02.js.map
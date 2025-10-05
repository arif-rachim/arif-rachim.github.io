const lesson = {
    day: 10,
    subject: 'chemistry',
    title: 'Chemical Reactions & Stoichiometry - The Recipe of Chemistry',
    emoji: '⚗️',
    learningGoal: 'Learn to balance chemical equations and use stoichiometry to predict quantities in chemical reactions',
    estimatedTime: 60,
    objectives: [
        'Balance chemical equations using the law of conservation of mass',
        'Identify different types of chemical reactions',
        'Use stoichiometry to calculate reactant and product quantities in mole relationships'
    ],
    discoveryStory: {
        title: 'Lavoisier and the Law That Changed Everything',
        content: "In 1789, Antoine Lavoisier did something revolutionary: he WEIGHED everything before and after chemical reactions. Everyone thought matter could be created or destroyed during reactions - things burned and disappeared, right? WRONG! Lavoisier proved that in a sealed container, the total mass NEVER changes during a reaction. He burned metals in sealed jars and showed that the metal gained EXACTLY as much weight as oxygen lost from the air. He had discovered the LAW OF CONSERVATION OF MASS: matter cannot be created or destroyed, only rearranged! This meant chemical equations must BALANCE - same atoms on both sides, just rearranged. Sadly, Lavoisier was executed during the French Revolution (politics, not science!), but his legacy lives on. His law is why we balance equations, why stoichiometry works, and why chemists can predict exactly how much product a reaction will make. It's like a recipe: if you put in 2 eggs + 3 cups flour, you can't get 10 eggs + 5 cups flour out - atoms don't magically appear or disappear!",
        emoji: '⚖️'
    },
    keyTerms: [
        {
            term: 'Chemical Reaction',
            definition: 'A process where substances (reactants) are transformed into different substances (products) by breaking and forming chemical bonds',
            example: 'Burning wood: wood + oxygen → carbon dioxide + water + ash (new substances formed)'
        },
        {
            term: 'Balanced Equation',
            definition: 'A chemical equation with equal numbers of each atom type on both sides (follows conservation of mass)',
            example: '2H₂ + O₂ → 2H₂O (4 H atoms and 2 O atoms on both sides - balanced!)'
        },
        {
            term: 'Mole',
            definition: 'A counting unit for atoms/molecules: 1 mole = 6.02 × 10²³ particles (Avogadro\'s number)',
            example: '1 mole of water = 6.02 × 10²³ water molecules = 18 grams'
        },
        {
            term: 'Stoichiometry',
            definition: 'The calculation of quantities in chemical reactions based on balanced equations',
            example: 'If 2H₂ + O₂ → 2H₂O, then 2 moles H₂ produces 2 moles H₂O (1:1 ratio)'
        },
        {
            term: 'Reactant',
            definition: 'A substance that is consumed in a chemical reaction (left side of equation)',
            example: 'In 2H₂ + O₂ → 2H₂O, hydrogen and oxygen are reactants'
        },
        {
            term: 'Product',
            definition: 'A substance that is formed in a chemical reaction (right side of equation)',
            example: 'In 2H₂ + O₂ → 2H₂O, water is the product'
        }
    ],
    concepts: [
        {
            title: 'Balancing Equations: The Atom Accounting Game',
            explanation: "Chemical equations must balance because atoms can't be created or destroyed (conservation of mass). Balancing means adjusting coefficients (big numbers in front) until both sides have equal atoms of each element.",
            analogy: {
                type: 'LEGO Conservation',
                description: 'Imagine building with LEGO:\n• START: 4 red blocks + 2 blue blocks\n• BUILD: Make a structure\n• END: Must still have 4 red + 2 blue blocks (just rearranged!)\n\nChemical reactions are the same:\n• **UNBALANCED**: H₂ + O₂ → H₂O ❌\n  Left: 2H, 2O | Right: 2H, 1O (missing 1 oxygen!)\n\n• **BALANCED**: 2H₂ + O₂ → 2H₂O ✓\n  Left: 4H, 2O | Right: 4H, 2O (perfect match!)\n\nCoefficicients (big numbers) tell you HOW MANY molecules. Never change subscripts (small numbers) - that changes the substance!'
            },
            mindBlowingFacts: [
                'The combustion of one gallon of gasoline involves 6.3 pounds of oxygen and produces 19.6 pounds of CO₂!',
                'Balancing the equation for photosynthesis took scientists decades to fully understand',
                'Some equations (like combustion of large hydrocarbons) can have coefficients over 100!',
                'Computer algorithms now balance complex equations instantly, but chemists still learn manually',
                'The coefficients in balanced equations give you the EXACT ratios needed - no waste!'
            ],
            whyYouCare: 'Balancing equations lets chemists predict: how much product you\'ll get, how much reactant you need, what gases are released, if a reaction will work, and even design new materials and medicines!'
        },
        {
            title: 'Types of Chemical Reactions',
            explanation: "Most reactions fit into patterns: Synthesis (combine), Decomposition (break apart), Single Replacement (swap one), Double Replacement (swap two), Combustion (burn with oxygen).",
            analogy: {
                type: 'Relationship Types',
                description: '**SYNTHESIS** (A + B → AB): Dating → Marriage\n2H₂ + O₂ → 2H₂O (hydrogen + oxygen → water)\n\n**DECOMPOSITION** (AB → A + B): Divorce\n2H₂O → 2H₂ + O₂ (water → hydrogen + oxygen)\n\n**SINGLE REPLACEMENT** (A + BC → AC + B): Someone steals your partner\nZn + 2HCl → ZnCl₂ + H₂ (zinc replaces hydrogen)\n\n**DOUBLE REPLACEMENT** (AB + CD → AD + CB): Partner swap\nNaCl + AgNO₃ → NaNO₃ + AgCl (ions switch partners)\n\n**COMBUSTION** (Fuel + O₂ → CO₂ + H₂O): Burning\nCH₄ + 2O₂ → CO₂ + 2H₂O (methane burns)'
            },
            mindBlowingFacts: [
                'Your car engine uses combustion reactions thousands of times per minute!',
                'Photosynthesis is a synthesis reaction (CO₂ + H₂O → glucose + O₂)',
                'Decomposition of hydrogen peroxide is used in rocket propulsion!',
                'Baking soda + vinegar is a double replacement reaction (makes CO₂ bubbles!)',
                'Rusting is a SLOW combustion - iron "burning" in oxygen over months',
                'Fireworks use combustion + metal salts (colors from specific elements!)'
            ],
            whyYouCare: 'Recognizing reaction types helps predict products (What will form?), understand everyday chemistry (cooking, cleaning, metabolism), and design new reactions for industry and medicine!'
        },
        {
            title: 'The Mole: Chemistry\'s Counting Unit',
            explanation: "Atoms are TINY - we can't count them individually. The mole is a counting unit: 1 mole = 6.02 × 10²³ particles (Avogadro's number). It's like \"dozen\" = 12, but mole = 602,000,000,000,000,000,000,000!",
            analogy: {
                type: 'Dozen vs Mole',
                description: '**DOZEN** = 12 (for counting eggs, donuts)\n1 dozen eggs = 12 eggs\n\n**MOLE** = 6.02 × 10²³ (for counting atoms/molecules)\n1 mole of atoms = 602,000,000,000,000,000,000,000 atoms\n\nWhy so big? Atoms are SO TINY that even a gram of substance contains trillions of trillions of atoms!\n\n**Key conversions**:\n• 1 mole of ANY element = its atomic mass in grams\n• 1 mole of carbon (C) = 12 grams\n• 1 mole of oxygen gas (O₂) = 32 grams (2 × 16)\n• 1 mole of water (H₂O) = 18 grams (2×1 + 16)'
            },
            mindBlowingFacts: [
                'If you had a mole of pennies, you could give everyone on Earth $80 billion and still have money left!',
                'A mole of sand grains would cover Earth 3 feet deep!',
                'Avogadro never actually calculated his number - it was named after him posthumously',
                'Chemists celebrate "Mole Day" on October 23 (10/23) at 6:02 AM!',
                '1 mole of any gas at standard conditions occupies 22.4 liters (size of a large basketball)',
                'Your body contains about 7 × 10²⁷ atoms - that\'s 11 million moles of atoms!'
            ],
            whyYouCare: 'The mole concept lets us: convert between grams and number of particles, scale up from atoms to measurable quantities, calculate exact amounts for reactions, understand molecular formulas, and make predictions!'
        },
        {
            title: 'Stoichiometry: The Reaction Recipe',
            explanation: "Stoichiometry uses balanced equations to calculate quantities. The coefficients give mole ratios. Example: 2H₂ + O₂ → 2H₂O means 2 moles H₂ : 1 mole O₂ : 2 moles H₂O.",
            analogy: {
                type: 'Cooking Recipe',
                description: '**RECIPE**: 2 eggs + 1 cup flour → 4 pancakes\nRatios: 2:1:4\n\nIf you want 8 pancakes, you need:\n• 4 eggs (double everything)\n• 2 cups flour\n\n**CHEMICAL EQUATION**: 2H₂ + O₂ → 2H₂O\nRatios: 2:1:2 (moles)\n\nIf you start with 4 moles H₂:\n• Need 2 moles O₂ (half of H₂)\n• Get 4 moles H₂O (same as H₂)\n\n**Steps**:\n1. Write balanced equation\n2. Identify mole ratios from coefficients\n3. Use ratios to convert between substances\n4. Convert moles ↔ grams if needed (using molar mass)'
            },
            mindBlowingFacts: [
                'Stoichiometry lets rocket scientists calculate EXACTLY how much fuel needed to reach orbit!',
                'Pharmaceutical companies use stoichiometry to make medicines efficiently (no waste!)',
                'Airbags use stoichiometry: explosive decomposes to produce exactly enough N₂ gas to inflate',
                'Breweries use stoichiometry to predict alcohol content from sugar fermentation',
                'The Haber process (making ammonia for fertilizer) feeds 4 billion people - all designed with stoichiometry!',
                'Climate scientists use stoichiometry to predict CO₂ production from burning fossil fuels'
            ],
            whyYouCare: 'Stoichiometry is THE core skill in chemistry - it predicts: how much product you\'ll make, what reactants you need, if you have enough materials, cost of production, environmental impact, and even how your body metabolizes food!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Balancing a Combustion Equation',
            problemSetup: 'Balance the equation for burning propane (C₃H₈): C₃H₈ + O₂ → CO₂ + H₂O',
            steps: [
                {
                    step: 1,
                    description: 'Count atoms on each side (UNBALANCED)',
                    reasoning: 'Left: 3 C, 8 H, 2 O\nRight: 1 C, 2 H, 3 O\nNothing matches!'
                },
                {
                    step: 2,
                    description: 'Balance carbon first (easiest)',
                    reasoning: '3 carbons on left → need 3 CO₂ on right\nC₃H₈ + O₂ → 3CO₂ + H₂O\nNow: Left: 3 C, 8 H, 2 O | Right: 3 C, 2 H, 7 O'
                },
                {
                    step: 3,
                    description: 'Balance hydrogen',
                    reasoning: '8 hydrogens on left → need 4 H₂O on right (each H₂O has 2 H)\nC₃H₈ + O₂ → 3CO₂ + 4H₂O\nNow: Left: 3 C, 8 H, 2 O | Right: 3 C, 8 H, 10 O\nC and H balanced! But oxygen not balanced.'
                },
                {
                    step: 4,
                    description: 'Balance oxygen last',
                    reasoning: 'Right side has 10 O (6 from 3CO₂ + 4 from 4H₂O)\nLeft needs 10 O → need 5 O₂ (each O₂ has 2 O)\nC₃H₈ + 5O₂ → 3CO₂ + 4H₂O\nFINAL COUNT: Left: 3 C, 8 H, 10 O | Right: 3 C, 8 H, 10 O ✓ BALANCED!'
                }
            ],
            solution: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (This is how propane burns in grills!)',
            realWorldApplication: 'This equation tells us burning 1 mole of propane needs 5 moles of oxygen and produces 3 moles CO₂ + 4 moles water vapor. Propane tank manufacturers use this to design safe containers!'
        },
        {
            scenario: 'Stoichiometry Calculation',
            problemSetup: 'In the reaction 2H₂ + O₂ → 2H₂O, how many grams of water can be produced from 4 grams of hydrogen gas?',
            steps: [
                {
                    step: 1,
                    description: 'Convert grams H₂ to moles',
                    reasoning: 'Molar mass of H₂ = 2 g/mol (each H = 1 g/mol, ×2)\nMoles H₂ = 4 g ÷ 2 g/mol = 2 moles H₂'
                },
                {
                    step: 2,
                    description: 'Use mole ratio from balanced equation',
                    reasoning: 'Equation: 2H₂ → 2H₂O\nRatio: 2 moles H₂ : 2 moles H₂O (1:1 ratio)\nSo 2 moles H₂ produces 2 moles H₂O'
                },
                {
                    step: 3,
                    description: 'Convert moles H₂O to grams',
                    reasoning: 'Molar mass of H₂O = 18 g/mol (2×1 + 16)\nMass H₂O = 2 moles × 18 g/mol = 36 grams'
                }
            ],
            solution: '4 grams of H₂ produces 36 grams of H₂O. Notice: 4g + 32g O₂ = 36g H₂O (conservation of mass!)',
            realWorldApplication: 'Hydrogen fuel cells in cars use this exact reaction! Engineers calculate how much water is produced per gallon of hydrogen, designing collection systems accordingly.'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Balance the following equations: (a) Fe + O₂ → Fe₂O₃ (rusting iron), (b) NH₃ + O₂ → NO + H₂O (industrial process)',
            hints: [
                'Start by balancing the element that appears in the fewest compounds',
                'Balance metals first, then nonmetals, then oxygen',
                'You may need to use fractions, then multiply everything to get whole numbers'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p2',
            question: 'For the reaction N₂ + 3H₂ → 2NH₃, if you start with 10 moles of N₂ and 20 moles of H₂, which is the limiting reactant? How many moles of NH₃ can be produced?',
            hints: [
                'Check the mole ratio needed: 1 N₂ : 3 H₂',
                'Do you have enough H₂ for all the N₂? Or vice versa?',
                'The limiting reactant runs out first and determines how much product forms'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'What does the law of conservation of mass state?',
            options: [
                { label: 'A', text: 'Mass can be created but not destroyed' },
                { label: 'B', text: 'Mass is conserved only in physical changes' },
                { label: 'C', text: 'Mass cannot be created or destroyed in chemical reactions' },
                { label: 'D', text: 'Mass always increases in chemical reactions' },
                { label: 'E', text: 'Mass is irrelevant in chemical reactions' }
            ],
            correctAnswer: 'C',
            explanation: 'Conservation of mass: in a closed system, total mass before = total mass after a chemical reaction. Atoms are rearranged, not created or destroyed.',
            storyExplanation: 'Lavoisier proved this by weighing everything before and after reactions. If you burn 10g of wood with 20g of oxygen in a sealed jar, you get EXACTLY 30g of products. No mass appears or disappears!'
        },
        {
            id: 'q2',
            question: 'In a balanced equation, what can you change to balance atoms?',
            options: [
                { label: 'A', text: 'Subscripts (small numbers)' },
                { label: 'B', text: 'Coefficients (big numbers in front)' },
                { label: 'C', text: 'Chemical formulas' },
                { label: 'D', text: 'The arrow direction' },
                { label: 'E', text: 'Nothing - equations balance themselves' }
            ],
            correctAnswer: 'B',
            explanation: 'Only change COEFFICIENTS (numbers in front of formulas). Never change subscripts - that changes the substance itself!',
            storyExplanation: 'Changing subscripts is like changing the recipe - H₂O (water) becomes H₂O₂ (peroxide) if you change subscript! Only adjust coefficients (how many molecules) to balance.'
        },
        {
            id: 'q3',
            question: 'What is Avogadro\'s number (one mole)?',
            options: [
                { label: 'A', text: '6.02 × 10²³ particles' },
                { label: 'B', text: '12 particles' },
                { label: 'C', text: '100 particles' },
                { label: 'D', text: '1,000,000 particles' },
                { label: 'E', text: '1 gram of any substance' }
            ],
            correctAnswer: 'A',
            explanation: 'One mole = 6.02 × 10²³ particles (atoms, molecules, ions). It\'s chemistry\'s counting unit for incredibly small particles.',
            storyExplanation: 'A mole is like a "chemist\'s dozen" - but instead of 12, it\'s 602 sextillion! Why so big? Because atoms are SO TINY that even a penny contains trillions of trillions of atoms.'
        },
        {
            id: 'q4',
            question: 'In the equation 2H₂ + O₂ → 2H₂O, what is the mole ratio of H₂ to H₂O?',
            options: [
                { label: 'A', text: '1:1' },
                { label: 'B', text: '2:1' },
                { label: 'C', text: '1:2' },
                { label: 'D', text: '2:2 (same as 1:1)' },
                { label: 'E', text: '4:2' }
            ],
            correctAnswer: 'D',
            explanation: 'Coefficients give mole ratios: 2H₂ : 2H₂O simplifies to 1:1. For every 2 moles H₂, you get 2 moles H₂O.',
            storyExplanation: '2 : 2 is the same as 1 : 1 (like 2 eggs : 2 pancakes = 1 egg : 1 pancake). The coefficients tell you the ratio - 2 molecules H₂ makes 2 molecules H₂O!'
        },
        {
            id: 'q5',
            question: 'Which type of reaction is represented by: 2H₂O → 2H₂ + O₂?',
            options: [
                { label: 'A', text: 'Synthesis' },
                { label: 'B', text: 'Decomposition' },
                { label: 'C', text: 'Single replacement' },
                { label: 'D', text: 'Double replacement' },
                { label: 'E', text: 'Combustion' }
            ],
            correctAnswer: 'B',
            explanation: 'Decomposition: one compound breaks apart into two or more simpler substances (AB → A + B).',
            storyExplanation: 'Water splits into hydrogen and oxygen - one substance becoming two simpler substances. This is decomposition (breaking apart), opposite of synthesis (combining). Electrolysis does this!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'For balancing order: "MAC" - Metals first, All other elements, Carbon/hydrogen last, Oxygen LAST',
            example: 'Balance Fe, then N, then C/H, finally O'
        },
        {
            technique: 'Rhyme',
            description: 'Conservation of mass: "Same atoms before and after, never more and never fewer - just rearranged, that\'s the laughter!"',
            example: 'Remember atoms aren\'t created or destroyed'
        },
        {
            technique: 'Visual',
            description: 'Mole = 6.02 × 10²³ sounds like "six oh two" on October 23 (10/23) at 6:02 - that\'s Mole Day!',
            example: 'Remember Avogadro\'s number by the date/time'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Changing subscripts to balance equations',
            correction: 'NEVER change subscripts! Only change COEFFICIENTS (numbers in front). H₂O is water, H₂O₂ is peroxide - completely different!',
            whyItMatters: 'Changing subscripts changes the substance entirely. You must keep substances the same, just adjust HOW MANY of each.'
        },
        {
            mistake: 'Forgetting to multiply subscripts by coefficients',
            correction: 'In 3H₂O, you have 3 × 2 = 6 hydrogen atoms (not just 2!). Coefficient multiplies everything in the formula.',
            whyItMatters: 'This is how you count atoms correctly when balancing. 2Ca(OH)₂ has 2 Ca, 4 O, 4 H!'
        },
        {
            mistake: 'Confusing moles with grams',
            correction: 'Moles count particles (6.02 × 10²³), grams measure mass. They\'re related by molar mass but NOT the same!',
            whyItMatters: 'Stoichiometry works with MOLE ratios, not gram ratios. Always convert grams → moles → use ratio → convert back to grams.'
        }
    ],
    quickReference: [
        {
            title: 'Balancing Equations Steps',
            content: '1. Write unbalanced equation\n2. Count atoms on each side\n3. Adjust coefficients (NOT subscripts!)\n4. Balance one element at a time\n5. Check: equal atoms of each element on both sides',
            category: 'process'
        },
        {
            title: 'Reaction Types',
            content: 'Synthesis: A + B → AB\nDecomposition: AB → A + B\nSingle Replacement: A + BC → AC + B\nDouble Replacement: AB + CD → AD + CB\nCombustion: Fuel + O₂ → CO₂ + H₂O',
            category: 'rule'
        },
        {
            title: 'Mole Conversions',
            content: 'Moles = mass (g) ÷ molar mass (g/mol)\nMass = moles × molar mass\nParticles = moles × 6.02 × 10²³',
            category: 'formula'
        }
    ],
    summary: [
        'Law of conservation of mass: atoms are rearranged in reactions, not created or destroyed',
        'Balanced equations have equal atoms of each element on both sides; only adjust coefficients, never subscripts',
        'Five main reaction types: synthesis, decomposition, single replacement, double replacement, combustion',
        'A mole is 6.02 × 10²³ particles - chemistry\'s counting unit for atoms and molecules',
        'Stoichiometry uses balanced equations and mole ratios to calculate reactant/product quantities',
        'Molar mass converts between grams and moles: moles = grams ÷ molar mass'
    ],
    selfAssessment: [
        'I can balance chemical equations by adjusting coefficients',
        'I understand the law of conservation of mass and why equations must balance',
        'I can identify the five types of chemical reactions from equations',
        'I know that 1 mole = 6.02 × 10²³ particles and can convert between moles, grams, and particles',
        'I can use stoichiometry to calculate quantities in reactions using mole ratios',
        'I understand that coefficients in balanced equations represent mole ratios'
    ]
};
export default lesson;
//# sourceMappingURL=day-10.js.map
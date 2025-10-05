const lesson = {
    day: 14,
    subject: 'chemistry',
    title: 'Acids, Bases & pH - The Chemistry of Sour and Bitter',
    emoji: '🧪',
    learningGoal: 'Master the properties of acids and bases, understand the pH scale, and recognize how these substances affect everyday life',
    estimatedTime: 70,
    objectives: [
        'Define acids and bases according to different theories (Arrhenius, Brønsted-Lowry)',
        'Understand and use the pH scale to measure acidity and basicity',
        'Identify properties and indicators of acids and bases',
        'Explain neutralization reactions and their applications',
        'Recognize acids and bases in everyday products and biological systems'
    ],
    discoveryStory: {
        title: 'Svante Arrhenius and the Shocking Discovery of Ions',
        content: "Picture Stockholm, 1884. A 25-year-old graduate student named Svante Arrhenius has just submitted his doctoral thesis with a mind-blowing idea: when you dissolve salt in water, it BREAKS APART into electrically charged pieces called ions! His professors thought this was ridiculous. They gave him the LOWEST possible passing grade. But Arrhenius didn't give up. He proposed that acids are substances that release hydrogen ions (H⁺) in water, while bases release hydroxide ions (OH⁻). This explained EVERYTHING: why acids taste sour, why bases feel slippery, why mixing them creates water and salt! The scientific community initially mocked him, but within 20 years, everyone realized he was right. In 1903, Arrhenius won the Nobel Prize in Chemistry - the same prize his professors thought he didn't deserve! His 'failing' thesis revolutionized chemistry and gave us the foundation for understanding acids, bases, batteries, and even how our bodies regulate blood pH. Talk about the ultimate comeback story! 🏆",
        emoji: '⚡'
    },
    keyTerms: [
        {
            term: 'Acid',
            definition: 'A substance that produces hydrogen ions (H⁺) when dissolved in water, tastes sour, and turns blue litmus paper red',
            example: 'Lemon juice (citric acid), vinegar (acetic acid), stomach acid (hydrochloric acid)'
        },
        {
            term: 'Base',
            definition: 'A substance that produces hydroxide ions (OH⁻) when dissolved in water, tastes bitter, feels slippery, and turns red litmus paper blue',
            example: 'Soap, baking soda (sodium bicarbonate), drain cleaner (sodium hydroxide)'
        },
        {
            term: 'pH',
            definition: 'A scale from 0-14 that measures how acidic or basic a solution is. pH 7 is neutral, <7 is acidic, >7 is basic',
            example: 'Battery acid pH ≈ 0 (very acidic), pure water pH = 7 (neutral), bleach pH ≈ 13 (very basic)'
        },
        {
            term: 'Indicator',
            definition: 'A substance that changes color depending on whether it\'s in an acidic or basic solution',
            example: 'Litmus paper (red in acid, blue in base), phenolphthalein (colorless in acid, pink in base), red cabbage juice'
        },
        {
            term: 'Neutralization',
            definition: 'A chemical reaction between an acid and a base that produces salt and water',
            example: 'HCl (acid) + NaOH (base) → NaCl (salt) + H₂O (water) - this is why antacids neutralize stomach acid!'
        },
        {
            term: 'Ion',
            definition: 'An atom or molecule with an electrical charge due to gaining or losing electrons',
            example: 'H⁺ (hydrogen ion - positive), OH⁻ (hydroxide ion - negative), Na⁺ (sodium ion), Cl⁻ (chloride ion)'
        }
    ],
    concepts: [
        {
            title: 'What Makes Something an Acid or Base?',
            explanation: 'Acids and bases are chemical opposites defined by what happens when they dissolve in water. Arrhenius gave us the simplest definition that works for most cases.',
            analogy: {
                type: 'Breaking Apart in Water',
                description: 'Imagine acids and bases as different types of puzzles that break apart in water:\n\n**ACIDS = H⁺ Donors:**\n• When dissolved, they release hydrogen ions (H⁺)\n• HCl (hydrochloric acid) in water: HCl → H⁺ + Cl⁻\n• Think of H⁺ like a tiny positive magnet floating free\n\n**BASES = OH⁻ Donors:**\n• When dissolved, they release hydroxide ions (OH⁻)\n• NaOH (sodium hydroxide) in water: NaOH → Na⁺ + OH⁻\n• Think of OH⁻ like a tiny negative magnet floating free\n\nIt\'s like acids and bases are packages that open up in water, releasing their special charged pieces. These charged pieces (ions) are what give acids and bases their properties!'
            },
            mindBlowingFacts: [
                'Your stomach produces hydrochloric acid so strong (pH ≈ 1-2) it can dissolve metal! Special mucus lining protects your stomach from digesting itself',
                'Pure water actually has BOTH H⁺ and OH⁻ ions - about 0.0000001 moles/L of each (that\'s why it\'s neutral at pH 7)',
                'The deadliest acid in the world isn\'t the strongest - it\'s hydrofluoric acid, which can pass through skin and dissolve bones!'
            ],
            whyYouCare: 'Acids and bases are EVERYWHERE: your food (citric acid in lemons), cleaning (ammonia in Windex), your body (stomach acid, blood pH regulation), swimming pools (chlorine and pH balance). Understanding them means understanding your daily chemistry!'
        },
        {
            title: 'The pH Scale: Measuring Acidity',
            explanation: 'The pH scale is a number line from 0-14 that tells you how acidic or basic something is. It\'s logarithmic, meaning each number is 10× different from the next!',
            analogy: {
                type: 'The Acid-Base Thermometer',
                description: 'Think of pH like a special thermometer for "sourness vs. slipperiness":\n\n**pH 0-6: ACIDIC (sour, H⁺ rich)**\n• pH 0-2: EXTREMELY acidic (battery acid, stomach acid)\n• pH 3-4: Very acidic (lemon juice, vinegar, soda)\n• pH 5-6: Weakly acidic (black coffee, rainwater)\n\n**pH 7: NEUTRAL (pure water)**\n• Equal amounts of H⁺ and OH⁻\n• Neither acidic nor basic\n\n**pH 8-14: BASIC/ALKALINE (bitter, slippery, OH⁻ rich)**\n• pH 8-9: Weakly basic (seawater, baking soda)\n• pH 10-11: Very basic (soap, ammonia)\n• pH 12-14: EXTREMELY basic (bleach, drain cleaner)\n\n**LOGARITHMIC MAGIC:**\n• pH 3 is 10× more acidic than pH 4\n• pH 3 is 100× more acidic than pH 5\n• pH 3 is 1,000× more acidic than pH 6\n\nIt\'s like the Richter scale for earthquakes - each number is exponentially different!'
            },
            mindBlowingFacts: [
                'Your blood pH must stay between 7.35-7.45 or you DIE. Your body has complex systems (buffers) that keep pH stable even when you eat acidic/basic foods',
                'Ocean pH has dropped from 8.2 to 8.1 in the last 200 years due to CO₂ absorption - that sounds small, but it\'s a 30% increase in acidity threatening coral reefs!',
                'The most acidic natural place on Earth is the Dallol volcanic crater in Ethiopia with pH values near 0 - yet bacteria STILL live there!'
            ],
            whyYouCare: 'pH affects EVERYTHING: whether plants grow (soil pH), whether fish survive (aquarium pH), whether your pool is safe (pool pH), whether your digestion works (stomach pH), even whether your shampoo damages your hair (scalp pH ≈ 5.5)!'
        },
        {
            title: 'Properties of Acids and Bases',
            explanation: 'Acids and bases have distinctive properties you can observe, taste (DON\'T in lab!), feel, and measure.',
            analogy: {
                type: 'Acids vs Bases: The Property Showdown',
                description: '**ACIDS:**\n🍋 **Taste:** Sour (citrus, vinegar)\n📄 **Litmus:** Turn BLUE litmus → RED\n⚡ **Conductivity:** Conduct electricity (ions!)\n🧼 **Feel:** No special feeling\n⚠️ **Reaction:** Dissolve metals → release H₂ gas\n📊 **pH:** < 7\n\n**BASES:**\n😖 **Taste:** Bitter (like soap - yuck!)\n📄 **Litmus:** Turn RED litmus → BLUE\n⚡ **Conductivity:** Conduct electricity (ions!)\n🧼 **Feel:** Slippery/soapy (breaks down oils)\n⚠️ **Reaction:** Don\'t react with metals (usually)\n📊 **pH:** > 7\n\n**Memory trick:** Acids sound "sharp" like their sour taste. Bases sound "soft" like their slippery feel!'
            },
            mindBlowingFacts: [
                'Bases feel slippery because they\'re literally turning your skin oils into soap (saponification) - you\'re feeling yourself being dissolved!',
                'Acids can dissolve metals by "stealing" electrons and releasing hydrogen gas - that fizzing you see when acid touches metal is H₂ bubbles',
                'Many flowers are natural pH indicators: hydrangeas are BLUE in acidic soil and PINK in basic soil!'
            ],
            whyYouCare: 'These properties help you identify unknown substances safely, choose the right cleaner (acidic for mineral deposits, basic for grease), and understand why certain reactions happen!'
        },
        {
            title: 'Indicators: Chemical Detectives',
            explanation: 'Indicators are special substances that change color at different pH values, acting like litmus tests for acidity.',
            analogy: {
                type: 'Color-Changing Spies',
                description: 'Indicators are like undercover agents that change disguise based on their environment:\n\n**LITMUS PAPER (most famous):**\n• In ACID (pH < 7): Blue → RED ("Red for Acid")\n• In BASE (pH > 7): Red → BLUE\n\n**PHENOLPHTHALEIN:**\n• In ACID: COLORLESS (invisible spy!)\n• In BASE: BRIGHT PINK (exposed!)\n\n**UNIVERSAL INDICATOR (rainbow spy):**\n• Shows different colors for EACH pH value\n• pH 1-3: Red (strong acid)\n• pH 4-6: Orange/Yellow (weak acid)\n• pH 7: Green (neutral)\n• pH 8-10: Blue (weak base)\n• pH 11-14: Purple (strong base)\n\n**NATURAL INDICATORS:**\n• Red cabbage juice: Red (acid) → Purple (neutral) → Green/Yellow (base)\n• Turmeric: Yellow (acid/neutral) → Red (base)\n\nEach indicator is like a different spy with its own disguise-changing rule!'
            },
            mindBlowingFacts: [
                'Red cabbage juice works as an indicator because of anthocyanins - the same molecules that make blueberries blue and change color with pH!',
                'Litmus comes from LICHEN (a fungus-algae partnership) - people have been using it as an indicator for over 1,000 years!',
                'Your body uses hemoglobin as a pH indicator - it changes shape based on blood pH to release or hold onto oxygen'
            ],
            whyYouCare: 'Indicators are used in swimming pool test kits, aquarium pH tests, soil testing for gardens, medical diagnostics (urine pH), and even in science fair volcano experiments!'
        },
        {
            title: 'Neutralization: When Acids and Bases Meet',
            explanation: 'When you mix an acid with a base in the right proportions, they cancel each other out in a neutralization reaction, producing salt and water.',
            analogy: {
                type: 'Chemical Tug-of-War',
                description: 'Imagine acids and bases playing tug-of-war with H⁺ and OH⁻:\n\n**THE REACTION:**\nAcid gives H⁺ + Base gives OH⁻ → H⁺ + OH⁻ → H₂O (water!)\n\n**EXAMPLE:**\nHCl + NaOH → NaCl + H₂O\n(acid) (base) (salt) (water)\n\n**WHAT HAPPENS:**\n1. Acid releases H⁺ (hydrogen ions)\n2. Base releases OH⁻ (hydroxide ions)\n3. H⁺ and OH⁻ are attracted (opposite charges!)\n4. They combine: H⁺ + OH⁻ → H₂O (water)\n5. Leftover ions form salt (Na⁺ + Cl⁻ → NaCl)\n\n**THE MAGIC:**\n• Strong acid + Strong base = Neutral solution (pH ≈ 7)\n• The "dangerous" H⁺ and OH⁻ are neutralized into harmless water\n• Salt (table salt, Epsom salt, etc.) is the "leftover" from the reaction\n\nIt\'s like matter + antimatter annihilating into pure energy, except acids + bases neutralize into water + salt!'
            },
            mindBlowingFacts: [
                'Your stomach produces 2-3 liters of hydrochloric acid per day. When too much causes heartburn, antacids (bases like calcium carbonate) neutralize it!',
                'When a bee stings you (acidic venom), baking soda (base) neutralizes the pain. When a wasp stings (basic venom), vinegar (acid) helps!',
                'Farmers add lime (calcium hydroxide - a base) to acidic soil to neutralize it, making nutrients available to plants'
            ],
            whyYouCare: 'Neutralization reactions: treat acid reflux (antacids), clean up chemical spills, adjust soil pH for farming, treat insect stings, and even occur in your blood to maintain pH balance!'
        },
        {
            title: 'Acids and Bases in Your Body',
            explanation: 'Your body is a finely tuned chemical factory that depends on precise pH control in different organs and fluids.',
            analogy: {
                type: 'Body as pH Theme Park',
                description: 'Different areas of your body maintain different pH levels, like themed zones in a park:\n\n🍔 **STOMACH: The Acid Pit** (pH 1.5-3.5)\n• Extremely acidic (hydrochloric acid)\n• Digests food and kills bacteria\n• Protected by mucus lining\n\n🩸 **BLOOD: The Neutral Zone** (pH 7.35-7.45)\n• MUST stay in this tiny range\n• Buffers (bicarbonate) keep it stable\n• If pH drops below 7.35 (acidosis) or rises above 7.45 (alkalosis), you can die!\n\n💧 **SALIVA: Slightly Acid Park** (pH 6.5-7.5)\n• Slightly acidic to neutral\n• Helps break down food\n• Becomes more acidic after eating sugar (causes cavities!)\n\n👅 **SKIN: Acid Mantle** (pH 4.5-5.5)\n• Slightly acidic\n• Protects against bacteria\n• Why "pH-balanced" shampoos matter\n\n🧪 **SMALL INTESTINE: The Basic Zone** (pH 7-8)\n• Slightly basic\n• Neutralizes stomach acid\n• Pancreas releases bicarbonate (base) to protect intestine\n\nEach zone needs its specific pH to function!'
            },
            mindBlowingFacts: [
                'Hyperventilating makes your blood too basic (respiratory alkalosis) - breathing into a paper bag adds CO₂ back, which makes carbonic acid to restore pH!',
                'Your skin is acidic (pH ≈ 5.5) on purpose - bacteria can\'t survive well at that pH. Using super basic soaps (pH 9-10) disrupts this protective "acid mantle"',
                'Diabetic ketoacidosis happens when blood becomes too acidic from ketones - it can be fatal if untreated'
            ],
            whyYouCare: 'Understanding body pH explains: why you burp (releasing CO₂ to control blood pH), why antacids work, why diabetics need insulin, why athletes drink electrolytes, and why your skin care products matter!'
        }
    ],
    workedExamples: [
        {
            scenario: 'pH Calculation and Classification',
            problemSetup: 'You test five solutions and get these pH readings:\nSolution A: pH = 3\nSolution B: pH = 7\nSolution C: pH = 11\nSolution D: pH = 5\nSolution E: pH = 13\n\nClassify each as acid, base, or neutral, and rank them from most acidic to most basic.',
            steps: [
                {
                    step: 1,
                    description: 'Recall pH scale rules: pH < 7 = acidic, pH = 7 = neutral, pH > 7 = basic',
                    reasoning: 'The pH scale is our classification tool'
                },
                {
                    step: 2,
                    description: 'Classify each solution:\n• A (pH 3): ACID\n• B (pH 7): NEUTRAL\n• C (pH 11): BASE\n• D (pH 5): ACID\n• E (pH 13): BASE',
                    reasoning: 'Apply the pH < 7, = 7, > 7 rules to each'
                },
                {
                    step: 3,
                    description: 'Understand the pH scale: lower pH = more acidic, higher pH = more basic',
                    reasoning: 'pH increases from acidic → neutral → basic'
                },
                {
                    step: 4,
                    description: 'Rank from most acidic to most basic: A (pH 3) → D (pH 5) → B (pH 7) → C (pH 11) → E (pH 13)',
                    reasoning: 'Arrange in order of increasing pH value'
                },
                {
                    step: 5,
                    description: 'Calculate acidity differences using logarithmic scale:\n• A (pH 3) is 100× more acidic than D (pH 5) because 10² = 100\n• E (pH 13) is 100× more basic than C (pH 11)',
                    reasoning: 'Each pH unit is 10× different - difference of 2 units = 10² = 100× difference'
                }
            ],
            solution: 'Classification: A & D are acids, B is neutral, C & E are bases. Order from most acidic to most basic: A → D → B → C → E',
            realWorldApplication: 'This is exactly how you\'d interpret water quality tests (drinking water should be pH 6.5-8.5), pool chemistry (pool should be pH 7.2-7.8), or aquarium water (most fish need pH 6.5-7.5)!'
        },
        {
            scenario: 'Neutralization Reaction Problem',
            problemSetup: 'You spill hydrochloric acid (HCl) in the lab. You have sodium hydroxide (NaOH) solution available. Write the neutralization equation and explain what products form. If you have exactly the right amounts, what will the final pH be?',
            steps: [
                {
                    step: 1,
                    description: 'Identify the acid and base:\n• Acid: HCl (hydrochloric acid)\n• Base: NaOH (sodium hydroxide)',
                    reasoning: 'HCl produces H⁺ ions, NaOH produces OH⁻ ions'
                },
                {
                    step: 2,
                    description: 'Recall neutralization general equation: Acid + Base → Salt + Water',
                    reasoning: 'This is the pattern for ALL acid-base neutralization reactions'
                },
                {
                    step: 3,
                    description: 'Write the specific equation: HCl + NaOH → NaCl + H₂O',
                    reasoning: 'H⁺ from HCl combines with OH⁻ from NaOH to make H₂O. Na⁺ and Cl⁻ combine to make NaCl (table salt)'
                },
                {
                    step: 4,
                    description: 'Identify products:\n• Salt: NaCl (sodium chloride - table salt!)\n• Water: H₂O',
                    reasoning: 'The cation from base (Na⁺) + anion from acid (Cl⁻) = salt'
                },
                {
                    step: 5,
                    description: 'Determine final pH: If exact amounts used, pH = 7 (neutral)',
                    reasoning: 'Complete neutralization of strong acid + strong base gives neutral solution - all H⁺ and OH⁻ have reacted'
                }
            ],
            solution: 'HCl + NaOH → NaCl + H₂O. Products are table salt and water. With exact stoichiometric amounts, final pH = 7 (neutral).',
            realWorldApplication: 'This is how chemical spills are neutralized in labs, how wastewater treatment plants adjust pH before discharge, and how antacids (bases) neutralize stomach acid (HCl) to treat heartburn!'
        },
        {
            scenario: 'Indicator Color Change Prediction',
            problemSetup: 'You add 3 drops of phenolphthalein indicator to a beaker of sulfuric acid (H₂SO₄). The solution is colorless. You slowly add sodium hydroxide (NaOH) solution while stirring. Predict what you\'ll observe and explain why.',
            steps: [
                {
                    step: 1,
                    description: 'Initial state: Phenolphthalein in acid (H₂SO₄) = COLORLESS',
                    reasoning: 'Phenolphthalein is colorless in acidic conditions (pH < 7)'
                },
                {
                    step: 2,
                    description: 'As NaOH is added: Neutralization begins\nH₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',
                    reasoning: 'Base neutralizes acid, pH starts rising toward 7'
                },
                {
                    step: 3,
                    description: 'Solution remains COLORLESS while pH < 7',
                    reasoning: 'Phenolphthalein doesn\'t change color until pH reaches ~8.2 (slightly basic)'
                },
                {
                    step: 4,
                    description: 'Equivalence point reached: All acid neutralized, pH ≈ 7',
                    reasoning: 'Equal moles of H⁺ and OH⁻ have reacted - still colorless because pH needs to go above 8 for color change'
                },
                {
                    step: 5,
                    description: 'Adding more NaOH: Solution turns PINK!',
                    reasoning: 'Excess base raises pH above 8.2, triggering phenolphthalein color change to pink'
                },
                {
                    step: 6,
                    description: 'Final observation: Sharp color change from colorless → pink indicates endpoint',
                    reasoning: 'This sudden color change is used in titrations to show when neutralization is complete'
                }
            ],
            solution: 'Solution stays colorless as acid is neutralized. Once all acid is neutralized and pH rises above ~8.2 (slightly past neutral), the solution suddenly turns bright pink.',
            realWorldApplication: 'This is the principle behind TITRATION - a lab technique used to determine unknown acid/base concentrations in quality control (food industry), environmental testing (water analysis), and medical diagnostics!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Orange juice has a pH of 3.5. Is it acidic, basic, or neutral? How many times more acidic is it than pure water (pH 7)?',
            hints: [
                'pH < 7 means acidic, pH = 7 means neutral, pH > 7 means basic',
                'pH difference = 7 - 3.5 = 3.5 units',
                'Remember the pH scale is logarithmic: each unit is 10× different',
                'For 3.5 units: 10^3.5 = about 3,162× more acidic'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Complete the neutralization equation and name the salt produced:\nHNO₃ (nitric acid) + KOH (potassium hydroxide) → ? + ?',
            hints: [
                'General equation: Acid + Base → Salt + Water',
                'The salt is formed from the cation of the base (K⁺) and anion of the acid (NO₃⁻)',
                'Water is always H₂O',
                'Salt: KNO₃ (potassium nitrate)'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p3',
            question: 'You test an unknown solution with red and blue litmus paper. Red litmus stays red, blue litmus turns red. What can you conclude about the solution?',
            hints: [
                'Red litmus → blue happens in bases',
                'Blue litmus → red happens in acids',
                'If both litmus papers turn the same color, what does that tell you?',
                'Remember: acids turn blue litmus red, but don\'t change red litmus (it\'s already red)'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p4',
            question: 'Explain why your blood pH must stay between 7.35-7.45. What would happen if you ate a lot of acidic food - would your blood pH drop significantly? Why or why not?',
            hints: [
                'Blood pH outside 7.35-7.45 range disrupts enzyme function and oxygen transport',
                'Think about buffer systems in blood (bicarbonate buffer)',
                'Your body has mechanisms to maintain pH despite dietary intake',
                'Buffers resist pH changes by neutralizing added acids or bases'
            ],
            difficulty: 'hard'
        },
        {
            id: 'p5',
            question: 'A gardener wants to grow hydrangeas. The flowers are blue in acidic soil (pH 5-6) and pink in basic soil (pH 7-8). Her soil is currently pH 7.5. What should she add to get blue flowers, and why?',
            hints: [
                'Current soil pH = 7.5 (slightly basic) gives pink flowers',
                'Target pH = 5-6 (acidic) for blue flowers',
                'She needs to LOWER pH (make more acidic)',
                'Adding acid or acidic materials (sulfur, aluminum sulfate, peat moss) will lower pH',
                'The aluminum ions that become available in acidic soil are what actually cause blue color!'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'According to the Arrhenius definition, what do all acids produce when dissolved in water?',
            options: [
                { label: 'A', text: 'Hydroxide ions (OH⁻)' },
                { label: 'B', text: 'Hydrogen ions (H⁺)' },
                { label: 'C', text: 'Sodium ions (Na⁺)' },
                { label: 'D', text: 'Chloride ions (Cl⁻)' },
                { label: 'E', text: 'Water molecules (H₂O)' }
            ],
            correctAnswer: 'B',
            explanation: 'Acids are defined as substances that produce hydrogen ions (H⁺) when dissolved in water. This is the Arrhenius definition of acids.',
            storyExplanation: 'Think of acids as "H⁺ factories" - when they dissolve in water, they break apart and release hydrogen ions. These H⁺ ions are what make acids sour and reactive!'
        },
        {
            id: 'q2',
            question: 'A solution has a pH of 9. What is this solution?',
            options: [
                { label: 'A', text: 'Strongly acidic' },
                { label: 'B', text: 'Weakly acidic' },
                { label: 'C', text: 'Neutral' },
                { label: 'D', text: 'Weakly basic' },
                { label: 'E', text: 'Strongly basic' }
            ],
            correctAnswer: 'D',
            explanation: 'pH 9 is above 7, making it basic. It\'s not far above 7, so it\'s weakly basic. Strongly basic solutions have pH 12-14.',
            storyExplanation: 'Think of pH 7 as the "middle ground". pH 9 is 2 steps into basic territory - like being "slightly" on the basic team, not a hardcore basic player yet!'
        },
        {
            id: 'q3',
            question: 'What is produced when an acid reacts with a base in a neutralization reaction?',
            options: [
                { label: 'A', text: 'Only water' },
                { label: 'B', text: 'Only salt' },
                { label: 'C', text: 'Salt and water' },
                { label: 'D', text: 'Carbon dioxide and water' },
                { label: 'E', text: 'Hydrogen gas and oxygen gas' }
            ],
            correctAnswer: 'C',
            explanation: 'Neutralization reactions always produce a salt (from the ions) and water (from H⁺ and OH⁻ combining). General equation: Acid + Base → Salt + Water',
            storyExplanation: 'When acids and bases fight, they cancel each other out into two harmless products: water (from H⁺ + OH⁻) and salt (from the leftover ions). It\'s like two enemies making peace and creating something useful!'
        },
        {
            id: 'q4',
            question: 'Blue litmus paper is placed in a solution and turns red. What can you conclude?',
            options: [
                { label: 'A', text: 'The solution is basic' },
                { label: 'B', text: 'The solution is neutral' },
                { label: 'C', text: 'The solution is acidic' },
                { label: 'D', text: 'The solution is water' },
                { label: 'E', text: 'No conclusion can be made' }
            ],
            correctAnswer: 'C',
            explanation: 'Blue litmus paper turns red in acidic solutions. This is the classic test for acids.',
            storyExplanation: 'Remember: "Red for Acid" - blue litmus turning red is the litmus paper\'s way of shouting "ACID DETECTED!" It\'s like a chemical alarm system.'
        },
        {
            id: 'q5',
            question: 'Why does your stomach produce hydrochloric acid (HCl)?',
            options: [
                { label: 'A', text: 'To kill bacteria and help digest food' },
                { label: 'B', text: 'To neutralize basic foods' },
                { label: 'C', text: 'To make you feel hungry' },
                { label: 'D', text: 'To regulate blood pH' },
                { label: 'E', text: 'To absorb nutrients' }
            ],
            correctAnswer: 'A',
            explanation: 'Stomach acid (pH 1.5-3.5) has two main jobs: killing harmful bacteria in food and breaking down proteins with the enzyme pepsin (which only works in acidic conditions).',
            storyExplanation: 'Your stomach is like a high-security acid bath that kills invading bacteria and breaks down food into digestible pieces. The acid is so strong it can dissolve metal, but your stomach lining has special mucus armor to protect itself!'
        }
    ],
    memoryAids: [
        {
            technique: 'Phrase',
            description: 'Remember acids and bases properties: "Sour Lemons Are Red" = Sour taste, Lemon example, Acid, turns Red litmus paper (blue→red)',
            example: 'For bases: "Bitter Soap Is Blue" = Bitter taste, Soap example, turns Blue litmus (red→blue)'
        },
        {
            technique: 'Acronym',
            description: 'Remember neutralization products with "SAW": Salt And Water (Acid + Base → SAW)',
            example: 'HCl + NaOH → NaCl (salt) and H₂O (water) = SAW!'
        },
        {
            technique: 'Visual',
            description: 'pH scale visualization: Think of 0-6 as RED zone (acidic like red litmus), 7 as GREEN zone (neutral - safe), 8-14 as BLUE zone (basic like blue litmus)',
            example: 'Traffic light: Red (stop/danger = strong acid), Yellow/Green (safe = neutral), Blue (alkaline)'
        },
        {
            technique: 'Rhyme',
            description: 'Indicator rhyme: "In the acid pit, litmus turns to red. In the basic pool, blue is used instead!"',
            example: 'Use this to remember which color change indicates which type of solution'
        },
        {
            technique: 'Story',
            description: 'Arrhenius story: "Arrhenius Handed us H⁺ (acids) and OH⁻ (bases)" - his name starts with A and H for H⁺!',
            example: 'Remember the scientist\'s name connects to what he discovered: A-H for acids and hydrogen ions'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Thinking higher pH means more acidic',
            correction: 'LOWER pH = more acidic (pH 1 is very acidic). HIGHER pH = more basic (pH 14 is very basic). pH 7 is neutral in the middle.',
            whyItMatters: 'Getting this backwards means you\'d add acid when you need base and vice versa - potentially dangerous in lab or industrial settings!'
        },
        {
            mistake: 'Confusing strong/weak with concentrated/dilute',
            correction: 'STRONG/WEAK describes how completely the acid/base ionizes. CONCENTRATED/DILUTE describes how much is dissolved. You can have dilute strong acid or concentrated weak acid!',
            whyItMatters: 'A dilute solution of strong acid (like HCl) can still be very dangerous. "Weak" doesn\'t mean "safe" - it means incomplete ionization'
        },
        {
            mistake: 'Thinking neutralization always gives pH exactly 7',
            correction: 'Strong acid + strong base → pH 7, but weak acid + strong base → pH > 7, and strong acid + weak base → pH < 7. Only strong + strong gives exactly neutral!',
            whyItMatters: 'In titrations and industrial processes, knowing the expected final pH is crucial. Not all neutralizations end at pH 7!'
        },
        {
            mistake: 'Forgetting pH is logarithmic',
            correction: 'Each pH unit is 10× different! pH 5 is 10× more acidic than pH 6, and 100× more acidic than pH 7. Don\'t treat pH numbers like regular linear scales.',
            whyItMatters: 'Small changes in pH represent HUGE changes in acidity. Ocean pH dropping from 8.2 to 8.1 sounds tiny but it\'s a 30% increase in acidity!'
        },
        {
            mistake: 'Tasting or touching unknown acids/bases in lab',
            correction: 'NEVER taste or deliberately touch chemicals! Use indicators and pH meters. Strong acids/bases can burn skin and damage tissue.',
            whyItMatters: 'Lab safety! Many acids and bases look like water. Hydrofluoric acid can penetrate skin and dissolve bones. Concentrated NaOH can blind you. Always use proper testing methods.'
        }
    ],
    quickReference: [
        {
            title: 'Arrhenius Definitions',
            content: 'ACID: Produces H⁺ in water (HCl → H⁺ + Cl⁻)\nBASE: Produces OH⁻ in water (NaOH → Na⁺ + OH⁻)',
            category: 'principle'
        },
        {
            title: 'pH Scale',
            content: 'pH 0-6: ACIDIC (lower = more acidic)\npH 7: NEUTRAL\npH 8-14: BASIC/ALKALINE (higher = more basic)\nEach pH unit = 10× difference in [H⁺]',
            category: 'rule'
        },
        {
            title: 'Acid vs Base Properties',
            content: 'ACIDS: Sour, turn blue litmus→red, react with metals, pH<7\nBASES: Bitter, slippery, turn red litmus→blue, pH>7',
            category: 'principle'
        },
        {
            title: 'Neutralization Equation',
            content: 'ACID + BASE → SALT + WATER\nExample: HCl + NaOH → NaCl + H₂O\nH⁺ + OH⁻ → H₂O (key ionic equation)',
            category: 'formula'
        },
        {
            title: 'Common Indicators',
            content: 'LITMUS: Red in acid, Blue in base\nPHENOLPHTHALEIN: Colorless in acid, Pink in base (pH>8.2)\nUNIVERSAL: Shows rainbow colors for each pH',
            category: 'rule'
        }
    ],
    summary: [
        'Acids produce H⁺ ions in water (taste sour, pH < 7), bases produce OH⁻ ions (taste bitter, feel slippery, pH > 7)',
        'The pH scale (0-14) measures acidity: lower pH = more acidic, pH 7 = neutral, higher pH = more basic',
        'pH is logarithmic: each unit represents 10× difference in hydrogen ion concentration',
        'Indicators like litmus paper change color to show if solution is acidic (blue→red) or basic (red→blue)',
        'Neutralization reaction: Acid + Base → Salt + Water (H⁺ + OH⁻ → H₂O)',
        'Your body maintains precise pH in different areas: stomach (pH 1.5-3.5 acidic), blood (pH 7.35-7.45 neutral), skin (pH 4.5-5.5 acidic)',
        'Strong acids/bases ionize completely; weak acids/bases ionize partially (different from concentrated/dilute!)',
        'Understanding acids and bases is crucial for: digestion, medicine (antacids), agriculture (soil pH), cleaning, water treatment, and industrial processes'
    ],
    selfAssessment: [
        'I can define acids and bases using the Arrhenius theory',
        'I understand the pH scale and can classify substances as acidic, basic, or neutral',
        'I can explain why the pH scale is logarithmic and calculate acidity differences',
        'I can predict indicator color changes in acidic and basic solutions',
        'I can write and balance neutralization equations',
        'I understand the properties that distinguish acids from bases',
        'I can explain the importance of pH control in the human body',
        'I can apply acid-base concepts to real-world situations (antacids, gardening, cleaning, etc.)'
    ]
};
export default lesson;
//# sourceMappingURL=day-14.js.map
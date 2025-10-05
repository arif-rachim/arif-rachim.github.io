const lesson = {
    day: 17,
    subject: 'chemistry',
    title: 'Solutions & Concentration - Mixing Matters',
    emoji: '🧪',
    learningGoal: 'Master the concepts of solutions, solubility, and concentration calculations to understand how substances dissolve and mix',
    estimatedTime: 70,
    objectives: [
        'Define solutions and distinguish between solute, solvent, and solution',
        'Understand the dissolving process at the molecular level',
        'Calculate concentration using different units (molarity, percent composition, ppm)',
        'Explain factors affecting solubility (temperature, pressure, polarity)',
        'Apply solution concepts to real-world scenarios (medicine, environmental science, cooking)'
    ],
    discoveryStory: {
        title: 'William Henry and the Mystery of Fizzy Water',
        content: "Picture London, 1803. Chemist William Henry is obsessed with carbonated water - the new fizzy drink craze sweeping England. Everyone knows that bubbles escape when you open a bottle, but WHY? And why does warm soda go flat faster than cold soda? Henry conducts meticulous experiments, varying temperature and pressure, measuring exactly how much CO₂ dissolves in water under different conditions. His discovery? MIND-BLOWING! The amount of gas that dissolves in liquid is DIRECTLY proportional to the pressure of that gas above the liquid. Double the pressure → double the dissolved gas. This became Henry's Law, and it explained EVERYTHING: Why soda bottles are pressurized (keeps CO₂ dissolved), why they fizz when opened (pressure drops, gas escapes), why scuba divers get 'the bends' (nitrogen dissolves in blood under pressure, forms bubbles when surfacing too fast - potentially deadly!). Henry's curiosity about fizzy drinks led to a fundamental law of chemistry that now saves lives in diving medicine, explains carbonation in beverages, and helps us understand ocean chemistry and climate change (oceans absorb CO₂). One scientist, one fizzy mystery, one law that changed everything! 🫧",
        emoji: '🥤'
    },
    keyTerms: [
        {
            term: 'Solution',
            definition: 'A homogeneous mixture where one substance (solute) is completely dissolved in another (solvent)',
            example: 'Salt water is a solution: salt (solute) dissolved in water (solvent) - looks uniform throughout'
        },
        {
            term: 'Solute',
            definition: 'The substance being dissolved (usually present in smaller amount)',
            example: 'In sugar water, sugar is the solute - it gets dissolved'
        },
        {
            term: 'Solvent',
            definition: 'The substance doing the dissolving (usually present in larger amount)',
            example: 'In sugar water, water is the solvent - it does the dissolving'
        },
        {
            term: 'Concentration',
            definition: 'The amount of solute dissolved in a given amount of solvent or solution',
            example: 'Ocean water has ~3.5% salt concentration - 3.5 grams of salt per 100 grams of water'
        },
        {
            term: 'Molarity (M)',
            definition: 'Concentration measured as moles of solute per liter of solution (mol/L)',
            example: 'A 2 M NaCl solution has 2 moles of NaCl dissolved in every liter of solution'
        },
        {
            term: 'Solubility',
            definition: 'The maximum amount of solute that can dissolve in a given amount of solvent at a specific temperature',
            example: 'Sugar\'s solubility in water at 20°C is about 200 g/100 mL - you can\'t dissolve more than that without heating'
        },
        {
            term: 'Saturated Solution',
            definition: 'A solution that has dissolved the maximum amount of solute at a given temperature (at solubility limit)',
            example: 'When sugar stops dissolving and settles at the bottom, the solution is saturated'
        },
        {
            term: 'Dilution',
            definition: 'The process of adding more solvent to decrease concentration of a solution',
            example: 'Adding water to concentrated juice to make it less sweet - you\'re diluting it'
        }
    ],
    concepts: [
        {
            title: 'What is a Solution? The Molecular View',
            explanation: 'A solution is a homogeneous mixture where particles of solute are completely dispersed among solvent molecules. You can\'t see individual solute particles - they\'re mixed at the molecular level.',
            analogy: {
                type: 'Mixing Paint vs. Mixing Sand',
                description: 'Understanding solutions vs. mixtures:\n\n**SOLUTION (Homogeneous - Molecular mixing):**\n• Like mixing blue paint into white paint\n• Blue molecules spread EVENLY throughout\n• Can\'t see individual blue molecules\n• Looks UNIFORM everywhere\n• Example: Salt water, air, brass (copper + zinc)\n\n**HETEROGENEOUS MIXTURE (Not a solution):**\n• Like mixing sand into water\n• Sand particles stay SEPARATE\n• Can see individual grains\n• Looks DIFFERENT in different areas (sand settles)\n• Example: Sand in water, salad, granite\n\n**THE KEY DIFFERENCE:**\nSolutions = Molecular-level mixing (particles too small to see)\nMixtures = Visible separation (particles can be seen/separated)\n\n**SOLUTION TYPES:**\n• **Solid in liquid:** Salt in water, sugar in tea\n• **Gas in liquid:** CO₂ in soda, oxygen in water (fish breathe this!)\n• **Liquid in liquid:** Alcohol in water, vinegar (acetic acid in water)\n• **Gas in gas:** Air (oxygen, nitrogen, CO₂ all dissolved in each other)\n• **Solid in solid:** Brass (zinc dissolved in copper), steel (carbon in iron)\n\nSolutions are everywhere - your blood, ocean water, air you breathe, metal jewelry!'
            },
            mindBlowingFacts: [
                'The air you breathe is a SOLUTION of gases (78% nitrogen, 21% oxygen, 1% other) - you\'re constantly inhaling a gaseous solution!',
                'Your blood is an incredibly complex solution containing glucose, proteins, salts, gases (O₂, CO₂), hormones, and thousands of other dissolved substances',
                'The ocean is a solution containing EVERY naturally occurring element - you could extract gold from seawater (but it would cost more than the gold is worth!)'
            ],
            whyYouCare: 'Solutions are fundamental to life: blood transports nutrients/oxygen, cells are filled with solutions, digestion dissolves food, IV drips deliver medicine. Understanding solutions is understanding biochemistry!'
        },
        {
            title: 'The Dissolving Process: "Like Dissolves Like"',
            explanation: 'Dissolving happens when solvent molecules surround and separate solute particles. Whether something dissolves depends on molecular polarity - polar solvents dissolve polar solutes, nonpolar dissolve nonpolar.',
            analogy: {
                type: 'The Molecular Dating Game',
                description: '**RULE: "LIKE DISSOLVES LIKE"**\n\n**POLAR SOLUTES + POLAR SOLVENTS = ❤️ DISSOLVES**\n• Water (polar) + Salt (ionic/polar) = ✓ Dissolves!\n• Water molecules (⊕ and ⊖ ends) surround salt ions (Na⁺ and Cl⁻)\n• Attractions break apart salt crystal\n• Think: Magnets attracting and pulling apart\n\n**NONPOLAR SOLUTES + NONPOLAR SOLVENTS = ❤️ DISSOLVES**\n• Oil (nonpolar) + Gasoline (nonpolar) = ✓ Dissolves!\n• No charges, just weak intermolecular forces\n• Molecules slide between each other\n• Think: Smooth dancers mixing on dance floor\n\n**POLAR + NONPOLAR = 💔 DOESN\'T DISSOLVE**\n• Water (polar) + Oil (nonpolar) = ✗ Doesn\'t mix!\n• No attraction between different types\n• They separate into layers\n• Think: Incompatible personalities - they avoid each other\n\n**WHY WATER IS THE "UNIVERSAL SOLVENT":**\n• Water is POLAR (⊕ on H side, ⊖ on O side)\n• Dissolves ionic compounds (salts, minerals)\n• Dissolves polar molecules (sugar, alcohol)\n• But NOT nonpolar substances (oil, grease, wax)\n\n**REAL-WORLD:**\n• Soap works because it has BOTH polar and nonpolar ends - it can dissolve oil (nonpolar) AND water (polar), allowing grease to wash away!\n• Dry cleaning uses nonpolar solvents to dissolve oils/grease that water can\'t remove'
            },
            mindBlowingFacts: [
                'Water can dissolve more substances than ANY other liquid - that\'s why it\'s called the "universal solvent" and why life evolved in water!',
                'Your cell membranes are made of molecules with polar heads (facing water inside/outside cell) and nonpolar tails (facing each other) - they arrange this way BECAUSE of "like dissolves like"!',
                'Vitamins A, D, E, K are "fat-soluble" (nonpolar) - your body stores them in fat. Vitamin C is "water-soluble" (polar) - you pee out excess. That\'s why you need vitamin C daily but can overdose on vitamin A!'
            ],
            whyYouCare: 'Understanding polarity explains: why oil and water don\'t mix, how soap cleans, how drugs are delivered (water-soluble vs. fat-soluble), and how your cells regulate what enters and exits!'
        },
        {
            title: 'Concentration: How Strong is Your Solution?',
            explanation: 'Concentration tells you how much solute is in a solution. There are multiple ways to express it, each useful in different contexts.',
            analogy: {
                type: 'Concentration as Recipe Strength',
                description: 'Think of concentration like recipe strength - different ways to describe "how much stuff is in there":\n\n**1. MOLARITY (M) = moles/Liter**\n• Most common in chemistry\n• Formula: M = moles of solute / liters of solution\n• Example: 2 M HCl = 2 moles HCl per 1 L solution\n• Like: "2 scoops of coffee per liter of water"\n\n**2. PERCENT BY MASS (% m/m)**\n• Mass of solute per 100 g total solution\n• Formula: (mass solute / mass solution) × 100%\n• Example: 5% salt solution = 5 g salt per 100 g solution\n• Like: "5% of the recipe weight is salt"\n\n**3. PERCENT BY VOLUME (% v/v)**\n• Volume of solute per 100 mL total solution\n• Formula: (volume solute / volume solution) × 100%\n• Example: 70% rubbing alcohol = 70 mL alcohol per 100 mL solution\n• Like: "70% of the bottle is alcohol"\n\n**4. PARTS PER MILLION (ppm)**\n• Used for VERY dilute solutions\n• 1 ppm = 1 mg solute per 1 L solution (for water)\n• Example: Drinking water should have <10 ppm lead\n• Like: "1 drop in a swimming pool"\n\n**5. PARTS PER BILLION (ppb)**\n• Used for EXTREMELY dilute solutions\n• 1 ppb = 1 microgram per 1 L\n• Example: Ocean pollution measured in ppb\n• Like: "1 drop in 1,000 swimming pools"\n\n**CONCENTRATED vs. DILUTE:**\n• HIGH concentration = lots of solute (strong coffee)\n• LOW concentration = little solute (weak tea)\n\nIt\'s like measuring "strength" - same solution, different measuring systems!'
            },
            mindBlowingFacts: [
                'Your blood glucose should be ~1 g/L (0.1% or 1,000 ppm). Diabetes = too high, hypoglycemia = too low. Tiny changes in concentration can be life-threatening!',
                'Seawater is ~3.5% salt by mass. You can\'t drink it because your kidneys can\'t process that high concentration - you\'d dehydrate trying to get rid of the excess salt!',
                'Some poisons are deadly at parts per BILLION levels - that\'s like one second in 32 YEARS. Concentration matters MASSIVELY for toxicity!'
            ],
            whyYouCare: 'Concentration is critical for: medicine dosing (too dilute = ineffective, too concentrated = toxic), water quality (pollution levels), cooking (salt/sugar amounts), and industrial chemistry!'
        },
        {
            title: 'Calculating Molarity - The Chemistry Standard',
            explanation: 'Molarity (M) is the most important concentration unit in chemistry because it directly relates to the NUMBER of particles, not just mass.',
            analogy: {
                type: 'Molarity as Particle Counting',
                description: '**WHY MOLARITY?**\nChemical reactions happen between PARTICLES (atoms/molecules), not masses. Molarity tells you how many particles are in a volume.\n\n**MOLARITY FORMULA:**\nM = moles of solute / liters of solution\n\n**EXAMPLE CALCULATION 1:**\nProblem: You dissolve 2 moles of NaCl in enough water to make 1 liter total. What\'s the molarity?\n\nSolution:\nM = 2 moles / 1 L = 2 M NaCl\n\n**EXAMPLE CALCULATION 2:**\nProblem: You have 58.5 g of NaCl (molar mass = 58.5 g/mol) dissolved in 500 mL of solution. Find molarity.\n\nStep 1: Convert grams → moles\nmoles = 58.5 g / 58.5 g/mol = 1 mole\n\nStep 2: Convert mL → L\n500 mL = 0.5 L\n\nStep 3: Calculate molarity\nM = 1 mole / 0.5 L = 2 M\n\n**DILUTION FORMULA:**\nM₁V₁ = M₂V₂\n(initial molarity × initial volume = final molarity × final volume)\n\nExample: Dilute 100 mL of 6 M HCl to 2 M. How much water to add?\n\nM₁V₁ = M₂V₂\n(6 M)(100 mL) = (2 M)(V₂)\nV₂ = 600 mL / 2 = 300 mL total\nWater to add = 300 - 100 = 200 mL\n\nIt\'s like a concentration calculator that chemists use every single day!'
            },
            mindBlowingFacts: [
                'A 1 M solution of any substance contains 6.02 × 10²³ particles (Avogadro\'s number) per liter - that\'s 602 sextillion particles!',
                'IV saline solution is 0.9% NaCl, which equals 0.154 M - this matches your blood\'s salt concentration perfectly (isotonic) so cells don\'t shrink or burst',
                'Concentrated battery acid is ~18 M H₂SO₄ - that\'s why it\'s so dangerous! Dilute it to 0.1 M and it\'s barely corrosive'
            ],
            whyYouCare: 'Molarity is essential for: preparing chemical solutions in labs, calculating reaction stoichiometry, medicine preparation (proper dosing), and water treatment (chemical additions)!'
        },
        {
            title: 'Factors Affecting Solubility',
            explanation: 'How much solute dissolves depends on three main factors: temperature, pressure (for gases), and the nature of solute/solvent (polarity).',
            analogy: {
                type: 'The Solubility Rules',
                description: '**FACTOR 1: TEMPERATURE**\n\n**For SOLIDS in liquids:**\n• ↑ Temperature → ↑ Solubility (usually)\n• Hot water dissolves MORE sugar than cold water\n• Think: Heat gives molecules energy to break apart and mix\n• Example: Make rock candy by dissolving sugar in hot water, then cooling (sugar crystallizes out)\n\n**For GASES in liquids:**\n• ↑ Temperature → ↓ Solubility (opposite!)\n• Cold soda holds MORE CO₂ than warm soda\n• Think: Heat gives gas molecules energy to ESCAPE\n• Example: Warm soda goes flat faster (CO₂ escapes)\n\n**FACTOR 2: PRESSURE (for gases only)**\n\n**Henry\'s Law:** ↑ Pressure → ↑ Gas solubility\n• High pressure FORCES more gas into solution\n• Example: Soda bottles are pressurized (keeps CO₂ dissolved)\n• When opened: Pressure drops → Gas escapes → Fizz!\n• Scuba diving: High pressure at depth → more N₂ dissolves in blood → surface too fast → bubbles form in blood = "the bends" (deadly!)\n\n**FACTOR 3: POLARITY (Nature of substances)**\n\n**"Like dissolves like"**\n• Polar dissolves polar (water + salt)\n• Nonpolar dissolves nonpolar (oil + grease)\n• Polar + nonpolar DON\'T mix (oil + water)\n\n**SUMMARY TABLE:**\n| Factor | Effect on Solids | Effect on Gases |\n|--------|-----------------|----------------|\n| ↑ Temp | ↑ Solubility | ↓ Solubility |\n| ↑ Pressure | No effect | ↑ Solubility |\n| Like polarity | ✓ Dissolves | ✓ Dissolves |\n| Unlike polarity | ✗ Doesn\'t | ✗ Doesn\'t |\n\nRemember: Temperature affects EVERYTHING, pressure only affects GASES!'
            },
            mindBlowingFacts: [
                'Global warming is making oceans absorb LESS CO₂ (warmer water = lower gas solubility) - this creates a vicious cycle accelerating climate change!',
                'Fish die in warm water because it holds less dissolved O₂. That\'s why power plants releasing hot water into rivers kill fish (thermal pollution)',
                'Mount Everest climbers need oxygen tanks not just because air is thin (low pressure) but also because cold at altitude means blood holds LESS oxygen even when available'
            ],
            whyYouCare: 'Understanding solubility factors explains: why you should make tea with hot water, why fish tanks need coolers in summer, how carbonation works, scuba diving safety, and ocean-climate interactions!'
        },
        {
            title: 'Saturation: The Dissolving Limit',
            explanation: 'Every solvent has a maximum capacity for dissolving solute at a given temperature. Once saturated, no more solute will dissolve.',
            analogy: {
                type: 'The Crowded Elevator',
                description: '**UNSATURATED SOLUTION = Elevator with room**\n• More solute CAN dissolve\n• Add sugar → it disappears (dissolves)\n• Solution "has capacity"\n• Like: Elevator with 5 people, capacity 10\n\n**SATURATED SOLUTION = Elevator at max capacity**\n• NO more solute can dissolve at that temperature\n• Add sugar → it settles at bottom (won\'t dissolve)\n• Solution is "full"\n• Like: Elevator with 10 people - no room for more\n\n**SUPERSATURATED SOLUTION = Overcrowded elevator (unstable!)**\n• MORE solute dissolved than should be possible\n• Created by dissolving at HIGH temp, then cooling carefully\n• UNSTABLE - any disturbance causes crystallization\n• Like: Squeezing 12 people in 10-capacity elevator - unstable!\n\n**HOW TO CREATE SUPERSATURATED:**\n1. Heat water (increases solubility)\n2. Dissolve LOTS of sugar (saturated at high temp)\n3. Cool SLOWLY without disturbing\n4. Now cold water holds more sugar than it should (supersaturated)\n5. Add seed crystal or tap jar → INSTANT crystallization!\n\n**CRYSTAL FORMATION:**\n• Saturated solution + cooling = crystals grow\n• Atoms/molecules arrange in ordered pattern\n• This is how rock candy, salt crystals, and gemstones form!\n\nIt\'s like finding the "maximum capacity" for dissolving - the breaking point where no more fits!'
            },
            mindBlowingFacts: [
                'Instant hand warmers use supersaturated sodium acetate. Clicking the metal disc creates a nucleation site → instant crystallization → releases heat (exothermic)!',
                'Honey is a supersaturated sugar solution - that\'s why it crystallizes over time. Heat it to redissolve the crystals',
                'Your kidneys maintain your blood JUST BELOW saturation for various salts. Kidney stones form when concentration exceeds solubility - painful crystallization!'
            ],
            whyYouCare: 'Understanding saturation explains: how to make rock candy, why hot chocolate dissolves better in hot milk, how kidney stones form, how instant heat/cold packs work, and how to prevent sugar crystallization in candy-making!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Calculating Molarity from Mass',
            problemSetup: 'You need to prepare a 1.5 M solution of NaCl (table salt). You have 500 mL of water. How many grams of NaCl do you need? (Molar mass of NaCl = 58.5 g/mol)',
            steps: [
                {
                    step: 1,
                    description: 'Write the molarity formula: M = moles / liters',
                    reasoning: 'We know molarity (1.5 M) and volume (500 mL), need to find moles first'
                },
                {
                    step: 2,
                    description: 'Convert volume to liters: 500 mL = 0.5 L',
                    reasoning: 'Molarity requires volume in LITERS, not mL'
                },
                {
                    step: 3,
                    description: 'Rearrange formula to solve for moles:\nmoles = M × L = 1.5 M × 0.5 L = 0.75 moles',
                    reasoning: 'We need 0.75 moles of NaCl to make 1.5 M solution in 0.5 L'
                },
                {
                    step: 4,
                    description: 'Convert moles to grams using molar mass:\ngrams = moles × molar mass\ngrams = 0.75 mol × 58.5 g/mol = 43.875 g ≈ 44 g',
                    reasoning: 'Molar mass converts between moles (counting particles) and grams (mass we can measure)'
                },
                {
                    step: 5,
                    description: 'Final answer: Dissolve 44 g of NaCl in water, then add water to reach 500 mL total volume',
                    reasoning: 'Important: Add solute first, THEN add solvent to final volume (don\'t just add 500 mL water - total volume might exceed 500 mL)'
                }
            ],
            solution: 'You need 44 grams of NaCl dissolved in enough water to make a total volume of 500 mL.',
            realWorldApplication: 'This is EXACTLY how chemists and pharmacists prepare solutions in labs and hospitals. IV saline, chemical reagents, and medicine solutions all require precise molarity calculations!'
        },
        {
            scenario: 'Dilution Calculation',
            problemSetup: 'You have 50 mL of 12 M HCl (concentrated hydrochloric acid). You need to dilute it to 3 M for an experiment. What is the final volume after dilution? How much water should you add?',
            steps: [
                {
                    step: 1,
                    description: 'Write the dilution formula: M₁V₁ = M₂V₂',
                    reasoning: 'This formula relates initial and final molarity and volumes - the amount of solute stays constant, only volume changes'
                },
                {
                    step: 2,
                    description: 'Identify known values:\nM₁ = 12 M (initial molarity)\nV₁ = 50 mL (initial volume)\nM₂ = 3 M (final molarity)\nV₂ = ? (final volume - what we\'re solving for)',
                    reasoning: 'Organize what we know and what we need to find'
                },
                {
                    step: 3,
                    description: 'Substitute into formula:\n(12 M)(50 mL) = (3 M)(V₂)\n600 = 3V₂',
                    reasoning: 'Plug in the known values and solve for V₂'
                },
                {
                    step: 4,
                    description: 'Solve for V₂:\nV₂ = 600 / 3 = 200 mL',
                    reasoning: 'The final volume must be 200 mL to achieve 3 M concentration'
                },
                {
                    step: 5,
                    description: 'Calculate water to add:\nWater needed = V₂ - V₁ = 200 mL - 50 mL = 150 mL',
                    reasoning: 'You start with 50 mL and need to reach 200 mL total, so add 150 mL water'
                },
                {
                    step: 6,
                    description: '⚠️ SAFETY: Always add acid TO water, NEVER water to acid!\nCorrect: Pour 150 mL water into beaker first, then slowly add 50 mL of 12 M HCl',
                    reasoning: 'Adding water to concentrated acid can cause violent boiling and splashing - dangerous! Acid to water dilutes safely'
                }
            ],
            solution: 'Final volume = 200 mL. Add 150 mL of water to the 50 mL of concentrated acid (Remember: acid to water, not water to acid!).',
            realWorldApplication: 'Dilution is used constantly in chemistry labs, hospitals (diluting concentrated medicines), water treatment (diluting chlorine), and even cooking (diluting concentrated juice). The M₁V₁ = M₂V₂ formula is a chemist\'s best friend!'
        },
        {
            scenario: 'Percent Concentration Calculation',
            problemSetup: 'A patient needs an IV saline solution that is 0.9% NaCl by mass. If the IV bag contains 1,000 g of solution, how many grams of NaCl are in the bag?',
            steps: [
                {
                    step: 1,
                    description: 'Write the percent by mass formula:\n% by mass = (mass of solute / mass of solution) × 100%',
                    reasoning: 'Percent by mass tells us grams of solute per 100 g total solution'
                },
                {
                    step: 2,
                    description: 'Identify known values:\n% by mass = 0.9%\nmass of solution = 1,000 g\nmass of solute = ?',
                    reasoning: 'We know the percentage and total mass, need to find solute mass'
                },
                {
                    step: 3,
                    description: 'Rearrange formula to solve for mass of solute:\nmass of solute = (% by mass / 100%) × mass of solution',
                    reasoning: 'Isolate the unknown (mass of solute) on one side'
                },
                {
                    step: 4,
                    description: 'Substitute and calculate:\nmass of NaCl = (0.9 / 100) × 1,000 g = 0.009 × 1,000 = 9 g',
                    reasoning: '0.9% means 0.9 g per 100 g solution, so in 1,000 g solution we have 10 times that'
                },
                {
                    step: 5,
                    description: 'Verify using ratio:\n0.9 g / 100 g = 9 g / 1,000 g ✓',
                    reasoning: 'Check makes sense - scaling up by 10× increases solute by 10×'
                }
            ],
            solution: 'The 1,000 g IV bag contains 9 grams of NaCl and 991 grams of water.',
            realWorldApplication: 'This is the EXACT calculation nurses and pharmacists use for IV solutions. 0.9% saline (also called "normal saline") matches blood salt concentration - too high or low would damage blood cells!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'You dissolve 40 g of sugar in 200 mL of water. What is the percent by mass concentration? (Assume water density = 1 g/mL, so 200 mL = 200 g)',
            hints: [
                'First find total mass of solution: mass of sugar + mass of water',
                'Total mass = 40 g + 200 g = 240 g',
                'Use formula: % = (mass solute / mass solution) × 100%',
                'Answer: (40 / 240) × 100% = 16.7%'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Explain why a can of soda fizzes more when opened if it\'s warm compared to if it\'s cold.',
            hints: [
                'Think about gas solubility and temperature',
                'Warm temperature decreases gas solubility in liquids',
                'Cold soda holds MORE dissolved CO₂ than warm soda',
                'Warm soda has LESS dissolved CO₂, so more escapes when pressure is released (bigger fizz)'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p3',
            question: 'You need to make 250 mL of 0.5 M NaCl solution. How many grams of NaCl do you need? (Molar mass NaCl = 58.5 g/mol)',
            hints: [
                'Convert volume to liters: 250 mL = 0.25 L',
                'Calculate moles needed: moles = M × L = 0.5 × 0.25 = 0.125 mol',
                'Convert moles to grams: grams = moles × molar mass',
                'Answer: 0.125 mol × 58.5 g/mol = 7.3 g'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p4',
            question: 'You have 100 mL of 6 M HCl and need to dilute it to 2 M. What is the final volume, and how much water should you add?',
            hints: [
                'Use dilution formula: M₁V₁ = M₂V₂',
                'M₁ = 6 M, V₁ = 100 mL, M₂ = 2 M, V₂ = ?',
                'Solve: (6)(100) = (2)(V₂) → V₂ = 300 mL',
                'Water to add = 300 - 100 = 200 mL'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p5',
            question: 'A saturated solution of KNO₃ at 60°C contains 110 g of KNO₃ per 100 g of water. If you cool this solution to 20°C (where solubility is 32 g/100 g water), how many grams of KNO₃ will crystallize out?',
            hints: [
                'At 60°C: 110 g dissolved (saturated)',
                'At 20°C: Only 32 g can stay dissolved (saturation limit drops)',
                'Excess must crystallize: 110 - 32 = 78 g',
                'This is how rock candy is made - dissolve at high temp, crystallize at low temp'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'In a saltwater solution, which is the solute and which is the solvent?',
            options: [
                { label: 'A', text: 'Salt is solute, water is solvent' },
                { label: 'B', text: 'Water is solute, salt is solvent' },
                { label: 'C', text: 'Both are solutes' },
                { label: 'D', text: 'Both are solvents' },
                { label: 'E', text: 'Neither, it\'s a heterogeneous mixture' }
            ],
            correctAnswer: 'A',
            explanation: 'The solute is the substance being dissolved (salt), and the solvent is the substance doing the dissolving (water). Usually, solvent is present in larger amount.',
            storyExplanation: 'Think of it like a host (solvent = water) welcoming a guest (solute = salt) into their home. The host (water) is in charge and surrounds the guest (salt particles)!'
        },
        {
            id: 'q2',
            question: 'What happens to the solubility of GASES in water when temperature increases?',
            options: [
                { label: 'A', text: 'Solubility increases' },
                { label: 'B', text: 'Solubility decreases' },
                { label: 'C', text: 'Solubility stays the same' },
                { label: 'D', text: 'Solubility doubles' },
                { label: 'E', text: 'Gas turns into solid' }
            ],
            correctAnswer: 'B',
            explanation: 'Gas solubility DECREASES as temperature increases. That\'s why warm soda goes flat faster (CO₂ escapes) and hot water holds less oxygen (bad for fish).',
            storyExplanation: 'Imagine gas molecules as restless kids. In cold water (calm classroom), they stay dissolved. In hot water (chaotic playground), they get excited and escape! Heat = more energy = gas leaves solution.'
        },
        {
            id: 'q3',
            question: 'A 2 M solution of NaCl means:',
            options: [
                { label: 'A', text: '2 grams of NaCl per liter' },
                { label: 'B', text: '2 moles of NaCl per liter' },
                { label: 'C', text: '2 liters of NaCl per mole' },
                { label: 'D', text: '2% NaCl by mass' },
                { label: 'E', text: '2 NaCl molecules per liter' }
            ],
            correctAnswer: 'B',
            explanation: 'Molarity (M) is defined as moles of solute per liter of solution. 2 M NaCl = 2 moles NaCl per 1 liter of solution.',
            storyExplanation: 'M = moles/Liter. Think "M" for "Moles" per liter. 2 M means you\'ve got 2 moles (not grams, not molecules, but MOLES) in every liter of solution!'
        },
        {
            id: 'q4',
            question: 'Which statement about "like dissolves like" is correct?',
            options: [
                { label: 'A', text: 'Polar solvents dissolve nonpolar solutes' },
                { label: 'B', text: 'Nonpolar solvents dissolve polar solutes' },
                { label: 'C', text: 'Polar solvents dissolve polar solutes, nonpolar dissolve nonpolar' },
                { label: 'D', text: 'All substances dissolve in water' },
                { label: 'E', text: 'Solubility is random and unpredictable' }
            ],
            correctAnswer: 'C',
            explanation: '"Like dissolves like" means polar solvents (like water) dissolve polar solutes (like salt), and nonpolar solvents (like oil) dissolve nonpolar solutes (like grease).',
            storyExplanation: 'It\'s like a dating rule: similar personalities attract! Polar molecules (charged/partial charges) like other polar molecules. Nonpolar molecules (no charges) like other nonpolar ones. Opposites DON\'T attract in chemistry!'
        },
        {
            id: 'q5',
            question: 'What does it mean when a solution is "saturated"?',
            options: [
                { label: 'A', text: 'No solute is dissolved' },
                { label: 'B', text: 'Maximum amount of solute is dissolved at that temperature' },
                { label: 'C', text: 'The solution is boiling' },
                { label: 'D', text: 'The solution is frozen' },
                { label: 'E', text: 'The solution is very dilute' }
            ],
            correctAnswer: 'B',
            explanation: 'A saturated solution has dissolved the maximum amount of solute possible at a given temperature. Adding more solute will not dissolve - it will settle at the bottom.',
            storyExplanation: 'Think of a saturated solution like a full sponge - it\'s absorbed all the water it can hold. Add more water, and it just drips off. Saturated = at maximum capacity!'
        }
    ],
    memoryAids: [
        {
            technique: 'Phrase',
            description: 'Solute vs Solvent: "The solUTE is dissolvED (both have U and E), the solvENT does the dissolvING (both have EN)"',
            example: 'Salt (solUTE) is dissolvED in water (solvENT)'
        },
        {
            technique: 'Acronym',
            description: 'Remember dilution formula M₁V₁ = M₂V₂ as "My Very Massive Veggie" (M, V, M, V)',
            example: 'Initial Molarity × Initial Volume = Final Molarity × Final Volume'
        },
        {
            technique: 'Rhyme',
            description: 'Gas solubility: "Hot makes it flee, cold makes it stay with glee!"',
            example: 'Remember: Heating decreases gas solubility (gas escapes), cooling increases it (gas stays)'
        },
        {
            technique: 'Visual',
            description: 'Like dissolves like: Draw polar molecules with + and - signs sticking together, nonpolar molecules (no signs) grouping separately',
            example: 'Polar attracts polar (magnets), nonpolar slides with nonpolar (smooth balls)'
        },
        {
            technique: 'Story',
            description: 'Molarity memory: "M is Mighty important - it counts Molecules (moles) per Liter"',
            example: 'M = mol/L - the "M" reminds you it\'s about counting molecules (moles), not mass'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Confusing solute and solvent',
            correction: 'SOLUTE = substance being dissolved (usually LESS). SOLVENT = substance doing dissolving (usually MORE). In saltwater: salt is solute (less), water is solvent (more).',
            whyItMatters: 'Mixing these up reverses your understanding of the solution and leads to calculation errors'
        },
        {
            mistake: 'Thinking concentration and amount are the same',
            correction: 'CONCENTRATION = how strong (amount per volume). AMOUNT = total quantity. You can have LOW concentration but HIGH amount (lots of dilute solution) or HIGH concentration but LOW amount (little bit of concentrated solution).',
            whyItMatters: 'A drop of poison in high concentration can be deadlier than a gallon of poison in low concentration. Concentration ≠ amount!'
        },
        {
            mistake: 'Applying solid solubility rules to gases',
            correction: 'SOLIDS: Higher temp = MORE soluble. GASES: Higher temp = LESS soluble. They\'re OPPOSITE! Also, pressure affects gases but NOT solids.',
            whyItMatters: 'This explains why you heat water to dissolve sugar (solid) but cool soda to keep CO₂ (gas) dissolved. Mixing up these rules gives wrong predictions!'
        },
        {
            mistake: 'Forgetting to convert mL to L in molarity calculations',
            correction: 'Molarity = moles/LITERS (not mL!). Always convert: mL ÷ 1000 = L. Using mL directly gives answers 1000× too large.',
            whyItMatters: 'This is the #1 calculation error in chemistry. 500 mL ≠ 500 L! Always check units before calculating.'
        },
        {
            mistake: 'Adding water to acid instead of acid to water',
            correction: 'ALWAYS add acid TO water (slowly), NEVER water to concentrated acid. Rule: "Do like you oughta, add acid to water" or "A-A" (Acid to wAter).',
            whyItMatters: 'Adding water to concentrated acid causes violent boiling and splashing - can cause severe burns! This safety rule saves lives in labs.'
        }
    ],
    quickReference: [
        {
            title: 'Solution Terminology',
            content: 'SOLUTION: Homogeneous mixture (uniform throughout)\nSOLUTE: Substance being dissolved (usually less)\nSOLVENT: Substance doing dissolving (usually more)\nCONCENTRATION: Amount of solute per amount of solution',
            category: 'principle'
        },
        {
            title: 'Molarity Calculations',
            content: 'MOLARITY: M = moles of solute / liters of solution\nDILUTION: M₁V₁ = M₂V₂\nMoles from mass: moles = grams / molar mass\nMass from moles: grams = moles × molar mass',
            category: 'formula'
        },
        {
            title: 'Concentration Units',
            content: 'MOLARITY (M): mol/L\nPERCENT MASS: (g solute / g solution) × 100%\nPERCENT VOLUME: (mL solute / mL solution) × 100%\nppm: mg solute / L solution (for dilute aqueous)\nppb: μg solute / L solution',
            category: 'rule'
        },
        {
            title: 'Solubility Rules',
            content: 'LIKE DISSOLVES LIKE: Polar + polar ✓, Nonpolar + nonpolar ✓, Polar + nonpolar ✗\nTEMPERATURE: ↑T = ↑solubility (solids), ↓solubility (gases)\nPRESSURE: ↑P = ↑solubility (gases only)',
            category: 'rule'
        },
        {
            title: 'Solution Types by Saturation',
            content: 'UNSATURATED: Can dissolve more solute\nSATURATED: Maximum solute dissolved (at equilibrium)\nSUPERSATURATED: More than max dissolved (unstable)',
            category: 'principle'
        }
    ],
    summary: [
        'Solutions are homogeneous mixtures where solute (dissolved substance) disperses uniformly in solvent (dissolving substance)',
        '"Like dissolves like" - polar solvents dissolve polar solutes, nonpolar dissolve nonpolar (water dissolves salt, oil dissolves grease)',
        'Molarity (M) = moles of solute / liters of solution - the standard concentration unit in chemistry',
        'Dilution formula M₁V₁ = M₂V₂ relates initial and final concentrations and volumes',
        'Temperature increases solubility of SOLIDS but DECREASES solubility of GASES in liquids',
        'Pressure increases gas solubility in liquids (Henry\'s Law) - why soda is pressurized',
        'Saturated solutions have maximum dissolved solute at that temperature; supersaturated solutions are unstable',
        'Concentration units: Molarity (mol/L), percent mass (g/100g), percent volume (mL/100mL), ppm (mg/L), ppb (μg/L)',
        'Understanding solutions is critical for: medicine dosing, chemistry reactions, environmental monitoring, and industrial processes'
    ],
    selfAssessment: [
        'I can distinguish between solute, solvent, and solution',
        'I understand "like dissolves like" and can predict if substances will dissolve',
        'I can calculate molarity from grams and volume',
        'I can use the dilution formula M₁V₁ = M₂V₂ to solve dilution problems',
        'I understand how temperature affects solubility differently for solids vs. gases',
        'I can explain Henry\'s Law and why pressure affects gas solubility',
        'I know the difference between unsaturated, saturated, and supersaturated solutions',
        'I can apply solution concepts to real-world situations (soda carbonation, IV solutions, pollution levels)'
    ]
};
export default lesson;
//# sourceMappingURL=day-17.js.map
const lesson = {
    day: 6,
    subject: 'chemistry',
    title: 'Chemical Bonding & Molecular Shapes',
    emoji: '🧲',
    learningGoal: 'Understand how atoms stick together to form molecules and predict the 3D shapes of molecules using VSEPR theory',
    estimatedTime: 60,
    objectives: [
        'Distinguish between ionic and covalent bonds and predict which will form',
        'Use VSEPR theory to predict molecular shapes from Lewis structures',
        'Explain how molecular shape affects properties like polarity and solubility'
    ],
    discoveryStory: {
        title: 'Linus Pauling and the Nature of the Chemical Bond',
        content: "It's the 1930s, and a brilliant young chemist named Linus Pauling is puzzling over a mystery: HOW do atoms actually stick together? Everyone knew atoms formed bonds, but nobody could explain WHY or HOW. Using the brand-new science of quantum mechanics (atoms behaving like waves!), Pauling had a revolutionary insight: electrons aren't just orbiting randomly - they're SHARED between atoms like two kids holding hands! He calculated that when two atoms share electrons, they become MORE stable than alone. It's like two puzzle pieces fitting together. He even figured out that some atoms are \"greedier\" for electrons than others - he called this ELECTRONEGATIVITY. His book 'The Nature of the Chemical Bond' (1939) revolutionized chemistry! But here's the kicker: Pauling also predicted molecular SHAPES. He realized that electron pairs repel each other (like magnets with the same pole), so molecules twist into 3D shapes to keep electrons as far apart as possible. Water bends into a V-shape, methane forms a pyramid - all because electrons hate being close! For this work, Pauling won the Nobel Prize in Chemistry. Later, he won a SECOND Nobel Prize (Peace) for campaigning against nuclear weapons. The only person ever to win two unshared Nobel Prizes!",
        emoji: '🏆'
    },
    keyTerms: [
        {
            term: 'Chemical Bond',
            definition: 'The attractive force holding atoms together in molecules or compounds',
            example: 'The bond in H₂O holds hydrogen and oxygen together - without it, water would just be separate gases!'
        },
        {
            term: 'Ionic Bond',
            definition: 'A bond formed when one atom TRANSFERS electrons to another atom, creating oppositely charged ions that attract',
            example: 'In table salt (NaCl), sodium GIVES an electron to chlorine, forming Na⁺ and Cl⁻ ions that stick together'
        },
        {
            term: 'Covalent Bond',
            definition: 'A bond formed when atoms SHARE electrons between them',
            example: 'In water (H₂O), oxygen shares electrons with two hydrogen atoms - nobody loses or gains, they share!'
        },
        {
            term: 'Electronegativity',
            definition: 'A measure of how strongly an atom attracts electrons in a bond (fluorine is the greediest!)',
            example: 'In H₂O, oxygen is more electronegative than hydrogen, so it hoards the shared electrons, making water polar'
        },
        {
            term: 'VSEPR Theory',
            definition: 'Valence Shell Electron Pair Repulsion - electron pairs around an atom repel each other and arrange in 3D to minimize repulsion',
            example: 'Methane (CH₄) is tetrahedral because 4 electron pairs around carbon spread out evenly in 3D space'
        },
        {
            term: 'Polar Molecule',
            definition: 'A molecule with an uneven distribution of charge (one end slightly positive, other end slightly negative)',
            example: 'Water is polar - oxygen end is slightly negative (δ-), hydrogen ends are slightly positive (δ+)'
        }
    ],
    concepts: [
        {
            title: 'Ionic vs Covalent Bonds: The Great Divide',
            explanation: "Atoms bond to become more stable (usually to get 8 valence electrons - the 'octet rule'). HOW they bond depends on electronegativity difference: large difference = ionic bond (transfer), small difference = covalent bond (share).",
            analogy: {
                type: 'Sharing vs Stealing',
                description: 'Imagine two kids with different toy collections:\n\n**IONIC (Stealing)**: A big kid (metal, low electronegativity) has 1 toy they don\'t care about. A greedy kid (nonmetal, high electronegativity) desperately wants it. The greedy kid TAKES the toy! Now big kid has a positive charge (lost toy), greedy kid has negative charge (gained toy). They\'re attracted to each other! Example: Na (gives electron) + Cl (takes electron) → Na⁺Cl⁻ (salt)\n\n**COVALENT (Sharing)**: Two kids with similar interests (both nonmetals) decide to SHARE toys equally. Nobody loses or gains. Example: H + H share electrons → H₂ (hydrogen gas)\n\n**Rule of thumb**: Metal + Nonmetal = IONIC. Nonmetal + Nonmetal = COVALENT.'
            },
            mindBlowingFacts: [
                'Ionic bonds are so strong that table salt (NaCl) melts at 801°C!',
                'Diamond is pure carbon atoms bonded covalently - the hardest natural substance because every atom is bonded to 4 others',
                'Metals are held together by "metallic bonds" where electrons flow freely (like a "sea of electrons") - that\'s why they conduct electricity!',
                'The strongest single covalent bond is carbon-carbon triple bond (like in acetylene) - stronger than steel!',
                'Gecko feet stick to walls using BILLIONS of weak intermolecular forces (not even real bonds!) - collectively super strong'
            ],
            whyYouCare: 'Understanding bonds explains why salt dissolves in water (ionic), why sugar dissolves (polar covalent), why oil doesn\'t (nonpolar covalent), why diamonds are hard, why metals conduct electricity, and how drugs interact with your body!'
        },
        {
            title: 'Electronegativity: The Greed Scale',
            explanation: "Electronegativity measures how much an atom wants electrons. Fluorine is most greedy (4.0), francium is least (0.7). The bigger the electronegativity DIFFERENCE between two bonded atoms, the more polar the bond.",
            analogy: {
                type: 'Tug-of-War',
                description: 'Imagine atoms playing tug-of-war with electrons:\n• **Equal strength** (same electronegativity): Rope stays in middle → NONPOLAR covalent (H-H)\n• **Slightly different** (small difference): Stronger one pulls rope a bit → POLAR covalent (H-O)\n• **Very different** (large difference): Strong one rips rope away completely → IONIC (Na-Cl)\n\nElectronegativity difference:\n• < 0.4: Nonpolar covalent\n• 0.4 - 1.7: Polar covalent  \n• > 1.7: Ionic'
            },
            mindBlowingFacts: [
                'Fluorine (F) is THE most electronegative element - it\'s so greedy it pulls electrons from almost anything!',
                'Noble gases (Group 18) have ZERO electronegativity - they don\'t want electrons, they\'re already happy!',
                'Electronegativity increases going UP and RIGHT on the periodic table (opposite of atomic size!)',
                'In hydrogen fluoride (HF), fluorine pulls electrons SO hard that it\'s the most polar single bond possible',
                'Oxygen\'s high electronegativity is why water is polar, which is why water is the "universal solvent"'
            ],
            whyYouCare: 'Electronegativity determines if molecules are polar (like water, dissolves polar stuff) or nonpolar (like oil, dissolves nonpolar stuff). "Like dissolves like" - this explains why oil and water don\'t mix, how soaps work, and how your cell membranes function!'
        },
        {
            title: 'VSEPR Theory: Electron Pair Repulsion',
            explanation: "VSEPR (Valence Shell Electron Pair Repulsion) theory says: electron pairs around an atom repel each other and arrange in 3D space to be as FAR APART as possible. This determines molecular shape!",
            analogy: {
                type: 'Balloons Tied Together',
                description: 'Imagine tying inflated balloons together at their tied ends:\n• 2 balloons → LINEAR (180° apart): CO₂\n• 3 balloons → TRIANGULAR FLAT (120° apart): BF₃\n• 4 balloons → TETRAHEDRAL/PYRAMID (109.5° apart): CH₄\n\nThe balloons (electron pairs) push away from each other to maximize distance! Same with electron pairs - they naturally arrange to be maximally separated in 3D space.\n\nImportant: LONE PAIRS (unshared electrons) also count and push even harder than bonding pairs!'
            },
            mindBlowingFacts: [
                'Water is BENT (not linear!) because oxygen has 2 lone pairs pushing the H-O-H angle to 104.5°',
                'Methane (CH₄) is perfectly tetrahedral - all bond angles exactly 109.5°',
                'Ammonia (NH₃) is trigonal pyramidal - slightly different from tetrahedral due to one lone pair',
                'Carbon dioxide (CO₂) is LINEAR, but water (H₂O) is BENT - both have 3 "things" around the central atom!',
                'Molecular shape determines function: enzymes only bind to molecules with the RIGHT shape ("lock and key")'
            ],
            whyYouCare: 'Molecular shape is EVERYTHING in biology and medicine! Drugs work because they have the right shape to fit into body receptors. Your sense of smell works by detecting molecular shapes. DNA\'s double helix shape allows it to replicate. Shape = Function!'
        },
        {
            title: 'Molecular Polarity: Charge Distribution',
            explanation: "A molecule is polar if it has an uneven distribution of charge (one end δ+, other δ-). This depends on: (1) bond polarity (electronegativity difference) AND (2) molecular SHAPE (can polar bonds cancel out?).",
            analogy: {
                type: 'Tug-of-War Teams',
                description: '**Water (H₂O) - POLAR**:\nOxygen (greedy) vs two Hydrogens → oxygen wins, pulls electrons\nShape: BENT → polar bonds DON\'T cancel → molecule is POLAR\n(Imagine two weak kids on one side, one strong kid on other - strong kid wins!)\n\n**Carbon dioxide (CO₂) - NONPOLAR**:\nTwo Oxygens (greedy) vs Carbon in the middle\nShape: LINEAR → oxygen pulls equally from BOTH sides → forces cancel → molecule is NONPOLAR  \n(Imagine two equally strong kids pulling from opposite sides - tie game, rope doesn\'t move!)\n\nKey insight: Even if bonds are polar, SYMMETRICAL shapes → nonpolar molecule!'
            },
            mindBlowingFacts: [
                'Water\'s polarity is why it\'s the "universal solvent" - it dissolves ionic and polar compounds',
                'Oil is nonpolar, so it doesn\'t dissolve in polar water → they separate!',
                'Soap has BOTH a polar end (loves water) and a nonpolar end (loves oil) - that\'s why it cleans!',
                'Your cell membranes are made of molecules with polar heads and nonpolar tails → creates barrier',
                'Polar molecules have higher boiling points than nonpolar molecules of similar size (stronger intermolecular forces)'
            ],
            whyYouCare: 'Polarity explains: why water is special, why "like dissolves like", how soap works, why alcohol mixes with water but gasoline doesn\'t, how cell membranes work, and why some substances cross the blood-brain barrier while others can\'t!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Predicting Bond Type',
            problemSetup: 'Predict whether the following pairs will form ionic or covalent bonds: (a) Sodium + Chlorine, (b) Carbon + Oxygen, (c) Magnesium + Oxygen',
            steps: [
                {
                    step: 1,
                    description: 'Identify element types',
                    reasoning: '(a) Na (metal) + Cl (nonmetal)\n(b) C (nonmetal) + O (nonmetal)\n(c) Mg (metal) + O (nonmetal)'
                },
                {
                    step: 2,
                    description: 'Apply the rule: Metal + Nonmetal = IONIC, Nonmetal + Nonmetal = COVALENT',
                    reasoning: '(a) Metal + Nonmetal → IONIC\n(b) Nonmetal + Nonmetal → COVALENT\n(c) Metal + Nonmetal → IONIC'
                },
                {
                    step: 3,
                    description: 'Verify with electronegativity (optional)',
                    reasoning: '(a) Na (0.9) vs Cl (3.0): difference = 2.1 (>1.7) → IONIC ✓\n(b) C (2.5) vs O (3.5): difference = 1.0 (<1.7) → COVALENT ✓\n(c) Mg (1.2) vs O (3.5): difference = 2.3 (>1.7) → IONIC ✓'
                }
            ],
            solution: '(a) NaCl: IONIC (forms table salt)\n(b) CO or CO₂: COVALENT (forms gases)\n(c) MgO: IONIC (forms magnesium oxide, used in antacids)',
            realWorldApplication: 'Ionic compounds (salts) are solid crystals at room temp, dissolve in water, conduct electricity when dissolved. Covalent compounds are often gases/liquids, don\'t conduct electricity. This is why salt water conducts electricity but sugar water doesn\'t!'
        },
        {
            scenario: 'Determining Molecular Shape and Polarity',
            problemSetup: 'For water (H₂O) and carbon dioxide (CO₂), predict: (a) molecular shape, (b) whether the molecule is polar or nonpolar.',
            steps: [
                {
                    step: 1,
                    description: 'Count electron pairs around central atom',
                    reasoning: 'H₂O: Oxygen has 2 bonding pairs (to H atoms) + 2 lone pairs = 4 electron pairs total\nCO₂: Carbon has 2 bonding pairs (to O atoms) + 0 lone pairs = 2 electron pairs total'
                },
                {
                    step: 2,
                    description: 'Predict electron geometry (VSEPR)',
                    reasoning: 'H₂O: 4 electron pairs → TETRAHEDRAL electron geometry\nCO₂: 2 electron pairs → LINEAR electron geometry'
                },
                {
                    step: 3,
                    description: 'Determine molecular shape (ignore lone pairs)',
                    reasoning: 'H₂O: 2 bonds + 2 lone pairs → BENT molecular shape (104.5° angle)\nCO₂: 2 bonds + 0 lone pairs → LINEAR molecular shape (180° angle)'
                },
                {
                    step: 4,
                    description: 'Assess polarity',
                    reasoning: 'H₂O: O-H bonds are polar (O more electronegative). BENT shape → polar bonds DON\'T cancel → POLAR molecule!\nCO₂: C=O bonds are polar. But LINEAR shape → polar bonds point opposite directions → cancel → NONPOLAR molecule!'
                }
            ],
            solution: 'H₂O: BENT shape, POLAR molecule\nCO₂: LINEAR shape, NONPOLAR molecule',
            realWorldApplication: 'This explains why CO₂ is a gas (weak intermolecular forces, nonpolar) but water is liquid (strong intermolecular forces, polar). It also explains why water dissolves salt but CO₂ doesn\'t!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Ammonia (NH₃) has nitrogen as the central atom bonded to three hydrogens. Nitrogen also has one lone pair of electrons. (a) Predict the molecular shape. (b) Is ammonia polar or nonpolar? (c) Would ammonia dissolve well in water?',
            hints: [
                '4 electron pairs around nitrogen (3 bonds + 1 lone pair)',
                'Tetrahedral electron geometry, but lone pair changes the molecular shape',
                'N is more electronegative than H → polar bonds',
                'Is the shape symmetrical? Can polar bonds cancel?'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p2',
            question: 'Explain why cooking oil doesn\'t mix with water, but when you add dish soap, they suddenly mix together. Use concepts of polarity and molecular structure in your answer.',
            hints: [
                'Water is polar, oil is nonpolar',
                '"Like dissolves like" principle',
                'Soap molecules have a special structure with TWO ends'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'What type of bond forms between a metal and a nonmetal?',
            options: [
                { label: 'A', text: 'Covalent bond' },
                { label: 'B', text: 'Ionic bond' },
                { label: 'C', text: 'Metallic bond' },
                { label: 'D', text: 'Hydrogen bond' },
                { label: 'E', text: 'No bond forms' }
            ],
            correctAnswer: 'B',
            explanation: 'Metals (low electronegativity) transfer electrons to nonmetals (high electronegativity), forming ionic bonds.',
            storyExplanation: 'Think of it like a one-way transaction: Metal GIVES electron → becomes positive. Nonmetal TAKES electron → becomes negative. Opposites attract! That\'s why sodium (metal) + chlorine (nonmetal) = table salt (NaCl), an ionic compound.'
        },
        {
            id: 'q2',
            question: 'Which molecule is NONPOLAR despite having polar bonds?',
            options: [
                { label: 'A', text: 'Water (H₂O)' },
                { label: 'B', text: 'Ammonia (NH₃)' },
                { label: 'C', text: 'Carbon dioxide (CO₂)' },
                { label: 'D', text: 'Hydrogen chloride (HCl)' },
                { label: 'E', text: 'Hydrogen fluoride (HF)' }
            ],
            correctAnswer: 'C',
            explanation: 'CO₂ is linear, so the two polar C=O bonds point in opposite directions and cancel out, making the overall molecule nonpolar.',
            storyExplanation: 'Imagine two people pulling a rope from opposite ends with equal force - the rope doesn\'t move! Same with CO₂: oxygen atoms pull electrons equally from opposite sides, so the charges cancel. Result: nonpolar molecule despite polar bonds!'
        },
        {
            id: 'q3',
            question: 'What does VSEPR theory stand for and predict?',
            options: [
                { label: 'A', text: 'Very Small Electron Pair Radius - predicts atomic size' },
                { label: 'B', text: 'Valence Shell Electron Pair Repulsion - predicts molecular shape' },
                { label: 'C', text: 'Variable State Energy Particle Reaction - predicts reaction rates' },
                { label: 'D', text: 'Visible Spectrum Emission Particle Reading - predicts colors' },
                { label: 'E', text: 'Voltage Source Electron Proton Resistance - predicts conductivity' }
            ],
            correctAnswer: 'B',
            explanation: 'VSEPR = Valence Shell Electron Pair Repulsion. It predicts molecular shapes based on electron pairs repelling each other.',
            storyExplanation: 'Think of electrons as teenagers - they want to be as far away from each other as possible! VSEPR theory says electron pairs arrange themselves to maximize distance, which determines the 3D shape of the molecule.'
        },
        {
            id: 'q4',
            question: 'Why is water (H₂O) a bent molecule rather than linear?',
            options: [
                { label: 'A', text: 'Hydrogen atoms are too large' },
                { label: 'B', text: 'Oxygen has two lone pairs of electrons that repel the bonding pairs' },
                { label: 'C', text: 'Water molecules are always in motion' },
                { label: 'D', text: 'Hydrogen bonds between water molecules bend them' },
                { label: 'E', text: 'Oxygen has only one electron' }
            ],
            correctAnswer: 'B',
            explanation: 'Oxygen has 2 lone pairs that push down on the H-O-H bond angle, creating a bent shape (104.5° instead of 180°).',
            storyExplanation: 'Imagine oxygen as a person with 4 arms: 2 arms hold hydrogen atoms, 2 arms hold nothing (lone pairs). The empty arms still take up space and push the hydrogen arms closer together, bending the molecule into a V-shape!'
        },
        {
            id: 'q5',
            question: 'Which statement about electronegativity is TRUE?',
            options: [
                { label: 'A', text: 'Metals have higher electronegativity than nonmetals' },
                { label: 'B', text: 'Fluorine is the most electronegative element' },
                { label: 'C', text: 'Noble gases have the highest electronegativity' },
                { label: 'D', text: 'Electronegativity decreases going right across a period' },
                { label: 'E', text: 'All elements have the same electronegativity' }
            ],
            correctAnswer: 'B',
            explanation: 'Fluorine (F) is the most electronegative element (4.0 on the Pauling scale) - it\'s the greediest for electrons!',
            storyExplanation: 'Fluorine is the electron bully of the periodic table! It pulls electrons so hard that when it bonds with hydrogen (HF), it creates the most polar bond possible. Noble gases don\'t count - they don\'t want electrons at all (already have a full outer shell).'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'To remember bond types: "MN = I, NN = C" → Metal-Nonmetal = Ionic, Nonmetal-Nonmetal = Covalent',
            example: 'Quick check: is it metal-nonmetal or both nonmetals?'
        },
        {
            technique: 'Rhyme',
            description: 'For polarity: "Symmetry means no polarity, Bent or uneven makes polarity!"',
            example: 'CO₂ (linear/symmetrical) = nonpolar, H₂O (bent) = polar'
        },
        {
            technique: 'Visual',
            description: 'Electron pairs are like balloons tied together - they naturally push apart to maximize distance. Count the balloons around the central atom to predict shape!',
            example: '2 balloons = linear, 3 = flat triangle, 4 = pyramid/tetrahedral'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Confusing electron geometry with molecular shape',
            correction: 'Electron geometry counts ALL electron pairs (bonding + lone pairs). Molecular shape only counts atoms (bonding pairs). Example: Water has tetrahedral electron geometry but BENT molecular shape!',
            whyItMatters: 'Lone pairs take up space and affect shape, but we describe molecular shape by where the ATOMS are, not where electrons are!'
        },
        {
            mistake: 'Thinking polar bonds always mean polar molecule',
            correction: 'Polar BONDS can cancel out if the molecule is SYMMETRICAL. Example: CO₂ has polar bonds but is a nonpolar molecule because it\'s linear (symmetrical).',
            whyItMatters: 'This explains why CO₂ doesn\'t dissolve well in water despite having polar C=O bonds. Shape matters as much as bond polarity!'
        },
        {
            mistake: 'Forgetting that lone pairs repel MORE than bonding pairs',
            correction: 'Lone pairs push harder because they\'re concentrated on one atom. This is why water\'s angle is 104.5° instead of the perfect tetrahedral 109.5°.',
            whyItMatters: 'Lone pair repulsion explains subtle differences in bond angles, which affects how molecules interact with each other!'
        }
    ],
    quickReference: [
        {
            title: 'Bond Type Rules',
            content: 'Metal + Nonmetal → IONIC (electron transfer)\nNonmetal + Nonmetal → COVALENT (electron sharing)\nElectronegativity diff > 1.7 → IONIC\nElectronegativity diff < 1.7 → COVALENT',
            category: 'rule'
        },
        {
            title: 'Common Molecular Shapes',
            content: '2 electron pairs → LINEAR (180°)\n3 electron pairs → TRIGONAL PLANAR (120°)\n4 electron pairs → TETRAHEDRAL (109.5°)\nBENT = tetrahedral with lone pairs',
            category: 'rule'
        },
        {
            title: 'Polarity Rules',
            content: 'POLAR if: Asymmetrical shape OR different atoms on ends\nNONPOLAR if: Symmetrical shape AND similar atoms\n"Like dissolves like": Polar dissolves polar, Nonpolar dissolves nonpolar',
            category: 'principle'
        }
    ],
    summary: [
        'Ionic bonds form between metals and nonmetals (electron transfer); covalent bonds form between nonmetals (electron sharing)',
        'Electronegativity measures how strongly atoms attract electrons; large difference → ionic, small difference → covalent',
        'VSEPR theory: electron pairs repel and arrange in 3D to minimize repulsion, determining molecular shape',
        'Lone pairs count in VSEPR and push harder than bonding pairs, affecting bond angles',
        'Molecular polarity depends on BOTH bond polarity and molecular shape - symmetrical shapes can cancel polar bonds',
        'Polarity determines solubility: "like dissolves like" - polar substances dissolve in polar solvents, nonpolar in nonpolar'
    ],
    selfAssessment: [
        'I can predict whether a pair of elements will form ionic or covalent bonds',
        'I understand electronegativity and can use it to predict bond polarity',
        'I can use VSEPR theory to predict molecular shapes from electron pair count',
        'I can determine if a molecule is polar or nonpolar based on shape and bond polarity',
        'I understand why "like dissolves like" and can predict solubility based on polarity'
    ]
};
export default lesson;
//# sourceMappingURL=day-06.js.map
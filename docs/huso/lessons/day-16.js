const lesson = {
    day: 16,
    subject: 'biology',
    title: 'Genetics & Heredity - The Code of Life',
    emoji: '🧬',
    learningGoal: 'Understand how traits are inherited through genes, decode Punnett squares, and discover the molecular basis of heredity',
    estimatedTime: 75,
    objectives: [
        'Explain the relationship between DNA, genes, chromosomes, and traits',
        'Distinguish between dominant and recessive alleles',
        'Use Punnett squares to predict inheritance patterns',
        'Understand genotype vs. phenotype and their relationship',
        'Recognize patterns of inheritance (Mendelian genetics)',
        'Apply genetic concepts to real-world examples and human traits'
    ],
    discoveryStory: {
        title: 'Gregor Mendel: The Monk Who Cracked the Code of Heredity',
        content: "Picture an Austrian monastery garden in 1856. A monk named Gregor Mendel is obsessively counting pea plants - tall ones, short ones, green ones, yellow ones. His fellow monks think he's lost his mind! But Mendel has a radical hypothesis: traits aren't just randomly mixed like paint. They're passed down in DISCRETE UNITS following mathematical rules. Over 8 years, he grows 29,000 pea plants, meticulously tracking 7 traits through multiple generations. The results? Mind-blowing! Traits don't blend - they follow predictable 3:1 ratios. When he crosses tall and short peas, ALL offspring are tall (F1), but when he crosses THOSE offspring, he gets 3 tall : 1 short (F2). He's discovered dominant and recessive traits! Mendel publishes in 1866, but nobody understands the significance. He dies in 1884, unknown and unappreciated. Then in 1900, THREE scientists independently rediscover his work and realize: this monk figured out the fundamental laws of heredity BEFORE anyone knew about genes, DNA, or chromosomes! Today, Mendel is called the 'Father of Genetics.' His pea plants revealed the code of life itself! 🌱🧬",
        emoji: '🫛'
    },
    keyTerms: [
        {
            term: 'Gene',
            definition: 'A segment of DNA that codes for a specific trait (like eye color, height, or blood type)',
            example: 'The gene for eye color determines whether you have brown, blue, green, or hazel eyes'
        },
        {
            term: 'Allele',
            definition: 'Different versions of the same gene (you inherit one allele from each parent)',
            example: 'For eye color, you might have a "brown" allele from mom and a "blue" allele from dad'
        },
        {
            term: 'Dominant Allele',
            definition: 'An allele that masks the effect of a recessive allele; only ONE copy needed to show the trait (represented by capital letter)',
            example: 'Brown eye allele (B) is dominant - if you have Bb, you\'ll have brown eyes'
        },
        {
            term: 'Recessive Allele',
            definition: 'An allele whose effect is masked by a dominant allele; TWO copies needed to show the trait (represented by lowercase letter)',
            example: 'Blue eye allele (b) is recessive - you need bb to have blue eyes'
        },
        {
            term: 'Genotype',
            definition: 'The genetic makeup (allele combination) of an organism for a particular trait',
            example: 'Genotype BB, Bb, or bb for eye color - the letters representing your genes'
        },
        {
            term: 'Phenotype',
            definition: 'The observable physical trait that results from the genotype',
            example: 'Phenotype = brown eyes or blue eyes - what you actually SEE'
        },
        {
            term: 'Homozygous',
            definition: 'Having two identical alleles for a trait (both dominant or both recessive)',
            example: 'BB (homozygous dominant) or bb (homozygous recessive)'
        },
        {
            term: 'Heterozygous',
            definition: 'Having two different alleles for a trait (one dominant, one recessive)',
            example: 'Bb (heterozygous) - you have one of each type'
        }
    ],
    concepts: [
        {
            title: 'DNA → Genes → Chromosomes → You!',
            explanation: 'Your traits are determined by a hierarchy of genetic information storage, from molecules to cells.',
            analogy: {
                type: 'The Library of Life',
                description: 'Think of your genetic information like a massive library:\n\n**DNA = The Alphabet (A, T, G, C)**\n• Four chemical "letters" that make up the genetic code\n• Sequence determines information (like letters form words)\n\n**GENE = A Recipe (Instruction for One Trait)**\n• Specific sequence of DNA letters\n• Codes for one protein/trait (eye color, blood type, etc.)\n• You have ~20,000 genes\n\n**CHROMOSOME = A Book (Collection of Many Genes)**\n• Long strand of DNA containing hundreds/thousands of genes\n• Humans have 46 chromosomes (23 pairs)\n• Each parent gives you one chromosome from each pair\n\n**GENOME = The Complete Library**\n• ALL your genetic information\n• 3 billion DNA letters total\n• Makes you uniquely YOU\n\n**CELL NUCLEUS = The Library Building**\n• Where chromosomes are stored\n• Every cell in your body has the SAME complete library\n\nJust like letters → words → sentences → chapters → books → library,\nDNA letters → genes → chromosomes → nucleus → cell → YOU!'
            },
            mindBlowingFacts: [
                'If you uncoiled ALL the DNA in ONE cell, it would be 2 METERS long! But it\'s packed so tightly it fits in a nucleus 0.00001 meters wide - that\'s like fitting 25 miles of thread into a tennis ball!',
                'You have 3 BILLION DNA base pairs, but you only differ from any other human by 0.1% - just 3 million differences make you unique!',
                'You share 99% of your DNA with chimpanzees, 90% with cats, 60% with bananas, and 50% with yeast - we\'re all related!'
            ],
            whyYouCare: 'Understanding DNA → genes → traits explains: why you look like your parents, why some diseases run in families, how genetic testing works, and why identical twins look alike but fraternal twins don\'t!'
        },
        {
            title: 'Dominant vs. Recessive: The Genetic Tug-of-War',
            explanation: 'When you have two different alleles (one from each parent), the dominant allele "wins" and determines your trait. The recessive allele is hidden unless you have TWO copies.',
            analogy: {
                type: 'Genetic Voting System',
                description: 'Think of your two alleles as two voters deciding on your trait:\n\n**DOMINANT ALLELE (Capital Letter, e.g., B) = LOUD VOTER**\n• Only needs ONE vote to win\n• Shouts over the recessive allele\n• "I want brown eyes!" → You get brown eyes\n\n**RECESSIVE ALLELE (lowercase letter, e.g., b) = QUIET VOTER**\n• Needs TWO votes to win (both alleles must be recessive)\n• Gets silenced if dominant allele is present\n• "I want blue eyes..." → Only heard if other voter agrees (bb)\n\n**SCENARIOS:**\n• **BB (homozygous dominant):** Two loud voters agreeing → Brown eyes (100% chance)\n• **Bb (heterozygous):** One loud, one quiet → Loud wins → Brown eyes (dominant masks recessive)\n• **bb (homozygous recessive):** Two quiet voters agreeing → Blue eyes (only scenario where recessive shows)\n\nThe recessive allele is still THERE in Bb (heterozygous) - it\'s just hidden. That person is a "carrier" who can pass blue eyes to their kids!\n\nIt\'s not about stronger or better - it\'s about which allele gets to express itself!'
            },
            mindBlowingFacts: [
                'Most humans can taste PTC (a bitter chemical) because the "taster" allele is DOMINANT. About 25% can\'t taste it (recessive tt) - genetic testing in a sip!',
                'Widow\'s peak hairline is DOMINANT. If you don\'t have one, you\'re homozygous recessive - both parents gave you the "no peak" allele!',
                'Being able to roll your tongue is DOMINANT (~70% can), but not rolling is recessive - a simple genetic demo you can do right now!'
            ],
            whyYouCare: 'Understanding dominance explains: why genetic diseases can skip generations (carriers!), why two brown-eyed parents can have a blue-eyed child, and how genetic screening predicts inherited conditions!'
        },
        {
            title: 'Genotype vs. Phenotype: Instructions vs. Results',
            explanation: 'Genotype is your GENETIC CODE (the recipe), phenotype is what you actually LOOK LIKE (the cake). Same genotype can sometimes produce different phenotypes depending on environment!',
            analogy: {
                type: 'Recipe vs. Actual Cake',
                description: '**GENOTYPE = The Recipe (Genetic Instructions)**\n• Written in allele code: BB, Bb, or bb\n• Hidden inside your cells\n• Can\'t see it without genetic testing\n• Example: Bb (one brown allele, one blue allele)\n\n**PHENOTYPE = The Cake (Physical Trait)**\n• What you observe: brown eyes, blue eyes\n• Visible result of genotype\n• Can be affected by environment\n• Example: Brown eyes (what you SEE)\n\n**THE CONNECTION:**\nGenotype Bb → Phenotype Brown eyes\n(recipe) (cake)\n\n**SAME GENOTYPE, SAME PHENOTYPE?**\n• Genotypes BB and Bb are DIFFERENT\n• But BOTH give phenotype brown eyes!\n• You can\'t tell BB from Bb just by looking\n\n**ENVIRONMENT MATTERS:**\n• Recipe (genotype) for tall height\n• But poor nutrition (environment) → shorter phenotype\n• Genotype sets POTENTIAL, environment affects EXPRESSION\n\nIt\'s like having a recipe for chocolate cake (genotype) but the actual cake you bake (phenotype) depends on your ingredients, oven, altitude, etc.!'
            },
            mindBlowingFacts: [
                'Himalayan rabbits have a gene for dark fur, but it only activates in COLD areas - so they have dark ears, nose, and paws (cold) but white bodies (warm). Same genotype, different phenotypes based on temperature!',
                'Identical twins have IDENTICAL genotypes but can develop different phenotypes from environmental factors (diet, exercise, sun exposure, stress)',
                'Your potential height is genetic (genotype), but malnutrition can prevent you from reaching it (phenotype) - genotype sets the RANGE, environment determines where you land'
            ],
            whyYouCare: 'This explains: why genetic testing shows predisposition but not certainty, why lifestyle matters even with "good genes," and why nature AND nurture both matter in who you become!'
        },
        {
            title: 'Punnett Squares: Predicting Genetic Outcomes',
            explanation: 'A Punnett square is a grid that shows ALL possible genetic combinations when two parents reproduce. It\'s like a genetic probability calculator!',
            analogy: {
                type: 'Genetic Tic-Tac-Toe',
                description: 'Think of a Punnett square as a game board showing all possible offspring:\n\n**SETUP:**\n• Parent 1\'s alleles go ACROSS THE TOP\n• Parent 2\'s alleles go DOWN THE LEFT SIDE\n• Fill in boxes by combining row + column\n\n**EXAMPLE: Eye Color (B = brown dominant, b = blue recessive)**\n\nParent 1: Bb (brown eyes, carrier for blue)\nParent 2: Bb (brown eyes, carrier for blue)\n\n```\n      B    b\n   +----+----+\nB  | BB | Bb |\n   +----+----+\nb  | Bb | bb |\n   +----+----+\n```\n\n**READING RESULTS:**\n• 1 BB (25%) - Brown eyes, homozygous dominant\n• 2 Bb (50%) - Brown eyes, heterozygous (carriers)\n• 1 bb (25%) - Blue eyes, homozygous recessive\n\n**PHENOTYPE RATIO: 3 Brown : 1 Blue (75% brown, 25% blue)**\n\n**KEY INSIGHT:**\nTwo brown-eyed parents (Bb × Bb) CAN have blue-eyed children (bb)!\nEach child has a 25% chance of blue eyes.\n\nIt\'s like flipping two coins - the Punnett square shows all combinations!'
            },
            mindBlowingFacts: [
                'Mendel\'s 3:1 ratio from pea plants (3 tall : 1 short) is EXACTLY what a Punnett square predicts for Tt × Tt cross - he discovered this 40 years before Punnett invented the square!',
                'Punnett squares work for ANY trait following Mendelian inheritance - blood type, genetic diseases, plant flower color, even Pokémon breeding games use this logic!',
                'Some genetic counselors use Punnett squares to help couples understand their risk of passing genetic diseases to children'
            ],
            whyYouCare: 'Punnett squares predict: offspring traits in breeding (agriculture, pet breeding), genetic disease risk (sickle cell, cystic fibrosis), and paternity testing probability. They turn genetics from mystery into mathematics!'
        },
        {
            title: 'Mendelian Inheritance Patterns',
            explanation: 'Mendel discovered three fundamental laws of heredity that explain how traits pass from parents to offspring predictably.',
            analogy: {
                type: 'The Three Laws of Genetic Inheritance',
                description: '**LAW 1: LAW OF SEGREGATION (The Split)**\n• "Each parent has TWO alleles, but passes only ONE to each offspring"\n• Like dealing cards: You have 2 cards (alleles), but only give 1 to your child\n• Example: If you\'re Bb, each child gets either B or b (50/50 chance)\n\n**LAW 2: LAW OF INDEPENDENT ASSORTMENT (The Shuffle)**\n• "Different traits are inherited independently"\n• Eye color doesn\'t affect hair color inheritance\n• Like shuffling multiple decks separately - each trait is its own game\n• Exception: Linked genes on same chromosome (more advanced!)\n\n**LAW 3: LAW OF DOMINANCE (The Override)**\n• "Dominant alleles mask recessive alleles in heterozygotes"\n• Bb shows B phenotype (brown eyes), not blended\n• Like a loud voice (dominant) drowning out a whisper (recessive)\n\n**TOGETHER THEY EXPLAIN:**\n• Why you\'re a mix of both parents (segregation)\n• Why siblings can be very different (independent assortment + segregation)\n• Why some traits skip generations (dominance + carriers)\n\nThese laws are the foundation of genetics - like Newton\'s laws are for physics!'
            },
            mindBlowingFacts: [
                'Mendel published these laws in 1866, but they were ignored for 34 YEARS until rediscovered in 1900 - by then, scientists had microscopes good enough to SEE chromosomes and realize he was right!',
                'These laws DON\'T work for all traits - some show incomplete dominance (pink from red + white), codominance (AB blood type), or polygenic inheritance (skin color) - but Mendel picked simple traits that followed his laws perfectly',
                'Mendel was lucky - pea plants have 7 easily observable traits, and they\'re all on different chromosomes, so they assort independently. Different choice of organism might have confused the patterns!'
            ],
            whyYouCare: 'These laws explain: family resemblances, genetic diversity in siblings, how recessive diseases appear in children of healthy parents, and the mathematical predictability of inheritance in agriculture and medicine!'
        },
        {
            title: 'Real-World Human Genetics',
            explanation: 'Many human traits and genetic conditions follow Mendelian inheritance, allowing us to predict and understand inheritance patterns.',
            analogy: {
                type: 'Your Genetic Portfolio',
                description: '**SIMPLE DOMINANT TRAITS (only need one allele):**\n• Widow\'s peak hairline\n• Dimples\n• Freckles\n• Cleft chin\n• Attached vs. free earlobes (free is dominant)\n• Tongue rolling ability\n\n**SIMPLE RECESSIVE TRAITS (need both alleles):**\n• Straight hairline (no widow\'s peak)\n• No dimples\n• Blue/green eyes (vs. brown dominant)\n• Attached earlobes\n• Can\'t roll tongue\n• Red hair (recessive to brown/black)\n\n**GENETIC CONDITIONS:**\n**Recessive diseases** (need TWO copies):\n• Cystic fibrosis (Cc carriers are healthy)\n• Sickle cell anemia (ss causes disease)\n• Albinism (lack of pigment)\n\n**Dominant diseases** (need ONE copy):\n• Huntington\'s disease (HH or Hh causes disease)\n• Achondroplasia (a form of dwarfism)\n\n**WHY RECESSIVE DISEASES PERSIST:**\n• Carriers (Cc, Ss) are HEALTHY but carry the gene\n• Two carriers can have affected children (25% chance)\n• Disease "hides" in carriers across generations\n\nIt\'s like a genetic game of chance where you inherit a hand of cards from your parents - some combinations win, some lose!'
            },
            mindBlowingFacts: [
                'Sickle cell carriers (Ss) have INCREASED resistance to malaria - the recessive allele persists because it provides a survival advantage in some environments (heterozygote advantage)!',
                'Red hair is so rare (~2% globally) because it\'s recessive - both parents must carry/have the allele. Scotland/Ireland have highest rates (~13%) due to population genetics',
                'Two blue-eyed parents (bb × bb) can ONLY have blue-eyed children - but two brown-eyed parents (Bb × Bb) can have blue-eyed kids if both are carriers!'
            ],
            whyYouCare: 'Understanding inheritance patterns helps with: genetic counseling (assessing disease risk), understanding your family medical history, making informed reproductive choices, and appreciating human genetic diversity!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Basic Punnett Square - Single Trait',
            problemSetup: 'In pea plants, tall (T) is dominant over short (t). Cross a heterozygous tall plant (Tt) with a short plant (tt). What are the possible offspring genotypes and phenotypes? What percentage will be tall?',
            steps: [
                {
                    step: 1,
                    description: 'Identify parent genotypes:\nParent 1: Tt (heterozygous tall)\nParent 2: tt (homozygous recessive short)',
                    reasoning: 'Heterozygous means one of each allele (Tt). Homozygous recessive means both recessive (tt)'
                },
                {
                    step: 2,
                    description: 'Set up Punnett square with parent alleles:\n```\n      T    t\n   +----+----+\nt  | Tt | tt |\n   +----+----+\nt  | Tt | tt |\n   +----+----+\n```',
                    reasoning: 'Parent 1 can give T or t (across top). Parent 2 can only give t (down left side)'
                },
                {
                    step: 3,
                    description: 'Fill in offspring genotypes by combining row + column:\n• Top-left: T + t = Tt\n• Top-right: t + t = tt\n• Bottom-left: T + t = Tt\n• Bottom-right: t + t = tt',
                    reasoning: 'Each box shows one possible offspring by combining one allele from each parent'
                },
                {
                    step: 4,
                    description: 'Count genotypes:\n• 2 Tt (50%)\n• 2 tt (50%)',
                    reasoning: 'Out of 4 possible offspring, 2 are Tt and 2 are tt'
                },
                {
                    step: 5,
                    description: 'Determine phenotypes:\n• Tt = Tall (dominant T masks recessive t)\n• tt = Short (both recessive)\nRatio: 2 Tall : 2 Short = 1:1 ratio',
                    reasoning: 'Phenotype depends on which allele is expressed. T is dominant, so Tt shows tall phenotype'
                },
                {
                    step: 6,
                    description: 'Calculate percentages:\n• 50% Tall (genotype Tt)\n• 50% Short (genotype tt)',
                    reasoning: '2 out of 4 = 50% for each phenotype'
                }
            ],
            solution: 'Genotypes: 50% Tt, 50% tt. Phenotypes: 50% Tall, 50% Short. This is a 1:1 phenotypic ratio.',
            realWorldApplication: 'This type of cross (heterozygous × homozygous recessive) is called a TEST CROSS - it\'s used in agriculture to determine if an organism showing a dominant trait is homozygous (TT) or heterozygous (Tt) by looking at offspring ratios!'
        },
        {
            scenario: 'Carrier Probability - Genetic Disease',
            problemSetup: 'Cystic fibrosis (CF) is a recessive genetic disease. Normal is dominant (C), CF is recessive (c). Both parents are healthy but are carriers (Cc). What is the probability their child will:\na) Have cystic fibrosis?\nb) Be a healthy carrier?\nc) Be completely free of the CF allele?',
            steps: [
                {
                    step: 1,
                    description: 'Set up Punnett square for Cc × Cc cross:\n```\n      C    c\n   +----+----+\nC  | CC | Cc |\n   +----+----+\nc  | Cc | cc |\n   +----+----+\n```',
                    reasoning: 'Both parents are Cc (carriers), so each can pass either C or c'
                },
                {
                    step: 2,
                    description: 'Count offspring genotypes:\n• 1 CC (25%)\n• 2 Cc (50%)\n• 1 cc (25%)',
                    reasoning: 'Out of 4 boxes: 1 is CC, 2 are Cc, 1 is cc'
                },
                {
                    step: 3,
                    description: 'Answer (a): Probability of cystic fibrosis (cc):\n• 1 out of 4 = 25% chance',
                    reasoning: 'Only cc genotype causes disease (homozygous recessive)'
                },
                {
                    step: 4,
                    description: 'Answer (b): Probability of healthy carrier (Cc):\n• 2 out of 4 = 50% chance',
                    reasoning: 'Cc has dominant C allele so they\'re healthy, but carry c allele'
                },
                {
                    step: 5,
                    description: 'Answer (c): Probability of NO CF allele (CC):\n• 1 out of 4 = 25% chance',
                    reasoning: 'Only CC genotype has no c allele at all'
                },
                {
                    step: 6,
                    description: 'Summary of phenotypes:\n• 75% healthy (CC + Cc)\n• 25% have cystic fibrosis (cc)',
                    reasoning: 'CC and Cc both show healthy phenotype due to dominant C allele'
                }
            ],
            solution: 'a) 25% chance of CF (cc), b) 50% chance of being a carrier (Cc), c) 25% chance of being CF-free (CC). Overall: 75% healthy, 25% affected.',
            realWorldApplication: 'Genetic counselors use these exact calculations to help couples understand their risk of having a child with genetic diseases. Many people are unknowing carriers of recessive disease alleles. Carrier screening before pregnancy can identify risks!'
        },
        {
            scenario: 'Predicting Multiple Generations',
            problemSetup: 'In a certain flower, red (R) is dominant over white (r). You cross two heterozygous red flowers (Rr × Rr) and get 100 offspring in generation F1. Then you take ALL the red flowers from F1 and cross them with white flowers (rr). Predict the F2 offspring phenotypic ratio.',
            steps: [
                {
                    step: 1,
                    description: 'F1 Cross: Rr × Rr\n```\n      R    r\n   +----+----+\nR  | RR | Rr |\n   +----+----+\nr  | Rr | rr |\n   +----+----+\n```\nF1 results: 25% RR, 50% Rr, 25% rr',
                    reasoning: 'Standard heterozygous cross gives 3:1 phenotypic ratio (75% red, 25% white)'
                },
                {
                    step: 2,
                    description: 'From 100 F1 offspring, expect:\n• ~25 RR (red)\n• ~50 Rr (red)\n• ~25 rr (white)\nRed flowers to use = 25 RR + 50 Rr = 75 red flowers',
                    reasoning: 'We only use red flowers for F2 cross, so we ignore the 25 white (rr) flowers'
                },
                {
                    step: 3,
                    description: 'F2 crosses with white (rr):\n**Cross 1: RR × rr**\n```\n      R    R\n   +----+----+\nr  | Rr | Rr |\n   +----+----+\nr  | Rr | Rr |\n   +----+----+\n```\nAll offspring: 100% Rr (red)',
                    reasoning: 'RR can only give R, rr can only give r, so all offspring are Rr'
                },
                {
                    step: 4,
                    description: '**Cross 2: Rr × rr**\n```\n      R    r\n   +----+----+\nr  | Rr | rr |\n   +----+----+\nr  | Rr | rr |\n   +----+----+\n```\nOffspring: 50% Rr (red), 50% rr (white)',
                    reasoning: 'Heterozygous × homozygous recessive gives 1:1 ratio'
                },
                {
                    step: 5,
                    description: 'Calculate F2 combined results:\n• From 25 RR parents: 25 offspring, all red (25 red)\n• From 50 Rr parents: 50 offspring, 50% red + 50% white (25 red + 25 white)\nTotal F2: 50 red + 25 white',
                    reasoning: 'Combine results weighted by proportion of each parent genotype'
                },
                {
                    step: 6,
                    description: 'F2 phenotypic ratio: 50:25 = 2:1 (Red:White)\n• 67% Red\n• 33% White',
                    reasoning: 'Simplify 50:25 by dividing both by 25'
                }
            ],
            solution: 'F2 offspring will show a 2:1 ratio of red to white flowers (67% red, 33% white). This differs from typical ratios because we selectively bred only the red F1 flowers.',
            realWorldApplication: 'This type of multi-generation analysis is crucial in plant and animal breeding programs. Breeders track genotypes across generations to selectively breed desired traits while eliminating undesired ones. It\'s how we created hundreds of dog breeds, crop varieties, and livestock breeds!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'In humans, the ability to roll your tongue (R) is dominant over the inability to roll it (r). If a woman who can roll her tongue (Rr) has children with a man who cannot roll his tongue (rr), what percentage of their children will be able to roll their tongues?',
            hints: [
                'Set up a Punnett square: Rr × rr',
                'The woman can give R or r; the man can only give r',
                'Count offspring with at least one R allele (they can roll)',
                'Answer: 50%'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'A plant breeder crosses two pink flowers and gets offspring that are 25% red, 50% pink, and 25% white. Explain what type of inheritance this represents and why it differs from standard Mendelian dominance.',
            hints: [
                'Notice the 1:2:1 ratio matches genotypes (not typical 3:1 phenotypic ratio)',
                'This is incomplete dominance - heterozygotes show BLEND',
                'RR = red, Rr = pink (blend), rr = white',
                'Neither allele is fully dominant - both express partially'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p3',
            question: 'Both parents have normal pigmentation but are carriers for albinism (a recessive trait). They have 4 children. What is the probability that exactly 3 of their children will have normal pigmentation and 1 will have albinism?',
            hints: [
                'First find probability for ONE child: 75% normal, 25% albinism',
                'This is a combination problem: choosing which 1 of 4 children is affected',
                'Use combination formula: 4 ways to choose which child',
                'Calculate: 4 × (0.75)³ × (0.25)¹ = 4 × 0.421875 × 0.25 ≈ 42%'
            ],
            difficulty: 'hard'
        },
        {
            id: 'p4',
            question: 'A man with type AB blood has children with a woman with type O blood. What are the possible blood types of their children? (A and B are codominant; O is recessive)',
            hints: [
                'Man\'s genotype: I^A I^B (has both A and B alleles)',
                'Woman\'s genotype: ii (homozygous recessive for O)',
                'Set up Punnett square: I^A and I^B vs. i and i',
                'Possible offspring: I^A i (type A) and I^B i (type B) - 50% each'
            ],
            difficulty: 'hard'
        },
        {
            id: 'p5',
            question: 'In a population, 16% of people have blue eyes (recessive trait bb). Assuming the population is in genetic equilibrium, what percentage of the population are carriers (Bb) for blue eyes?',
            hints: [
                'If 16% are bb, then frequency of b allele = √0.16 = 0.4 (40%)',
                'Frequency of B allele = 1 - 0.4 = 0.6 (60%)',
                'Carrier frequency (Bb) = 2 × 0.6 × 0.4 = 0.48 = 48%',
                'This uses Hardy-Weinberg equilibrium (advanced concept!)'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'What is the relationship between genes and alleles?',
            options: [
                { label: 'A', text: 'They are the same thing' },
                { label: 'B', text: 'Alleles are different versions of the same gene' },
                { label: 'C', text: 'Genes are parts of alleles' },
                { label: 'D', text: 'Alleles are larger than genes' },
                { label: 'E', text: 'Genes code for alleles' }
            ],
            correctAnswer: 'B',
            explanation: 'A gene is a segment of DNA that codes for a trait. Alleles are different versions of the same gene (e.g., brown eye allele vs. blue eye allele for the eye color gene).',
            storyExplanation: 'Think of a gene as a "category" (like "eye color") and alleles as "options" within that category (brown, blue, green). Same question, different answers!'
        },
        {
            id: 'q2',
            question: 'If an organism is heterozygous (Bb) for a trait where B is dominant, what will be its phenotype?',
            options: [
                { label: 'A', text: 'The recessive trait (b)' },
                { label: 'B', text: 'A blend of both traits' },
                { label: 'C', text: 'The dominant trait (B)' },
                { label: 'D', text: 'Neither trait shows' },
                { label: 'E', text: 'Both traits show equally' }
            ],
            correctAnswer: 'C',
            explanation: 'In heterozygotes (Bb), the dominant allele (B) masks the recessive allele (b), so the phenotype shows the dominant trait.',
            storyExplanation: 'Think of dominant as "loud" and recessive as "quiet". In Bb, the loud B drowns out the quiet b, so you only see B\'s trait!'
        },
        {
            id: 'q3',
            question: 'Two heterozygous parents (Aa × Aa) have children. What is the expected phenotypic ratio if A is dominant?',
            options: [
                { label: 'A', text: '1:1 (dominant:recessive)' },
                { label: 'B', text: '2:1 (dominant:recessive)' },
                { label: 'C', text: '3:1 (dominant:recessive)' },
                { label: 'D', text: '1:2:1 (AA:Aa:aa)' },
                { label: 'E', text: '4:0 (all dominant)' }
            ],
            correctAnswer: 'C',
            explanation: 'Aa × Aa produces genotypes: 25% AA, 50% Aa, 25% aa. Since A is dominant, AA and Aa both show dominant phenotype (75%), only aa shows recessive (25%). Ratio = 3:1.',
            storyExplanation: 'This is Mendel\'s famous 3:1 ratio! Out of 4 offspring, 3 show dominant trait (AA, Aa, Aa) and 1 shows recessive (aa). It\'s the signature of heterozygous crosses!'
        },
        {
            id: 'q4',
            question: 'What is a "carrier" of a recessive genetic disease?',
            options: [
                { label: 'A', text: 'Someone who has the disease' },
                { label: 'B', text: 'Someone who is heterozygous (Dd) - has one disease allele but shows no symptoms' },
                { label: 'C', text: 'Someone who is homozygous dominant (DD)' },
                { label: 'D', text: 'Someone who cannot pass the disease to offspring' },
                { label: 'E', text: 'Someone who works in a hospital' }
            ],
            correctAnswer: 'B',
            explanation: 'A carrier is heterozygous (Dd) - they have one recessive disease allele (d) but one dominant normal allele (D). The dominant allele masks the disease, so they\'re healthy but can pass the disease allele to children.',
            storyExplanation: 'Carriers are like secret agents hiding the disease gene! They look healthy (thanks to the dominant allele) but carry the recessive disease allele that could appear in their kids if they marry another carrier.'
        },
        {
            id: 'q5',
            question: 'Why could two brown-eyed parents (Bb) have a blue-eyed child (bb)?',
            options: [
                { label: 'A', text: 'It\'s impossible - brown is dominant' },
                { label: 'B', text: 'Each parent can pass the recessive b allele, resulting in bb' },
                { label: 'C', text: 'Eye color is not genetic' },
                { label: 'D', text: 'Mutations caused the blue eyes' },
                { label: 'E', text: 'The child must be adopted' }
            ],
            correctAnswer: 'B',
            explanation: 'Both Bb parents carry the recessive blue allele (b). If both pass b to the child (25% chance), the child is bb and has blue eyes. The b allele was hidden in the parents but revealed in the child.',
            storyExplanation: 'Each parent has a hidden blue allele (the quiet b). Usually it\'s masked by the loud brown B. But if BOTH parents happen to pass their quiet b to the same child - surprise blue eyes! It\'s like two carriers of a secret revealing it together.'
        }
    ],
    memoryAids: [
        {
            technique: 'Phrase',
            description: 'Genotype vs Phenotype: "Genotype = Genes you TYPE (write in DNA), Phenotype = Physical traits you SEE"',
            example: 'Bb is what you type (genotype), brown eyes is what you see (phenotype)'
        },
        {
            technique: 'Visual',
            description: 'Dominant = CAPITAL letter (BIG and LOUD), Recessive = lowercase letter (small and quiet)',
            example: 'B dominates over b, just like CAPITAL LETTERS dominate over lowercase'
        },
        {
            technique: 'Acronym',
            description: 'Remember Punnett square steps with "PACT": Parents (identify genotypes), Alleles (place on grid), Combine (fill boxes), Tally (count results)',
            example: 'Follow PACT every time you solve a Punnett square problem'
        },
        {
            technique: 'Rhyme',
            description: 'Homozygous rhyme: "Two the same, that\'s the name! (AA or aa)" \nHeterozygous: "One of each makes you a carrier of reach! (Aa)"',
            example: 'Use to remember homo = same, hetero = different'
        },
        {
            technique: 'Story',
            description: 'Mendel\'s 3:1 ratio: "Three peas in a pod look the same (dominant), one looks different (recessive)" - imagine 4 peas, 3 identical, 1 unique',
            example: 'Visual memory for the classic Mendelian ratio from heterozygous crosses'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Confusing genotype with phenotype',
            correction: 'GENOTYPE = Genetic code (letters like Bb). PHENOTYPE = Physical appearance (what you observe like brown eyes). Different genotypes (BB and Bb) can have the SAME phenotype (brown eyes).',
            whyItMatters: 'Understanding this distinction is critical for predicting inheritance and interpreting genetic tests. You can\'t determine genotype just by looking at phenotype!'
        },
        {
            mistake: 'Thinking dominant means "more common" or "better"',
            correction: 'DOMINANT just means "masks recessive in heterozygotes." It has NOTHING to do with frequency or quality. Some dominant traits are rare (Huntington\'s disease), some recessive traits are common (blue eyes in some populations).',
            whyItMatters: 'This misconception leads to misunderstanding genetics and evolution. Dominant doesn\'t mean advantageous, frequent, or superior - it\'s purely about masking relationships'
        },
        {
            mistake: 'Forgetting that heterozygotes carry the recessive allele',
            correction: 'Bb individuals show the DOMINANT phenotype but CARRY the recessive allele. They can pass that recessive allele to offspring. Two Bb parents can have bb children (25% chance).',
            whyItMatters: 'This is how genetic diseases "skip generations" and how two healthy parents can have affected children. Carriers are crucial in genetic counseling!'
        },
        {
            mistake: 'Treating Punnett square results as guarantees',
            correction: 'Punnett squares show PROBABILITIES, not certainties. A 25% chance of bb doesn\'t mean "1 in every 4 children will be bb" - each child has independent 25% chance. You could have 4 children, all Bb!',
            whyItMatters: 'Understanding probability prevents false expectations. Just like flipping 4 coins doesn\'t guarantee exactly 2 heads - you might get 0, 1, 2, 3, or 4 heads!'
        },
        {
            mistake: 'Assuming all traits follow simple Mendelian genetics',
            correction: 'Many traits DON\'T follow simple dominant/recessive patterns: height (polygenic - many genes), blood type (codominance), skin color (polygenic + environmental), sex-linked traits (on X/Y chromosomes).',
            whyItMatters: 'Mendel chose simple traits that followed his laws. Most human traits are more complex! Understanding limitations prevents oversimplification of real genetics'
        }
    ],
    quickReference: [
        {
            title: 'Genetic Hierarchy',
            content: 'DNA (chemical code) → GENE (recipe for trait) → ALLELE (version of gene) → CHROMOSOME (collection of genes) → GENOME (all genetic info)',
            category: 'principle'
        },
        {
            title: 'Genotype Terminology',
            content: 'HOMOZYGOUS: Two same alleles (AA or aa)\nHETEROZYGOUS: Two different alleles (Aa)\nDOMINANT: Capital letter (A) - masks recessive\nRECESSIVE: Lowercase (a) - masked by dominant',
            category: 'rule'
        },
        {
            title: 'Genotype → Phenotype',
            content: 'AA (homozygous dominant) → Dominant phenotype\nAa (heterozygous) → Dominant phenotype\naa (homozygous recessive) → Recessive phenotype',
            category: 'rule'
        },
        {
            title: 'Classic Mendelian Ratios',
            content: 'Aa × Aa → 3:1 phenotype (75% dominant, 25% recessive)\nAa × aa → 1:1 phenotype (50% dominant, 50% recessive)\nAA × aa → 100% dominant phenotype (all Aa)',
            category: 'formula'
        },
        {
            title: 'Punnett Square Steps',
            content: '1. Identify parent genotypes\n2. Place alleles on top and left\n3. Fill boxes (combine row + column)\n4. Count genotypes\n5. Determine phenotypes\n6. Calculate ratios/percentages',
            category: 'process'
        }
    ],
    summary: [
        'DNA is organized into genes (code for traits), which come in different versions called alleles (inherited one from each parent)',
        'Dominant alleles (capital letter) mask recessive alleles (lowercase) in heterozygotes - only one copy needed to show dominant trait',
        'Genotype = genetic makeup (letters like Bb), Phenotype = observable trait (what you see like brown eyes)',
        'Homozygous = two identical alleles (AA or aa), Heterozygous = two different alleles (Aa)',
        'Punnett squares predict inheritance by showing all possible offspring combinations from parent alleles',
        'Mendel\'s laws: (1) Alleles segregate during reproduction, (2) Different traits assort independently, (3) Dominant alleles mask recessive',
        'Classic Mendelian ratio: Aa × Aa produces 3:1 phenotype ratio (75% dominant, 25% recessive)',
        'Carriers are heterozygous for recessive traits - healthy but can pass disease alleles to children (explains "skipping generations")',
        'Understanding genetics enables: predicting trait inheritance, genetic disease counseling, selective breeding, and personalized medicine'
    ],
    selfAssessment: [
        'I can explain the relationship between DNA, genes, alleles, and chromosomes',
        'I understand the difference between dominant and recessive alleles',
        'I can distinguish between genotype (genetic code) and phenotype (observable trait)',
        'I can set up and interpret Punnett squares to predict offspring',
        'I understand what it means to be homozygous vs. heterozygous',
        'I can explain how two healthy parents can have a child with a recessive genetic disease',
        'I can calculate probabilities of inheriting specific traits',
        'I can apply Mendelian genetics to real-world examples and human traits'
    ]
};
export default lesson;
//# sourceMappingURL=day-16.js.map
const lesson = {
    day: 20,
    subject: 'biology',
    title: 'Evolution & Natural Selection - The Greatest Show on Earth',
    emoji: '🦎',
    learningGoal: 'Understand the mechanisms of evolution, evidence for common descent, and how natural selection shapes life on Earth',
    estimatedTime: 75,
    objectives: [
        'Explain the theory of evolution by natural selection',
        'Describe the four key components of natural selection',
        'Identify multiple lines of evidence supporting evolution',
        'Understand adaptation and how organisms become suited to their environments',
        'Distinguish between common misconceptions and scientific facts about evolution',
        'Apply evolutionary concepts to real-world examples (antibiotic resistance, Darwin\'s finches)'
    ],
    discoveryStory: {
        title: 'Charles Darwin and the Voyage That Changed Everything',
        content: "It's December 27, 1831. A 22-year-old college dropout named Charles Darwin boards HMS Beagle for what he thinks will be a two-year voyage around South America. It turns into FIVE years that revolutionize science forever. In the Galápagos Islands, Darwin notices something mind-blowing: each island has finches with DIFFERENT beak shapes. Seed-eating islands? Thick, strong beaks for cracking. Insect-eating islands? Long, pointed beaks for probing. Flower-nectar islands? Curved beaks for sipping. It's like the birds are CUSTOM-DESIGNED for each island! But Darwin realizes something radical: they weren't separately created - they're all RELATED, descended from a common ancestor that arrived from mainland South America. Over generations, birds with beak shapes better suited to their island's food survived and reproduced more. Poorly-suited birds died off. Nature was SELECTING the best variations - he called it 'natural selection.' For 20+ years, Darwin compiled evidence, worried about the controversy. In 1858, Alfred Russel Wallace independently discovers the same idea - Darwin rushes to publish 'On the Origin of Species' (1859). The reaction? EXPLOSIVE! But the evidence was overwhelming. Darwin showed that ALL life shares common ancestry, connected by an unbroken chain of descent going back billions of years. Today, evolution is the central organizing principle of ALL biology. Every living thing - bacteria, mushrooms, redwoods, blue whales, and YOU - is related, shaped by the same beautiful process. 🌍🐦",
        emoji: '⛵'
    },
    keyTerms: [
        {
            term: 'Evolution',
            definition: 'Change in the heritable characteristics of populations over successive generations; descent with modification from common ancestors',
            example: 'Whales evolved from land-dwelling mammals over millions of years - their flippers still contain finger bones!'
        },
        {
            term: 'Natural Selection',
            definition: 'The process where organisms with traits better suited to their environment survive and reproduce more successfully than others',
            example: 'Peppered moths: In polluted areas, dark moths survived better (camouflage), becoming more common over generations'
        },
        {
            term: 'Adaptation',
            definition: 'An inherited characteristic that increases an organism\'s fitness (survival and reproductive success) in its environment',
            example: 'Cactus spines (modified leaves) reduce water loss and deter herbivores - perfectly adapted to desert life'
        },
        {
            term: 'Fitness',
            definition: 'An organism\'s ability to survive and produce fertile offspring in its environment (NOT physical strength!)',
            example: 'A butterfly that lays 100 eggs has higher fitness than one that lays 10 - more offspring = higher fitness'
        },
        {
            term: 'Common Descent',
            definition: 'The principle that all living organisms share ancestry and can be traced back to a universal common ancestor',
            example: 'Humans and chimpanzees share 98.8% DNA because we descended from a common ancestor ~6 million years ago'
        },
        {
            term: 'Variation',
            definition: 'Differences in traits among individuals in a population (due to genetic differences)',
            example: 'In a population of beetles, some are green, some brown - color variation provides raw material for natural selection'
        },
        {
            term: 'Selective Pressure',
            definition: 'Environmental factors that affect which organisms survive and reproduce (predation, climate, disease, competition)',
            example: 'Antibiotic use creates selective pressure - bacteria resistant to antibiotics survive, non-resistant die'
        },
        {
            term: 'Speciation',
            definition: 'The evolutionary process by which new species arise from existing species',
            example: 'Darwin\'s finches speciated into 14 different species from one ancestral species due to isolation on different islands'
        }
    ],
    concepts: [
        {
            title: 'What is Evolution? The Big Picture',
            explanation: 'Evolution is the change in inherited characteristics of populations over time. It\'s not about individuals changing - it\'s about population-level change across generations.',
            analogy: {
                type: 'The Family Tree of Life',
                description: '**EVOLUTION = DESCENT WITH MODIFICATION**\n\n**Think of life as a massive, branching family tree:**\n\n• **Root (base):** Universal common ancestor (~3.8 billion years ago)\n• **Trunk:** Early single-celled life\n• **Major branches:** Bacteria, Archaea, Eukaryotes\n• **Smaller branches:** Animals, plants, fungi\n• **Twigs:** Mammals, birds, reptiles, fish\n• **Leaves:** Individual species (humans, dogs, roses, oak trees)\n\n**KEY INSIGHT:**\nEvery living thing is connected. You share:\n• 98.8% DNA with chimpanzees (very close relatives)\n• 90% DNA with cats (distant cousins)\n• 60% DNA with bananas (VERY distant relatives)\n• 50% DNA with yeast (ancient common ancestor)\n\nWe\'re ALL family - just different branches!\n\n**WHAT EVOLUTION IS:**\n✓ Change in populations over generations\n✓ Supported by mountains of evidence (fossils, DNA, anatomy, embryology)\n✓ Observable in real-time (bacteria, viruses, Darwin\'s finches)\n✓ The central organizing principle of biology\n\n**WHAT EVOLUTION IS NOT:**\n✗ Random or purposeless (natural selection is NON-random)\n✗ "Just a theory" (in science, "theory" means well-supported explanation, like gravity)\n✗ About individuals changing (giraffes don\'t stretch necks; populations change over generations)\n✗ Claiming humans came from modern monkeys (we share a common ancestor with them)\n\n**TIME SCALES:**\n• Bacteria evolving resistance: Days to months\n• Darwin\'s finches adapting: Decades\n• New species forming: Thousands to millions of years\n• Major evolutionary transitions (fish → land animals): Millions of years\n• Life evolving from single cells to diversity today: 3.8 BILLION years\n\nEvolution is life\'s ultimate creative process - endlessly branching, adapting, diversifying!'
            },
            mindBlowingFacts: [
                'You are more closely related to mushrooms than mushrooms are to plants! Fungi and animals share a more recent common ancestor than fungi and plants.',
                'Every human has ~60 NEW mutations not present in their parents - evolution is happening in YOU right now (though most mutations are neutral)',
                'The fossil record contains thousands of transitional forms: fish with legs, reptiles with feathers, whales with legs - we\'ve found the "missing links"!'
            ],
            whyYouCare: 'Understanding evolution explains: antibiotic resistance (medical crisis), why we share body plans with other animals, how to predict flu mutations, conservation biology, and why you look like your parents but aren\'t identical!'
        },
        {
            title: 'Natural Selection: The Mechanism of Evolution',
            explanation: 'Natural selection is the process where organisms with beneficial traits survive and reproduce more successfully, passing those traits to offspring. Over time, the population changes.',
            analogy: {
                type: 'The Survival Contest',
                description: '**FOUR REQUIREMENTS FOR NATURAL SELECTION:**\n\n**1. VARIATION**\n• Individuals in a population differ in traits\n• Example: Beetles - some green, some brown\n• Source: Genetic mutations, recombination during reproduction\n\n**2. HERITABILITY**\n• Traits must be passed from parents to offspring\n• Example: Brown beetles have brown offspring\n• Mechanism: DNA inheritance (genes)\n\n**3. DIFFERENTIAL SURVIVAL & REPRODUCTION**\n• Some variants survive/reproduce better than others\n• Example: Birds eat green beetles (visible), brown beetles survive (camouflaged)\n• Result: Brown beetles have more offspring\n\n**4. TIME**\n• Process repeats over many generations\n• Example: After 20 generations, population is mostly brown beetles\n• Result: Population has EVOLVED (changed)\n\n**THE PROCESS (Step-by-step example):**\n\n**Generation 1:**\n• Population: 50% green beetles, 50% brown beetles\n• Environment: Brown soil, birds hunt by sight\n• Selection: Birds eat more green beetles (easier to see)\n• Survivors: More brown beetles survive to reproduce\n\n**Generation 2:**\n• Population: 30% green, 70% brown (shifted!)\n• Selection continues: Birds still eat more green\n• Result: Even more brown beetles\n\n**Generation 20:**\n• Population: 5% green, 95% brown\n• Population has EVOLVED - not because beetles changed color individually, but because brown beetles had higher survival/reproduction rates\n\n**KEY INSIGHT:**\n"Survival of the fittest" means "survival of the best-suited to environment" (NOT strongest or smartest!)\n\n**TYPES OF SELECTION:**\n\n**Directional Selection:**\n• Environment favors one extreme\n• Example: Antibiotic resistance - only resistant bacteria survive\n• Result: Population shifts toward resistance\n\n**Stabilizing Selection:**\n• Environment favors middle values\n• Example: Human birth weight - too small or too large = lower survival\n• Result: Population stays near optimal middle\n\n**Disruptive Selection:**\n• Environment favors BOTH extremes\n• Example: Birds with very large or very small beaks do well, medium struggle\n• Result: Population splits into two groups\n\nNatural selection is non-random differential survival based on inherited traits - it\'s nature\'s quality control!'
            },
            mindBlowingFacts: [
                'Natural selection can work FAST: Peppered moths went from 2% dark to 95% dark in just 50 years during Industrial Revolution (pollution darkened trees, dark moths had better camouflage)',
                'We\'ve observed natural selection in real-time: Darwin\'s finches\' beaks changed measurably during droughts (large-beaked birds survived better when only large, tough seeds were available)',
                'Antibiotic resistance evolves in days - bacteria generation time is 20 minutes, so natural selection happens thousands of times faster than in humans!'
            ],
            whyYouCare: 'Natural selection explains: why bacteria become resistant to antibiotics, why pests resist pesticides, how viruses evade vaccines, and why cancer treatments stop working - understanding it saves lives!'
        },
        {
            title: 'Evidence for Evolution: The Case is Overwhelming',
            explanation: 'Evolution is supported by multiple independent lines of evidence from different fields of science. Every prediction made by evolution has been confirmed.',
            analogy: {
                type: 'The Detective\'s Case File',
                description: '**EVIDENCE #1: FOSSIL RECORD (Paleontology)**\n\n• **What we find:** Fossils show progression from simple to complex over time\n• **Transitional fossils:**\n  - Tiktaalik: Fish with wrist bones (fish → land transition)\n  - Archaeopteryx: Dinosaur with feathers (dinosaur → bird transition)\n  - Ambulocetus: Walking whale with legs (land mammal → whale transition)\n• **Pattern:** Oldest rocks have simplest life, newer rocks have complex life\n• **Prediction confirmed:** Never found rabbit fossils in Precambrian rocks!\n\n**EVIDENCE #2: COMPARATIVE ANATOMY**\n\n• **Homologous structures:** Same bones, different functions\n  - Human arm, bat wing, whale flipper, cat paw: SAME bone structure!\n  - Why? Inherited from common ancestor\n• **Vestigial structures:** Leftover parts from ancestors\n  - Whale hip bones (ancestors had legs!)\n  - Human tailbone (coccyx - we had tails!)\n  - Snake skeletons with tiny leg bones (ancestors had legs!)\n  - Human appendix (larger in herbivorous ancestors)\n\n**EVIDENCE #3: EMBRYOLOGY**\n\n• **Similar embryos:** Human, chicken, fish, pig embryos look nearly IDENTICAL early on\n• **Why?** We all develop using similar genes inherited from common ancestors\n• **Evidence:** All vertebrate embryos have gill slits and tails (lost in most)\n\n**EVIDENCE #4: MOLECULAR BIOLOGY (DNA/Proteins)**\n\n• **DNA similarities match predicted relationships:**\n  - Humans vs. Chimps: 98.8% identical DNA\n  - Humans vs. Mice: 85% identical\n  - Humans vs. Fruit flies: 60% identical\n  - More closely related = more similar DNA (exactly as evolution predicts!)\n\n• **Molecular clock:** Mutations accumulate at steady rate\n  - Can calculate when species diverged\n  - Confirms fossil record timing!\n\n• **Shared "broken genes":** Humans and chimps share SAME broken vitamin C gene\n  - Both lost ability to make vitamin C (need it from food)\n  - Only explanation: Inherited from common ancestor\n\n**EVIDENCE #5: BIOGEOGRAPHY**\n\n• **Geographic distribution makes sense with evolution:**\n  - Islands have unique species related to nearest mainland\n  - Galápagos finches related to South American finches (not African)\n  - Marsupials mostly in Australia (isolated continent)\n  - Continents that split earlier have more different species\n\n**EVIDENCE #6: OBSERVED EVOLUTION**\n\n• **We\'ve SEEN it happen:**\n  - Bacteria evolving antibiotic resistance (hospitals)\n  - HIV evolving drug resistance (AIDS patients)\n  - Fruit flies evolving in labs (new species in 35 generations!)\n  - Darwin\'s finches evolving in real-time (measured beak changes)\n  - Peppered moths changing color (Industrial Revolution)\n\nEvery line of evidence points to the SAME conclusion - like 10 witnesses all describing the same event!'
            },
            mindBlowingFacts: [
                'Your DNA contains broken genes from viruses that infected your ancestors millions of years ago - they\'re in the exact same locations in chimps, proving common ancestry!',
                'Whales have hip bones floating in their bodies with no function - remnants from when their ancestors walked on land 50 million years ago',
                'All humans alive today can trace maternal lineage to one woman ("Mitochondrial Eve") who lived in Africa ~200,000 years ago - we\'re ALL related!'
            ],
            whyYouCare: 'This evidence matters for: medicine (understanding disease evolution), agriculture (breeding better crops), conservation (protecting genetic diversity), and forensics (using DNA to solve crimes)!'
        },
        {
            title: 'Adaptations: Nature\'s Engineering Solutions',
            explanation: 'Adaptations are inherited traits that increase an organism\'s fitness in its specific environment. They arise through natural selection over many generations.',
            analogy: {
                type: 'The Design Competition',
                description: '**ADAPTATION = INHERITED TRAIT THAT INCREASES FITNESS**\n\n**TYPES OF ADAPTATIONS:**\n\n**1. STRUCTURAL (Physical features):**\n\n• **Camouflage:**\n  - Stick insects look like twigs (avoid predators)\n  - Arctic fox white fur (hunt unseen in snow)\n  - Leaf insects look exactly like leaves\n\n• **Mimicry:**\n  - Harmless king snake mimics venomous coral snake (predators avoid)\n  - Viceroy butterfly mimics toxic monarch (birds avoid)\n\n• **Specialized body parts:**\n  - Woodpecker: Thick skull, shock-absorbing brain case, long sticky tongue (tree-drilling specialist)\n  - Giraffe: Long neck reaches high leaves (competition advantage)\n  - Anteater: Long snout, no teeth, sticky tongue (perfect for ants)\n\n**2. PHYSIOLOGICAL (Internal chemistry/processes):**\n\n• **Desert animals:**\n  - Camels store fat in hump (water source when metabolized)\n  - Kangaroo rat never drinks (gets water from food metabolism)\n\n• **Deep-sea fish:**\n  - Produce light (bioluminescence) to attract prey\n  - Withstand extreme pressure\n\n• **Hibernation:**\n  - Bears slow metabolism, survive winter without food\n\n**3. BEHAVIORAL (Actions/instincts):**\n\n• **Migration:**\n  - Birds fly thousands of miles to optimal feeding grounds\n  - Monarch butterflies navigate 3,000 miles to Mexico\n\n• **Courtship displays:**\n  - Peacock elaborate tail attracts mates (sexual selection)\n  - Bowerbirds build decorated structures\n\n• **Predator avoidance:**\n  - Playing dead (opossum)\n  - Alarm calls warning others\n\n**HOW ADAPTATIONS ARISE:**\n\n1. **Random mutation** creates new variation (e.g., slightly longer neck)\n2. **Natural selection** favors beneficial variation (longer neck reaches more food)\n3. **Reproduction** passes trait to offspring\n4. **Accumulation** over many generations (necks get progressively longer)\n5. **Result:** Giraffe with 6-foot neck (adaptation!)\n\n**IMPORTANT:**\n• Adaptations are NOT intentional (giraffes didn\'t TRY to grow necks)\n• Individuals DON\'T adapt (populations do, over generations)\n• Takes many generations (not overnight)\n• No such thing as "perfectly adapted" (environment changes!)\n\n**TRADE-OFFS:**\nEvery adaptation has costs:\n• Peacock tail: Attracts mates BUT makes escaping predators harder\n• Cheetah speed: Catches prey BUT overheats easily, can\'t fight competitors\n• Large antlers: Wins fights BUT requires lots of energy to grow\n\nAdaptations are evolution\'s solutions to environmental challenges - shaped by trial and error over millions of generations!'
            },
            mindBlowingFacts: [
                'Electric eels evolved electric organs from modified muscle cells - they can generate 600 volts, enough to stun a horse!',
                'Bombardier beetles evolved chemical warfare - they mix two chemicals in their abdomen that EXPLODE out at 100°C (212°F) to deter predators!',
                'Arctic cod have antifreeze proteins in their blood - they can survive in water below freezing point (blood doesn\'t freeze even at -1.8°C)!'
            ],
            whyYouCare: 'Understanding adaptations helps: design better technology (biomimicry - Velcro from burrs, bullet trains from kingfisher beaks), predict species\' climate change vulnerability, and appreciate nature\'s ingenious solutions!'
        },
        {
            title: 'Common Misconceptions About Evolution',
            explanation: 'Many misunderstandings about evolution persist. Clearing these up is essential for understanding how evolution actually works.',
            analogy: {
                type: 'Evolution Myths vs. Facts',
                description: '**MISCONCEPTION #1: "Evolution is just a theory"**\n\n❌ WRONG: Implies it\'s a guess\n✓ CORRECT: In science, "theory" means well-supported explanation (like atomic theory, germ theory, gravitational theory)\n• Evolution is supported by overwhelming evidence from multiple fields\n• "Theory" in science ≠ "guess" in everyday language\n\n**MISCONCEPTION #2: "Humans evolved from monkeys"**\n\n❌ WRONG: We didn\'t come from modern monkeys/chimps\n✓ CORRECT: Humans and modern apes share a common ancestor (extinct species)\n• Like cousins sharing grandparents - you didn\'t descend from your cousin!\n• Common ancestor lived ~6-7 million years ago\n• Both lineages evolved from that ancestor\n\n**MISCONCEPTION #3: "Evolution is random"**\n\n❌ WRONG: Natural selection is NOT random\n✓ CORRECT: Mutations are random, but SELECTION is non-random\n• Natural selection systematically favors beneficial traits\n• It\'s like a filter - keeps what works, removes what doesn\'t\n• Result is NON-random adaptation to environment\n\n**MISCONCEPTION #4: "Organisms evolve on purpose / in response to need"**\n\n❌ WRONG: "Giraffes stretched their necks to reach leaves"\n✓ CORRECT: Giraffes with randomly longer necks survived better\n• Variation exists FIRST (random mutations)\n• Selection happens SECOND (environment filters)\n• Need doesn\'t cause mutations - selection acts on existing variation\n\n**MISCONCEPTION #5: "Evolution means progress / improvement"**\n\n❌ WRONG: Evolution leads to "better" or "more complex" organisms\n✓ CORRECT: Evolution means change - sometimes simpler, sometimes complex\n• Cave fish LOST eyes (simpler, but advantageous in darkness)\n• Parasites often simpler than ancestors\n• "Fitness" = suited to current environment (not "better" absolutely)\n\n**MISCONCEPTION #6: "There are no transitional fossils"**\n\n❌ WRONG: Missing links disprove evolution\n✓ CORRECT: We have THOUSANDS of transitional fossils!\n• Tiktaalik (fish → tetrapod)\n• Archaeopteryx (dinosaur → bird)\n• Ambulocetus (land mammal → whale)\n• Early hominids (ape → human)\n• Every fossil is "transitional" between ancestors and descendants\n\n**MISCONCEPTION #7: "If evolution is true, why are there still monkeys?"**\n\n❌ WRONG: Evolution means old species disappear when new ones evolve\n✓ CORRECT: Species BRANCH - ancestors can survive alongside descendants\n• Monkeys succeeded in their environments (still do!)\n• Humans succeeded in different environments\n• Both came from common ancestor - branches diverged\n• It\'s like asking "If Americans came from Europeans, why are there still Europeans?"\n\n**MISCONCEPTION #8: "Evolution violates 2nd law of thermodynamics"**\n\n❌ WRONG: Complexity can\'t increase (entropy always increases)\n✓ CORRECT: 2nd law applies to CLOSED systems; Earth is OPEN (receives energy from sun)\n• Sun provides constant energy input\n• Life uses that energy to create local order\n• Overall entropy of universe still increases\n• Crystals, snowflakes also increase order - not a violation\n\n**MISCONCEPTION #9: "Evolution can\'t be observed"**\n\n❌ WRONG: Evolution takes too long to observe\n✓ CORRECT: We observe evolution happening in real-time!\n• Bacteria evolving resistance (days/weeks)\n• Darwin\'s finches changing (decades)\n• HIV evolving in patients\n• New species created in labs\n• It\'s one of the most well-documented processes in science\n\nUnderstanding these corrections prevents confusion and reveals evolution\'s true elegance!'
            },
            mindBlowingFacts: [
                'The "Lenski E. coli long-term evolution experiment" has been running since 1988 - we\'ve watched 75,000+ generations evolve, documenting every mutation. Evolution in action!',
                'We can PREDICT flu evolution using evolutionary principles - that\'s how we design next year\'s vaccine (tracking which mutations will spread)',
                'Evolution has been observed creating NEW species: London Underground mosquitoes evolved from surface mosquitoes in just ~100 years of isolation!'
            ],
            whyYouCare: 'Clearing misconceptions allows proper understanding of: disease evolution (antibiotic/vaccine resistance), biodiversity conservation, human origins, and the nature of scientific evidence!'
        },
        {
            title: 'Evolution in Action: Real-World Examples',
            explanation: 'Evolution isn\'t just ancient history - it\'s happening around us constantly. Understanding these examples shows evolution\'s practical importance.',
            analogy: {
                type: 'Evolution\'s Greatest Hits',
                description: '**EXAMPLE 1: ANTIBIOTIC RESISTANCE (Medical Crisis)**\n\n**The Problem:**\n• 1940s: Penicillin cures bacterial infections (miracle drug!)\n• 2024: Many bacteria now resistant (penicillin often useless)\n\n**The Evolution:**\n1. Random mutation gives one bacterium resistance gene\n2. Antibiotic kills non-resistant bacteria (99.99%)\n3. Resistant bacterium survives, reproduces\n4. All offspring inherit resistance\n5. Entire population now resistant (evolution complete!)\n6. Time scale: Days to weeks (bacterial generation = 20 minutes)\n\n**Why It Matters:**\n• 700,000 deaths/year from antibiotic-resistant infections\n• "Superbugs" like MRSA evolved resistance to multiple antibiotics\n• Arms race: We develop new antibiotics, bacteria evolve resistance\n• Understanding evolution helps design treatment strategies\n\n**EXAMPLE 2: DARWIN\'S FINCHES (Evolution We Can Measure)**\n\n**The Setup:**\n• Galápagos Islands: 14 finch species descended from one ancestor\n• Different beaks for different foods (seeds, insects, nectar, blood!)\n\n**Observed Evolution:**\n• 1977 drought on Daphne Major island\n• Only large, tough seeds available\n• Finches with larger, stronger beaks survived better\n• Average beak size INCREASED in one generation\n• Researchers measured the change - evolution in real-time!\n• When rains returned, beak size shifted back\n\n**Why It Matters:**\n• Shows evolution responds to environmental change\n• Happens in observable timeframes\n• Natural selection is ongoing, not just ancient history\n\n**EXAMPLE 3: PEPPERED MOTHS (Textbook Case)**\n\n**Before Industrial Revolution (pre-1800):**\n• 98% light-colored moths (camouflaged on light tree bark)\n• 2% dark moths (easily seen by birds, eaten)\n\n**During Industrial Revolution (1800-1900):**\n• Pollution darkened tree bark with soot\n• NOW dark moths camouflaged, light moths visible\n• Dark moth frequency rose to 95% in 50 years\n\n**After Clean Air Acts (1950s+):**\n• Trees became light again\n• Light moth frequency increasing again\n• Evolution reverses when environment changes!\n\n**Why It Matters:**\n• Shows how human activity creates selective pressure\n• Evolution can reverse when conditions change\n• Visual, measurable example of natural selection\n\n**EXAMPLE 4: HIV EVOLUTION (Personal Scale)**\n\n**The Challenge:**\n• HIV mutates extremely fast (error-prone copying)\n• Evolves drug resistance WITHIN a single patient\n• Can evade immune system by constantly changing\n\n**The Solution:**\n• Combination therapy (3+ drugs simultaneously)\n• Evolution of resistance to ALL drugs at once is unlikely\n• Understanding evolution saves lives\n\n**Why It Matters:**\n• Treatment strategy based on evolutionary principles\n• Shows why vaccines need updating (flu, COVID)\n• Evolution happens on timescale of months in fast-reproducing organisms\n\n**EXAMPLE 5: ELEPHANT TUSK SIZE (Evolutionary Pressure from Hunting)**\n\n**The Pattern:**\n• Poachers target elephants with large tusks\n• Elephants with small/no tusks survive, reproduce\n• Tuskless females increased from 2-4% to 98% in some populations (30 years)\n• Artificial selection by poaching!\n\n**Why It Matters:**\n• Human activity is powerful selective pressure\n• Evolution happens fast when selection is strong\n• Understanding this helps conservation efforts\n\nEvolution isn\'t abstract - it\'s life and death, happening right now!'
            },
            mindBlowingFacts: [
                'Bedbugs have evolved resistance to ALL major insecticides - their populations have exploded in cities worldwide. Evolution in your bedroom!',
                'Cane toads in Australia evolved longer legs in just 70 years - those at invasion front have 10% longer legs, helping them spread faster!',
                'Italian wall lizards introduced to a new island evolved new gut structures in just 36 years (~30 generations) to digest different food!'
            ],
            whyYouCare: 'These examples matter for: public health (fighting evolving diseases), agriculture (pest resistance), conservation (protecting species), and understanding humanity\'s impact on evolution!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Analyzing Natural Selection',
            problemSetup: 'A population of mice lives in a desert with light-colored sand. Most mice are light brown (camouflaged), but 10% are dark brown (easily seen by hawks). A volcanic eruption covers the area with dark lava rock. Predict what will happen to the mouse population over the next 20 generations. Explain using the four requirements of natural selection.',
            steps: [
                {
                    step: 1,
                    description: 'Identify VARIATION:\n• Initial population has color variation: 90% light brown, 10% dark brown\n• This variation exists due to genetic differences',
                    reasoning: 'Natural selection requires pre-existing variation to act upon'
                },
                {
                    step: 2,
                    description: 'Confirm HERITABILITY:\n• Coat color is genetic (inherited from parents)\n• Light parents have light offspring, dark parents have dark offspring\n• Trait is passed through generations',
                    reasoning: 'If traits aren\'t inherited, natural selection can\'t change population over time'
                },
                {
                    step: 3,
                    description: 'Analyze DIFFERENTIAL SURVIVAL (selective pressure changed!):\n\nBEFORE eruption (light sand):\n• Light mice camouflaged → survive better\n• Dark mice visible → eaten by hawks → lower survival\n\nAFTER eruption (dark lava):\n• Dark mice NOW camouflaged → survive better\n• Light mice NOW visible → eaten by hawks → lower survival\n• Selective pressure REVERSED!',
                    reasoning: 'Environment determines which variant survives better - environment changed, so survival advantage flipped'
                },
                {
                    step: 4,
                    description: 'Predict changes over TIME (20 generations):\n\nGeneration 1 (after eruption): 10% dark, 90% light\n• Hawks eat more light mice (visible against dark lava)\n• Dark mice survive and reproduce more\n\nGeneration 5: ~30% dark, 70% light\n• Dark mice still have advantage\n• Proportion continues shifting\n\nGeneration 10: ~55% dark, 45% light\n• Population approaching equal mix\n\nGeneration 20: ~85% dark, 15% light\n• Dark mice now dominant\n• Light mice rare (but not extinct - some survival)',
                    reasoning: 'With each generation, the advantageous trait (dark color) becomes more common. Process is gradual, not instant'
                },
                {
                    step: 5,
                    description: 'Conclusion: Population has EVOLVED\n• Population changed from mostly light to mostly dark\n• ALLELE FREQUENCIES changed in population\n• Individual mice didn\'t change color\n• This is evolution by natural selection',
                    reasoning: 'Evolution = change in population characteristics over time, driven by differential survival'
                }
            ],
            solution: 'Over 20 generations, the mouse population will evolve from 90% light to approximately 85% dark mice due to natural selection favoring dark coloration in the new dark environment. The population adapted to environmental change through differential survival and reproduction.',
            realWorldApplication: 'This EXACT scenario happened with peppered moths during Industrial Revolution - light moths became rare, dark moths common when trees darkened from pollution. Real evolution, observed and documented!'
        },
        {
            scenario: 'Identifying Evidence for Evolution',
            problemSetup: 'You\'re examining whale skeletons and notice they have tiny hip bones and leg bones buried in their bodies, not connected to anything functional. How does this provide evidence for evolution? What does it tell us about whale ancestry?',
            steps: [
                {
                    step: 1,
                    description: 'Identify the structure: VESTIGIAL STRUCTURE\n• Whale hip and leg bones serve NO function in modern whales\n• They\'re remnants (leftovers) from ancestors\n• Similar bones are functional in land mammals',
                    reasoning: 'Vestigial structures are reduced/nonfunctional versions of structures that were functional in ancestors'
                },
                {
                    step: 2,
                    description: 'Ask the evolutionary question:\n"Why would whales have leg bones if they\'ve always been aquatic?"\n• If whales were designed from scratch for water, leg bones make no sense\n• But if whales descended from land-walking ancestors, leg bones make perfect sense as leftovers',
                    reasoning: 'Evolution explains otherwise puzzling anatomical features'
                },
                {
                    step: 3,
                    description: 'Make evolutionary prediction:\nIf whales evolved from land mammals, we should find:\n• Fossil intermediates with functional legs\n• DNA similarities to land mammals\n• Embryonic development showing leg buds',
                    reasoning: 'Scientific theories make testable predictions'
                },
                {
                    step: 4,
                    description: 'Check if predictions are confirmed:\n\n✓ FOSSILS: Found!\n• Pakicetus (50 million years ago): Land-dwelling whale ancestor with legs\n• Ambulocetus (48 million years ago): "Walking whale" - could walk AND swim\n• Dorudon (40 million years ago): Fully aquatic, but still had tiny external legs\n• Modern whales: Legs internal/vestigial\n\n✓ DNA: Whales most closely related to hippos (both even-toed ungulates)\n\n✓ EMBRYOS: Whale embryos grow leg buds that later disappear!',
                    reasoning: 'ALL predictions confirmed - overwhelming evidence'
                },
                {
                    step: 5,
                    description: 'Conclusion: Vestigial hip/leg bones in whales provide evidence because:\n1. They only make sense if whales descended from land ancestors\n2. Fossil record shows transitional forms with functional legs\n3. DNA confirms relationship to land mammals\n4. Embryonic development shows evolutionary history\n\nThis is evidence of DESCENT WITH MODIFICATION',
                    reasoning: 'Multiple independent lines of evidence all point to same conclusion - whale evolution from land ancestors'
                }
            ],
            solution: 'Whale vestigial leg bones provide strong evidence for evolution because they\'re remnants from land-dwelling ancestors. This is confirmed by transitional fossils showing whale evolution from four-legged land mammals over 50 million years.',
            realWorldApplication: 'Vestigial structures appear throughout biology: human appendix (larger in herbivorous ancestors), human tailbone (we had tails!), snake hip bones, flightless bird wings, cave fish eye sockets. All evidence of evolutionary history!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Explain why "survival of the fittest" does NOT mean "survival of the strongest." What does "fitness" actually mean in evolutionary biology?',
            hints: [
                'Fitness = reproductive success (how many offspring survive to reproduce)',
                'NOT about physical strength, intelligence, or longevity alone',
                'A weak organism that produces 100 offspring has higher fitness than a strong organism with no offspring',
                'Example: Male peacock with elaborate tail (actually a DISADVANTAGE for escaping predators) has high fitness if it attracts more mates'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'A student says: "Evolution can\'t be true because it violates the 2nd law of thermodynamics - disorder must always increase, but evolution creates complex ordered organisms." Explain why this reasoning is incorrect.',
            hints: [
                '2nd law applies to CLOSED systems (no energy in or out)',
                'Earth is an OPEN system (constantly receiving energy from the Sun)',
                'Life uses solar energy to create local order (while increasing entropy elsewhere)',
                'Similar to how a refrigerator creates cold (ordered) interior using electrical energy'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p3',
            question: 'Doctors often prescribe antibiotics with instructions to "finish the entire prescription, even if you feel better." Explain how this advice relates to natural selection and antibiotic resistance.',
            hints: [
                'Stopping early kills only weakest bacteria, leaving resistant ones alive',
                'Resistant bacteria reproduce, creating resistant population',
                'Finishing prescription kills MORE bacteria (including moderately resistant ones)',
                'Reduces selective pressure for resistance evolution',
                'This is applied evolutionary biology in medicine!'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p4',
            question: 'Human embryos temporarily have gill slits and tails during development, even though we don\'t have gills or tails as adults. Explain how this embryological evidence supports evolution.',
            hints: [
                'Embryonic development reflects evolutionary history (recapitulates phylogeny)',
                'Gill slits indicate common ancestry with fish',
                'All vertebrate embryos look similar early on (shared developmental genes)',
                'As development continues, species-specific features appear',
                'We inherit developmental programs from ancestors, some features lost later'
            ],
            difficulty: 'hard'
        },
        {
            id: 'p5',
            question: 'Cheetahs are extremely fast (70 mph) but overheat quickly and can\'t fight other predators for food. Explain how this illustrates that adaptations involve trade-offs and that there\'s no such thing as a "perfectly adapted" organism.',
            hints: [
                'Speed adaptation: lightweight build, long legs, flexible spine = FAST',
                'Trade-off: Can\'t sustain long chases (overheats), can\'t fight lions/hyenas',
                'Every adaptation has costs - resources/energy are limited',
                'Environment constantly changes - "perfect" for one situation may be poor for another',
                'Natural selection optimizes for CURRENT environment, not all possible futures'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'What is the best definition of biological evolution?',
            options: [
                { label: 'A', text: 'Change in individual organisms over their lifetime' },
                { label: 'B', text: 'Change in heritable characteristics of populations over successive generations' },
                { label: 'C', text: 'Progression from simple to complex organisms' },
                { label: 'D', text: 'Survival of the strongest individuals' },
                { label: 'E', text: 'Random changes in organisms' }
            ],
            correctAnswer: 'B',
            explanation: 'Evolution is change in POPULATION characteristics over GENERATIONS due to inheritance. Individuals don\'t evolve - populations do.',
            storyExplanation: 'Think of evolution like language changing over time - you don\'t change how you speak, but over generations, new words appear and old ones disappear. Population-level change, not individual change!'
        },
        {
            id: 'q2',
            question: 'Which of the following is required for natural selection to occur?',
            options: [
                { label: 'A', text: 'All individuals must be identical' },
                { label: 'B', text: 'Individuals must intentionally adapt to their environment' },
                { label: 'C', text: 'Heritable variation must exist in the population' },
                { label: 'D', text: 'The environment must remain constant' },
                { label: 'E', text: 'All organisms must produce the same number of offspring' }
            ],
            correctAnswer: 'C',
            explanation: 'Natural selection requires heritable variation - individuals must differ in traits that can be passed to offspring. Without variation, selection has nothing to act on.',
            storyExplanation: 'Imagine a race where everyone is identical and equally fast - nobody wins! Natural selection needs differences (variation) to select FROM. And those differences must be inheritable or they won\'t accumulate over generations.'
        },
        {
            id: 'q3',
            question: 'Vestigial structures (like whale hip bones) provide evidence for evolution because:',
            options: [
                { label: 'A', text: 'They show organisms are perfectly designed' },
                { label: 'B', text: 'They are remnants from ancestors and only make sense in evolutionary context' },
                { label: 'C', text: 'They prove organisms can\'t change over time' },
                { label: 'D', text: 'They appear in all organisms equally' },
                { label: 'E', text: 'They have no relationship to ancestry' }
            ],
            correctAnswer: 'B',
            explanation: 'Vestigial structures are reduced/nonfunctional remnants from ancestors. Whale hip bones only make sense if whales descended from land-walking ancestors (confirmed by fossils!).',
            storyExplanation: 'It\'s like finding buttons on your sleeve cuffs that don\'t actually button - they\'re leftovers from old designs. Whale leg bones are "leftover features" from when whale ancestors walked on land!'
        },
        {
            id: 'q4',
            question: 'Why do bacteria evolve antibiotic resistance so quickly compared to larger organisms?',
            options: [
                { label: 'A', text: 'Bacteria are smarter' },
                { label: 'B', text: 'Bacteria intentionally mutate to survive' },
                { label: 'C', text: 'Bacteria reproduce extremely rapidly (generation time ~20 minutes), so evolution happens faster' },
                { label: 'D', text: 'Bacteria don\'t actually evolve' },
                { label: 'E', text: 'Antibiotics cause resistance mutations' }
            ],
            correctAnswer: 'C',
            explanation: 'Bacteria generation time is ~20 minutes, so they can undergo thousands of generations in months. Natural selection acts each generation, so fast reproduction = fast evolution.',
            storyExplanation: 'Imagine humans had babies every 20 minutes - evolution would happen incredibly fast for us too! Bacteria\'s rapid reproduction means natural selection can produce dramatic changes in days that would take millions of years in elephants.'
        },
        {
            id: 'q5',
            question: 'What is the relationship between humans and modern chimpanzees?',
            options: [
                { label: 'A', text: 'Humans evolved from modern chimpanzees' },
                { label: 'B', text: 'Chimpanzees evolved from humans' },
                { label: 'C', text: 'Humans and chimpanzees share a common ancestor (both evolved from it)' },
                { label: 'D', text: 'Humans and chimpanzees are unrelated' },
                { label: 'E', text: 'Humans are more evolved than chimpanzees' }
            ],
            correctAnswer: 'C',
            explanation: 'Humans and chimps are like cousins - we share a common ancestor that lived ~6-7 million years ago. Both lineages evolved from that ancestor. We didn\'t come from modern chimps.',
            storyExplanation: 'Think of you and your cousin - you didn\'t evolve from your cousin, and they didn\'t evolve from you. You both descended from your shared grandparents! Same with humans and chimps - we share ancient "grandparent" species.'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'Remember requirements for natural selection with "VHDT": Variation, Heritability, Differential reproduction, Time',
            example: 'All four must be present for evolution by natural selection to occur'
        },
        {
            technique: 'Phrase',
            description: 'Evidence for evolution: "FEMBA" - Fossils, Embryology, Molecular biology, Biogeography, Anatomy',
            example: 'Five independent lines of evidence all supporting evolution'
        },
        {
            technique: 'Story',
            description: 'Natural selection story: "Some survive, some die. The survivors multiply. Over time, the population changes to be more like the survivors."',
            example: 'Simple narrative explaining the entire process'
        },
        {
            technique: 'Visual',
            description: 'Evolution tree: Draw branching tree with common ancestor at bottom, modern species at top of branches - shows relationships',
            example: 'Visualize common descent - all species connected through branching lineages'
        },
        {
            technique: 'Rhyme',
            description: 'Fitness rhyme: "Fitness isn\'t being strong, it\'s passing genes along!"',
            example: 'Remember that fitness = reproductive success, not physical strength'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Saying "organisms evolve" when meaning "populations evolve"',
            correction: 'POPULATIONS evolve over generations. Individual organisms do NOT evolve - they keep the same genes their entire life. The population\'s gene frequencies change over time.',
            whyItMatters: 'This fundamental misunderstanding prevents grasping how evolution actually works. Giraffes didn\'t stretch their necks; long-necked giraffes survived better in the population'
        },
        {
            mistake: 'Thinking evolution has a goal or direction',
            correction: 'Evolution has NO goal, purpose, or direction toward "better" organisms. Natural selection favors traits suited to CURRENT environment - if environment changes, different traits are favored.',
            whyItMatters: 'Evolution isn\'t progress toward perfection - it\'s adaptation to current conditions. Cave fish LOSING eyes is evolution (advantageous in darkness)'
        },
        {
            mistake: 'Confusing "theory" (scientific) with "theory" (everyday language)',
            correction: 'Scientific theory = well-supported explanation (theory of gravity, germ theory, cell theory). It does NOT mean "guess" or "unproven idea."',
            whyItMatters: '"Just a theory" misconception undermines public understanding of science. Evolution is as well-supported as gravity!'
        },
        {
            mistake: 'Thinking needs or desires cause mutations',
            correction: 'Mutations are RANDOM (not directed by need). Natural selection acts on existing variation - it doesn\'t create variation in response to need. Giraffes didn\'t WANT longer necks; random mutations created variation, selection favored longer necks.',
            whyItMatters: 'This is a Lamarckian (wrong) view. Understanding randomness of mutation vs. non-randomness of selection is crucial'
        },
        {
            mistake: 'Believing evolution and natural selection are the same',
            correction: 'EVOLUTION = change in populations over time (the WHAT). NATURAL SELECTION = one mechanism causing evolution (a HOW). Other mechanisms: genetic drift, gene flow, mutation.',
            whyItMatters: 'Natural selection is the primary driver, but not the only mechanism of evolution. Genetic drift (random changes) also causes evolution'
        }
    ],
    quickReference: [
        {
            title: 'Four Requirements for Natural Selection',
            content: '1. VARIATION: Individuals differ in traits\n2. HERITABILITY: Traits passed parent→offspring\n3. DIFFERENTIAL SURVIVAL: Some variants survive/reproduce better\n4. TIME: Process repeats over generations\nResult: Population evolves',
            category: 'principle'
        },
        {
            title: 'Evidence for Evolution',
            content: 'FOSSILS: Transitional forms, progression over time\nANATOMY: Homologous structures, vestigial organs\nEMBRYOLOGY: Similar development across species\nDNA: Genetic similarities match predicted relationships\nBIOGEOGRAPHY: Distribution matches evolutionary history\nOBSERVED: Bacteria, finches, moths evolving in real-time',
            category: 'principle'
        },
        {
            title: 'Key Definitions',
            content: 'EVOLUTION: Change in heritable population traits over generations\nFITNESS: Reproductive success (not strength!)\nADAPTATION: Inherited trait increasing fitness\nNATURAL SELECTION: Differential survival based on traits',
            category: 'principle'
        },
        {
            title: 'Common Descent',
            content: 'ALL life shares common ancestry\nHumans share:\n• 98.8% DNA with chimps\n• 90% with cats\n• 60% with bananas\n• 50% with yeast\nEvidence: Shared genes, similar embryos, molecular homology',
            category: 'principle'
        },
        {
            title: 'Evolution in Action Examples',
            content: 'ANTIBIOTIC RESISTANCE: Days/weeks\nDARWIN\'S FINCHES: Decades\nPEPPERED MOTHS: 50 years\nHIV DRUG RESISTANCE: Months\nELEPHANT TUSKS: 30 years\nEvolution is observable, measurable, ongoing',
            category: 'process'
        }
    ],
    summary: [
        'Evolution is change in heritable characteristics of populations over generations - the central organizing principle of biology',
        'Natural selection requires: variation, heritability, differential reproduction, and time - these drive adaptation to environments',
        'Multiple lines of evidence support evolution: fossils, comparative anatomy, embryology, DNA, biogeography, and observed evolution',
        'Fitness means reproductive success (offspring production), NOT physical strength or superiority',
        'All life shares common ancestry - humans are related to all organisms (98.8% DNA match with chimps, 60% with bananas)',
        'Adaptations are inherited traits that increase fitness in specific environments - arise through natural selection over many generations',
        'Evolution is NOT random (selection is non-random), NOT goal-directed (no purpose), and NOT about individuals changing',
        'Evolution happens in observable timeframes: bacteria (days), finches (years/decades), speciation (thousands-millions of years)',
        'Understanding evolution is essential for: medicine (antibiotic resistance), agriculture (breeding), conservation (biodiversity), and comprehending life itself'
    ],
    selfAssessment: [
        'I can explain the four requirements for natural selection',
        'I understand that populations evolve over generations, not individuals during their lifetime',
        'I can describe multiple lines of evidence supporting evolution',
        'I know the difference between fitness (reproductive success) and physical strength',
        'I can explain common descent and why all life is related',
        'I understand how adaptations arise through natural selection',
        'I can correct common misconceptions about evolution (it\'s "just a theory," humans from monkeys, etc.)',
        'I can apply evolutionary concepts to real-world examples like antibiotic resistance'
    ]
};
export default lesson;
//# sourceMappingURL=day-20.js.map
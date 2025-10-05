const lesson = {
    day: 21,
    subject: 'biology',
    title: 'Ecology & Ecosystems - The Web of Life',
    emoji: '🌍',
    learningGoal: 'Understand energy flow, nutrient cycling, and the interconnected relationships that sustain life in ecosystems',
    estimatedTime: 70,
    objectives: [
        'Define ecology and distinguish between populations, communities, and ecosystems',
        'Explain energy flow through food chains and food webs',
        'Describe biogeochemical cycles (carbon, nitrogen, water)',
        'Understand symbiotic relationships (mutualism, commensalism, parasitism)',
        'Identify biomes and their characteristics',
        'Analyze human impacts on ecosystems'
    ],
    discoveryStory: {
        title: 'Rachel Carson and the Silent Spring That Changed the World',
        content: "It's 1962. Biologist Rachel Carson publishes 'Silent Spring,' and the world is about to wake up to ecology. Carson noticed something terrifying: birds were disappearing. Spring mornings that once rang with birdsong had gone silent. Why? She traced it back to DDT, a pesticide sprayed to kill mosquitoes. Here's where ecology gets mind-blowing: DDT didn't just kill mosquitoes. It entered the WHOLE ecosystem. Insects ate DDT-sprayed plants → small birds ate insects → DDT concentrated in bird bodies → big birds (eagles, falcons) ate small birds → DDT built up even MORE in their bodies (bioaccumulation!) → eggshells became thin → eggs broke → bird populations crashed. One chemical, sprayed for one purpose, rippled through the ENTIRE food web! Carson showed that everything in nature is CONNECTED. You can't just affect one species without affecting dozens of others. Her book launched the environmental movement, led to the ban of DDT, and taught us a crucial lesson: ecosystems are intricate webs where every thread matters. Pull one thread, and the whole tapestry can unravel. Today, ecology - the study of how organisms interact with each other and their environment - is more important than ever. Climate change, pollution, extinctions - they're all ecological problems requiring ecological solutions. 🌿🦅",
        emoji: '📖'
    },
    keyTerms: [
        {
            term: 'Ecology',
            definition: 'The scientific study of interactions between organisms and their environment',
            example: 'Studying how wolves affect deer populations, plant growth, and river patterns in Yellowstone National Park'
        },
        {
            term: 'Ecosystem',
            definition: 'All living organisms (biotic factors) and non-living components (abiotic factors) interacting in a defined area',
            example: 'A pond ecosystem includes fish, plants, bacteria (biotic) plus water, sunlight, minerals (abiotic)'
        },
        {
            term: 'Food Chain',
            definition: 'A linear sequence showing who eats whom in an ecosystem (energy transfer)',
            example: 'Grass → Grasshopper → Frog → Snake → Hawk (each arrow = "is eaten by")'
        },
        {
            term: 'Food Web',
            definition: 'A complex network of interconnected food chains showing all feeding relationships in an ecosystem',
            example: 'Hawks eat snakes AND rabbits AND mice; snakes eat frogs AND mice - multiple connections'
        },
        {
            term: 'Producer',
            definition: 'Organisms that make their own food through photosynthesis or chemosynthesis (plants, algae, some bacteria)',
            example: 'Grass converts sunlight into glucose (chemical energy) - foundation of food chains'
        },
        {
            term: 'Consumer',
            definition: 'Organisms that eat other organisms for energy (cannot make their own food)',
            example: 'Herbivores (deer), carnivores (lions), omnivores (bears) are all consumers'
        },
        {
            term: 'Decomposer',
            definition: 'Organisms that break down dead organic matter, recycling nutrients back to the ecosystem',
            example: 'Bacteria and fungi decompose dead leaves, returning nitrogen and carbon to soil'
        },
        {
            term: 'Symbiosis',
            definition: 'Close, long-term interaction between two different species',
            example: 'Clownfish living in sea anemone (mutualism - both benefit)'
        }
    ],
    concepts: [
        {
            title: 'Levels of Ecological Organization',
            explanation: 'Ecology studies life at multiple scales, from individual organisms to the entire biosphere. Each level has unique properties that emerge from interactions.',
            analogy: {
                type: 'Zooming Out from Individual to Planet',
                description: '**LEVELS (Smallest to Largest):**\n\n**1. ORGANISM (Individual)**\n• Single living thing\n• Example: One deer\n• Studies: How does this deer find food? Regulate temperature?\n\n**2. POPULATION**\n• All individuals of ONE species in an area\n• Example: All deer in Yellowstone\n• Studies: How many deer? Birth/death rates? Growth patterns?\n\n**3. COMMUNITY**\n• All DIFFERENT species living in an area (all populations together)\n• Example: Deer + wolves + elk + trees + birds + insects in Yellowstone\n• Studies: How do species interact? Competition? Predation?\n\n**4. ECOSYSTEM**\n• Community + Physical environment (abiotic factors)\n• Example: Yellowstone community + soil + water + climate + sunlight\n• Studies: Energy flow? Nutrient cycles? How do living and non-living interact?\n\n**5. BIOME**\n• Large region with similar climate, plants, and animals\n• Example: Temperate forest (Yellowstone is part of this)\n• Studies: What adaptations do organisms share? Climate patterns?\n\n**6. BIOSPHERE**\n• ALL ecosystems on Earth (every place life exists)\n• Example: Entire planet - from ocean depths to mountain peaks\n• Studies: Global cycles (carbon, water), planetary-scale processes\n\n**KEY INSIGHT:**\nEach level shows EMERGENT PROPERTIES - characteristics that arise from interactions but don\'t exist at lower levels:\n• Individual deer doesn\'t have a "population growth rate"\n• Population doesn\'t have "predator-prey dynamics" (needs community)\n• Community doesn\'t have "nutrient cycling" (needs ecosystem with abiotic factors)\n\nIt\'s like zoom levels on a map - each reveals different patterns!'
            },
            mindBlowingFacts: [
                'The biosphere is only about 20 km thick (from deepest ocean to highest atmosphere with life) - that\'s 0.3% of Earth\'s radius. ALL life exists in this thin shell!',
                'Reintroducing 41 wolves to Yellowstone in 1995 changed the entire ecosystem: deer behavior changed → trees grew back → beavers returned → rivers changed course. One species affected EVERYTHING (trophic cascade)!',
                'Earth has only 14 major biomes, but they contain an estimated 8.7 million species - most still undiscovered!'
            ],
            whyYouCare: 'Understanding ecological levels helps predict: how removing one species affects others, where diseases spread, how pollution moves through ecosystems, and why protecting habitats (not just species) matters!'
        },
        {
            title: 'Energy Flow: Following the Power',
            explanation: 'Energy enters ecosystems as sunlight, flows through food chains/webs, and eventually leaves as heat. Unlike nutrients (which cycle), energy flows ONE WAY.',
            analogy: {
                type: 'The Energy Waterfall',
                description: '**ENERGY FLOW RULES:**\n\n**Rule 1: Energy flows ONE DIRECTION (doesn\'t cycle)**\n• Enters: Sunlight → Producers (photosynthesis)\n• Flows: Through consumers (eating)\n• Exits: Heat (metabolism, movement)\n• NEVER returns to sun!\n\n**Rule 2: Energy DECREASES at each level (10% Rule)**\n\n**TROPHIC LEVELS (Energy pyramid):**\n\n```\n        Tertiary Consumers (0.1%)\n           Hawks, large fish\n              ▲ (only 10% transferred)\n              |\n      Secondary Consumers (1%)\n         Snakes, small fish  \n              ▲ (only 10% transferred)\n              |\n       Primary Consumers (10%)\n        Grasshoppers, rabbits\n              ▲ (only 10% transferred)\n              |\n         Producers (100%)\n           Grass, algae\n              ▲\n           SUNLIGHT\n```\n\n**THE 10% RULE:**\nOnly ~10% of energy transfers to next level. 90% is lost as:\n• Heat (metabolism, movement)\n• Used for life processes\n• Not eaten (parts left behind)\n\n**EXAMPLE:**\n• Grass captures 10,000 units of solar energy\n• Grasshoppers eating grass get 1,000 units (10%)\n• Frogs eating grasshoppers get 100 units (10% of 1,000)\n• Snakes eating frogs get 10 units (10% of 100)\n• Hawks eating snakes get 1 unit (10% of 10)\n\n**WHY PYRAMIDS?**\n• Must have LOTS of grass to support few grasshoppers\n• Must have LOTS of grasshoppers to support few frogs\n• Top predators are RARE (not enough energy!)\n\n**BIOMASS PYRAMID:**\nMass of organisms decreases at each level:\n• 1,000 kg grass → 100 kg grasshoppers → 10 kg frogs → 1 kg snakes\n\n**ENERGY PYRAMID:**\nEnergy available decreases at each level (10% rule)\n\n**NUMBER PYRAMID:**\nUsually many producers, few top predators\n\n**DECOMPOSERS:**\nWork at ALL levels, breaking down dead matter, releasing energy as heat, recycling nutrients\n\nEnergy is like a waterfall - flows downward, never back up, loses power at each drop!'
            },
            mindBlowingFacts: [
                'It takes about 10,000 kg of phytoplankton to support 1,000 kg of zooplankton → 100 kg of small fish → 10 kg of large fish → 1 kg of tuna. That\'s why tuna is expensive!',
                'Because of the 10% rule, most ecosystems can only support 4-5 trophic levels. There\'s not enough energy for a "super-predator" above apex predators!',
                'Humans eating plants directly (vegetarian diet) is ~10× more energy-efficient than eating meat. Same farmland supports 10× more people on plants vs. livestock!'
            ],
            whyYouCare: 'Energy flow explains: why there are fewer predators than prey, why food chains are short, agricultural efficiency, and why removing top predators causes ecosystem collapse (trophic cascades)!'
        },
        {
            title: 'Nutrient Cycles: Nature\'s Recycling System',
            explanation: 'Unlike energy (one-way flow), nutrients CYCLE through ecosystems - from organisms to environment and back. Key cycles include carbon, nitrogen, and water.',
            analogy: {
                type: 'The Circular Economy of Nature',
                description: '**CARBON CYCLE (The Breath of Life):**\n\n**In Atmosphere:** CO₂ gas\n\n**Photosynthesis (Removal from atmosphere):**\n• Plants absorb CO₂ → make glucose → store in body\n• CO₂ (atmosphere) → Carbon in plants\n\n**Consumption (Transfer between organisms):**\n• Animals eat plants → carbon transfers to animal bodies\n• Carbon in plants → Carbon in animals\n\n**Cellular Respiration (Return to atmosphere):**\n• ALL organisms (plants, animals, decomposers) breathe\n• Glucose + O₂ → CO₂ + energy\n• Carbon in organisms → CO₂ (atmosphere)\n\n**Decomposition (Recycling):**\n• Dead organisms → decomposers break down → release CO₂\n• Carbon in dead matter → CO₂ (atmosphere)\n\n**Fossil Fuels (Long-term storage):**\n• Dead organisms buried → pressure/heat → coal/oil/gas\n• Burning releases CO₂ stored for millions of years\n• Human activity = adding "old" carbon to atmosphere!\n\n**NITROGEN CYCLE (The Protein Builder):**\n\nNitrogen (N₂) is 78% of atmosphere, but organisms can\'t use it directly!\n\n**Nitrogen Fixation (Making it usable):**\n• Bacteria convert N₂ → ammonia (NH₃)/nitrates (NO₃⁻)\n• Lightning also fixes some nitrogen\n• Now plants can absorb it!\n\n**Assimilation:**\n• Plants absorb nitrates → make proteins\n• Animals eat plants → nitrogen transfers\n\n**Decomposition:**\n• Dead organisms → decomposers → ammonia released to soil\n\n**Nitrification:**\n• Bacteria convert ammonia → nitrites → nitrates (usable by plants again)\n\n**Denitrification (Return to atmosphere):**\n• Bacteria convert nitrates → N₂ gas → returns to atmosphere\n• Cycle completes!\n\n**WATER CYCLE (The Endless Journey):**\n\n**Evaporation:** Liquid water → water vapor (atmosphere)\n**Transpiration:** Plants release water vapor (leaves)\n**Condensation:** Water vapor → clouds (liquid droplets)\n**Precipitation:** Rain/snow returns water to Earth\n**Runoff:** Water flows to oceans/lakes\n**Infiltration:** Water soaks into ground (groundwater)\n**Repeat!**\n\n**KEY DIFFERENCE FROM ENERGY:**\n• Energy: One-way flow (sun → heat, lost forever)\n• Nutrients: Circular (carbon/nitrogen/water reused infinitely)\n\nNutrients are like money in circulation - same atoms used over and over!'
            },
            mindBlowingFacts: [
                'The water you drank today has been through dinosaurs, ancient oceans, and clouds millions of times - Earth has the SAME water for billions of years!',
                'Your body contains nitrogen atoms that were once in proteins of dinosaurs, Egyptian pharaohs, and ancient trees - we\'re all recycling the same atoms!',
                'Humans have doubled the amount of nitrogen entering the nitrogen cycle (fertilizers) - causing algae blooms, dead zones in oceans, disrupting the natural balance!'
            ],
            whyYouCare: 'Understanding cycles explains: climate change (excess CO₂), fertilizer pollution (excess nitrogen), water scarcity, and why ecosystems need decomposers (without them, nutrients stay locked in dead matter)!'
        },
        {
            title: 'Symbiotic Relationships: Living Together',
            explanation: 'Symbiosis is a close, long-term interaction between different species. There are three main types based on who benefits.',
            analogy: {
                type: 'Roommate Scenarios',
                description: '**THREE TYPES OF SYMBIOSIS:**\n\n**1. MUTUALISM (+/+): Both benefit**\n\n**Like:** Perfect roommates - both help each other\n\n**Examples:**\n• **Bees & Flowers:** Bee gets nectar (food), flower gets pollinated (reproduction)\n• **Clownfish & Anemone:** Fish gets protection (anemone stings predators), anemone gets cleaned and fed\n• **You & Gut Bacteria:** Bacteria get food/home, you get vitamins (B12, K) and digestion help\n• **Lichen:** Fungus + algae - fungus provides structure/water, algae provides food (photosynthesis)\n• **Oxpecker birds & Rhinos:** Bird gets food (ticks/parasites), rhino gets pest removal\n\n**2. COMMENSALISM (+/0): One benefits, other unaffected**\n\n**Like:** Roommate who uses your WiFi - you don\'t care, they benefit\n\n**Examples:**\n• **Barnacles on whales:** Barnacles get free transportation to food-rich waters, whale unaffected\n• **Remora fish & sharks:** Remora attaches to shark, eats scraps, gets free rides. Shark doesn\'t care\n• **Birds nesting in trees:** Bird gets home, tree unaffected\n• **Cattle egrets & cattle:** Birds eat insects stirred up by cattle, cattle indifferent\n\n**3. PARASITISM (+/-): One benefits, other harmed**\n\n**Like:** Terrible roommate - takes your stuff, doesn\'t pay rent, makes you sick\n\n**Examples:**\n• **Tapeworms in intestines:** Worm gets food/home, you get nutrient depletion, illness\n• **Ticks on deer:** Tick gets blood meal, deer loses blood, gets disease (Lyme)\n• **Mistletoe on trees:** Mistletoe gets water/nutrients from tree, tree weakened\n• **Fleas, lice, mosquitoes:** Parasite gets blood, host gets bites, disease\n• **Cuckoo birds:** Lay eggs in other birds\' nests, other bird raises cuckoo chick (wastes energy)\n\n**PREDATION vs. PARASITISM:**\n• **Predator:** Kills and eats prey quickly (lion eating zebra)\n• **Parasite:** Lives on/in host long-term, usually doesn\'t kill (wants host alive!)\n\n**COMPETITION (Not symbiosis, but important!):**\n• Two species compete for same resource (food, space, water)\n• Both harmed (-/-)\n• Example: Lions and hyenas compete for prey\n\nSymbiosis shapes ecosystems - partnerships and conflicts drive evolution!'
            },
            mindBlowingFacts: [
                'You have more bacterial cells in your gut than human cells in your body - you\'re a walking mutualism! Without gut bacteria, you couldn\'t digest food properly.',
                'Some parasites are so specialized, they can only live in ONE host species - like the parasitic worm that only infects a specific snail species in Hawaii!',
                'Leafcutter ants farm fungus in underground gardens (mutualism) - ants cultivate fungus, fungus provides food. They\'ve been farming for 50 million years (humans only 10,000)!'
            ],
            whyYouCare: 'Symbiosis matters for: understanding disease (parasites), agriculture (pollinators, nitrogen-fixing bacteria in crop roots), medicine (gut microbiome health), and coral reef health (coral-algae mutualism)!'
        },
        {
            title: 'Biomes: Earth\'s Major Ecosystems',
            explanation: 'Biomes are large regions with similar climate, plants, and animals. Climate (temperature and precipitation) determines which biome exists in an area.',
            analogy: {
                type: 'Earth\'s Climate Zones',
                description: '**MAJOR TERRESTRIAL BIOMES:**\n\n**1. TROPICAL RAINFOREST**\n• **Climate:** Hot, wet year-round (>200 cm rain/year)\n• **Plants:** Tall trees, dense canopy, vines, epiphytes\n• **Animals:** Monkeys, parrots, jaguars, insects (highest biodiversity!)\n• **Location:** Equator - Amazon, Congo, Southeast Asia\n• **Fun fact:** 50% of Earth\'s species in <7% of land area!\n\n**2. DESERT**\n• **Climate:** Very dry (<25 cm rain/year), hot days, cold nights\n• **Plants:** Cacti, succulents (water storage), deep roots\n• **Animals:** Camels, lizards, scorpions (adaptations to conserve water)\n• **Location:** 30° N/S latitude - Sahara, Arabian, Australian\n• **Fun fact:** Some deserts get less than 1 cm rain/year!\n\n**3. TEMPERATE FOREST**\n• **Climate:** Moderate temperature, 4 seasons, 75-150 cm rain\n• **Plants:** Deciduous trees (lose leaves in winter) - oak, maple, beech\n• **Animals:** Deer, bears, squirrels, birds\n• **Location:** Eastern US, Europe, East Asia\n• **Fun fact:** Leaves change color and fall to conserve water in winter!\n\n**4. GRASSLAND (Savanna/Prairie)**\n• **Climate:** Moderate rain (25-75 cm), seasonal droughts, fires\n• **Plants:** Grasses (deep roots survive fire), few trees\n• **Animals:** Bison, zebras, lions, prairie dogs\n• **Location:** Great Plains (US), African savanna, Pampas (S. America)\n• **Fun fact:** Grasslands have MORE biomass BELOW ground (roots) than above!\n\n**5. TAIGA (Boreal Forest)**\n• **Climate:** Long cold winters, short summers, moderate precipitation\n• **Plants:** Coniferous trees (pine, spruce, fir) - needles reduce water loss\n• **Animals:** Moose, wolves, bears, lynx, migratory birds\n• **Location:** Northern Canada, Russia, Scandinavia\n• **Fun fact:** Largest terrestrial biome (covers 17% of land)!\n\n**6. TUNDRA**\n• **Climate:** Extremely cold, short growing season, low precipitation\n• **Plants:** Mosses, lichens, small shrubs (no trees - permafrost!)\n• **Animals:** Caribou, arctic foxes, polar bears, migratory birds\n• **Location:** Arctic Circle, Antarctic, high mountains\n• **Fun fact:** Permafrost (permanently frozen soil) prevents tree root growth!\n\n**AQUATIC BIOMES:**\n\n**Freshwater:** Rivers, lakes, wetlands (<1% salt)\n**Marine:** Oceans, coral reefs, estuaries (high salt)\n\n**CLIMATE DETERMINES BIOME:**\n• Temperature + Precipitation = which plants can survive\n• Plants = which animals can survive\n• Same climate = same biome (even on different continents!)\n\nBiomes are Earth\'s natural neighborhoods - climate builds the neighborhood, life moves in!'
            },
            mindBlowingFacts: [
                'Tropical rainforests produce 20% of Earth\'s oxygen but are being destroyed at a rate of 1-2 football fields per SECOND!',
                'The taiga stores more carbon than all tropical rainforests combined - in frozen soil and peat. Climate change thawing = massive CO₂ release!',
                'Antarctica (polar desert) gets less precipitation than the Sahara - it\'s technically the driest place on Earth!'
            ],
            whyYouCare: 'Understanding biomes helps predict: climate change impacts (which biomes shift where), biodiversity hotspots (where to protect), agricultural potential, and why invasive species from one biome devastate another!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Analyzing a Food Web',
            problemSetup: 'In a grassland ecosystem:\n- Grass is eaten by grasshoppers and rabbits\n- Grasshoppers are eaten by frogs and birds\n- Rabbits are eaten by snakes and hawks\n- Frogs are eaten by snakes\n- Snakes are eaten by hawks\n\nQuestions:\na) Identify producers, primary consumers, secondary consumers, and tertiary consumers\nb) What would happen if all snakes were removed?\nc) Why are there more grasshoppers than hawks?',
            steps: [
                {
                    step: 1,
                    description: 'Identify trophic levels:\n\n**Producers (make own food):** Grass\n\n**Primary Consumers (eat producers):**\n• Grasshoppers (eat grass)\n• Rabbits (eat grass)\n\n**Secondary Consumers (eat primary consumers):**\n• Frogs (eat grasshoppers)\n• Birds (eat grasshoppers)\n• Snakes (eat rabbits and frogs)\n\n**Tertiary Consumers (eat secondary consumers):**\n• Hawks (eat snakes and rabbits)',
                    reasoning: 'Trace what each organism eats to determine its trophic level'
                },
                {
                    step: 2,
                    description: 'Answer (b): Predict effects of removing snakes\n\n**Direct effects:**\n• Frog population INCREASES (no predator eating them)\n• Rabbit population INCREASES (no snake predation)\n• Hawk population DECREASES (lose snake as food source)',
                    reasoning: 'Removing a predator directly affects its prey (increase) and its predators (decrease)'
                },
                {
                    step: 3,
                    description: 'Predict indirect (cascade) effects:\n\n• More frogs → eat more grasshoppers → grasshopper population DECREASES\n• More rabbits → eat more grass → grass DECREASES\n• Less grasshoppers → birds have less food → bird population DECREASES\n• Hawks switch to more rabbit hunting (but fewer snakes = overall hawk decline)\n• Less grass → potentially fewer grasshoppers (in long term)',
                    reasoning: 'Effects ripple through the food web - changes cascade to organisms not directly connected to snakes'
                },
                {
                    step: 4,
                    description: 'Answer (c): Explain population size differences\n\n**10% Rule explanation:**\n• Grass captures solar energy (base of pyramid)\n• Only 10% of grass energy transfers to grasshoppers\n• Only 10% of grasshopper energy transfers to secondary consumers\n• Only 10% transfers to hawks\n\n**Math:**\nIf grass has 10,000 energy units:\n• Grasshoppers: 1,000 units (can support many individuals)\n• Secondary consumers: 100 units\n• Hawks: 10 units (can support very few individuals)',
                    reasoning: 'Energy loss at each level means fewer organisms can be supported at higher levels'
                },
                {
                    step: 5,
                    description: 'Biomass pyramid:\n• LOTS of grass (thousands of plants)\n• Many grasshoppers (hundreds)\n• Some frogs, birds, snakes (dozens)\n• Few hawks (maybe 1-5)\n\nPyramid shape is inevitable due to energy loss',
                    reasoning: 'This is why apex predators are always rare - not enough energy to support large populations'
                }
            ],
            solution: 'a) Producers: Grass. Primary: Grasshoppers, rabbits. Secondary: Frogs, birds, snakes. Tertiary: Hawks.\nb) Removing snakes would increase frogs and rabbits (their prey), decrease hawks (lose food source), and cause cascading effects throughout the web.\nc) The 10% rule means energy decreases at each level - lots of energy supports many grasshoppers, little energy supports few hawks.',
            realWorldApplication: 'This exact analysis is used in wildlife management - understanding food webs prevents unintended consequences of removing or adding species. Example: Removing wolves from Yellowstone caused deer overpopulation → overgrazing → ecosystem collapse (fixed by reintroducing wolves)!'
        },
        {
            scenario: 'Carbon Cycle Analysis',
            problemSetup: 'Humans burn fossil fuels, releasing CO₂. Some CO₂ is absorbed by oceans and forests, but atmospheric CO₂ is still increasing. Explain using the carbon cycle why this is happening and what effects it has.',
            steps: [
                {
                    step: 1,
                    description: 'Identify normal carbon cycle processes:\n\n**Removal of CO₂ from atmosphere:**\n• Photosynthesis (plants/algae absorb CO₂)\n• Ocean absorption (CO₂ dissolves in water)\n\n**Addition of CO₂ to atmosphere:**\n• Cellular respiration (all organisms release CO₂)\n• Decomposition (bacteria/fungi release CO₂)\n• Volcanic activity (natural)\n\n**Balanced:** Additions ≈ Removals (for millions of years)',
                    reasoning: 'The natural carbon cycle was in equilibrium before human activity'
                },
                {
                    step: 2,
                    description: 'Identify human impact:\n\n**Burning fossil fuels:**\n• Coal, oil, gas = ancient carbon (stored for millions of years)\n• Burning releases this "old" carbon as CO₂\n• Adding ~40 billion tons CO₂/year (NEW addition to cycle)\n\n**Deforestation:**\n• Cutting forests = fewer trees to absorb CO₂ (reduced removal)\n• Burning trees = releases stored carbon (increased addition)\n• Double whammy!',
                    reasoning: 'Humans are adding carbon faster than natural processes remove it'
                },
                {
                    step: 3,
                    description: 'Explain why CO₂ is accumulating:\n\n**Simple math:**\n• Natural removal capacity: ~X billion tons/year\n• Human additions: 40 billion tons/year\n• Removal capacity can\'t keep up\n• Excess accumulates in atmosphere\n\nIt\'s like filling a bathtub faster than water drains - water level rises',
                    reasoning: 'The rate of addition exceeds the rate of removal, causing accumulation'
                },
                {
                    step: 4,
                    description: 'Identify effects of increased atmospheric CO₂:\n\n**Greenhouse effect:**\n• CO₂ traps heat in atmosphere\n• Global temperatures rising (climate change)\n\n**Ocean acidification:**\n• CO₂ dissolves in ocean → forms carbonic acid\n• pH drops → harms coral, shellfish (can\'t build shells)\n\n**Ecosystem shifts:**\n• Temperature changes → biomes shift\n• Species must migrate or adapt (many can\'t)',
                    reasoning: 'Disrupting the carbon cycle has cascading effects on climate and ecosystems'
                },
                {
                    step: 5,
                    description: 'Potential solutions:\n\n**Reduce additions:**\n• Renewable energy (solar, wind) instead of fossil fuels\n• Energy efficiency\n\n**Increase removals:**\n• Reforestation (plant trees)\n• Protect existing forests\n• Ocean protection (phytoplankton absorb CO₂)\n\n**Carbon capture:**\n• Technology to remove CO₂ from atmosphere',
                    reasoning: 'Solving climate change requires addressing both sides of the carbon cycle'
                }
            ],
            solution: 'Atmospheric CO₂ is increasing because humans are adding carbon (fossil fuels) faster than natural processes (photosynthesis, ocean absorption) can remove it. This disrupts the carbon cycle\'s natural balance, causing climate change and ocean acidification.',
            realWorldApplication: 'Understanding the carbon cycle is essential for climate policy, renewable energy development, forest conservation, and predicting climate change impacts. This is applied ecology at the planetary scale!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'In an ecosystem, hawks eat snakes, snakes eat mice, and mice eat seeds. If a disease kills most of the snakes, predict what will happen to hawk and mouse populations. Explain your reasoning.',
            hints: [
                'Fewer snakes = less food for hawks (hawks decline)',
                'Fewer snakes = fewer predators eating mice (mice increase)',
                'More mice might eventually eat more seeds (plant impact)',
                'This is a trophic cascade - effects ripple through levels'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Explain why eating vegetables is more energy-efficient than eating beef. Use the 10% rule in your answer.',
            hints: [
                'Vegetables = eating producers (primary trophic level)',
                'Beef = eating primary consumers (cows eat plants)',
                '10% of plant energy transfers to cow, then 10% to you',
                'Eating plants directly = you get 100%, eating beef = you get 10%',
                'Same farmland supports 10× more people on plants vs. raising cattle'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p3',
            question: 'Your gut contains trillions of bacteria that help digest food and produce vitamins. What type of symbiotic relationship is this? Explain.',
            hints: [
                'You benefit (get vitamins, better digestion)',
                'Bacteria benefit (get food and warm home)',
                'Both organisms benefit = mutualism (+/+)',
                'This is why antibiotics (kill bacteria) can cause digestive problems'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p4',
            question: 'A farmer notices that adding nitrogen fertilizer to fields increases crop growth initially, but runoff causes algae blooms in a nearby lake, killing fish. Explain how this happens using the nitrogen cycle.',
            hints: [
                'Excess nitrogen from fertilizer enters water (runoff)',
                'Algae use nitrogen for explosive growth (bloom)',
                'Algae die → decomposers consume them → use up oxygen',
                'Fish suffocate from low oxygen (dead zone)',
                'This disrupts the natural nitrogen cycle balance'
            ],
            difficulty: 'hard'
        },
        {
            id: 'p5',
            question: 'Lichens are composite organisms made of fungi and algae. The fungi provides structure and absorbs water, while the algae performs photosynthesis providing food. Explain: (a) What type of symbiosis is this? (b) Why can lichens survive in harsh environments (rocks, arctic) where neither fungi nor algae could survive alone?',
            hints: [
                '(a) Both benefit: fungi gets food, algae gets water/structure = mutualism',
                '(b) Together they have capabilities neither has alone',
                'Fungi: water absorption, structure. Algae: food production',
                'Partnership allows survival in extreme conditions',
                'This shows how symbiosis can create new ecological niches'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which of the following is a producer?',
            options: [
                { label: 'A', text: 'Rabbit (eats grass)' },
                { label: 'B', text: 'Grass (photosynthesizes)' },
                { label: 'C', text: 'Fox (eats rabbits)' },
                { label: 'D', text: 'Mushroom (decomposes dead matter)' },
                { label: 'E', text: 'Hawk (eats snakes)' }
            ],
            correctAnswer: 'B',
            explanation: 'Producers make their own food through photosynthesis or chemosynthesis. Grass is a producer - it converts sunlight into chemical energy.',
            storyExplanation: 'Producers are the BASE of all food chains - they capture energy from the sun. Think "producer" = "food producer" - grass produces its own food, everything else eats something else!'
        },
        {
            id: 'q2',
            question: 'According to the 10% rule, if producers in an ecosystem have 10,000 units of energy, how much energy is available to secondary consumers?',
            options: [
                { label: 'A', text: '10,000 units' },
                { label: 'B', text: '1,000 units' },
                { label: 'C', text: '100 units' },
                { label: 'D', text: '10 units' },
                { label: 'E', text: '1 unit' }
            ],
            correctAnswer: 'C',
            explanation: 'Energy transfers: Producers (10,000) → Primary consumers (1,000 = 10%) → Secondary consumers (100 = 10% of 1,000). Two 10% transfers = 1% of original.',
            storyExplanation: 'Each step up the food chain loses 90% of energy. Producers → Primary (÷10) → Secondary (÷10 again) = ÷100 total. So 10,000 ÷ 100 = 100 units. It\'s like a leaky bucket at each level!'
        },
        {
            id: 'q3',
            question: 'Clownfish live among sea anemone tentacles. The anemone protects the clownfish from predators, and the clownfish cleans the anemone. What type of relationship is this?',
            options: [
                { label: 'A', text: 'Parasitism' },
                { label: 'B', text: 'Commensalism' },
                { label: 'C', text: 'Mutualism' },
                { label: 'D', text: 'Predation' },
                { label: 'E', text: 'Competition' }
            ],
            correctAnswer: 'C',
            explanation: 'Mutualism - both species benefit. Clownfish gets protection, anemone gets cleaned. It\'s a win-win partnership.',
            storyExplanation: 'Think of mutualism as a "you scratch my back, I scratch yours" deal. Both partners benefit - like roommates who both do chores and both enjoy a clean house!'
        },
        {
            id: 'q4',
            question: 'Which process REMOVES carbon dioxide from the atmosphere?',
            options: [
                { label: 'A', text: 'Cellular respiration' },
                { label: 'B', text: 'Decomposition' },
                { label: 'C', text: 'Burning fossil fuels' },
                { label: 'D', text: 'Photosynthesis' },
                { label: 'E', text: 'Volcanic eruptions' }
            ],
            correctAnswer: 'D',
            explanation: 'Photosynthesis removes CO₂ from atmosphere: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Plants absorb CO₂ and convert it to glucose.',
            storyExplanation: 'Plants are like CO₂ vacuum cleaners - they suck it out of the air during photosynthesis! All other options RELEASE CO₂. Trees are literally cleaning the air!'
        },
        {
            id: 'q5',
            question: 'A biome is characterized by very low precipitation (<25 cm/year), extreme temperature variation between day and night, and plants with water storage adaptations. Which biome is this?',
            options: [
                { label: 'A', text: 'Tropical rainforest' },
                { label: 'B', text: 'Temperate forest' },
                { label: 'C', text: 'Desert' },
                { label: 'D', text: 'Tundra' },
                { label: 'E', text: 'Grassland' }
            ],
            correctAnswer: 'C',
            explanation: 'Desert biome: very dry (<25 cm rain), extreme day/night temperature swings, plants adapted to conserve water (cacti, succulents with water storage).',
            storyExplanation: 'The clue "water storage adaptations" screams desert! Cacti store water in their thick stems to survive long droughts. Low precipitation = dry = desert!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'Remember symbiosis types with "MCP": Mutualism (both benefit), Commensalism (one benefits, other neutral), Parasitism (one benefits, other harmed)',
            example: 'MCP helps you categorize any symbiotic relationship you encounter'
        },
        {
            technique: 'Phrase',
            description: 'Energy flow: "Energy flows ONE way (like water DOWN a waterfall), nutrients CYCLE (like a merry-go-round)"',
            example: 'Energy never returns, nutrients recycle infinitely'
        },
        {
            technique: 'Visual',
            description: 'Draw pyramids for energy: wide base (producers - lots), narrow top (apex predators - few). Always pyramid shape!',
            example: 'The 10% rule creates pyramid - can\'t be inverted'
        },
        {
            technique: 'Story',
            description: 'Carbon cycle: "Plants BREATHE IN CO₂ (photosynthesis), Everything BREATHES OUT CO₂ (respiration) - it\'s Earth\'s breathing!"',
            example: 'Day (plants photosynthesize) = Earth breathes in. Night (only respiration) = Earth breathes out'
        },
        {
            technique: 'Rhyme',
            description: '10% rule rhyme: "Ten percent moves up the chain, ninety percent goes down the drain!"',
            example: 'Only 10% of energy transfers to next level, 90% lost as heat'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Confusing food chains with food webs',
            correction: 'FOOD CHAIN = single linear path (A→B→C). FOOD WEB = interconnected chains showing ALL feeding relationships. Real ecosystems are food WEBS, not simple chains.',
            whyItMatters: 'Food webs show complexity - removing one species affects many others through multiple pathways, not just one chain'
        },
        {
            mistake: 'Thinking energy cycles like nutrients',
            correction: 'ENERGY flows ONE WAY (sun → producers → consumers → heat, lost forever). NUTRIENTS cycle (carbon, nitrogen, water reused infinitely). Different processes!',
            whyItMatters: 'This explains why ecosystems need constant sunlight (energy input) but not constant nutrient input (nutrients recycle)'
        },
        {
            mistake: 'Forgetting decomposers in nutrient cycles',
            correction: 'Decomposers (bacteria, fungi) are ESSENTIAL - they break down dead matter, releasing nutrients back to soil for plants. Without them, nutrients stay locked in dead bodies!',
            whyItMatters: 'Decomposers complete the cycle. Without them, nutrients wouldn\'t recycle, and life would stop'
        },
        {
            mistake: 'Thinking all symbiosis is mutualism',
            correction: 'Symbiosis = ANY close relationship. Three types: mutualism (both benefit), commensalism (one benefits, other unaffected), parasitism (one benefits, other harmed).',
            whyItMatters: 'Parasitism is symbiosis too! Not all relationships are win-win'
        },
        {
            mistake: 'Believing apex predators are "more evolved" or "better"',
            correction: 'Trophic level doesn\'t indicate evolutionary advancement. Bacteria and apex predators are equally "evolved" - just adapted to different niches. No organism is "higher" or "better."',
            whyItMatters: 'Evolution doesn\'t progress "upward" - it adapts organisms to their specific environments'
        }
    ],
    quickReference: [
        {
            title: 'Ecological Organization Levels',
            content: 'Individual → Population (one species) → Community (all species) → Ecosystem (community + environment) → Biome (regional) → Biosphere (global)',
            category: 'principle'
        },
        {
            title: 'Energy Flow (10% Rule)',
            content: 'Producers (100%) → Primary consumers (10%) → Secondary consumers (1%) → Tertiary consumers (0.1%)\nEnergy flows ONE WAY, decreases at each level',
            category: 'rule'
        },
        {
            title: 'Symbiosis Types',
            content: 'MUTUALISM (+/+): Both benefit (bees & flowers)\nCOMMENSALISM (+/0): One benefits, other unaffected (barnacles on whales)\nPARASITISM (+/-): One benefits, other harmed (ticks on deer)',
            category: 'principle'
        },
        {
            title: 'Key Nutrient Cycles',
            content: 'CARBON: Photosynthesis removes CO₂, respiration releases CO₂\nNITROGEN: Bacteria fix N₂ → usable forms, denitrification returns to atmosphere\nWATER: Evaporation → condensation → precipitation → runoff/infiltration',
            category: 'process'
        },
        {
            title: 'Trophic Levels',
            content: 'PRODUCERS: Make own food (plants, algae)\nPRIMARY CONSUMERS: Eat producers (herbivores)\nSECONDARY CONSUMERS: Eat primary consumers (carnivores/omnivores)\nTERTIARY CONSUMERS: Eat secondary consumers (apex predators)\nDECOMPOSERS: Break down dead matter (bacteria, fungi)',
            category: 'principle'
        }
    ],
    summary: [
        'Ecology studies interactions between organisms and their environment at multiple scales (organism → population → community → ecosystem → biome → biosphere)',
        'Energy flows ONE WAY through ecosystems: sun → producers → consumers → heat (10% transfers per level, explaining pyramid structure)',
        'Nutrients CYCLE through ecosystems: carbon, nitrogen, and water are endlessly recycled by biological and physical processes',
        'Food webs show complex feeding relationships - removing one species causes cascading effects through multiple pathways',
        'Symbiosis includes mutualism (both benefit), commensalism (one benefits), and parasitism (one benefits, other harmed)',
        'Decomposers are essential - they recycle nutrients from dead matter back to producers, completing nutrient cycles',
        'Biomes are determined by climate (temperature and precipitation) - similar climates produce similar ecosystems globally',
        'Human activities disrupt ecosystems: excess CO₂ (climate change), excess nitrogen (eutrophication), habitat destruction (biodiversity loss)',
        'Understanding ecology is essential for conservation, sustainable agriculture, predicting climate change impacts, and managing natural resources'
    ],
    selfAssessment: [
        'I can distinguish between populations, communities, and ecosystems',
        'I understand energy flow and can explain the 10% rule',
        'I can trace carbon and nitrogen through their biogeochemical cycles',
        'I can identify the three types of symbiosis and give examples',
        'I understand why decomposers are essential in ecosystems',
        'I can explain why food webs are more accurate than food chains',
        'I can predict effects of removing species from food webs (trophic cascades)',
        'I can apply ecological concepts to environmental problems (climate change, pollution, conservation)'
    ]
};
export default lesson;
//# sourceMappingURL=day-21.js.map
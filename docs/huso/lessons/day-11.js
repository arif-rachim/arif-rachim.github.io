const lesson = {
    day: 11,
    subject: 'earth-science',
    title: 'Water Cycle & Precipitation - Earth\'s Recycling System',
    emoji: '💧',
    learningGoal: 'Understand how water continuously cycles through Earth\'s systems and the processes that create different forms of precipitation',
    estimatedTime: 60,
    objectives: [
        'Describe the major processes in the water cycle (evaporation, condensation, precipitation, collection)',
        'Explain how clouds form and the different types of clouds',
        'Understand the mechanisms behind different precipitation types (rain, snow, sleet, hail)'
    ],
    discoveryStory: {
        title: 'Pierre Perrault and the Quantified Water Cycle',
        content: "For thousands of years, people wondered: Where does river water come from? Some thought underground rivers fed from the ocean. Others believed water magically appeared from mountains. In 1674, French scientist Pierre Perrault did something revolutionary - he MEASURED everything! He measured rainfall in the Seine River basin for 3 years, calculated the river's flow rate, and discovered something amazing: rainfall ALONE was 6 times more than enough to account for all the river's water! This proved rivers come from RAIN, not mysterious underground sources. But the bigger revelation: water goes in a CYCLE. Ocean → evaporation → clouds → rain → rivers → ocean → repeat! The same water molecules have been cycling for 4 billion years. The water you drink today was once drunk by dinosaurs, used by Cleopatra, frozen in glaciers, and floated in clouds! Earth has the SAME amount of water as it did millions of years ago - it just keeps recycling. About 97% is salty ocean water, only 3% is fresh, and most of that is frozen in ice caps. The tiny amount cycling through the atmosphere (0.001% of all water!) powers all weather and sustains all life!",
        emoji: '🌊'
    },
    keyTerms: [
        {
            term: 'Water Cycle',
            definition: 'The continuous movement of water between the atmosphere, land, and oceans through evaporation, condensation, precipitation, and collection',
            example: 'Ocean water evaporates → forms clouds → rains on mountains → flows in rivers → back to ocean'
        },
        {
            term: 'Evaporation',
            definition: 'The process of liquid water changing to water vapor (gas) due to heat energy',
            example: 'Puddles disappearing after rain, wet clothes drying on a clothesline'
        },
        {
            term: 'Condensation',
            definition: 'The process of water vapor changing to liquid water when cooled',
            example: 'Water droplets forming on a cold glass, fog forming on cool mornings'
        },
        {
            term: 'Precipitation',
            definition: 'Any form of water (liquid or solid) falling from clouds to Earth\'s surface',
            example: 'Rain, snow, sleet, hail, freezing rain'
        },
        {
            term: 'Humidity',
            definition: 'The amount of water vapor in the air; relative humidity is the percentage of maximum water vapor air can hold at that temperature',
            example: '80% humidity means air holds 80% of the maximum water it can hold at that temperature'
        },
        {
            term: 'Dew Point',
            definition: 'The temperature at which air becomes saturated and water vapor begins to condense',
            example: 'When temperature drops to dew point at night, dew forms on grass'
        }
    ],
    concepts: [
        {
            title: 'The Water Cycle: Earth\'s Greatest Recycling System',
            explanation: "Water constantly cycles through four main processes: (1) Evaporation/Transpiration (liquid → gas), (2) Condensation (gas → liquid in clouds), (3) Precipitation (water falls), (4) Collection (water gathers in oceans/lakes/groundwater).",
            analogy: {
                type: 'Conveyor Belt',
                description: '**EVAPORATION** (Loading dock): Sun heats ocean/lakes → water molecules gain energy → escape as vapor → rise into atmosphere\n\n**CONDENSATION** (Assembly line): Rising vapor cools → slows down → sticks together around dust particles → forms tiny cloud droplets\n\n**PRECIPITATION** (Delivery): Droplets combine and grow → become too heavy → fall as rain/snow\n\n**COLLECTION** (Storage): Water collects in oceans (97%), ice caps (2%), groundwater, lakes, rivers (1%) → cycle repeats!\n\nKey: The SAME water keeps cycling - no new water created, no water lost (closed system)!'
            },
            mindBlowingFacts: [
                'A single water molecule spends an average of 9 days in the atmosphere before precipitating!',
                'Earth has the SAME amount of water as it did 3 billion years ago - about 326 million cubic miles',
                'The Amazon rainforest recycles water 5-6 times before it reaches the ocean - "flying rivers" in the sky!',
                '90% of atmospheric moisture comes from ocean evaporation, only 10% from lakes/rivers/transpiration',
                'If all atmospheric water vapor condensed at once, it would cover Earth in just 1 inch of rain',
                'A large hurricane can evaporate 2 billion tons of water PER DAY from the ocean!',
                'Plants contribute through transpiration - a large oak tree releases 40,000 gallons of water per year!'
            ],
            whyYouCare: 'The water cycle purifies water (evaporation leaves salt/pollution behind), distributes fresh water globally, regulates climate, powers weather, enables life, and provides all drinking water. Understanding it explains droughts, floods, and why coastal vs inland climates differ!'
        },
        {
            title: 'Cloud Formation: When Invisible Becomes Visible',
            explanation: "Clouds form when rising air cools below its dew point, causing water vapor to condense on tiny particles (dust, salt, pollen) called condensation nuclei. The type of cloud depends on altitude and air movement.",
            analogy: {
                type: 'Breath on Cold Day',
                description: 'Your breath is always moist (water vapor - invisible). On a cold day, your warm breath hits cold air → cools instantly → water vapor condenses → you see your breath!\n\nSame with clouds:\n1. Warm moist air rises (from sun-heated ground)\n2. As it rises, it expands and COOLS (higher altitude = lower pressure = expansion = cooling)\n3. Eventually cools to dew point → vapor condenses on dust/salt particles → millions of tiny droplets → CLOUD!\n\n**Cloud types by altitude**:\n• HIGH (20,000+ ft): Cirrus (wispy, ice crystals)\n• MIDDLE (6,500-20,000 ft): Alto- clouds (Altostratus, Altocumulus)\n• LOW (0-6,500 ft): Stratus (layers), Cumulus (puffy)\n• VERTICAL: Cumulonimbus (thunderstorms - ground to 60,000 ft!)'
            },
            mindBlowingFacts: [
                'Clouds look white because water droplets scatter ALL colors of sunlight equally',
                'A typical cumulus cloud weighs 1.1 million pounds (500,000 kg) - same as 100 elephants!',
                'Cumulonimbus clouds can reach 60,000+ feet - higher than commercial jets fly!',
                'Fog is just a cloud touching the ground - same formation process',
                'Without condensation nuclei (dust particles), clouds wouldn\'t form - too-pure air stays as vapor!',
                'Airplane contrails are artificial clouds - hot jet exhaust adds moisture + particles',
                'Lenticular clouds form over mountains and look like UFOs - perfectly smooth lens shapes!'
            ],
            whyYouCare: 'Cloud types predict weather: Cumulus = fair weather, Cumulonimbus = storms, Stratus = overcast/drizzle, Cirrus = weather change coming. Learning cloud types makes you a better weather forecaster than many apps!'
        },
        {
            title: 'Precipitation Types: How Rain, Snow, Sleet, and Hail Form',
            explanation: "Precipitation type depends on temperature layers the falling droplet passes through. All precipitation starts as ice crystals in clouds!",
            analogy: {
                type: 'Journey Through Temperature Layers',
                description: '**RAIN** (Warm all the way):\nCloud: Ice crystals form → Fall through warm air (>0°C whole way) → Melt to liquid → Rain\n\n**SNOW** (Cold all the way):\nCloud: Ice crystals form → Fall through cold air (<0°C whole way) → Stay frozen → Snow\n\n**SLEET** (Warm-Cold sandwich):\nCloud: Ice → Falls through warm layer (melts to rain) → Falls through cold layer near ground (refreezes to ice pellets) → Sleet\n\n**FREEZING RAIN** (Barely warm, then cold):\nCloud: Ice → Falls through barely warm layer (melts) → Hits cold surface (freezes instantly on contact) → Ice coating\n\n**HAIL** (Thunderstorm yo-yo):\nCloud: Droplet → Updraft lifts it → Freezes → Falls → Updraft lifts again → Adds ice layer → Repeats many times → Large ice ball falls → Hail'
            },
            mindBlowingFacts: [
                'The largest hailstone recorded was 8 inches diameter, 1.9 pounds (South Dakota, 2010) - bigger than a softball!',
                'Hailstones have layers like onions - each layer = one trip up and down in the cloud!',
                'Snowflakes are never identical - each has unique crystal structure based on temperature/humidity',
                'One snowflake contains about 10 quintillion (10^19) water molecules!',
                'Freezing rain is MORE dangerous than sleet - creates invisible ice on roads ("black ice")',
                'It can be "too cold to snow" - at -40°F air holds so little moisture that heavy snow is rare',
                'Raindrops are NOT teardrop-shaped - they\'re round (small) or hamburger-bun shaped (large)!'
            ],
            whyYouCare: 'Knowing precipitation types helps you: prepare for weather (sleet = ice roads, freezing rain = power outages), understand storm damage (hail destroys crops), appreciate snow conditions (skiing!), and stay safe (avoid travel in ice storms)!'
        },
        {
            title: 'Humidity & Dew Point: The Invisible Moisture',
            explanation: "Humidity measures water vapor in air. Warm air can hold MORE water than cold air. Relative humidity = (actual vapor / maximum vapor) × 100%. When temperature drops to dew point, air is saturated (100% humidity) and condensation begins.",
            analogy: {
                type: 'Sponge Holding Water',
                description: '**AIR** = Sponge\n**WATER VAPOR** = Water in sponge\n**TEMPERATURE** = Sponge size\n\n• Warm air = BIG sponge (holds lots of water)\n• Cold air = SMALL sponge (holds little water)\n\n**Example**:\nAt 30°C, air can hold max 30g water/m³ (big sponge)\nAt 10°C, air can hold max 9g water/m³ (small sponge)\n\nIf air at 30°C has 15g water/m³:\n• Relative humidity = 15/30 = 50%\n\nIf that air cools to 10°C (sponge shrinks!):\n• Can only hold 9g, but has 15g\n• Excess 6g must condense out → dew, fog, or clouds!\n• This is why dew forms at night (temperature drops to dew point)'
            },
            mindBlowingFacts: [
                '100% humidity does NOT mean air is all water - it just means air is saturated for that temperature',
                'You can have 100% humidity in a desert (just means air is saturated - might still be very little total water)',
                'Humid heat feels worse because your sweat can\'t evaporate (air already full of moisture)',
                'Dew doesn\'t "fall" - it forms directly on surfaces when they cool below dew point',
                'Frost forms when dew point is below freezing - water vapor goes directly to ice (skips liquid!)',
                'Tropical rainforests maintain 90%+ humidity year-round',
                'Your body can\'t cool itself above ~95°F with 100% humidity - heat stroke risk!'
            ],
            whyYouCare: 'Humidity affects: comfort (muggy vs dry heat), weather (high humidity → more chance of rain), health (mold growth, breathing), airplane flight (humid air is less dense), and even how food cooks!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Why Does Dew Form on Grass in the Morning?',
            problemSetup: 'On a clear summer night, temperature drops from 75°F to 60°F. In the morning, grass is covered in dew drops. Explain why using the water cycle and dew point concept.',
            steps: [
                {
                    step: 1,
                    description: 'Understand initial conditions',
                    reasoning: 'During the day: warm air (75°F) holds lots of water vapor. The air might be at 60% humidity - not saturated, so no condensation.'
                },
                {
                    step: 2,
                    description: 'What happens at night',
                    reasoning: 'Clear night → no cloud blanket → heat radiates to space → ground and grass cool down. Air touching cold grass also cools.'
                },
                {
                    step: 3,
                    description: 'Reaching dew point',
                    reasoning: 'As temperature drops to 60°F, the air\'s capacity to hold water vapor DECREASES. If 60°F is the dew point, air becomes 100% saturated - can\'t hold all its vapor anymore.'
                },
                {
                    step: 4,
                    description: 'Condensation occurs',
                    reasoning: 'Excess water vapor condenses on the cold grass surface (condensation - gas to liquid). Result: dew drops! This is mini-water-cycle condensation happening at ground level.'
                }
            ],
            solution: 'Dew forms because cooling air reaches its dew point (saturation), and water vapor condenses on cool grass surfaces. It\'s the same process as cloud formation, just happening on the ground!',
            realWorldApplication: 'This explains why: car windshields get foggy (inside air\'s dew point reached), glasses fog up when entering warm humid areas, and why desert nomads collect dew for drinking water!'
        },
        {
            scenario: 'Sleet vs Freezing Rain - Which is More Dangerous?',
            problemSetup: 'Weather forecast shows two scenarios: (A) Temperature profile: 30°F ground, 35°F layer at 3000 ft, 32°F above. (B) Temperature profile: 28°F ground, 40°F layer at 3000 ft, 32°F above. Which produces sleet, which produces freezing rain, and which is more dangerous for driving?',
            steps: [
                {
                    step: 1,
                    description: 'Analyze Scenario A',
                    reasoning: 'Precipitation falls as: Ice → through 35°F layer (barely warm, melts) → through 30°F near ground (cold, but short distance - may not refreeze completely) → Likely produces MIX of sleet and freezing rain'
                },
                {
                    step: 2,
                    description: 'Analyze Scenario B',
                    reasoning: 'Precipitation falls as: Ice → through 40°F layer (warm, fully melts to rain) → through 28°F near ground (very cold, refreezes to ice pellets) → SLEET (ice pellets)'
                },
                {
                    step: 3,
                    description: 'Determine which is more dangerous',
                    reasoning: 'Scenario A (freezing rain) is MORE dangerous! Reason: Liquid rain freezes ON CONTACT with cold roads/trees/power lines → invisible "black ice", ice-coated everything, power outages.\n\nSleet (Scenario B) is visible ice pellets - easier to see, bounces off surfaces, less likely to coat everything.'
                }
            ],
            solution: 'Scenario A produces freezing rain (most dangerous - ice coating). Scenario B produces sleet (less dangerous - ice pellets). Freezing rain causes major ice storms with power outages and impassable roads!',
            realWorldApplication: 'Meteorologists issue different warnings: Sleet Advisory (drive carefully) vs Ice Storm Warning (stay home!). Major ice storms can shut down entire cities for days and collapse power lines under ice weight.'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Trace a water molecule\'s journey through a complete water cycle, starting from the ocean. Include all four main processes (evaporation, condensation, precipitation, collection) and explain the energy changes at each step.',
            hints: [
                'Evaporation requires energy input (sun heats water)',
                'Rising air cools as it expands (loses energy)',
                'Condensation releases energy (gas to liquid is exothermic)',
                'Where does the water molecule end up? Can it return to ocean or get stuck?'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p2',
            question: 'A city wants to reduce cloud seeding to make rain. Explain: (a) What is cloud seeding? (b) How does it work based on cloud formation principles? (c) Why might it not work on all cloud types?',
            hints: [
                'Clouds need condensation nuclei (dust, salt particles)',
                'Cloud seeding adds particles (often silver iodide)',
                'Not all clouds have enough moisture to produce rain',
                'Some clouds are too cold, some too warm'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which process in the water cycle changes water vapor to liquid water?',
            options: [
                { label: 'A', text: 'Evaporation' },
                { label: 'B', text: 'Condensation' },
                { label: 'C', text: 'Precipitation' },
                { label: 'D', text: 'Transpiration' },
                { label: 'E', text: 'Collection' }
            ],
            correctAnswer: 'B',
            explanation: 'Condensation is the process where water vapor (gas) changes to liquid water when cooled.',
            storyExplanation: 'Think of a cold glass on a hot day - water vapor in air touches the cold glass, cools down, and condenses into droplets. Same process forms clouds and dew!'
        },
        {
            id: 'q2',
            question: 'Why do clouds form when air rises?',
            options: [
                { label: 'A', text: 'Rising air gets hotter' },
                { label: 'B', text: 'Rising air expands and cools, causing condensation' },
                { label: 'C', text: 'Rising air picks up more moisture' },
                { label: 'D', text: 'Rising air compresses and heats' },
                { label: 'E', text: 'Clouds are made of dust, not water' }
            ],
            correctAnswer: 'B',
            explanation: 'Rising air expands (lower pressure at altitude), and expansion causes cooling. When air cools to its dew point, water vapor condenses into cloud droplets.',
            storyExplanation: 'It\'s like a can of compressed air - when you spray it, the gas expands and gets COLD! Same with rising air - it expands, cools, and eventually gets cold enough for vapor to condense into visible clouds.'
        },
        {
            id: 'q3',
            question: 'What is the main difference between sleet and freezing rain?',
            options: [
                { label: 'A', text: 'Sleet is frozen rain; freezing rain is liquid rain' },
                { label: 'B', text: 'Sleet freezes in the air (ice pellets); freezing rain freezes on contact with surfaces' },
                { label: 'C', text: 'Sleet only occurs in winter' },
                { label: 'D', text: 'They are the same thing' },
                { label: 'E', text: 'Freezing rain is colder than sleet' }
            ],
            correctAnswer: 'B',
            explanation: 'Sleet are ice pellets that froze while falling through cold air. Freezing rain is liquid rain that freezes immediately upon hitting cold surfaces.',
            storyExplanation: 'Sleet bounces when it hits - it\'s already frozen ice pellets. Freezing rain is sneaky liquid that freezes ON CONTACT, coating everything in ice - way more dangerous for roads and power lines!'
        },
        {
            id: 'q4',
            question: 'What percentage of Earth\'s water is fresh water (not salty)?',
            options: [
                { label: 'A', text: '50%' },
                { label: 'B', text: '25%' },
                { label: 'C', text: '10%' },
                { label: 'D', text: '3%' },
                { label: 'E', text: '0.5%' }
            ],
            correctAnswer: 'D',
            explanation: 'Only about 3% of Earth\'s water is fresh water, and most of that (about 2%) is frozen in ice caps and glaciers!',
            storyExplanation: '97% is salty oceans. Of the 3% that\'s fresh, 2% is frozen solid in glaciers. That leaves just 1% as liquid fresh water - and we depend on this tiny fraction for all drinking water, agriculture, and industry!'
        },
        {
            id: 'q5',
            question: 'Why does humid air feel hotter than dry air at the same temperature?',
            options: [
                { label: 'A', text: 'Humid air is actually hotter' },
                { label: 'B', text: 'Humid air prevents sweat from evaporating, reducing cooling' },
                { label: 'C', text: 'Humid air contains more oxygen' },
                { label: 'D', text: 'Humid air moves faster' },
                { label: 'E', text: 'It\'s a psychological effect only' }
            ],
            correctAnswer: 'B',
            explanation: 'Your body cools by evaporating sweat. High humidity means air is already nearly saturated with water vapor, so sweat can\'t evaporate easily - you can\'t cool down efficiently!',
            storyExplanation: 'Sweat works by evaporating (liquid to gas takes heat from your skin). But if air is already full of moisture (high humidity), there\'s no "room" for your sweat to evaporate. You stay hot and sticky - that\'s why 90°F with 80% humidity feels worse than 100°F with 20% humidity!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'Water cycle steps: "ECPC" - Evaporation, Condensation, Precipitation, Collection',
            example: 'Remember the four main processes in order'
        },
        {
            technique: 'Rhyme',
            description: 'Precipitation types: "Cold all through makes snow for you, warm then cold makes sleet unfold, warm all way makes rain all day, freeze on ground makes danger sound!"',
            example: 'Remember temperature profiles for different precipitation'
        },
        {
            technique: 'Visual',
            description: 'Dew point: When temperature drops to dew point, think "air\'s sponge shrinks and water squeezes out!"',
            example: 'Visualize air as a sponge that changes size with temperature'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Thinking 100% humidity means air is all water',
            correction: '100% humidity means air is SATURATED for that temperature - it holds the maximum water vapor it can at that temp. It doesn\'t mean air is 100% water!',
            whyItMatters: 'You can have 100% humidity in a desert (air is saturated but total moisture is low). Or 50% humidity in tropics (more total water than 100% desert humidity!)'
        },
        {
            mistake: 'Confusing evaporation and condensation',
            correction: 'Evaporation = liquid to GAS (requires heat, like puddles drying). Condensation = GAS to liquid (releases heat, like dew forming). They\'re opposites!',
            whyItMatters: 'Mixing these up means misunderstanding the entire water cycle and cloud formation!'
        },
        {
            mistake: 'Thinking dew "falls" like rain',
            correction: 'Dew doesn\'t fall - it FORMS directly on surfaces when they cool below the dew point. Water vapor in air condenses on the cool surface.',
            whyItMatters: 'This is why dew forms on grass/cars (they cool fastest) but not on ground under trees (leaves block radiative cooling).'
        }
    ],
    quickReference: [
        {
            title: 'Water Cycle Processes',
            content: 'EVAPORATION: Liquid → gas (sun heats water)\nCONDENSATION: Gas → liquid (cooling air, forms clouds)\nPRECIPITATION: Water falls (rain, snow, sleet, hail)\nCOLLECTION: Water gathers (oceans, lakes, groundwater)',
            category: 'process'
        },
        {
            title: 'Precipitation Types',
            content: 'RAIN: Warm air all the way down\nSNOW: Cold air all the way down\nSLEET: Warm layer → cold layer (refreezes in air)\nFREEZING RAIN: Warm layer → cold ground (freezes on contact)\nHAIL: Thunderstorm updrafts cycle droplets up/down',
            category: 'rule'
        },
        {
            title: 'Cloud Types by Altitude',
            content: 'HIGH (20,000+ ft): Cirrus (wispy, ice)\nMIDDLE (6,500-20,000 ft): Alto- prefix\nLOW (0-6,500 ft): Stratus (layers), Cumulus (puffy)\nVERTICAL: Cumulonimbus (thunderstorms)',
            category: 'rule'
        }
    ],
    summary: [
        'The water cycle continuously moves water through evaporation → condensation → precipitation → collection',
        'Clouds form when rising air cools to its dew point, causing water vapor to condense on condensation nuclei',
        'Precipitation type depends on temperature layers: warm all way = rain, cold all way = snow, warm-then-cold = sleet',
        'Humidity measures water vapor in air; warm air holds more moisture than cold air',
        'Dew point is the temperature at which air becomes saturated and condensation begins',
        'Earth has the same amount of water as billions of years ago - it just keeps cycling through different forms and locations'
    ],
    selfAssessment: [
        'I can describe the four main processes in the water cycle',
        'I understand why clouds form when air rises and cools',
        'I can explain the difference between sleet, freezing rain, snow, and hail based on temperature profiles',
        'I know what humidity and dew point mean and how they relate to condensation',
        'I understand why only 3% of Earth\'s water is fresh and why water conservation matters',
        'I can predict weather based on cloud types (cumulus, stratus, cirrus, cumulonimbus)'
    ]
};
export default lesson;
//# sourceMappingURL=day-11.js.map
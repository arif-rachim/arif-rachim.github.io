const lesson = {
    day: 7,
    subject: 'earth-science',
    title: 'Weather Patterns & Fronts - Nature\'s Battlegrounds',
    emoji: '⛈️',
    learningGoal: 'Understand how air masses interact to create weather fronts and predict weather changes from meteorological patterns',
    estimatedTime: 60,
    objectives: [
        'Describe the characteristics of different air masses and how they form',
        'Identify and explain the four types of weather fronts',
        'Predict weather changes based on approaching fronts and pressure systems'
    ],
    discoveryStory: {
        title: 'The Norwegian Meteorology Revolution',
        content: "During World War I, Norway was cut off from weather reports. In 1918, physicist Vilhelm Bjerknes had a brilliant idea: treat the atmosphere like a BATTLEGROUND where air masses collide! He and his team (the 'Bergen School') noticed patterns: cold air advancing like an army pushing warm air up creates clouds and rain. They coined the term 'weather FRONT' - borrowing military terminology! Their insight: weather doesn't happen randomly - it's the result of AIR MASS COLLISIONS. They mapped out four types of fronts (cold, warm, stationary, occluded) and created the symbols we still use on weather maps today. This revolutionized forecasting! Before Bjerknes, weather prediction was guesswork. After, meteorologists could predict storms days in advance. Today, weather satellites and computer models build on his foundation, but the basic idea remains: weather is air masses at war!",
        emoji: '🌪️'
    },
    keyTerms: [
        {
            term: 'Air Mass',
            definition: 'A large body of air with similar temperature and humidity throughout',
            example: 'A maritime tropical air mass forms over warm oceans - it\'s warm and humid, bringing muggy weather to coastal areas'
        },
        {
            term: 'Weather Front',
            definition: 'The boundary where two different air masses meet',
            example: 'When cold air from Canada meets warm air from the Gulf, a front forms - often creating storms along the boundary'
        },
        {
            term: 'Cold Front',
            definition: 'A front where cold air advances and pushes warm air up rapidly',
            example: 'Cold fronts bring sudden temperature drops, heavy rain, and sometimes thunderstorms'
        },
        {
            term: 'Warm Front',
            definition: 'A front where warm air advances and gradually rises over cold air',
            example: 'Warm fronts bring steady light rain for hours, followed by warmer temperatures'
        },
        {
            term: 'High Pressure System',
            definition: 'An area where air sinks, creating clear, dry weather',
            example: 'High pressure = happy weather! Clear skies, light winds, no rain'
        },
        {
            term: 'Low Pressure System',
            definition: 'An area where air rises, creating clouds and precipitation',
            example: 'Low pressure = lousy weather! Clouds, rain, storms, strong winds'
        }
    ],
    concepts: [
        {
            title: 'Air Masses: Weather\'s Building Blocks',
            explanation: "Air masses form when air sits over a region long enough to take on its characteristics. Named by source: maritime (ocean) vs continental (land), and tropical (warm) vs polar/arctic (cold).",
            analogy: {
                type: 'Personality Types',
                description: 'Air masses have personalities based on where they grew up:\n• **mT (maritime Tropical)**: Grew up over warm ocean → warm, humid, brings muggy weather\n• **cT (continental Tropical)**: Grew up over hot desert → hot, dry, brings heat waves\n• **mP (maritime Polar)**: Grew up over cold ocean → cool, humid, brings rain\n• **cP (continental Polar)**: Grew up over cold land → cold, dry, brings winter cold snaps\n\nJust like people, air masses carry their "upbringing" with them when they travel!'
            },
            mindBlowingFacts: [
                'A single air mass can be larger than the entire United States!',
                'The Sahara Desert can send continental Tropical air masses all the way to Europe, bringing heat waves',
                'Maritime Tropical air from the Gulf of Mexico fuels most U.S. thunderstorms in summer',
                'Continental Polar air from Canada can plunge U.S. temperatures 20-30°F in hours',
                'Air masses can travel thousands of miles but gradually change character as they move over different surfaces'
            ],
            whyYouCare: 'Understanding air masses explains why Florida is humid year-round (mT dominates), why Arizona is dry (cT air), why Seattle is rainy (mP air from Pacific), and why the Midwest has such extreme seasons (battles between cP and mT air)!'
        },
        {
            title: 'The Four Types of Fronts',
            explanation: "When different air masses collide, they don't mix - they create a boundary called a front. The type of front depends on which air mass is advancing and how fast.",
            analogy: {
                type: 'Battle Formations',
                description: '**COLD FRONT** (Fast Attack):\nCold army charges forward, pushing warm air up FAST → steep slope → heavy rain, thunderstorms, quick passage\nSymbol: Blue triangles pointing direction of movement\n\n**WARM FRONT** (Slow Advance):\nWarm army slowly climbs over cold air → gentle slope → light steady rain for hours, gradual warming\nSymbol: Red semicircles pointing direction of movement\n\n**STATIONARY FRONT** (Stalemate):\nNeither side wins, armies face off → rain lingers for days\nSymbol: Alternating blue triangles and red semicircles\n\n**OCCLUDED FRONT** (Pincered):\nFast cold front catches slower warm front, lifts it off ground → complex weather\nSymbol: Purple triangles and semicircles together'
            },
            mindBlowingFacts: [
                'Cold fronts move 2x faster than warm fronts - that\'s why storms are often more intense but shorter!',
                'The steeper the front, the more violent the weather - cold fronts can have 50:1 slopes (50 miles horizontal for every 1 mile vertical)',
                'A stationary front once sat over Texas for 40 days, dropping 40+ inches of rain',
                'Occluded fronts often form the low-pressure centers of major storm systems',
                'Fronts can stretch for 1000+ miles but are only 50-200 miles wide'
            ],
            whyYouCare: 'Front symbols on weather maps predict tomorrow\'s weather: cold front = sudden storms then clearing, warm front = all-day drizzle then warm-up, stationary front = rain for days. Learning to read weather maps makes you your own meteorologist!'
        },
        {
            title: 'High vs Low Pressure: Weather\'s Yin and Yang',
            explanation: "Air pressure patterns drive weather. High pressure (H) = sinking air = clear skies. Low pressure (L) = rising air = clouds/storms. Wind flows from high to low pressure.",
            analogy: {
                type: 'Mountain and Valley',
                description: '**HIGH PRESSURE (H) - Mountain of Air**:\nAir sinks down the "mountain" → compresses and warms → evaporates clouds → clear, calm weather\nAir spirals OUT clockwise (Northern Hemisphere) → light winds\n\n**LOW PRESSURE (L) - Valley of Air**:\nAir rushes in from all sides and rises up the "valley" → expands and cools → forms clouds → rain/storms\nAir spirals IN counter-clockwise (Northern Hemisphere) → strong winds\n\nWind is like water flowing downhill from high pressure to low pressure!'
            },
            mindBlowingFacts: [
                'Hurricanes are extreme low-pressure systems - the lower the pressure, the stronger the storm!',
                'The lowest pressure ever recorded was 870 mb in Typhoon Tip (1979) - winds 190 mph!',
                'High pressure systems can be 1000+ miles across and last for weeks (like summer heat domes)',
                'Air flows clockwise around highs and counter-clockwise around lows in Northern Hemisphere (reversed in Southern Hemisphere!)',
                'Pressure differences of just 1-2% can drive 100+ mph winds in hurricanes'
            ],
            whyYouCare: 'When you hear "high pressure building in," pack sunscreen! "Low pressure approaching" means grab an umbrella. Understanding pressure systems lets you predict weather better than many TV forecasters!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Reading a Weather Map',
            problemSetup: 'A weather map shows a cold front approaching your city from the west. Currently it\'s 75°F, partly cloudy, with southerly winds. What weather changes should you expect in the next 12 hours?',
            steps: [
                {
                    step: 1,
                    description: 'Identify current conditions',
                    reasoning: 'Warm temperature (75°F), southerly winds (from south) = warm air mass currently overhead. Partly cloudy = stable for now.'
                },
                {
                    step: 2,
                    description: 'Understand cold front behavior',
                    reasoning: 'Cold fronts advance quickly, push warm air up sharply. This creates: (1) rapid temperature drop, (2) sudden storms, (3) clearing after passage, (4) wind shift'
                },
                {
                    step: 3,
                    description: 'Predict sequence of events',
                    reasoning: 'BEFORE front: Increasing clouds, winds pick up from south\nDURING front passage: Heavy rain/thunderstorms (brief but intense), winds shift west/northwest\nAFTER front: Rapid clearing, temperature drops 15-25°F, sunny and cooler'
                }
            ],
            solution: 'Expect: thickening clouds → possible thunderstorms (intense but brief) → sudden temperature drop to 50-60°F → clearing skies with northwest winds. Pack a jacket!',
            realWorldApplication: 'This is exactly how meteorologists forecast! Cold front approaching = issue thunderstorm warnings, schedule outdoor events for AFTER front passes (clear and cool), warn about wind shifts for aviation.'
        },
        {
            scenario: 'Air Mass Source Prediction',
            problemSetup: 'In July, Miami has temperature 88°F with 80% humidity. Phoenix has temperature 110°F with 15% humidity. What type of air mass dominates each city?',
            steps: [
                {
                    step: 1,
                    description: 'Analyze Miami conditions',
                    reasoning: 'Hot AND humid = warm + moist. Miami is coastal (near ocean). Conclusion: Maritime Tropical (mT) air mass from Gulf of Mexico or Atlantic'
                },
                {
                    step: 2,
                    description: 'Analyze Phoenix conditions',
                    reasoning: 'Extremely hot BUT very dry = warm + dry. Phoenix is inland desert. Conclusion: Continental Tropical (cT) air mass from desert Southwest'
                },
                {
                    step: 3,
                    description: 'Explain why',
                    reasoning: 'Miami: mT air forms over warm ocean → absorbs moisture → brings heat + humidity\nPhoenix: cT air forms over hot dry land → no moisture source → brings heat + dryness'
                }
            ],
            solution: 'Miami = Maritime Tropical (mT) air mass. Phoenix = Continental Tropical (cT) air mass. Same temperature, totally different humidity!',
            realWorldApplication: 'This explains why "dry heat" (Phoenix) feels more tolerable than "humid heat" (Miami) at the same temperature. Your sweat evaporates in dry air (cooling you) but not in humid air (miserable!).'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'A warm front is approaching from the south. Currently it\'s 40°F and sunny. Describe the weather changes you would expect: (a) 12 hours before front arrives, (b) during front passage, (c) after front passes.',
            hints: [
                'Warm fronts have gentle slopes - warm air gradually rises over cold',
                'This creates widespread light rain for many hours',
                'After passage, what kind of air mass is overhead?'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p2',
            question: 'Explain why high-pressure systems are associated with clear weather while low-pressure systems bring clouds and rain. Use the concept of rising vs sinking air in your answer.',
            hints: [
                'What happens to air temperature when it rises? When it sinks?',
                'How does temperature change affect air\'s ability to hold moisture?',
                'Cool air can hold LESS moisture than warm air'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which air mass would be warm and humid?',
            options: [
                { label: 'A', text: 'Continental Polar (cP)' },
                { label: 'B', text: 'Continental Tropical (cT)' },
                { label: 'C', text: 'Maritime Polar (mP)' },
                { label: 'D', text: 'Maritime Tropical (mT)' },
                { label: 'E', text: 'Continental Arctic (cA)' }
            ],
            correctAnswer: 'D',
            explanation: 'Maritime Tropical (mT) forms over warm oceans, making it both warm and humid.',
            storyExplanation: 'Think of it like growing up in Hawaii (warm ocean) - you\'d be used to warmth and moisture! Maritime Tropical air masses bring that tropical feel to anywhere they travel.'
        },
        {
            id: 'q2',
            question: 'What type of front is associated with sudden thunderstorms followed by rapid clearing?',
            options: [
                { label: 'A', text: 'Warm front' },
                { label: 'B', text: 'Cold front' },
                { label: 'C', text: 'Stationary front' },
                { label: 'D', text: 'Occluded front' },
                { label: 'E', text: 'No front needed' }
            ],
            correctAnswer: 'B',
            explanation: 'Cold fronts move fast and push warm air up sharply, creating intense but brief storms, followed by clearing as cold air arrives.',
            storyExplanation: 'Cold fronts are like a fast-moving broom sweeping through - they push warm air up violently (thunderstorms!), then sweep past leaving cold, clear air behind. Quick but dramatic!'
        },
        {
            id: 'q3',
            question: 'Which statement about high and low pressure systems is TRUE?',
            options: [
                { label: 'A', text: 'High pressure causes clouds and rain' },
                { label: 'B', text: 'Low pressure causes clear, calm weather' },
                { label: 'C', text: 'Air sinks in low pressure systems' },
                { label: 'D', text: 'Air rises in low pressure systems, causing clouds' },
                { label: 'E', text: 'Pressure systems don\'t affect weather' }
            ],
            correctAnswer: 'D',
            explanation: 'In low pressure systems, air converges and rises. Rising air expands, cools, and forms clouds - bringing rain.',
            storyExplanation: 'Think of low pressure as a vacuum cleaner - it sucks air in from all sides. The air has nowhere to go but UP! As it rises and cools, moisture condenses into clouds and rain.'
        },
        {
            id: 'q4',
            question: 'Wind flows from ____ to ____.',
            options: [
                { label: 'A', text: 'Low pressure to high pressure' },
                { label: 'B', text: 'High pressure to low pressure' },
                { label: 'C', text: 'East to west always' },
                { label: 'D', text: 'Cold regions to warm regions' },
                { label: 'E', text: 'There is no pattern' }
            ],
            correctAnswer: 'B',
            explanation: 'Wind flows from areas of high pressure to areas of low pressure, like water flowing downhill.',
            storyExplanation: 'Imagine pressure as hills and valleys. Wind flows "downhill" from high pressure (hilltop) to low pressure (valley). Nature always tries to balance things out!'
        },
        {
            id: 'q5',
            question: 'A stationary front is characterized by:',
            options: [
                { label: 'A', text: 'Rapid movement bringing quick weather changes' },
                { label: 'B', text: 'Two air masses meeting with neither advancing' },
                { label: 'C', text: 'Clear skies and calm winds' },
                { label: 'D', text: 'Only occurring over oceans' },
                { label: 'E', text: 'Extreme cold temperatures' }
            ],
            correctAnswer: 'B',
            explanation: 'A stationary front occurs when two air masses meet but neither is strong enough to push the other out of the way.',
            storyExplanation: 'It\'s like two armies facing off with neither winning - the battle line doesn\'t move! This often brings days of cloudy, rainy weather as the front just sits there.'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'Air mass types: "mT = muggy Terrible, cP = cold Popsicle" - Maritime Tropical is muggy, Continental Polar is freezing!',
            example: 'Quick way to remember temperature and moisture characteristics'
        },
        {
            technique: 'Visual',
            description: 'Front symbols: Blue TRIANGLES (like ice crystals) = cold front, Red SEMICIRCLES (like rising sun) = warm front',
            example: 'The colors and shapes hint at which air mass is advancing'
        },
        {
            technique: 'Rhyme',
            description: '"High and dry, low and wet - this is weather\'s safest bet!"',
            example: 'High pressure = clear/dry, Low pressure = cloudy/rainy'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Confusing which front brings which weather',
            correction: 'COLD front = sudden heavy rain then quick clearing. WARM front = long-lasting light rain then gradual warming. Think: cold fronts are fast and dramatic, warm fronts are slow and steady.',
            whyItMatters: 'If you see a warm front approaching, you need an umbrella for HOURS. Cold front? Just wait 30 minutes and it\'ll pass!'
        },
        {
            mistake: 'Thinking warm fronts only bring warm weather',
            correction: 'Warm fronts bring rain FIRST (as warm air rises over cold), THEN warmer temperatures after the front passes. You get rain before you get warmth!',
            whyItMatters: 'A "warm front" doesn\'t mean immediate warm weather - it means gradual transition from cold→rainy→warm over 12-24 hours.'
        },
        {
            mistake: 'Assuming air masses mix when they meet',
            correction: 'Air masses DON\'T mix! They maintain their characteristics and create a sharp boundary (front). Cold air stays cold, warm air stays warm - they just collide and create weather.',
            whyItMatters: 'This is why fronts exist - if air masses mixed freely, we\'d just have gradual transitions, no dramatic weather changes!'
        }
    ],
    quickReference: [
        {
            title: 'Air Mass Types',
            content: 'mT (maritime Tropical): Warm & humid\ncT (continental Tropical): Hot & dry\nmP (maritime Polar): Cool & humid\ncP (continental Polar): Cold & dry',
            category: 'rule'
        },
        {
            title: 'Front Types & Weather',
            content: 'COLD: Fast-moving, heavy rain/storms, quick clearing, temp drops\nWARM: Slow-moving, steady light rain, gradual warming\nSTATIONARY: Neither moves, prolonged rain\nOCCLUDED: Cold catches warm, complex weather',
            category: 'rule'
        },
        {
            title: 'Pressure Systems',
            content: 'HIGH (H): Sinking air → clear, calm, dry weather\nLOW (L): Rising air → clouds, rain, storms, wind\nWind flows: High → Low',
            category: 'principle'
        }
    ],
    summary: [
        'Air masses are large bodies of air with uniform temperature and humidity, classified by source region (maritime/continental, tropical/polar)',
        'Weather fronts form where different air masses collide; the type of front depends on which air mass is advancing and how fast',
        'Cold fronts bring sudden heavy weather then rapid clearing; warm fronts bring gradual light rain then warming',
        'High pressure systems feature sinking air, creating clear dry weather; low pressure systems feature rising air, creating clouds and precipitation',
        'Wind flows from high pressure to low pressure, and air spirals clockwise around highs, counter-clockwise around lows (Northern Hemisphere)',
        'Reading weather maps with front symbols and pressure systems allows prediction of weather changes 12-48 hours in advance'
    ],
    selfAssessment: [
        'I can identify the four types of air masses and describe their characteristics',
        'I understand how cold fronts and warm fronts differ in movement and weather effects',
        'I can explain why high pressure brings clear weather and low pressure brings rain',
        'I can read weather map symbols for fronts and pressure systems',
        'I can predict general weather changes when a front approaches my location'
    ]
};
export default lesson;
//# sourceMappingURL=day-07.js.map
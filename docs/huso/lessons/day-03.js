const lesson = {
    day: 3,
    subject: 'earth-science',
    title: 'Earth\'s Atmosphere - Our Invisible Shield',
    emoji: '🌍',
    learningGoal: 'Discover the layers of Earth\'s atmosphere and understand how this invisible blanket protects life on our planet',
    estimatedTime: 60,
    objectives: [
        'Identify and describe the five main layers of Earth\'s atmosphere',
        'Explain the composition of the atmosphere and why each gas is important',
        'Understand how the atmosphere protects Earth and makes life possible'
    ],
    discoveryStory: {
        title: 'The Discovery of the Stratosphere - A Balloon Adventure',
        content: "Imagine it's 1902, and French meteorologist Léon Teisserenc de Bort has been launching weather balloons for YEARS, expecting temperature to keep dropping as they rise. But something weird keeps happening - at about 11 kilometers up, the temperature STOPS falling! In fact, it starts getting WARMER again! This made no sense! Everyone thought the atmosphere was just one uniform layer getting colder and colder. After launching over 200 balloons and confirming his crazy findings, he announced: \"There are TWO layers!\" He named the lower layer the TROPOSPHERE ('turning sphere' where weather happens) and the upper layer the STRATOSPHERE ('layered sphere'). Scientists mocked him - until they sent their own balloons and found he was RIGHT! Today we know there are FIVE layers, each with its own personality. The stratosphere even has a secret weapon - the OZONE LAYER - that shields us from deadly UV radiation. Thanks to his stubborn balloon experiments, we discovered our planet has layers like an onion!",
        emoji: '🎈'
    },
    keyTerms: [
        {
            term: 'Atmosphere',
            definition: 'The layer of gases surrounding Earth, held in place by gravity',
            example: 'Earth\'s atmosphere is like a protective blanket - without it, Earth would be a frozen, lifeless rock like the Moon'
        },
        {
            term: 'Troposphere',
            definition: 'The lowest atmospheric layer (0-12 km) where all weather occurs and where we live',
            example: 'Every cloud you\'ve ever seen, every storm, every rainbow - all happen in the troposphere!'
        },
        {
            term: 'Stratosphere',
            definition: 'The atmospheric layer above the troposphere (12-50 km) containing the ozone layer',
            example: 'Commercial airplanes fly in the lower stratosphere because it\'s calmer with no turbulence - no storms up there!'
        },
        {
            term: 'Ozone Layer',
            definition: 'A region in the stratosphere with high concentration of ozone (O₃) that absorbs harmful UV radiation',
            example: 'The ozone layer is like Earth\'s sunscreen - without it, UV rays would cause massive cancer rates and kill most life'
        },
        {
            term: 'Air Pressure',
            definition: 'The weight of air molecules pressing down on Earth\'s surface',
            example: 'At sea level, air pressure is pushing on you with 14.7 pounds per square inch - like having a small car pressing on every square foot of your body!'
        },
        {
            term: 'Aurora',
            definition: 'Colorful lights in the sky (Northern/Southern Lights) caused by solar particles colliding with atmospheric gases',
            example: 'Auroras happen in the thermosphere when particles from the Sun crash into oxygen and nitrogen, making them glow like a neon sign!'
        }
    ],
    concepts: [
        {
            title: 'The Five Layers: Earth\'s Atmospheric Onion',
            explanation: "Earth's atmosphere has five distinct layers, each with unique characteristics. Going up from Earth's surface: Troposphere → Stratosphere → Mesosphere → Thermosphere → Exosphere.",
            analogy: {
                type: 'Building Floors',
                description: 'Think of the atmosphere as a five-story building:\n• Ground floor (Troposphere): Where everyone lives, all the action happens - weather, clouds, birds\n• 2nd floor (Stratosphere): The "calm" floor where planes cruise and ozone protects us\n• 3rd floor (Mesosphere): The "meteor destroyer" floor where shooting stars burn up\n• 4th floor (Thermosphere): The "hot" floor where auroras dance and space station orbits\n• Rooftop (Exosphere): Where atmosphere meets space - molecules are escaping to space!'
            },
            mindBlowingFacts: [
                'The troposphere contains 80% of atmosphere\'s mass but is only 12km thick - that\'s the distance you drive to school!',
                'Temperature in the thermosphere can reach 2,500°C (4,500°F), but you wouldn\'t feel hot because there are so few molecules!',
                'The Kármán line at 100km marks "space" - this is in the thermosphere',
                'Meteors burn up in the mesosphere (50-85km) - good thing, or we\'d be dodging space rocks daily!',
                'The stratosphere is -60°C at the bottom but warms to 0°C at the top - it goes BACKWARDS!'
            ],
            whyYouCare: 'Every breath you take comes from the troposphere. Every plane flight relies on the calm stratosphere. The mesosphere protects you from meteor bombardment. The thermosphere reflects radio waves that let you listen to distant radio stations. Without these layers working together, Earth would be uninhabitable!'
        },
        {
            title: 'Atmospheric Composition: The Air We Breathe',
            explanation: "Air isn't just one thing - it's a mixture of gases. Dry air is about 78% nitrogen, 21% oxygen, 0.9% argon, 0.04% carbon dioxide, plus traces of other gases and water vapor.",
            analogy: {
                type: 'Cookie Recipe',
                description: 'If air were a cookie recipe:\n• 78 cups of nitrogen (the flour - takes up most space but doesn\'t do much)\n• 21 cups of oxygen (the sugar - the sweet part we need to survive!)\n• 1 cup of argon (vanilla extract - there but you barely notice)\n• A pinch of CO₂ (salt - tiny amount, huge impact on flavor/climate)\n• Variable water vapor (chocolate chips - amount changes, makes it interesting!)'
            },
            mindBlowingFacts: [
                'You breathe about 11,000 liters of air per day - enough to fill 55 bathtubs!',
                'The oxygen you breathe was made by plants and ocean algae through photosynthesis',
                'Nitrogen makes up 78% of air but we can\'t use it directly - only special bacteria can "fix" it into usable forms',
                'CO₂ is only 0.04% of air, but it\'s increased 50% since 1750, driving climate change',
                'Every breath you take contains atoms that were once breathed by dinosaurs, Cleopatra, and Einstein!'
            ],
            whyYouCare: 'Understanding atmospheric composition helps you grasp why we need rainforests (oxygen producers), why climate change is real (CO₂ increase), and why nitrogen fertilizers revolutionized agriculture. It also explains why Mars is uninhabitable - its atmosphere is 95% CO₂ with almost no oxygen!'
        },
        {
            title: 'The Ozone Layer: Earth\'s Sunscreen',
            explanation: "In the stratosphere (20-30km up), there's a region with higher concentrations of ozone (O₃). This 'ozone layer' absorbs 97-99% of the Sun's harmful ultraviolet radiation.",
            analogy: {
                type: 'Superhero Shield',
                description: 'The ozone layer is like an invisible force field protecting Earth. UV radiation from the Sun is like cosmic bullets - the ozone molecules sacrifice themselves by absorbing the UV (breaking apart), then reforming. It\'s a shield that constantly repairs itself! Without it, going outside would be like standing in front of a tanning bed 24/7.'
            },
            mindBlowingFacts: [
                'In the 1980s, scientists discovered a HOLE in the ozone layer over Antarctica - caused by human-made CFCs from spray cans and refrigerators!',
                'The world UNITED and banned CFCs (Montreal Protocol 1987) - the hole is now slowly healing',
                'This is one of humanity\'s greatest environmental victories - proof we CAN fix global problems',
                'Without ozone, DNA-damaging UV would reach Earth\'s surface, causing cancer rates to skyrocket and killing phytoplankton (ocean\'s food chain base)',
                'Ozone smells like chlorine - the "fresh" smell after thunderstorms is partly ozone brought down by lightning'
            ],
            whyYouCare: 'The ozone layer is why you don\'t get instant sunburn stepping outside. Its recovery shows international cooperation works. It\'s also why wearing sunscreen matters - even 1-3% of UV getting through can damage your skin!'
        },
        {
            title: 'Air Pressure: The Invisible Weight',
            explanation: "Air has mass, and gravity pulls it down, creating pressure. At sea level, air pressure is about 101,325 Pa (14.7 psi). Pressure decreases as you go up because there's less air above you.",
            analogy: {
                type: 'Swimming Pool',
                description: 'Imagine a deep swimming pool. At the bottom, you feel LOTS of pressure from all the water above you. Near the surface, there\'s less water above, so less pressure. Air works the same way! At sea level, you have the entire atmosphere\'s weight pressing down. At mountain tops, there\'s less air above you, so less pressure (and less oxygen - hence altitude sickness!).'
            },
            mindBlowingFacts: [
                'There are about 2.2 x 10¹⁹ (22 quintillion) pounds of air pressing on Earth\'s surface!',
                'At 5,500m altitude (base camp of Mt. Everest), air pressure is HALF of sea level - like breathing through a straw',
                'Airplane cabins are pressurized to 8,000 feet equivalent - otherwise you\'d pass out from lack of oxygen',
                'Your ears "pop" in planes or mountains because internal ear pressure doesn\'t match external pressure',
                'Water boils at lower temperatures at high altitude (90°C in Denver vs 100°C at sea level) because of lower pressure'
            ],
            whyYouCare: 'Understanding air pressure explains why your chips bag puffs up on mountain drives, why weather forecasters talk about "high" and "low" pressure systems, and why astronauts need pressurized suits in space (near-zero pressure would make your blood boil!).'
        }
    ],
    workedExamples: [
        {
            scenario: 'The Mystery of the Backwards Temperature',
            problemSetup: 'A weather balloon measures temperature as it rises. From 0-12km, temperature drops from 15°C to -60°C. But from 12-50km (stratosphere), temperature RISES back to 0°C! Why does this happen?',
            steps: [
                {
                    step: 1,
                    description: 'Understand troposphere temperature drop',
                    reasoning: 'In the troposphere, temperature drops because you\'re getting farther from Earth\'s surface (which is heated by the Sun). Earth radiates heat upward, but the higher you go, the less heat reaches you.'
                },
                {
                    step: 2,
                    description: 'Identify what\'s different in the stratosphere',
                    reasoning: 'The stratosphere contains the OZONE LAYER. Ozone (O₃) absorbs UV radiation from the Sun and converts it to HEAT. This is why temperature increases with altitude here!'
                },
                {
                    step: 3,
                    description: 'Connect to layer stability',
                    reasoning: 'Because warm air is on TOP in the stratosphere (reversed from normal), there\'s no convection or mixing. Warm air doesn\'t sink, cold air doesn\'t rise. This creates a SUPER stable layer - perfect for airplane flight! No turbulence.'
                }
            ],
            solution: 'The stratosphere warms with altitude because ozone absorbs UV radiation and converts it to heat. This "backwards" temperature profile makes it extremely stable - which is why commercial jets fly here at 10-12km. No storms, no turbulence, smooth sailing!',
            realWorldApplication: 'This is why pilots fly in the lower stratosphere - the stability saves fuel, reduces wear on aircraft, and gives passengers a smoother ride. Understanding atmospheric layers literally keeps you safe during flight!'
        },
        {
            scenario: 'The Ozone Hole Disaster (And Victory!)',
            problemSetup: 'In 1985, British scientists discovered the ozone layer over Antarctica had thinned by 40% - a massive "hole"! How did humans cause this, and how did we fix it?',
            steps: [
                {
                    step: 1,
                    description: 'Identify the culprit',
                    reasoning: 'Chlorofluorocarbons (CFCs) from spray cans, refrigerators, and air conditioners were rising to the stratosphere. Each CFC molecule could destroy 100,000 ozone molecules! CFCs were invented in the 1920s and thought to be "harmless".'
                },
                {
                    step: 2,
                    description: 'Understand the chemical destruction',
                    reasoning: 'UV light breaks apart CFCs, releasing chlorine atoms. Chlorine acts as a CATALYST: Cl + O₃ → ClO + O₂, then ClO + O → Cl + O₂. The chlorine atom is FREE again to destroy another ozone molecule - it\'s a chain reaction!'
                },
                {
                    step: 3,
                    description: 'The global solution',
                    reasoning: 'In 1987, every nation on Earth signed the Montreal Protocol, agreeing to phase out CFCs. Companies developed alternatives (HFCs, which don\'t harm ozone). The ozone hole is now SHRINKING and expected to fully recover by 2070!'
                }
            ],
            solution: 'Human-made chemicals (CFCs) were destroying the ozone layer. Global cooperation (Montreal Protocol) banned them, and the ozone layer is now healing. This proves humanity CAN solve environmental crises when we work together!',
            realWorldApplication: 'This is the ONLY time in history all nations agreed on an environmental treaty. It\'s a blueprint for solving climate change, plastic pollution, and other global problems. It also saved millions from skin cancer and cataracts!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'A hiker climbs from sea level (0m) to the summit of Mt. Kilimanjaro (5,895m). Describe THREE changes they would experience in the atmosphere during this climb.',
            hints: [
                'Think about air pressure, temperature, and oxygen availability',
                'Remember: 5,895m is still in the troposphere',
                'Consider why mountain climbers get altitude sickness'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'If Earth had no atmosphere at all, describe THREE major changes to our planet. Explain WHY each change would occur.',
            hints: [
                'Think about temperature regulation (no greenhouse effect)',
                'Think about protection from space objects',
                'Think about water (would it stay liquid?)',
                'Consider UV radiation reaching the surface'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which atmospheric layer contains the ozone layer and is where commercial airplanes typically fly?',
            options: [
                { label: 'A', text: 'Troposphere' },
                { label: 'B', text: 'Stratosphere' },
                { label: 'C', text: 'Mesosphere' },
                { label: 'D', text: 'Thermosphere' },
                { label: 'E', text: 'Exosphere' }
            ],
            correctAnswer: 'B',
            explanation: 'The stratosphere (12-50km) contains the ozone layer and is where jets fly because it\'s stable with no weather.',
            storyExplanation: 'Think of the stratosphere as the "VIP lounge" of the atmosphere - calm, stable, protected by the ozone layer\'s UV shield, and perfect for cruising at 35,000 feet!'
        },
        {
            id: 'q2',
            question: 'What is the approximate composition of Earth\'s atmosphere by volume?',
            options: [
                { label: 'A', text: '50% oxygen, 50% nitrogen' },
                { label: 'B', text: '78% nitrogen, 21% oxygen, 1% other gases' },
                { label: 'C', text: '90% oxygen, 10% carbon dioxide' },
                { label: 'D', text: '60% nitrogen, 40% oxygen' },
                { label: 'E', text: '95% carbon dioxide, 5% nitrogen (like Mars)' }
            ],
            correctAnswer: 'B',
            explanation: 'Dry air is about 78% nitrogen, 21% oxygen, 0.9% argon, 0.04% CO₂, and traces of other gases.',
            storyExplanation: 'Remember: "Nitrogen is the lazy giant (78%) that fills space, Oxygen is the life-giver (21%) we actually use!" The rest is just seasoning.'
        },
        {
            id: 'q3',
            question: 'Why is the ozone layer critically important for life on Earth?',
            options: [
                { label: 'A', text: 'It provides oxygen for breathing' },
                { label: 'B', text: 'It absorbs harmful UV radiation from the Sun' },
                { label: 'C', text: 'It creates weather patterns' },
                { label: 'D', text: 'It keeps the atmosphere from escaping to space' },
                { label: 'E', text: 'It prevents meteors from hitting Earth' }
            ],
            correctAnswer: 'B',
            explanation: 'The ozone layer absorbs 97-99% of the Sun\'s harmful UV radiation, protecting DNA and preventing cancer.',
            storyExplanation: 'The ozone layer is Earth\'s invisible sunscreen! Without it, UV radiation would fry living cells, cause massive cancer rates, and kill phytoplankton (the ocean\'s food chain base). We\'d be toast - literally!'
        },
        {
            id: 'q4',
            question: 'As you climb a mountain, air pressure decreases because:',
            options: [
                { label: 'A', text: 'Temperature drops' },
                { label: 'B', text: 'There is less air (atmosphere) above you' },
                { label: 'C', text: 'Gravity is weaker at high altitudes' },
                { label: 'D', text: 'Oxygen is heavier than nitrogen' },
                { label: 'E', text: 'The atmosphere gets thicker' }
            ],
            correctAnswer: 'B',
            explanation: 'Pressure is caused by the weight of air above you. Higher up = less air above = lower pressure.',
            storyExplanation: 'Imagine carrying a stack of books. At the bottom book, there\'s TONS of weight pressing down (all the books above). The top book? No weight above it! Same with air - less air above = less pressure.'
        },
        {
            id: 'q5',
            question: 'In which atmospheric layer do auroras (Northern/Southern Lights) occur?',
            options: [
                { label: 'A', text: 'Troposphere' },
                { label: 'B', text: 'Stratosphere' },
                { label: 'C', text: 'Mesosphere' },
                { label: 'D', text: 'Thermosphere' },
                { label: 'E', text: 'Exosphere' }
            ],
            correctAnswer: 'D',
            explanation: 'Auroras occur in the thermosphere (85-600km) when charged particles from the Sun collide with atmospheric gases, making them glow.',
            storyExplanation: 'The thermosphere is where space weather meets Earth! Solar particles crash into oxygen and nitrogen atoms like bumper cars, making them light up in brilliant greens, reds, and purples - nature\'s own light show!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'To remember the five atmospheric layers from ground up: "The Strong Man Throws Eggs" - Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere',
            example: 'Visualize a strong man throwing eggs up through each layer!'
        },
        {
            technique: 'Rhyme',
            description: 'Troposphere is where we dwell, Stratosphere is where ozone dwells as well! Mesosphere burns meteors bright, Thermosphere has auroras\' light!',
            example: 'Recite this rhyme to remember each layer\'s key feature'
        },
        {
            technique: 'Number Memory',
            description: 'Air composition: "78-21-GO!" - 78% nitrogen, 21% oxygen, GO live! (everything else is <1%)',
            example: 'When asked about air composition, think "78-21-GO!"'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Thinking the atmosphere has a definite "edge"',
            correction: 'The atmosphere gradually thins out - there\'s no clear boundary. The Kármán line (100km) is an arbitrary definition of "space".',
            whyItMatters: 'The exosphere extends up to 10,000km! Atmospheric molecules are found even beyond the Moon\'s orbit. Space isn\'t a hard line, it\'s a gradual fade.'
        },
        {
            mistake: 'Confusing ozone (O₃) with oxygen (O₂)',
            correction: 'Oxygen (O₂) is what we breathe, made of 2 oxygen atoms. Ozone (O₃) has 3 oxygen atoms and is toxic to breathe at ground level, but protective in the stratosphere.',
            whyItMatters: 'Ground-level ozone (smog) is a pollutant that harms lungs. Stratospheric ozone protects us from UV. Same molecule, different location, opposite effects!'
        },
        {
            mistake: 'Thinking high altitude is cold because you\'re "closer to space"',
            correction: 'High altitude is cold because you\'re farther from Earth\'s heat-radiating surface. The thermosphere is scorching hot (2,500°C) despite being in "space"!',
            whyItMatters: 'Temperature in the atmosphere depends on heat sources (ground radiation, UV absorption) not distance from Earth. The thermosphere is super hot but has so few molecules you wouldn\'t feel it.'
        }
    ],
    quickReference: [
        {
            title: 'Atmospheric Layers (Bottom to Top)',
            content: 'Troposphere (0-12km): Weather, clouds, we live here\nStratosphere (12-50km): Ozone layer, planes fly here\nMesosphere (50-85km): Meteors burn up\nThermosphere (85-600km): Auroras, space station\nExosphere (600-10,000km): Atmosphere meets space',
            category: 'rule'
        },
        {
            title: 'Air Composition',
            content: 'Nitrogen: 78%\nOxygen: 21%\nArgon: 0.9%\nCarbon Dioxide: 0.04%\nTrace gases + water vapor: <0.1%',
            category: 'rule'
        },
        {
            title: 'Temperature Trends',
            content: 'Troposphere: DECREASES with altitude\nStratosphere: INCREASES with altitude (ozone heating)\nMesosphere: DECREASES with altitude\nThermosphere: INCREASES with altitude (solar heating)',
            category: 'rule'
        }
    ],
    summary: [
        'Earth\'s atmosphere has five layers: Troposphere (weather), Stratosphere (ozone layer), Mesosphere (meteor destroyer), Thermosphere (auroras), Exosphere (space boundary)',
        'Air is 78% nitrogen, 21% oxygen, and <1% other gases including CO₂ and water vapor',
        'The ozone layer in the stratosphere absorbs 97-99% of harmful UV radiation, protecting life on Earth',
        'Air pressure decreases with altitude because there\'s less atmosphere above you',
        'The atmosphere protects Earth from meteors, UV radiation, temperature extremes, and makes life possible'
    ],
    selfAssessment: [
        'I can name and describe the five layers of Earth\'s atmosphere in order',
        'I understand the composition of air and why each major gas is important',
        'I can explain why the ozone layer is critical and how the ozone hole was discovered and is being fixed',
        'I know why air pressure decreases with altitude and can explain its effects',
        'I can describe at least three ways the atmosphere protects and supports life on Earth'
    ]
};
export default lesson;
//# sourceMappingURL=day-03.js.map
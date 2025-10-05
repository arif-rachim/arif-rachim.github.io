const lesson = {
    day: 5,
    subject: 'biology',
    title: 'Photosynthesis & Cellular Respiration - Life\'s Energy Cycle',
    emoji: '🌱',
    learningGoal: 'Understand how plants make food from sunlight and how all living things convert that food into usable energy',
    estimatedTime: 60,
    objectives: [
        'Explain the process of photosynthesis and identify the factors that affect it',
        'Describe cellular respiration and distinguish between aerobic and anaerobic respiration',
        'Understand how photosynthesis and respiration are complementary processes that sustain life'
    ],
    discoveryStory: {
        title: 'Jan Ingenhousz and the Mystery of the Green Priestess',
        content: "It's 1779, and Dutch scientist Jan Ingenhousz is obsessed with a puzzle: Why do plants make bubbles in sunlight? Everyone knew plants were important, but HOW they worked was a mystery. In a brilliant experiment, he put a sprig of mint underwater in a glass jar and watched. In sunlight: BUBBLES! In darkness: NOTHING! He collected the gas and discovered it was OXYGEN - the same gas we breathe! But here's the mind-blowing part: he realized plants were doing the OPPOSITE of animals. Animals breathe in oxygen and breathe out carbon dioxide. Plants take in carbon dioxide and release oxygen! It was like discovering that plants are Earth's air purifiers, constantly cleaning the atmosphere. Then in the 1940s, scientists using radioactive tracers discovered that the oxygen plants release doesn't come from CO₂ - it comes from WATER! Plants literally split water molecules apart using sunlight's energy. Today we know photosynthesis produces 330 billion tons of oxygen per year - that's why Earth is the only planet with breathable air!",
        emoji: '🌿'
    },
    keyTerms: [
        {
            term: 'Photosynthesis',
            definition: 'The process by which plants use sunlight energy to convert carbon dioxide and water into glucose (sugar) and oxygen',
            example: 'Every apple you eat was made from air, water, and sunlight through photosynthesis!'
        },
        {
            term: 'Chlorophyll',
            definition: 'The green pigment in plants that absorbs light energy (mainly red and blue light) to power photosynthesis',
            example: 'Chlorophyll is why leaves are green - it reflects green light but absorbs other colors'
        },
        {
            term: 'Cellular Respiration',
            definition: 'The process by which cells break down glucose to release energy (ATP) that powers all life processes',
            example: 'Right now, your cells are doing respiration to power your heartbeat, thoughts, and movements'
        },
        {
            term: 'Aerobic Respiration',
            definition: 'Cellular respiration that uses oxygen to completely break down glucose, releasing lots of energy',
            example: 'When you breathe normally during exercise, your muscles use aerobic respiration'
        },
        {
            term: 'Anaerobic Respiration',
            definition: 'Cellular respiration without oxygen, producing less energy and creating lactic acid (animals) or alcohol (yeast)',
            example: 'When you sprint and your muscles burn, that\'s lactic acid from anaerobic respiration!'
        },
        {
            term: 'ATP (Adenosine Triphosphate)',
            definition: 'The "energy currency" molecule that cells use to power all their activities',
            example: 'ATP is like a rechargeable battery - cells make it during respiration and spend it to do work'
        }
    ],
    concepts: [
        {
            title: 'Photosynthesis: Nature\'s Solar Panels',
            explanation: "Photosynthesis is how plants convert light energy into chemical energy stored in glucose. The equation: 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂. In words: carbon dioxide + water + sunlight → glucose + oxygen.",
            analogy: {
                type: 'Solar Panel Factory',
                description: 'Imagine a factory with solar panels (chloroplasts) on the roof:\n• RAW MATERIALS trucked in: CO₂ from air, H₂O from roots\n• POWER SOURCE: Sunlight hits the solar panels (chlorophyll)\n• ASSEMBLY LINE: Light energy splits water (H₂O), releases O₂ as waste\n• PRODUCT MANUFACTURED: Glucose (C₆H₁₂O₆) - stored energy!\n• SHIPPING: Glucose distributed throughout the plant\n\nThe factory only runs during daylight hours - no sun, no production!'
            },
            mindBlowingFacts: [
                'One large tree produces enough oxygen for 2 people per year - about 260 pounds of O₂!',
                'Photosynthesis is the ONLY natural process that releases oxygen into the atmosphere',
                'About 70% of Earth\'s oxygen comes from ocean phytoplankton (tiny floating algae), not trees!',
                'Plants convert 0.1% of sunlight into chemical energy - solar panels only manage 15-20%',
                'A single leaf can perform 40 BILLION photosynthesis reactions per second!',
                'Without photosynthesis, all oxygen would be gone from Earth\'s atmosphere in 5,000 years'
            ],
            whyYouCare: 'Every breath you take, every bite of food you eat - ALL energy on Earth (except geothermal and nuclear) comes from photosynthesis. Fossil fuels are ancient sunlight stored by photosynthesis millions of years ago. You are literally made of sunlight!'
        },
        {
            title: 'Factors Affecting Photosynthesis: The Limiting Factor',
            explanation: "Photosynthesis rate depends on light intensity, CO₂ concentration, water availability, and temperature. Whichever factor is in shortest supply becomes the 'limiting factor' that controls the rate.",
            analogy: {
                type: 'Assembly Line Bottleneck',
                description: 'Imagine building cars on an assembly line:\n• If you have 100 workers but only 10 engines, you can only make 10 cars (engines are limiting)\n• If you add more engines but the lights are dim, workers work slowly (light is limiting)\n• If it\'s too cold, workers are sluggish (temperature is limiting)\n\nSame with photosynthesis! Even if a plant has tons of water and CO₂, if light is dim, that limits the rate. Greenhouses control ALL factors to maximize plant growth.'
            },
            mindBlowingFacts: [
                'Increasing CO₂ from 0.04% to 0.1% can double plant growth rates (this is why greenhouses pump in CO₂!)',
                'C4 plants (corn, sugarcane) have evolved special tricks to photosynthesize efficiently in hot, dry conditions',
                'Arctic plants can photosynthesize 24 hours a day during summer (midnight sun!)',
                'Desert plants open their pores at NIGHT to collect CO₂ (when it\'s cool) and photosynthesize during the day with pores closed (to save water)',
                'Red and blue light are most effective for photosynthesis - that\'s why grow lights are purple!'
            ],
            whyYouCare: 'Understanding limiting factors explains why farmers use fertilizers (nitrogen for growth), why plants die in dark closets, and why global warming affects crop yields. It also explains why vertical farms use LED lights and controlled atmospheres.'
        },
        {
            title: 'Cellular Respiration: Unlocking Stored Energy',
            explanation: "Cellular respiration is the OPPOSITE of photosynthesis. It breaks down glucose to release energy (ATP). Aerobic equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP energy. Notice it's photosynthesis BACKWARDS!",
            analogy: {
                type: 'Power Plant',
                description: 'Your cells are like tiny power plants:\n• FUEL: Glucose (from food)\n• COMBUSTION: Broken down step-by-step in mitochondria\n• OXYGEN: Needed to completely burn the fuel (like a furnace)\n• ELECTRICITY PRODUCED: ATP molecules (cell\'s rechargeable batteries)\n• EXHAUST: CO₂ (breathed out) and H₂O (sweated out)\n\nYour cells run 24/7 - you make and spend your body weight in ATP every single day!'
            },
            mindBlowingFacts: [
                'You produce and use about 100 POUNDS (your body weight!) of ATP every day!',
                'Each ATP molecule is recycled 500-750 times per day',
                'Your brain uses 20% of your body\'s oxygen despite being only 2% of your weight - all for ATP!',
                'Aerobic respiration produces 38 ATP per glucose; anaerobic only produces 2 ATP',
                'Mitochondria (where respiration happens) have their own DNA - they were once independent bacteria!',
                'Red blood cells have NO mitochondria - they can\'t do aerobic respiration (ironically, they carry oxygen for everyone else!)'
            ],
            whyYouCare: 'This is happening in your cells RIGHT NOW as you read. Every thought, heartbeat, breath, and movement is powered by ATP from cellular respiration. When you eat, you\'re really eating ATP-making fuel. No respiration = no life!'
        },
        {
            title: 'Aerobic vs Anaerobic: The Oxygen Difference',
            explanation: "Aerobic respiration needs oxygen and produces LOTS of ATP (efficient). Anaerobic respiration doesn't use oxygen and produces LITTLE ATP (inefficient) plus lactic acid (animals) or ethanol (yeast/bacteria).",
            analogy: {
                type: 'Complete vs Incomplete Combustion',
                description: 'Burning wood in a fire:\n• AEROBIC (plenty of oxygen): Wood burns completely → lots of heat, ash, CO₂\n• ANAEROBIC (little oxygen): Wood smolders → less heat, smoke, charcoal\n\nSame with glucose:\n• AEROBIC: Glucose + O₂ → 38 ATP + CO₂ + H₂O (complete breakdown)\n• ANAEROBIC: Glucose (no O₂) → 2 ATP + lactic acid (incomplete breakdown)\n\nYour body prefers aerobic (efficient!) but switches to anaerobic during intense exercise when oxygen can\'t arrive fast enough.'
            },
            mindBlowingFacts: [
                'When you sprint all-out, your muscles switch to anaerobic after 10-15 seconds',
                'The "burn" in your muscles is lactic acid buildup from anaerobic respiration',
                'Yeast do anaerobic respiration and produce ethanol (alcohol!) and CO₂ - that\'s how we make bread (CO₂ = bubbles) and beer (ethanol = alcohol)!',
                'Some bacteria live in oxygen-free environments (deep ocean vents) and ONLY do anaerobic respiration',
                'Cancer cells often prefer anaerobic respiration even when oxygen is available (Warburg effect)',
                'Crocodiles can hold their breath for hours using anaerobic respiration in their muscles'
            ],
            whyYouCare: 'This explains muscle fatigue during exercise, how bread rises, how alcohol is made, why you breathe hard after sprinting (paying back the "oxygen debt"), and even how some diseases work!'
        }
    ],
    workedExamples: [
        {
            scenario: 'The Greenhouse Optimization Problem',
            problemSetup: 'A farmer wants to maximize tomato growth in her greenhouse. She can control: (1) temperature, (2) light intensity, (3) CO₂ levels, (4) water. Currently, she has: bright LED lights (high light), 25°C temperature (optimal), normal air (0.04% CO₂), and plenty of water. What should she change to increase growth?',
            steps: [
                {
                    step: 1,
                    description: 'Identify current conditions',
                    reasoning: 'Light: HIGH ✓\nTemperature: OPTIMAL ✓\nWater: ABUNDANT ✓\nCO₂: NORMAL (0.04%) ← This is likely the limiting factor!'
                },
                {
                    step: 2,
                    description: 'Apply limiting factor principle',
                    reasoning: 'Since light, temperature, and water are all optimal, CO₂ is the bottleneck. Even though there\'s CO₂ in the air, increasing it will boost photosynthesis rate.'
                },
                {
                    step: 3,
                    description: 'Recommend solution',
                    reasoning: 'Pump CO₂ into the greenhouse to raise concentration to 0.08-0.10%. This can DOUBLE photosynthesis rate! Commercial greenhouses do this routinely.'
                },
                {
                    step: 4,
                    description: 'Explain the mechanism',
                    reasoning: 'More CO₂ → more raw material for photosynthesis → faster glucose production → faster plant growth. The equation 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ shows CO₂ is a required input.'
                }
            ],
            solution: 'The farmer should increase CO₂ levels in the greenhouse. This is the limiting factor - everything else is already optimized. Raising CO₂ to 0.08-0.10% could double tomato production!',
            realWorldApplication: 'Commercial greenhouses routinely enrich CO₂ levels using burners or tanks. Some even capture CO₂ from industrial exhaust. This is why greenhouse tomatoes can be huge and grow year-round!'
        },
        {
            scenario: 'The Marathon Runner\'s Energy Crisis',
            problemSetup: 'During a marathon, a runner starts strong but after 2 hours, her legs feel heavy and burning. At the finish line, she\'s gasping for air. Explain what\'s happening at the cellular level using your knowledge of respiration.',
            steps: [
                {
                    step: 1,
                    description: 'Early race: Aerobic respiration',
                    reasoning: 'At a steady pace, her muscles get enough oxygen from breathing. Cells do aerobic respiration: Glucose + O₂ → 38 ATP + CO₂ + H₂O. Efficient and sustainable.'
                },
                {
                    step: 2,
                    description: 'Muscle fatigue: Anaerobic respiration kicks in',
                    reasoning: 'After hours of running, her muscles demand MORE oxygen than breathing can supply. Cells switch to anaerobic respiration: Glucose → 2 ATP + lactic acid (no oxygen needed). Much less efficient!'
                },
                {
                    step: 3,
                    description: 'The burn: Lactic acid buildup',
                    reasoning: 'Anaerobic respiration produces lactic acid as waste. It builds up in muscles, causing the burning sensation and making muscles feel heavy. The pH drops, interfering with muscle contraction.'
                },
                {
                    step: 4,
                    description: 'Gasping at finish: Oxygen debt',
                    reasoning: 'Her body accumulated an "oxygen debt" - she needs extra O₂ to convert lactic acid back to usable molecules. Heavy breathing AFTER exercise pays back this debt.'
                }
            ],
            solution: 'Early: aerobic respiration (efficient). Later: oxygen can\'t keep up → anaerobic respiration → lactic acid buildup → muscle burn. After race: heavy breathing pays back oxygen debt and clears lactic acid.',
            realWorldApplication: 'This explains why athletes do "active recovery" (light jogging) after races - it helps clear lactic acid faster. It also explains why trained athletes have better oxygen delivery (more capillaries, more red blood cells) and can sustain aerobic respiration longer!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'A plant is kept in a sealed glass container with normal air, water, and sunlight. After a few weeks, the plant is thriving. Explain how the oxygen and carbon dioxide levels in the container change throughout a 24-hour period (daytime vs nighttime).',
            hints: [
                'During the DAY: photosynthesis is happening. What does it consume and produce?',
                'During the NIGHT: no photosynthesis (no light), but respiration still happens!',
                'Plants do BOTH respiration AND photosynthesis (but only photosynthesize in light)'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p2',
            question: 'Explain why bread dough rises, why it smells slightly alcoholic, and why baking "kills" the yeast. Use the concept of anaerobic respiration in your answer.',
            hints: [
                'Yeast in dough have no oxygen (anaerobic conditions)',
                'What are the products of anaerobic respiration in yeast?',
                'What happens to yeast cells at high temperatures (baking)?'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'What is the correct word equation for photosynthesis?',
            options: [
                { label: 'A', text: 'Oxygen + Water → Glucose + Carbon Dioxide' },
                { label: 'B', text: 'Carbon Dioxide + Water + Light Energy → Glucose + Oxygen' },
                { label: 'C', text: 'Glucose + Oxygen → Carbon Dioxide + Water + Energy' },
                { label: 'D', text: 'Glucose + Carbon Dioxide → Oxygen + Water' },
                { label: 'E', text: 'Water + Oxygen → Glucose + Light Energy' }
            ],
            correctAnswer: 'B',
            explanation: 'Photosynthesis uses CO₂, H₂O, and light energy to produce glucose and oxygen: 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂',
            storyExplanation: 'Think of it as a recipe: Take carbon dioxide from air, add water from soil, mix with sunlight, and you get sugar (glucose) plus oxygen as a bonus! Plants are literally cooking food from air and water using sunlight.'
        },
        {
            id: 'q2',
            question: 'What is the role of chlorophyll in photosynthesis?',
            options: [
                { label: 'A', text: 'It stores glucose produced by the plant' },
                { label: 'B', text: 'It absorbs light energy to power the process' },
                { label: 'C', text: 'It releases oxygen into the air' },
                { label: 'D', text: 'It transports water from roots to leaves' },
                { label: 'E', text: 'It produces carbon dioxide' }
            ],
            correctAnswer: 'B',
            explanation: 'Chlorophyll is the green pigment that captures light energy (mainly red and blue wavelengths) to power photosynthesis.',
            storyExplanation: 'Chlorophyll is like a solar panel - it absorbs light energy and converts it into chemical energy. It\'s green because it REFLECTS green light (doesn\'t use it) but absorbs red and blue light. That\'s why plants look green to us!'
        },
        {
            id: 'q3',
            question: 'Which factor would NOT directly affect the rate of photosynthesis?',
            options: [
                { label: 'A', text: 'Light intensity' },
                { label: 'B', text: 'Carbon dioxide concentration' },
                { label: 'C', text: 'Temperature' },
                { label: 'D', text: 'Soil pH' },
                { label: 'E', text: 'Water availability' }
            ],
            correctAnswer: 'D',
            explanation: 'Soil pH affects nutrient absorption but doesn\'t directly participate in photosynthesis. The main factors are light, CO₂, temperature, and water.',
            storyExplanation: 'Soil pH is like the quality of your internet router - it affects overall plant health but doesn\'t directly power photosynthesis. Light, CO₂, temperature, and water are the direct ingredients and conditions needed!'
        },
        {
            id: 'q4',
            question: 'What is the main difference between aerobic and anaerobic respiration?',
            options: [
                { label: 'A', text: 'Aerobic produces glucose, anaerobic produces oxygen' },
                { label: 'B', text: 'Aerobic uses oxygen and produces more ATP, anaerobic doesn\'t use oxygen and produces less ATP' },
                { label: 'C', text: 'Aerobic happens in plants, anaerobic happens in animals' },
                { label: 'D', text: 'Aerobic requires light, anaerobic happens in darkness' },
                { label: 'E', text: 'Aerobic produces lactic acid, anaerobic produces water' }
            ],
            correctAnswer: 'B',
            explanation: 'Aerobic respiration requires oxygen and produces about 38 ATP per glucose. Anaerobic respiration doesn\'t use oxygen and only produces 2 ATP per glucose.',
            storyExplanation: 'Aerobic is like a super-efficient hybrid car (oxygen + glucose → lots of energy). Anaerobic is like an emergency backup generator (glucose alone → little energy + lactic acid waste). Your body uses aerobic normally, but switches to anaerobic during intense exercise!'
        },
        {
            id: 'q5',
            question: 'Why do your muscles feel sore and burn during intense exercise?',
            options: [
                { label: 'A', text: 'Too much oxygen in the muscles' },
                { label: 'B', text: 'Lactic acid buildup from anaerobic respiration' },
                { label: 'C', text: 'Excess glucose accumulation' },
                { label: 'D', text: 'Photosynthesis in muscle cells' },
                { label: 'E', text: 'Chlorophyll breakdown' }
            ],
            correctAnswer: 'B',
            explanation: 'During intense exercise, muscles can\'t get oxygen fast enough, so they switch to anaerobic respiration, which produces lactic acid as a waste product.',
            storyExplanation: 'When you sprint, your muscles are screaming "We need oxygen!" but your lungs and blood can\'t deliver it fast enough. So muscles switch to Plan B: anaerobic respiration. It produces energy WITHOUT oxygen but creates lactic acid waste that makes muscles burn and feel tired!'
        }
    ],
    memoryAids: [
        {
            technique: 'Rhyme',
            description: 'Photosynthesis rhyme: "Carbon dioxide and water combined, with sunlight and chlorophyll refined, make glucose for the plant to munch, and oxygen released for our lunch!"',
            example: 'Recite this to remember the inputs and outputs of photosynthesis'
        },
        {
            technique: 'Acronym',
            description: 'Photosynthesis factors: "WALT" - Water, Air (CO₂), Light, Temperature',
            example: 'The four main factors affecting photosynthesis rate'
        },
        {
            technique: 'Visual',
            description: 'Photosynthesis vs Respiration: They\'re OPPOSITE arrows! Photosynthesis goes UP (building glucose from CO₂ + H₂O), Respiration goes DOWN (breaking glucose to CO₂ + H₂O)',
            example: 'Imagine a see-saw: photosynthesis builds up, respiration breaks down'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Thinking plants only photosynthesize (don\'t respire)',
            correction: 'Plants do BOTH photosynthesis AND cellular respiration! They photosynthesize during the day (need light) and respire 24/7 (day and night) to get energy.',
            whyItMatters: 'Plants need energy to grow, move materials, reproduce, etc. They make glucose via photosynthesis, then break it down via respiration to get ATP, just like animals!'
        },
        {
            mistake: 'Confusing the equations for photosynthesis and respiration',
            correction: 'They\'re OPPOSITES! Photosynthesis: CO₂ + H₂O → Glucose + O₂ (builds glucose). Respiration: Glucose + O₂ → CO₂ + H₂O (breaks down glucose). Notice they\'re reversed!',
            whyItMatters: 'This creates a beautiful cycle: plants make O₂ and glucose, animals use O₂ and glucose to make CO₂ and H₂O, which plants use again!'
        },
        {
            mistake: 'Thinking anaerobic respiration only happens when you exercise',
            correction: 'Anaerobic respiration happens in: yeast (making bread/beer), bacteria (making yogurt/cheese), deep-sea organisms, and even in your gut bacteria!',
            whyItMatters: 'Fermentation (anaerobic respiration by yeast/bacteria) is the basis of food preservation, bread-making, brewing, and many industrial processes!'
        }
    ],
    quickReference: [
        {
            title: 'Photosynthesis Equation',
            content: '6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂\n(Carbon dioxide + Water → Glucose + Oxygen)',
            category: 'formula'
        },
        {
            title: 'Cellular Respiration Equation',
            content: 'Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP\nAnaerobic: C₆H₁₂O₆ → 2 ATP + Lactic Acid (or Ethanol)',
            category: 'formula'
        },
        {
            title: 'Factors Affecting Photosynthesis',
            content: '• Light intensity (brighter = faster, up to saturation point)\n• CO₂ concentration (more = faster)\n• Temperature (optimal ~25-35°C)\n• Water availability (needed as raw material)',
            category: 'rule'
        }
    ],
    summary: [
        'Photosynthesis converts light energy into chemical energy: CO₂ + H₂O + light → glucose + O₂',
        'Chlorophyll absorbs light energy (red/blue wavelengths) to power photosynthesis in chloroplasts',
        'Photosynthesis rate depends on limiting factors: light, CO₂, temperature, and water',
        'Cellular respiration breaks down glucose to release ATP energy: Glucose + O₂ → CO₂ + H₂O + ATP',
        'Aerobic respiration (with O₂) produces 38 ATP; anaerobic respiration (without O₂) produces only 2 ATP plus lactic acid or ethanol',
        'Photosynthesis and respiration are complementary: photosynthesis builds glucose and releases O₂, respiration breaks down glucose and consumes O₂'
    ],
    selfAssessment: [
        'I can write the equations for both photosynthesis and cellular respiration',
        'I understand the role of chlorophyll and can explain why plants are green',
        'I can identify the four main factors affecting photosynthesis rate',
        'I can distinguish between aerobic and anaerobic respiration and give examples of each',
        'I understand how photosynthesis and respiration form a complementary cycle that sustains life on Earth'
    ]
};
export default lesson;
//# sourceMappingURL=day-05.js.map
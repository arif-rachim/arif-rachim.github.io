const lesson = {
    day: 19,
    subject: 'math',
    title: 'Ratios, Proportions & Unit Conversions - The Language of Comparison',
    emoji: '⚖️',
    learningGoal: 'Master ratios, proportions, and unit conversions to solve real-world comparison and scaling problems',
    estimatedTime: 70,
    objectives: [
        'Understand and express ratios in different forms (fraction, colon, word)',
        'Recognize and solve proportions using cross-multiplication',
        'Apply unit conversion using dimensional analysis',
        'Solve rate problems (speed, price per unit, density)',
        'Use scale factors to solve problems involving maps, models, and similar figures',
        'Apply ratio and proportion concepts to real-world scenarios'
    ],
    discoveryStory: {
        title: 'The Eratosthenes Calculation: Measuring Earth with Shadows and Ratios',
        content: "Picture ancient Egypt, 240 BCE. Librarian Eratosthenes in Alexandria reads that in Syene (now Aswan), 800 km south, the sun casts NO shadow at noon on the summer solstice - it's directly overhead. But in Alexandria, there IS a shadow at that exact moment. Eratosthenes has a brilliant insight: if Earth is ROUND (not flat!), the different shadow angles must be due to Earth's curvature. He measures the shadow angle in Alexandria: 7.2 degrees (about 1/50th of a full circle). Here's his genius ratio thinking: 'If 7.2° difference happens over 800 km distance, then 360° (full circle) must correspond to Earth's full circumference!' He sets up a proportion: 7.2°/800 km = 360°/Earth's circumference. Cross-multiplying: 7.2 × C = 360 × 800, so C = 40,000 km. His answer? Earth's circumference is about 40,000 kilometers! The ACTUAL circumference? 40,075 km. He was off by less than 1% - using just shadows, angles, and RATIOS! No satellites, no technology, just proportional reasoning. This 2,200-year-old calculation proved Earth was round AND measured its size, all thanks to understanding ratios and proportions! 🌍📐",
        emoji: '☀️'
    },
    keyTerms: [
        {
            term: 'Ratio',
            definition: 'A comparison of two quantities showing how many times one value contains another, or the relative sizes of two or more values',
            example: 'In a class with 12 boys and 18 girls, the ratio of boys to girls is 12:18 or simplified 2:3'
        },
        {
            term: 'Proportion',
            definition: 'An equation stating that two ratios are equal (a/b = c/d)',
            example: 'If 2 apples cost $3, then 6 apples cost $9 because 2/3 = 6/9 (proportion)'
        },
        {
            term: 'Rate',
            definition: 'A ratio comparing two quantities with DIFFERENT units',
            example: 'Speed: 60 miles/hour (distance/time), Price: $3/pound (cost/weight), Density: 1 g/mL (mass/volume)'
        },
        {
            term: 'Unit Rate',
            definition: 'A rate with denominator of 1 (per ONE unit)',
            example: '$2.50 per pound, 65 miles per hour, 3 cookies per person'
        },
        {
            term: 'Scale Factor',
            definition: 'The ratio of corresponding measurements in two similar figures (or model to actual size)',
            example: 'A map scale of 1:100,000 means 1 cm on map = 100,000 cm (1 km) in reality'
        },
        {
            term: 'Dimensional Analysis',
            definition: 'A method of converting units by multiplying by conversion factors (ratios equal to 1)',
            example: 'Convert 5 feet to inches: 5 ft × (12 in/1 ft) = 60 inches (ft cancels out)'
        },
        {
            term: 'Cross-Multiplication',
            definition: 'A method to solve proportions: if a/b = c/d, then a×d = b×c',
            example: 'Solve x/4 = 6/8 → 8x = 24 → x = 3'
        }
    ],
    concepts: [
        {
            title: 'Understanding Ratios: Comparing Quantities',
            explanation: 'A ratio compares two or more quantities, showing their relative sizes. Ratios can be written in three ways and must compare quantities with the same units.',
            analogy: {
                type: 'The Recipe Proportion',
                description: '**THREE WAYS TO WRITE RATIOS:**\n\n**Example: Recipe with 2 cups flour to 3 cups sugar**\n\n1. **FRACTION FORM:** 2/3 (flour to sugar)\n2. **COLON FORM:** 2:3 (flour to sugar)\n3. **WORD FORM:** "2 to 3" (flour to sugar)\n\nAll three mean the SAME thing!\n\n**SIMPLIFYING RATIOS:**\nLike fractions, ratios should be simplified:\n• 12:18 = 2:3 (divide both by 6)\n• 15:25 = 3:5 (divide both by 5)\n• 8:12:16 = 2:3:4 (divide all by 4)\n\n**TYPES OF RATIOS:**\n\n**Part-to-Part:**\n• Compares one part to another part\n• Example: Boys to girls = 12:18 = 2:3\n• Meaning: For every 2 boys, there are 3 girls\n\n**Part-to-Whole:**\n• Compares one part to the total\n• Example: Boys to total students\n• Boys = 12, Girls = 18, Total = 30\n• Ratio: 12:30 = 2:5\n• Meaning: 2 out of every 5 students are boys\n\n**IMPORTANT RULES:**\n1. **Order matters!** 2:3 ≠ 3:2\n2. **Units must match!** Can\'t compare 2 feet : 3 inches (convert first!)\n3. **Can be simplified** just like fractions\n4. **Can compare more than 2 values:** 1:2:3 (red:blue:green)\n\nThink of ratios as "for every ___ of this, there are ___ of that"'
            },
            mindBlowingFacts: [
                'The Golden Ratio (φ ≈ 1.618:1) appears in nature everywhere: spiral shells, flower petals, galaxy spirals, even your face! It\'s considered the "most beautiful" proportion.',
                'Your body is full of ratios: Your arm span roughly equals your height (1:1), your forearm is about 1.618× your hand (golden ratio!)',
                'Aspect ratios in screens: 16:9 (widescreen TV), 4:3 (old TV), 21:9 (ultrawide) - the ratio determines the shape!'
            ],
            whyYouCare: 'Ratios are everywhere: cooking (recipe scaling), finance (exchange rates), medicine (dosage calculations), construction (mixing concrete), art (proportions), and sports (stats like assists:turnovers)!'
        },
        {
            title: 'Proportions: When Ratios Are Equal',
            explanation: 'A proportion states that two ratios are equal. Proportions let us find unknown values by setting up equivalent relationships.',
            analogy: {
                type: 'The Balanced Scale',
                description: '**PROPORTION DEFINITION:**\nIf a/b = c/d, then a, b, c, d form a proportion\n\n**EXAMPLE:**\n2/3 = 6/9 is a proportion (both simplify to 2/3)\n\n**CROSS-MULTIPLICATION METHOD:**\n\nTo check if two ratios form a proportion OR to solve for unknown:\n\nIf a/b = c/d, then **a × d = b × c** (cross products are equal)\n\n**Visual:**\n```\n  a     c\n  - = -\n  b     d\n  \na × d = b × c\n```\n\n**EXAMPLE 1: Checking if proportion is true**\nIs 3/4 = 9/12?\n• Cross multiply: 3 × 12 = 36\n• 4 × 9 = 36\n• 36 = 36 ✓ YES, it\'s a proportion!\n\n**EXAMPLE 2: Solving for unknown**\nIf 3 pencils cost $2, how much do 12 pencils cost?\n\nSet up proportion:\n3 pencils     12 pencils\n———————  =  ——————————\n  $2              $x\n\n3/2 = 12/x\n\nCross multiply:\n3x = 2 × 12\n3x = 24\nx = 8\n\nAnswer: $8 for 12 pencils\n\n**PROPERTIES OF PROPORTIONS:**\n\n1. **Equivalent ratios:** 1/2 = 2/4 = 3/6 = 50/100 (all the same proportion)\n\n2. **Scaling:** Multiply or divide both parts by same number\n   • 2/3 → multiply by 4 → 8/12 (still equivalent)\n\n3. **Reciprocals:** If a/b = c/d, then b/a = d/c\n\nProportions are like mathematical balance scales - keep both sides equal!'
            },
            mindBlowingFacts: [
                'Similar triangles use proportions - this is how surveyors measure distances to unreachable places (like across canyons or to mountain tops)!',
                'Map scales are proportions: 1:50,000 means 1 cm on map = 50,000 cm in reality (500 m). Every measurement on the map is proportional to reality!',
                'The Richter scale for earthquakes is proportional: Each whole number increase means 10× stronger shaking. An 8.0 earthquake is 1,000× stronger than 5.0!'
            ],
            whyYouCare: 'Proportions solve: recipe scaling (triple a recipe), map reading, currency conversion, medication dosing by weight, dilution problems, and similarity in geometry!'
        },
        {
            title: 'Rates: Ratios with Different Units',
            explanation: 'A rate is a special ratio that compares two quantities with DIFFERENT units. Unit rates express "per ONE unit" and are especially useful for comparisons.',
            analogy: {
                type: 'Comparing Efficiency',
                description: '**RATE = Comparison with different units**\n\n**COMMON RATES:**\n\n**Speed/Velocity:**\n• 60 miles/hour\n• 100 meters/second\n• Units: distance/time\n\n**Price per Unit:**\n• $3.99/pound\n• $0.15/ounce\n• Units: money/quantity\n\n**Density:**\n• 1 g/mL\n• 8 kg/m³\n• Units: mass/volume\n\n**Population Density:**\n• 1,000 people/km²\n• Units: people/area\n\n**UNIT RATE:**\nRate with denominator = 1 (per ONE unit)\n\n**Example 1: Which is cheaper?**\n• Store A: 3 apples for $5\n• Store B: 5 apples for $7\n\nFind unit rate (price per 1 apple):\n• Store A: $5/3 = $1.67 per apple\n• Store B: $7/5 = $1.40 per apple\n• Store B is cheaper!\n\n**Example 2: Who\'s faster?**\n• Runner A: 400 meters in 80 seconds\n• Runner B: 300 meters in 50 seconds\n\nFind unit rate (meters per second):\n• Runner A: 400/80 = 5 m/s\n• Runner B: 300/50 = 6 m/s\n• Runner B is faster!\n\n**CALCULATING UNIT RATE:**\nDivide the first quantity by the second:\n\nRate: a units of X per b units of Y\nUnit rate: (a/b) units of X per 1 unit of Y\n\n**Example:**\n$12 for 4 pounds → $12/4 = $3 per pound\n\n**WHY UNIT RATES?**\nMakes comparison easy - everything is "per ONE unit"\n• Can\'t easily compare "$5 for 3 apples" vs "$7 for 5 apples"\n• CAN easily compare "$1.67/apple" vs "$1.40/apple"\n\nUnit rates are the ultimate comparison tool!'
            },
            mindBlowingFacts: [
                'The speed of light is the universe\'s ultimate rate: 299,792,458 meters/second (about 186,000 miles/second) - nothing moves faster!',
                'Your heart rate is a rate: ~70 beats/minute. Over a lifetime (80 years), that\'s about 3 BILLION heartbeats!',
                'Fuel efficiency rates vary: US uses miles/gallon (higher = better), Europe uses liters/100km (lower = better) - same concept, flipped ratio!'
            ],
            whyYouCare: 'Rates help you: find best prices (unit pricing), calculate travel time (speed), understand efficiency (miles per gallon), compare performance (points per game), and make informed decisions!'
        },
        {
            title: 'Unit Conversion: Dimensional Analysis Magic',
            explanation: 'Unit conversion uses multiplication by conversion factors (fractions equal to 1) to change units while keeping the value the same. Dimensional analysis ensures correct unit cancellation.',
            analogy: {
                type: 'The Conversion Chain',
                description: '**KEY IDEA: Multiply by fractions that equal 1**\n\n**CONVERSION FACTOR = Ratio that equals 1**\n\nExample: 1 foot = 12 inches\nTwo conversion factors:\n• 12 in / 1 ft = 1 (numerator = denominator in value)\n• 1 ft / 12 in = 1 (reciprocal, also = 1)\n\nMultiplying by 1 doesn\'t change value, only units!\n\n**DIMENSIONAL ANALYSIS METHOD:**\n\n**Example 1: Convert 5 feet to inches**\n\nStep 1: Write starting value: 5 ft\n\nStep 2: Choose conversion factor that CANCELS "ft":\n5 ft × (12 in/1 ft)\n         ↑\n    "ft" will cancel\n\nStep 3: Cancel units:\n5 ft × (12 in/1 ft) = 5 × 12 in = 60 in\n  ❌        ↑\n(canceled)  (remains)\n\nAnswer: 60 inches\n\n**Example 2: Convert 3 hours to seconds**\n\nNeed chain: hours → minutes → seconds\n\n3 hr × (60 min/1 hr) × (60 sec/1 min)\n   ❌         ❌\n\n= 3 × 60 × 60 sec = 10,800 seconds\n\n**Example 3: Speed conversion**\nConvert 60 miles/hour to feet/second\n\n60 mi/hr × (5280 ft/1 mi) × (1 hr/60 min) × (1 min/60 sec)\n\n= 60 × 5280/(60 × 60) ft/sec = 88 ft/sec\n\n**STRATEGY:**\n1. Write starting value with units\n2. Multiply by conversion factors\n3. Arrange so unwanted units CANCEL (top×bottom)\n4. Keep wanted units\n5. Calculate final number\n\n**COMMON CONVERSIONS:**\n\n**Length:**\n• 1 ft = 12 in\n• 1 yd = 3 ft\n• 1 mi = 5,280 ft\n• 1 m = 100 cm\n• 1 km = 1,000 m\n\n**Time:**\n• 1 min = 60 sec\n• 1 hr = 60 min\n• 1 day = 24 hr\n\n**Mass/Weight:**\n• 1 lb = 16 oz\n• 1 kg = 1,000 g\n• 1 ton = 2,000 lb\n\n**Volume:**\n• 1 gal = 4 qt\n• 1 qt = 2 pt\n• 1 L = 1,000 mL\n\nDimensional analysis is like a cancellation game - set up dominoes to knock out unwanted units!'
            },
            mindBlowingFacts: [
                'The Mars Climate Orbiter crashed in 1999 because NASA used metric but Lockheed Martin used imperial units - a $327 million unit conversion mistake!',
                'A light-year (distance light travels in 1 year) = 9.46 trillion km. Converting: 300,000 km/s × 60 s/min × 60 min/hr × 24 hr/day × 365 day/yr ≈ 9.46 × 10¹² km!',
                'Your blood travels about 12,000 miles per day through your circulatory system - that\'s New York to Tokyo and back!'
            ],
            whyYouCare: 'Unit conversion is essential for: international travel (currency, measurements), cooking (metric ↔ imperial), science (all experiments!), engineering (design specs), and avoiding expensive mistakes!'
        },
        {
            title: 'Scale and Scale Factor: Maps, Models, and Similar Figures',
            explanation: 'Scale factor is the ratio of corresponding measurements in similar figures or between a model and the real object. Understanding scale helps interpret maps, blueprints, and models.',
            analogy: {
                type: 'Shrinking and Enlarging',
                description: '**SCALE FACTOR:**\nRatio of new size to original size (or model to actual)\n\n**TYPES OF SCALES:**\n\n**1. MAP SCALE**\n• Written as 1:50,000 or "1 cm = 500 m"\n• Means: 1 cm on map represents 50,000 cm (500 m) in reality\n• Scale factor = 1/50,000\n\n**Example:**\nMap scale 1:100,000\nTwo cities are 5 cm apart on map\nActual distance = 5 cm × 100,000 = 500,000 cm = 5 km\n\n**2. MODEL SCALE**\n• Model car at 1:24 scale\n• Every dimension on model is 1/24 of real car\n• Real car 12 ft long → model is 12/24 = 0.5 ft = 6 inches\n\n**3. SIMILAR FIGURES (Geometry)**\n• Same shape, different size\n• All corresponding lengths have same scale factor\n\n**Example:**\nTwo similar triangles:\n• Small triangle: sides 3, 4, 5\n• Large triangle: sides 6, 8, 10\n• Scale factor = 6/3 = 8/4 = 10/5 = 2\n• Large triangle is 2× the size of small\n\n**AREA AND VOLUME SCALING:**\n\n**Important:** Area and volume scale DIFFERENTLY than length!\n\n**If scale factor for length = k:**\n• Area scale factor = k²\n• Volume scale factor = k³\n\n**Example:**\nScale factor = 3 (triple the size)\n• Length: 3× larger\n• Area: 3² = 9× larger\n• Volume: 3³ = 27× larger\n\n**Why?**\nArea is 2D (length × width): k × k = k²\nVolume is 3D (length × width × height): k × k × k = k³\n\n**Real Example:**\nIf you double the dimensions of a box (scale factor = 2):\n• Surface area becomes 4× larger (2²)\n• Volume becomes 8× larger (2³)\n\nThis is why large animals (elephants) have thick legs - volume (weight) increases faster than strength (area)!\n\nScale is the mathematics of zooming in and out!'
            },
            mindBlowingFacts: [
                'If you scaled a human to ant size (scale factor ~1/100), they\'d be 100× shorter, but their weight would decrease by 100³ = 1,000,000×! That\'s why ants can lift 50× their body weight but humans can\'t.',
                'Movie miniatures use scale: The Titanic model in the movie was 1:20 scale (45 feet long instead of 900 feet) - saved millions while looking realistic!',
                'Google Maps lets you zoom from 1:1000 (city blocks) to 1:35,000,000 (whole Earth) - that\'s a scale factor range of 35,000!'
            ],
            whyYouCare: 'Scale understanding helps you: read maps and blueprints, build scale models, understand similar figures in geometry, interpret data visualizations, and appreciate size comparisons (micro to macro)!'
        }
    ],
    workedExamples: [
        {
            scenario: 'Setting Up and Solving Proportions',
            problemSetup: 'A recipe for 4 servings calls for 3 cups of flour. You need to make 14 servings for a party. How many cups of flour do you need?',
            steps: [
                {
                    step: 1,
                    description: 'Identify the proportion relationship:\n4 servings needs 3 cups\n14 servings needs x cups\n\nThe ratio of servings to flour should stay constant',
                    reasoning: 'This is a proportion problem - the relationship between servings and flour remains the same'
                },
                {
                    step: 2,
                    description: 'Set up the proportion (keep same units on same sides):\n4 servings     14 servings\n—————————  =  ——————————\n  3 cups          x cups\n\nOr in fraction form: 4/3 = 14/x',
                    reasoning: 'Matching quantities go in corresponding positions - servings with servings, cups with cups'
                },
                {
                    step: 3,
                    description: 'Cross-multiply:\n4 × x = 3 × 14\n4x = 42',
                    reasoning: 'Cross-multiplication gives us an equation we can solve'
                },
                {
                    step: 4,
                    description: 'Solve for x:\n4x = 42\nx = 42/4\nx = 10.5',
                    reasoning: 'Divide both sides by 4 to isolate x'
                },
                {
                    step: 5,
                    description: 'Check answer makes sense:\n• Original: 4 servings → 3 cups\n• Our answer: 14 servings → 10.5 cups\n• 14 is 3.5× bigger than 4\n• 10.5 is 3.5× bigger than 3 ✓\n• Proportion maintained!',
                    reasoning: 'Always verify your answer is reasonable'
                }
            ],
            solution: 'You need 10.5 cups (or 10½ cups) of flour for 14 servings.',
            realWorldApplication: 'This exact calculation is used in: cooking (scaling recipes), pharmacy (medication dosing by weight), chemistry (solution preparation), construction (mixing concrete ratios), and manufacturing (batch production)!'
        },
        {
            scenario: 'Unit Conversion with Dimensional Analysis',
            problemSetup: 'A car travels at 90 kilometers per hour. Convert this speed to meters per second.',
            steps: [
                {
                    step: 1,
                    description: 'Write the starting value with units:\n90 km/hr',
                    reasoning: 'Always start with what you have, including units'
                },
                {
                    step: 2,
                    description: 'Identify needed conversions:\n• km → m: 1 km = 1,000 m\n• hr → sec: 1 hr = 60 min, 1 min = 60 sec (so 1 hr = 3,600 sec)',
                    reasoning: 'We need to change both the numerator (km→m) and denominator (hr→sec)'
                },
                {
                    step: 3,
                    description: 'Set up conversion factors to cancel unwanted units:\n90 km/hr × (1,000 m/1 km) × (1 hr/3,600 sec)\n              ↑                ↑\n           km cancels       hr cancels',
                    reasoning: 'Arrange factors so km cancels and hr cancels, leaving m/sec'
                },
                {
                    step: 4,
                    description: 'Cancel units:\n90 km/hr × (1,000 m/1 km) × (1 hr/3,600 sec)\n   ❌              ❌\n\n= (90 × 1,000)/(3,600) m/sec',
                    reasoning: 'Cross out canceled units, keep remaining units (m/sec)'
                },
                {
                    step: 5,
                    description: 'Calculate:\n= 90,000/3,600 m/sec\n= 25 m/sec',
                    reasoning: 'Simplify the numbers'
                },
                {
                    step: 6,
                    description: 'Verify: 90 km/hr = 25 m/sec makes sense\n• 90 km in 1 hour\n• That\'s 90,000 m in 3,600 seconds\n• 90,000 ÷ 3,600 = 25 ✓',
                    reasoning: 'Check that the answer is reasonable'
                }
            ],
            solution: '90 km/hr = 25 m/sec',
            realWorldApplication: 'Speed conversions are used in: international travel (mph ↔ km/h), physics problems, aviation (knots to mph), and understanding speed limits in different countries!'
        },
        {
            scenario: 'Scale Factor with Area',
            problemSetup: 'A photograph is 4 inches wide and 6 inches tall. You want to enlarge it so the width is 10 inches. What will the new height be? What is the scale factor? How does the area change?',
            steps: [
                {
                    step: 1,
                    description: 'Find scale factor from width:\nOriginal width: 4 inches\nNew width: 10 inches\nScale factor = new/original = 10/4 = 2.5',
                    reasoning: 'Scale factor tells us how much to multiply all dimensions'
                },
                {
                    step: 2,
                    description: 'Apply scale factor to height:\nOriginal height: 6 inches\nNew height = 6 × 2.5 = 15 inches',
                    reasoning: 'To maintain proportions, multiply height by same scale factor'
                },
                {
                    step: 3,
                    description: 'Alternative: Use proportion\n4 in wide     10 in wide\n—————————  =  ——————————\n6 in tall      x in tall\n\n4/6 = 10/x\n4x = 60\nx = 15 inches',
                    reasoning: 'Proportion method gives same answer - ratios stay equal'
                },
                {
                    step: 4,
                    description: 'Calculate original area:\nArea = width × height = 4 × 6 = 24 square inches',
                    reasoning: 'Need original area to compare with new area'
                },
                {
                    step: 5,
                    description: 'Calculate new area:\nNew area = 10 × 15 = 150 square inches',
                    reasoning: 'Area of enlarged photograph'
                },
                {
                    step: 6,
                    description: 'Find area scale factor:\nArea scale factor = 150/24 = 6.25 = 2.5²\n\nNotice: Area scale factor = (length scale factor)²',
                    reasoning: 'Area scales by the SQUARE of the length scale factor - this is always true!'
                }
            ],
            solution: 'New height = 15 inches. Scale factor = 2.5 for length. Area increases by factor of 6.25 (which is 2.5²).',
            realWorldApplication: 'This concept explains: why printing costs increase faster than size (paper area matters), why larger animals need proportionally thicker bones, and how to calculate material needed when scaling designs!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Simplify the ratio 24:36 to its lowest terms.',
            hints: [
                'Find the greatest common factor (GCF) of 24 and 36',
                'GCF(24, 36) = 12',
                'Divide both numbers by 12',
                'Answer: 24/12 : 36/12 = 2:3'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Store A sells 3 pounds of apples for $7. Store B sells 5 pounds for $11. Which store has the better unit price?',
            hints: [
                'Calculate unit price (price per 1 pound) for each store',
                'Store A: $7/3 = $2.33 per pound',
                'Store B: $11/5 = $2.20 per pound',
                'Lower price per pound is better → Store B is cheaper'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p3',
            question: 'Convert 5 miles to feet. (1 mile = 5,280 feet)',
            hints: [
                'Use dimensional analysis: 5 mi × (5,280 ft/1 mi)',
                'The "mi" units cancel',
                'Calculate: 5 × 5,280 = 26,400 ft',
                'Answer: 26,400 feet'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p4',
            question: 'If 8 workers can build a wall in 12 days, how long will it take 6 workers to build the same wall? (Assume all workers work at the same rate)',
            hints: [
                'This is inverse proportion - fewer workers = more time',
                'Total work = workers × days = constant',
                '8 × 12 = 6 × x',
                '96 = 6x → x = 16 days',
                'Fewer workers (6 vs 8) takes longer (16 vs 12 days) ✓'
            ],
            difficulty: 'medium'
        },
        {
            id: 'p5',
            question: 'A map has a scale of 1:250,000. Two cities are 8 cm apart on the map. What is the actual distance between them in kilometers?',
            hints: [
                'Scale 1:250,000 means 1 cm on map = 250,000 cm in reality',
                'If 8 cm on map, actual distance = 8 × 250,000 = 2,000,000 cm',
                'Convert cm to km: 2,000,000 cm = 20,000 m = 20 km',
                'Alternative: 250,000 cm = 2.5 km, so 8 × 2.5 = 20 km'
            ],
            difficulty: 'hard'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which of the following ratios is equivalent to 3:5?',
            options: [
                { label: 'A', text: '5:3' },
                { label: 'B', text: '6:10' },
                { label: 'C', text: '3:8' },
                { label: 'D', text: '9:12' },
                { label: 'E', text: '15:20' }
            ],
            correctAnswer: 'B',
            explanation: 'To find equivalent ratios, multiply or divide both parts by the same number. 3:5 = (3×2):(5×2) = 6:10.',
            storyExplanation: 'Think of 3:5 as a recipe - 3 parts flour to 5 parts sugar. If you double the recipe, you need 6 parts flour to 10 parts sugar (6:10). Same proportion, different quantities!'
        },
        {
            id: 'q2',
            question: 'What is the unit rate for $15 for 3 pounds?',
            options: [
                { label: 'A', text: '$3 per pound' },
                { label: 'B', text: '$5 per pound' },
                { label: 'C', text: '$15 per pound' },
                { label: 'D', text: '$45 per pound' },
                { label: 'E', text: '$1 per pound' }
            ],
            correctAnswer: 'B',
            explanation: 'Unit rate means "per ONE unit." Divide: $15 / 3 pounds = $5 per pound.',
            storyExplanation: 'If 3 pounds cost $15 total, then 1 pound costs $15 ÷ 3 = $5. Unit rate always has denominator of 1!'
        },
        {
            id: 'q3',
            question: 'Solve the proportion: x/4 = 15/20',
            options: [
                { label: 'A', text: 'x = 2' },
                { label: 'B', text: 'x = 3' },
                { label: 'C', text: 'x = 4' },
                { label: 'D', text: 'x = 5' },
                { label: 'E', text: 'x = 12' }
            ],
            correctAnswer: 'B',
            explanation: 'Cross-multiply: x × 20 = 4 × 15 → 20x = 60 → x = 3.',
            storyExplanation: 'Think: "What times 20 equals 4 times 15?" Cross-multiplication gives us 20x = 60, so x = 3. Check: 3/4 and 15/20 both simplify to 3/4!'
        },
        {
            id: 'q4',
            question: 'How many inches are in 3 feet? (1 foot = 12 inches)',
            options: [
                { label: 'A', text: '15 inches' },
                { label: 'B', text: '24 inches' },
                { label: 'C', text: '36 inches' },
                { label: 'D', text: '48 inches' },
                { label: 'E', text: '60 inches' }
            ],
            correctAnswer: 'C',
            explanation: 'Use conversion factor: 3 ft × (12 in/1 ft) = 36 inches.',
            storyExplanation: 'Each foot contains 12 inches, so 3 feet = 3 × 12 = 36 inches. It\'s like having 3 cartons of 12 eggs - you have 36 eggs total!'
        },
        {
            id: 'q5',
            question: 'A photograph is enlarged using a scale factor of 4. If the original area was 20 square inches, what is the area of the enlarged photograph?',
            options: [
                { label: 'A', text: '24 square inches' },
                { label: 'B', text: '80 square inches' },
                { label: 'C', text: '160 square inches' },
                { label: 'D', text: '320 square inches' },
                { label: 'E', text: '400 square inches' }
            ],
            correctAnswer: 'D',
            explanation: 'When length scale factor = 4, area scale factor = 4² = 16. New area = 20 × 16 = 320 square inches.',
            storyExplanation: 'Area is 2-dimensional, so it scales by the SQUARE of the length scale factor. Length ×4 means area ×4² = ×16. So 20 × 16 = 320 square inches!'
        }
    ],
    memoryAids: [
        {
            technique: 'Phrase',
            description: 'Cross-multiplication: "Cross multiply to solve - multiply diagonally across the equal sign"',
            example: 'a/b = c/d → draw X connecting a with d and b with c → a×d = b×c'
        },
        {
            technique: 'Acronym',
            description: 'For dimensional analysis remember "PUCC": Pick Unit, Choose Conversion, Cancel units, Calculate',
            example: 'Always follow these 4 steps for unit conversion problems'
        },
        {
            technique: 'Visual',
            description: 'Rate problems: Draw a T-chart with quantities on top and bottom, then set up proportion keeping same quantities aligned',
            example: 'Left side of T: 3 apples/$2, Right side: 9 apples/$x'
        },
        {
            technique: 'Rhyme',
            description: 'Unit conversion rhyme: "To convert with ease and grace, multiply by fractions that equal one\'s place"',
            example: '(12 in/1 ft) = 1, so multiplying by it changes units but not value'
        },
        {
            technique: 'Story',
            description: 'Scale factors: "Length goes by k, Area by k squared, Volume by k cubed - that\'s the rule we\'ve declared!"',
            example: 'Scale factor 2 → length ×2, area ×4, volume ×8'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Flipping ratios incorrectly when setting up proportions',
            correction: 'Keep corresponding quantities in the same positions! If comparing apples/dollars, keep apples on top and dollars on bottom in BOTH ratios of the proportion.',
            whyItMatters: 'Flipping incorrectly gives wrong answers. Always match units: a/b = c/d where a and c are same type, b and d are same type'
        },
        {
            mistake: 'Forgetting to simplify ratios',
            correction: 'Always reduce ratios to lowest terms, just like fractions. 12:18 should be simplified to 2:3 (divide both by 6).',
            whyItMatters: 'Unsimplified ratios are harder to understand and compare. 2:3 clearly shows "2 parts to 3 parts"'
        },
        {
            mistake: 'Using wrong conversion factor orientation in dimensional analysis',
            correction: 'Choose the conversion factor form that CANCELS the unwanted unit. If converting FROM feet, put feet in DENOMINATOR: (12 in/1 ft), not (1 ft/12 in).',
            whyItMatters: 'Wrong orientation doubles the error instead of canceling. Always check that units cancel correctly!'
        },
        {
            mistake: 'Treating inverse proportions like direct proportions',
            correction: 'DIRECT proportion: both increase together (more apples = more cost). INVERSE proportion: one increases as other decreases (more workers = less time). Use different formulas!',
            whyItMatters: 'Inverse proportions multiply (workers × time = constant), direct proportions divide (apples/cost = constant). Confusing them gives opposite answers!'
        },
        {
            mistake: 'Forgetting area scales by k² and volume by k³',
            correction: 'If length scale factor = k, then area scale factor = k² and volume scale factor = k³. Area is 2D (length×width), volume is 3D (length×width×height).',
            whyItMatters: 'Using linear scale factor for area/volume drastically underestimates the change. Doubling dimensions quadruples area and octuples volume!'
        }
    ],
    quickReference: [
        {
            title: 'Ratio Forms',
            content: 'FRACTION: a/b\nCOLON: a:b\nWORD: "a to b"\nAll represent same comparison\nSimplify like fractions',
            category: 'rule'
        },
        {
            title: 'Proportion Solving',
            content: 'If a/b = c/d, then a×d = b×c (cross-multiplication)\nExample: x/5 = 6/10 → 10x = 30 → x = 3',
            category: 'formula'
        },
        {
            title: 'Unit Rate Calculation',
            content: 'Unit Rate = Total Quantity / Total Units\nExample: $15 for 3 lb → $15/3 = $5 per lb\nMakes comparison easy',
            category: 'formula'
        },
        {
            title: 'Dimensional Analysis Steps',
            content: '1. Write starting value with units\n2. Multiply by conversion factors\n3. Cancel units (top×bottom)\n4. Calculate result\nExample: 5 ft × (12 in/1 ft) = 60 in',
            category: 'process'
        },
        {
            title: 'Scale Factor Effects',
            content: 'If length scale factor = k:\n• Length: multiply by k\n• Area: multiply by k²\n• Volume: multiply by k³\nExample: Scale 3× → area 9×, volume 27×',
            category: 'rule'
        }
    ],
    summary: [
        'Ratios compare quantities and can be written as fractions (a/b), colons (a:b), or words ("a to b") - simplify like fractions',
        'Proportions state that two ratios are equal (a/b = c/d) - solve using cross-multiplication (a×d = b×c)',
        'Rates compare quantities with different units (speed, price, density) - unit rates have denominator of 1 for easy comparison',
        'Unit conversion uses dimensional analysis: multiply by conversion factors (ratios = 1) to cancel unwanted units',
        'Scale factor is the ratio of new to original size - area scales by k², volume scales by k³ (where k = length scale factor)',
        'Map scales show proportion between map distance and real distance (1:50,000 means 1 cm map = 50,000 cm reality)',
        'Cross-multiplication: fastest way to solve proportions - multiply diagonal products and set equal',
        'Ratio and proportion concepts apply to: recipe scaling, currency conversion, map reading, medication dosing, and similarity in geometry'
    ],
    selfAssessment: [
        'I can express ratios in different forms and simplify them to lowest terms',
        'I can set up and solve proportions using cross-multiplication',
        'I understand the difference between ratios and rates (same vs different units)',
        'I can calculate unit rates and use them to compare options',
        'I can convert units using dimensional analysis and conversion factors',
        'I understand how scale factors work and can apply them to maps and models',
        'I know that area scales by k² and volume by k³ when length scales by k',
        'I can apply ratios and proportions to solve real-world problems'
    ]
};
export default lesson;
//# sourceMappingURL=day-19.js.map
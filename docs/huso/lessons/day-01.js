const lesson = {
    day: 1,
    subject: 'biology',
    title: 'Cell Theory - The Building Blocks of Life',
    emoji: '🔬',
    learningGoal: 'Understand the fundamental principles of cell theory and discover how cells are the foundation of all living things',
    estimatedTime: 60,
    objectives: [
        'Explain the three main principles of cell theory',
        'Distinguish between prokaryotic and eukaryotic cells',
        'Describe the key organelles and their functions in a cell'
    ],
    discoveryStory: {
        title: 'The Microscope Revolution',
        content: "Imagine it's 1665, and you're Robert Hooke, staring through a crude microscope at a thin slice of cork. Suddenly, you see something that changes science forever - tiny box-like structures that remind you of monastery cells. You've just discovered cells! But wait, it gets even cooler... 200 years later, scientists Schleiden, Schwann, and Virchow piece together the puzzle: ALL living things are made of cells, cells come from other cells, and cells are the basic unit of life. This discovery was like finding out that everything in the universe - from the tiniest bacteria to the biggest blue whale - is built from the same LEGO blocks!",
        emoji: '🔬'
    },
    keyTerms: [
        {
            term: 'Cell',
            definition: 'The smallest unit of life that can function independently and perform all necessary functions of life',
            example: 'A single bacteria is a complete cell that can eat, reproduce, and respond to its environment'
        },
        {
            term: 'Cell Theory',
            definition: 'A fundamental scientific theory stating that all living things are made of cells, cells are the basic unit of life, and all cells come from pre-existing cells',
            example: 'Cell theory explains why you inherit traits from your parents - you started as one of their cells'
        },
        {
            term: 'Prokaryotic Cell',
            definition: 'A simple cell without a nucleus or membrane-bound organelles (like bacteria)',
            example: 'The bacteria in yogurt are prokaryotic cells'
        },
        {
            term: 'Eukaryotic Cell',
            definition: 'A complex cell with a nucleus and specialized organelles (like plant and animal cells)',
            example: 'Every cell in your body is a eukaryotic cell with a control center (nucleus)'
        }
    ],
    concepts: [
        {
            title: 'What is Cell Theory?',
            explanation: "Cell theory is one of the most fundamental principles in biology. Think of it as the 'rules of life' that apply to every living organism on Earth.",
            analogy: {
                type: 'LEGO',
                description: 'Imagine cells are like LEGO blocks. Just like you can build a tiny car or a massive castle with LEGO blocks, nature uses cells to build everything from microscopic bacteria to enormous elephants. The blocks might be arranged differently, but they\'re all the same basic building material!'
            },
            mindBlowingFacts: [
                'Your body contains about 37.2 TRILLION cells - that\'s 37,200,000,000,000!',
                'Every second, your body produces about 25 MILLION new cells',
                'The largest cell in the world is an ostrich egg - you can see it without a microscope!'
            ],
            whyYouCare: 'Right now, as you read this, millions of your cells are dividing, working, and keeping you alive. Understanding cells means understanding how YOU work!'
        },
        {
            title: 'The Three Principles of Cell Theory',
            explanation: 'Cell theory has three core principles that scientists discovered over centuries of research.',
            mindBlowingFacts: [
                'Principle 1: All living things are made of one or more cells',
                'Principle 2: The cell is the basic unit of life',
                'Principle 3: All cells come from pre-existing cells'
            ],
            whyYouCare: 'These principles explain why you look like your parents (you started as one of their cells!), why diseases spread (cells infecting other cells), and why you can heal (cells making new cells).'
        }
    ],
    workedExamples: [
        {
            scenario: 'Detective Biology Case',
            problemSetup: 'Dr. Sarah finds a mysterious substance in her lab. She needs to determine if it\'s living or non-living using cell theory. Under the microscope, she sees structures but isn\'t sure if they\'re cells.',
            steps: [
                {
                    step: 1,
                    description: 'Check for cellular structure',
                    reasoning: 'According to cell theory, all living things are made of cells. So first, we look for cell-like structures.'
                },
                {
                    step: 2,
                    description: 'Look for signs of reproduction',
                    reasoning: 'Cell theory says all cells come from pre-existing cells. If we see cells dividing or evidence of reproduction, that\'s a strong indicator.'
                },
                {
                    step: 3,
                    description: 'Observe if structures function independently',
                    reasoning: 'Cells are the basic unit of life, so they should be able to carry out life processes independently or as part of a system.'
                }
            ],
            solution: 'If the structures show organization, reproduction capability, and functional independence, Dr. Sarah can conclude it\'s living tissue made of cells!',
            realWorldApplication: 'This is exactly how doctors identify infections, how forensic scientists identify biological evidence, and how researchers discover new life forms!'
        }
    ],
    practiceProblems: [
        {
            id: 'p1',
            question: 'Your friend cuts their finger. Using cell theory, explain how the wound heals over the next few days.',
            hints: [
                'Think about Principle 3: All cells come from pre-existing cells',
                'What type of cells would be involved in skin repair?'
            ],
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'A scientist discovers a virus under a microscope. Why would a virus NOT be considered living according to cell theory?',
            hints: [
                'Review the three principles of cell theory',
                'Can viruses reproduce on their own?'
            ],
            difficulty: 'medium'
        }
    ],
    quiz: [
        {
            id: 'q1',
            question: 'Which of the following is NOT one of the three main principles of cell theory?',
            options: [
                { label: 'A', text: 'All living things are made of one or more cells' },
                { label: 'B', text: 'The cell is the basic unit of life' },
                { label: 'C', text: 'All cells contain DNA' },
                { label: 'D', text: 'All cells come from pre-existing cells' },
                { label: 'E', text: 'Cells are the smallest unit of life' }
            ],
            correctAnswer: 'C',
            explanation: 'While all cells do contain genetic material, this is not one of the three main principles of cell theory established by Schleiden, Schwann, and Virchow.',
            storyExplanation: 'Think of it this way: the three principles are like the three rules of a LEGO set - what it\'s made of, what it does, and where it comes from. DNA is important, but it\'s more about what\'s INSIDE the LEGO block, not about the rules of building with them!'
        },
        {
            id: 'q2',
            question: 'A human body contains approximately how many cells?',
            options: [
                { label: 'A', text: '37 million' },
                { label: 'B', text: '37 billion' },
                { label: 'C', text: '37 trillion' },
                { label: 'D', text: '37 quadrillion' },
                { label: 'E', text: '37 thousand' }
            ],
            correctAnswer: 'C',
            explanation: 'The human body contains approximately 37.2 trillion cells, making us incredibly complex organisms!',
            storyExplanation: 'That\'s 37,200,000,000,000 cells - if you counted one cell per second, it would take you over 1 MILLION years to count them all!'
        },
        {
            id: 'q3',
            question: 'According to cell theory, how do new cells arise?',
            options: [
                { label: 'A', text: 'They are created from non-living matter' },
                { label: 'B', text: 'They come from pre-existing cells' },
                { label: 'C', text: 'They spontaneously generate' },
                { label: 'D', text: 'They are formed by combining proteins' },
                { label: 'E', text: 'They appear when needed' }
            ],
            correctAnswer: 'B',
            explanation: 'This is the third principle of cell theory: all cells come from pre-existing cells through cell division.',
            storyExplanation: 'Just like you can\'t create a new LEGO block from thin air - you need existing blocks to build more - cells can only come from other cells dividing!'
        },
        {
            id: 'q4',
            question: 'Why are viruses NOT considered living according to cell theory?',
            options: [
                { label: 'A', text: 'They are too small' },
                { label: 'B', text: 'They don\'t contain DNA' },
                { label: 'C', text: 'They are not made of cells' },
                { label: 'D', text: 'They don\'t move' },
                { label: 'E', text: 'They can\'t be seen under a microscope' }
            ],
            correctAnswer: 'C',
            explanation: 'Viruses are not made of cells, violating the first principle of cell theory that all living things are made of cells.',
            storyExplanation: 'Think of viruses as instruction manuals (DNA or RNA) wrapped in protein - they need to hijack actual cells (like a factory) to make copies of themselves. They\'re like blueprints without a builder!'
        },
        {
            id: 'q5',
            question: 'What did Robert Hooke name the structures he saw when looking at cork under a microscope?',
            options: [
                { label: 'A', text: 'Boxes' },
                { label: 'B', text: 'Units' },
                { label: 'C', text: 'Cells' },
                { label: 'D', text: 'Blocks' },
                { label: 'E', text: 'Chambers' }
            ],
            correctAnswer: 'C',
            explanation: 'Robert Hooke named them \'cells\' because they reminded him of the small rooms (cells) that monks lived in at monasteries.',
            storyExplanation: 'Imagine Hooke looking through his microscope thinking \'These tiny boxes look just like the monastery rooms I\'ve seen!\' - and just like that, he gave cells their name that we still use 350+ years later!'
        }
    ],
    memoryAids: [
        {
            technique: 'Acronym',
            description: 'Remember the 3 principles of Cell Theory with "ACO" - All living things are made of cells, Cells are the basic unit of life, Old cells make new cells',
            example: '"ACO" - think of it like LEGO blocks building everything!'
        },
        {
            technique: 'Rhyme',
            description: 'Cells are small, cells are neat, they make you whole from head to feet!',
            example: 'Use this rhyme to remember that cells make up your entire body'
        }
    ],
    commonMistakes: [
        {
            mistake: 'Thinking viruses are living cells',
            correction: 'Viruses are NOT cells and are NOT considered living because they cannot reproduce on their own and lack cellular structure',
            whyItMatters: 'This is why antibiotics (which kill bacteria cells) don\'t work on viral infections like the common cold'
        },
        {
            mistake: 'Confusing "cells" with "atoms"',
            correction: 'Cells are made OF atoms and molecules. Atoms are much smaller than cells - millions of atoms make up a single cell',
            whyItMatters: 'Understanding this hierarchy helps you understand the scale of life from chemistry to biology'
        }
    ],
    quickReference: [
        {
            title: 'Three Principles of Cell Theory',
            content: '1. All living things are made of one or more cells\n2. The cell is the basic unit of life\n3. All cells come from pre-existing cells',
            category: 'principle'
        },
        {
            title: 'Cell Types',
            content: 'Prokaryotic (no nucleus) → Bacteria\nEukaryotic (has nucleus) → Plants, Animals, Fungi',
            category: 'rule'
        }
    ],
    summary: [
        'Cell theory states that all living things are made of cells, cells are the basic unit of life, and all cells come from other cells',
        'Robert Hooke discovered cells in 1665, and the full cell theory was developed over 200 years by multiple scientists',
        'Your body contains about 37.2 trillion cells that are constantly dividing and working to keep you alive',
        'Viruses are not considered living because they are not made of cells and cannot reproduce on their own',
        'Understanding cells is understanding how YOU work - from healing wounds to inheriting traits from your parents'
    ],
    selfAssessment: [
        'I can explain the three main principles of cell theory',
        'I understand why all living things are made of cells',
        'I can give examples of how cell theory applies to everyday life',
        'I know why viruses are not considered living according to cell theory',
        'I understand how Robert Hooke discovered cells'
    ]
};
export default lesson;
//# sourceMappingURL=day-01.js.map
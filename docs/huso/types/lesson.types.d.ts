export type Subject = 'biology' | 'chemistry' | 'earth-science' | 'math';
export interface DiscoveryStory {
    title: string;
    content: string;
    emoji?: string;
}
export interface ConceptBox {
    title: string;
    explanation: string;
    analogy?: {
        type: string;
        description: string;
    };
    mindBlowingFacts?: string[];
    whyYouCare?: string;
}
export interface WorkedExample {
    scenario: string;
    problemSetup: string;
    steps: {
        step: number;
        description: string;
        reasoning: string;
    }[];
    solution: string;
    realWorldApplication?: string;
}
export interface PracticeProblem {
    id: string;
    question: string;
    hints?: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    solution?: string;
}
export interface QuizQuestion {
    id: string;
    question: string;
    options: {
        label: string;
        text: string;
    }[];
    correctAnswer: string;
    explanation: string;
    storyExplanation?: string;
}
export interface KeyTerm {
    term: string;
    definition: string;
    example?: string;
}
export interface CommonMistake {
    mistake: string;
    correction: string;
    whyItMatters?: string;
}
export interface MemoryAid {
    technique: string;
    description: string;
    example?: string;
}
export interface QuickReference {
    title: string;
    content: string;
    category?: 'formula' | 'principle' | 'rule' | 'process';
}
export interface VisualAid {
    type: 'diagram' | 'chart' | 'illustration' | 'infographic';
    description: string;
    altText: string;
    imagePath?: string;
}
export interface LessonConnection {
    type: 'previous' | 'next' | 'related';
    day: number;
    topic: string;
    reason?: string;
}
export interface Lesson {
    day: number;
    subject: Subject;
    title: string;
    emoji: string;
    learningGoal: string;
    estimatedTime: number;
    objectives: string[];
    discoveryStory: DiscoveryStory;
    keyTerms: KeyTerm[];
    concepts: ConceptBox[];
    workedExamples: WorkedExample[];
    practiceProblems: PracticeProblem[];
    memoryAids?: MemoryAid[];
    commonMistakes?: CommonMistake[];
    quickReference?: QuickReference[];
    visualAids?: VisualAid[];
    quiz: QuizQuestion[];
    summary: string[];
    selfAssessment: string[];
    connections?: LessonConnection[];
}
export interface CurriculumPlan {
    totalDays: 40;
    subjects: Subject[];
    schedule: {
        day: number;
        subject: Subject;
        topic: string;
        difficulty: 'foundation' | 'intermediate' | 'advanced' | 'competition';
    }[];
}
export interface StudentProgress {
    completedDays: number[];
    quizScores: {
        day: number;
        score: number;
        totalQuestions: number;
        timeSpent: number;
    }[];
    lastAccessedDay: number;
    streak: number;
    subjectProgress: {
        [key in Subject]?: {
            averageScore: number;
            daysCompleted: number;
        };
    };
}

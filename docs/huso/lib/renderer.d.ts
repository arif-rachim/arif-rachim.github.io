import type { Lesson } from '../types/lesson.types.js';
export declare class LessonRenderer {
    private container;
    constructor(containerId: string);
    renderLesson(lesson: Lesson): void;
    private createHeader;
    private createObjectives;
    private createDiscoveryStory;
    private createConceptBox;
    private createWorkedExample;
    private createPracticeProblem;
    private createQuiz;
    private createSelfAssessment;
    private createSection;
    private handleQuizSubmit;
    private saveQuizProgress;
    private showCompletionStatus;
    private createKeyTerms;
    private createCommonMistakes;
    private createMemoryAids;
    private createQuickReference;
    private createVisualAids;
    private createConnections;
    private createSummary;
    private getVisualIcon;
    private checkExistingCompletion;
    private loadQuizAnswers;
    private saveQuizAnswer;
}

import type { StudentProgress } from '../types/lesson.types.js';
export declare class ProgressTracker {
    private static readonly STORAGE_KEY;
    static getProgress(): StudentProgress;
    static saveProgress(progress: StudentProgress): void;
    static markDayComplete(day: number): void;
    static saveQuizScore(day: number, score: number, totalQuestions: number, timeSpent: number): void;
    static getAverageScore(): number;
    static getSubjectStats(subject: string): {
        averageScore: number;
        daysCompleted: number;
    };
    static updateStreak(): void;
    static getDaySubject(day: number): string;
    static exportProgress(): string;
    static importProgress(jsonData: string): boolean;
    static resetProgress(): void;
}

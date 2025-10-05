import { ProgressTracker } from './lib/progress.js';
class Dashboard {
    constructor() {
        console.log('🔷 Dashboard initialized');
        this.progress = ProgressTracker.getProgress();
        console.log('🔷 Progress loaded:', this.progress);
        this.init();
    }
    init() {
        this.renderOverallStats();
        this.renderSubjectBreakdown();
        this.renderQuizHistory();
        this.setupNavigation();
    }
    renderOverallStats() {
        const totalDays = this.progress.completedDays.length;
        const averageScore = ProgressTracker.getAverageScore();
        // Days completed
        document.getElementById('days-completed').textContent = `${totalDays}/40`;
        // Average score
        document.getElementById('average-score').textContent = `${averageScore}%`;
        // Streak
        document.getElementById('streak').textContent = `${this.progress.streak} days`;
        // Best score
        const bestScore = this.getBestScore();
        document.getElementById('best-score').textContent = bestScore;
        // Overall progress bar
        const progressPercent = (totalDays / 40) * 100;
        const progressBar = document.getElementById('overall-progress');
        progressBar.style.width = `${progressPercent}%`;
        document.getElementById('overall-text').textContent = `${Math.round(progressPercent)}% complete (${totalDays}/40 days)`;
    }
    renderSubjectBreakdown() {
        const subjects = [
            { key: 'biology', name: 'Biology', id: 'bio' },
            { key: 'chemistry', name: 'Chemistry', id: 'chem' },
            { key: 'earth-science', name: 'Earth Science', id: 'earth' },
            { key: 'math', name: 'Mathematics', id: 'math' }
        ];
        subjects.forEach(subject => {
            const stats = ProgressTracker.getSubjectStats(subject.key);
            // Update days completed
            document.getElementById(`${subject.id}-days`).textContent = `${stats.daysCompleted}/10 days`;
            // Update average score
            document.getElementById(`${subject.id}-score`).textContent = `Avg: ${stats.averageScore}%`;
            // Update progress bar
            const progressPercent = (stats.daysCompleted / 10) * 100;
            const progressBar = document.getElementById(`${subject.id}-progress`);
            progressBar.style.width = `${progressPercent}%`;
        });
    }
    renderQuizHistory() {
        const historyContainer = document.getElementById('quiz-history');
        if (this.progress.quizScores.length === 0) {
            historyContainer.innerHTML = '<p class="no-data">No quiz attempts yet. Start learning to see your progress!</p>';
            return;
        }
        // Sort by day (most recent first)
        const sortedScores = [...this.progress.quizScores].sort((a, b) => b.day - a.day);
        const table = document.createElement('table');
        table.className = 'quiz-history-table';
        table.innerHTML = `
      <thead>
        <tr>
          <th>Day</th>
          <th>Subject</th>
          <th>Score</th>
          <th>Percentage</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${sortedScores.map(score => {
            const subject = this.getDaySubject(score.day);
            const percentage = Math.round((score.score / score.totalQuestions) * 100);
            const status = this.getScoreStatus(percentage);
            return `
            <tr>
              <td><a href="index.html?day=${score.day}">Day ${score.day}</a></td>
              <td>${this.formatSubject(subject)}</td>
              <td>${score.score}/${score.totalQuestions}</td>
              <td class="percentage ${status.class}">${percentage}%</td>
              <td><span class="status-badge ${status.class}">${status.text}</span></td>
            </tr>
          `;
        }).join('')}
      </tbody>
    `;
        historyContainer.innerHTML = '';
        historyContainer.appendChild(table);
    }
    getBestScore() {
        if (this.progress.quizScores.length === 0)
            return '-';
        const best = this.progress.quizScores.reduce((max, score) => {
            const percentage = (score.score / score.totalQuestions) * 100;
            const maxPercentage = (max.score / max.totalQuestions) * 100;
            return percentage > maxPercentage ? score : max;
        });
        const percentage = Math.round((best.score / best.totalQuestions) * 100);
        return `${percentage}% (Day ${best.day})`;
    }
    getDaySubject(day) {
        return ProgressTracker.getDaySubject(day);
    }
    formatSubject(subject) {
        const icons = {
            'biology': '🔬 Biology',
            'chemistry': '🧪 Chemistry',
            'earth-science': '🌍 Earth Science',
            'math': '🔢 Math'
        };
        return icons[subject] || subject;
    }
    getScoreStatus(percentage) {
        if (percentage >= 80)
            return { class: 'excellent', text: 'Excellent' };
        if (percentage >= 70)
            return { class: 'good', text: 'Good' };
        if (percentage >= 60)
            return { class: 'fair', text: 'Fair' };
        return { class: 'needs-work', text: 'Needs Work' };
    }
    setupNavigation() {
        const homeBtn = document.getElementById('home-btn');
        const lessonsBtn = document.getElementById('lessons-btn');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                window.location.href = 'dashboard.html';
            });
        }
        if (lessonsBtn) {
            lessonsBtn.addEventListener('click', () => {
                window.location.href = 'index.html?day=1';
            });
        }
    }
}
// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});
//# sourceMappingURL=dashboard.js.map
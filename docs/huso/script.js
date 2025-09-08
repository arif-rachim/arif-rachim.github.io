// HUSO Preparation Platform - Main JavaScript

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Application initialization
function initializeApp() {
    loadProgress();
    updateDashboard();
    setupEventListeners();
    startDailyReminder();
}

// Progress Management System
class ProgressManager {
    constructor() {
        this.storageKey = 'husoProgress';
        this.data = this.loadFromStorage();
    }

    loadFromStorage() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : this.getDefaultProgress();
    }

    saveToStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    getDefaultProgress() {
        return {
            currentDay: 1,
            totalDays: 60,
            startDate: new Date().toDateString(),
            subjects: {
                biology: { completed: 0, total: 12, scores: [] },
                physics: { completed: 0, total: 12, scores: [] },
                chemistry: { completed: 0, total: 12, scores: [] },
                earthScience: { completed: 0, total: 12, scores: [] },
                mathematics: { completed: 0, total: 12, scores: [] }
            },
            dailyScores: {},
            streak: 0,
            lastStudyDate: null,
            mockTests: [],
            achievements: []
        };
    }

    // Update daily progress
    updateDayProgress(dayNumber, subject, score, checklist) {
        this.data.dailyScores[`day${dayNumber}`] = {
            subject: subject,
            score: score,
            checklist: checklist,
            completed: true,
            date: new Date().toDateString()
        };

        // Update subject progress
        if (this.data.subjects[subject]) {
            this.data.subjects[subject].scores.push(score);
            this.data.subjects[subject].completed++;
        }

        // Update streak
        this.updateStreak();
        
        // Check for achievements
        this.checkAchievements(dayNumber, score);

        this.saveToStorage();
    }

    updateStreak() {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (this.data.lastStudyDate === today) {
            // Already studied today, no change
            return;
        } else if (this.data.lastStudyDate === yesterday) {
            // Consecutive day
            this.data.streak++;
        } else if (this.data.lastStudyDate !== null) {
            // Broken streak
            this.data.streak = 1;
        } else {
            // First day
            this.data.streak = 1;
        }
        
        this.data.lastStudyDate = today;
    }

    checkAchievements(dayNumber, score) {
        const achievements = [];
        
        if (dayNumber === 1) {
            achievements.push({ type: 'first_day', title: 'Journey Begins', description: 'Completed first day of HUSO prep!' });
        }
        
        if (dayNumber === 7) {
            achievements.push({ type: 'first_week', title: 'Week Warrior', description: 'Completed first week!' });
        }
        
        if (score === 5) {
            achievements.push({ type: 'perfect_score', title: 'Perfect Score', description: 'Aced a daily quiz!' });
        }
        
        if (this.data.streak === 7) {
            achievements.push({ type: 'week_streak', title: 'Consistency King', description: '7-day study streak!' });
        }
        
        if (this.data.streak === 30) {
            achievements.push({ type: 'month_streak', title: 'Dedication Master', description: '30-day study streak!' });
        }

        achievements.forEach(achievement => {
            if (!this.data.achievements.find(a => a.type === achievement.type)) {
                this.data.achievements.push({
                    ...achievement,
                    date: new Date().toDateString()
                });
                showAchievement(achievement);
            }
        });
    }

    getCurrentDay() {
        return this.data.currentDay;
    }

    getCompletedDays() {
        return Object.keys(this.data.dailyScores).length;
    }

    getAverageScore() {
        const scores = Object.values(this.data.dailyScores).map(day => day.score);
        if (scores.length === 0) return 0;
        return (scores.reduce((a, b) => a + b, 0) / scores.length);
    }

    getSubjectProgress(subject) {
        const subjectData = this.data.subjects[subject];
        if (!subjectData || subjectData.scores.length === 0) return 0;
        return (subjectData.completed / subjectData.total) * 100;
    }

    getSubjectAverage(subject) {
        const scores = this.data.subjects[subject]?.scores || [];
        if (scores.length === 0) return 0;
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    }

    getReadinessScore() {
        // Calculate overall readiness for HUSO based on progress and performance
        const completionRate = this.getCompletedDays() / this.data.totalDays;
        const averageScore = this.getAverageScore();
        const consistency = Math.min(this.data.streak / 30, 1); // Max at 30 days
        
        return Math.round((completionRate * 0.4 + (averageScore / 5) * 0.4 + consistency * 0.2) * 100);
    }
}

// Initialize progress manager
const progressManager = new ProgressManager();

// Load and update progress display
function loadProgress() {
    updateProgressBars();
    updateStats();
    updateCurrentDay();
}

function updateProgressBars() {
    // Overall progress
    const overallProgress = document.getElementById('overall-progress');
    if (overallProgress) {
        const completed = progressManager.getCompletedDays();
        const total = progressManager.data.totalDays;
        const percentage = (completed / total) * 100;
        
        overallProgress.style.width = `${Math.max(percentage, 5)}%`;
        overallProgress.textContent = `Day ${completed}/${total}`;
    }

    // Subject progress bars
    const subjects = ['biology', 'physics', 'chemistry', 'earthScience', 'mathematics'];
    const subjectClasses = ['biology', 'physics', 'chemistry', 'earth', 'math'];
    
    subjects.forEach((subject, index) => {
        const progressBar = document.querySelector(`.${subjectClasses[index]}-progress`);
        const scoreElement = document.querySelector(`.subject.${subjectClasses[index] === 'earth' ? 'earth-science' : subjectClasses[index]} .subject-score`);
        
        if (progressBar) {
            const percentage = progressManager.getSubjectProgress(subject);
            progressBar.style.width = `${percentage}%`;
        }
        
        if (scoreElement) {
            const average = progressManager.getSubjectAverage(subject);
            scoreElement.textContent = `${((average / 5) * 100).toFixed(1)}%`;
        }
    });
}

function updateStats() {
    // Update dashboard stats
    const completedElement = document.getElementById('completed-days');
    const averageElement = document.getElementById('average-score');
    const streakElement = document.getElementById('streak');
    
    if (completedElement) {
        completedElement.textContent = progressManager.getCompletedDays();
    }
    
    if (averageElement) {
        const avg = progressManager.getAverageScore();
        averageElement.textContent = `${((avg / 5) * 100).toFixed(1)}%`;
    }
    
    if (streakElement) {
        streakElement.textContent = progressManager.data.streak;
    }
}

function updateCurrentDay() {
    const currentDayElement = document.getElementById('current-day');
    if (currentDayElement) {
        const currentDay = progressManager.getCurrentDay();
        const subjects = ['Biology', 'Physics', 'Chemistry', 'Earth Science', 'Mathematics'];
        const topics = [
            'Cell Theory & Organelles',
            'Kinematics - Motion Basics', 
            'Atomic Structure & Periodic Table',
            'Atmosphere & Weather Systems',
            'Polynomials & Factorization'
        ];
        
        const subjectIndex = ((currentDay - 1) % 5);
        const subject = subjects[subjectIndex];
        const topic = topics[subjectIndex];
        
        currentDayElement.innerHTML = `
            <h3>Day ${currentDay}: ${subject} - ${topic}</h3>
            <p>Continue your HUSO preparation journey</p>
            <a href="days/day_${currentDay.toString().padStart(2, '0')}.html" class="btn-primary">Begin Day ${currentDay}</a>
        `;
    }
}

function updateDashboard() {
    updateProgressBars();
    updateStats();
    updateCurrentDay();
}

// Event Listeners
function setupEventListeners() {
    // Check for quiz completion on daily pages
    if (window.location.pathname.includes('day_')) {
        setupDailyPageListeners();
    }
    
    // Progress page listeners
    if (window.location.pathname.includes('progress')) {
        setupProgressPageListeners();
    }
}

function setupDailyPageListeners() {
    // Auto-save progress when quiz is completed
    const submitButton = document.querySelector('.btn-primary[onclick*="calculateScore"]');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            setTimeout(() => {
                const dayMatch = window.location.pathname.match(/day_(\d+)/);
                if (dayMatch) {
                    const dayNumber = parseInt(dayMatch[1]);
                    const results = document.getElementById('quiz-results');
                    if (results && results.textContent.includes('Score:')) {
                        const scoreMatch = results.textContent.match(/Score: ([\d.]+)/);
                        if (scoreMatch) {
                            const score = parseFloat(scoreMatch[1]);
                            const subjects = ['biology', 'physics', 'chemistry', 'earthScience', 'mathematics'];
                            const subject = subjects[(dayNumber - 1) % 5];
                            
                            const checklistCompleted = document.querySelectorAll('.checklist li.completed').length;
                            
                            progressManager.updateDayProgress(dayNumber, subject, score, checklistCompleted);
                        }
                    }
                }
            }, 500);
        });
    }
}

function setupProgressPageListeners() {
    // Detailed progress page functionality
    displayDetailedProgress();
}

// Achievement System
function showAchievement(achievement) {
    // Create achievement notification
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-content">
            <h4>🏆 Achievement Unlocked!</h4>
            <h5>${achievement.title}</h5>
            <p>${achievement.description}</p>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ffd700, #ffb300);
        color: #333;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideInRight 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 5000);
}

// Daily Reminder System
function startDailyReminder() {
    // Check if user has studied today
    const today = new Date().toDateString();
    if (progressManager.data.lastStudyDate !== today) {
        // Show gentle reminder after 1 minute if on main page
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            setTimeout(showDailyReminder, 60000);
        }
    }
}

function showDailyReminder() {
    if (document.querySelector('.daily-reminder')) return; // Don't show multiple reminders
    
    const reminder = document.createElement('div');
    reminder.className = 'daily-reminder';
    reminder.innerHTML = `
        <div class="reminder-content">
            <h4>📚 Daily Study Reminder</h4>
            <p>Ready to continue your HUSO preparation?</p>
            <button onclick="startToday()">Start Today's Lesson</button>
            <button onclick="dismissReminder()">Maybe Later</button>
        </div>
    `;
    
    reminder.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-white);
        border: 2px solid var(--primary-color);
        padding: 1rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        max-width: 300px;
    `;
    
    document.body.appendChild(reminder);
}

function startToday() {
    const currentDay = progressManager.getCurrentDay();
    window.location.href = `days/day_${currentDay.toString().padStart(2, '0')}.html`;
}

function dismissReminder() {
    const reminder = document.querySelector('.daily-reminder');
    if (reminder) {
        document.body.removeChild(reminder);
    }
}

// Utility Functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getSubjectEmoji(subject) {
    const emojis = {
        biology: '🧬',
        physics: '⚛️',
        chemistry: '🧪',
        earthScience: '🌍',
        mathematics: '📐'
    };
    return emojis[subject] || '📚';
}

function getSubjectColor(subject) {
    const colors = {
        biology: '#4caf50',
        physics: '#2196f3',
        chemistry: '#ff9800',
        earthScience: '#8bc34a',
        mathematics: '#9c27b0'
    };
    return colors[subject] || '#666';
}

// Export progress data
function exportProgress() {
    const data = progressManager.data;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `huso-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Import progress data
function importProgress(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                localStorage.setItem('husoProgress', JSON.stringify(importedData));
                location.reload();
            } catch (error) {
                alert('Invalid progress file');
            }
        };
        reader.readAsText(file);
    }
}

// CSS Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .achievement-notification {
        animation: slideInRight 0.5s ease;
    }
    
    .reminder-content h4 {
        margin-bottom: 0.5rem;
        color: var(--primary-color);
    }
    
    .reminder-content button {
        margin: 0.5rem 0.5rem 0 0;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .reminder-content button:first-of-type {
        background: var(--primary-color);
        color: white;
    }
    
    .reminder-content button:last-of-type {
        background: #f5f5f5;
        color: #666;
    }
`;
document.head.appendChild(style);

// Make functions available globally
window.progressManager = progressManager;
window.updateDashboard = updateDashboard;
window.exportProgress = exportProgress;
window.importProgress = importProgress;
window.startToday = startToday;
window.dismissReminder = dismissReminder;
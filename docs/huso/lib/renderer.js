export class LessonRenderer {
    constructor(containerId) {
        const element = document.getElementById(containerId);
        if (!element)
            throw new Error(`Container ${containerId} not found`);
        this.container = element;
    }
    renderLesson(lesson) {
        this.container.innerHTML = '';
        // Render header
        this.container.appendChild(this.createHeader(lesson));
        // Render objectives
        this.container.appendChild(this.createObjectives(lesson.objectives));
        // Render connections (if any - previous lessons)
        if (lesson.connections && lesson.connections.length > 0) {
            this.container.appendChild(this.createConnections(lesson.connections));
        }
        // Render discovery story
        this.container.appendChild(this.createDiscoveryStory(lesson.discoveryStory.title, lesson.discoveryStory.content));
        // Render key terms
        if (lesson.keyTerms.length > 0) {
            this.container.appendChild(this.createKeyTerms(lesson.keyTerms));
        }
        // Render concepts
        lesson.concepts.forEach(concept => {
            this.container.appendChild(this.createConceptBox(concept));
        });
        // Render visual aids (if any)
        if (lesson.visualAids && lesson.visualAids.length > 0) {
            this.container.appendChild(this.createVisualAids(lesson.visualAids));
        }
        // Render memory aids (if any)
        if (lesson.memoryAids && lesson.memoryAids.length > 0) {
            this.container.appendChild(this.createMemoryAids(lesson.memoryAids));
        }
        // Render common mistakes (if any)
        if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
            this.container.appendChild(this.createCommonMistakes(lesson.commonMistakes));
        }
        // Render quick reference (if any)
        if (lesson.quickReference && lesson.quickReference.length > 0) {
            this.container.appendChild(this.createQuickReference(lesson.quickReference));
        }
        // Render worked examples
        if (lesson.workedExamples.length > 0) {
            const examplesSection = this.createSection('Worked Examples', 'worked-examples');
            lesson.workedExamples.forEach(example => {
                examplesSection.appendChild(this.createWorkedExample(example));
            });
            this.container.appendChild(examplesSection);
        }
        // Render practice problems
        if (lesson.practiceProblems.length > 0) {
            const practiceSection = this.createSection('Practice Problems', 'practice-problems');
            lesson.practiceProblems.forEach((problem, index) => {
                practiceSection.appendChild(this.createPracticeProblem(problem, index + 1));
            });
            this.container.appendChild(practiceSection);
        }
        // Render summary
        if (lesson.summary.length > 0) {
            this.container.appendChild(this.createSummary(lesson.summary));
        }
        // Render quiz
        const quizSection = this.createSection('Quick Quiz', 'quiz-section');
        quizSection.appendChild(this.createQuiz(lesson.quiz, lesson.day));
        this.container.appendChild(quizSection);
        // Render self-assessment
        this.container.appendChild(this.createSelfAssessment(lesson.selfAssessment));
        // Check and show existing completion status
        this.checkExistingCompletion(lesson.day);
    }
    createHeader(lesson) {
        const header = document.createElement('header');
        header.className = `day-header ${lesson.subject}`;
        const title = document.createElement('h1');
        title.textContent = `${lesson.emoji} Day ${lesson.day}: ${lesson.subject.charAt(0).toUpperCase() + lesson.subject.slice(1)} - ${lesson.title}`;
        header.appendChild(title);
        const goal = document.createElement('p');
        goal.innerHTML = `<strong>Learning Goal:</strong> ${lesson.learningGoal}`;
        header.appendChild(goal);
        const timer = document.createElement('div');
        timer.className = 'timer';
        timer.textContent = `⏱️ Estimated Time: ${lesson.estimatedTime} minutes`;
        header.appendChild(timer);
        return header;
    }
    createObjectives(objectives) {
        const div = document.createElement('div');
        div.className = 'objectives';
        const heading = document.createElement('h2');
        heading.textContent = '🎯 Today\'s Learning Objectives';
        div.appendChild(heading);
        const ul = document.createElement('ul');
        objectives.forEach(obj => {
            const li = document.createElement('li');
            li.textContent = obj;
            ul.appendChild(li);
        });
        div.appendChild(ul);
        return div;
    }
    createDiscoveryStory(title, content) {
        const div = document.createElement('div');
        div.className = 'story-box';
        const heading = document.createElement('h3');
        heading.textContent = `📚 ${title}`;
        div.appendChild(heading);
        const p = document.createElement('p');
        p.textContent = content;
        div.appendChild(p);
        return div;
    }
    createConceptBox(concept) {
        const div = document.createElement('div');
        div.className = 'concept-box';
        const heading = document.createElement('h3');
        heading.textContent = concept.title;
        div.appendChild(heading);
        const explanation = document.createElement('p');
        explanation.textContent = concept.explanation;
        div.appendChild(explanation);
        if (concept.analogy) {
            const analogyBox = document.createElement('div');
            analogyBox.className = 'analogy-box';
            analogyBox.innerHTML = `<strong>💡 Think of it like ${concept.analogy.type}:</strong> ${concept.analogy.description}`;
            div.appendChild(analogyBox);
        }
        if (concept.mindBlowingFacts && concept.mindBlowingFacts.length > 0) {
            const factsBox = document.createElement('div');
            factsBox.className = 'fact-box';
            const factsHeading = document.createElement('h4');
            factsHeading.textContent = '🤯 Mind-Blowing Facts:';
            factsBox.appendChild(factsHeading);
            const ul = document.createElement('ul');
            concept.mindBlowingFacts.forEach(fact => {
                const li = document.createElement('li');
                li.textContent = fact;
                ul.appendChild(li);
            });
            factsBox.appendChild(ul);
            div.appendChild(factsBox);
        }
        if (concept.whyYouCare) {
            const importanceBox = document.createElement('div');
            importanceBox.className = 'importance-box';
            importanceBox.innerHTML = `<strong>❤️ Why You Should Care:</strong> ${concept.whyYouCare}`;
            div.appendChild(importanceBox);
        }
        return div;
    }
    createWorkedExample(example) {
        const div = document.createElement('div');
        div.className = 'worked-example';
        const heading = document.createElement('h4');
        heading.textContent = `🔍 ${example.scenario}`;
        div.appendChild(heading);
        const setup = document.createElement('p');
        setup.className = 'problem-setup';
        setup.textContent = example.problemSetup;
        div.appendChild(setup);
        const stepsDiv = document.createElement('div');
        stepsDiv.className = 'solution-steps';
        example.steps.forEach(step => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.innerHTML = `
        <strong>Step ${step.step}:</strong> ${step.description}<br>
        <em>${step.reasoning}</em>
      `;
            stepsDiv.appendChild(stepDiv);
        });
        div.appendChild(stepsDiv);
        const solution = document.createElement('p');
        solution.className = 'solution';
        solution.innerHTML = `<strong>Solution:</strong> ${example.solution}`;
        div.appendChild(solution);
        if (example.realWorldApplication) {
            const application = document.createElement('p');
            application.className = 'real-world';
            application.innerHTML = `<strong>🌍 Real-World Application:</strong> ${example.realWorldApplication}`;
            div.appendChild(application);
        }
        return div;
    }
    createPracticeProblem(problem, number) {
        const div = document.createElement('div');
        div.className = `practice-problem ${problem.difficulty}`;
        const question = document.createElement('p');
        question.innerHTML = `<strong>Problem ${number}:</strong> ${problem.question}`;
        div.appendChild(question);
        if (problem.hints && problem.hints.length > 0) {
            const hintsToggle = document.createElement('button');
            hintsToggle.className = 'hints-toggle';
            hintsToggle.textContent = '💡 Show Hints';
            hintsToggle.onclick = () => {
                const hintsDiv = div.querySelector('.hints');
                if (hintsDiv) {
                    hintsDiv.style.display = hintsDiv.style.display === 'none' ? 'block' : 'none';
                    hintsToggle.textContent = hintsDiv.style.display === 'none' ? '💡 Show Hints' : '🔒 Hide Hints';
                }
            };
            div.appendChild(hintsToggle);
            const hintsDiv = document.createElement('div');
            hintsDiv.className = 'hints';
            hintsDiv.style.display = 'none';
            const ul = document.createElement('ul');
            problem.hints.forEach(hint => {
                const li = document.createElement('li');
                li.textContent = hint;
                ul.appendChild(li);
            });
            hintsDiv.appendChild(ul);
            div.appendChild(hintsDiv);
        }
        return div;
    }
    createQuiz(questions, day) {
        const div = document.createElement('div');
        div.className = 'quiz';
        div.id = `quiz-day-${day}`;
        // Load saved answers
        const savedAnswers = this.loadQuizAnswers(day);
        console.log('🟣 Loaded saved answers for day', day, ':', savedAnswers);
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            questionDiv.dataset.questionId = question.id;
            const questionText = document.createElement('p');
            questionText.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}`;
            questionDiv.appendChild(questionText);
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';
            question.options.forEach(option => {
                const label = document.createElement('label');
                label.className = 'quiz-option';
                const savedAnswer = savedAnswers[question.id];
                const isChecked = savedAnswer === option.label ? 'checked' : '';
                label.innerHTML = `
          <input type="radio" name="${question.id}" value="${option.label}" ${isChecked} onchange="window.saveQuizAnswer('${day}', '${question.id}', '${option.label}')">
          <span>${option.label}. ${option.text}</span>
        `;
                optionsDiv.appendChild(label);
            });
            questionDiv.appendChild(optionsDiv);
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'quiz-feedback';
            feedbackDiv.style.display = 'none';
            feedbackDiv.dataset.correctAnswer = question.correctAnswer;
            feedbackDiv.dataset.explanation = question.explanation;
            feedbackDiv.dataset.storyExplanation = question.storyExplanation || '';
            questionDiv.appendChild(feedbackDiv);
            div.appendChild(questionDiv);
        });
        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-quiz';
        submitBtn.textContent = 'Submit Quiz';
        submitBtn.onclick = () => this.handleQuizSubmit(day);
        div.appendChild(submitBtn);
        return div;
    }
    createSelfAssessment(items) {
        const div = document.createElement('div');
        div.className = 'self-assessment';
        const heading = document.createElement('h3');
        heading.textContent = '✅ Self-Assessment Checklist';
        div.appendChild(heading);
        const ul = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            const label = document.createElement('label');
            label.innerHTML = `
        <input type="checkbox">
        <span>${item}</span>
      `;
            li.appendChild(label);
            ul.appendChild(li);
        });
        div.appendChild(ul);
        return div;
    }
    createSection(title, className) {
        const section = document.createElement('section');
        section.className = className;
        const heading = document.createElement('h2');
        heading.textContent = title;
        section.appendChild(heading);
        return section;
    }
    handleQuizSubmit(day) {
        const quizDiv = document.getElementById(`quiz-day-${day}`);
        if (!quizDiv)
            return;
        const questions = quizDiv.querySelectorAll('.quiz-question');
        let score = 0;
        let totalQuestions = questions.length;
        questions.forEach((questionDiv) => {
            const feedbackDiv = questionDiv.querySelector('.quiz-feedback');
            const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
            if (!selectedOption) {
                feedbackDiv.style.display = 'block';
                feedbackDiv.className = 'quiz-feedback warning';
                feedbackDiv.textContent = 'Please select an answer!';
                return;
            }
            const correctAnswer = feedbackDiv.dataset.correctAnswer;
            const explanation = feedbackDiv.dataset.explanation;
            const storyExplanation = feedbackDiv.dataset.storyExplanation || '';
            if (selectedOption.value === correctAnswer) {
                score++;
                feedbackDiv.className = 'quiz-feedback correct';
                feedbackDiv.innerHTML = `✅ Correct! ${explanation}`;
                if (storyExplanation) {
                    feedbackDiv.innerHTML += `<br><br>💡 ${storyExplanation}`;
                }
            }
            else {
                feedbackDiv.className = 'quiz-feedback incorrect';
                feedbackDiv.innerHTML = `❌ Incorrect. The correct answer is ${correctAnswer}. ${explanation}`;
                if (storyExplanation) {
                    feedbackDiv.innerHTML += `<br><br>💡 ${storyExplanation}`;
                }
            }
            feedbackDiv.style.display = 'block';
        });
        // Show final score
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'quiz-score';
        scoreDiv.innerHTML = `<h3>Your Score: ${score}/${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)</h3>`;
        const existingScore = quizDiv.querySelector('.quiz-score');
        if (existingScore) {
            existingScore.replaceWith(scoreDiv);
        }
        else {
            quizDiv.appendChild(scoreDiv);
        }
        // Save progress
        this.saveQuizProgress(day, score, totalQuestions);
    }
    saveQuizProgress(day, score, total) {
        console.log('🔵 saveQuizProgress called:', { day, score, total });
        const existingData = localStorage.getItem('husoProgress');
        console.log('🔵 Existing localStorage data:', existingData);
        const progress = JSON.parse(existingData || '{"quizScores": [], "completedDays": [], "lastAccessedDay": 1, "streak": 0, "subjectProgress": {}}');
        console.log('🔵 Parsed progress:', progress);
        const existingScoreIndex = progress.quizScores.findIndex((s) => s.day === day);
        const scoreData = {
            day,
            score,
            totalQuestions: total,
            timeSpent: 0,
            timestamp: new Date().toISOString()
        };
        console.log('🔵 Score data to save:', scoreData);
        if (existingScoreIndex >= 0) {
            console.log('🔵 Updating existing score at index:', existingScoreIndex);
            progress.quizScores[existingScoreIndex] = scoreData;
        }
        else {
            console.log('🔵 Adding new score');
            progress.quizScores.push(scoreData);
        }
        // Mark day as completed if score >= 80%
        const percentage = (score / total) * 100;
        console.log('🔵 Percentage:', percentage);
        // Ensure completedDays array exists (for old localStorage data)
        if (!progress.completedDays) {
            console.log('🔵 completedDays was undefined, initializing as empty array');
            progress.completedDays = [];
        }
        if (percentage >= 80 && !progress.completedDays.includes(day)) {
            console.log('🔵 Marking day as completed');
            progress.completedDays.push(day);
            progress.completedDays.sort((a, b) => a - b);
        }
        // Update last accessed day
        progress.lastAccessedDay = day;
        console.log('🔵 Final progress object to save:', progress);
        localStorage.setItem('husoProgress', JSON.stringify(progress));
        const saved = localStorage.getItem('husoProgress');
        console.log('🔵 Verified saved data:', saved);
        // Show completion status
        this.showCompletionStatus(day, percentage);
    }
    showCompletionStatus(day, percentage) {
        console.log('🟢 showCompletionStatus called:', { day, percentage });
        const quizDiv = document.getElementById(`quiz-day-${day}`);
        console.log('🟢 Quiz div found:', !!quizDiv);
        if (!quizDiv)
            return;
        const existingStatus = quizDiv.querySelector('.completion-status');
        if (existingStatus) {
            console.log('🟢 Removing existing status');
            existingStatus.remove();
        }
        const statusDiv = document.createElement('div');
        statusDiv.className = 'completion-status';
        if (percentage >= 80) {
            console.log('🟢 Creating COMPLETED badge');
            statusDiv.innerHTML = `
        <div class="completion-badge completed">
          ✅ Day ${day} Completed! Great job! You scored ${percentage}%
        </div>
      `;
        }
        else {
            console.log('🟢 Creating INCOMPLETE badge');
            statusDiv.innerHTML = `
        <div class="completion-badge incomplete">
          📝 Score: ${percentage}% - You need 80% or higher to complete this day. Keep practicing!
        </div>
      `;
        }
        quizDiv.appendChild(statusDiv);
        console.log('🟢 Status badge appended');
    }
    // NEW RENDERING METHODS
    createKeyTerms(terms) {
        const div = document.createElement('div');
        div.className = 'key-terms';
        const heading = document.createElement('h3');
        heading.textContent = 'Key Terms';
        div.appendChild(heading);
        terms.forEach(term => {
            const termDiv = document.createElement('div');
            termDiv.className = 'key-term';
            termDiv.innerHTML = `
        <strong>${term.term}</strong> ${term.definition}
        ${term.example ? `<div class="term-example">Example: ${term.example}</div>` : ''}
      `;
            div.appendChild(termDiv);
        });
        return div;
    }
    createCommonMistakes(mistakes) {
        const div = document.createElement('div');
        div.className = 'common-mistakes';
        const heading = document.createElement('h3');
        heading.textContent = '⚠️ Common Mistakes to Avoid';
        div.appendChild(heading);
        mistakes.forEach(mistake => {
            const mistakeDiv = document.createElement('div');
            mistakeDiv.className = 'mistake-item';
            mistakeDiv.innerHTML = `
        <div class="mistake">❌ <strong>Mistake:</strong> ${mistake.mistake}</div>
        <div class="correction">✅ <strong>Correct:</strong> ${mistake.correction}</div>
        ${mistake.whyItMatters ? `<div class="why-matters">💡 ${mistake.whyItMatters}</div>` : ''}
      `;
            div.appendChild(mistakeDiv);
        });
        return div;
    }
    createMemoryAids(aids) {
        const div = document.createElement('div');
        div.className = 'memory-aids';
        const heading = document.createElement('h3');
        heading.textContent = '🧠 Memory Tricks';
        div.appendChild(heading);
        aids.forEach(aid => {
            const aidDiv = document.createElement('div');
            aidDiv.className = 'memory-aid';
            aidDiv.innerHTML = `
        <div class="technique">${aid.technique}</div>
        <div class="description">${aid.description}</div>
        ${aid.example ? `<div class="aid-example">${aid.example}</div>` : ''}
      `;
            div.appendChild(aidDiv);
        });
        return div;
    }
    createQuickReference(references) {
        const div = document.createElement('div');
        div.className = 'quick-reference';
        const heading = document.createElement('h3');
        heading.textContent = '📋 Quick Reference';
        div.appendChild(heading);
        references.forEach(ref => {
            const refDiv = document.createElement('div');
            refDiv.className = `reference-item ${ref.category || ''}`;
            refDiv.innerHTML = `
        <div class="ref-title">${ref.title}</div>
        <div class="ref-content">${ref.content}</div>
      `;
            div.appendChild(refDiv);
        });
        return div;
    }
    createVisualAids(aids) {
        const div = document.createElement('div');
        div.className = 'visual-aids';
        const heading = document.createElement('h3');
        heading.textContent = '📊 Visual Aids';
        div.appendChild(heading);
        aids.forEach(aid => {
            const aidDiv = document.createElement('div');
            aidDiv.className = `visual-aid ${aid.type}`;
            if (aid.imagePath) {
                aidDiv.innerHTML = `
          <img src="${aid.imagePath}" alt="${aid.altText}" />
          <p class="visual-description">${aid.description}</p>
        `;
            }
            else {
                aidDiv.innerHTML = `
          <div class="visual-placeholder ${aid.type}">
            <span class="placeholder-icon">${this.getVisualIcon(aid.type)}</span>
            <p>${aid.description}</p>
          </div>
        `;
            }
            div.appendChild(aidDiv);
        });
        return div;
    }
    createConnections(connections) {
        const div = document.createElement('div');
        div.className = 'lesson-connections';
        const heading = document.createElement('h3');
        heading.textContent = '🔗 Connections';
        div.appendChild(heading);
        connections.forEach(conn => {
            const connDiv = document.createElement('div');
            connDiv.className = `connection-item ${conn.type}`;
            const icon = conn.type === 'previous' ? '⬅️' : conn.type === 'next' ? '➡️' : '🔄';
            connDiv.innerHTML = `
        <span class="connection-icon">${icon}</span>
        <a href="?day=${conn.day}" class="connection-link">
          Day ${conn.day}: ${conn.topic}
        </a>
        ${conn.reason ? `<span class="connection-reason">${conn.reason}</span>` : ''}
      `;
            div.appendChild(connDiv);
        });
        return div;
    }
    createSummary(points) {
        const div = document.createElement('div');
        div.className = 'lesson-summary';
        const heading = document.createElement('h3');
        heading.textContent = '📝 Summary - What We Learned';
        div.appendChild(heading);
        const ul = document.createElement('ul');
        points.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            ul.appendChild(li);
        });
        div.appendChild(ul);
        return div;
    }
    getVisualIcon(type) {
        const icons = {
            'diagram': '📐',
            'chart': '📊',
            'illustration': '🎨',
            'infographic': '📈'
        };
        return icons[type] || '📊';
    }
    checkExistingCompletion(day) {
        console.log('🟡 checkExistingCompletion called for day:', day);
        const storedData = localStorage.getItem('husoProgress');
        console.log('🟡 Stored data:', storedData);
        const progress = JSON.parse(storedData || '{"quizScores": [], "completedDays": []}');
        console.log('🟡 Progress object:', progress);
        // Find quiz score for this day
        const quizScore = progress.quizScores.find((s) => s.day === day);
        console.log('🟡 Found quiz score:', quizScore);
        if (quizScore) {
            const percentage = Math.round((quizScore.score / quizScore.totalQuestions) * 100);
            console.log('🟡 Showing existing completion with percentage:', percentage);
            this.showCompletionStatus(day, percentage);
        }
        else {
            console.log('🟡 No existing quiz score found');
        }
    }
    loadQuizAnswers(day) {
        const key = `quizAnswers_day_${day}`;
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : {};
    }
    saveQuizAnswer(day, questionId, answer) {
        console.log('🟣 Saving answer:', { day, questionId, answer });
        const key = `quizAnswers_day_${day}`;
        const answers = this.loadQuizAnswers(day);
        answers[questionId] = answer;
        localStorage.setItem(key, JSON.stringify(answers));
        console.log('🟣 Saved answers:', answers);
    }
}
// Expose saveQuizAnswer to window for inline onclick
window.saveQuizAnswer = (day, questionId, answer) => {
    console.log('🟣 Window.saveQuizAnswer called:', { day, questionId, answer });
    const key = `quizAnswers_day_${day}`;
    const saved = localStorage.getItem(key);
    const answers = saved ? JSON.parse(saved) : {};
    answers[questionId] = answer;
    localStorage.setItem(key, JSON.stringify(answers));
    console.log('🟣 Answer saved to localStorage');
};
//# sourceMappingURL=renderer.js.map
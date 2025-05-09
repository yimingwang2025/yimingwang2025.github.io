// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Remove custom cursor code
    const body = document.querySelector('body');
    
    // Random spooky sound effects
    const spookySounds = [
        'https://soundbible.com/mp3/Scary%20Demon%20Haunting-SoundBible.com-1113793495.mp3',
        'https://soundbible.com/mp3/Horror_Vacui-Tim_Kahn-1626439405.mp3',
        'https://soundbible.com/mp3/Glass_Break-stephan_schutze-1834690171.mp3'
    ];
    
    // Create audio elements but don't play them yet
    const audioElements = spookySounds.map(sound => {
        const audio = new Audio(sound);
        audio.volume = 0.2; // Lower volume
        return audio;
    });
    
    // Function to play random sound occasionally
    function playRandomSound() {
        // Only 10% chance to play a sound each time
        if (Math.random() < 0.1) {
            const randomIndex = Math.floor(Math.random() * audioElements.length);
            audioElements[randomIndex].play();
        }
    }
    
    // Game Info Modals
    const gameCards = document.querySelectorAll('.game-card');
    const modals = document.querySelectorAll('.game-modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const creatorButtons = document.querySelectorAll('.creator-info-btn');
    const creatorCards = document.querySelectorAll('.creator-card');
    
    // Open modal when clicking on game card
    gameCards.forEach(card => {
        card.addEventListener('click', function(e) {            
            const gameType = this.getAttribute('data-game');
            const modal = document.getElementById(`${gameType}-modal`);
            if (modal) {
                modal.classList.add('active');
                playRandomSound(); // Add spooky sound when opening modal
                
                // Prevent body scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        });
        
        card.addEventListener('mouseenter', function() {
            // Tilt effect on hover
            this.style.transform = `translateY(-10px) rotate(${Math.random() * 4 - 2}deg)`;
            
            // Maybe play a sound
            playRandomSound();
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
    
    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.game-modal');
            if (modal) {
                modal.classList.remove('active');
                
                // Re-enable body scrolling
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            // Only close if clicking directly on the modal background (not on content)
            if (e.target === this) {
                this.classList.remove('active');
                
                // Re-enable body scrolling
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            
            // Re-enable body scrolling
            document.body.style.overflow = 'auto';
        }
    });
    
    // Open creator modal when clicking on creator info button
    creatorButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const creatorType = this.getAttribute('data-creator');
            const modal = document.getElementById(`${creatorType}-modal`);
            
            if (modal) {
                modal.classList.add('active');
                playRandomSound(); // Add spooky sound when opening modal
                
                // Prevent body scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Add hover effects for creator cards
    creatorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Maybe play a sound
            playRandomSound();
        });
    });
    
    // Create and add random floating elements
    function createFloatingElement(type) {
        const element = document.createElement('div');
        element.classList.add('floating-element', type);
        
        // Random position
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        
        // Random size
        const size = 20 + Math.random() * 40;
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        
        // Random animation duration
        const duration = 15 + Math.random() * 20;
        element.style.animationDuration = duration + 's';
        
        // Random animation delay
        element.style.animationDelay = Math.random() * 10 + 's';
        
        // Add to body
        body.appendChild(element);
    }
    
    // Create some spooky floating elements
    for (let i = 0; i < 5; i++) {
        createFloatingElement('floating-bat');
    }
    
    for (let i = 0; i < 3; i++) {
        createFloatingElement('floating-spider');
    }
    
    // Flickering light effect
    function flickerLight() {
        // Random flicker effect
        if (Math.random() < 0.05) {
            body.classList.add('flicker');
            setTimeout(() => {
                body.classList.remove('flicker');
            }, 100 + Math.random() * 200);
        }
        
        // Schedule next flicker
        setTimeout(flickerLight, 2000 + Math.random() * 5000);
    }
    
    // Start flickering effect
    flickerLight();
});

// Remove custom style element for the cursor
const style = document.createElement('style');
style.textContent = `
    .floating-element {
        position: fixed;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        z-index: 0;
        opacity: 0.3;
    }
    
    .floating-bat {
        background-image: url('https://www.pngitem.com/pimgs/m/82-824892_bat-silhouette-png-halloween-bat-silhouette-png-transparent.png');
        animation: floatBat 20s linear infinite;
    }
    
    .floating-spider {
        background-image: url('https://www.pngmart.com/files/3/Spider-PNG-File.png');
        animation: floatSpider 25s linear infinite;
    }
    
    @keyframes floatBat {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(50vw, 20vh) rotate(90deg);
        }
        50% {
            transform: translate(100vw, 0) rotate(180deg);
        }
        75% {
            transform: translate(50vw, -20vh) rotate(270deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }
    
    @keyframes floatSpider {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        33% {
            transform: translate(30vw, 30vh) rotate(120deg);
        }
        66% {
            transform: translate(-30vw, -10vh) rotate(240deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }
    
    .flicker {
        animation: screenFlicker 0.1s linear;
    }
    
    @keyframes screenFlicker {
        0% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(0.8);
        }
        100% {
            filter: brightness(1);
        }
    }
    
    body.flicker::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(139, 0, 0, 0.1);
        z-index: 1000;
        pointer-events: none;
    }
`;

document.head.appendChild(style);

// Quiz functionality
const quizData = [
    {
        question: "What is my Roblox username?",
        options: ["mewtwo_rip", "killer_mewtwo", "rip_mewtwo", "mewtwo_killer"],
        correctAnswer: 2 // Index of correct answer (rip_mewtwo)
    },
    {
        question: "What grade am I in?",
        options: ["1st grade", "2nd grade", "3rd grade", "4th grade"],
        correctAnswer: 1 // Index of correct answer (2nd grade)
    },
    {
        question: "Which of these is NOT one of my favorite horror games?",
        options: ["Dandy's World", "Scary Sushi", "Ghosted"],
        correctAnswer: 2 // Index of correct answer (Ghosted)
    },
    {
        question: "Which space location have I visited multiple times?",
        options: ["NASA Johnson Space Center", "Kennedy Space Center", "SpaceX Launch Facility", "Jet Propulsion Laboratory"],
        correctAnswer: 1 // Index of correct answer (Kennedy Space Center)
    },
    {
        question: "What am I most interested in besides horror games?",
        options: ["Soccer", "Space Exploration", "Dinosaurs", "Cooking"],
        correctAnswer: 1 // Index of correct answer (Space Exploration)
    },
    {
        question: "When was Dandy's World created?",
        options: ["January 26th, 2024", "December 15th, 2023", "March 3rd, 2024", "February 9th, 2024"],
        correctAnswer: 0 // Index of correct answer (January 26th, 2024)
    },
    {
        question: "What is the most dangerous entity in Dandy's World?",
        options: ["Twisted Cakepop", "Twisted Ducky", "Twisted Dandy", "Twisted Bunny"],
        correctAnswer: 2 // Index of correct answer (Twisted Dandy)
    },
    {
        question: "When did Dandy's World reach 2 billion visits?",
        options: ["January 15th, 2025", "February 21st, 2025", "March 1st, 2025", "December 30th, 2024"],
        correctAnswer: 1 // Index of correct answer (February 21st, 2025)
    },
    {
        question: "What type of game is Scary Sushi?",
        options: ["Battle Royale", "Puzzle Solver", "Horror Cooking", "Platformer"],
        correctAnswer: 2 // Index of correct answer (Horror Cooking)
    },
    {
        question: "What position are players interviewing for in Scary Sushi?",
        options: ["Server", "Host", "Chef", "Manager"],
        correctAnswer: 2 // Index of correct answer (Chef)
    },
    // New questions about game creators
    {
        question: "Which studio created Dandy's World?",
        options: ["Evil Twin Games", "BlushCrunch Studio", "Roblox Corporation", "Nightmare Factory"],
        correctAnswer: 1 // Index of correct answer (BlushCrunch Studio)
    },
    {
        question: "When was BlushCrunch Studio founded?",
        options: ["Early 2023", "Late 2023", "Early 2024", "Late 2022"],
        correctAnswer: 1 // Index of correct answer (Late 2023)
    },
    {
        question: "What inspired the name 'BlushCrunch'?",
        options: ["The founders' favorite cereal", "The contrast between cute aesthetics and horror elements", "A popular song lyric", "The sound effects in their games"],
        correctAnswer: 1 // Index of correct answer (The contrast between cute aesthetics and horror elements)
    },
    {
        question: "Which studio developed Scary Sushi?",
        options: ["Evil Twin Games", "BlushCrunch Studio", "Horror Bytes", "Moonlight Interactive"],
        correctAnswer: 0 // Index of correct answer (Evil Twin Games)
    },
    {
        question: "How many developers originally formed Evil Twin Games?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 1 // Index of correct answer (Two)
    },
    {
        question: "What sub-genre did Evil Twin Games pioneer on Roblox?",
        options: ["Space horror", "Horror cooking", "Horror racing", "Educational horror"],
        correctAnswer: 1 // Index of correct answer (Horror cooking)
    },
    {
        question: "How many total chapters are planned for Scary Sushi?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 2 // Index of correct answer (Five)
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Quiz initialization
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const submitButton = document.getElementById('submit-quiz');
    const resetButton = document.getElementById('reset-quiz');
    const resultsContainer = document.getElementById('quiz-results');
    const scoreSpan = document.getElementById('quiz-score');
    const totalSpan = document.getElementById('quiz-total');
    const messageEl = document.getElementById('quiz-message');
    
    // Initially hide the results and reset button
    resultsContainer.style.display = 'none';
    resetButton.style.display = 'none';
    
    // Rendering the quiz questions
    function renderQuiz() {
        quizQuestionsContainer.innerHTML = '';
        totalSpan.textContent = quizData.length;
        
        quizData.forEach((questionData, questionIndex) => {
            const questionEl = document.createElement('div');
            questionEl.classList.add('quiz-question');
            
            const questionTitle = document.createElement('h4');
            questionTitle.textContent = `${questionIndex + 1}. ${questionData.question}`;
            questionEl.appendChild(questionTitle);
            
            const optionsList = document.createElement('ul');
            optionsList.classList.add('quiz-options');
            
            questionData.options.forEach((option, optionIndex) => {
                const optionEl = document.createElement('li');
                optionEl.classList.add('quiz-option');
                optionEl.textContent = option;
                optionEl.setAttribute('data-question', questionIndex);
                optionEl.setAttribute('data-option', optionIndex);
                
                optionEl.addEventListener('click', function() {
                    // Remove selected class from all options in this question
                    const questionOptions = optionsList.querySelectorAll('.quiz-option');
                    questionOptions.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to this option
                    this.classList.add('selected');
                    
                    // Add spooky sound when selecting option
                    playRandomSound();
                });
                
                optionsList.appendChild(optionEl);
            });
            
            questionEl.appendChild(optionsList);
            quizQuestionsContainer.appendChild(questionEl);
        });
    }
    
    // Initialize quiz
    renderQuiz();
    
    // Submit quiz
    submitButton.addEventListener('click', function() {
        let score = 0;
        let unanswered = 0;
        
        quizData.forEach((questionData, questionIndex) => {
            const selectedOption = document.querySelector(`.quiz-option.selected[data-question="${questionIndex}"]`);
            
            if (!selectedOption) {
                unanswered++;
                return;
            }
            
            const optionIndex = parseInt(selectedOption.getAttribute('data-option'));
            
            // Check if answer is correct
            if (optionIndex === questionData.correctAnswer) {
                score++;
                selectedOption.classList.add('correct');
            } else {
                selectedOption.classList.add('incorrect');
                
                // Highlight the correct answer
                const correctOption = document.querySelector(`.quiz-option[data-question="${questionIndex}"][data-option="${questionData.correctAnswer}"]`);
                correctOption.classList.add('correct');
            }
        });
        
        // Display results
        scoreSpan.textContent = score;
        
        // Display message based on score
        let message = '';
        if (score === quizData.length) {
            message = "WOW! You know me perfectly! Are you secretly me?";
        } else if (score >= quizData.length * 0.7) {
            message = "Great job! You know me very well!";
        } else if (score >= quizData.length * 0.5) {
            message = "Not bad! You know some things about me.";
        } else {
            message = "Let's get to know each other better!";
        }
        
        // Show unanswered questions message if any
        if (unanswered > 0) {
            message += ` You left ${unanswered} question${unanswered > 1 ? 's' : ''} unanswered.`;
        }
        
        messageEl.textContent = message;
        resultsContainer.style.display = 'block';
        
        // Hide submit button, show reset button
        submitButton.style.display = 'none';
        resetButton.style.display = 'inline-block';
        
        // Disable further selections
        const allOptions = document.querySelectorAll('.quiz-option');
        allOptions.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Play a spooky sound for feedback
        playRandomSound();
    });
    
    // Reset quiz
    resetButton.addEventListener('click', function() {
        // Clear all selections and classes
        renderQuiz();
        
        // Reset display states
        resultsContainer.style.display = 'none';
        submitButton.style.display = 'inline-block';
        resetButton.style.display = 'none';
        
        // Play a spooky sound
        playRandomSound();
    });
}); 
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add spooky cursor effect
    const body = document.querySelector('body');
    
    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    body.appendChild(cursor);
    
    // Create a cursor trail effect
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    body.appendChild(trail);
    
    // Create a cursor glow effect for better visibility
    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    body.appendChild(glow);
    
    // Follow mouse movement with a delay for spooky effect
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        
        // Move the main cursor and glow immediately
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        glow.style.left = mouseX + 'px';
        glow.style.top = mouseY + 'px';
        
        // Move the trail with delay for effect
        setTimeout(() => {
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
        }, 100);
    });
    
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
    
    // Open modal when clicking on game card
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
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
            
            // Grow cursor on hover for interactive feedback
            cursor.classList.add('cursor-grow');
            glow.classList.add('cursor-grow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            
            // Return cursor to normal size
            cursor.classList.remove('cursor-grow');
            glow.classList.remove('cursor-grow');
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
    
    // Add cursor effects for clickable elements
    const clickables = document.querySelectorAll('a, button, .game-card, .interest-card');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-pointer');
            glow.classList.add('cursor-pointer');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-pointer');
            glow.classList.remove('cursor-pointer');
        });
    });
    
    // Add click effect to cursor
    document.addEventListener('mousedown', function() {
        cursor.classList.add('cursor-click');
        glow.classList.add('cursor-click');
    });
    
    document.addEventListener('mouseup', function() {
        cursor.classList.remove('cursor-click');
        glow.classList.remove('cursor-click');
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

// Add a custom style element for the cursor and floating elements
const style = document.createElement('style');
style.textContent = `
    body {
        cursor: none;
    }
    
    .custom-cursor {
        position: fixed;
        width: 30px;
        height: 30px;
        background-image: url('https://www.pngitem.com/pimgs/m/115-1150775_bloody-knife-cursor-hd-png-download.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform-origin: center center;
        margin-left: -15px;
        margin-top: -15px;
    }
    
    .cursor-glow {
        position: fixed;
        width: 50px;
        height: 50px;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9997;
        margin-left: -25px;
        margin-top: -25px;
        animation: pulse 2s ease-in-out infinite;
    }
    
    .cursor-trail {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: rgba(139, 0, 0, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s ease;
        margin-left: -5px;
        margin-top: -5px;
        box-shadow: 0 0 10px 2px rgba(139, 0, 0, 0.3);
    }
    
    .cursor-grow {
        transform: scale(1.5);
    }
    
    .cursor-pointer {
        transform: scale(1.2);
        filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.7));
    }
    
    .cursor-click {
        transform: scale(0.8);
    }
    
    .floating-element {
        position: fixed;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        z-index: 1;
        animation: floatAround 20s linear infinite, fadeInOut 10s ease-in-out infinite;
    }
    
    .floating-bat {
        background-image: url('https://www.freepnglogos.com/uploads/bat-png/bat-png-image-purepng-transparent-png-33.png');
    }
    
    .floating-spider {
        background-image: url('https://www.freepnglogos.com/uploads/spider-png/spider-png-transparent-spider-images-pluspng-31.png');
    }
    
    .flicker {
        animation: screenFlicker 0.1s forwards;
    }
    
    @keyframes pulse {
        0% {
            opacity: 0.5;
            transform: scale(0.8);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.1);
        }
        100% {
            opacity: 0.5;
            transform: scale(0.8);
        }
    }
    
    @keyframes floatAround {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(100px, 50px) rotate(90deg);
        }
        50% {
            transform: translate(0, 100px) rotate(180deg);
        }
        75% {
            transform: translate(-100px, 50px) rotate(270deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }
    
    @keyframes fadeInOut {
        0%, 100% {
            opacity: 0.1;
        }
        50% {
            opacity: 0.5;
        }
    }
    
    @keyframes screenFlicker {
        0% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(0.5);
        }
        100% {
            filter: brightness(1);
        }
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
        options: ["Dandy's World", "Scary Sushi", "Midnight Horror", "Ghosted"],
        correctAnswer: 3 // Index of correct answer (Ghosted)
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
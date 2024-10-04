const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Leo Tolstoy",
        d: "Mark Twain",
        correct: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic",
        b: "Pacific",
        c: "Indian",
        d: "Arctic",
        correct: "b"
    },
    {
        question: "Which element does 'O' represent on the periodic table?",
        a: "Osmium",
        b: "Oxygen",
        c: "Gold",
        d: "Silver",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.option-btn');
const nextButton = document.getElementById('nextButton');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.querySelector('.result-message');

let currentQuestion = 0;
let score = 0;
let timer = 60;

// Load quiz question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    options[0].textContent = currentQuizData.a;
    options[1].textContent = currentQuizData.b;
    options[2].textContent = currentQuizData.c;
    options[3].textContent = currentQuizData.d;
}

// Start the quiz
function startQuiz() {
    loadQuestion();
    startTimer();
}

// Timer function
function startTimer() {
    const timeEl = document.getElementById('time');
    const countdown = setInterval(() => {
        timer--;
        timeEl.textContent = timer;
        if (timer === 0) {
            clearInterval(countdown);
            showResult();
        }
    }, 1000);
}

// Check the answer
options.forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedOption = e.target;
        if (selectedOption.textContent === quizData[currentQuestion][quizData[currentQuestion].correct]) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });
});

// Show result
function showResult() {
    quiz.classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    scoreDisplay.textContent = score;
    if (score > 3) {
        resultMessage.textContent = "Congratulations! You passed the quiz!";
    } else {
        resultMessage.textContent = "Better luck next time!";
    }
}

// Next question button
nextButton.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
});

startQuiz();

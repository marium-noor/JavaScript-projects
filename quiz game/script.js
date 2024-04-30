const questions = [
    {
        question: "HTML Stands for?",
        answers: [
            {text: "Hypertext more loop", correct: false},
            {text: "Hypertext Transfer Protocol", correct: false},
            {text: "Hypertext markup language", correct: true},
            {text: "None of these", correct: false}
        ]
    },
    {
        question: "What is the purpose of JavaScript?",
        answers: [
            { text: "To style web pages", correct: false },
            { text: "To create database schemas", correct: false },
            { text: "To add interactivity to web pages", correct: true },
            { text: "To define the structure of a web page", correct: false }
        ]
    },
    {
        question: "What does API stand for?",
        answers: [
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Programming Interface", correct: false },
            { text: "Application Program Interface", correct: false },
            { text: "Advanced Program Interface", correct: false }
        ]
    },
    {
        question: "Which symbol is used to indicate an ID selector in CSS?",
        answers: [
            { text: ".", correct: false },
            { text: "#", correct: true },
            { text: ":", correct: false },
            { text: "*", correct: false }
        ]
    },
    {
        question: "What is the purpose of the alt attribute in an img tag?",
        answers: [
            { text: "To provide a title for the image", correct: false },
            { text: "To specify the alignment of the image", correct: false },
            { text: "To provide alternative text for the image", correct: true },
            { text: "To link the image to another document", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};


function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore();
    }
}
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else startQuiz();
})
startQuiz();


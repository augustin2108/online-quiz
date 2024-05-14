const quizData = [{
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },

];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionButtons = document.getElementsByClassName("option");
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = currentQuestion.options[i];
        optionButtons[i].disabled = false;
    }
}


function selectOption(optionButton) {
    const selectedOption = optionButton.textContent;
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    optionButton.disabled = true;
}


function submitAnswer() {
    clearInterval(timer);
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("current-score").textContent = score;
}


function startTimer() {
    let timeLeft = 60;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}


displayQuestion();
startTimer();
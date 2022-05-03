let quizQuestion = document.getElementById("question");
let options = document.getElementsByClassName("answer-buttons");
let scoreText = document.getElementById("score");
let currentQuestion = {};
let score = 0;
let availableQuestions = [];
let maxQuestions = 10;










let startBtn = document.getElementById("begin");
startBtn.addEventListener('click', startQuiz);

document.addEventListener("DOMContentLoaded", function () {
    console.log("1st load");
    quizLoaded();
});

function quizLoaded() {

    console.log("hello world");

}

function startQuiz() {

    let nContainer = document.getElementById("new-contain");
    nContainer.style.display = "none";

    let qContainer = document.getElementById("quiz-container");
    qContainer.style.display = "block";

    let startAgainBtn = document.getElementById("start-again");

    startAgainBtn.innerHTML = "Start Again";

    scoreText = 0;
    availableQuestions = [...questions];

    nextQuestion();

}
/*

function showQuestion(q) {

    let aQuestion = document.getElementById("question");


    aQuestion.innerText = questions[0].question;

    showQuestion(questions);


}
*/



function nextQuestion() {

    if (availableQuestions.length === 0) {
        endGame();
    }

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

}

function isAnswerCorrect() {


}

function incrementScore() {

}

function endGame() {

}

function showResults() {

}















let questions = [{
        id: 1,
        question: "What is the name of Harry Potters Father?",
        answers: {
            a: "John",
            b: "James",
            c: "Hargrid"
        },
        correctAswer: "b"
    },

    {
        id: 2,
        question: "What is Harry's favourite spell?",
        answers: {
            a: "Avadacadbra",
            b: "Lumos",
            c: "Expelliarmus"
        },
        correctAswer: "c"
    },

    {
        id: 3,
        question: "What is the name Hermiones cat?",
        answers: {
            a: "Crookshank",
            b: "Scabbers",
            c: "Hedwig"
        },
        correctAswer: "a"
    },

    {
        id: 4,
        question: "What does Harry give Dobby to free him?",
        answers: {
            a: "Sock",
            b: "Hat",
            c: "Wand"
        },
        correctAswer: "a"
    },

]
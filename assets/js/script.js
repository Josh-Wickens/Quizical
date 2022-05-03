let nContainer = document.getElementById("start-contain");
let qContainer = document.getElementById("quiz-container");
let quizQuestion = document.getElementById("question");
let optionA = document.getElementById("answer-a");
let optionB = document.getElementById("answer-b");
let optionC = document.getElementById("answer-c");
let scoreText = document.getElementById("score");
let startAgainButton = document.getElementById("start-again");
let startBtn = document.getElementById("begin");
let currentQuestion = {};
let score = 0;
let availableQuestions = [];
let maxQuestions = 10;



startAgainButton.addEventListener('click', startAgain);
startBtn.addEventListener('click', startQuiz);



document.addEventListener("DOMContentLoaded", function () {
    console.log("1st load");
    quizLoaded();
});

function quizLoaded() {
    nContainer.style.display = "flex";
    console.log("hello world");

}

function startQuiz() {


    nContainer.style.display = "none";


    qContainer.style.display = "block";



    scoreText = 0;
    availableQuestions = [...questions];

    showQuestion();

}
/*

function showQuestion(q) {

    let aQuestion = document.getElementById("question");


    aQuestion.innerText = questions[0].question;

    showQuestion(questions);


}
*/

function showQuestion() {
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    quizQuestion.innerText = currentQuestion.question;
    optionA.innerText = currentQuestion.choiceA;
    optionB.innerText = currentQuestion.choiceB;
    optionC.innerText = currentQuestion.choiceC;
}


function nextQuestion() {

    if (availableQuestions.length === 0) {
        endGame();
    };



}

function startAgain() {
    showQuestion();
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
        choiceA: "John",
        choiceB: "James",
        choiceC: "Hagrid",
        correctAnswer: "b"
    },

    {
        id: 2,
        question: "What is Harry's favourite spell?",
        choiceA: "Avadacadbra",
        choiceB: "Lumos",
        choiceC: "Expelliarmus",
        correctAnswer: "c"
    },

    {
        id: 3,
        question: "What is the name Hermiones cat?",
        choiceA: "Crookshank",
        choiceB: "Scabbers",
        choiceC: "Hedwig",
        correctAnswer: "a"
    },

    {
        id: 4,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        correctAnswer: "a"
    },

]
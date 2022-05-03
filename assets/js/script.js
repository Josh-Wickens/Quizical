let questions = [{
        id: 1,
        question: "What is the name of Harry Potters Father?",
        choiceA: "John",
        choiceB: "James",
        choiceC: "Hagrid",
        answer: "b"
    },

    {
        id: 2,
        question: "What is Harry's favourite spell?",
        choiceA: "Avadacadbra",
        choiceB: "Lumos",
        choiceC: "Expelliarmus",
        answer: "c"
    },

    {
        id: 3,
        question: "What is the name Hermiones cat?",
        choiceA: "Crookshank",
        choiceB: "Scabbers",
        choiceC: "Hedwig",
        answer: "a"
    },

    {
        id: 4,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 5,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 6,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 7,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 8,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 9,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 10,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 11,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 12,
        question: "What does Harry give Dobby to free him?",
        choiceA: "Sock",
        choiceB: "Hat",
        choiceC: "Wand",
        answer: "a"
    },

]

let nContainer = document.getElementById("start-contain");
let qContainer = document.getElementById("quiz-container");
let quizQuestion = document.getElementById("question");
let scoreCard = document.getElementById("score-area");
let optionA = document.getElementById("answer-a");
let optionB = document.getElementById("answer-b");
let optionC = document.getElementById("answer-c");
let scoreText = document.getElementById("score");
let startAgainButton = document.getElementById("start-again");
let startBtn = document.getElementById("begin");
let currentQuestion = 0;
const lastQuestion = questions.length - 1;
let score = 0;
let availableQuestions = [];
const maxQuestions = 10;



/* DOM loaded event listener and quiz loaded */

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

/* Start quiz function */

function startQuiz() {

    nContainer.style.display = "none";
    qContainer.style.display = "block";
    scoreText = 0;
    shuffleQuestions();
    showQuestion();

}


/* show question function to pick a random question from the array of questions */


function showQuestion() {

    let q = questions[currentQuestion];
    quizQuestion.innerText = q.question;
    optionA.innerText = q.choiceA;
    optionB.innerText = q.choiceB;
    optionC.innerText = q.choiceC;


}

/* function for if the user clicks the start again button. Should restart the quiz from the beginning */

function startAgain() {
    currentQuestion = 0;
    score = 0;
    startQuiz();

}

/* function to check if the user has selected the right answer */

function isAnswerCorrect(answer) {
    if (answer === questions[currentQuestion].answer) {
        score++;
        console.log("score is", score)
        correct();
    } else {
        alert("WRONG!");
    }
    if (currentQuestion.length <= maxQuestions) {
        /*move to next question in the array*/
        currentQuestion++;
        showQuestion();
    } else {
        endGame();
    }


}

/* function if the user selects the wrong answer */

function correct() {
    alert("Correct!")

}

function incorrect() {
    alert("ran out of time");

}

function incrementScore() {

}

function endGame() {
    qContainer.style.display = "none";
    showResults();
}

function showResults() {
    scoreCard.style.display = "flex";

}

function shuffleQuestions() {
    let newPos, temp;
    for (let i = questions.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = questions[i];
        questions[i] = questions[newPos];
        questions[newPos] = temp;
    }
    return questions;
}
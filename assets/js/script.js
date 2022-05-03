let questions = [{

        question: "What is the name of Harry Potters Father?",
        choiceA: "John",
        choiceB: "James",
        choiceC: "Hagrid",
        answer: "b"
    },

    {

        question: "What is Harry's favourite spell?",
        choiceA: "Avadacadbra",
        choiceB: "Lumos",
        choiceC: "Expelliarmus",
        answer: "c"
    },

    {

        question: "What is the name Hermiones cat?",
        choiceA: "Crookshank",
        choiceB: "Scabbers",
        choiceC: "Hedwig",
        answer: "a"
    },

    {

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

/* timer variables
const questionTime = 0;
let clockContainer = document.getElementById("clock-contain");
let clock = document.getElementById("timer-clock");
let count = 15;
let countDown = setInterval(timer, 1000);
*/

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
    showQuestion();

}


/* show question function to pick a random question from the array of questions */


function showQuestion() {

    let q = questions[currentQuestion];
    quizQuestion.innerText = q.question;
    optionA.innerText = q.choiceA;
    optionB.innerText = q.choiceB;
    optionC.innerText = q.choiceC;
    /*
            let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
            currentQuestion = availableQuestions[questionsIndex];
            quizQuestion.innerText = currentQuestion.question;
            optionA.innerText = currentQuestion.choiceA;
            optionB.innerText = currentQuestion.choiceB;
            optionC.innerText = currentQuestion.choiceC;
            availableQuestions.splice(questionsIndex, 1);
            console.log(availableQuestions);
        }
    */

}

/* show the next question in the array after either answering an answer correct, incorrect or ran out of time */
/*
function nextQuestion() {

    if (availableQuestions.length === 0) {
        currentQuestion++;
        showQuestion();
        count = 0;
        endGame();
    };
}
*/

/* function to for the timer. Will give the user 15 seconds to answer the question */
/*
function timer() {
    if (count >= questionTime) {
        clock.innerText = count;
        count--;
        console.log("count", count);
    } else {
        console.log("count", count);
        count = 0;
        incorrect();

        clearInterval(countDown);

        if (currentQuestion < availableQuestions) {
            currentQuestion++;


            showQuestion();
        } else {

            incorrect();
        }
    }
}
*/


/* function for if the user clicks the start again button. Should restart the quiz from the beginning */

function startAgain() {
    currentQuestion = 0;
    score = 0;
    showQuestion();

}

/* function to check if the user has selected the right answer */

function isAnswerCorrect(answer) {
    if (answer === currentQuestion.answer) {
        score++;
        console.log("score is", score)
        correct();
    } else {
        alert("WRONG!");
    }



}

/* function if the user selects the wrong answer */

function correct() {
    alert("Correct!")
    nextQuestion();
}

function incorrect() {
    alert("ran out of time");
    nextQuestion();
}

function incrementScore() {

}

function endGame() {

}

function showResults() {

}
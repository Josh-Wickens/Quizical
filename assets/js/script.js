const questions = [{
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
        question: "How many ingredients did the polyjuice potion have?",
        choiceA: "7",
        choiceB: "5",
        choiceC: "9",
        answer: "a"
    },

    {
        id: 6,
        question: "What is the maximum speed that a firebolt broomstick can reach?",
        choiceA: "100mph",
        choiceB: "125mph",
        choiceC: "150mph",
        answer: "c"
    },

    {
        id: 7,
        question: "How many Horcruxes were made?",
        choiceA: "7",
        choiceB: "8",
        choiceC: "9",
        answer: "b"
    },

    {
        id: 8,
        question: "Hannah Abbott is sorted into which house?",
        choiceA: "Ravenclaw",
        choiceB: "Griffindor",
        choiceC: "Hufflepuff",
        answer: "c"
    },

    {
        id: 9,
        question: 'Who said, "The wand chooses the wizard, Mr. Potter."',
        choiceA: "Hagrid",
        choiceB: "Dubledore",
        choiceC: "Ollivander",
        answer: "c"
    },

    {
        id: 10,
        question: "For how many years did the Weasleys have Scabbers as a pet?",
        choiceA: "10 years",
        choiceB: "12 years",
        choiceC: "14 years",
        answer: "b"
    },

    {
        id: 11,
        question: 'What magical act is the word "splinching" connected with?',
        choiceA: "Apparition",
        choiceB: "Levitation",
        choiceC: "Divination",
        answer: "a"
    },

    {
        id: 12,
        question: "What is Luna Lovegood's Patronus?",
        choiceA: "A hare",
        choiceB: "A badger",
        choiceC: "A Squirrel",
        answer: "a"
    },

]

const nContainer = document.getElementById("start-contain");
const qContainer = document.getElementById("quiz-container");
const questionsContainer = document.getElementById('question-container');
const quizQuestion = document.getElementById("question");
let scoreCard = document.getElementById("score-area");
let optionA = document.getElementById("answer-a");
let optionB = document.getElementById("answer-b");
let optionC = document.getElementById("answer-c");
let scoreText = document.getElementById("score");
console.log(scoreText)
const startAgainButton = document.getElementById("start-again");
const startBtn = document.getElementById("begin");
let currentQuestion = 0;
let lastQuestion = questions.length - 1;
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
    currentQuestion = [0];
    score = 0;

    if (questionsContainer.display === "none") {
        scoreCard.display = "none";
        questionsContainer.display = "flex";
        startQuiz();
    }


}


/* function to check if the user has selected the right answer */

function isAnswerCorrect(answer) {
    if (answer === questions[currentQuestion].answer) {
        /* increase score by 1 if the user clicks the correct answer */
        score++;
        console.log("score is", score)
        correct();
    } else {
        alert("WRONG!");
    }
    currentQuestion++;
    showQuestion();
    
    if (currentQuestion >= maxQuestions) {
        endGame();
    }

    /*move to next question in the array*/

}


/* function if the user selects the right or wrong answer */

function correct() {
    alert("Correct!")

}

function incorrect() {
    alert("ran out of time");

}

/*function to end the quiz and show the results for that quiz */



function endGame() {
    console.log("game ended");
    questionsContainer.style.display = "none";
    showResults();
    console.log(questions);
    return score;

}


function showResults() {

    console.log("score should be revealed")
    scoreCard.style.display = "flex";
    document.getElementById('score').innerText = `${score} out of 10`;
    startAgainButton.innerText = "TRY AGAIN?";

}

/* function to shuffle the order of questions using fisher-yates algorithm */

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
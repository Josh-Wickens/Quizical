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

];

const nContainer = document.getElementById("start-contain");
const qContainer = document.getElementById("quiz-container");
const questionsContainer = document.getElementById('question-container');
const quizQuestion = document.getElementById("question");
let scoreCard = document.getElementById("score-area");
let optionA = document.getElementById("answer-a");
let optionB = document.getElementById("answer-b");
let optionC = document.getElementById("answer-c");
let scoreText = document.getElementById("score");

const startBtn = document.getElementById("begin");
let currentQuestion = 0;
let score = 0;
const maxQuestions = 10;
let userName = document.getElementById("name");
let gameBtns = Array.from(document.getElementsByClassName('game-button'));
let nameInput = document.getElementById
let usernameInput;

/* Timer Variables */

const questionTime = 0;
let clockContainer = document.getElementById("clock-contain");
let clock = document.getElementById("timer-clock");
let count = 60;


/* Modal variables */
const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");



/* DOM loaded event listener and quiz loaded */

openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal")
        closeModal(modal);
    })
})
let quizTimer;
let startNormal = document.getElementById("submit-normal");
let timedGame = document.getElementById('submit-timed')
let startAgainButton = document.getElementById("start-again");
startAgainButton.addEventListener('click', startAgain);
startNormal.addEventListener('click', function () {
    startQuiz('normal')
    usernameInput = document.getElementById('name').value
}, false);
timedGame.addEventListener('click', function () {
    startQuiz('timed')
    usernameInput = document.getElementById('name').value
}, false);
document.addEventListener("DOMContentLoaded", function () {
    console.log("1st load");
    quizLoaded();
});


function quizLoaded() {
    nContainer.style.display = "flex";
    console.log("hello world");

}

/* Modal Event Listeners */

/* Modal Function */

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
    userName.value = "Harry Potter";
    clearInterval(quizTimer);
}

function closeModal() {
    if (modal == null || userName.value === "") {
        startNormal = disabled;
        timedGame = disabled;

    } else {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    nContainer.style.display = "none";
    qContainer.style.display = "block";
}



/* Start quiz function */

function startQuiz(type) {


    scoreText = 0;
    shuffleQuestions();
    showQuestion();


    console.log(type)
    if (type === 'normal') {
        gameBtns.forEach((button =>
            button.addEventListener('click', function (e) {
                if (button.dataset.answer === questions[currentQuestion].answer) {
                    /* increase score by 1 if the user clicks the correct answer */
                    score++;
                    console.log("score is", score)
                    correct();
                } else {
                    incorrect();
                    questionsContainer.style.backgroundColor = "red";
                }

                currentQuestion++;
                showQuestion();
                questionsContainer.style.backgroundColor = "rgba(12, 6, 6, 0.534)";

                if (currentQuestion >= maxQuestions) {
                    endGame();
                }
            })
        ))
    } else {
        gameBtns.forEach((button =>
            button.addEventListener('click', function (e) {
                if (button.dataset.answer === questions[currentQuestion].answer) {
                    /* increase score by 1 if the user clicks the correct answer */
                    score++;
                    console.log(name, "score is", score)
                    correct();
                } else {
                    alert("WRONG!");
                }
                currentQuestion++;
                showQuestion();
            })
        ))

        timer();


    }

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
    window.location.reload();

    /*currentQuestion = [0];
    score = 0;
    count = 5;
    clearInterval(quizTimer)
    console.log("start again clicked")
    questionsContainer.style.display = "flex";
    scoreCard.style.display = "none";
    openModal(modal);
    */

}


/* function to check if the user has selected the right answer */




/* function if the user selects the right or wrong answer */

function correct() {
    alert("Correct!");

}

function incorrect() {
    alert("incorrect");


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
    document.getElementById('score').innerText = `${usernameInput} scored:  ${score} `;
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



/* timer */


function timer() {
    clock.innerText = count;

    let quizTimer = setInterval(() => {
        count--;
        clock.innerText = count;
        console.log("count", count);
        if (count === 0) {
            clearInterval(quizTimer);
            endGame();
        }
    }, 1000)
}
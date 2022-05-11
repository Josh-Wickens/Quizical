// questions are saved to a seperate javascipt page and imported here.

import {
    questions
} from "./questions.js";

//general variables

const nContainer = document.getElementById("start-contain");
const qContainer = document.getElementById("quiz-container");
const questionsContainer = document.getElementById('question-container');
const quizQuestion = document.getElementById("question");
let scoreCard = document.getElementById("score-area");
let optionA = document.getElementById("answer-a");
let optionB = document.getElementById("answer-b");
let optionC = document.getElementById("answer-c");
const highscoresTable = document.getElementById("highscores");
let currentQuestion = 0;
let score = 0;
const maxQuestions = 10;
let userName = document.getElementById("name");
let gameBtns = Array.from(document.getElementsByClassName('game-button'));
let usernameInput;
let quizTimer;
let startNormal = document.getElementById("submit-normal");
let timedGame = document.getElementById('submit-timed');
let startAgainButton = document.getElementById("start-again");

// Timer Variables 

let clock = document.getElementById("timer-clock");
let count = 60;

// Modal variables 
const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");

// leaderboard variables 

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highScoresList = document.getElementById("highscores-rows");

// correct animation 

const correctAniStart = [{
        backgroundColor: "rgba(12, 6, 6, 0.534)"
    },
    {
        backgroundColor: "green"
    },
    {
        backgroundColor: "rgba(12, 6, 6, 0.534)"
    },
];

// incorrect animation 

const incorrectAniStart = [{
        backgroundColor: "rgba(12, 6, 6, 0.534)"
    },
    {
        backgroundColor: "red"
    },
    {
        backgroundColor: "rgba(12, 6, 6, 0.534)"
    },
];

// animation timing 

const aniTiming = {
    duration: 250,
    iterations: 1,
};

/* DOM loaded event listener and quiz loaded */

document.addEventListener("DOMContentLoaded", function () {
    quizLoaded();
});

function quizLoaded() {
    nContainer.style.display = "flex";
}

// function to empty the userinput for name once it has been clicked on to save user deleting content each time

userName.addEventListener("click", clearFields);

function clearFields() {

    userName.value = "";
}

/* Modal event listeners to open and close using querySelectors on the buttons.*/

openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

closeModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

/* Modal Function will open the modal and set the username input with a prefilled value*/

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
    userName.value = "Harry Potter";
}

// Modal Function will close the modal. If the username has left the name input blank, then the value will be New Player then show display the quiz,
//if it is filled, then it will just display the quiz
function closeModal() {
    if (modal == null || userName.value === "") {

        userName.value = "New Player";

        modal.classList.remove('active');
        overlay.classList.remove('active');
        nContainer.style.display = "none";
        qContainer.style.display = "block";
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');

    nContainer.style.display = "none";
    qContainer.style.display = "block";
}

// Event listeners are set to see which game type the user has clicked.

startNormal.addEventListener('click', function () {

    startQuiz('normal');
    usernameInput = document.getElementById('name').value;
}, false);
timedGame.addEventListener('click', function () {

    startQuiz('timed');
    usernameInput = document.getElementById('name').value;
}, false);

/* Start quiz function and running the quiz on gametype 
score is set to 0 each time the start quiz is run and the questions are shuffled*/

function startQuiz(type) {

    score = 0;
    shuffleQuestions();
    showQuestion();

    /* if the user selects the normal type game then the function will set the question out and its corresponding answer.  
    if the user selects the correct answer then it will increment the score and run the correct function.
    otherwise run the incorrect function */

    if (type === 'normal') {
        gameBtns.forEach((button =>
            button.addEventListener('click', function (e) {
                if (button.dataset.answer === questions[currentQuestion].answer) {
                    /* increase score by 1 if the user clicks the correct answer */
                    score++;
                    correct();
                } else {
                    incorrect();
                }
                //after each question it will provide a new one by incrementing/moving to the next one in the array
                currentQuestion++;
                // the questions will have a slight delay to allow the change of colour animation to take place.
                setTimeout(() => {
                    showQuestion();
                }, 500);
                // for the normal type game, it will run until it has reached its max questions (as set by the variable above) then run the end game function.
                if (currentQuestion >= maxQuestions) {
                    endGame();
                }
            })
        ));
        //otherwise the user has selected the timed game option it will do the exact same thing as the normal game function except it will run the timer function.
    } else {
        gameBtns.forEach((button =>
            button.addEventListener('click', function (e) {
                if (button.dataset.answer === questions[currentQuestion].answer) {
                    /* increase score by 1 if the user clicks the correct answer */
                    score++;
                    correct();
                } else {
                    incorrect();
                }
                currentQuestion++;
                setTimeout(() => {
                    showQuestion();
                }, 500);
            })
        ));
        // the timer function has a end game function once it reaches 0. So this function will keep running until the timer function reaches 0 and ends the game.
        timer();
    }
}



/* show question function to display the question and answers in the quiz area */

function showQuestion() {

    let q = questions[currentQuestion];
    quizQuestion.innerText = q.question;
    optionA.innerText = q.choiceA;
    optionB.innerText = q.choiceB;
    optionC.innerText = q.choiceC;
}

/* function for if the user clicks the start again button. Should restart the quiz and browser */

startAgainButton.addEventListener('click', startAgain);

function startAgain() {
    window.location.reload();
}

/* function if the user selects the right or wrong answer */

function correct() {
    questionsContainer.animate(correctAniStart, aniTiming);
}

function incorrect() {
    questionsContainer.animate(incorrectAniStart, aniTiming);
}

/*function to end the quiz and show the results for that quiz */


function endGame() {
    questionsContainer.style.display = "none";
    showResults();
    return score;
}

function showResults() {

    scoreCard.style.display = "flex";
    document.getElementById('score').innerText = `${usernameInput} scored:  ${score} `;
    startAgainButton.innerText = "TRY AGAIN?";
    highscoresTable.style.display = "flex";
    localStorage.setItem('mostRecentScore', score);
    saveHighScore();

}

// get the mostRecent score from the local storage and put into the score const as score and the username is used as the name value.
function saveHighScore() {
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    const score = {
        score: mostRecentScore,
        name: usernameInput
    };

    // add the score to the array, then sort them into numerical order. We will then splice the top 5 (get rid of the rest of the array) and turn the highscores into a string.
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    //run a loop through the highScores then place each one in the highscoreslist html element and insert the highscores values (name and score)
    for (let score = 0; score < highScores.length; score++) {
        highScoresList.innerHTML += `<tr><td>${highScores[score].name}</td><td>${highScores[score].score}</td></tr>`;
    }
}

/* function to shuffle the order of questions using fisher-yates algorithm 
the function will run through the array backwards. Then a random number wil be gerated and which ever array number matches that random number
will be swapped with the last object in the array. Then it will keep doing that with 1 less array each time. Until it has ran through the whole array */

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

/* timer function will stop once the count reaches 0 and run the endgame function for the timed game. */

function timer() {
    clock.innerText = count;

    let quizTimer = setInterval(() => {
        count--;
        clock.innerText = count;
        if (count === 0) {
            clearInterval(quizTimer);
            endGame();
        }
    }, 1000);
}
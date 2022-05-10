import {
    questions
} from "./questions.js";


/* high score 
let highScoresArray = [{
        highscoreName: "Harry",
        highscoreNumber: "17"
    },

    {
        highscoreName: "Ron",
        highscoreNumber: "13"
    },

    {
        highscoreName: "Hermione",
        highscoreNumber: "21"
    },

    {
        highscoreName: "Dumbledore",
        highscoreNumber: "28"
    },

    {
        highscoreName: "Draco",
        highscoreNumber: "11"
    },
];

*/

const nContainer = document.getElementById("start-contain");
const qContainer = document.getElementById("quiz-container");
const questionsContainer = document.getElementById('question-container');
const quizQuestion = document.getElementById("question");
let scoreCard = document.getElementById("score-area");
let optionA = document.getElementById("answer-a");
let optionB = document.getElementById("answer-b");
let optionC = document.getElementById("answer-c");
let scoreText = document.getElementById("score");
const highscoresTable = document.getElementById("highscores");
const startBtn = document.getElementById("begin");
let currentQuestion = 0;
let score = 0;
const maxQuestions = 10;
let userName = document.getElementById("name");
let gameBtns = Array.from(document.getElementsByClassName('game-button'));
let usernameInput;

/* correct animation */

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

/* incorrect animation */

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

/* animation timing */

const aniTiming = {
    duration: 250,
    iterations: 1,
};

/* Timer Variables */

const questionTime = 0;
let clockContainer = document.getElementById("clock-contain");
let clock = document.getElementById("timer-clock");
let count = 60;


/* Modal variables */
const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");

/* leaderboard variables */

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const highScoresList = document.getElementById("highscores-rows");




/* DOM loaded event listener and quiz loaded */

document.addEventListener("DOMContentLoaded", function () {
    quizLoaded();
});

function quizLoaded() {
    nContainer.style.display = "flex";

}

/* Modal event listeners to open and close using querySelectors on the buttons.*/

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

/* Start quiz function and running the quiz on gametype */

function startQuiz(type) {

    score = 0;
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

                }

                currentQuestion++;

                setTimeout(() => {
                    showQuestion();
                }, 500);



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
                    correct();
                } else {
                    incorrect();
                }
                currentQuestion++;

                setTimeout(() => {
                    showQuestion();
                }, 500);


            })
        ))

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

function startAgain() {
    window.location.reload();

}


/* function if the user selects the right or wrong answer */

function correct() {
    console.log("correct function")
    questionsContainer.animate(correctAniStart, aniTiming);


}

function incorrect() {
    console.log("incorrect function");
    questionsContainer.animate(incorrectAniStart, aniTiming);


}

/*function to end the quiz and show the results for that quiz */


function endGame() {
    console.log("game ended");
    questionsContainer.style.display = "none";
    showResults();
    return score;




}



function showResults() {


    console.log("score should be revealed")
    scoreCard.style.display = "flex";
    document.getElementById('score').innerText = `${usernameInput} scored:  ${score} `;
    startAgainButton.innerText = "TRY AGAIN?";
    highscoresTable.style.display = "block";
    localStorage.setItem('mostRecentScore', score);
    saveHighScore();



}

function saveHighScore() {
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    const score = {
        score: mostRecentScore,
        name: usernameInput
    };
    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));



    for (let score = 0; score < highScores.length; score++) {
        highScoresList.innerHTML += `<tr><td>${highScores[score].name}</td><td>${highScores[score].score}</td></tr>`;
    }


    // highScoresList.innerHTML = highScores.map(score => {
        /*return `<tr><td>${score.name}</td><td>${score.score}</td></tr>`;*/

        

    // })

    // const league = highScores.map(score => {
            // for (let score = 0; score < highScores.length; score++) {
            //     highScoresList.innerHTML += `<tr><td>${highScores[score].name}</td><td>${highScores[score].score}</td></tr>`;
            // }
            /*return `<ul><li>${score.name}${score.score}</li></ul>`;*/

        // })
        // .join('');

};







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
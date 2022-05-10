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

    {
        id: 13,
        question: "What year was the first Harry Potter movie released",
        choiceA: "2000",
        choiceB: "2001",
        choiceC: "2002",
        answer: "b"
    },

    {
        id: 14,
        question: "What is the named of Albus Dumbledore's brother?",
        choiceA: "Alfred",
        choiceB: "Alberton",
        choiceC: "Aberforth",
        answer: "c"
    },

    {
        id: 15,
        question: "How old was Harry Potter when he found out he was a wizard?",
        choiceA: "11",
        choiceB: "12",
        choiceC: "13",
        answer: "a"
    },

    {
        id: 16,
        question: "Who revealed to Lily Potter that she was a witch?",
        choiceA: "Albus Dubledore",
        choiceB: "Professor Mcgonagall ",
        choiceC: "Severus Snape",
        answer: "c"
    },

    {
        id: 17,
        question: "What is Ginny Weasley's actual first name?",
        choiceA: "Gianna",
        choiceB: "Genevieve ",
        choiceC: "Ginevra",
        answer: "c"
    },

    {
        id: 18,
        question: "Which chess piece does the Lovegood House resemble?",
        choiceA: "Rook",
        choiceB: "Pawn ",
        choiceC: "Knight",
        answer: "a"
    },

    {
        id: 19,
        question: "Which character served as a Quidditch commentator?",
        choiceA: "Seamus Finnigan",
        choiceB: "Lee Jordan",
        choiceC: "Dean Thomas",
        answer: "b"
    },

    {
        id: 20,
        question: "How many founding members of Hogwarts are there in total?",
        choiceA: "4",
        choiceB: "5",
        choiceC: "6",
        answer: "a"
    },

    {
        id: 21,
        question: "What is it customary for wizardkind to do before dueling?",
        choiceA: "Touch wands",
        choiceB: "Salute",
        choiceC: "Bow",
        answer: "c"
    },

    {
        id: 22,
        question: "What wood is Harry Potter's wand made out of?",
        choiceA: "Elderwood",
        choiceB: "Oak",
        choiceC: "Holly",
        answer: "c"
    },

    {
        id: 23,
        question: "What is the name of Harry Potter's auntie?",
        choiceA: "Petunia",
        choiceB: "Patricia",
        choiceC: "Priscilla",
        answer: "a"
    },

    {
        id: 24,
        question: "How many original Harry Potter movies are there in total?",
        choiceA: "6",
        choiceB: "7",
        choiceC: "8",
        answer: "c"
    },

    {
        id: 25,
        question: "Where is Azkaban fortress located?",
        choiceA: "The Black Sea",
        choiceB: "The North Sea",
        choiceC: "The Great Sea",
        answer: "b"
    },

    {
        id: 26,
        question: "Who was the part-goblin Head of Ravenclaw House?",
        choiceA: "Horace Slughorn",
        choiceB: "Pomona Sprout",
        choiceC: "Filius Flitwick",
        answer: "c"
    },

    {
        id: 27,
        question: "What is the name of the poltergeist that lives at Hogwarts?",
        choiceA: "Filtch",
        choiceB: "Peeves",
        choiceC: "Firenze",
        answer: "b"
    },

    {
        id: 28,
        question: "What is N.E.W.T.?",
        choiceA: "Exam",
        choiceB: "Newspaper",
        choiceC: "Potion",
        answer: "a"
    },

    {
        id: 29,
        question: "What is the name of Argus Filch's pet cat?",
        choiceA: "Miss Sybill",
        choiceB: "Mrs Norris",
        choiceC: "Lady Olga",
        answer: "b"
    },

    {
        id: 30,
        question: "Which one of Seamus Finnigan's parents was wizardkind?",
        choiceA: "Mother",
        choiceB: "Father",
        choiceC: "Neither",
        answer: "a"
    },

    {
        id: 31,
        question: "A non-magical person who has at least one magical parent is called what?",
        choiceA: "Muggle",
        choiceB: "Mudblood",
        choiceC: "Squib",
        answer: "c"
    },

    {
        id: 32,
        question: "Who is Harry Potter's godfather?",
        choiceA: "Sirius Black",
        choiceB: "Severous Snape",
        choiceC: "Remus Lupin",
        answer: "a"
    },

    {
        id: 33,
        question: "What street did the Dursley's live on?",
        choiceA: "Castle Street",
        choiceB: "Privit Drive",
        choiceC: "Hawthorn Avenue",
        answer: "b"
    },

    {
        id: 34,
        question: "Who was Hermione's date at the Yule Ball??",
        choiceA: "Cedric Diggory",
        choiceB: "Viktor Krum",
        choiceC: "Ron Weasley",
        answer: "b"
    },

    {
        id: 35,
        question: "What is the name of the Weasley's house?",
        choiceA: "The Burrow",
        choiceB: "The Crevice",
        choiceC: "The Hollow",
        answer: "a"
    },

    {
        id: 36,
        question: "Who created the Sorting Hat?",
        choiceA: "The Ministry of Magic",
        choiceB: "Albus Dubledore",
        choiceC: "Founders of Hogwarts",
        answer: "c"
    },

    {
        id: 37,
        question: "Who was flying with Mad Eye Moody when he died?",
        choiceA: "Ron Weasley",
        choiceB: "Tonks",
        choiceC: "Mundungus Fletcher",
        answer: "c"
    },

    {
        id: 38,
        question: "What's device that Dumbledore uses when putting out street lights?",
        choiceA: "Deluminator",
        choiceB: "Probity Probe",
        choiceC: "Omniocular",
        answer: "a"
    },

    {
        id: 39,
        question: "What position does Harry play on the Quidditch team?",
        choiceA: "Keeper",
        choiceB: "Catcher",
        choiceC: "Seeker",
        answer: "c"
    },

    {
        id: 40,
        question: "What dark wizard did Albus Dumbledore defeat in 1945?",
        choiceA: "Tom Riddle",
        choiceB: "Grindelwald",
        choiceC: "Salazar",
        answer: "b"
    },

    {
        id: 41,
        question: "How did Harry and Ron get to Hogwarts their second year?",
        choiceA: "Flying Car",
        choiceB: "Broom",
        choiceC: "Train",
        answer: "a"
    },

    {
        id: 42,
        question: "What is Tom Riddle's middle name?",
        choiceA: "Marvolo",
        choiceB: "Marko",
        choiceC: "Mazarlo",
        answer: "a"
    },

    {
        id: 43,
        question: "Which type of insect is Ronald Weasley most afraid of?",
        choiceA: "Wasp",
        choiceB: "Spider",
        choiceC: "Scorpian",
        answer: "b"
    },

    {
        id: 44,
        question: "What is the name of Hagrid's big dog?",
        choiceA: "Fawkes",
        choiceB: "Padfoot",
        choiceC: "Fluffy",
        answer: "c"
    },

    {
        id: 45,
        question: "Finish the quote: 'After all this time?'",
        choiceA: "Forever",
        choiceB: "Always",
        choiceC: "Eternally",
        answer: "b"
    },

    {
        id: 46,
        question: "What animal do you see first in the first movie?",
        choiceA: "Cat",
        choiceB: "Dog",
        choiceC: "Owl",
        answer: "c"
    },

    {
        id: 47,
        question: "What is the first spell that was cast by Hermione?",
        choiceA: "Oculus Reparo",
        choiceB: "Lumos",
        choiceC: "Wingardium Leviosa",
        answer: "a"
    },

    {
        id: 48,
        question: "What is the first spell that was cast by Hermione?",
        choiceA: "Oculus Reparo",
        choiceB: "Lumos",
        choiceC: "Wingardium Leviosa",
        answer: "a"
    },

    {
        id: 49,
        question: "Which vault was the Philosopher's Stone kept in?",
        choiceA: "711",
        choiceB: "712",
        choiceC: "713",
        answer: "c"
    },

    {
        id: 50,
        question: "Who, according to Harry, did Dumbledore see right through?",
        choiceA: "Nearly Headless Nick",
        choiceB: "Tom Riddle",
        choiceC: "Draco Malfoy",
        answer: "b"
    },

    {
        id: 51,
        question: "What did Fawkes give Harry when he was running from the Basilisk?",
        choiceA: "Sorting Hat",
        choiceB: "Sword",
        choiceC: "Wand",
        answer: "a"
    },

    {
        id: 52,
        question: "What does Ron receive after stealing the flying car?",
        choiceA: "A curse",
        choiceB: "A howler",
        choiceC: "A detention",
        answer: "b"
    },

    {
        id: 53,
        question: "Who did Scabbers turn out to be in the movie?",
        choiceA: "Barty Crouch, Jr.",
        choiceB: "Fenrir Greyback",
        choiceC: "Peter Pettigrew",
        answer: "c"
    },

    {
        id: 54,
        question: "Who is Stan Shunpike in the Harry Potter movie?",
        choiceA: "Bus Conductor",
        choiceB: "Hogwarts Professor",
        choiceC: "Goblin at Gringotts Bank",
        answer: "a"
    },

    {
        id: 55,
        question: "Who put Harry's name in the Goblet of Fire?",
        choiceA: "Igor Karkaroff",
        choiceB: "Viktor Krum",
        choiceC: "Barty Crouch, Jr",
        answer: "c"
    },

    {
        id: 56,
        question: "Who yelled, 'Stop it! Can't you see it's bothering him? Stop it!'",
        choiceA: "Neville Longbottom",
        choiceB: "Hermione Granger",
        choiceC: "Harry Potter",
        answer: "b"
    },

    {
        id: 57,
        question: "What is the name of the journalist?",
        choiceA: "Hannah Abbott",
        choiceB: "Angelina Johnson",
        choiceC: "Rita Skeeter",
        answer: "c"
    },

    {
        id: 58,
        question: "What is the name of the pub where 'Dumbledore's Army' is created?",
        choiceA: "The Hog's head",
        choiceB: "The Green Dragon",
        choiceC: "The Leaky Cauldron",
        answer: "a"
    },

    {
        id: 59,
        question: "The film Order of the Phoenix had how many quiddich games",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        answer: "a"
    },

    {
        id: 60,
        question: "Who escorts Harry Potter to the Ministry for his hearing?",
        choiceA: "Hagrid",
        choiceB: "Dumbledore",
        choiceC: "Arthur Weasley",
        answer: "c"
    },

    {
        id: 61,
        question: "What is the name of Cedric Diggory's father?",
        choiceA: "Ernie",
        choiceB: "Percy",
        choiceC: "Amos",
        answer: "c"
    },

    {
        id: 62,
        question: "Who gives Harry Potter Occlumency lessons?",
        choiceA: "Professor Trelawney",
        choiceB: "Serverus Snape",
        choiceC: "Remus Lupin",
        answer: "b"
    },

    {
        id: 63,
        question: "Where did Harry and Cho kiss for the first time?",
        choiceA: "Stairway",
        choiceB: "Room of Requirement",
        choiceC: "Gryffindor Common Room",
        answer: "b"
    },

    {
        id: 64,
        question: "What name was written in the old potion's book that Harry received?",
        choiceA: "Tom Riddle",
        choiceB: "Salazar Slytherin",
        choiceC: "Half Blood Prince",
        answer: "c"
    },

    {
        id: 65,
        question: "Who finds Harry paralyzed in the train carriage?",
        choiceA: "Luna Lovegood",
        choiceB: "Ron WeasleHy",
        choiceC: "Neville Longbottom",
        answer: "a"
    },

    {
        id: 66,
        question: "What spell does Draco use to paralyze Harry in the carriage?",
        choiceA: "Stupefy",
        choiceB: "Immobulus",
        choiceC: "Petrificus Totalus",
        answer: "c"
    },

    {
        id: 67,
        question: "Who was Harry's date at Slughorn's Christmas Party?",
        choiceA: "Cho Chang",
        choiceB: "Luna Lovegood",
        choiceC: "Hermione Granger",
        answer: "b"
    },

    {
        id: 68,
        question: "What did Griphook want from Harry Potter for helping him break into Gringotts?",
        choiceA: "Gold",
        choiceB: "A Wand",
        choiceC: "Sword of Gryffindor",
        answer: "c"
    },

    {
        id: 69,
        question: "Who kills Snape?",
        choiceA: "Voldemort",
        choiceB: "Draco Malfoy",
        choiceC: "Nagini",
        answer: "c"
    },

    {
        id: 70,
        question: "Where did Harry and Ron meet?",
        choiceA: "Hogwarts Express",
        choiceB: "King's Cross Station",
        choiceC: "Hogwarts",
        answer: "b"
    },

    {
        id: 71,
        question: "Which spell is also known as the Thief's Friend?",
        choiceA: "Lumos",
        choiceB: "Accio",
        choiceC: "Alohomora",
        answer: "c"
    },

    {
        id: 72,
        question: "What animal can Remus Lupin turn into?",
        choiceA: "Warewolf",
        choiceB: "Dog",
        choiceC: "Rat",
        answer: "a"
    },

    {
        id: 73,
        question: "What species did Hagrid's pet dragon, Norbert, belong to?",
        choiceA: "Welsh Green",
        choiceB: "Norwegian Ridgeback",
        choiceC: "Hungarian Horntail",
        answer: "b"
    },

    {
        id: 74,
        question: "Where did Ron and Harry crash the flying car on their way to Hogwarts?",
        choiceA: "Hogwarts Tower",
        choiceB: "Hagrids Hut",
        choiceC: "Whomping Willow",
        answer: "c"
    },

    {
        id: 75,
        question: "What do you recite to close the Marauder's Map?",
        choiceA: "I am up to no good",
        choiceB: "Mischief Managed",
        choiceC: "Accio Map",
        answer: "b"
    },

    {
        id: 76,
        question: "What is Harry's Patronus?",
        choiceA: "Stag",
        choiceB: "Dog",
        choiceC: "Horse",
        answer: "a"
    },

    {
        id: 77,
        question: "What spell created by the Half Blood Prince did Harry use on Draco Malfoy?",
        choiceA: "Scourgify",
        choiceB: "Sectumsempra",
        choiceC: "Serpensortia",
        answer: "b"
    },

    {
        id: 78,
        question: "During Harry's first year in Hogwarts, what is the password given to the 'Fat Lady'",
        choiceA: "Bertie Botts",
        choiceB: "Balderdash",
        choiceC: "Caput Draconis",
        answer: "c"
    },







];


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

const mostRecentScore = localStorage.getItem('mostRecentScore');
scoreText.innerText = mostRecentScore;

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
                    console.log(name, "score is", score)
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
    const score = {
        score: mostRecentScore,
        name: usernameInput
    };
    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    console.log(highScores);


};

highScoresList.innerHTML = highScores.map(score => {
    return `<tr>
        <td>${score.name}</td>
        <td>${score.score}</td>
        </tr>`;
})




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
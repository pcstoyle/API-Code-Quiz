// let userScore = {};
var questionIndex = 0;
let timerInterval;
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");

const questions = [{
    question: "Commonly used data types DO NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers",
    ],
    answer: 3,
},
{
    question: "The condition in an if/else statement is enclosed within _______.",
    options: ["Parentheses", "Curley Brackets", "Square Brackets", "Quotes",
    ],
    answer: 1,
},
{
    question: "Arrays in JavaScript can be used to store ________",
    options: ["Booleans", "Strings", "Numbers", "All of the above",
    ],
    answer: 4,
},
{
    question: "String values must be encosed within _______ when being assigned to variables.",
    options: ["Quotes", "Curley Brackets", "Square Brackets", "Parentheses",
    ],
    answer: 3,
},
{
    question: "Console.log is a useful tool that can be used during development for debugging an app.",
    options: ["True", "False",
    ],
    answer: 1,
},
];

// WHEN I click the start button -- event buttonstener, click start 
document.getElementById("start-button").addEventListener("click", function startQuiz() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("quiz").style.display = "visable";
    startTimer();
    displayQuestions();
});
// THEN a timer starts and I am presented with a question -- timer with a countdown 

function startTimer() {
    var time = 60;
    var timeLeft = setInterval(() => {
        time--;
        timerEl.textContent = time;
    }, 1000);
};

function displayQuestions() {
    // pulling from questions object begining with 0 in the array 
    var currentQuestion = questions[questionIndex];

    questionEl.textContent = currentQuestion.question;
    optionsEl.textContent = "";

    currentQuestion.options.forEach(option => {
        const optionsButton = document.createElement("button");
        optionsButton.textContent = option;
        optionsEl.appendChild(optionsButton);
        //     optionsButton.addEventListener("click", () => checkAnswer(option));
    });
    questionEl.append(currentQuestion.question);
        
    };

// WHEN I answer a question -- present question with MC/TF answers, 
// THEN I am presented with another question  --proceed to next question, create questions attributes, append to DOM, keep count  




// WHEN I answer a question incorrectly -- if/else statement for correct answer 


// THEN time is subtracted from the clock -- deduct time from clock 


// WHEN all questions are answered or the timer reaches 0 -- show score 
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score -- set/get scores from local storage
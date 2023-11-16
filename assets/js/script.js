let timeLeft = 90;
let currentQuestion = 0;
let userScore = {};


// WHEN I click the start button -- event buttonstener, click start 
document.getElementById("start-button").addEventListener("click", function() {

});

// THEN a timer starts and I am presented with a question -- timer with a countdown 


// WHEN I answer a question -- present question with MC/TF answers, 
// THEN I am presented with another question  --proceed to next question, create questions attributes, append to DOM, keep count  
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



// WHEN I answer a question incorrectly -- if/else statement for correct answer 


// THEN time is subtracted from the clock -- deduct time from clock 


// WHEN all questions are answered or the timer reaches 0 -- show score 
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score -- set/get scores from local storage
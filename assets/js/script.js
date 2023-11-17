// let userScore = {};

let timerInterval;
var timerEl = document.getElementById("countdown");


const questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers",
    ],
    correctAnswer: "Alerts",
},
{
    question: "The condition in an if/else statement is enclosed within _______.",
    answers: ["Parentheses", "Curley Brackets", "Square Brackets", "Quotes",
    ],
    correctAnswer: "Parentheses",
},
{
    question: "Arrays in JavaScript can be used to store ________",
    answers: ["Booleans", "Strings", "Numbers", "All of the above",
    ],
    correctAnswer: "All of the above",
},
{
    question: "String values must be encosed within _______ when being assigned to variables.",
    answers: ["Quotes", "Curley Brackets", "Square Brackets", "Parentheses",
    ],
    correctAnswer: "Square Brackets",
},
{
    question: "Console.log is a useful tool that can be used during development for debugging an app.",
    answers: ["True", "False",
    ],
    correctAnswer: "True",
},
];

document.getElementById("start-button").addEventListener("click", function startQuiz() {
    document.getElementById("start").style.display = "none";
    // document.getElementById("quiz").style.display = "visable";
    startTimer();
    displayQuestions();
});

function startTimer() {
    var time = 60;
    timeLeft = setInterval(() => {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            clearInterval(timeLeft);
            timerEl.textContent = "0";
        }
    }, 1000);
};

let questionIndex = 0;
let correctAnswers = 0;

function displayQuestions(currentQuestion) {
    var questionEl = document.getElementById("question");
    var optionsEl = document.getElementById("options");
    var currentQuestion = questions[questionIndex];
    document.getElementById("quiz").style.display = "visable";
    questionEl.textContent = questions[questionIndex].question;
    optionsEl.textContent = "";
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(answer));
        optionsEl.appendChild(button);
    });
    };

function checkAnswer(answer) {
    var currentQuestion = questions[questionIndex];
    var resultEl = document.getElementById("result");

    if (answer === currentQuestion.correctAnswer) {
        resultEl.textContent = "Correct!";
        correctAnswers++;
    } else {
        resultEl.textContent = "Incorrect.";
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        setTimeout(endQuiz, 1000)
    } else {
        setTimeout(displayQuestions, 100)
    }
    console.log(correctAnswers);
};
var totalQuestions = 5;

function score (correctAnswers, totalQuestions) {
    var percentage = (correctAnswers/5) * 100;
    return percentage;
};


function endQuiz () {
    clearInterval(timeLeft);
    document.getElementById("score").setAttribute("class", "show");
    document.getElementById("quiz").style.display = "none";
    var finalScore = document.getElementById("final-score");
    var scorePercent = score(correctAnswers, totalQuestions);
    finalScore.textContent = `You answered ${correctAnswers} out of 5 correcty!!  ${scorePercent}%`
    console.log(scorePercent);
}

document.querySelector("form").addEventListener("submit", saveScore);

function saveScore(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var scorePercent = score(correctAnswers, totalQuestions);
    localStorage.setItem("name", name);
    localStorage.setItem("score", scorePercent);
    displayScores();
}

document.getElementById("show-scores").addEventListener("click", displayScores);
document.getElementById("back-btn").addEventListener("click", function resetQuiz() {
    questionIndex = 0;
    correctAnswers = 0;
    time = 60
    document.getElementById("start").style.display = "block";
    document.getElementById("scores-container").style.display = "none";
});

function displayScores() {
    var savedName = localStorage.getItem("name");
    var savedScore = localStorage.getItem("score");
    document.getElementById("score").style.display = "none";
    document.getElementById("scores-container").style.display = "block";
    document.getElementById("start").style.display = "none";
    if (savedName && savedScore) {
      var scoresContainer = document.getElementById("scores-list");
      var li = document.createElement("li");
      li.innerHTML = `${savedName}: ${savedScore}%`;
      scoresContainer.appendChild(li);
    };
  }
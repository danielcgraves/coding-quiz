//Pseudo-code

// Create a card or page that allows players to enter their initials and save their score in a high score page

//Variables

var startingCardEl = document.getElementById("starting-card");

var questionCardEl = document.getElementById("question-card");

var startButton = document.getElementById("start-btn");

var questionEl = document.getElementById("question");

var answerEls = document.querySelectorAll(".answer");

var resultEl = document.getElementById("result");

var initialsCardEl = document.getElementById("initials-card");

var finalScoreEl = document.getElementById("final-score");

var highscoresPage = document.getElementById("highscores-page");

var submitButton = document.getElementById("submit-btn");

var goBackButton = document.getElementById("go-back-btn");

var clearButton = document.getElementById("clear-btn");

var highScoresLink = document.getElementById("high-scores-link");

var userInitials;

var currentQuestionIndex;

var timerInterval;

var timeEl = document.querySelector(".time");

var secondsLeft = 50;

//Main Quiz function

function startQuiz() {
     //hides start screen
    startingCardEl.classList.add("hide");
     //Sets which question in the array will show
    currentQuestionIndex = 0;
     //reveals question screen
    questionCardEl.classList.remove("hide");
     //sets up the next question
    setNextQuestion();
    
    answerEls.forEach(answerEl => {
        answerEl.addEventListener("click", handleNextClick)
        })
    //begins timer
        timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeEl.classList.add("hide");
            questionCardEl.classList.add("hide");    
            initialsCardEl.classList.remove("hide");
        }
    }, 1000);
}

//Handles the clicks and gives logic to what the next click will do.
function handleNextClick(event) {
        if (event.target.textContent === questions[currentQuestionIndex].answer){     
            resultEl.classList.remove("hide");
            resultEl.textContent = "Correct";
        } else {
            secondsLeft = secondsLeft - 10;
            resultEl.classList.remove("hide");
            resultEl.textContent = "Incorrect";
        }
        currentQuestionIndex++;
            if (currentQuestionIndex === questions.length){
                timeEl.classList.add("hide");
                questionCardEl.classList.add("hide");    
                initialsCardEl.classList.remove("hide");
                finalScoreEl.textContent = secondsLeft;
                clearInterval(timerInterval);
                } else {
                setNextQuestion();
            }
}


//Grabs question for setNextQuestion function from the currentQuestionIndex
function setNextQuestion() {
    showQuestion(questions[currentQuestionIndex]);
}

//Takes question from questions array and sets it to the questionEl in html
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.options.forEach((option, index) => {
        answerEls[index].innerText = option;
    }) 
}


//Submits score and initials to localStorage



function submitScore() {
    var userScore = secondsLeft;
    localStorage.setItem("userScore", JSON.stringify(userScore));
    var userInitials = document.getElementById("user-initials").value;
    localStorage.setItem("userInitials", userInitials);
    initialsCardEl.classList.add("hide");
    resultEl.classList.add("hide"); 
    highscoresPage.classList.remove("hide");
    showHighScores();

    function showHighScores(){
        var lastHighScore = JSON.parse(localStorage.getItem("userScore"));
        var lastUserInitials = localStorage.getItem("userInitials");
        if (lastHighScore !== null) {
            document.querySelector("#highscores-placement").textContent =  lastUserInitials + " - " + lastHighScore;


        }
    }
}

//Go Back Functionality

function goBack() {
    location.reload();
}

//Clearing High Scores Logic

function clearHighScores() {
    document.querySelector("#highscores-placement").textContent = "No High Scores Yet!";
    localStorage.clear();
}

function viewHighScores() {
    startingCardEl.classList.add("hide");
    questionCardEl.classList.add("hide");
    initialsCardEl.classList.add("hide");
    timeEl.classList.add("hide");
    resultEl.classList.add("hide");
    highscoresPage.classList.remove("hide");
}


//Event Listeners

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", submitScore);

goBackButton.addEventListener("click", goBack);

clearButton.addEventListener("click", clearHighScores);

highScoresLink.addEventListener("click", viewHighScores);





//questions for quiz 

var questions = [
  
    
    
    {
        question: "Commonly used data types do not include: .",
        options: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers",
        ],
        answer: "Alerts"
    
    },
    {
        question: "The Condition of an if/else statement is enclosed in _____.",
        options: [
            "Quotes",
            "Curly Braces",
            "Square Brackets",
            "Parenthesis",
        ],
        answer: "Parenthesis"
    
    },
    {
        question: "Arrays in JavaScript can be used to store: .",
        options: [
            "Numbers and Strings",
            "Other Arrays",
            "Booleans",
            "All of the above",
        ],
        answer: "All of the above"
    
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: [
            "Quotes",
            "Curly Braces",
            "Square Brackets",
            "Parenthesis",
        ],
        answer: "Quotes"
    
    },
    
]

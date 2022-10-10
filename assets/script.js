//Pseudo-code
//Create question card
// - Make the question card dynamic so it changes questions after answered
// - Make incorrect answers to the question deduct time from the clock
// Make the game over card or page
// Create a card or page that allows players to enter their initials and save their score in a high score page

var startingCardEl = document.getElementById("starting-card");

var questionCardEl = document.getElementById("question-card");

var startButton = document.getElementById("start-btn");

var questionEl = document.getElementById("question");

var answer1 = document.getElementById("answer-1")

var answer2 = document.getElementById("answer-2")

var answer3 = document.getElementById("answer-3")

var answer4 = document.getElementById("answer-4")

var currentQuestion

var timeEl = document.querySelector(".time");

var secondsLeft = 100;

function startQuiz() {
     //hides start screen
    startingCardEl.classList.add("hide");
     //Sets which question in the array will show
    currentQuestion = 0;
     //reveals question screen
    questionCardEl.classList.remove("hide");
     //sets up the next question
    setNextQuestion();
     //begins timer
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function setNextQuestion() {
    showQuestion(questions[currentQuestion]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
}

//Starts quiz when start button is clicked
startButton.addEventListener("click", startQuiz)

//questions for quiz 
var questions = [
    {
        question: "Who is the best?",
        options: [
            { text: "Dain", correct: true },
            { text: "Not Dain", correct: false}
        ]
    }
]


//Pseudo-code

// - Make the question card dynamic so it changes questions after answered
// - Make incorrect answers to the question deduct time from the clock
// Make the game over card or page
// Create a card or page that allows players to enter their initials and save their score in a high score page

var startingCardEl = document.getElementById("starting-card");

var questionCardEl = document.getElementById("question-card");

var startButton = document.getElementById("start-btn");

var questionEl = document.getElementById("question");

var answerEls = document.querySelectorAll(".answer");

var currentQuestionIndex;

var timeEl = document.querySelector(".time");

var secondsLeft = 100;

function startQuiz() {
     //hides start screen
    startingCardEl.classList.add("hide");
     //Sets which question in the array will show
    currentQuestionIndex = 0;
     //reveals question screen
    questionCardEl.classList.remove("hide");
     //sets up the next question
    setNextQuestion();
     //begins timer
     
    answerEls.forEach(answerEl => {
        answerEl.addEventListener("click", handleNextClick)
        })

    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function handleNextClick() {
        currentQuestionIndex++;
            if (currentQuestionIndex === questions.length){
                return;
            } else {
                setNextQuestion();
            }
}


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



//Starts quiz when start button is clicked
startButton.addEventListener("click", startQuiz)

//questions for quiz 
var questions = [
  
    
    
    {
        question: "What is 1 + 1",
        options: [
            "2",
            "3",
            "4",
            "5",
        ],
        answer: "2"
    
    },
    {
        question: "What is 1 + 2",
        options: [
            "2",
            "3",
            "4",
            "5",
        ],
        answer: "3"
    
    },
    {
        question: "What is 1 + 3",
        options: [
            "2",
            "3",
            "4",
            "5",
        ],
        answer: "4"
    
    },
    {
        question: "What is 1 + 4",
        options: [
            "2",
            "3",
            "4",
            "5",
        ],
        answer: "5"
    
    },
    
]


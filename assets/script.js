//Pseudo-code

// Create a card or page that allows players to enter their initials and save their score in a high score page

var startingCardEl = document.getElementById("starting-card");

var questionCardEl = document.getElementById("question-card");

var startButton = document.getElementById("start-btn");

var questionEl = document.getElementById("question");

var answerEls = document.querySelectorAll(".answer");

var resultEl = document.getElementById("result");

var initialsCardEl = document.getElementById("initials-card")

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
    
    answerEls.forEach(answerEl => {
        answerEl.addEventListener("click", handleNextClick)
        })
    //begins timer
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

//Handles the clicks and gives logic to what the next click will do.
function handleNextClick(event) {
       console.log(event.target.textContent);
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
                questionCardEl.classList.add("hide");    
                initialsCardEl.classList.remove("hide");
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

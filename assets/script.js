//Pseudo-code 
//Make a functional start button that starts the timer
//Create question card
// - Make the question card dynamic so it changes questions after answered
// - Make incorrect answers to the question deduct time from the clock
// Make the game over card or page
// Create a card or page that allows players to enter their initials and save their score in a high score page

var startingCard = document.getElementById("starting-card")

var questionCard = document.getElementById("question-card")

var startButton = document.getElementById("start-btn")

var timeEl = document.querySelector(".time")

var secondsLeft = 100;

function setTime() {
    startButton, startingCard.classList.add('hide');
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}



startButton.addEventListener("click", setTime)



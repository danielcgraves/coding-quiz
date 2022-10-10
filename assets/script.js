//Pseudo-code 
//Make a functional start button that starts the timer
//Create question card
// - Make the question card dynamic so it changes questions after answered
// - Make incorrect answers to the question deduct time from the clock
// Make the game over card or page
// Create a card or page that allows players to enter their initials and save their score in a high score page



var timeEl = document.querySelector(".time")

var secondsLeft = 100;

function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

var startButton = document.querySelector("#start-btn")

startButton.addEventListener("click", function(){
    setTime();
});

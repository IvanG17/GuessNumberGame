'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Guess!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 21;

// console.log(document.querySelector(".guess").value);
// document

let secretNumber = Math.trunc(Math.random() * 25 + 1);
let highScore = document.querySelector(".highscore").textContent;
document.querySelector(".number").textContent = secretNumber;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function userClick() {
    let userGuess = Number(document.querySelector(".guess").value);
    if (!userGuess) { // Event when there is no input 
        //document.querySelector(".message").textContent = "No number!";
        displayMessage("No number inputted!");
        wrongGuess();
    } else if (userGuess === secretNumber) { // Event where the guess is correct 
        //document.querySelector(".message").textContent = "Correct Number- Congratulations!"
        displayMessage("Correct Number- Congratulations!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (document.querySelector(".score").textContent >= highScore) {
            highScore = document.querySelector(".score").textContent;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (userGuess > secretNumber) { // Event where the guess is too high

        //document.querySelector(".message").textContent = "Guess too high"
        displayMessage("Guess too high");
        wrongGuess();
    } else if (userGuess < secretNumber) { // Event wehre the guess is too low
        //document.querySelector(".message").textContent = "Guess too low"
        displayMessage("Guess too low");
        wrongGuess();
    }
}

function wrongGuess() {
    let score = Number(document.querySelector(".score").textContent);
    if (score <= 0) {
        document.querySelector(".score").textContent = score.toString();
        //document.querySelector(".message").textContent = "Game over!";
        displayMessage("Game over!");
        timedRefersh(2000);
        return;

    }
    score -= 1;
    document.querySelector(".score").textContent = score.toString();
    return;
}

function again() {
    document.location.reload();
    //document.querySelector(".highscore").textContent = highScore;

}

function timedRefresh(timeoutPeriod) {
    wait(timeoutPeriod);
    document.location.reload();
    return;
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


document.querySelector('.check').addEventListener('click', userClick);
document.querySelector('.again').addEventListener('click', again);
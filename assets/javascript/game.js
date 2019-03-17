var wordGuess = document.querySelector('input');
var lettersTried = document.querySelector('.tried');
var solution = ["apple", "python", "white"];
var liveStart = 10;
var triesLeft = 0;
var wins = 0;
var guessField = [];


function gameStats() {

}



// wordGuess.onkeyup = letterGuess;

// function letterGuess(event) {

//     var letter = event.key;

//     if (letter === "a") {
//         lettersTried.innerHTML = "Letters Guessed: A";
//         guessField.push(event.key);
//     }
//     if (letter === "b") {
//         lettersTried.innerHTML = "Letters Guessed: B";
//         guessField.push(event.key);
//         return guessField;
//     }
// }

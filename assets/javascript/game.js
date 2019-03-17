var wordGuess = document.querySelector('input');
var wordSolution = document.querySelector('.randomWord');
var lettersTried = document.querySelector('.tried');
var start = document.querySelector('.lives');
var solution = ["apple", "python", "white"];
var guessStart = 10;
var wins = 0;
var guessField = [];


function reset() {
    guessStart;
    var chooseWord = solution[Math.floor(Math.random()*solution.length)];

    guessField = [];

}

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

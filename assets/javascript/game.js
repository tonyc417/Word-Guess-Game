var wordGuess = document.querySelector('input');
var wordSolution = document.querySelector('#solved');
var lettersTried = document.querySelector('.tried');
var start = document.querySelector('.lives');
var resetBtn = document.querySelector('.reset');
var solution = ["apple", "python", "white"];
var solvedWord = [];
var guessLives = 10;
var wins = 0;
var guessField = [];

resetBtn.addEventListener("click", reset);

function reset() {
    start.innerHTML = "Number of guesses remaining: " + guessLives;
    var chooseWord = solution[Math.floor(Math.random() * solution.length)];

    guessField = [];

}

wordGuess.onkeyup = letterGuess;

function letterGuess(event) {

    var letter = event.keyCode;

    if (letter >= 65 && letter <= 90) {
        lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;
        guessField.push(event.key);
    }
    if (letter === 66) {
        start.innerHTML = "Number of guesses remaining: " + guessLives--;
    }
}


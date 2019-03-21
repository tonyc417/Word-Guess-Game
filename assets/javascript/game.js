var wordGuess = document.querySelector('input');
var wordSolution = document.querySelector('#solved');
var lettersTried = document.querySelector('.tried');
var start = document.querySelector('.lives');
var resetBtn = document.querySelector('.reset');
var testingStage = document.querySelector('.testing');
var solution = ["apple", "python", "white"];
var solvedWord = [];
var guessField = [];
var guessLives = 10;
var guessLeft = 0;
var wins = 0;

var chooseWord = solution[Math.floor(Math.random() * solution.length)];

console.log(chooseWord);

resetBtn.addEventListener("click", reset);

function reset() {
    guessLives = 10;

    guessField = [];

}

function testGuess(letter) {

    var storeLetter = [];

    for (var i = 0; i < chooseWord.length; i++) {
        if (solution[i] === letter) {
            storeLetter.push[i];
            storeLetter.innerHTML = event.key;
        }
    }
}



document.onkeyup = function(event) {
    var letter = event.keyCode;

    if (letter >= 65 && letter <= 90) {
        lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;
        guessField.push(event.key);
    }
}

// wordGuess.onkeyup = letterGuess;

// function letterGuess(event) {

//     var letter = event.keyCode;

//     if (letter >= 65 && letter <= 90) {
//         lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;
//         guessField.push(event.key);
//     }
//     for (var i = 0; i < chooseWord.length; i++) {
//         if (letter  chooseWord[i]) {
//             solved.innerHTML = event.key;
//         }    
//         console.log(chooseWord[i])   
//         }
//     }
    // if (letter === chooseWord.length) {
    //     wordSolution.innerHTML = "A____";
    // }







var wordGuess = document.querySelector('input');
var wordSolution = document.querySelector('.randomWord');
var lettersTried = document.querySelector('.tried');
var start = document.querySelector('.lives');
var solution = ["apple", "python", "white"];
var solvedWord = [];
var guessStart = 10;
var wins = 0;
var guessField = [];


function reset() {
    guessStart;
    var chooseWord = solution[Math.floor(Math.random() * solution.length)];

    guessField = [];

}


//  function letterGuess(event) {
//      if(event.keyCode >= 65 && event.keyCode <= 90 ) {
//          console.log("you pressed:" + event.key );
//      }
//  }


wordGuess.onkeyup = letterGuess;

function letterGuess(event) {

    var letter = event.keyCode;

    if (letter >= 65 && letter <= 90) {
        lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;

        guessField.push(event.key);
    }
}


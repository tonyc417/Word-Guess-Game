var wordSolution = document.querySelector("#currentWord"); // the word
var lettersTried = document.querySelector('.tried'); // grabbing tried element in html
var resetBtn = document.querySelector(".reset"); // selecting reset button
var livesLeft = document.querySelector(".lives");
var gameLost = document.querySelector('.gameover');
var string;

var solution = ["apple", "pyton", "white"]; //array of words to pick from 
guessLives = 10; // lives you start with 
letterSolution = []; // the word we pick
guessField = []; // letters user guesses 


resetBtn.addEventListener("click", reset);
var chooseWord = solution[Math.floor(Math.random() * solution.length)];

function reset() {
    guessLives = 10;
    letterSolution = [];
    guessField = [];
    solutionPrint = [];
}
reset();


function displayStats() {
    for (var i = 0; i < chooseWord.length; i++) {
        letterSolution[i] = "_";
        console.log(chooseWord[i]);
    }
    
    string = letterSolution.join(" ");
    wordSolution.innerHTML = string;
}

displayStats();

document.onkeydown = function(event) {
    var letter = event.keyCode;
    var solutionPrint = [];

    for (var i = 0; i < chooseWord.length; i++) {
       if (chooseWord[i] === event.key) {
        solutionPrint.push(event.key);
        wordSolution.innerHTML = solutionPrint;
       }
    }

    if (solutionPrint.length <= 0) {
        livesLeft.innerHTML = "Guess remain: " + guessLives--;
    } 

    if (guessLives === 0 ) {
        gameLost.setAttribute = ("class", ".gameover");
        gameLost.innerHTML = "You lost! Try again by pressing the reset button!";
    }

    if (letter >= 65 && letter <= 90) {
        lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;
        guessField.push(event.key);
    } 
    
}

var wordSolution = document.querySelector("#currentWord"); // the word
var lettersTried = document.querySelector('.tried'); // grabbing tried element in html
var resetBtn = document.querySelector(".reset"); // selecting reset button
var livesLeft = document.querySelector(".lives");
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
}
reset();


function displayStats() {
    for (var i = 0; i < chooseWord.length; i++) {
        letterSolution[i] = "_";
        // wordSolution.innerHTML = letterSolution;
        console.log(chooseWord[i]);
    }
    
    string = letterSolution.join(" ");
    wordSolution.innerHTML = string;
}

displayStats();

document.onkeydown = function(event) {
    var letter = event.keyCode;
    var solutionPrint = [];
    // if (chooseWord.length) {
    //     for (var i = 0; i <chooseWord.length; i++) {
    //         if (chooseWord[i] == letter)
    //         letterSolution[i] = chooseWord[i];
    //     }
    // }
    for (var i = 0; i < chooseWord.length; i++) {
       if (chooseWord[i] === event.key) {
        // letterSolution[i] = event.key;
        // letterSolution.innerHTML = event.key;
        solutionPrint.push(event.key);
        wordSolution.innerHTML = solutionPrint;
       }
    }

    if (solutionPrint.length <= 0) {
        livesLeft.innerHTML = "Guess remain: " + guessLives--;
    } 

    // letterSolution.innerHTML = event.key;

    if (letter >= 65 && letter <= 90) {
        lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;
        guessField.push(event.key);
    } 
    
}

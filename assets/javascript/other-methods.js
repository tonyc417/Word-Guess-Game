var wordSolution = document.querySelector("#currentWord"); // the word
var lettersTried = document.querySelector('.tried'); // grabbing tried element in html
var resetBtn = document.querySelector(".reset"); // selecting reset button
var string;

var solution = ["apple", "pyton", "white"]; //array of words to pick from 
guessLives = 10; // lives you start with 
letterSolution = []; // the word we pick
guessField = []; // letters user guesses 

resetBtn.addEventListener("click", reset);

function reset() {
    letterSolution = [];
    guessField = [];
}
reset();

var chooseWord = solution[Math.floor(Math.random() * solution.length)];

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

    // if (chooseWord.length) {
    //     for (var i = 0; i <chooseWord.length; i++) {
    //         if (chooseWord[i] == letter)
    //         letterSolution[i] = chooseWord[i];
    //     }
    // }
    for (var i = 0; i < chooseWord.length; i++) {
       if (chooseWord[i] === letter) {
        letterSolution[i] = event.key;
       }
    }

    // wordSolution.innerHTML = textSolution;

    if (letter >= 65 && letter <= 90) {
        lettersTried.innerHTML = "You pressed: " + event.key + " Letters Already Guessed: " + guessField;
        guessField.push(event.key);
    }
    
}

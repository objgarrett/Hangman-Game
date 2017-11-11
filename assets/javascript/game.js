//setting the variables
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var word;
    var guess;
    var guesses = [];
    var lives;
    var counter;

    var showGuessesRemaining = document.getElementById("guessesRemaining");

//random phrase selector from wordsToGuess
var wordsToGuess = ["archie", "riverdale", "serpent", "southside"];

word = wordsToGuess[Math.floor(Math.random()*(wordsToGuess.length - 1))];
console.log(word);

//creating the answer array
result = function () {
	wordHolder = document.getElementById('hold');
	correct = document.createElement('ul');

for (var i = 0; i < word.length; i++) {
  	correct.setAttribute('id', 'my-word');
  	guess = document.createElement('li');
  	guess.setAttribute('class', 'guess');
  	if (word[i] === "-") {
    	guess.innerHTML = "-";
    	space = 1;
  	} else {
    	guess.innerHTML = "_";
  	}
guesses.push(guess);
wordHolder.appendChild(correct);
correct.appendChild(guess);
}
}

//main game


//keyup looking for player's guess
document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toUpperCase();
//	playGame(letter);
}

//check the guess is valid letter

//keep track of correct letters the player has guessed

//show the incorrect letters the player has guessed

//finish when player has won or lost

// Create guesses ul

//show lives
comments = function(){
	showGuessesRemaining.innerHTML = "You have " + guessesRemaining + " guesses left.";
	if(guessesRemaining < 1) {
		showGuessesRemaining.innerHTML = "Game Over";
	}
	for (var i = 0; i < guesses.length; i++) {
		showGuessesRemaining.innerHTML = "You Win!"
	}
}



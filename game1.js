//Create array of words
$(document).ready(function(){

var words = ["roses", "lily", "tulips", "carnations"];
var wordArray = [];
var previousGuesses = [];
var gamesWon = 0;

var counter = 3;



var currentWord = words[Math.floor(Math.random()*words.length)];
	

var lettersGuessed = function(userKeyPressed){
	
	$("#guesses").append("<p.span id='letter'>" + userKeyPressed + "</p.span>");
}
//functions: to hold wrong letters from previous guesses
//- hold counter for number of wins (solves the whole word)
//- hold counter for number of guesses left

//var numberOfSpaces = currentWord.length;
for(var i = 0; i < currentWord.length; i++){
	wordArray[i] = "_";
}
	//var one = wordArray.join(' ');
	$("#wordHolder").append("<span id='s'>" + wordArray.join(' ') + "</span>");
	



//take user input and compare it to the currentword and display
//while(counter > 0){
document.onkeyup = function(e){
	var userInput = e.key;

	//var prevGuessWord = guessWord;
	var alreadyGuessed = [];
	var lives = 0;

		for(var j = 0; j < currentWord.length; j++){
		//debugger; var currLetter = currentWord[j];
		if(currentWord[j] === userInput){
			wordArray[j] = userInput;
			$("#s").html("<span>" + wordArray.join(' ') + "</span>");
			}

				
		}

	}
	



});	
//var handleLettersPressed = function(e){
//	var userGuess = e.key;
//	for(j = 0; j < wordChoice.length; j++){
//	if(wordChoice[j] === userGuess){
//		answerArray[j] = userGuess;
//		$("#chosen-word").html("<p>" + answerArray + "</p>");
//}
//}
//handleLettersPressed();
//Display letters guessed
//Get element by ID
//Append to that element
//var lettersGuessed = function(userKeyPressed){
//	$("#letters-guessed").append("<span>" + userKeyPressed + "</span>");
//}


//var handleLettersPressed = function(e){
//	var usersGuessedLetter = e.key;
	//Fuction checks to see if letter is in the word
	//If letter is in the word - display on the screen
	//Else if the letter is Not in the word
		//Call the decrease guesses function
		//Call the letters guessed function

//	lettersGuessed(usersGuessedLetter);
//	});
/*		while(numberGuesses > 0){
		var	userGuess = prompt("Choose a letter:");
		for(var j = 0; j < wordChoice.length; j++){
				if(wordChoice[j] === userGuess){
					answerArray[j] = userGuess;
					$("#chosen-word").html("<p>" + answerArray + "</p>");
					numberGuesses--;
					}
			}
		}
	}
//	});
});*/
//take the user guess letter: Guess what letter I'm thinking of
//creat variable for the currentKeyPressed
//var checkLetters = function(e){
//	var userGuess = e.key;
//Create a loop that looks through the array
//Compare the current keyPressed and see if it equals the letter at that index
//IF it matches - display it
//If it doesn't add it to letters guessed
//	for(var i = 0; i < wordChoice.length; i++){
//			answerArray[i] = "_";
//		} 
//}



//number of times user has guessed word correctly
//var wins = 0;
//If player wins, increment by 1
//var playerWins = function() {
//	wins++;
//}
//Losses, number of times user has guessed word incorrectly
//var losses = 0;
//var playerLosses = function(){
//	losses++;
//}
//Number of guesses remaining...update every time
//create variable for guesses





//}
//var word = "string";

//Create variable for words
//Display a dash for each letter of word on the screen
//Use .length to check how many for the word and use for loop to display accordingly
//	$(document).ready(function(){
//		var word = "string";
//	for(var i = 0; i < word.length; i++){
//		$("chosen-word").append("<span>" + " _ " + "</span>");
//	}

//	});

//Global variables
var wordArray = ["katniss", "mockingjay", "peeta", "effie", "caesar", "haymitch", "snow"];
var chosenWord = "";
var lettersinWord = [];
var answerArray =[];
var guessesArray = [];
var guessesNumber = 7;
var numBlanks = 0;
var winCounter = 0;
var lossCounter = 0;
//Functions
function startGame(){
	chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	lettersinWord = chosenWord.split("");
	numBlanks = lettersinWord.length;

	answerArray=[];
	guessesArray=[];
	guessesNumber = 7;

	for(var i = 0; i < numBlanks; i++){
		answerArray.push("__");
	}

	//document.getElementById("changeimg").src ="firebird.jpg";
	document.getElementById("currentword").innerHTML = answerArray.join(" ");
	document.getElementById("guessesNumber").innerHTML = guessesNumber;
	document.getElementById("winscounter").innerHTML = winCounter;
	document.getElementById("losscounter").innerHTML = lossCounter;
	document.getElementById("letterGuess").innerHTML = guessesArray;

}

function wordCheck(userLetter){
var isLetterInWord = false;

	for(var i = 0; i < numBlanks; i++){
		if(chosenWord[i] === userLetter){
			isLetterInWord = true;
		}
	}
	
	if(isLetterInWord){
	for(var i = 0; i < numBlanks; i++){
		if(chosenWord[i] === userLetter){
			answerArray[i] = userLetter;
			
		}		
	}
}
	else {
		guessesArray.push(userLetter);
		guessesNumber--;
		
	}
}

function gameOverCheck(){

	document.getElementById("currentword").innerHTML = answerArray.join(" ");
	document.getElementById("guessesNumber").innerHTML = guessesNumber;
	document.getElementById("letterGuess").innerHTML = guessesArray.join(" ");
	
	if(lettersinWord.toString() === answerArray.toString()){
		getImage(chosenWord);
		winCounter++;
		alert("You Won!");
		document.getElementById("winscounter").innerHTML = winCounter;
		
		startGame();
	}
	
	else if(guessesNumber === 0){
		lossCounter++;
		alert("Sorry, you Lost!");
		document.getElementById("losscounter").innerHTML = lossCounter;
		
		startGame();
	}

	

}

function getImage(chosenWord){
	switch(chosenWord){
		case "katniss":
		document.getElementById("changeimg").src ="assets/images/katniss.png";
		break;
		case "peeta":
		document.getElementById("changeimg").src ="assets/images/peeta.png";
		break;
		case "mockingjay":
		document.getElementById("changeimg").src ="assets/images/mockingjay.png";
		break;
		case "effie":
		document.getElementById("changeimg").src ="assets/images/Effie.png";
		break;
		case "haymitch":
		document.getElementById("changeimg").src ="assets/images/haymitch.jpg";
		break;
		case "snow":
		document.getElementById("changeimg").src ="assets/images/snow.png";
		break;
		case "caesar":
		document.getElementById("changeimg").src ="assets/images/caesar.jpg";
		}

}



window.onload = function(){
//Main 
startGame();

document.onkeyup = function(event){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	wordCheck(letter);
	gameOverCheck();

}


};
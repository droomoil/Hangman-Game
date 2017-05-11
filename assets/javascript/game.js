

// game setup

var engineList = ["thomas", "percy", "gordon", "henry", "james", "edward", "emily", "toby"];
var thomas = ["t", "h", "o", "m", "a", "s"];
var percy = ["p", "e", "r", "c", "y"];
var gordon = ["g", "o", "r", "d", "o", "n"];
var henry = ["h", "e", "n", "r", "y"];
var james = ["j", "a", "m", "e", "s"];
var edward = ["e", "d", "w", "a", "r", "d"];
var emily = ["e", "m", "i", "l", "y"];
var toby = ["t", "o", "b", "y"];
var randomEngine;
var remainingMisses;
var answerArray;
var alreadyGuessedKeys
var wins;
var roundWon;
var underscoresRemain;

// function playWhistle(){
//        var audio = document.getElementById("whistle");
//        audio.play();
//                  }

function checkWin() {
	underscoresRemain = answerArray.indexOf("_") > -1;
	// console.log(answerArray.indexOf("_"));
}

function hideStars(){
	document.getElementById("upperLeftStar").style.visbility = "hidden";
	document.getElementById("upperRightStar").style.visbility = "hidden";
	document.getElementById("lowerLeftStar").style.visbility = "hidden";
	document.getElementById("lowerRightStar").style.visbility = "hidden";
}


function showStars(){
	document.getElementById("upperLeftStar").style.visbility = "visible";
	document.getElementById("upperRightStar").style.visbility = "visible";
	document.getElementById("lowerLeftStar").style.visbility = "visible";
	document.getElementById("lowerRightStar").style.visbility = "visible";
}

function newEngine() {
	answerArray = [];
	alreadyGuessedKeys = [];
	remainingMisses = 10;
	roundWon = false;
	// hideStars();
	randomEngine = engineList[Math.floor(Math.random() * engineList.length)];
	for (var i = 0; i < randomEngine.length; i++){
		answerArray[i] = "_";
	}
    document.getElementById("answer").innerHTML = answerArray.join(" ");
    document.getElementById("guessCounter").innerHTML = remainingMisses;
    document.getElementById("hero").src = "assets/images/mystery.png";
    document.getElementById("alreadyGuessed").innerHTML = "-";
    document.getElementById("nextButton").innerHTML = "New Mystery Engine"
    console.log(randomEngine);

}

function newPlayer() {
	newEngine();
	wins = 0;
	document.getElementById("winCounter").innerHTML = wins;
}


//PRESS A KEY


document.onkeyup = function(event) {
	// if (underscoresRemain === true){
	
	var keyMatch;
	    
	//checking if key is valid letter - must be a DRY way to do this

	if (roundWon === false && (event.key === "a" || event.key === "b" || event.key === "c" || event.key === "d" || event.key === "e" || event.key === "f" || event.key === "g" || event.key === "h" || event.key === "i" || event.key === "j" || event.key === "k" || event.key === "l" || event.key === "m" || event.key === "n" || event.key === "o" || event.key === "p" || event.key === "q" || event.key === "r" || event.key === "s" || event.key === "t" || event.key === "u" || event.key === "v" || event.key === "w" || event.key === "x" || event.key === "y" || event.key === "z")) {

	// check if engine letter is key and adds to answerArray if so

	    alreadyGuessedKeys.push(event.key);
	    document.getElementById("alreadyGuessed").innerHTML = alreadyGuessedKeys.join(", ");
	    for (var j = 0; j < randomEngine.length; j++) {
			if (randomEngine[j] === event.key) {
				keyMatch = true;
				answerArray[j] = event.key;
				document.getElementById("answer").innerHTML = answerArray.join(" ");
			} else {
				keyMatch = false;
			}
		}


	// logs a miss 

		if (keyMatch === false && underscoresRemain === true) {
		    remainingMisses--;
	    	document.getElementById("guessCounter").innerHTML = remainingMisses;
		}

	// loss when guesses run out

		if (remainingMisses === 0){
		    alert("You're out of guesses! Next mystery engine!");
		    newEngine();
		}

		checkWin();
		console.log(underscoresRemain);

		if (underscoresRemain === false && roundWon === false) {
		    wins++;
		    document.getElementById("winCounter").innerHTML = wins;
		    document.getElementById("hero").src = "assets/images/" + randomEngine + ".png";
		    roundWon = true;
		    document.getElementById("nextButton").innerHTML = ">>> Next Engine <<<";
		    // showStars();

		}

		     
	}
	// } else if (underscoresRemain === false) {
	// 	newEngine();
	// }
}
// } 
// else {
// 	document.onkeyup = function(next) {
// 			newEngine();
// 	}






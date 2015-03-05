
var word = undefined;
var mistakes = 0;
var MAX_MISTAKES = 6; //Two arms, two legs, one head, one body
var lettersGuessed = {};

/* =========== MAIN ============= */
/*  There's always a function that coordinates the game, like a conductor. */

//For a web page:
//Setup stuff in document.onLoad():
setTargetWord();

function submitGuess(letter){
	/*
	checkAnswer();
	
	if( youWon()){
		//Yay!
		//show some feedback
	} else if( youLost()){
		//Sad trombone! 
		//show some feedback
	}
	printPuzzle();
	*/
}

/* For a command line Node program, it would run something like this to start */
function main(){
	/*
	//one-time setup:
	intro();
	setTargetWord();

	//game play:
	while( true){
		//TODO: Read input from command line

		if( youWon()){
			//Yay!
			break;

		} else if( youLost()){
			//Sad trombone!
			break;
		}
		printPuzzle();
	}*/
}


/*  ========== GAME FUNCTIONS ======== */


/**
* @brief Check if a letter is correct.  
* If correct: mark the letter as correctly guessed 
* If not: increment the mistake counter
*/
function checkAnswer(letter){
}


/**
* @brief Print a welcome message and instructions.
*/

function intro(){

}

/**
* @brief  Print the word.  
* Print an underscore _ if the letter has not been guessed,
* or the letter if it has been guessed.
*/
function printPuzzle(){

}

/**
* @brief Pick a word for the user to guess.
*
*/
function setTargetWord(newWord){
	//To start, hardcode one word.
	//For a fancier version, pick from a list of words.
}


/**
* @brief  Does the word contain the letter?
*/
function wordContains(letter){

}


/**
* @brief Check whether all letters have been guessed.
*/
function youWon(){

}

/**
* @brief  Check whether the user has used up their mistakes. 
*/
function youLost(){

}


//Imports
var _ = require('lodash');
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array,3));

//Cache object references
let textbox = document.getElementById('input-text')
let workingString = document.getElementById('workingString')

//Define variables
let appendMode = 'append'

//Functions
function importDictionaryFromFile() {
	
}

function isLetter(c) {
	//NOTE: regexps don't get wrapped with quotes of any kind, and flags use a FORWARD slash to escape them
	return c.length ===1 && c.match(/[a-z]/i) !== null;
}

//Append a character to the string
function strAppend(c, appendMode='append') {
	switch (appendMode) {
		case 'append':
			workingString.textContent = workingString.textContent + c;
			break;
		case 'prepend':
			workingString.textContent = c + workingString.textContent;
			break;
		default:
			throw "appendMode is invalid";
	}
}

function submitLetter(event) {
	//Verify that the submitted text is a letter
	if (isLetter(event.target.value)) {
		//We're good. Append to the string
		strAppend(event.target.value,appendMode);
		clearInputTextbox();

		//Check the dictionary to see if this is a real word
		if (checkDictionary(event.target.value)) {
			//This word is in the dictionary. This player loses
			gameOver();
		}
		else {
			//This string does not yet make a word, so it's now the other player's turn
			nextPlayersTurn();
		}
	}
}

function checkDictionary(word) {
	//Check if the provided word exists in the currently selected dictionary file.
}

function gameOver() {
	//Clear the working string
	clearWorkingString();
	//Clear the input textbox
	clearInputTextbox();

}

function clearInputTextbox() {
	textbox.innerhtml = '';
}

function clearWorkingString() {
	workingString.innerhtml = '';
}

//Subscribe listeners
textbox.addEventListener('keypress', submitLetter);
/*
 * Morse Code receiver app information:
 *
 * Function: messageFinished(): stops the capturing process
 *
 *     You can call this function to let the app know that the 
 *     end-of-transmission signal has been received.
 *
 * -------------------------------------------------------
 *
 * ID: messageField: id of the message text area
 *
 *     This will be a textarea element where you can display
 *     the recieved message for the user.
 * 
 * -------------------------------------------------------
 *
 * ID: restartButton: id of the Restart button
 *
 *     This is a button element.  When clicked this should 
 *     cause your app to reset its state and begin recieving
 *     a new message.
 *
 */


// ADD YOUR ADDITIONAL FUNCTIONS AND GLOBAL VARIABLES HERE
var lookupTable = {
	DotDash: "a",
	DashDotDotDot: "b",
	
}

var currentCharacter = [];
var outputArea = document.getElementById("messageField");

function checkEndOfWord() {
	var endOfWord = true;
	var counter = 0;
	var endOfArray = currentWord.length - 1;
	while(endOfWord = true && counter <= 7) {
		if(currentWord[endOfArray - counter] == true) {
			return null;
		}else {
			counter++;
		}
	}
	
}

function checkEndOfCharacter() {
	var endOfCharacter = true;
	var coutner = 0;
	var endOfArray = currentCharacter.length - 1;
	while(endOfCharacter = true && counter <= 6) {
		if(currentCharacter[endOfArray - counter] == true) {
			return null;
		}else {
			counter++;
		}
	}
	parseCharacter();
}

function parseCharacter() {
	var character;
	
	outputArea.innerHTML += character;
	currentCharacter = [];
}
/*
 * This function is called once per unit of time with camera image data.
 * 
 * Input : Image Data. An array of integers representing a sequence of pixels.
 *         Each pixel is representing by four consecutive integer values for 
 *         the 'red', 'green', 'blue' and 'alpha' values.  See the assignment
 *         instructions for more details.
 * Output: You should return a boolean denoting whether or not the image is 
 *         an 'on' (red) signal.
 */
 
function decodeCameraImage(data)
{
    // ADD YOUR CODE HERE
	var red = 0, blue = 0;
	
	for(var i = 0; i < data.length; i += 4) {
		if(data[i] > data[i+2]) {
			red++;
		}else {
			blue++;
		}	
	}
	if(red > blue) {
		currentWord.push(true);
		checkEndOfCharacter();
		return true;
	}else {
		currentWord.push(false);
		checkEndOfCharacter();
		return false;
	}
}
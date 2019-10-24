var calcInput = ""
var calcInputParsed = ""

var shortDisplay = ""
var inputLength = ""
var maxInputLenght = ""

var checkIllegal = ""
var illegal = ["&pi;", "e", "²", "³"]
var legal = ["3.14159265359", "2.71828182846", "**2", "**3"]
var illegalPosition = 0
var illegalLength = 0

var calcOutput = ""

var cursorPosition = 0
var cursorPositionOld = 0


function input(button) {
	calcInput += button
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}


function buttonPi() {
	calcInput += "&pi;"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}



function buttonBack() {
		if (calcInput.slice(-4) == "&pi;") {
			calcInput = calcInput.slice(0, -4);
		}
		/*
		else if (calcInput.length == 1) {
			calcInput = ""
		}
		*/
		else {
				calcInput = calcInput.slice(0, -1);
		}

	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonClear() {
	calcInput = ""
	calcInputParsed = ""
	calcOutput = ""
	document.getElementById("output").innerHTML = calcInput;
}

function buttonEqual() {
	calcInputParsed = parseInput()
	calcOutput = String(eval(calcInputParsed));

	document.getElementById("output").innerHTML = calcOutput;
	calcInput = calcOutput
}



/*function buttonLeft() {
	cursorPosition -= 1
	updateCursor()
}

function buttonRight() {
	cursorPosition += 1
	updateCursor()
}


function updateCursor() {

	calcInput = calcInput.slice(0, cursorPosition) + "|" + calcInput.slice(cursorPosition);

	cursorPositionOld = calcInput.search("|")
	calcInput = calcInput.slice(0, cursorPositionOld) + calcInput.slice(cursorPositionOld + 1);

	document.getElementById("output").innerHTML = calcInput;
}
*/


function parseInput() {
	calcInputParsed = calcInput
	for (i=0; i<illegal.length; i++) {
		illegalLength = illegal[i].length

		while (calcInputParsed.includes(illegal[i]) == true) {
			illegalPosition = calcInputParsed.search(illegal[i])

			calcInputParsed = cutReplace()
		}

	}
	return calcInputParsed;
}

function cutReplace() {
	calcInputParsed = calcInputParsed.slice(0, illegalPosition) + legal[i] + calcInputParsed.slice(illegalPosition + illegalLength)
	return calcInputParsed;
}

function shortInput() {
	InputLength = calcInput.length
	if (InputLength > maxInputLenght) {
		shortDisplay = calcInput.slice(-25)
	} else {
		shortDisplay = calcInput
	}
}
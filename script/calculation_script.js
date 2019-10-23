var calcInput = ""
var calcInputParsed = ""

var shortDisplay = ""
var inputLength = ""
var maxInputLenght = ""

var checkIllegal = ""
var illegal = ["&pi;", "e", "²", "³"]
var legal = ["3.1415", "2.7182", "**2", "**3"]
var illegalPosition = 0
var illegalLength = 0

var calcOutput = ""

var cursorPosition = 0
var cursorPositionOld = 0

function buttonOne() {
	calcInput += 1
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonTwo() {
	calcInput += 2
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonThree() {
	calcInput += 3
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonFour() {
	calcInput += 4
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonFive() {
	calcInput += 5
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonSix() {
	calcInput += 6
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonSeven() {
	calcInput += 7
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonEight() {
	calcInput += 8
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonNine() {
	calcInput += 9
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonZero() {
	calcInput += 0
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonComma() {
	calcInput += "."
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonPlus() {
	calcInput += "+"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonMinus() {
	calcInput += "-"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonMultiply() {
	calcInput += "*"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonDivide() {
	calcInput += "/"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonOpenBracket() {
	calcInput += "("
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonCloseBracket() {
	calcInput += ")"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonPi() {
	calcInput += "&pi;"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonEuler() {
	calcInput += "e"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonSquare() {
	calcInput += "²"
	//buttonRight();
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonCube() {
	calcInput += "³"
	////buttonRight();
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
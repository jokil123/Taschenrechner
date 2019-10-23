var calcInput = ""
var calcInputParsed = ""

var checkIllegal = ""
var illegal = ["&pi;", "e", "²", "³"]
var legal = ["3.1415", "2.7182", "2", "3"]
var illegalPosition = 0
var illegalLength = 0

var calcOutput = ""

var cursorPosition = 0
var cursorPositionOld = 0

function buttonOne() {
	calcInput += 1
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonTwo() {
	calcInput += 2
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonThree() {
	calcInput += 3
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonFour() {
	calcInput += 4
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonFive() {
	calcInput += 5
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonSix() {
	calcInput += 6
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonSeven() {
	calcInput += 7
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonEight() {
	calcInput += 8
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonNine() {
	calcInput += 9
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonZero() {
	calcInput += 0
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonComma() {
	calcInput += "."
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonPlus() {
	calcInput += "+"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonMinus() {
	calcInput += "-"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonMultiply() {
	calcInput += "*"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonDivide() {
	calcInput += "/"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonOpenBracket() {
	calcInput += "("
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonCloseBracket() {
	calcInput += ")"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonPi() {
	calcInput += "&pi;"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonEuler() {
	calcInput += "e"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonSquare() {
	calcInput += "²"
	//buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}

function buttonCube() {
	calcInput += "³"
	////buttonRight();
	document.getElementById("output").innerHTML = calcInput;
}




function buttonBack() {
	calcInput = calcInput.slice(0, -1);
	document.getElementById("output").innerHTML = calcInput;
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

function power() {
	console.log("power");
}
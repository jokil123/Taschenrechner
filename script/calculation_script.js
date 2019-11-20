var calcInput = "";			//Taschenrechner Eingabe
var calcInputParsed = "";	//Taschenrechner Eingabe für eval() optimiert

var shortDisplay = "";		//Gekürzte Eingabe für Anzeige
var inputLength = "";		//länge der Eingabe
var maxInputLenght = 40;	//Maximale Eingabe länge um Überschuss zu verhindern


var illegalPosition = 0;	//Position des unzulässigen Zeichens
var currentcycles = 0;		//Teilkomponent von occurence(x, y)
var illegal = 			["&pi;", 			"e", 				"²", 	"³", 	"(?<!Math\.)(?<!a)(sin\())", 	"(?<!Math\.)(?<!a)(cos\())", 	"(?<!Math\.)(?<!a)(tan\())",	"(?<!Math\.)(asin\())", 		"(?<!Math\.)(acos\())", 		"(?<!Math\.)(atan\())", 			"(log<sub>)",	"(<\/sub>\())",	];
var illegalLength = 	[4, 				1, 					1, 		1, 		4, 								4, 								4,								5,								5,								5,									8,				7,				];
var legal = 			["(3.14159265359)", "(2.71828182846)", 	"**2", 	"**3", 	"Math.sin((Math.PI/180)*", 		"Math.cos((Math.PI/180)*", 		"Math.tan((Math.PI/180)*",		"(180/Math.PI)*Math.asin",		"(180/Math.PI)*Math.acos",		"(180/Math.PI)*Math.atan",			"baseLog(",		",",			];

var deleteWatchout = 	["&pi;", 			"e", 				"²", 	"³", 	"sin(", 						"cos(", 						"tan(",							"asin(",						"acos(",						"atan(",							"log<sub>",		"</sub>(",		];
var cutStatus = 0;			//ob schon ein zeichen abgeschnitten wurde


var regexBracketMultiply = /\d\(|\)\d|\)\(/g; 		//Ein Regex der nach zahl gefolg von klammer [bsp: 9(], klammer gefolg von klammer [bsp: )(] und klammer gefolgt von zahl [bsp: )9] sucht
var regexZeroComma = /(\.*0+$)/gm;					//Ein Regex der nach komma gefolg von nullen am ende eines strings [bsp: .000000] sucht


var calcOutput = "";		//die Ausgabe des Taschenrechners

var decimalPoints = 9		//die Anzahl der Dezimalstellen

var logStack = 0			//ob log schon gedrückt wurde

//var cursorPosition = 0;
//var cursorPositionOld = 0;


function input(button) {	//funktion für reguläre button eingaben
	switch (button) {
		case "log<sub>":	//ausnahme für log da es eine extra funktion benötigt
			logInit();		
			shortInput();
			document.getElementById("output").innerHTML = shortDisplay;		//schreibt die variabel in das eingabe Feld
			break;

		case "pi":			//ausnahme für Pi da es probleme gibt
			calcInput += "&pi;";
			shortInput();
			document.getElementById("output").innerHTML = shortDisplay;
			break;

		default:			//wenn keine ausnahme vorliegt wird das argument in der input('argument') funktion verwendet
			calcInput += button
			shortInput();
			document.getElementById("output").innerHTML = shortDisplay;
			break;
	}

}


function logInit() {		//funktion um zwischen den beiden teilen der logarithmus funktion hin und herzuschalten
	switch (logStack) {	
		case 0:
			calcInput += "log<sub>"			//hängt "log<sub>" der eingabe hinzu wobei "<sub>" ein tag für subscript (tiefgestellter text steht)
			logStack = 1
			break;
		case 1:
			calcInput += "</sub>("			//der "<sub>" tag wird geschlossen
			logStack = 0
			break;
	}
}


function buttonBack() {		//fuktion um die letzte eingabe zu entfernen
	cutStatus = 0;
	for (i3=0; i3<illegal.length; i3++) { 	//führt die funktion für jedes element im illegal array aus
		if (((calcInput.slice(-1 * illegalLength[i3])) == deleteWatchout[i3]) && (cutStatus == 0)) {	//sucht nach speziellen eingaben bsp sin( 
			cutStatus = 1
			calcInput = calcInput.slice(0, -1 * illegalLength[i3]);		//entfernt letzte eingabe
			switch (i3) {
				case 10:
					logStack = 0
					break;
				case 11:
					logStack = 1
					break;
				default:
					break;
			}


		}
	}

	if (cutStatus == 0) {
		calcInput = calcInput.slice(0, -1);	//wenn kein sonderzeich wird nur ein buchstabe entfernt
	}
	shortInput();
	document.getElementById("output").innerHTML = shortDisplay;
}

function buttonClear() {	//setzt alle variabeln zurück
	calcInput = "";
	calcInputParsed = "";
	calcOutput = "";
	logStack = 0;
	document.getElementById("output").innerHTML = calcInput;
}

function buttonEqual() {
	calcInputParsed = parseInput();					//optimiert eingabe für eval()
	calcOutput = eval(calcInputParsed);				//evaluiert die eingabe
	calcOutput = calcOutput.toFixed(decimalPoints)	//rundet ausgabe
	calcOutput = String(calcOutput)					//konvertiert float ausgabe zu string
	calcOutput = removeCommaOverflow()				//funktion um unnötige nullen zu entfernen
	


	catchError();									//funktion zur fehler suche

	document.getElementById("output").innerHTML = calcOutput;
	calcInput = calcOutput;
}


function catchError() {			//funktion zur fehler suche
	switch (calcOutput) {		
		case "Infinity":
			calcOutput = "Division by zero Error";
			break;
		case "NaN":
			calcOutput = "Syntax Error";
			break;
		default:
			break;
	}

}


function parseInput() {			//funktion zur optimisierung der eingabe 
	calcInputParsed = calcInput;
	for (i=0; i<illegal.length; i++) {

		currentcycles = occurence(calcInputParsed, illegal[i]);
		for (i2=0; i2<currentcycles; i2++ ) {
			illegalPosition = calcInputParsed.search(new RegExp(illegal[i], "g"));

			calcInputParsed = cutReplace();
		}

	}

	while (calcInputParsed.search(regexBracketMultiply) != -1) {
		illegalPosition = calcInputParsed.search(regexBracketMultiply);

		calcInputParsed = calcInputParsed.slice(0, illegalPosition + 1) + "*" + calcInputParsed.slice(illegalPosition + 1);
	}

	
	return calcInputParsed;
}

function cutReplace() {			//funktion um unzulässige eingabe auszuschneiden und mit zulässiger eingabe 
	calcInputParsed = calcInputParsed.slice(0, illegalPosition) + legal[i] + calcInputParsed.slice(illegalPosition + illegalLength[i]);
	return calcInputParsed;
}

function shortInput() {			//funktion um zu lange eingabe zu kürzen
	InputLength = calcInput.length
	if (InputLength > maxInputLenght) {
		shortDisplay = calcInput.slice(-1 * maxInputLenght);
	} else {
		shortDisplay = calcInput;
	}
}

function occurence(inputstr, searchObject) {	//funktion die anzahl an vorkommen von suchobjekt bzw regex muster in string sucht
	regex = new RegExp(searchObject, "g");
	occurences = (inputstr.match(regex) || []).length;
	return occurences;
}

function updateDecimalPoints() {		//funktion um tulässige kommastellen einzustellen
	decimalPoints = document.getElementById("decimalPointSelection").value;
}

function removeCommaOverflow() {		//funktion um unnütze kommastellen zu finden
	if (calcOutput.search(regexZeroComma) != -1) {
		illegalPosition = calcOutput.search(regexZeroComma);

		calcOutput = calcOutput.slice(0, illegalPosition)
	}
	return calcOutput;
}

function baseLog(x, y) {	//funktion um logaithmus von basis x und y zu finden
	return Math.log(y) / Math.log(x);
  }
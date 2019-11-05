var fx = "5 * x - 28"
var x = 0
var y = 0

var canvasX = 0
var canvasY = 0


var canvasSize = 400

var canvas = document.getElementById("graphDisplay");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";

ctx.fillRect(canvasPos(0) , canvasPos(0), 10, 10);


ctx.beginPath();


for (canvasX = 0; canvasX < canvasSize; canvasX++) {
    x = coordPos(canvasX);


    //calculation
        y = eval(fx)
        canvasY = canvasPos(y)

    
    ctx.fillRect(canvasX, canvasY, 1, 1);

    ctx.lineTo(canvasX, canvasY);
    ctx.stroke();

    console.log("X-wert: " + x)
    console.log("Y-wert: " + y)
}

function coordPos(convertible) {
    var converted = 0
    converted = convertible - 200
    return converted;
}

function canvasPos(convertible) {
    var converted = 0
    converted = convertible + 200
    return converted;
}
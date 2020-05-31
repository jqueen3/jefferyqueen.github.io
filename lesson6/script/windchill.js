var temp = parseFloat(document.getElementById("temp").innerHTML);
var speed = parseFloat(document.getElementById("wind").innerHTML);
var newTemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

if (temp <= 50 && speed > 3) {
    newTemp = Math.round(newTemp);
}
else {
    newTemp = "N/A";
}
document.getElementById("actual").innerHTML = newTemp;
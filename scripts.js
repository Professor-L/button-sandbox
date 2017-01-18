var animationInterval;

var introMessageString = "WROYGBPVVVVVggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaggbgggbgcccccgdddddggeeeggffggfgggggggggggggggagggagbgggbgggcgggggdgggegggegffggfgggggggggggggggagggagbgggbgggcgggggdgggegggegffggfgggggggggggggggagggagbgggbgggcgggggdgggegggegfgfgfgggggggggggggggaaaaggbgggbgggcgggggdgggegggegfgfgfgggggggggggggggagggagbgggbgggcgggggdgggegggegfgfgfgggggggggggggggagggagbgggbgggcgggggdgggegggegfggffgggggggggggggggagggagbgggbgggcgggggdgggegggegfggffgggggggggggggggaaaagggbbbggggcgggggdggggeeeggfggffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhgghhhgghhgghghhhgghhhggghhhgghggghggggggggggghggggghggghghhgghghgghghgghghggghgghghgggggggggggghggggghggghghghghghgghghgghghggghgghghggggggggggggghhhgghhhhhghghghghgghghhhgghggghggghggggggggggggggggghghggghghghghghgghghgghghggghgghghgggggggggggggggghghggghghgghhghgghghgghghggghgghghgggggggggggghhhhgghggghghgghhghhhgghhhggghhhgghggghggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";

var longImportArray = [
    "settings red", "settings orange", "settings yellow",
    "settings green", "settings blue", "settings purple",
    "settings white", "settings black",
    "red", "orange", "yellow", "green",
    "blue", "purple", "white", "black"
]; // possible className encounters when importing and exporting

var shortImportArray = ["R", "O", "Y", "G", "B", "P", "W", "V",
                        "a", "b", "c", "d", "e", "f", "g", "h"]; // Encodings for importing and exporting

document.getElementById("turnWhite").onclick = function() {
    clearBoard("white");
}

document.getElementById("turnRed").onclick = function() {
    clearBoard("red");
}

document.getElementById("turnOrange").onclick = function() {
    clearBoard("orange");
}

document.getElementById("turnYellow").onclick = function() {
    clearBoard("yellow");
}

document.getElementById("turnGreen").onclick = function() {
    clearBoard("green");
}

document.getElementById("turnBlue").onclick = function() {
    clearBoard("blue");
}

document.getElementById("turnPurple").onclick = function() {
    clearBoard("purple");
}

document.getElementById("turnBlack").onclick = function() {
    clearBoard("black");
}

// ^^ Defines how to clear board with each specific color clear ^^ \\

document.getElementById("randomize").onclick = function() {
    randomizeBoard();
}

function randomElement(a) {
    return a[Math.floor(Math.random() * a.length)]; // Returns random element of array a[]
}

var table = document.getElementById("mainTable");
var colorArray = ["white", "red", "orange", "yellow", "green", "blue", "purple", "black"]; // Array

var totalButtons = 0; // Used to keep track of number of buttons so each can have unique ID

// Allows users to set the grid size up to a given limit
var rows = parseInt(prompt("How many rows would you like, up to 25?", "25"), 10);
var columns = parseInt(prompt("How many columns would you like, up to 50?", "50"), 10);

if (rows > 25) {
    rows = 25;
}

if (columns > 50) {
    columns = 50;
}

var buttonsNum = rows * columns;

for (var i = 0; i < rows; i++) {
    var newRow = document.createElement("TR");
    table.appendChild(newRow); // Appends 25 rows to the table
    
    for (var k = 0; k < columns; k++) {
        var newData = document.createElement("TD");
        newRow.appendChild(newData); // Appends 50 <td> tags to each <tr> for a total of 1,250 items
        
        totalButtons += 1;
        var newButton = document.createElement("BUTTON"); 
        newButton.className = "white"; // White is default color; Color is kept track of via class names
        newButton.id = "btn" + totalButtons.toString(); // Gives button unique ID
        
        newData.appendChild(newButton); // Gives a button to every single <td>
    }
}

for (var i = 1; i <= buttonsNum; i++) {
    var btn = document.getElementById("btn" + i.toString());
    // Gets id of current button
    btn.onclick = function() {
        currentColorIndex = colorArray.indexOf(this.className);
        // Gets current color as index (integer)
        this.className = colorArray[(currentColorIndex + 1)%8];
        // Cycles through to next color using a modulus cycle
        docCookies.setItem("currentState", exportString(), Infinity);
    }
}

function clearBoard(color) {
    buttonArray = document.getElementsByTagName("button"); // Gets list of every button on the page
    for (var p = 0; p < buttonArray.length; p++) {
        buttonArray[p].className = color; // Sets every button to have class of *color*
    }
    updateSettings();
}

function randomizeBoard() {
    buttonArray = document.getElementsByTagName("button"); // Gets list of every button on the page
    for (var q = 0; q < buttonArray.length; q++) {
        buttonArray[q].className = randomElement(colorArray); // Sets every button to have a class of a random color
    }
    updateSettings();
}

function updateSettings() {
    document.getElementById("turnWhite").className = "settings white";
    document.getElementById("turnRed").className = "settings red";
    document.getElementById("turnOrange").className = "settings orange";
    document.getElementById("turnYellow").className = "settings yellow";
    document.getElementById("turnGreen").className = "settings green";
    document.getElementById("turnBlue").className = "settings blue";
    document.getElementById("turnPurple").className = "settings purple";
    document.getElementById("turnBlack").className = "settings black";
    document.getElementById("randomize").className = "settings black";
    document.getElementById("import").className = "settings black";
    document.getElementById("export").className = "settings black";
    document.getElementById("help").className = "settings black";
    // Resets CSS of top buttons that aren't supposed to look like the rest
    docCookies.removeItem("currentState");
    // Resets cookie
}

function exportString() {
    var currentState = document.getElementsByTagName("button");
    var finalString = "";
    for (var s = 0; s < currentState.length; s++) {
        finalString += (shortImportArray[longImportArray.indexOf(currentState[s].className)]);
    }
    return finalString;
    
    // Convers state of buttons into a long string
}

function importString(stringToImport) {
    var toImport = stringToImport.split("");
    var buttons = document.getElementsByTagName("button");
    for (var t = 0; t < toImport.length; t++) {
        buttons[t].className = longImportArray[shortImportArray.indexOf(toImport[t])];
    }
    
    // Converts long string back into colors, then assigns colors to buttons
}

document.getElementById("export").onclick = function() {
    prompt("Your export string is below.  Copy and paste that code and save it somewhere, and import it when you want to see the art again!", exportString());
    // Gives user export string 
}

document.getElementById("import").onclick = function() {
    var userInput = prompt("Paste your export string in the field below.");
    if (userInput.substring(0, 12) == "WROYGBPVVVVV") {
        importString(userInput);
    }
    // Promps for import string
    // Imports only if first 12 characters are valid
    // Faulty imports beyond first 12 don't negatively affect page and throw no errors
}

if (docCookies.hasItem("currentState")) {
    importString(docCookies.getItem("currentState"));
}

else {
    importString(introMessageString);
}

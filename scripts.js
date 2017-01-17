var animationInterval;

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

for (var i = 0; i < 25; i++) {
    var newRow = document.createElement("TR");
    table.appendChild(newRow); // Appends 25 rows to the table
    
    for (var k = 0; k < 50; k++) {
        var newData = document.createElement("TD");
        newRow.appendChild(newData); // Appends 50 <td> tags to each <tr> for a total of 1,250 items
        
        totalButtons += 1;
        var newButton = document.createElement("BUTTON"); 
        newButton.className = "white"; // White is default color; Color is kept track of via class names
        newButton.id = "btn" + totalButtons.toString(); // Gives button unique ID
        
        newData.appendChild(newButton); // Gives a button to every single <td>
    }
}

for (var i = 1; i <= 1250; i++) {
    var btn = document.getElementById("btn" + i.toString()); // Gets id of current button
    btn.onclick = function() {
        currentColorIndex = colorArray.indexOf(this.className); // Gets current color as index (integer)
        this.className = colorArray[(currentColorIndex + 1)%8]; // Cycles through to next color using a modulus cycle
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
    // Resets CSS of top buttons that aren't supposed to look like the rest
}
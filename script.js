const square = document.getElementById("pixelBox");
var squareLength = 16;

//function to create a grid
function generateGrid(size) {
    square.innerHTML = ""; // Clear existing grid when function is called
    for (var h = 0; h < size; h++) {
        for (var w = 0; w < size; w++) {
            const gridSquare = document.createElement("div");
            gridSquare.style.flex = `1 1 calc(100% / ${size})`; // Set flex dynamically
            square.appendChild(gridSquare);
        }
    }
}

//generate a grid at default 16 length when we start
generateGrid(squareLength);

// Turn boxes blue after mouseover
square.addEventListener("mouseover", (event) => {
    if (event.target !== square) {
        event.target.style.backgroundColor = generateAllColors();
    }
});

// Set up button to resize
const buttons = document.getElementById("buttons");
const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize Grid";
buttons.appendChild(resizeBtn);

resizeBtn.addEventListener("click", () => {
    // Prompt the user for a new size
    const newSize = parseInt(prompt("Enter a new grid size:", 16));

    // Validate input
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Please enter a valid positive number below 100.");
        return;
    }

    // Generate new grid
    generateGrid(newSize);
});

//bonus point 1
function generateAllColors() {
    let hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    return hex;
}
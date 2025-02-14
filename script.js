const div = document.getElementById("screen")

function boxColor(box) {
    box.style.backgroundColor = "blue";
}

for (var h = 0; h < 16; h++) {
    for (var w = 0; w < 16; w++) {
        const box = document.createElement("div");
        box.style.width = "8px";
        box.style.height = "8px"; //creates a 8x8 square
        box.style.border = "thin solid black"; //creates a 1px border, resulting in 10px square
        box.style.backgroundColor = "lightgray";
        div.appendChild(box);
    }
}

const pixels = document.querySelectorAll("div");

pixels.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        boxColor(box);
    });
});

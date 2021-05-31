/* 1) create on the dom a random number of boxes (1-10).
2) create them in random colors and random sizes (40px - 200px), and random positions.
3) using setInterval, recrete everything every 5 seconds.
4) do everthing as functions.
5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.
 */

//Define variables:
const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
let buttonCycle = setInterval(createBoxes, 5000);

//Add event listeners when I click on the buttons:
buttonStart.addEventListener('click', function () {
    buttonCycle = setInterval(createBoxes, 5000);
});

buttonStop.addEventListener('click', function () {
    clearInterval(buttonCycle);
});

//Create boxes:
function createBoxes() {
    try {
        let num = randomNumber();
        let container = document.getElementById("container");

        for (let i = 0; i < num; i++) {
            let element = document.createElement("div");
            container.appendChild(element);

            element.style.backgroundColor = randomColor();
            element.style.width = randomSize();
            element.style.height = randomSize();
            element.style.position = randomPosition();
            element.style.border = randomBorder();
            element.style.borderRadius = randomRadius();
            document.body.style.backgroundColor = randomColor();
        }
    } catch (e) {
        console.error();
    }
}

//Functions to get random values:
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}

function randomSize() {
    let size = Math.floor(Math.random() * (200 - 40) + 40);
    return `${size}px`;
}

function randomPosition() {
    const position = ["static", "absolute", "fixed", "relative", "sticky", "initial", "inherit"];
    let randomPosition = Math.floor(Math.random() * position.length);
    return position[randomPosition];
}

function randomBorder() {
    const border = ["none", "hidden", "dashed", "dotted", "double", "groove", "inset", "outset", "ridge", "solid"];
    let randomValue = Math.floor(Math.random() * border.length);
    let num = randomNumber();
    let color = randomColor();
    return `${num}px ${border[randomValue]} ${color}`;
}

function randomRadius() {
    let radius = Math.floor(Math.random() * 100) + 1;
    return `${radius}%`;
}

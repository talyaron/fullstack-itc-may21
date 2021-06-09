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
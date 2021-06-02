function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function randomBorderColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}
function randomHColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

function randomSize() {
    let size = Math.floor(Math.random() * (200 - 40) + 40);
    return size;
}

function randomPositionTop(){
    let top = Math.floor(Math.random() * 10 + Math.random()*100)
    return top;
}

function randomPositionLeft(){
    let left = Math.floor(Math.random() * 50 + Math.random()*90)
    return left;
}

function randomFontsize(){
    let fontsize = Math.floor(Math.random() * 50 + 50)
    return fontsize;
}

function randomSpin(){
    let spin = Math.floor(Math.random() * 8000 + 1000)
    return spin;
}

function randomNumber(){
    let number = Math.floor(Math.random() * 10 + 1);
    return number;
}
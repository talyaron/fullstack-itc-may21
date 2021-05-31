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
    let position = Math.floor(Math.random() * 10 + Math.random()*100)
    return position;
}

function randomPositionLeft(){
    let position = Math.floor(Math.random() * 10 + Math.random()*100)
    return position;
}

function randomFontsize(){
    let fontsize = Math.floor(Math.random() * 100)
    return fontsize;
}

function randomSpin(){
    let spin = Math.floor(Math.random() * 4000)
    return spin;
}
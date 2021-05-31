function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}


function randomSize() {
    let size = Math.floor(Math.random() * (200 - 40) + 40);
    return size;
}

function randomPosition(){
    let position = Math.floor(Math.random() * 10 + 10)
    return position;
}
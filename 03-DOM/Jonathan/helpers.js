function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}


function randomSize() {
    let size = Math.floor(Math.random() * (200 - 40) + 40);
    return size;
}
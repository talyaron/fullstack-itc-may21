function randomPositionTop() {
    let top = Math.floor(Math.random() * 200)
    return top;
}

function randomPositionLeft() {
    let left = Math.floor(Math.random() * 200)
    return left;
}

function randomSize() {
    let size = Math.floor(Math.random() * (200 - 40) + 40);
    return size;
}
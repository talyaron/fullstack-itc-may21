// create a box, and put it in a random place on the screen.
// every time an event on the object (of your chosing happen), move it to a new random place on the screen.
// https://www.w3schools.com/jsref/dom_obj_event.asp


const box = document.querySelector('.box');

box.addEventListener('mouseenter', event => {
    const myBox = event.target;
    try {
        myBox.style.top = boxTop();
        myBox.style.left = boxLeft();
    } catch (e) {
        return e;
    }
});

function boxTop() {
    const boxTop = `${Math.ceil(Math.random() * 90)}vh`;
    return boxTop;
}

function boxLeft() {
    const boxLeft = `${Math.ceil(Math.random() * 90)}vw`;
    return boxLeft;
}
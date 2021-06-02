// create a box, and put it in a random place on the screen.

creatBox();

function creatBox() {
    try {
        const body = document.querySelector(`body`);
        const bodyHtmlCode = `<div class='box' style='${boxPosition()}'><p>Catch me if you can!!</p></div>`;
        body.innerHTML = bodyHtmlCode;
    } catch (e) {
        return e;
    }
}

function boxPosition() {
    const boxTop = `${Math.ceil(Math.random() * 90)}vh`;
    const boxLeft = `${Math.ceil(Math.random() * 90)}vw`;
    return `top:${boxTop};left:${boxLeft};`
}

// every time an event on the object (of your chosing happen), move it to a new random place on the screen.
// https://www.w3schools.com/jsref/dom_obj_event.asp

const box = document.querySelector('.box');

box.addEventListener('mouseenter',event=>{
    creatBox();
})
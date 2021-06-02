const box = document.querySelector('.box');

box.style.top = randomNumber() + "px";
box.style.bottom = randomNumber() + "px";
box.style.left = randomNumber() + "px";
box.style.right = randomNumber() + "px";

box.addEventListener('mouseover', ev => {
    const target = ev.target;

    target.style.top = randomNumber() + "px";
    target.style.bottom = randomNumber() + "px";
    target.style.left = randomNumber() + "px";
    target.style.right = randomNumber() + "px";
})

function randomNumber() {
    return Math.floor(Math.random() * 400) + 1;
}
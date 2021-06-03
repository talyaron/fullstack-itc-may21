const box = document.querySelector('.box');
const marquee = document.querySelector('marquee');

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
    box.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    document.body.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;

})

marquee.addEventListener("dblclick", ev => {
    const target = ev.target;
    target.style.color = "green";
});

function randomNumber() {
    return Math.floor(Math.random() * 500) + 1;
}
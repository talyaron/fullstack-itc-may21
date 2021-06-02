box = document.getElementById('box');

function randomPos() {
    let randomPosition = Math.floor(Math.random() *20+ 60);
    return randomPosition;
}

 function boxChange() {
    let position = randomPos();
    box.style.position = "relative";
    box.style.top = `${position}px`;
    box.style.left = `${position}px`;

}
box.addEventListener("click", boxChange);
window.addEventListener("load", boxChange);
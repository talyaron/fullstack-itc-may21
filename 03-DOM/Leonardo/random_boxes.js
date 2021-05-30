//random number of boxes
let num = Math.floor(Math.random() * 10);
let size = Math.floor(Math.random() * (200-40)+40);

createContainer(num,size);

function createContainer(num,size){
    try {
    let container = document.getElementById("container");
    for (let i = 0 ; i < num ; i++) {
        let element = document.createElement("div");
        container.appendChild(element);

        let color = randomColor();
        element.style.backgroundColor = color;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        }
    } catch (e){
        console.error();
    }
}

function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}
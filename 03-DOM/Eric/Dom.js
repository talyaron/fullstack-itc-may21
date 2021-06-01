//1) create on the dom a     (1-10).
//2) create them in random colors and random sizes (40px - 200px); and random positions
//3) using setInterval, recrete everything every 5 seconds.
//4) do everthing as functions.
//5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.

//change boxes


createbox();

setInterval(function () { location.reload();}, 5000)


function createbox(){
    let number = randomNumber();

    let h1 = document.createElement("H1");
    
    h1.innerText= `The number is: ${number}`;
    document.body.appendChild(h1);

    
    //let h1 = document.body.createElement("h1");
    //h1.innerText= `The number is: ${number}`;
    //document.body.appendChild(h1);


    let container = document.createElement("div");
    container.className = 'container'
    document.body.appendChild(container);


    for (let i=0;i<number; i++){
    let element = document.createElement("div");
    
    container.appendChild(element);
    let color = randomColor();
    let size = randomSize();
    let position = randomPosition();
    element.style.backgroundColor = color;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.position = "relative";
    element.style.left = `${position}px`;
    element.style.top = `${position}px`;
    }
}    

function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

function randomNumber(){
    return Math.floor((Math.random() * 10)+ 1);
}

function randomSize(){
    let size = Math.floor((Math.random() *200)+ 40);
    return size;
}
function randomPosition() {
    let randomPosition = Math.floor(Math.random() *50+ 80);
    return randomPosition;
}












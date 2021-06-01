//1) create on the dom a     (1-10).
//2) create them in random colors and random sizes (40px - 200px);
//3) using setInterval, recrete everything every 5 seconds.
//4) do everthing as functions.
//5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.

//change boxes

setInterval(function(){createbox();;}, 5000);

    


function createbox(){
    let number = randomNumber();
    let container = document.querySelector('.container');
    container.innerHTML="";
    for (let i=0;i<number; i++){
    let element = document.createElement("div");
    console.log(element);
    container.appendChild(element);
    let color = randomColor();
    let size = randomSize();
    element.style.backgroundColor = color;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    }
    


}    


//function randomSize(){}

function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

function randomNumber(){
    return Math.floor((Math.random() * 10)+ 1);
}

function randomSize(){
    return Math.floor((Math.random() * 160)+ 40);
  
}










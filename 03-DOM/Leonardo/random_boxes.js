/* 1) create on the dom a random number of boxes (1-10).
2) create them in random colors and random sizes (40px - 200px), and random positions.
3) using setInterval, recrete everything every 5 seconds.
4) do everthing as functions.
5) don't forget to use try-catch and try to think beforhand on the places the functions can fail.
 */

//Define variables:
const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
let buttonCycle = setInterval(createBoxes, 5000);

//Add event listeners when I click on the buttons:
buttonStart.addEventListener('click', function () {
    buttonCycle = setInterval(createBoxes, 5000);
});

buttonStop.addEventListener('click', function () {
    clearInterval(buttonCycle);
});

//Create boxes:
function createBoxes() {
    try {
        let num = randomNumber();
        let container = document.getElementById("container");

        /* If I leave the following line uncommented it will remove the old boxes and replace them. If it´s commented it will continue adding boxes:
        
        container.innerHTML = ''; */

        for (let i = 0; i < num; i++) {
            let element = document.createElement("div");
            container.appendChild(element);

            element.style.backgroundColor = randomColor();
            element.style.width = randomSize();
            element.style.height = randomSize();
            element.style.position = randomPosition();
            element.style.border = randomBorder();
            element.style.borderRadius = randomRadius();
        }
        document.body.style.backgroundColor = randomColor();
    } catch (e) {
        console.error();
    }
}

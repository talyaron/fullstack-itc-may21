
function randomsNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function randomsColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
}
function randomsSize() {
  return Math.floor(Math.random() * 160 + 40);
}

function boxGenerator() {

    try {
        let numbers = randomsNumber();
        let container = document.getElementById("container");
        if (numbers === 11) throw new Error('')
      
        container.innerHTML = "";
      
        let accountant = document.querySelector(".accountant");
        accountant.innerHTML = ` Accountant: ${numbers}`;
        for (let i = 0; i < numbers; i++) {
          let elements = document.createElement("DIV");
          container.appendChild(elements);
          let colors = randomsColor();
          let sizes = randomsSize();
          elements.style.backgroundColor = colors;
          elements.style.width = `${sizes}px`;
          elements.style.height = `${sizes}px`;
        }   
    } catch (error) {
        console.log(error);
    }

}

setInterval(function () {
  boxGenerator();
}, 5000);

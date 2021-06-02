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

// function randomsPosition() {
//     let randomPosition = Math.floor(Math.random() *400+ 80);        //YS: Why did you leave this commented?
//     return randomPosition;
// }

function boxGenerator() {
  try {
    let numbers = randomsNumber();
    let container = document.getElementById("container");   /*YS: The error might come from here, 
                                                              if #container is not found (might happen because
                                                              the JS loads faster than the HTML, due to a humman error (
                                                              for example container is written incorrectly) or other reasons*/
    if (numbers === 11) throw new Error("");

    container.innerHTML = "";   //YS: Try to throw an error after since we know that container might not exist so container.innerHTML might cause an error. if (!container) throw new Error

    let accountant = document.querySelector(".accountant"); //YS: Same here, accountant might not be found. Throw an error after this line if(!accountant) throw new Error('Accounatnt not found)
    accountant.innerHTML = ` Accountant: ${numbers}`; //YS: You can throw an error after this since we know that accountant might not exist so accountant.innerHTML might cause an error
    for (let i = 0; i < numbers; i++) {
      let elements = document.createElement("DIV");
      container.appendChild(elements);
      let colors = randomsColor();
      let sizes = randomsSize();
    //   let positions = randomsPositions();
      elements.style.backgroundColor = colors;
      elements.style.width = `${sizes}px`;
      elements.style.height = `${sizes}px`;
    //   elements.style.positions = "relative";
    //   element.style.left = `${positions}px`;
    //   element.style.top = `${positions}px`;
    }
  } catch (error) {
    console.log(error);  //YS: Try to be more explicit with the error. In this case the error would be something like 'Element not found'
  }
}

setInterval(function () {
  boxGenerator();
}, 5000);

/*
create a two-page app. in the first page, you will insert colors (using input: color), to a list of colors on the DOM. The user can delete a list item. If the user clicks on the color on the first page, she will redirect to a second page, where she will see a grid of squares with the specific color. https://classroom.google.com/c/MjgxODc1Mjg4ODE5/a/MzA1NjIwMDk5NzY0/details
*/

    //Classes:

//Item class:
class Color {
  id: string;
  color: string;
  constructor(color: string) {
    this.id = Math.random().toString(16).slice(2);
    this.color = color;
  }
}
//Array class:
class ColorsList {
  colorsList: Array<Color>;

  constructor() {
    this.colorsList = [];
  }

  add(color: Color): void {
    this.colorsList.unshift(color);
    console.dir(this.colorsList);
    localStorage.setItem("color", JSON.stringify(this.colorsList));
  }
  render(): void {
    const colorsRoot: HTMLElement = document.querySelector(".color-root");
    const chosenColor = this.colorsList[0].color;
    console.log(chosenColor);

    let newColor: string = "";
    this.colorsList.forEach((color) => {
      newColor += `
            <div class="color-wrapper">
            
                <div onclick="handlePageChange(event)" class="color-wrapper__color" id="${color.id}" style="background-color: ${chosenColor}"></div>
                
                <svg class="delete" onclick="handleDelete(${color.id})" xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </div>
            `;
      colorsRoot.insertAdjacentHTML("beforeend", newColor);
    });
  }
  remove(chosenId: string): void {
    const indexToRemove = this.colorsList.findIndex(
      (element) => element.id === chosenId
    );
    this.colorsList.splice(indexToRemove, 1);
    this.render();
  }
}

//Instance of the array:

const myColors = new ColorsList();

//Event handler functions:

function handleSubmit(event: any): void {
  event.preventDefault();

  const color: string = event.target[0].value;
  const newcolor = new Color(color);
  myColors.add(newcolor);
  event.target.reset();

  myColors.render();
}

function handleDelete(id: string): void {
  myColors.remove(id);
  console.dir(myColors);
}

//Change to page 2, with Local storage:
function handlePageChange(event): void {
  const colorToSend: FormDataEntryValue = event.target.style.backgroundColor;
  console.log(colorToSend);
  localStorage.setItem("Chosen color", JSON.stringify(colorToSend));
  window.location.href = "../page2/page2.html";
}

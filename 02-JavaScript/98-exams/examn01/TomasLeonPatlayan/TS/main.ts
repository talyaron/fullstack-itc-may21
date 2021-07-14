let getLocal = JSON.parse(localStorage.getItem("localSave"));
const show: HTMLElement = document.querySelector(".show");
const getColor: HTMLElement = document.querySelector("getColor");
class ArrayUno {
  color: string;
  id: string;
  constructor(color: string) {
    this.color = color;

    this.id = Math.random().toString(16).slice(2);
  }
}

class ArrayDos {
  dentroArr: Array<ArrayUno> = [];

  add(add: ArrayUno): void {
    this.dentroArr.push(add);
    this.localStorage(this.dentroArr);
    this.render();
  }

  localStorage(save) {
    localStorage.setItem("localSave", JSON.stringify(save));
  }

  addLocal(add: Array<ArrayUno>) {
    add.forEach((elements) => {
      const arrs = new ArrayUno(elements.color);

      this.dentroArr.push(arrs);
    });
  }

  deleteColor(id: string) {
    this.dentroArr = this.dentroArr.filter((element) => element.id !== id);
    this.localStorage(this.dentroArr);
    this.render();
  }

  render(arr?: Array<ArrayUno>) {
    const arrRender = arr ? arr : this.dentroArr;

    let html: string = "";

    arrRender.forEach((elements) => {
      html += `<div class=" container colors" style="background-color: ${elements.color}">
      <button class="btn btn-light"onclick='handleDelete("${elements.id}")'><i class="fas fa-trash"></i></button>
      <button class = "btn btn-warning getColors" onclick='redirecColor("${elements.id}")'>Get Color</button>
            </div>`;
    });

    show.innerHTML = html;
  }
}

const arrayDos = new ArrayDos();

window.onload = function render() {
  let html: string = "";

  getLocal.forEach((elements) => {
    html += `<div class="container colors" style="background-color: ${elements.color}">
    
 <button class="btn btn-light"onclick='handleDelete("${elements.id}")'><i class="fas fa-trash"></i></button>
 <button class = "btn btn-warning getColors" onclick='redirecColor("${elements.id}")'>Get Color</button>
        
            </div>`;
  });

  show.innerHTML = html;
};

if (getLocal !== null) {
  arrayDos.addLocal(getLocal);
}
const handleSubmit = (event) => {
  event.preventDefault(event);
  try {
    const color = event.target.elements.color.value;

    if (color === "") throw Error("Put a Color");

    const arrayUno = new ArrayUno(color);
    arrayDos.add(arrayUno);
  } catch (error) {}
};

const handleDelete = (id: string) => {
  arrayDos.deleteColor(id);
};

const redirecColor = (id: string) => {
  localStorage.setItem("saveColors", id);

  window.location.href = `second.html?id=${id}`;
};

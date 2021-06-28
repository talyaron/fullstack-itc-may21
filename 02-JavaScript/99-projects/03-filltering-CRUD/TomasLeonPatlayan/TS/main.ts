class IdsGenerator {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Ids {
  id: Array<IdsGenerator> = [];

  add(add: IdsGenerator): void {
    this.id.push(add);
    this.render();
  }

  render() {
    const show: HTMLElement = document.querySelector(".show");
    let html: string = "";
    this.id.forEach((element) => {
      html += `<div class = 'show-id'n onclick="btnDelete(event)"><h1> ${element.name}</h1>
      <button class = 'delete'>X</button></div>`;
    });

    show.innerHTML = html;
  }

  deleteIds(ele) {
    if (ele.classList.contains("delete")) {
      ele.parentElement.remove();
    }
  }
}

const ids = new Ids();

const handleSubmit = (event) => {
  event.preventDefault();

  const name: string = event.target.elements.name.value;

  const generator = new IdsGenerator(name);

  console.log(generator);
  ids.add(generator);
  event.target.reset();
};

const btnDelete = (event) => {
  ids.deleteIds(event.target);
};

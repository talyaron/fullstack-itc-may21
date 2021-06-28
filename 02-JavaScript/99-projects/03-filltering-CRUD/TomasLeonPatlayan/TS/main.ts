///NOTA PARA MANANA VER LOS DE CREAR UN RANDOM ID Y HACER LO DE INDEX PARA FILTAR Y BORRAR
//PONER BIEN LOS NOMBRES LUEGO DE PASAR LA SECION DE PPRUEBA

// const filterOption:HTMLElement = document.querySelector('.filter-todo');
const show: HTMLElement = document.querySelector(".show");
// filterOption.addEventListener('click', filterTodo)

interface PersonaInterface {
  name: string;
}

class IdsGenerator {
  name: string;
  ident: string;
  constructor(name: string) {
    this.name = name;
    this.ident = Math.random().toString(16).slice(2);
  }
}

class Ids {
  id: Array<IdsGenerator> = [];

  add(add: IdsGenerator): void {
    this.id.push(add);
    this.render();
  }
  addList(addlist: Array<IdsGenerator | PersonaInterface>) {
    addlist.forEach((element) => {
      const pers = new IdsGenerator(element.name);
      this.id.push(pers);
    });

    this.render()
  }

  deleteItem(ident: string) {
    this.id = this.id.filter((element) => element.ident !== ident);
    this.render();
  }

  render() {
    const show: HTMLElement = document.querySelector(".show");
    let html: string = "";

    console.log(this.id);

    this.id.forEach((element) => {
      html += `<div class = 'show-id' ><h1 contenteditable="true"> ${element.name}</h1>
      <button class = 'delete' onclick='handleDelete("${element.ident}")'>X</button>
     
      </div>`;
    });

    show.innerHTML = html;
  }
}

const ids = new Ids();
ids.addList(peronas)
const handleSubmit = (event) => {
  event.preventDefault();

  const name: string = event.target.elements.name.value;


  const generator = new IdsGenerator(name);
  console.log(generator);
  ids.add(generator);
  event.target.reset();
};

const handleDelete = (ident: string) => {
  ids.deleteItem(ident);
};

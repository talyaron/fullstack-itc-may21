///NOTA PARA MANANA VER LOS DE CREAR UN RANDOM ID Y HACER LO DE INDEX PARA FILTAR Y BORRAR
//PONER BIEN LOS NOMBRES LUEGO DE PASAR LA SECION DE PPRUEBA

// const filterOption:HTMLElement = document.querySelector('.filter-todo');
const show: HTMLElement = document.querySelector(".show");
// filterOption.addEventListener('click', filterTodo)

interface PersonaInterface {
  name: string;
  imageUrl: string;
  pokeType:string;
}

class IdsGenerator {
  name: string;
  ident: string;
  imageUrl: string;
  pokeType:string;
  constructor(name: string, imageUrl: string,pokeType:string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.pokeType =pokeType;
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
      const pers = new IdsGenerator(element.name, element.imageUrl, element.pokeType);
      this.id.push(pers);
    });

    this.render();
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
      <img src="${element.imageUrl}" alt="">
      <p>${element.pokeType}</p>
      <button class = 'delete' onclick='handleDelete("${element.ident}")'>X</button>
     
      </div>`;
    });

    show.innerHTML = html;
  }
}

const ids = new Ids();
ids.addList(peronas);
const handleSubmit = (event) => {
  event.preventDefault();

  const name: string = event.target.elements.name.value;
  const imageUrl: string = event.target.elements.imageUrl.value;
  const pokeType:string = event.target.elements.pokeType.value

  const generator = new IdsGenerator(name, imageUrl, pokeType);
  console.log(generator);
  ids.add(generator);
  event.target.reset();
};

const handleDelete = (ident: string) => {
  ids.deleteItem(ident);
};

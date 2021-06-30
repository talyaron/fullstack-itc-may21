///NOTA PARA MANANA VER LOS DE CREAR UN RANDOM ID Y HACER LO DE INDEX PARA FILTAR Y BORRAR
//PONER BIEN LOS NOMBRES LUEGO DE PASAR LA SECION DE PPRUEBA

//  const filterOption:HTMLElement = document.querySelector('.filter-todo');
let updateElement;
let filterSearch;
const show: HTMLElement = document.querySelector(".show");

const select: any = document.querySelector(".filter-todo");

 const search = document.getElementById('search');

// const inputName = <HTMLInputElement>document.getElementById("name");
// const inputImageUrl = <HTMLInputElement>document.getElementById("imageUrl");
// const inputPokeType = <HTMLInputElement>document.getElementById("pokeType");

// let update:Array<IdsGenerator> =[];

// filterOption.addEventListener('click', filterTodo)

interface PersonaInterface {
  name: string;
  imageUrl: string;
  pokeType: string;
}

class IdsGenerator {
  name: string;
  ident: string;
  imageUrl: string;
  pokeType: string;
  constructor(name: string, imageUrl: string, pokeType: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.pokeType = pokeType;
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
      const pers = new IdsGenerator(
        element.name,
        element.imageUrl,
        element.pokeType
      );
      this.id.push(pers);
    });

    this.render();
  }

  bringInfo(ident: string) {
    updateElement = ident;

    console.log(ident);
  }

  editElement(event) {
    const name: string = event.target.elements.name.value;
    const imageUrl: string = event.target.elements.imageUrl.value;
    const pokeType: string = event.target.elements.pokeType.value;

    const edit = this.id.find((element) => element.ident === updateElement);

    edit.name = name;
    edit.imageUrl = imageUrl;
    edit.pokeType = pokeType;
    this.bringInfo(event);

    this.render()
  }

  deleteItem(ident: string) {
    this.id = this.id.filter((element) => element.ident !== ident);
    this.render();
  }

  searchItem(event){
   filterSearch = event.target.value;

  this.searchRegs(filterSearch);
this.render()
console.log(filterSearch);

 }

 searchRegs(inputSearch:string){
  const regExp: string = `^${inputSearch}`
  const searchTermReg: RegExp = new RegExp(regExp, 'i');
this.id = this.id.filter((element) =>searchTermReg.test( element.name));

  // this.render()
 }

  fiterItem() {
    const selectValue = String(select.value);

    if (selectValue === "fire") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }
    if (selectValue === "bug") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }

    if (selectValue === "grass") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }
    if (selectValue === "water") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }
    if (selectValue === "flying") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }
    if (selectValue === "normal") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }
    if (selectValue === "electric") {
      this.id = this.id.filter((element) => element.pokeType === selectValue);
      this.render();
    }
  }


    render() {
    const show: HTMLElement = document.querySelector(".show");
    let html: string = "";

    console.log(this.id);

    this.id.forEach((element) => {
      html += `
<div class = "poke">
      <div class= "poke-image">
      <img src="${element.imageUrl}" alt="">
      </div>
      <div class ="poke-name" ><h2 contenteditable="true"> ${element.name}</h2>  </div>  
     <div class="poke-pokeType"> <h4>${element.pokeType}</h4></div>
      <button class ="btn btn-danger"  'delete' onclick='handleDelete("${element.ident}")'>X</button>
<button type="button" class="btn btn-primary itemInfo" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" onclick='editItem("${element.ident}")' checked>Edit</button>
     </div> `;
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
  const pokeType: string = event.target.elements.pokeType.value;

  const generator = new IdsGenerator(name, imageUrl, pokeType);
  console.log(generator);
  ids.add(generator);
  event.target.reset();
};

const handleDelete = (ident: string) => {
  ids.deleteItem(ident);
};

const handleFilter = () => {
  ids.fiterItem();
};

const editItem = (ident: string) => {
  ids.bringInfo(ident);
};

const handleEdit = (event) => {
  event.preventDefault();
  ids.editElement(event);

};

const searchBar = (event)=> {
  ids.searchItem(event)
}


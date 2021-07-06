///NOTA PARA MANANA VER LOS DE CREAR UN RANDOM ID Y HACER LO DE INDEX PARA FILTAR Y BORRAR
//PONER BIEN LOS NOMBRES LUEGO DE PASAR LA SECION DE PPRUEBA

//  const filterOption:HTMLElement = document.querySelector('.filter-todo');
let updateElement;
let filterSearch;
const show: HTMLElement = document.querySelector(".show");

const select: any = document.querySelector(".filter-todo");

const search = document.getElementById("search");

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

    console.log(ident); //YS: console.log
  }

  editElement(event) {
    try {
      const name: string = event.target.elements.name.value;
      const imageUrl: string = event.target.elements.imageUrl.value;
      const pokeType: string = event.target.elements.pokeType.value;
      if (name === "") throw Error("Put a Pokemon"); //YS: Good
      if (imageUrl === "") throw Error("Put a Url Image");
      if (
        pokeType !== "fire" &&
        pokeType !== "water" &&
        pokeType !== "bug" &&
        pokeType !== "grass" &&
        pokeType !== "normal" &&
        pokeType !== "flying" &&
        pokeType !== "electric"
      )
        throw Error(
          "Please in the Type of Pokemon put fire, water,bug,grass,normal,flying or electric"
        );
      const edit = this.id.find((element) => element.ident === updateElement); //YS: Nice!

      edit.name = name;
      edit.imageUrl = imageUrl;
      edit.pokeType = pokeType;
      this.bringInfo(event);

      this.render();
      //YS: You couldve added a line here to close your modal after clicking the button.
    } catch (error) {
      alert(error);
    }
  }

  deleteItem(ident: string) {
    this.id = this.id.filter((element) => element.ident !== ident);
    this.render();
  }

  searchItem(event) {
    filterSearch = event.target.value;

    this.searchRegs(filterSearch);
    this.render();
    console.log(filterSearch); //YS: Dont leave console.logs
  }

  searchRegs(inputSearch: string) {
    const regExp: string = inputSearch;
    const searchTermReg: RegExp = new RegExp(regExp, "gmi");
    this.id = this.id.filter((element) => searchTermReg.test(element.name));

    // this.render()
  }

  fiterItem(pokeType: string) {
    //YS: Here you could have passed the selectValue as a parameter and had 1 function instead of repeating the same function 7 times! DRY

    try {
      const arrPoke = this.id.filter( //COPIA
        (element) => element.pokeType === pokeType
      );
      this.render(arrPoke);
    } catch (error) {}
  }

  render(arr?: Array<IdsGenerator>) {
    //YS: In this case you couldve passed a list of a parameter, to render a different list depending on what you do
   // let myArr;
    const arrayRender = arr ? arr : this.id;
    //  if(arr){
    //   myArr  = arr;
    //  }else{
    //    myArr = this.id ;
    //  }
    const show: HTMLElement = document.querySelector(".show");
    let html: string = "";

    console.log(this.id); //YS: dont leave console logs

    arrayRender.forEach((element) => {
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
  try {
    const name: string = event.target.elements.name.value;
    const imageUrl: string = event.target.elements.imageUrl.value;
    const pokeType: string = event.target.elements.pokeType.value;
    if (name === "") throw Error("Put a Pokemon");
    if (imageUrl === "") throw Error("Put a Url Image");
    if (
      pokeType !== "fire" &&
      pokeType !== "water" &&
      pokeType !== "bug" &&
      pokeType !== "grass" &&
      pokeType !== "normal" &&
      pokeType !== "flying" &&
      pokeType !== "electric"
    )
      throw Error(
        "Please in the Type of Pokemon put fire, water,bug,grass,normal,flying or electric"
      );
    const generator = new IdsGenerator(name, imageUrl, pokeType);
    console.log(generator); //YS: Dont leave console.logs
    ids.add(generator);
  } catch (error) {
    alert(error);
  }

  event.target.reset();
};

const handleDelete = (ident: string) => {
  ids.deleteItem(ident);
};

const handleFilter = (event) => {
  console.log();
  const pokeType = event.target.value;
  ids.fiterItem(pokeType);
};

const editItem = (ident: string) => {
  ids.bringInfo(ident);
};

const handleEdit = (event) => {
  event.preventDefault();
  ids.editElement(event);
  event.target.reset();
};

const searchBar = (event) => {
  ids.searchItem(event);
};

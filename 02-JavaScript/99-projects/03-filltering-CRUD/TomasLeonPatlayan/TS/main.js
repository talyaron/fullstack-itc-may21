var updateElement;
var filterSearch;
var show = document.querySelector(".show");
var select = document.querySelector(".filter-todo");
var search = document.getElementById("search");
var getLocal = JSON.parse(localStorage.getItem("savePokemon"));
console.log(getLocal);
// const inputName = <HTMLInputElement>document.getElementById("name");
// const inputImageUrl = <HTMLInputElement>document.getElementById("imageUrl");
// const inputPokeType = <HTMLInputElement>document.getElementById("pokeType");
// let update:Array<IdsGenerator> =[];
// filterOption.addEventListener('click', filterTodo)
// interface PersonaInterface {
//   name: string;
//   imageUrl: string;
//   pokeType: string;
// }
var IdsGenerator = /** @class */ (function () {
    function IdsGenerator(name, imageUrl, pokeType) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.pokeType = pokeType;
        this.ident = Math.random().toString(16).slice(2);
    }
    return IdsGenerator;
}());
var Ids = /** @class */ (function () {
    function Ids() {
        this.id = [];
    }
    Ids.prototype.add = function (add) {
        this.id.push(add);
        localStorage.setItem("savePokemon", JSON.stringify(this.id));
        this.render();
    };
    //? CON LOCAL STRAGE
    Ids.prototype.addSavePoke = function (add) {
        var _this = this;
        add.forEach(function (elements) {
            var poke = new IdsGenerator(elements.name, elements.imageUrl, elements.pokeType);
            _this.id.push(poke);
            console.log(poke);
        });
    };
    //!CON DB ESTATICA
    // addList(addlist: Array<IdsGenerator | PersonaInterface>) {
    //   addlist.forEach((element) => {
    //     const pers = new IdsGenerator(
    //       element.name,
    //       element.imageUrl,
    //       element.pokeType
    //     );
    //     this.id.push(pers);
    //   });
    //   this.render();
    // }
    Ids.prototype.bringInfo = function (ident) {
        updateElement = ident;
        console.log(ident); //YS: console.log
    };
    Ids.prototype.editElement = function (event) {
        try {
            var name_1 = event.target.elements.name.value;
            var imageUrl = event.target.elements.imageUrl.value;
            var pokeType = event.target.elements.pokeType.value;
            if (name_1 === "")
                throw Error("Put a Pokemon"); //YS: Good
            if (imageUrl === "")
                throw Error("Put a Url Image");
            if (pokeType !== "fire" &&
                pokeType !== "water" &&
                pokeType !== "bug" &&
                pokeType !== "grass" &&
                pokeType !== "normal" &&
                pokeType !== "flying" &&
                pokeType !== "electric")
                throw Error("Please in the Type of Pokemon put fire, water,bug,grass,normal,flying or electric");
            var edit = this.id.find(function (element) { return element.ident === updateElement; }); //YS: Nice!
            edit.name = name_1;
            edit.imageUrl = imageUrl;
            edit.pokeType = pokeType;
            this.bringInfo(event);
            localStorage.setItem("savePokemon", JSON.stringify(this.id));
            this.render();
            //YS: You couldve added a line here to close your modal after clicking the button.
        }
        catch (error) {
            alert(error);
        }
    };
    Ids.prototype.deleteItem = function (ident) {
        this.id = this.id.filter(function (element) { return element.ident !== ident; });
        this.render();
    };
    Ids.prototype.searchItem = function (event) {
        filterSearch = event.target.value;
        this.searchRegs(filterSearch);
        //! this.render();
        console.log(filterSearch); //YS: Dont leave console.logs
    };
    Ids.prototype.searchRegs = function (inputSearch) {
        var regExp = inputSearch;
        var searchTermReg = new RegExp(regExp, "gmi");
        var searchPoke = this.id.filter(function (element) {
            return searchTermReg.test(element.name);
        });
        this.render(searchPoke);
    };
    Ids.prototype.fiterItem = function (pokeType) {
        //YS: Here you could have passed the selectValue as a parameter and had 1 function instead of repeating the same function 7 times! DRY
        try {
            var arrPoke = this.id.filter(
            //COPIA
            function (element) { return element.pokeType === pokeType; });
            this.render(arrPoke);
        }
        catch (error) { }
    };
    Ids.prototype.render = function (arr) {
        //YS: In this case you couldve passed a list of a parameter, to render a different list depending on what you do
        // let myArr;
        var arrayRender = arr ? arr : this.id;
        var show = document.querySelector(".show");
        var html = "";
        console.log(this.id); //YS: dont leave console logs
        arrayRender.forEach(function (element) {
            html += "\n<div class = \"poke\">\n      <div class= \"poke-image\">\n      <img src=\"" + element.imageUrl + "\" alt=\"\">\n      </div>\n      <div class =\"poke-name\" ><h2 contenteditable=\"true\"> " + element.name + "</h2>  </div>  \n     <div class=\"poke-pokeType\"> <h4>" + element.pokeType + "</h4></div>\n      <button class =\"btn btn-danger\"  'delete' onclick='handleDelete(\"" + element.ident + "\")'>X</button>\n<button type=\"button\" class=\"btn btn-primary itemInfo\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" onclick='editItem(\"" + element.ident + "\")' checked>Edit</button>\n<button class =\"btn btn-success\"   onclick='handleInfo(\"" + element.ident + "\")'>Info</button>\n     </div> ";
        });
        show.innerHTML = html;
    };
    return Ids;
}());
var ids = new Ids();
window.onload = function render() {
    var show = document.querySelector(".show");
    var html = "";
    getLocal.forEach(function (element) {
        html += "\n<div class = \"poke\">\n    <div class= \"poke-image\">\n    <img src=\"" + element.imageUrl + "\" alt=\"\">\n    </div>\n    <div class =\"poke-name\" ><h2 contenteditable=\"true\"> " + element.name + "</h2>  </div>  \n   <div class=\"poke-pokeType\"> <h4>" + element.pokeType + "</h4></div>\n    <button class =\"btn btn-danger\"  'delete' onclick='handleDelete(\"" + element.ident + "\")'>X</button>\n<button type=\"button\" class=\"btn btn-primary itemInfo\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" onclick='editItem(\"" + element.ident + "\")' checked>Edit</button>\n<button class =\"btn btn-success\"   onclick='handleInfo(\"" + element.ident + "\")'>Info</button>\n   </div> ";
    });
    show.innerHTML = html;
};
if (getLocal !== null) {
    ids.addSavePoke(getLocal);
}
// !ids.addList(peronas);
var handleSubmit = function (event) {
    event.preventDefault();
    try {
        var name_2 = event.target.elements.name.value;
        var imageUrl = event.target.elements.imageUrl.value;
        var pokeType = event.target.elements.pokeType.value;
        if (name_2 === "")
            throw Error("Put a Pokemon");
        if (imageUrl === "")
            throw Error("Put a Url Image");
        if (pokeType !== "fire" &&
            pokeType !== "water" &&
            pokeType !== "bug" &&
            pokeType !== "grass" &&
            pokeType !== "normal" &&
            pokeType !== "flying" &&
            pokeType !== "electric")
            throw Error("Please in the Type of Pokemon put fire, water,bug,grass,normal,flying or electric");
        var generator = new IdsGenerator(name_2, imageUrl, pokeType);
        console.log(generator); //YS: Dont leave console.logs
        ids.add(generator);
    }
    catch (error) {
        alert(error);
    }
    event.target.reset();
};
var handleDelete = function (ident) {
    ids.deleteItem(ident);
};
var handleFilter = function (event) {
    console.log();
    var pokeType = event.target.value;
    ids.fiterItem(pokeType);
};
var editItem = function (ident) {
    ids.bringInfo(ident);
};
var handleEdit = function (event) {
    event.preventDefault();
    ids.editElement(event);
    event.target.reset();
};
var searchBar = function (event) {
    ids.searchItem(event);
};
var handleInfo = function (ident) {
    localStorage.setItem("pokeID", ident);
    window.location.href = "info.html?id=" + ident;
};

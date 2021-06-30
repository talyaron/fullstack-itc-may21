///NOTA PARA MANANA VER LOS DE CREAR UN RANDOM ID Y HACER LO DE INDEX PARA FILTAR Y BORRAR
//PONER BIEN LOS NOMBRES LUEGO DE PASAR LA SECION DE PPRUEBA
//  const filterOption:HTMLElement = document.querySelector('.filter-todo');
var updateElement;
var filterSearch;
var show = document.querySelector(".show");
var select = document.querySelector(".filter-todo");
var search = document.getElementById('search');
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
        this.render();
    };
    Ids.prototype.addList = function (addlist) {
        var _this = this;
        addlist.forEach(function (element) {
            var pers = new IdsGenerator(element.name, element.imageUrl, element.pokeType);
            _this.id.push(pers);
        });
        this.render();
    };
    Ids.prototype.bringInfo = function (ident) {
        updateElement = ident;
        console.log(ident);
    };
    Ids.prototype.editElement = function (event) {
        try {
            var name_1 = event.target.elements.name.value;
            var imageUrl = event.target.elements.imageUrl.value;
            var pokeType = event.target.elements.pokeType.value;
            if (name_1 === '')
                throw Error("Put a Pokemon");
            if (imageUrl === '')
                throw Error('Put a Url Image');
            if (pokeType !== "fire" && pokeType !== "water" && pokeType !== "bug" && pokeType !== "grass" && pokeType !== "normal" && pokeType !== "flying" && pokeType !== "electric")
                throw Error("Please in the Type of Pokemon put fire, water,bug,grass,normal,flying or electric");
            var edit = this.id.find(function (element) { return element.ident === updateElement; });
            edit.name = name_1;
            edit.imageUrl = imageUrl;
            edit.pokeType = pokeType;
            this.bringInfo(event);
            this.render();
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
        this.render();
        console.log(filterSearch);
    };
    Ids.prototype.searchRegs = function (inputSearch) {
        var regExp = "^" + inputSearch;
        var searchTermReg = new RegExp(regExp, 'i');
        this.id = this.id.filter(function (element) { return searchTermReg.test(element.name); });
        // this.render()
    };
    Ids.prototype.fiterItem = function () {
        var selectValue = String(select.value);
        try {
            if (selectValue === "fire") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
            else if (selectValue === "bug") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
            else if (selectValue === "grass") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
            else if (selectValue === "water") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
            else if (selectValue === "flying") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
            else if (selectValue === "normal") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
            else if (selectValue === "electric") {
                this.id = this.id.filter(function (element) { return element.pokeType === selectValue; });
                this.render();
            }
        }
        catch (error) {
        }
    };
    Ids.prototype.render = function () {
        var show = document.querySelector(".show");
        var html = "";
        console.log(this.id);
        this.id.forEach(function (element) {
            html += "\n<div class = \"poke\">\n      <div class= \"poke-image\">\n      <img src=\"" + element.imageUrl + "\" alt=\"\">\n      </div>\n      <div class =\"poke-name\" ><h2 contenteditable=\"true\"> " + element.name + "</h2>  </div>  \n     <div class=\"poke-pokeType\"> <h4>" + element.pokeType + "</h4></div>\n      <button class =\"btn btn-danger\"  'delete' onclick='handleDelete(\"" + element.ident + "\")'>X</button>\n<button type=\"button\" class=\"btn btn-primary itemInfo\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" onclick='editItem(\"" + element.ident + "\")' checked>Edit</button>\n     </div> ";
        });
        show.innerHTML = html;
    };
    return Ids;
}());
var ids = new Ids();
ids.addList(peronas);
var handleSubmit = function (event) {
    event.preventDefault();
    try {
        var name_2 = event.target.elements.name.value;
        var imageUrl = event.target.elements.imageUrl.value;
        var pokeType = event.target.elements.pokeType.value;
        if (name_2 === '')
            throw Error("Put a Pokemon");
        if (imageUrl === '')
            throw Error('Put a Url Image');
        if (pokeType !== "fire" && pokeType !== "water" && pokeType !== "bug" && pokeType !== "grass" && pokeType !== "normal" && pokeType !== "flying" && pokeType !== "electric")
            throw Error("Please in the Type of Pokemon put fire, water,bug,grass,normal,flying or electric");
        var generator = new IdsGenerator(name_2, imageUrl, pokeType);
        console.log(generator);
        ids.add(generator);
    }
    catch (error) {
    }
    event.target.reset();
};
var handleDelete = function (ident) {
    ids.deleteItem(ident);
};
var handleFilter = function () {
    ids.fiterItem();
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

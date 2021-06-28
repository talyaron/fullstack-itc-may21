///NOTA PARA MANANA VER LOS DE CREAR UN RANDOM ID Y HACER LO DE INDEX PARA FILTAR Y BORRAR
//PONER BIEN LOS NOMBRES LUEGO DE PASAR LA SECION DE PPRUEBA
// const filterOption:HTMLElement = document.querySelector('.filter-todo');
var show = document.querySelector(".show");
var IdsGenerator = /** @class */ (function () {
    function IdsGenerator(name) {
        this.name = name;
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
            var pers = new IdsGenerator(element.name);
            _this.id.push(pers);
        });
        this.render();
    };
    Ids.prototype.deleteItem = function (ident) {
        this.id = this.id.filter(function (element) { return element.ident !== ident; });
        this.render();
    };
    Ids.prototype.render = function () {
        var show = document.querySelector(".show");
        var html = "";
        console.log(this.id);
        this.id.forEach(function (element) {
            html += "<div class = 'show-id' ><h1 contenteditable=\"true\"> " + element.name + "</h1>\n      <button class = 'delete' onclick='handleDelete(\"" + element.ident + "\")'>X</button>\n     \n      </div>";
        });
        show.innerHTML = html;
    };
    return Ids;
}());
var ids = new Ids();
ids.addList(peronas);
var handleSubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var generator = new IdsGenerator(name);
    console.log(generator);
    ids.add(generator);
    event.target.reset();
};
var handleDelete = function (ident) {
    ids.deleteItem(ident);
};

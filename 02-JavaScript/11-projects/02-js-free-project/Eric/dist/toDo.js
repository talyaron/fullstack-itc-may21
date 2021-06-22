var Item = /** @class */ (function () {
    function Item(task) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.task = task;
    }
    return Item;
}());
var Items = /** @class */ (function () {
    function Items() {
        this.allItems = [];
    }
    // le pasas el string del input
    Items.prototype.addItem = function (task) {
        //instancias un nueva clase que te va a "devolver" el id con el task que le pasaste
        var newItem = new Item(task);
        //newItem tiene ya las dos variables, id y task
        this.allItems.push(newItem);
        //le pasamos directo el objeto cada vez que se agrega una instancia
        localStorage.setItem('item', JSON.stringify(this.allItems));
    };
    return Items;
}());
var items = new Items();
var doingSubmit = function (ev) {
    ev.preventDefault();
    var task = ev.target.elements.task.value;
    //llamas esa funcion, le pasas el argumento task para que se agregue en un objecto
    items.addItem(task);
};
function redirect() {
    window.location.href = 'ItemsList.html';
}
localStorage.clear();

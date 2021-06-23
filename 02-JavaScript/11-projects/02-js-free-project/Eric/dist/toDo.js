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
    Items.prototype.addItem = function (task) {
        var newItem = new Item(task);
        this.allItems.push(newItem);
        localStorage.setItem('item', JSON.stringify(this.allItems));
    };
    return Items;
}());
var items = new Items();
var doingSubmit = function (ev) {
    ev.preventDefault();
    var task = ev.target.elements.task.value;
    items.addItem(task);
};
function redirect() {
    window.location.href = 'ItemsList.html';
}
localStorage.clear();

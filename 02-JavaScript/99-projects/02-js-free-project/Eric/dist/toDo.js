var Item = /** @class */ (function () {
    function Item(task) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.task = task;
    }
    return Item;
}());
var Items = /** @class */ (function () {
    function Items() {
        this.allItems = []; //YS: Here instead of having an empty array you had to get the array from localstorage: <JSON.parse(localStorage.getItem('item'));>
    }
    Items.prototype.addItem = function (task) {
        try {
            var newItem = new Item(task);
            this.allItems.push(newItem);
            if (!this.allItems)
                throw new Error('The array where you want to push the task it doesn´t exist!');
            localStorage.setItem('item', JSON.stringify(this.allItems));
        }
        catch (error) {
            console.error(error);
        }
    };
    return Items;
}());
var items = new Items();
var doingSubmit = function (ev) {
    ev.preventDefault();
    try {
        var task = ev.target.elements.task.value;
        items.addItem(task);
    }
    catch (error) {
        console.error(error);
    }
};
function redirect() {
    try {
        window.location.href = 'ItemsList.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
localStorage.clear();

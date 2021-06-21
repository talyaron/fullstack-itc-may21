var Items = /** @class */ (function () {
    function Items(itemName, itemId) {
        this.itemId = "id" + Math.random().toString(16).slice(2);
        this.itemName = itemName;
        this.itemId = itemId;
    }
    ;
    return Items;
}());
function handleSubmit(event) {
    event.preventDefault();
    //agarras el contenido del input text
    var name = event.target.elements.add.value;
    console.log(name);
}

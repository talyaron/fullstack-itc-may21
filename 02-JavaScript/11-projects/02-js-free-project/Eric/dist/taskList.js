var allItems = JSON.parse(localStorage.getItem('item'));
var root = document.querySelector('#root');
function renderItems() {
    var html = this.allItems.allItems.map(function (element) {
        return ("" + element.item);
    });
    root.innerHTML = html;
}
renderItems();

var allItems = JSON.parse(localStorage.getItem('item'));
var root = document.querySelector('#root');
function renderItems() {
    var html = this.allItems.allItems.map(function (element) {
        return ("" + element.task);
    });
    root.innerHTML = html;
}
renderItems();
function redirectt() {
    window.location.href = 'index.html';
}

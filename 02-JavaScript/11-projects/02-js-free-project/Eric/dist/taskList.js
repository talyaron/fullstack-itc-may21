var allItems = JSON.parse(localStorage.getItem('item'));
var root = document.querySelector('#root');
function renderItems() {
    var html = "";
    allItems.forEach(function (element) {
        html += "<div>  " + element.task + " <input type=\"checkbox\" class=\"checkItem\" onclick = checkear() > </div> ";
    });
    root.innerHTML = html;
}
function checkear() {
    var check = document.getElementsByClassName('checkItem');
    var itemArray = [];
    var count = 0;
    allItems.forEach(function (element) {
        if (check[count].checked === true) {
            itemArray.push(element);
        }
        count++;
    });
    localStorage.setItem('checkedItem', JSON.stringify(itemArray));
    mostrarItems();
}
renderItems();
function redirectt() {
    window.location.href = 'index.html';
}
function mostrarItems() {
    localStorage.parse;
}

var allItems = JSON.parse(localStorage.getItem('item'));
var root = document.querySelector('#root');
function renderItems() {
    var html = "";
    allItems.forEach(function (element) {
        html += "<div>  " + element.task + " <input type=\"checkbox\" class=\"checkItem\" onclick = checkear() > </div> ";
    });
    try {
        root.innerHTML = html; //YS: Use insertAdjectentHTML instead of innerHTML.
        if (!html)
            throw new Error('An error occurs when you want to render..');
    }
    catch (error) {
        console.error(error);
    }
}
function checkear() {
    var check = document.getElementsByClassName('checkItem');
    var itemArray = [];
    var count = 0;
    allItems.forEach(function (element) {
        try {
            if (check[count].checked === true) {
                itemArray.push(element);
            }
            count++;
        }
        catch (error) {
            console.error(error);
        }
    });
    localStorage.setItem('checkedItem', JSON.stringify(itemArray));
    mostrarItems();
}
renderItems();
function redirectt() {
    try {
        window.location.href = 'index.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
function mostrarItems() {
    try {
        localStorage.parse;
    }
    catch (error) {
        console.error(error);
    }
}

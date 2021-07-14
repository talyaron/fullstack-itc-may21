var arrayToGrid = JSON.parse(localStorage.getItem("arrayColor"));
var gridRoot = document.querySelector('.container__box');
var btnBack = document.querySelector('.container__button--sumbit');
function renderSquareColor(color) {
    try {
        var html = '';
        var count = 36;
        var size = 150;
        if (!gridRoot)
            throw new Error('Cant get the grid');
        for (var i = 0; i < count; i++) {
            html += "<div style=\"background-color:" + color + "; width:" + size + "px; height:" + size + "px\" \n                class=\"container__box--item\">\n            </div>";
        }
        gridRoot.innerHTML = html;
    }
    catch (e) {
        alert(e);
    }
}
var id = arrayToGrid[0], color = arrayToGrid[1];
renderSquareColor(color);
btnBack.addEventListener('click', backPage);
function backPage() {
    try {
        window.location.href = "first.html";
        if (!window.location.href)
            throw new Error("The page does not exist");
    }
    catch (e) {
        alert(e);
    }
}

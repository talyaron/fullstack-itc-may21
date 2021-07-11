var arrayToGrid = JSON.parse(localStorage.getItem("arrayColor"));
var gridRoot = document.querySelector('.container__box');
var btnBack = document.querySelector('.container__button--sumbit');
var ColorSquare = /** @class */ (function () {
    function ColorSquare() {
    }
    ColorSquare.prototype.getColor = function (arrayToGrid) {
        try {
            this.render(arrayToGrid[1]);
        }
        catch (e) {
            alert(e);
        }
    };
    ColorSquare.prototype.render = function (color) {
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
    };
    return ColorSquare;
}());
var colorsquare = new ColorSquare();
colorsquare.getColor(arrayToGrid);
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

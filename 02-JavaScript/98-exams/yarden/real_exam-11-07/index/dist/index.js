/*
create a two-page app. in the first page, you will insert colors (using input: color), to a list of colors on the DOM. The user can delete a list item. If the user clicks on the color on the first page, she will redirect to a second page, where she will see a grid of squares with the specific color. https://classroom.google.com/c/MjgxODc1Mjg4ODE5/a/MzA1NjIwMDk5NzY0/details
*/
//Classes:
//Item class:
var Color = /** @class */ (function () {
    function Color(color) {
        this.id = Math.random().toString(16).slice(2);
        this.color = color;
    }
    return Color;
}());
//Array class:
var ColorsList = /** @class */ (function () {
    function ColorsList() {
        this.colorsList = [];
    }
    ColorsList.prototype.add = function (color) {
        this.colorsList.unshift(color);
        console.dir(this.colorsList);
        localStorage.setItem("color", JSON.stringify(this.colorsList));
    };
    ColorsList.prototype.render = function () {
        var colorsRoot = document.querySelector(".color-root");
        var chosenColor = this.colorsList[0].color;
        console.log(chosenColor);
        var newColor = "";
        this.colorsList.forEach(function (color) {
            newColor += "\n            <div class=\"color-wrapper\">\n            \n                <div onclick=\"handlePageChange(event)\" class=\"color-wrapper__color\" id=\"" + color.id + "\" style=\"background-color: " + chosenColor + "\"></div>\n                \n                <svg class=\"delete\" onclick=\"handleDelete(" + color.id + ")\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"30\" fill=\"red\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n                <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n                <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n                </svg>\n            </div>\n            ";
            colorsRoot.insertAdjacentHTML("beforeend", newColor);
        });
    };
    ColorsList.prototype.remove = function (chosenId) {
        var indexToRemove = this.colorsList.findIndex(function (element) { return element.id === chosenId; });
        this.colorsList.splice(indexToRemove, 1);
        this.render();
    };
    return ColorsList;
}());
//Instance of the array:
var myColors = new ColorsList();
//Event handler functions:
function handleSubmit(event) {
    event.preventDefault();
    var color = event.target[0].value;
    var newcolor = new Color(color);
    myColors.add(newcolor);
    event.target.reset();
    myColors.render();
}
function handleDelete(id) {
    myColors.remove(id);
    console.dir(myColors);
}
//Change to page 2, with Local storage:
function handlePageChange(event) {
    var colorToSend = event.target.style.backgroundColor;
    console.log(colorToSend);
    localStorage.setItem("Chosen color", JSON.stringify(colorToSend));
    window.location.href = "../page2/page2.html";
}

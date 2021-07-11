var boardRoot = document.querySelector('#container__board');
var form = document.getElementById('form');
var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
        this.colorID = "id" + Math.random().toString(16).slice(2);
    }
    return Color;
}());
var ColorList = /** @class */ (function () {
    function ColorList() {
        this.colorlist = [];
    }
    ColorList.prototype.addColor = function (colorItem) {
        try {
            var isFound = this.colorlist.some(function (color) { return color.color == colorItem.color; });
            if (isFound)
                throw new Error("You choice that color");
            this.colorlist.push(colorItem);
            this.setStorage();
            this.renderColorOnDom(this.colorlist);
        }
        catch (e) {
            alert(e);
        }
    };
    ColorList.prototype.addBoxesList = function (currentBox) {
        var _this = this;
        try {
            currentBox.forEach(function (person) {
                var color = person.color;
                var personprev = new Color(color);
                _this.colorlist.push(personprev);
            });
            this.renderColorOnDom(this.colorlist);
        }
        catch (e) {
            alert(e);
        }
    };
    ColorList.prototype.deleteColor = function (colorId) {
        try {
            var index = this.colorlist.findIndex(function (color) { return color.colorID === colorId; });
            this.colorlist.splice(index, 1);
            this.setStorage();
            this.renderColorOnDom(this.colorlist);
        }
        catch (e) {
            alert(e);
        }
    };
    ColorList.prototype.setStorage = function () {
        localStorage.setItem("currentBoxes", JSON.stringify(this.colorlist));
    };
    ColorList.prototype.renderColorOnDom = function (arrayToRender) {
        try {
            var html_1 = '';
            var size_1 = 200;
            if (!boardRoot)
                throw new Error("It couldnt possible to show the boxes");
            arrayToRender.forEach(function (colorElem) {
                var color = colorElem.color, colorID = colorElem.colorID;
                html_1 += "<div class=\"container__board__color-item\">\n                        <div style=\"background-color:" + color + "; width:" + size_1 + "px; height:" + size_1 + "px\" class=\"container__board__color-item--square\"\n                        onclick='nextPage(\"" + colorID + "\",\"" + color + "\")'>\n                        </div> \n                        <i class=\"fa fa-trash container__board__color-item--trash\" onclick='handleDelete(\"" + colorID + "\")' title=\"Delete Item\"></i> \n                             \n                    </div>";
            });
            boardRoot.innerHTML = html_1;
        }
        catch (e) {
            alert(e);
        }
    };
    return ColorList;
}());
var colorlist = new ColorList();
var currentBox = JSON.parse(localStorage.getItem("currentBoxes"));
if (currentBox !== null) {
    colorlist.addBoxesList(currentBox);
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(ev) {
    ev.preventDefault();
    try {
        var color = ev.target.elements.color.value;
        if (color === null)
            throw new Error('Is not possible to grab the color');
        var inputColor = new Color(color);
        colorlist.addColor(inputColor);
    }
    catch (e) {
        alert(e);
    }
    ev.target.reset();
}
function handleDelete(id) {
    colorlist.deleteColor(id);
}
function nextPage(id, color) {
    try {
        var gridColor = [id, color];
        localStorage.setItem("arrayColor", JSON.stringify(gridColor));
        window.location.href = "second.html?id=" + id;
        if (!window.location.href)
            throw new Error("The page does not exist");
    }
    catch (e) {
        alert(e);
    }
}

var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
        this.id = Math.random().toString(16).slice(2);
    }
    return Color;
}());
var Colors = /** @class */ (function () {
    function Colors() {
        this.array = [];
    }
    Colors.prototype.getFromLocalStorage = function () {
        try {
            var colors_1 = JSON.parse(localStorage.getItem('colorsArray'));
            if (!Array.isArray(colors_1))
                throw new Error('localstorage colorsArray was not an array');
            this.array = colors_1;
            var rootColor = document.querySelector('#rootColor');
            this.renderColors(rootColor);
        }
        catch (e) {
            console.error(e);
        }
    };
    Colors.prototype.addColor = function (color) {
        var newColor = new Color(color);
        this.array.unshift(newColor);
        localStorage.setItem('colorsArray', JSON.stringify(this.array));
    };
    Colors.prototype.deleteColor = function (colorId) {
        this.array = this.array.filter(function (color) { return color.id !== colorId; });
        var rootColor = document.querySelector('#rootColor');
        this.renderColors(rootColor);
        localStorage.setItem('colorsArray', JSON.stringify(this.array));
    };
    Colors.prototype.renderColors = function (rootColor) {
        var html = this.array.map(function (color) {
            var clearColor = color.color.replace('#', '');
            return "<div class='buttonColors__box'>\n            \n                <a href='colors.html?color=" + clearColor + "' style='background: " + color.color + "'></a>\n                <img src='https://i.gadgets360cdn.com/large/delete_apps_thumb_1532676846539.jpg' onclick='handleDelete(\"" + color.id + "\")'/>\n            </div>";
        }).join('');
        rootColor.innerHTML = html;
    };
    return Colors;
}());
var colors = new Colors();
colors.getFromLocalStorage();
function handleColor(ev) {
    ev.preventDefault();
    console.log('invoked onchange');
    var color = ev.target.elements.color.value;
    colors.addColor(color);
    console.log(colors);
    var rootColor = document.querySelector('#rootColor');
    colors.renderColors(rootColor);
}
function handleDelete(colorId) {
    colors.deleteColor(colorId);
}

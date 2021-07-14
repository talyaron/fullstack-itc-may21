var getLocal = JSON.parse(localStorage.getItem("localSave"));
var show = document.querySelector(".show");
var getColor = document.querySelector("getColor");
var ArrayUno = /** @class */ (function () {
    function ArrayUno(color) {
        this.color = color;
        this.id = Math.random().toString(16).slice(2);
    }
    return ArrayUno;
}());
var ArrayDos = /** @class */ (function () {
    function ArrayDos() {
        this.dentroArr = [];
    }
    ArrayDos.prototype.add = function (add) {
        this.dentroArr.push(add);
        this.localStorage(this.dentroArr);
        this.render();
    };
    ArrayDos.prototype.localStorage = function (save) {
        localStorage.setItem("localSave", JSON.stringify(save));
    };
    ArrayDos.prototype.addLocal = function (add) {
        var _this = this;
        add.forEach(function (elements) {
            var arrs = new ArrayUno(elements.color);
            _this.dentroArr.push(arrs);
        });
    };
    ArrayDos.prototype.deleteColor = function (id) {
        this.dentroArr = this.dentroArr.filter(function (element) { return element.id !== id; });
        this.localStorage(this.dentroArr);
        this.render();
    };
    ArrayDos.prototype.render = function (arr) {
        var arrRender = arr ? arr : this.dentroArr;
        var html = "";
        arrRender.forEach(function (elements) {
            html += "<div class=\" container colors\" style=\"background-color: " + elements.color + "\">\n      <button class=\"btn btn-light\"onclick='handleDelete(\"" + elements.id + "\")'><i class=\"fas fa-trash\"></i></button>\n      <button class = \"btn btn-warning getColors\" onclick='redirecColor(\"" + elements.id + "\")'>Get Color</button>\n            </div>";
        });
        show.innerHTML = html;
    };
    return ArrayDos;
}());
var arrayDos = new ArrayDos();
window.onload = function render() {
    var html = "";
    getLocal.forEach(function (elements) {
        html += "<div class=\"container colors\" style=\"background-color: " + elements.color + "\">\n    \n <button class=\"btn btn-light\"onclick='handleDelete(\"" + elements.id + "\")'><i class=\"fas fa-trash\"></i></button>\n <button class = \"btn btn-warning getColors\" onclick='redirecColor(\"" + elements.id + "\")'>Get Color</button>\n        \n            </div>";
    });
    show.innerHTML = html;
};
if (getLocal !== null) {
    arrayDos.addLocal(getLocal);
}
var handleSubmit = function (event) {
    event.preventDefault(event);
    try {
        var color = event.target.elements.color.value;
        if (color === "")
            throw Error("Put a Color");
        var arrayUno = new ArrayUno(color);
        arrayDos.add(arrayUno);
    }
    catch (error) { }
};
var handleDelete = function (id) {
    arrayDos.deleteColor(id);
};
var redirecColor = function (id) {
    localStorage.setItem("saveColors", id);
    window.location.href = "second.html?id=" + id;
};

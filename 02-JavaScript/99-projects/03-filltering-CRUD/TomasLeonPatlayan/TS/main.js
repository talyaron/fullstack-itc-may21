var IdsGenerator = /** @class */ (function () {
    function IdsGenerator(name) {
        this.name = name;
    }
    return IdsGenerator;
}());
var Ids = /** @class */ (function () {
    function Ids() {
        this.id = [];
    }
    Ids.prototype.add = function (add) {
        this.id.push(add);
        this.render();
    };
    Ids.prototype.render = function () {
        var show = document.querySelector(".show");
        var html = "";
        this.id.forEach(function (element) {
            html += "<div class = 'show-id'n onclick=\"btnDelete(event)\"><h1> " + element.name + "</h1>\n      <button class = 'delete'>X</button></div>";
        });
        show.innerHTML = html;
    };
    Ids.prototype.deleteIds = function (ele) {
        if (ele.classList.contains("delete")) {
            ele.parentElement.remove();
        }
    };
    return Ids;
}());
var ids = new Ids();
var handleSubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var generator = new IdsGenerator(name);
    console.log(generator);
    ids.add(generator);
    event.target.reset();
};
var btnDelete = function (event) {
    ids.deleteIds(event.target);
};

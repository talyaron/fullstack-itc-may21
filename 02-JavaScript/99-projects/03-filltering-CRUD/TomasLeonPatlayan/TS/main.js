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
    };
    return Ids;
}());
var ids = new Ids();
var handleSubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var generator = new IdsGenerator(name);
};

var x = false;
x = 'by';
var arr = [1, 2, 3, 'a', 4];
console.log(x);
var add = function (a, b) { return a + b; };
var z = {
    a: 1,
    b: 2
};
var w = {
    a: 45,
    b: 100
};
var f = 23;
console.log(add(z.a, z.b));
var root = document.querySelector('#root');
console.dir(root);
var addToDOM = function (htmlElement, adds) {
    htmlElement.innerText = "add " + adds.a + " + " + adds.b + " = " + add(adds.a, adds.b);
};
addToDOM(root, w);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        return this.name;
    };
    return Person;
}());
var Raziel = new Person("2");
console.log(Raziel);

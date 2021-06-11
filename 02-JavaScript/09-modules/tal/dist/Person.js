"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.tell = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
var person = new Person("Ben");
exports["default"] = person;

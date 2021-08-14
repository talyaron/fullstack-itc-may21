"use strict";
// create a list of your favorite list (books, friends...);
// Create a route for add an item
// create a route for showing all items (method: GET)
// create a route for deleting an item (method: DELETE)
// create a route for updating an item (method: PUT)
// create a route to search items by name. id etc,  (method: GET)
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.port || 4001;
var Studients = /** @class */ (function () {
    function Studients() {
        this.lista = [];
    }
    Studients.prototype.addStudient = function (studient) {
        this.lista.push(studient);
    };
    return Studients;
}());
var studient = new Studients;
app.get('/', function (req, res) {
    res.send('hello world');
});
app.post('/', function (req, res) {
    try {
        var body = req.body;
        var name = body.name, id = body.id;
        if (!name || !id) {
            throw new Error('No name or id in data');
        }
        students.addStudent(body);
        console.log(students.list);
        res.send(req.body);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});

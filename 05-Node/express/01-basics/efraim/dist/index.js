"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
var body_parser_1 = require("body-parser");
var Students = /** @class */ (function () {
    function Students() {
        this.list = [];
    }
    Students.prototype.addStudent = function (student) {
        this.list.push(student);
    };
    return Students;
}());
var students = new Students();
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/blabla', function (req, res) {
    res.send('Bla bla!');
});
app.post('/addStudent', function (req, res) {
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

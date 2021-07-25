"use strict";
exports.__esModule = true;
var express_1 = require("express"); //get library
var app = express_1["default"](); //get express
var port = process.env.PORT || 8000; //port
var body_parser_1 = require("body-parser"); //get library json parse
//tsc typescript
//npm i --save-dev
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
app.use(body_parser_1["default"].json()); //use express to get parse json
app.post('/addStudent', function (req, res) {
    try {
        var body = req.body; //body of the post
        var name = body.name, id = body.id; //post
        if (!name || !id) {
            throw new Error('No name or id in data');
        }
        students.addStudent(body);
        console.log(students.list);
        res.send(body);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});

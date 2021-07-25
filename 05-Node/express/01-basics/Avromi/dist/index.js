var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
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

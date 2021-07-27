var express = require('express');
var app = express();
var port = process.env.PORT || 2080;
var bodyParser = require('body-parser');
var StudentsList = /** @class */ (function () {
    function StudentsList() {
        this.list = [];
    }
    StudentsList.prototype.addStudent = function (student) {
        this.list(student);
    };
    return StudentsList;
}());
var students = new StudentsList();
app.use(bodyParser.json());
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

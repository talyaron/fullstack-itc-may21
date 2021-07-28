var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var Ajv = require("ajv");
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var fs = require('fs');
app.use(express.static('public'));
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
app.get('/style.css', function (req, res) {
    var css = fs.readFileSync('style.css');
    res.send(css);
});
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/blabla', function (req, res) {
    res.send('Bla bla!');
});
app.post('/addStudent', function (req, res) {
    try {
        var schema = {
            type: "object",
            properties: {
                name: { type: "string" },
                id: { type: "integer" }
            },
            required: ["name", "id"],
            additionalProperties: false
        };
        var validate = ajv.compile(schema);
        var body = req.body;
        var valid = validate(body);
        if (!valid) {
            validate.errors.forEach(function (err) {
                return console.log(err.message);
            });
            throw new Error("Invalid data was transferd");
        }
        // const { name, id } = body;
        // if (!name || !id) { throw new Error('No name or id in data') }
        students.addStudent(body);
        console.log(students.list);
        res.send(students.list);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
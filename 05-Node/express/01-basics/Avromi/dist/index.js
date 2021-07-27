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
app.use(bodyParser.json());
app.get('/', function (req, res) {
    var form = fs.readFileSync('./public/index.html');
    res.send(form);
});
app.post('/testPost', function (req, res) {
    console.log(req.body);
    res.send({ ok: true });
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

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3005;
app.use(express.static('public'));
var Person = /** @class */ (function () {
    function Person() {
        this.arrayOfPerson = [];
    }
    Person.prototype.addPerson = function (person) {
        this.arrayOfPerson.push(person);
    };
    return Person;
}());
var people = new Person();
app.use(bodyParser.json());
app.post('/addPerson', function (req, res) {
    try {
        var body = req.body;
        var name_1 = body.name, age = body.age;
        if (!name_1 || !age) {
            throw new Error('Enter valid name and age');
        }
        ;
        people.addPerson(body);
        res.send(req.body);
    }
    catch (error) {
        res.status(400).send({ error: e.message });
    }
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});

var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;
var validateBody = require('./middleware/middleware').validateBody;
app.use(express.json());
app.use(express.static('public'));
var dataBase = [];
var User = /** @class */ (function () {
    function User(name, imgSrc, prefColor) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.prefColor = prefColor;
        this.id = Math.random().toString(16).slice(2);
    }
    return User;
}());
app.post('/addUser', validateBody, isW, function (req, res) {
    var _a = req.body, name = _a.name, imgSrc = _a.imgSrc, prefColor = _a.prefColor;
    var user = new User(name, imgSrc, prefColor);
    dataBase.push(user);
    res.send(dataBase);
});
function isW(req, res, next) {
    console.log("working ");
    next();
}
;
app.get('/getUsers', function (req, res) {
    res.send(dataBase);
});
app.listen(PORT, function () { return console.log('Server listen on port', PORT); });

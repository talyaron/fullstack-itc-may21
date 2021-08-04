var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var _a = require('./model/dist/images'), beaches = _a.beaches, drinks = _a.drinks;
app.use(express.static('public'));
app.get('/beaches', function (req, res) {
    console.log(beaches);
    res.send(beaches);
});
app.get('/drinks', function (req, res) {
    res.send(drinks);
});
app.listen(port, function () { return console.log('Server listen on port', port); });

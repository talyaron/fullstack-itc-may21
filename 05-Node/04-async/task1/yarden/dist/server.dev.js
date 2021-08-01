"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
var drinks = [{
  drinkName: 'pepsi',
  image: "https://m.media-amazon.com/images/I/61Q7SR0r9XL._SL1500_.jpg"
}];
app.use(express.json());
app.use(express["static"]('public'));
app.get('/getDrinks', function (req, res) {
  setTimeout(function () {
    res.send();
  }, 2500);
});
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});
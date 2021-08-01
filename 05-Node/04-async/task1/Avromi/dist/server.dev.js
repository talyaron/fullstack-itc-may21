"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require('fs');

app.use(express["static"]('public')); //read filefunction? // on load 

app.get('/getCocktails', function (req, res) {
  console.log('get....');
  var newCocktails = fs.readFileSync('./newCocktails.json');
  res.send(newCocktails);
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});
"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require('fs');

app.use(express["static"]('public')); //read filefunction? // on load 

app.get('/getCocktails', function (req, res) {
  console.log('get....');
  var cocktails = JSON.parse(fs.readFileSync('./cocktails.json'));
  var newCocktails = cocktails.map(function (cok) {
    console.log(cok);
    return {
      img: cok.strDrinkThumb,
      name: cok.strDrink
    };
  });
  console.log(newCocktails);
  res.send(newCocktails);
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});
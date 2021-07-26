"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// create a list of your favorite list (books,uits);
// Create a route for add an item
// create a route for showing all items (method: GET)
// create a route for deleting an item (method: DELETE)
// create a route for updating an item (method: PUT)
// create a route to search items by name. id etc,  (method: GET)
var fruits = [];

var express = require('express');

var app = express();
var port = process.env.PORT || 3003;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/getFruits', function (req, res) {
  res.send({
    fruits: fruits
  });
  console.log(fruits);
});
app.post('/addFruits', function (req, res) {
  var body = req.body;
  var name = body.name,
      id = body.id;
  fruits.push(body);
  res.send(body);
});
app.get('/searchFruit/:name', function (req, res) {
  var name = req.params.name;
  var searchFruit = fruits.filter(function (fruit) {
    return fruit.name === name;
  });
  res.send({
    searchFruit: searchFruit
  });
  console.log("You have search to your friend: ".concat(name));
});
app.put('/updateFruits/:id', function (req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var fruitUpdate = fruits.find(function (fruit) {
    return fruit.id === id;
  });
  if (name) fruitUpdate.name = name;
  if (id) fruitUpdate.id = id;
  res.send(fruits);
});
app["delete"]('/deleteFruits/:name', function (req, res) {
  var name = req.params.name;
  var deleteFruit = fruits.filter(function (fruit) {
    return fruit.name !== name;
  });
  fruits = (_readOnlyError("fruits"), deleteFruit);
  res.send({
    deleteFruit: deleteFruit
  });
  console.log("The fruit ".concat(name, " has been deleted"));
});
app.listen(port, function () {
  console.log("crud listening at http://localhost:".concat(port));
});
"use strict";

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

var bodyParser = require('body-parser'); //YS: You dont need body-parser, you can use this instead: app.use(expres.json())


app.use(bodyParser.json());
app.get('/getFruits', function (req, res) {
  res.send({
    fruits: fruits
  });
});
app.post('/addFruits', function (req, res) {
  var body = req.body;
  var name = body.name,
      id = body.id; //YS: You are not using this

  fruits.push(body); //YS: Instead of pushing the whole body, you should push an object which you create which has the name, and id (which you also create in the server):

  /* const newFruit = {
      name: name, 
      id: uuidv4()
  } */

  res.send(body);
}); //searh by bame

app.get('/searchFruit/:name', function (req, res) {
  //YS: Good, although it should be be :id instad of :name
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
  res.send(fruits);
}); // app.delete('/deleteFruits/:id', (req, res)=>{
//     const { body } = req.params;
//     const {id} = body;
//     fruits = fruits.filter((fruit)=>fruit.id !== id);
//     res.send({fruits})
//     console.log(`The fruit ${id} has been deleted`)
// })

app["delete"]('/deleteFruits/:name', function (req, res) {
  //YS: Good, but again, should be be id and you should search the fruit by id. 
  var name = req.params.name;
  var deleteFruit = fruits.filter(function (fruit) {
    return fruit.name !== name;
  });
  fruits = deleteFruit;
  res.send({
    fruits: fruits
  });
  console.log("The friend ".concat(name, " has been deleted"));
});
app.listen(port, function () {
  console.log("crud listening at http://localhost:".concat(port));
});
"use strict";

/* create a list of your favorite list (books, friends...);
Create a route for add an item
create a route for showing all items (method: GET)
create a route for deleting an item (method: DELETE)
create a route for updating an item (method: PUT)
create a route to search items by name. id etc,  (method: GET) */
//YS: This file should be called server.js instead of sript.js
var express = require('express');

var app = express();
var port = 3000; //Joi is to validate the data I enter:

var Joi = require('joi');

app.use(express.json()); //Define a new array that will contain all my favourite books:

var favouriteBooks = [{
  id: 1,
  name: "El Principito"
}, {
  id: 2,
  name: "Mil soles esplendidos"
}, {
  id: 3,
  name: "Las mil y una noches"
}, {
  id: 4,
  name: "Muchas vidas, muchos maestros"
}, {
  id: 5,
  name: "El poder del ahora"
}, {
  id: 6,
  name: "El Alquimista"
}, {
  id: 7,
  name: "Lo que el viento se llevo"
}, {
  id: 8,
  name: "Crepusculo"
}, {
  id: 9,
  name: "El ultimo judio"
}, {
  id: 10,
  name: "El diario de Anna Frank"
}]; //Create a route for add an item (method: POST)

app.post('/addBook', function (req, res) {
  //I will recieve the data in destructuring const of data:
  var _validateBook = validateBook(req.body.name),
      error = _validateBook.error,
      value = _validateBook.value;

  if (!error) {
    var book = {
      id: favouriteBooks.length + 1,
      //YS: Use the library uuidv4 to create ids. 
      name: value.name
    };
    favouriteBooks.push(book);
    res.send(favouriteBooks);
  } else {
    var msg = error.details[0].message;
    res.status(400).send(msg);
  }
}); //create a route for showing all items (method: GET)

app.get('/', function (req, res) {
  try {
    res.send(favouriteBooks);
  } catch (error) {
    res.send(error); //YS: Also add status
  }

  ;
}); //create a route to search items by name. id etc (method: GET)
//This will get a Book by a Name

app.get('/getBook', function (req, res) {
  //YS: This route should be: /getBook/:id 
  try {
    var searchedBooks = favouriteBooks.find(function (book) {
      return book.name === req.query.name;
    }); //YS: Ok, you used res.query, but use req.params, and add the param to your route (it should also by by id, not name)

    if (!searchedBooks) {
      res.send('That book is not my favourite');
      return;
    }

    res.send(searchedBooks);
  } catch (error) {
    res.send(error);
  }

  ;
}); //create a route for deleting an item (method: DELETE)

app["delete"]('/deleteBook/:id', function (req, res) {
  //YS: Great
  try {
    var bookToDelete = bookExist(req.params.id);

    if (!bookToDelete) {
      res.status(404).send('The book couldn`t be found');
      return;
    }

    ;
    var index = favouriteBooks.indexOf(bookToDelete); //YS: Use filter instead of  indexOf + splice. 

    favouriteBooks.splice(index, 1);
    res.send(favouriteBooks);
  } catch (error) {
    res.send(error);
  }

  ;
}); //create a route for updating an item (method: PUT)

app.put('/updateBook/:id', function (req, res) {
  var bookToUpdate = bookExist(req.params.id);

  if (!bookToUpdate) {
    res.status(404).send('The book it doesn`t exist!');
    return;
  }

  ; //I will recieve the data in destructuring const of data:

  var _validateBook2 = validateBook(req.body.name),
      error = _validateBook2.error,
      value = _validateBook2.value;

  if (error) {
    var mensaje = error.details[0].message;
    res.status(400).send(mensaje);
    return;
  }

  bookToUpdate.name = value.name;
  res.send(favouriteBooks);
});
app.listen(port, function () {
  console.log("The server is running at port:".concat(port));
}); //This function is to DRY:  //YS: Very nice! These should be in a different file and then you should import them

function bookExist(id) {
  try {
    return favouriteBooks.find(function (book) {
      return book.id === parseInt(id);
    });
  } catch (error) {
    res.send(error);
  }

  ;
}

;

function validateBook(nameBook) {
  try {
    var schema = Joi.object({
      //First I define the data that Im going to recieve, in this case should be "name"
      name: Joi.string().min(3).required()
    });
    return schema.validate({
      name: nameBook
    });
  } catch (error) {
    res.send(error);
  }
}

;
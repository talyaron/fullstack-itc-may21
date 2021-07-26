"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 8080;

var path = require('path');

app.use(express["static"](__dirname + 'public'));
/*class Avenger {
    avengerList = []

    //add avenger
    addAvenger(avenger) {
        this.avengerList.push(avenger)
    }
    

}

const avenger = new Avenger()*/

var avengerList = [];
var avengerList2 = [];
app.use(express.json()); //Create a route for add an item

app.post('/addAvenger', function (req, res) {
  try {
    var body = req.body;
    var name = body.name,
        id = body.id;

    if (!name || !id) {
      throw new Error('Dont have name or id in the json object');
    }

    var isFound = avengerList.some(function (avenger) {
      return avenger.id === id;
    });

    if (isFound) {
      throw new Error('This id is already in the list');
    }

    avengerList.push(body);
    avengerList2.push(body);
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
}); //create a route for showing all items 

app.get('/getAvengers', function (req, res) {
  res.send(avengerList);
}); //create a route for deleting an item

app["delete"]('/deleteAvenger', function (req, res) {
  try {
    var body = req.body;
    var id = body.id;
    if (!id) throw new Error('The id does not exist in the list');
    var indexAvenger = avengerList.findIndex(function (avenger) {
      return avenger.id === id;
    });
    avengerList.splice(indexAvenger, 1);
    avengerList2.splice(indexAvenger, 1);
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
}); //create a route for updating an item

app.put('/updateAvenger', function (req, res) {
  try {
    var body = req.body;
    var id = body.id,
        name = body.name;
    if (!id || !name) throw new Error('The id or name does not exist in the list');
    var index = avengerList.findIndex(function (item) {
      return item.id === id;
    });
    avengerList[index].name = name;
    avengerList2[index].name = name;
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
}); //create a route to search items by name. id

app.get('/getAvengersbyName', function (req, res) {
  try {
    var regrExp = "^".concat(req.query.name);
    var searchTermReg = new RegExp(regrExp, 'i');
    avengerList = avengerList2.filter(function (avenger) {
      return searchTermReg.test(avenger.name);
    });
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});
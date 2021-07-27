"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var _require = require('uuid'),
    uuidv4 = _require.v4; //https://www.npmjs.com/package/uuid


var Ajv = require("ajv");

var ajv = new Ajv();
app.use(express.json()); // create a list of your favorite list (books, friends...); // a class defenition with js....

var Animals =
/** @class */
function () {
  function Animals() {
    this.animalsArray = [];
  }

  Animals.prototype.addAnimal = function (animal) {
    this.animalsArray.push(_objectSpread({}, animal, {
      uuid: uuidv4()
    }));
  };

  Animals.prototype.deleteAnimal = function (animal) {
    if (animal.species) this.animalsArray = this.animalsArray.filter(function (animalItem) {
      return animalItem.species !== animal.species;
    });
    if (animal.family) this.animalsArray = this.animalsArray.filter(function (animalItem) {
      return animalItem.family !== animal.family;
    });
    if (animal.uuid) this.animalsArray = this.animalsArray.filter(function (animalItem) {
      return animalItem.uuid !== animal.uuid;
    });
  };

  Animals.prototype.updateAnimal = function (animal) {
    var animalToUpdateIndex = this.animalsArray.findIndex(function (animalItem) {
      return animalItem.uuid === animal.uuid;
    });
    if (animal.species) this.animalsArray[animalToUpdateIndex].species = animal.species;
    if (animal.family) this.animalsArray[animalToUpdateIndex].family = animal.family;
  };

  Animals.prototype.searchAnimal = function (animal) {
    var searchedAnimal = this.animalsArray;
    if (animal.species) searchedAnimal = searchedAnimal.filter(function (animalItem) {
      return animalItem.species === animal.species;
    });
    if (animal.family) searchedAnimal = searchedAnimal.filter(function (animalItem) {
      return animalItem.family === animal.family;
    });
    if (animal.uuid) searchedAnimal = searchedAnimal.filter(function (animalItem) {
      return animalItem.uuid === animal.uuid;
    });
    var result = searchedAnimal.length === 0 ? 'No animal found for your query' : searchedAnimal;
    return result;
  };

  return Animals;
}();

var animals = new Animals(); // create a route for add an item

app.post('/add-animal', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        species: {
          type: "string"
        },
        family: {
          type: "string"
        }
      },
      required: ["species", "family"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      // validate.errors.forEach(er => console.log(er.message));
      throw new Error('Invalid data structure');
    }

    animals.addAnimal(body);
    res.send("".concat(body.species, " added to the animals kingdom"));
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
}); // create a route for showing all items (method: GET)

app.get('/all-animals', function (req, res) {
  res.send(animals.animalsArray);
}); // create a route for deleting an item (method: DELETE)

app["delete"]('/delete-animal', function (req, res) {
  try {
    var body = req.body;
    if (!body.uuid && !body.family && !body.species) throw new Error('There are no "uuid", "family" nor "species" keys in JSON');
    if (body.species && typeof body.species !== 'string') throw new Error('"species" key value must be a string');
    if (body.family && typeof body.family !== 'string') throw new Error('"family" key value must be a string');
    if (body.uuid && typeof body.uuid !== 'string') throw new Error('"uuid" key value must be a string');
    animals.deleteAnimal(body);
    res.send("animal deleted successfully");
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
}); // create a route for updating an item (method: PUT)

app.put('/update-animal', function (req, res) {
  try {
    var body = req.body;
    if (!body.uuid && !body.family && !body.species) throw new Error('There are no "uuid", "family" nor "species" keys in JSON');
    if (!body.uuid) throw new Error('There is no "id" key in JSON - cannot find animal');
    if (!body.family && !body.species) throw new Error('There is no "family" nor "species" keys in JSON - no info to update for animal');
    if (body.family && typeof body.family !== 'string') throw new Error('"family" key value must be a string');
    if (body.species && typeof body.species !== 'string') throw new Error('"species" key value must be a string');
    if (body.uuid && typeof body.uuid !== 'string') throw new Error('"uuid" key value must be a string');
    animals.updateAnimal(body);
    res.send("animal ".concat(body.uuid, " updated successfully"));
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
}); // create a route to search items by name, id etc.  (method: GET)

app.get('/search-animal', function (req, res) {
  try {
    var query = req.query;
    if (!query.uuid && !query.family && !query.species) throw new Error('There are no "uuid", "family" nor "species" keys in query'); // if ((query.family) && (typeof query.family !== 'string')) throw new Error('"family" key value must be a string');
    // if ((query.species) && (typeof query.species !== 'string')) throw new Error('"species" key value must be a string');
    // if ((query.uuid) && (typeof query.uuid !== 'string')) throw new Error('"uuid" key value must be a string');
    // I think the typeof checks redundant since all queries have string values (right?)

    res.send(animals.searchAnimal(query));
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
}); // animals cheatsheet:
// cat Felidae
// dog Canidae
// ferret Mustelidae
// goldfish Cyprinidae
// grizzly Ursidae
// seal Otariidae
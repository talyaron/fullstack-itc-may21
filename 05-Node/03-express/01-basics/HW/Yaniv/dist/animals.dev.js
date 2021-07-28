"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4; //https://www.npmjs.com/package/uuid


var Ajv = require("ajv");

var ajv = new Ajv();
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());

var readJson = function readJson() {
  var animalsArray = fs.readFileSync('animals.json');
  return JSON.parse(animalsArray);
}; // create a list of your favorite list (books, friends...); // a class defenition with js....


var Animals =
/** @class */
function () {
  function Animals() {
    this.animalsArray = readJson();
  }

  Animals.prototype.updateAnimalsJson = function () {
    fs.writeFileSync('animals.json', JSON.stringify(this.animalsArray));
  };

  Animals.prototype.addAnimal = function (animal) {
    this.animalsArray.push(_objectSpread({}, animal, {
      uuid: uuidv4()
    }));
    this.updateAnimalsJson();
  };

  Animals.prototype.deleteAnimal = function (animalUuid) {
    var animalToUpdateIndex = this.animalsArray.findIndex(function (animalItem) {
      return animalItem.uuid === animalUuid;
    });
    if (animalToUpdateIndex === -1) return false;
    this.animalsArray = this.animalsArray.filter(function (animalItem) {
      return animalItem.uuid !== animalUuid;
    });
    this.updateAnimalsJson();
    return true;
  };

  Animals.prototype.updateAnimal = function (animalUuid, animal) {
    var animalToUpdateIndex = this.animalsArray.findIndex(function (animalItem) {
      return animalItem.uuid === animalUuid;
    });
    if (animalToUpdateIndex === -1) return false;
    if (animal.species) this.animalsArray[animalToUpdateIndex].species = animal.species;
    if (animal.sound) this.animalsArray[animalToUpdateIndex].sound = animal.sound;
    this.updateAnimalsJson();
    return true;
  };

  Animals.prototype.searchAnimal = function (animal) {
    var searchedAnimal = this.animalsArray;
    if (animal.species) searchedAnimal = searchedAnimal.filter(function (animalItem) {
      return animalItem.species === animal.species;
    });
    if (animal.sound) searchedAnimal = searchedAnimal.filter(function (animalItem) {
      return animalItem.sound === animal.sound;
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
        sound: {
          type: "string"
        }
      },
      required: ["species", "sound"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
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

app["delete"]('/:uuid', function (req, res) {
  try {
    var body = req.body;
    var uuid = req.params.uuid;
    if (!uuid) throw new Error('Route is missing "uuid" data, please work with the route as follows: "http://localhost:3000/:uuid-to-delete');
    if (Object.entries(body).length !== 0) throw new Error('Instead of JSON, please work with the route as follows: "http://localhost:3000/:uuid-to-delete');
    var uuidIsFound = animals.deleteAnimal(uuid);
    var domMsg = uuidIsFound ? "animal ".concat(uuid, " deleted successfully") : "".concat(uuid, " is not found");
    res.send(domMsg);
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
}); // create a route for updating an item (method: PUT)

app.put('/:uuid', function (req, res) {
  try {
    var body = req.body;
    var uuid = req.params.uuid;
    if (!uuid) throw new Error('Route is missing "uuid" data, please work with the route as follows: "http://localhost:3000/:uuid-to-delete');
    if (!body.sound && !body.species) throw new Error('There is no "sound" nor "species" keys in JSON - no info to update for animal');
    if (body.sound && typeof body.sound !== 'string') throw new Error('"sound" key value must be a string');
    if (body.species && typeof body.species !== 'string') throw new Error('"species" key value must be a string');
    if (Object.entries(body).length > 2) throw new Error('Please only use "sound" and/or "species" keys in your JSON');
    var uuidIsFound = animals.updateAnimal(uuid, body);
    var domMsg = uuidIsFound ? "animal ".concat(uuid, " updated successfully") : "".concat(uuid, " is not found");
    res.send(domMsg);
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
    if (!query.uuid && !query.sound && !query.species) throw new Error('There are no "uuid", "sound" nor "species" keys in query'); // if ((query.sound) && (typeof query.sound !== 'string')) throw new Error('"sound" key value must be a string');
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
// cat miaw
// dog wof
// cow moo
// sheep meee
// fox:
// option 1: Ring-ding-ding-ding-dingeringeding!
// option 2: Wa-pa-pa-pa-pa-pa-pow!
// option 3: Hatee-hatee-hatee-ho!
// option 4: Joff-tchoff-tchoffo-tchoffo-tchoff!
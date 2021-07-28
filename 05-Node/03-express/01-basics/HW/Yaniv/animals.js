const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { v4: uuidv4 } = require("uuid"); //https://www.npmjs.com/package/uuid
const Ajv = require("ajv");
const ajv = new Ajv();

app.use(express.json());

// create a list of your favorite list (books, friends...); // a class defenition with js....
const Animals = /** @class */ (function () {
  function Animals() {
    this.animalsArray = [];
  }
  Animals.prototype.addAnimal = function (animal) {
    this.animalsArray.push({ ...animal, uuid: uuidv4() });
  };

  Animals.prototype.deleteAnimal = function (animal) {
    if (animal.species)
      this.animalsArray = this.animalsArray.filter(
        (animalItem) => animalItem.species !== animal.species
      ); //YS: Nice! :)
    if (animal.family)
      this.animalsArray = this.animalsArray.filter(
        (animalItem) => animalItem.family !== animal.family
      );
    if (animal.uuid)
      this.animalsArray = this.animalsArray.filter(
        (animalItem) => animalItem.uuid !== animal.uuid
      );
  };

  Animals.prototype.updateAnimal = function (animal) {
    const animalToUpdateIndex = this.animalsArray.findIndex(
      (animalItem) => animalItem.uuid === animal.uuid
    ); //YS: Use find instead of findIndex (its more straight to the point)
    if (animal.species)
      this.animalsArray[animalToUpdateIndex].species = animal.species;
    if (animal.family)
      this.animalsArray[animalToUpdateIndex].family = animal.family;
  };

  Animals.prototype.searchAnimal = function (animal) {
    let searchedAnimal = this.animalsArray;
    if (animal.species)
      searchedAnimal = searchedAnimal.filter(
        (animalItem) => animalItem.species === animal.species
      );
    if (animal.family)
      searchedAnimal = searchedAnimal.filter(
        (animalItem) => animalItem.family === animal.family
      );
    if (animal.uuid)
      searchedAnimal = searchedAnimal.filter(
        (animalItem) => animalItem.uuid === animal.uuid
      );

    const result =
      searchedAnimal.length === 0
        ? "No animal found for your query"
        : searchedAnimal;

    return result;
  };

  return Animals;
})();

const animals = new Animals();

// create a route for add an item
app.post("/add-animal", (req, res) => {
  try {
    const schema = {
      //YS: nice! This is called middleware and it should go in a separate folder, we will learn about middleware. But well done for using this.
      type: "object",
      properties: {
        species: { type: "string" },
        family: { type: "string" },
      },
      required: ["species", "family"],
      additionalProperties: false,
    };
    const validate = ajv.compile(schema);
    const { body } = req;
    const valid = validate(body);

    if (!valid) {
      // validate.errors.forEach(er => console.log(er.message));
      throw new Error("Invalid data structure");
    }

    animals.addAnimal(body);

    res.send(animals.animalsArray);
  } catch (er) {
    console.error(er);
    res.status(400).send({ error: er.message }); //YS: Very good
  }
});

// create a route for showing all items (method: GET)
app.get("/all-animals", (req, res) => {
  res.send(animals.animalsArray);
});

// create a route for deleting an item (method: DELETE)
app.delete("/delete-animal", (req, res) => {
  try {
    const { body } = req; //YS: Ok, but start doing this like I showed you (using the ID and passing it through the URL)

    if (!body.uuid && !body.family && !body.species)
      throw new Error(
        'There are no "uuid", "family" nor "species" keys in JSON'
      );
    if (body.species && typeof body.species !== "string")
      throw new Error('"species" key value must be a string');
    if (body.family && typeof body.family !== "string")
      throw new Error('"family" key value must be a string');
    if (body.uuid && typeof body.uuid !== "string")
      throw new Error('"uuid" key value must be a string');

    animals.deleteAnimal(body);
    res.send(`animal deleted successfully`);
  } catch (er) {
    console.error(er);
    res.status(400).send({ error: er.message });
  }
});

// create a route for updating an item (method: PUT)
app.put("/update-animal", (req, res) => {
  try {
    const { body } = req;
    console.log(animals.animalsArray); //YS:  Same as in delete

    if (!body.uuid && !body.family && !body.species)
      throw new Error(
        'There are no "uuid", "family" nor "species" keys in JSON'
      );
    if (!body.uuid)
      throw new Error('There is no "id" key in JSON - cannot find animal');
    if (!body.family && !body.species)
      throw new Error(
        'There is no "family" nor "species" keys in JSON - no info to update for animal'
      );
    if (body.family && typeof body.family !== "string")
      throw new Error('"family" key value must be a string');
    if (body.species && typeof body.species !== "string")
      throw new Error('"species" key value must be a string');
    if (body.uuid && typeof body.uuid !== "string")
      throw new Error('"uuid" key value must be a string');

    animals.updateAnimal(body);
    res.send(`animal ${body.uuid} updated successfully`);
  } catch (er) {
    console.error(er);
    res.status(400).send({ error: er.message });
  }
});

// create a route to search items by name, id etc.  (method: GET)
app.get("/search-animal", (req, res) => {
  try {
    const { query } = req; // YS: Ok, I see what you were doing here. Use the req.params instead of the req.query - it will make your life a lot easier for what we need.

    if (!query.uuid && !query.family && !query.species)
      throw new Error(
        'There are no "uuid", "family" nor "species" keys in query'
      );
    // if ((query.family) && (typeof query.family !== 'string')) throw new Error('"family" key value must be a string');
    // if ((query.species) && (typeof query.species !== 'string')) throw new Error('"species" key value must be a string');
    // if ((query.uuid) && (typeof query.uuid !== 'string')) throw new Error('"uuid" key value must be a string');
    // I think the typeof checks redundant since all queries have string values (right?)

    res.send(animals.searchAnimal(query));
  } catch (er) {
    console.error(er);
    res.status(400).send({ error: er.message });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

// animals cheatsheet:
// cat Felidae
// dog Canidae
// ferret Mustelidae
// goldfish Cyprinidae
// grizzly Ursidae
// seal Otariidae

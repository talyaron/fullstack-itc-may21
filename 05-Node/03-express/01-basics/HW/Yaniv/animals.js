const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); //https://www.npmjs.com/package/uuid
const Ajv = require("ajv");
const ajv = new Ajv();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const readJson = () => {
    const animalsArray = fs.readFileSync('animals.json');
    return JSON.parse(animalsArray);
}

// create a list of your favorite list (books, friends...); // a class defenition with js....
const Animals = /** @class */ (function () {
    function Animals() {
        this.animalsArray = readJson();
    }

    Animals.prototype.updateAnimalsJson = function() {
        fs.writeFileSync('animals.json',JSON.stringify(this.animalsArray));
    }

    Animals.prototype.addAnimal = function(animal) {
        this.animalsArray.push({...animal, uuid: uuidv4()});

        this.updateAnimalsJson();
    }

    Animals.prototype.deleteAnimal = function(animalUuid) {
        const animalToUpdateIndex = this.animalsArray.findIndex(animalItem => animalItem.uuid === animalUuid);

        if (animalToUpdateIndex === -1) return false;

        this.animalsArray = this.animalsArray.filter(animalItem => animalItem.uuid !== animalUuid);

        this.updateAnimalsJson();
        return true;
    }

    Animals.prototype.updateAnimal = function(animalUuid, animal) {
        const animalToUpdateIndex = this.animalsArray.findIndex(animalItem => animalItem.uuid === animalUuid);
        
        if (animalToUpdateIndex === -1) return false;

        if (animal.species) this.animalsArray[animalToUpdateIndex].species = animal.species;
        if (animal.sound) this.animalsArray[animalToUpdateIndex].sound = animal.sound;

        this.updateAnimalsJson();
        return true;
    }

    Animals.prototype.searchAnimal = function(animal) {
        let searchedAnimal = this.animalsArray;
        if (animal.species) searchedAnimal = searchedAnimal.filter(animalItem => animalItem.species === animal.species);
        if (animal.sound) searchedAnimal = searchedAnimal.filter(animalItem => animalItem.sound === animal.sound);
        if (animal.uuid) searchedAnimal = searchedAnimal.filter(animalItem => animalItem.uuid === animal.uuid);

        const result = (searchedAnimal.length === 0) ? 'No animal found for your query' : searchedAnimal;

        return result;
    }

    return Animals;
}());

const animals = new Animals();

// create a route for add an item
app.post('/add-animal', (req, res) => {
    try {
        const schema = {
            type: "object",
            properties: {
                species:    { type: "string" },
                sound:         { type: "string" }
            },
            required: ["species", "sound"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema);
        const { body } = req;
        const valid = validate(body);

        if (!valid) {
            // validate.errors.forEach(er => console.log(er.message));
            throw new Error('Invalid data structure');
        }

        animals.addAnimal(body);
        res.send(`${body.species} added to the animals kingdom`);

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }
});

// create a route for showing all items (method: GET)
app.get('/all-animals', (req, res) => {
    res.send(animals.animalsArray);
});

// create a route for deleting an item (method: DELETE)
app.delete('/:uuid', (req,res) => {
    try {
        const { body } = req;
        const { uuid } = req.params;

        if (!uuid) throw new Error('Route is missing "uuid" data, please work with the route as follows: "http://localhost:3000/:uuid-to-delete');
        if (Object.entries(body).length !== 0) throw new Error('Instead of JSON, please work with the route as follows: "http://localhost:3000/:uuid-to-delete');

        const uuidIsFound = animals.deleteAnimal(uuid);

        const domMsg = uuidIsFound ? `animal ${uuid} deleted successfully` : `${uuid} is not found`;

        res.send(domMsg);

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }
});

// create a route for updating an item (method: PUT)
app.put('/:uuid', (req, res)=>{
    try {
        const { body } = req;
        const { uuid } = req.params;

        if (!uuid) throw new Error('Route is missing "uuid" data, please work with the route as follows: "http://localhost:3000/:uuid-to-delete');
        if (!body.sound && !body.species) throw new Error('There is no "sound" nor "species" keys in JSON - no info to update for animal');
        if ((body.sound) && (typeof body.sound !== 'string')) throw new Error('"sound" key value must be a string');
        if ((body.species) && (typeof body.species !== 'string')) throw new Error('"species" key value must be a string');
        if (Object.entries(body).length > 2) throw new Error('Please only use "sound" and/or "species" keys in your JSON');
        
        const uuidIsFound = animals.updateAnimal(uuid, body);

        const domMsg = uuidIsFound ? `animal ${uuid} updated successfully` : `${uuid} is not found`;

        res.send(domMsg);

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }

});

// create a route to search items by name, id etc.  (method: GET)
app.get('/search-animal', (req, res)=> {
    try {
        const { query } = req;

        if (!query.uuid && !query.sound && !query.species) throw new Error('There are no "uuid", "sound" nor "species" keys in query');
        // if ((query.sound) && (typeof query.sound !== 'string')) throw new Error('"sound" key value must be a string');
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
// cat miaw
// dog wof
// cow moo
// sheep meee
// fox:
// option 1: Ring-ding-ding-ding-dingeringeding!
// option 2: Wa-pa-pa-pa-pa-pa-pow!
// option 3: Hatee-hatee-hatee-ho!
// option 4: Joff-tchoff-tchoffo-tchoffo-tchoff!

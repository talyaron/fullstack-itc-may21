// create a list of your favorite list (books, friends...);
// Create a route for add an item
// create a route for showing all items (method: GET)
// create a route for deleting an item (method: DELETE)
// create a route for updating an item (method: PUT)
// create a route to search items by name. id etc,  (method: GET)

import express from 'express';
const app = express();
const port = process.env.port || 4001;
import bodyParser from 'body-parser';

class Studients{
    lista = [];
    addStudient(studient){
        this.lista.push(studient);
    }
}

const studient = new Studients;

  app.get('/', function(req, res) {
    res.send('hello world');
  });

  app.post('/', function(req, res) {
    try {

        const { body } = req;

        const { name, id } = body;
        if(!name || !id){throw new Error('No name or id in data')}

        students.addStudent(body);

        console.log(students.list);

        res.send(req.body);
    } catch (e) {
        console.log(e)
        res.status(400).send({ error: e.message });
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  
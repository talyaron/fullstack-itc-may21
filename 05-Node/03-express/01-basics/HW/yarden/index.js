// create a list of your favorite list (books, friends...);
// Create a route for add an item
// create a route for showing all items (method: GET) *
// create a route for deleting an item (method: DELETE) *
// create a route for updating an item (method: PUT) *
// create a route to search items by name. id etc,  (method: GET) *

const fs = require('fs');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const hobbies = ["music", "sports", "coffee", "books", "beer", "food", "weddings", "travel"];

app.use(express.static('public'));
app.use(express.json())

app.get('/hobbies', (req, res) => {
    res.send(hobbies);
});

app.get('/hobbies/:hobbyNumber', (req, res) => {
    const hobby = req.params.hobbyNumber;
    if (hobbies.length < hobby+1) {
        res.sendStatus(404);
    }
    res.send(hobbies[hobby]);
});

app.post('/hobbies', (req, res) => {
    const body = req.body
    res.send(body);
    console.log(body);
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});


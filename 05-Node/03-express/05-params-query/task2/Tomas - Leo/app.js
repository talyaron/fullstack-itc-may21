/* create an app for list of jokes
create server - client

in the client:
 - add a joke and send it to the server
in the server, the server add the joke to array of jokes (in a clouser);

when the client loads, it loads all the jokes, and show them on the DOM; */

const express = require('express');
app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static('public'));

app.post('/setJoke', (req, res) => {
    let joke = req.body.joke
    console.log(joke)

    res.send({ send: "OK" })
});

app.get('/getJoke', (req, res) => {
    res.send({ joke })
})

app.listen(port, () => { console.log('Server listen on port', port) })
const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const jokes = [];

app.get('/addJoke', (req, res) => {
    const home = fs.readFileSync('index.html');
    res.send(home);
});

app.post('/addJoke', (req,res) => {
    console.log(req.body);
    // const joke = req.body.joke;
    // jokes.push(joke);
    // console.log(jokes,joke);

    res.send({status:"Completed"});
});

app.listen(port, ()=>{console.log(`listening on port ${port}...`)});
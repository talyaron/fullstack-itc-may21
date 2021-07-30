const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const jokes = [];

app.post('/addJoke', (req,res) => {
    console.log(req.body);
    // const joke = req.body.joke;
    // jokes.push(joke);
    // console.log(jokes,joke);

    res.send({status:"Completed"});
});

app.listen(port, ()=>{console.log(`listening on port ${port}...`)});
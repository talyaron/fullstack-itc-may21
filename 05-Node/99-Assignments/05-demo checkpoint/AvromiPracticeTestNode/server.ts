const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const {validateBody} = require('./middleware/middleware')

app.use(express.json());
app.use(express.static('public'))

const dataBase = [];

class User {
    name: string;
    imgSrc: string;
    prefColor: string;
    id: string;
    constructor(name: string, imgSrc: string, prefColor: string){
        this.name = name;
        this.imgSrc = imgSrc;
        this.prefColor = prefColor;
        this.id = Math.random().toString(16).slice(2);
    }
}

app.post('/addUser', validateBody, isW, (req, res) => {
const {name, imgSrc, prefColor} = req.body;
const user = new User(name, imgSrc, prefColor);
dataBase.push(user);
res.send(dataBase)
});
function isW(req, res, next) {
    console.log("working ");
    next();
};

app.get('/getUsers', (req, res) => {
    res.send(dataBase)
});

app.listen(PORT,()=>console.log('Server listen on port', PORT));
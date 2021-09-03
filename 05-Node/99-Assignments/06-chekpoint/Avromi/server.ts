const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static('public'))

const dataBase = [];

class Book {
    title: string;
    author: string;
    id: string;
    constructor(title:string, author:string) {
        this.title = title;
        this.author = author;
        this.id = Math.random().toString(16).slice(2);
    }
}

app.post('/addBook', (req, res) => {
    const { title, author } = req.body;
    const book = new Book(title, author);
    dataBase.push(book);
    console.log(dataBase);
    res.send(dataBase)
});

app.get('/getBooks', (req, res) => {
    res.send(dataBase)
});

app.listen(PORT, () => console.log('Server listen on port', PORT));
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
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;

        this.id = Math.random().toString(16).slice(2);
    }
}

app.post('/addBook', (req, res) => {
    try {
        const { title, author } = req.body;
        const book = new Book(title, author);
        dataBase.push(book);
        res.send(dataBase)
    } catch (error) {
        console.log(error.meesage);
    }
});

app.post('/searchBooks', (req, res) => {
    try {
        const { searchTerm } = req.body;
        if (searchTerm) {
            const searching: RegExp = new RegExp(searchTerm, 'i');
            let filteredBooks = dataBase.filter(book => searching.test(book.title))
            let filterAuthor = dataBase.filter(book => searching.test(book.author))
            let finalSearchArrayResults = filteredBooks.concat(filterAuthor)
            const map = {};
            for (const element of finalSearchArrayResults) {
                map[element.id] = element;
            }
            const newArray = Object.values(map);
            res.send(newArray)
        } if (!searchTerm) {
            res.send(dataBase)
        }
    } catch (error) {
        console.log(error.message);
    }
});



app.listen(PORT, () => console.log('Server listen on port', PORT));
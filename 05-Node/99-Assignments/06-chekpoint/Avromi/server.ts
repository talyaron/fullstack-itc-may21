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
        console.log(dataBase);
        res.send(dataBase)
    } catch (error) {
        console.log(error.meesage);
    }
});

app.post('/searchBooks', (req, res) => {
    try {
        const { searchTerm } = req.body;
        const searching: RegExp = new RegExp(searchTerm, 'i');
        let filteredBooks = dataBase.filter(book => searching.test(book.title))
        let filterAuthor = dataBase.filter(book => searching.test(book.author))
        let finalSearchArrayResults= filteredBooks.concat(filterAuthor)
        console.log(searchTerm);
        res.send(finalSearchArrayResults)
    } catch (error) {
        console.log(error.message);
    }
});

// app.get('/getBooks', (req, res) => {
//     res.send(dataBase)
// });

app.listen(PORT, () => console.log('Server listen on port', PORT));
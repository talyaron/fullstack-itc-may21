var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.static('public'));
var dataBase = [];
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
        this.id = Math.random().toString(16).slice(2);
    }
    return Book;
}());
app.post('/addBook', function (req, res) {
    try {
        var _a = req.body, title = _a.title, author = _a.author;
        var book = new Book(title, author);
        dataBase.push(book);
        console.log(dataBase);
        res.send(dataBase);
    }
    catch (error) {
        console.log(error.meesage);
    }
});
app.post('/searchBooks', function (req, res) {
    try {
        var searchTerm = req.body.searchTerm;
        var searching_1 = new RegExp(searchTerm, 'i');
        var filteredBooks = dataBase.filter(function (book) { return searching_1.test(book.title); });
        console.log(searchTerm);
        res.send(filteredBooks);
    }
    catch (error) {
        console.log(error.message);
    }
});
// app.get('/getBooks', (req, res) => {
//     res.send(dataBase)
// });
app.listen(PORT, function () { return console.log('Server listen on port', PORT); });

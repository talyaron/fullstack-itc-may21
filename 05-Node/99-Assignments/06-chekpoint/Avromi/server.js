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
        res.send(dataBase);
    }
    catch (error) {
        console.log(error.meesage);
    }
});
app.post('/searchBooks', function (req, res) {
    try {
        var searchTerm = req.body.searchTerm;
        if (searchTerm) {
            var searching_1 = new RegExp(searchTerm, 'i');
            var filteredBooks = dataBase.filter(function (book) { return searching_1.test(book.title); });
            var filterAuthor = dataBase.filter(function (book) { return searching_1.test(book.author); });
            var finalSearchArrayResults = filteredBooks.concat(filterAuthor);
            var map = {};
            for (var _i = 0, finalSearchArrayResults_1 = finalSearchArrayResults; _i < finalSearchArrayResults_1.length; _i++) {
                var element = finalSearchArrayResults_1[_i];
                map[element.id] = element;
            }
            var newArray = Object.values(map);
            res.send(newArray);
        }
        if (!searchTerm) {
            res.send(dataBase);
        }
    }
    catch (error) {
        console.log(error.message);
    }
});
app.listen(PORT, function () { return console.log('Server listen on port', PORT); });

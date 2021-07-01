var Book = /** @class */ (function () {
    function Book(author, country, title, year) {
        this.author = author;
        this.country = country;
        this.title = title;
        this.year = year;
        this.bookId = "id" + Math.random().toString(16).slice(2);
    }
    return Book;
}());
var totalArray = booksData;
var BooksArray = /** @class */ (function () {
    function BooksArray() {
    }
    BooksArray.prototype.addBook = function (book) {
        totalArray.unshift(book);
        renderBook(totalArray);
    };
    return BooksArray;
}());
var bookArrayInstance = new BooksArray();
bookArrayInstance.totalArray;
function handleDelete(bookId) {
    var reducedArray = totalArray.filter(function (book) {
        return bookId !== book.bookId;
    });
    totalArray = reducedArray;
    renderBook(reducedArray);
}
function updateTitle(bookId) {
    var titleToUpdate = totalArray.find(function (book) {
        return bookId === book.bookId;
    });
    // titleToUpdate.title = "Changed";
    renderBook(totalArray);
}
// Here, I want to make it so that when they click "update" a box pops up. They put something in and it uopdates the title. The JS is already grabbing the title (the onlick in the created string below). I added the function call to the onclick. I need to use another string literal to render what they write to the DOM, and updtae innerHTML, which will replace the title that is already there.
function writeNewTitle(bookId) {
    var newTitle;
    var user = prompt("Please enter a new title");
    if (user == null || user == "") {
        newTitle = "User cancelled.";
    }
    else {
        newTitle.innerHTML = "" + newTitle.title;
    }
    renderBook(totalArray);
}
var handleSubmit = function (ev) {
    ev.preventDefault();
    var author = ev.target.elements.author.value;
    var country = ev.target.elements.country.value;
    var title = ev.target.elements.title.value;
    var year = parseInt(ev.target.elements.year.value);
    var book = new Book(author, country, title, year);
    bookArrayInstance.addBook(book);
};
function renderBook(booksList) {
    var newBooks = "";
    var booksRoot = document.querySelector("#booksRoot");
    booksList.forEach(function (book) {
        var booktoDom = "<div class=\"form-wrapper-random\">\n    <div>\n        <p><span class = \"author\">Author: </span>" + book.author + "</p>\n    </div>\n    <div>\n    <p><span class = \"country\">Country: </span>" + book.country + "</p>\n    </div>\n    <div>\n    <p><span class = \"title\">Title: </span>" + book.title + "</p>\n    </div>\n    <div>\n    <p><span class = \"year\">Year: </span>" + book.year + "</p>\n    </div>\n    <button onclick='handleDelete(\"" + book.bookId + "\")'>Delete</button>\n    <button id = \"update\" onclick='updateTitle(\"" + book.bookId + "\"); writeNewTitle(\"" + book.bookId + "\")'>Update</button>\n  </div>";
        newBooks += booktoDom;
        booksRoot.innerHTML = newBooks;
    });
}
window.onload = renderBook(booksData);
var searchBooksbyTerm = function (totalArray, searchTerm) {
    var myRegEx = new RegExp(searchTerm, "gmi");
    var searchedBooks = totalArray.filter(function (book) {
        return myRegEx.test(book);
    });
    return searchedBooks;
};
var handleKeyUp = function (ev) {
    ev.preventDefault();
    var searchTerm = ev.target.value;
    var results = searchBooksbyTerm(totalArray, searchTerm);
    renderBook(results);
};
var handleRegExSubmit = function (ev) {
    ev.preventDefault();
    var searchTerm = ev.target.elements.input.value;
    var results = searchBooksbyTerm(totalArray, searchTerm);
    renderBook(results);
    // ev.target.reset();
};

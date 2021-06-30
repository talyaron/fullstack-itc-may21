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
// const addedBookArray = [];
var totalArray = booksData;
var BooksArray = /** @class */ (function () {
    function BooksArray() {
    }
    BooksArray.prototype.addBook = function (book) {
        // this.totalArray.push(book);
        // renderBook(this.totalArray);
        // const addedBookArray = [];
        totalArray.push(book);
        renderBook(totalArray);
        // When I"m rendering the book, the booksLIst is this.totalArray
    };
    return BooksArray;
}());
var bookArrayInstance = new BooksArray();
bookArrayInstance.totalArray;
function handleDelete(bookId) {
    console.log(bookArrayInstance.totalArray);
    var reducedArray = bookArrayInstance.totalArray.filter(function (book) {
        return bookId !== book.bookId;
    });
    // renderBook(reducedArray);
    // console.log(reducedArray);
    // When I'm deleting, booksList is assigned to reducedArray
}
// function updateTitle ()
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
    console.log(booksList);
    var booksRoot = document.querySelector("#booksRoot");
    booksList.forEach(function (book) {
        var booktoDom = "<div class=\"form-wrapper-random\">\n    <div>\n        <p><span class = \"author\">Author: </span>" + book.author + "</p>\n    </div>\n    <div>\n    <p><span class = \"country\">Country: </span>" + book.country + "</p>\n    </div>\n    <div>\n    <p><span class = \"title\">Title: </span>" + book.title + "</p>\n    </div>\n    <div>\n    <p><span class = \"year\">Year: </span>" + book.year + "</p>\n    </div>\n    <button onclick='handleDelete(\"" + book.bookId + "\")'>Delete</button>\n    <button onclick='updateTitle(\"" + book.bookId + "\")'>Update</button>\n  </div>";
        booksRoot.insertAdjacentHTML("afterbegin", booktoDom);
    });
}
window.onload = renderBook(booksData);
// Displaying everything in bookslist array
// Write  a function for handle Delete and another for handle Update
// function searchBooks(term: string, totalArray: Array<any>): any {
//   const searchTermReg: RegExp = new RegExp(term, "i");
//   return totalArray.filter((book) => searchTermReg.test(book.title));
// }

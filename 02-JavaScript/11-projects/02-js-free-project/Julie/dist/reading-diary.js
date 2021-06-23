var Book = /** @class */ (function () {
    function Book(bookName, author, pubYear, dateStarted, dateFinished, summary, mark) {
        this.bookName = bookName;
        this.author = author;
        this.pubYear = pubYear;
        this.dateStarted = dateStarted;
        this.dateFinished = dateFinished;
        this.summary = summary;
        this.mark = mark;
        this.BookId = "id" + Math.random().toString(16).slice(2);
    }
    return Book;
}());
var BooksArray = /** @class */ (function () {
    function BooksArray() {
        this.booksList = [];
    }
    BooksArray.prototype.addBook = function (book) {
        this.booksList.push(book);
        localStorage.setItem("myLibrary", JSON.stringify(this.booksList));
    };
    ;
    return BooksArray;
}());
var booksArray = new BooksArray();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var bookName = ev.target.elements.bookName.value;
    var author = ev.target.elements.author.value;
    var pubYear = parseInt(ev.target.elements.pubYear.value);
    var dateStarted = new Date(ev.target.elements.dateStarted.value);
    var dateFinished = new Date(ev.target.elements.dateFinished.value);
    var summary = ev.target.elements.summary.value;
    var mark = parseInt(ev.target.elements.mark.value);
    var book = new Book(bookName, author, pubYear, dateStarted, dateFinished, summary, mark);
    booksArray.addBook(book);
};

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
// bookArrayInstance.totalArray; //YS: Why is this here?
function handleDelete(bookId) {
    var reducedArray = totalArray.filter(function (book) {
        return bookId !== book.bookId;
    });
    totalArray = reducedArray;
    renderBook(reducedArray);
}
function updateTitle(bookPassId) {
    var user = window.prompt("Enter a new title: ");
    /*if (user == null || user == "") {
      //text = "User cancelled.";
    }*/
    totalArray.find(function (book) {
        if (bookPassId === book.bookId) { //book.bookID, you iterate the array until you get your id
            book.title = user;
        }
    });
    renderBook(totalArray);
}
// When they click "update" a box pops up. They put something in. It is supposed to update the title. The JS is already grabbing the title (the onlick in the created string below). I added the 2 function calls (writeNEwTitle and updateTitle) to the onclick. I realise I need to use another string literal to render what they write to the DOM, and updtae innerHTML, which will replace the title that is already there. I think this is the idea, but I haven't managed to get it to work (yet).
// YS: You were very close, you just had to join parts of the updateTitle with the writeNewTitle (all in one function).
/*function writeNewTitle(bookId: string) {
  let text;
  var user = window.prompt("Enter a new title: ");
    
  if (user == null || user == "") {
    text = "User cancelled.";
  } else {
    const userInput = user
  }


  //text.innerHTML = userInput; //YS: What is text? You should select the <p> element that has the title instead of text. pElementWithTitle.innerHtml
  renderBook(totalArray);
}*/
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
        var booktoDom = "<div class=\"form-wrapper-random\">\n    <div>\n        <p><span class = \"author\">Author: </span>" + book.author + "</p>\n    </div>\n    <div>\n    <p><span class = \"country\">Country: </span>" + book.country + "</p>\n    </div>\n    <div>\n    <p><span class = \"title\">Title: </span>" + book.title + "</p>\n    </div>\n    <div>\n    <p><span class = \"year\">Year: </span>" + book.year + "</p>\n    </div>\n    <button onclick='handleDelete(\"" + book.bookId + "\")'>Delete</button>\n    <button id = \"update\" onclick='updateTitle(\"" + book.bookId + "\")'>Update</button>\n  </div>";
        newBooks += booktoDom;
        booksRoot.innerHTML = newBooks;
    });
}
window.onload = renderBook(booksData);
var searchBooksbyTerm = function (totalArray, searchTerm) {
    var myRegEx = new RegExp(searchTerm, "gmi");
    var searchedBooks = totalArray.filter(function (book) { return myRegEx.test(book.author); } //YS: What are you filtering it by? should be book.title or book.author
    );
    return searchedBooks;
};
var handleKeyUp = function (ev) {
    ev.preventDefault();
    var searchTerm = ev.target.value;
    var results = searchBooksbyTerm(totalArray, searchTerm);
    renderBook(results);
};
/*const handleRegExSubmit = (ev: any) => {
  //YS: Why do you have this? Its not being used.
  const searchTerm: string = ev.target.elements.input.value;
  const results = searchBooksbyTerm(totalArray, searchTerm);
  renderBook(results);
  // ev.target.reset();
};*/

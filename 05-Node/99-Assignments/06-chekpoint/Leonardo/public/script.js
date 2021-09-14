/* 70 points:
Create an app for searching books


In the client create an input form with the book title and author.

post the book info to the server

also create a search form, for the author or book title
using regexp, the server, should look for the book title or the author and return matched books


render the results to the screen


5 points: validation
5 point: put the validation in middleware
5 points: save specific user info in JWT cookie/bearer
5: design patterns: (model, routes, controllers)
5 points: use classes
5 point: use typescript */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Function to add a new book
var createBook = document.querySelector('#formNewBook');
createBook.addEventListener('submit', newBook);
function newBook(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, bookname, author, year, bookDetails, booksInfo, books, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    _a = ev.target.elements, bookname = _a.bookname, author = _a.author, year = _a.year;
                    bookname = bookname.value;
                    author = author.value;
                    year = year.valueAsNumber;
                    if (!bookname || !author || !year)
                        throw new Error("Please complete all the fields");
                    ev.target.reset();
                    bookDetails = { bookname: bookname, author: author, year: year };
                    return [4 /*yield*/, axios.post("/books/newBook/", bookDetails)];
                case 1:
                    booksInfo = _b.sent();
                    if (booksInfo) {
                        swal("Good job!", booksInfo.data.message, "success");
                        books = booksInfo.data.allBooks.books;
                        renderBooks(books);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    swal("Ohhh no!", error_1.response.data, "warning");
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderBooks(booksToShow) {
    return __awaiter(this, void 0, void 0, function () {
        var root, html, booksInfo, books, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    root = document.querySelector('#root');
                    root.classList.remove('error__message');
                    html = '';
                    if (!!booksToShow) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios.get("/books/allBooks")];
                case 1:
                    booksInfo = _a.sent();
                    books = booksInfo.data.allBooks.books;
                    booksToShow = books;
                    _a.label = 2;
                case 2:
                    html = booksToShow.map(function (element) {
                        return ("<div class=\"product__item__wrapper\">\n                    <div>Book name: <b>" + element.bookname + " </b></div>\n                    <div>Author: <b>" + element.author + " </b></div>\n                    <div>Year: <b>" + element.year + " </b></div>\n                    <div class=\"product__item__options\" id=\"editArea\">\n                    <i class=\"fas fa-trash-alt button--pointer\" onclick=\"deleteBook('" + element.uuid + "', '" + element.bookname + "')\"></i>\n                    <i class=\"fas fa-edit button--pointer\" onclick=\"editBook('" + element.uuid + "', '" + element.bookname + "', '" + element.author + "', '" + element.year + "')\"></i>\n                    </div>\n                </div>");
                    }).join('');
                    root.innerHTML = html;
                    if (!html) {
                        root.innerHTML = 'Book or Author not found';
                        root.classList.add('error__message');
                    }
                    ;
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    swal("Ohhh no!", error_2.response.data, "warning");
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteBook(bookId, bookname) {
    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover " + bookname + "!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then(function (willDelete) {
            if (willDelete) {
                deleteItem(bookId);
            }
            else {
                swal("Your book is safe!");
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function deleteItem(id) {
    return __awaiter(this, void 0, void 0, function () {
        var booksInfo, books, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios["delete"]("/books/deleteBook/" + id)];
                case 1:
                    booksInfo = _a.sent();
                    books = booksInfo.data.allBooks.books;
                    renderBooks(books);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//Id to handle the edit
var bookId;
function editBook(id, bookname, author, year) {
    try {
        if (!modalUpload)
            throw new Error('There is a problem finding modalEdit from HTML');
        modalUpload.style.display = "block";
        modalUpload.classList.add("showModal");
        var formEdit = document.querySelector("#formEdit");
        if (!formEdit)
            throw new Error('There is a problem finding form from HTML');
        var html = "\n        <h1> Edit book </h1>\n\n            <div class=\"form__wrapper wrapper__register\">\n                <label for=\"bookname\">Bookname:</label>\n                <input type=\"text\" name=\"bookname\" placeholder=\"Enter your book name\" value=\"" + bookname + "\" maxlength=\"50\" required>\n            </div>\n\n            <div class=\"form__wrapper wrapper__register\">\n                <label for=\"text\">Author:</label>\n                <input type=\"text\" name=\"author\" placeholder=\"Enter the author\" value=\"" + author + "\" maxlength=\"50\" required>\n            </div>\n\n            <div class=\"form__wrapper wrapper__register\">\n                <label for=\"year\">Year of the book:</label>\n                <input type=\"number\" name=\"year\" placeholder=\"Enter the year of the book\" value=\"" + year + "\" min=\"1900\" max=\"2021\">\n            </div>\n            \n            <input class=\"form__submit--newuser\" type=\"submit\" value=\"Update book\">";
        bookId = id;
        formEdit.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//Handle Edit
function handleEdit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, bookname, author, year, bookDetails, booksInfo, books, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = ev.target.elements, bookname = _a.bookname, author = _a.author, year = _a.year;
                    bookname = bookname.value;
                    author = author.value;
                    year = year.valueAsNumber;
                    if (!bookname || !author || !year)
                        throw new Error("You need to complete all the fields");
                    bookDetails = { bookname: bookname, author: author, year: year };
                    if (!modalUpload)
                        throw new Error('There is a problem finding modalEdit from HTML');
                    modalUpload.style.display = "none";
                    ev.target.reset();
                    return [4 /*yield*/, axios.put("/books/updateBook/" + bookId, bookDetails)];
                case 1:
                    booksInfo = _b.sent();
                    books = booksInfo.data.allBooks.books;
                    renderBooks(books);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    swal("Ohhh no!", "" + error_4, "warning");
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
//Function to do a filter in the search input
function handleSearch() {
    return __awaiter(this, void 0, void 0, function () {
        var searchBook, regEx, foundBook, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    searchBook = document.querySelector('#search');
                    regEx = searchBook.value;
                    if (!regEx) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios.post("/books/searchBook/" + regEx)];
                case 1:
                    foundBook = _a.sent();
                    renderBooks(foundBook.data.foundBook);
                    return [3 /*break*/, 3];
                case 2:
                    renderBooks(null);
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 5];
                case 5:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;

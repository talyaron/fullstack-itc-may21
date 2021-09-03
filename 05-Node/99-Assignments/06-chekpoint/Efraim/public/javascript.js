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
function handleBookSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var bookName, author, result, bookArray, er_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    bookName = ev.target.children.bookname.value;
                    author = ev.target.children.author.value;
                    return [4 /*yield*/, axios.post("/books/addBook", {
                            bookName: bookName,
                            author: author
                        })];
                case 1:
                    result = _a.sent();
                    if (result.data.token) {
                        localStorage.setItem('token', JSON.stringify(result.data.token));
                    }
                    bookArray = result.data.bookarray.books;
                    return [4 /*yield*/, renderBooks(bookArray)];
                case 2:
                    _a.sent();
                    alert("Book Added & Token Created Succesfully!");
                    ev.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    er_1 = _a.sent();
                    console.error(er_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var form = document.querySelector(".my-form");
form.addEventListener("submit", handleBookSubmit);
function renderBooks(bookarray) {
    return __awaiter(this, void 0, void 0, function () {
        var html_1, bookHolder;
        return __generator(this, function (_a) {
            try {
                html_1 = '';
                bookHolder = document.querySelector(".holder");
                bookarray.map(function (books) {
                    html_1 += "<div class=\"holder__book-card\" id=\"" + books.bookID + "\">\n                <label class=\"title\">Book Title:</label>\n                <input class=\"holder__book-card__name\" value=\"" + books.name + "\" id=\"" + books.bookID + "name\">\n                <label>Author:</label>\n                <input class=\"holder__book-card__author\" value=\"" + books.author + "\" id=\"" + books.bookID + "author\">\n                <button class='holder__book-card__update' onclick='updateBook(\"" + books.bookID + "\")'>Update</button>\n                <button class=\"holder__book-card__delete\" onclick=\"deleteBook('" + books.bookID + "')\">Delete</button>\n                </div>";
                });
                bookHolder.innerHTML = html_1;
            }
            catch (er) {
                console.error(er);
            }
            return [2 /*return*/];
        });
    });
}
function displayBooksOnLoad() {
    return __awaiter(this, void 0, void 0, function () {
        var result, er_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/books/getAllBooks")];
                case 1:
                    result = _a.sent();
                    if (result.data.books) {
                        renderBooks(result.data.books);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    er_2 = _a.sent();
                    console.error(er_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
window.addEventListener("load", displayBooksOnLoad);
function searchTitleKeyUp(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var searchTerm, results, er_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    searchTerm = ev.target.value;
                    return [4 /*yield*/, axios.post("/books/searchBookTitle", {
                            searchTerm: searchTerm
                        })];
                case 1:
                    results = _a.sent();
                    return [4 /*yield*/, renderBooks(results.data)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    er_3 = _a.sent();
                    console.error(er_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
document.getElementById("searching-title").addEventListener("keyup", searchTitleKeyUp);
function searchAuthorKeyUp(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var searchTerm, results, er_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    searchTerm = ev.target.value;
                    return [4 /*yield*/, axios.post("/books/searchBookAuthor", {
                            searchTerm: searchTerm
                        })];
                case 1:
                    results = _a.sent();
                    return [4 /*yield*/, renderBooks(results.data)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    er_4 = _a.sent();
                    console.error(er_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
document.getElementById("searching-author").addEventListener("keyup", searchAuthorKeyUp);
function deleteBook(bookID) {
    return __awaiter(this, void 0, void 0, function () {
        var newBookArray, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, axios["delete"]("/books/deleteBooks/" + bookID)];
                case 1:
                    newBookArray = _a.sent();
                    return [4 /*yield*/, renderBooks(newBookArray.data.books)];
                case 2:
                    _a.sent();
                    alert("book deleted!");
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateBook(bookID) {
    return __awaiter(this, void 0, void 0, function () {
        var newBookName, newBookAuthor, updatedBooks, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    newBookName = document.getElementById(bookID + "name");
                    newBookAuthor = document.getElementById(bookID + "author");
                    return [4 /*yield*/, axios.put("/books/updateBook?id=" + bookID, {
                            bookName: newBookName.value,
                            author: newBookAuthor.value
                        })];
                case 1:
                    updatedBooks = _a.sent();
                    return [4 /*yield*/, renderBooks(updatedBooks.data.books)];
                case 2:
                    _a.sent();
                    alert("Update Succesful!");
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}

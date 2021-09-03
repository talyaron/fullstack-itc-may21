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
var _this = this;
getData(null, null);
var addBookForm = document.querySelector('#add-book-form');
var searchBooksForm = document.querySelector('#search-books-form');
var searchBooksTitleInput = document.querySelector('#search-books-title');
var searchBooksAuthorInput = document.querySelector('#search-books-author');
var resetBtn = document.querySelector('#reset');
var Books = /** @class */ (function () {
    function Books(books) {
        this.books = books;
    }
    Books.prototype.renderBooks = function () {
        try {
            var booksRoot = document.querySelector(".books");
            for (var i = 0; i < searchBooksForm.children.length; i++) {
                searchBooksForm.children[i].disabled = false;
            }
            var booksHtml_1 = "<h2 class=\"books__item books__item--header\">Books</h2>";
            booksRoot.innerHTML = booksHtml_1;
            this.books = this.books.sort(function (a, b) {
                var aId = a.author;
                var bId = b.author;
                if (aId < bId) {
                    return -1;
                }
                if (aId > bId) {
                    return 1;
                }
                return 0;
            });
            this.books.forEach(function (book) {
                booksHtml_1 +=
                    "<div class=\"books__item books__item--book book\" id=\"" + book.bookUuid + "\">\n            <div class=\"book__item book__item--title\">" + book.title + "</div>\n            <div class=\"book__item book__item--author\">" + book.author + "</div>\n          </div>";
            });
            booksRoot.innerHTML = booksHtml_1;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Books;
}());
addBookForm.addEventListener('submit', function (ev) { return handleAddBook(ev); });
searchBooksTitleInput.addEventListener('keyup', function (ev) { return handleSearchBook(ev); });
searchBooksAuthorInput.addEventListener('keyup', function (ev) { return handleSearchBook(ev); });
resetBtn.addEventListener('click', function (ev) { return handleReset(ev); });
var handleAddBook = function (ev) { return __awaiter(_this, void 0, Promise, function () {
    var formElements, title, author, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                ev.preventDefault();
                formElements = ev.target.elements;
                title = formElements.bookTitle.value;
                author = formElements.bookAuthor.value;
                return [4 /*yield*/, postBook(title, author)];
            case 1:
                _a.sent();
                return [4 /*yield*/, getData(null, null)];
            case 2:
                _a.sent();
                ev.target.reset();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handleSearchBook = function (ev) {
    try {
        var formElements = ev.target.parentElement.elements;
        var title = formElements.bookTitle.value;
        var author = formElements.bookAuthor.value;
        if ((title === '') && (author === ''))
            return;
        getData(title, author);
        resetBtn.style.display = 'unset';
    }
    catch (error) {
        console.error(error);
    }
};
var handleReset = function (ev) {
    try {
        getData(null, null);
        resetBtn.style.display = 'none';
    }
    catch (error) {
        console.error(error);
    }
};

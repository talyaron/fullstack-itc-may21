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
var requestCookie = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, axios.get('books/allBooks')];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                return [2 /*return*/];
        }
    });
}); };
var getAllBooks = function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, data, error, books, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios('books/allBooks')];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                books = data.books;
                renderBooks(books);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var addBook = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, author, _a, data, error, books, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                event.preventDefault();
                name = event.target.elements[0].value;
                author = event.target.elements[1].value;
                if (!name || !author)
                    throw new Error('Missing input');
                return [4 /*yield*/, axios.post('/books/addBook', { name: name, author: author })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                if (error)
                    throw error;
                books = data.books;
                event.target.reset();
                renderBooks(books);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var renderBooks = function (books) {
    try {
        var booksWrapper = document.querySelector('.booksWrapper');
        var htmlPattern_1 = '';
        books.forEach(function (b) {
            htmlPattern_1 +=
                "<div class=\"book\" id=\"" + b.id + "\">\n                <h3 class=\"book__name\">" + b.name + "</h3>\n                <h4 class=\"book__author\">By " + b.author + "</h4>\n                </div>\n            ";
        });
        booksWrapper.innerHTML = htmlPattern_1;
    }
    catch (error) {
    }
};
var handleSearch = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var searchBar, search, _a, data, error, results, booksWrapper, html, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                searchBar = document.querySelector('#search');
                if (!searchBar)
                    throw new Error('Can`t access the searchbar');
                search = searchBar.value;
                return [4 /*yield*/, axios.post('/books/searchBooks', { search: search })];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                results = data.results;
                if (results.length === 0) {
                    booksWrapper = document.querySelector('.booksWrapper');
                    html = "<h2 class=\"not-found-message\">No books or authors found with the term \"" + search + "\".</h2>";
                    booksWrapper.innerHTML = html;
                }
                else {
                    renderBooks(results);
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                return [3 /*break*/, 3];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };

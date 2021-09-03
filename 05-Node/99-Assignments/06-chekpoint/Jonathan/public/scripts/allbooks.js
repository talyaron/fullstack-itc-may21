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
var body = document.querySelector('#body');
var inputSearch = document.querySelector('#search');
body.onload = getBooks;
inputSearch.onkeyup = searchByTitle;
function getBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var getBooks_1, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getAllBooksAxios()];
                case 1:
                    getBooks_1 = _a.sent();
                    data = getBooks_1.data;
                    renderBooks(data.books);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    alert(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderBooks(book) {
    try {
        var html_1 = '';
        var rootBooks = document.querySelector('#rootBooks');
        if (!rootBooks)
            throw new Error("No board to show");
        if (book.books.length > 0) {
            html_1 += "<table id=\"books\">      \n         <thead>\n        <tr>\n            <th>Title</th>\n            <th>Author</th>\n            <th>\uD83D\uDD27</th>\n        <tr>\n        </thead>\n        <tbody>";
            book.books.forEach(function (book) {
                var id = book.id, title = book.title, author = book.author;
                html_1 += "<tr>\n                    <td>" + title + "</td>\n                    <td>" + author + "</td>\n                    <td><i class=\"fas fa-trash delete\" onclick='deleteBook(\"" + id + "\")'></i> \n                       \n                 </tr>";
            });
            html_1 += "   </tbody>\n                    </table>";
        }
        rootBooks.innerHTML = html_1;
    }
    catch (e) {
        alert(e);
    }
}
function searchByTitle() {
    return __awaiter(this, void 0, void 0, function () {
        var searchTitle, getTitles, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    searchTitle = {
                        searchTitle: inputSearch.value
                    };
                    if (!inputSearch.value) return [3 /*break*/, 2];
                    return [4 /*yield*/, searchByTitleAxios(searchTitle)];
                case 1:
                    getTitles = _a.sent();
                    data = getTitles.data;
                    renderBooks(data);
                    return [3 /*break*/, 3];
                case 2:
                    getBooks();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    alert(e_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteBook_1, data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, deleteBookAxios(id)];
                case 1:
                    deleteBook_1 = _a.sent();
                    data = deleteBook_1.data;
                    if (data.books.books.length > 0) {
                        renderBooks(data.books);
                    }
                    else {
                        alert("This is the last book in our store, you back to the first page to add new books to the list");
                        window.location.href = 'index.html';
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    alert(e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}

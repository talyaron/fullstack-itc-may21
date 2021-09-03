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
var body = document.querySelector('#body');
var form = document.getElementById('form');
var postBook = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, bookName, dataBook, postUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                name = event.target.elements.name.value;
                bookName = event.target.elements.bookName.value;
                dataBook = { name: name, bookName: bookName };
                return [4 /*yield*/, axios.post('/user/postUser', dataBook)];
            case 1:
                postUser = _a.sent();
                console.log(postUser);
                return [2 /*return*/];
        }
    });
}); };
form.addEventListener('submit', postBook);
var renderUsers = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var root, getUser, users, html;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                root = document.getElementById('root');
                return [4 /*yield*/, axios.get('/user/getUsers')];
            case 1:
                getUser = _a.sent();
                users = getUser.data.users;
                data = users;
                html = data.map(function (element) {
                    return "\n     <div class=\"books\">\n     <p>" + element.name + "</p>\n     <p>" + element.bookName + "</p>\n     </div>\n     \n     \n     ";
                }).join("");
                root.innerHTML = html;
                return [2 /*return*/];
        }
    });
}); };
var inputSearch = document.querySelector('#search');
function searchByFirstnameAxios(searchFirstname) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.put('/user/searchBook', searchFirstname)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
inputSearch.onkeyup = searchByFirstname;
function searchByFirstname() {
    return __awaiter(this, void 0, void 0, function () {
        var root, searchFirstname, getSearchByFirstname, data, error, html, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    root = document.getElementById('root');
                    searchFirstname = {
                        name: inputSearch.value
                    };
                    console.log(searchFirstname);
                    return [4 /*yield*/, searchByFirstnameAxios(searchFirstname)];
                case 1:
                    getSearchByFirstname = _a.sent();
                    console.log(getSearchByFirstname);
                    data = getSearchByFirstname.data, error = getSearchByFirstname.error;
                    html = data.map(function (element) {
                        return "\n            <div class=\"books\">\n            <p>" + element.name + "</p>\n            <p>" + element.bookName + "</p>\n            </div>\n            \n            \n            ";
                    }).join("");
                    root.innerHTML = html;
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var getUser = function () { return __awaiter(_this, void 0, void 0, function () {
    var getUsers, dataUsers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.get("/user/getUsers")];
            case 1:
                getUsers = _a.sent();
                dataUsers = getUsers.data.users;
                renderUsers(dataUsers);
                return [2 /*return*/];
        }
    });
}); };
getUser();

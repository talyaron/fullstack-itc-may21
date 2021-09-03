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
var identProduct;
var searchName;
var renderUser = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var root, getUser, users, html;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                root = document.getElementById("root");
                return [4 /*yield*/, axios.get("/user/getAllUsers")];
            case 1:
                getUser = _a.sent();
                users = getUser.data.allUsers.users;
                data = users;
                html = data
                    .map(function (element) {
                    return "\n        <div  style=\"background:" + element.color + ";\" class=\"user\">\n        \n\n        <div class=\"user__image\">\n         <img src=\"" + element.image + "\" alt=\"imageUser\">\n        </div>\n\n\n        <div class=\"user__name\">\n        <p>" + element.name + "</p>\n        </div>\n    \n        <button onclick=\"delteUsers('" + element.id + "')\">Delete</button>\n        <button\n        type=\"button\"\n        class=\"btn btn-primary itemInfo\"\n        data-bs-toggle=\"modal\"\n        data-bs-target=\"#exampleModal\"\n        data-bs-whatever=\"@getbootstrap\"\n        onclick='bringInfoUsers(\"" + element.id + "\")'\n        checked\n      >\n        Edit\n      </button>\n      <div\n        class=\"modal fade\"\n        id=\"exampleModal\"\n        tabindex=\"-1\"\n        aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\n              <button\n                type=\"button\"\n                class=\"btn-close\"\n                data-bs-dismiss=\"modal\"\n                aria-label=\"Close\"\n              ></button>\n            </div>\n            <div class=\"modal-body\">\n              <form id=\"formEdit\" onsubmit=\"handleEditUser(event)\">\n                <div class=\"container__input-name\">\n                  <legend>Pokemon Name</legend>\n                  <input type=\"text\" name=\"name\" class=\"name\" />\n                </div>\n                <input type=\"color\" name=\"color\" class=\"color\" />\n\n                <input type=\"text\" name=\"image\" class=\"image\" />\n      \n                <div class=\"container__button\">\n                  <button class=\"btn btn-warning\" type=\"submit\">Send</button>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">\n                Close\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n\n        \n        </div>\n        ";
                })
                    .join("");
                root.innerHTML = html;
                return [2 /*return*/];
        }
    });
}); };
var getUser = function () { return __awaiter(_this, void 0, void 0, function () {
    var getUser, dataUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.get("/user/getAllUsers")];
            case 1:
                getUser = _a.sent();
                dataUser = getUser.data.allUsers.users;
                renderUser(dataUser);
                return [2 /*return*/];
        }
    });
}); };
var delteUsers = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var deleteUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.post("/user/deleteUser/" + id)];
            case 1:
                deleteUser = _a.sent();
                renderUser(deleteUser);
                return [2 /*return*/];
        }
    });
}); };
var bringInfoUsers = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var bringId, name, color, image;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.get("/user/bringInfoUser/" + id)];
            case 1:
                bringId = _a.sent();
                name = document.querySelector('.name');
                color = document.querySelector('.color');
                image = document.querySelector('.image');
                name.value = bringId.data.name;
                color.value = bringId.data.color;
                image.value = bringId.data.image;
                identProduct = id;
                return [2 /*return*/];
        }
    });
}); };
var handleEditUser = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, color, image, newData, editUser, updateData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                name = event.target.elements.name.value;
                color = event.target.elements.color.value;
                image = event.target.elements.image.value;
                newData = { name: name, color: color, image: image };
                return [4 /*yield*/, axios.post("/user/updateUser/" + identProduct, newData)];
            case 1:
                editUser = _a.sent();
                updateData = editUser.data.allUsers;
                renderUser(updateData);
                return [2 /*return*/];
        }
    });
}); };
function searchByFirstnameAxios(searchFirstname) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/user/searchByFirstname', searchFirstname)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
var inputSearch = document.querySelector('#search');
inputSearch.onkeyup = searchByFirstname;
console.log(inputSearch.value);
function searchByFirstname() {
    return __awaiter(this, void 0, void 0, function () {
        var searchFirstname, getSearchByFirstname, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchFirstname = {
                        searchFirstname: inputSearch.value
                    };
                    return [4 /*yield*/, searchByFirstnameAxios(searchFirstname)];
                case 1:
                    getSearchByFirstname = _a.sent();
                    console.log(getSearchByFirstname.data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
searchByFirstname();
// const searchBars = async (event) => {
//  const  searchName = event.target.value;
//  const pep = {name:searchName}
//   const searchBar = await axios.put("/user/searchName",pep );
//   console.log(searchBar);
// }
getUser();

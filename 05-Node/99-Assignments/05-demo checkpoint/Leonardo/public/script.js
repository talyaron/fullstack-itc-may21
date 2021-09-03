/* 70 points:
Create an app for sign-in users and displaying all of the users


Create an input form with name, image (URL), and preferred color (with color picker)
The route should respond with the data of all the users.
Render all the users, with their images, in cards that have the user's preferred color

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
//Function to add a new user
var createUser = document.querySelector('#formNewUser');
createUser.addEventListener('submit', newUser);
function newUser(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, picture, color, userDetails, usersInfo, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    _a = ev.target.elements, username = _a.username, picture = _a.picture, color = _a.color;
                    username = username.value;
                    picture = picture.value;
                    color = color.value;
                    if (!username || !picture || !color)
                        throw new Error("Please complete all the fields");
                    ev.target.reset();
                    userDetails = { username: username, picture: picture, color: color };
                    return [4 /*yield*/, axios.post("/users/newUser/", userDetails)];
                case 1:
                    usersInfo = _b.sent();
                    if (usersInfo) {
                        swal("Good job!", usersInfo.data.message, "success");
                        renderUsers(usersInfo.data.allUsers.users);
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
function renderUsers(usersToShow) {
    return __awaiter(this, void 0, void 0, function () {
        var root, html, usersInfo, users, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    root = document.querySelector('#root');
                    root.classList.remove('error__message');
                    html = '';
                    if (!!usersToShow) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios.get("/users/allUsers")];
                case 1:
                    usersInfo = _a.sent();
                    users = usersInfo.data.allUsers.users;
                    usersToShow = users;
                    _a.label = 2;
                case 2:
                    html = usersToShow.map(function (element) {
                        return ("<div style=\"background-color: " + element.color + "\" class=\"product__item__wrapper\">\n                    <img class=\"product__item__image\" onclick=\"saveUserCookie('" + element.uuid + "')\" src=\"" + element.picture + "\" alt=\"Picture of the user\">\n                    <div><b>" + element.username.toUpperCase() + " </b></div>\n                    <div class=\"product__item__options\" id=\"editArea\">\n                    <i class=\"fas fa-trash-alt button--pointer\" onclick=\"deleteUser('" + element.uuid + "', '" + element.username + "')\"></i>\n                    <i class=\"fas fa-edit button--pointer\" onclick=\"editUser('" + element.uuid + "', '" + element.username + "', '" + element.picture + "', '" + element.color + "')\"></i>\n                    </div>\n                </div>");
                    }).join('');
                    root.innerHTML = html;
                    if (!html) {
                        root.innerHTML = 'User not found';
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
function saveUserCookie(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/users/setCookie/" + userId)];
                case 1:
                    _a.sent();
                    swal("Good job!", "Cookie set propertly", "success");
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
function deleteUser(userId, username) {
    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover " + username + "!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then(function (willDelete) {
            if (willDelete) {
                deleteItem(userId);
            }
            else {
                swal("Your user is safe!");
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function deleteItem(id) {
    return __awaiter(this, void 0, void 0, function () {
        var usersInfo, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios["delete"]("/users/deleteUser/" + id)];
                case 1:
                    usersInfo = _a.sent();
                    renderUsers(usersInfo.data.allUsers.users);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//Id to handle the edit
var userId;
function editUser(id, username, picture, color) {
    try {
        if (!modalUpload)
            throw new Error('There is a problem finding modalEdit from HTML');
        modalUpload.style.display = "block";
        modalUpload.classList.add("showModal");
        var formEdit = document.querySelector("#formEdit");
        if (!formEdit)
            throw new Error('There is a problem finding form from HTML');
        var html = "\n        <h1> Edit user </h1>\n\n        <div class=\"form__wrapper wrapper__register\">\n                <label for=\"username\">Username:</label>\n                <input type=\"text\" name=\"username\" placeholder=\"Enter your username\" value=\"" + username + "\" maxlength=\"35\" required>\n            </div>\n\n            <div class=\"form__wrapper wrapper__register\">\n                <label for=\"picture\">Image:</label>\n                <input type=\"text\" name=\"picture\" placeholder=\"Enter your image URL\" value=\"" + picture + "\" required>\n            </div>\n\n            <div class=\"form__wrapper wrapper__register\">\n                <label for=\"color\">Favourite color:</label>\n                <input type=\"color\" name=\"color\" placeholder=\"Enter your favourite color\" value=" + color + ">\n            </div>\n            \n            <input type=\"submit\" value=\"Update user\">";
        userId = id;
        formEdit.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//Handle Edit
function handleEdit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, picture, color, userDetails, usersInfo, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = ev.target.elements, username = _a.username, picture = _a.picture, color = _a.color;
                    username = username.value;
                    picture = picture.value;
                    color = color.value;
                    if (!username || !picture || !color)
                        throw new Error("You need to complete all the fields");
                    userDetails = { username: username, picture: picture, color: color };
                    if (!modalUpload)
                        throw new Error('There is a problem finding modalEdit from HTML');
                    modalUpload.style.display = "none";
                    ev.target.reset();
                    return [4 /*yield*/, axios.put("/users/updateUser/" + userId, userDetails)];
                case 1:
                    usersInfo = _b.sent();
                    renderUsers(usersInfo.data.allUsers.users);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _b.sent();
                    swal("Ohhh no!", "" + error_5, "warning");
                    console.error(error_5);
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
        var searchUser, regEx, searching_1, usersCreated, usersFiltered, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchUser = document.querySelector('#search');
                    regEx = searchUser.value;
                    searching_1 = new RegExp(regEx, 'i');
                    return [4 /*yield*/, axios.get("/users/allUsers")];
                case 1:
                    usersCreated = _a.sent();
                    usersFiltered = usersCreated.data.allUsers.users.filter(function (user) { return searching_1.test(user.username); });
                    renderUsers(usersFiltered);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;

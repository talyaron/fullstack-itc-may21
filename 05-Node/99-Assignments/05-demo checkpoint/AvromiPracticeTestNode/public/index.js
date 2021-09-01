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
var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
window.onload = function () {
    getAllUsers();
};
function handleSubmit(ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var imgSrc = ev.target.elements.imgSrc.value;
    var prefColor = ev.target.elements.prefColor.value;
    console.log(name, imgSrc, prefColor);
    addUser(name, imgSrc, prefColor);
    ev.target.reset();
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var res, allUsers, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios('/getUsers')];
                case 1:
                    res = _a.sent();
                    allUsers = res.data;
                    render(allUsers);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function addUser(name, imgSrc, prefColor) {
    return __awaiter(this, void 0, void 0, function () {
        var res, allUsers, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/addUser", { name: name, imgSrc: imgSrc, prefColor: prefColor })];
                case 1:
                    res = _a.sent();
                    allUsers = res.data;
                    console.log(allUsers);
                    render(allUsers);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function render(data) {
    try {
        var root = document.querySelector(".root");
        var html_1 = "";
        data.forEach(function (user) {
            html_1 += "<div class=\"card\">\n<img src=\"" + user.imgSrc + "\" alt=\"" + user.name + "\" style=\"width:100%\">\n<h1>" + user.name + "</h1>\n\n<div class=\"color\" style=\"background-color:" + user.prefColor + ";\"></div>\n\n</div>";
        });
        root.innerHTML = html_1;
    }
    catch (error) {
        console.log(error.message);
    }
}

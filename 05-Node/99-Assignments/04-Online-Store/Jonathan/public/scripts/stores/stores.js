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
//btn
var btnReturn = document.querySelector("#btn-return");
var clickContainer = document.querySelector(".container");
//addEventListener
btnReturn.addEventListener("click", returnLoginPage);
clickContainer.addEventListener("click", sendToMainSports);
function renderPage(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var responseUser, role, inputMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    return [4 /*yield*/, axios.get('/user/readCookie')];
                case 1:
                    responseUser = _a.sent();
                    role = responseUser.data.user.role;
                    inputMessage = document.querySelector('.message');
                    if (role === 'public') {
                        inputMessage.innerText = 'Welcome To Jonathans Store, pick which store do you want to buy';
                    }
                    else {
                        inputMessage.innerText = "Welcome " + responseUser.data.user.username + " , pick which store do you want to work";
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function sendToMainSports(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var store_1, response, params, emailUser_1, responseAllProducts, data, responseUser, role, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    if (ev.target.className.indexOf('container__store_') === -1)
                        return [2 /*return*/];
                    if (ev.target.className === 'container__store__1 container__store') {
                        store_1 = { store: "football" };
                    }
                    else {
                        store_1 = { store: "tennis" };
                    }
                    return [4 /*yield*/, axios.post('/user/addSection', store_1)];
                case 2:
                    response = _a.sent();
                    params = new URLSearchParams(window.location.search);
                    emailUser_1 = params.get('email');
                    return [4 /*yield*/, axios.get("/store/getStore/" + store_1.store)];
                case 3:
                    responseAllProducts = _a.sent();
                    data = responseAllProducts.data;
                    return [4 /*yield*/, axios.get('/user/readCookie')];
                case 4:
                    responseUser = _a.sent();
                    role = responseUser.data.user.role;
                    if (role === 'public') {
                        if (data.allStores === undefined)
                            throw new Error('No stock available');
                        swal("" + response.data.ok, { icon: "success", button: false });
                        setInterval(function () {
                            window.location.href = "main.html?email=" + emailUser_1 + "?store=" + store_1.store;
                        }, 1000);
                    }
                    else {
                        swal("" + response.data.ok, { icon: "success", button: false });
                        setInterval(function () {
                            window.location.href = "main.html?email=" + emailUser_1 + "?store=" + store_1.store;
                        }, 1000);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    swal('Oops!', "" + e_1, "error");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function returnLoginPage() {
    window.location.href = 'login.html';
}

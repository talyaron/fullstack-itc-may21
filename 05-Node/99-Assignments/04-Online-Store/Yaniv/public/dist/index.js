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
function welcome() {
    return __awaiter(this, void 0, void 0, function () {
        var userWelcome, _a, isAdmin_1, storeUuid_1, h1Text, message, h1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/user/welcome")];
                case 1:
                    userWelcome = _b.sent();
                    _a = userWelcome.data, isAdmin_1 = _a.isAdmin, storeUuid_1 = _a.storeUuid, h1Text = _a.h1Text, message = _a.message;
                    h1 = document.querySelector('.header__item--h1');
                    h1.innerHTML = h1Text;
                    swal({
                        title: "\"" + h1Text + "\" virtual mall",
                        text: message,
                        button: "Great, lets go!"
                    }).then(function () {
                        if (isAdmin_1)
                            window.location.href = "./store.html?storeUuid=" + storeUuid_1;
                        else
                            window.location.href = './stores.html';
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
welcome();
var adminLoginForm = document.querySelector('#admin-login-form');
var shopperLoginForm = document.querySelector('#shopper-login-form');
adminLoginForm.addEventListener('submit', login);
shopperLoginForm.addEventListener('submit', login);
function login(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, adminLoginForm_1, loginAdminUser, _b, title, text, storeUuid_2, isLoggedIn, error_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    _a = ev.target.elements, email = _a.email, password = _a.password;
                    email = email.value;
                    password = password.value;
                    adminLoginForm_1 = (ev.target.getAttribute('id').indexOf('shopper') === -1) ? true : false;
                    ev.target.reset();
                    return [4 /*yield*/, axios.post('/user/login', { email: email, password: password, adminLoginForm: adminLoginForm_1 })];
                case 1:
                    loginAdminUser = _c.sent();
                    _b = loginAdminUser.data, title = _b.title, text = _b.text, storeUuid_2 = _b.storeUuid, isLoggedIn = _b.isLoggedIn;
                    if (isLoggedIn) {
                        swal({
                            title: title,
                            text: text,
                            icon: "success",
                            button: "Lets go"
                        })
                            .then(function () { window.location.href = (adminLoginForm_1) ? "./store.html?storeUuid=" + storeUuid_2 : './store.html?storeUuid=mall'; });
                    }
                    else {
                        swal({
                            title: "Ops.. " + title,
                            text: text,
                            icon: "warning",
                            button: "Try again"
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _c.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}

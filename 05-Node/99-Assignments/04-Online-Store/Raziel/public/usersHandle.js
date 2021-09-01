//--------------------------------------------------------------------------<Register>-----------------------------------------------------------------//
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
// register pop up
function openRegisterForm() {
    document.body.classList.add("showRegisterForm");
}
function closeRegisterForm() {
    document.body.classList.remove("showRegisterForm");
}
// end-----
var handelReg = document.querySelector('#registerForm');
handelReg.addEventListener('submit', handelRegistration);
function handelRegistration(event) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, email, password, role, regUser, createdUser, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    _a = event.target.elements, username = _a.username, email = _a.email, password = _a.password, role = _a.role;
                    username = username.value;
                    email = email.value;
                    password = password.value;
                    // to check if check if its an admin ect.
                    if (role.checked) {
                        role = "admin";
                        password = username + "admin123";
                    }
                    else {
                        role = "user";
                    }
                    if (!username || !email || !password)
                        throw new Error("Please fill all the the fields!");
                    event.target.reset();
                    regUser = { username: username, email: email, password: password, role: role };
                    return [4 /*yield*/, axios.post('/user/register', regUser)];
                case 1:
                    createdUser = _b.sent();
                    if (createdUser.data.user.role === "user") {
                        window.location.href = "./index.html";
                    }
                    else if (createdUser.data.user.role === "admin") {
                        window.location.href = "./admin.html";
                    }
                    console.log(regUser);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//--------------------------------------------------------------------------<Register End>-----------------------------------------------------------------//
//--------------------------------------------------------------------------<Log In>-----------------------------------------------------------------//
//  Login pop up
function openLoginForm() {
    document.body.classList.add("showLoginForm");
}
function closeLoginForm() {
    document.body.classList.remove("showLoginForm");
}
// end-----
var handelLogIn = document.querySelector("#loginForm");
handelLogIn.addEventListener("submit", handelLoggingIn);
function handelLoggingIn(event) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, userInfo, userLogin, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    _a = event.target.elements, email = _a.email, password = _a.password;
                    email = email.value;
                    password = password.value;
                    if ((!email) || (!password))
                        throw new Error("Please complete all the fields");
                    event.target.reset();
                    userInfo = { email: email, password: password };
                    return [4 /*yield*/, axios.post('/user/login', userInfo)];
                case 1:
                    userLogin = _b.sent();
                    if (userLogin.data.user.role === 'user') {
                        window.location.href = "index.html";
                    }
                    else if (userLogin.data.user.role === 'admin') {
                        window.location.href = "./admin.html";
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//--------------------------------------------------------------------------<Log In End>-----------------------------------------------------------------//

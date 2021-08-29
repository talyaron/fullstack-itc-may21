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
var token = JSON.parse(localStorage.getItem('token'));
var headers = {
    Authorization: "Bearer " + token
};
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var counter, cart, allProducts, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    counter = document.querySelector('.nav__cart__count');
                    return [4 /*yield*/, axios.get("/cart/getUserCart", { headers: headers })];
                case 1:
                    cart = _a.sent();
                    counter.innerText = cart.data.length;
                    return [4 /*yield*/, axios.get("/publicUsers/getAllProducts", { headers: headers })];
                case 2:
                    allProducts = _a.sent();
                    return [4 /*yield*/, renderProductList(allProducts.data.products)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
window.addEventListener("load", getAllProducts);
function renderProductList(productArray) {
    return __awaiter(this, void 0, void 0, function () {
        var html_1, cart_1, shoppingList, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    html_1 = '';
                    return [4 /*yield*/, axios.get("/cart/getUserCart", { headers: headers })];
                case 1:
                    cart_1 = _a.sent();
                    productArray.map(function (product) {
                        if (cart_1.data.find(function (prd) { return prd.product.id === product.id; }) != undefined) {
                            html_1 +=
                                "<div id='" + product.id + "'  class=\"shopping-list__item-wrapper\">\n      <img class=\"shopping-list__item-wrapper__item-image\" src=" + product.imgSrc + " alt=\"\" onclick=\"viewProduct('" + product.id + "')\">\n      <h2  class=\"shopping-list__item-wrapper__item-name\">" + product.description + "</h2>\n      <h3  class=\"shopping-list__item-wrapper__item-price\">$" + product.price + "</h3>\n      <button  id='" + product.id + "Button' class=\"shopping-list__item-wrapper__add\" style=\"background-color:red; color:white;\">selected</button>\n      </div>";
                        }
                        else {
                            html_1 +=
                                "<div id='" + product.id + "'  class=\"shopping-list__item-wrapper\">\n      <img class=\"shopping-list__item-wrapper__item-image\" src=" + product.imgSrc + " alt=\"\" onclick=\"viewProduct('" + product.id + "')\">\n      <h2  class=\"shopping-list__item-wrapper__item-name\">" + product.description + "</h2>\n      <h3  class=\"shopping-list__item-wrapper__item-price\">$" + product.price + "</h3>\n      <button  id='" + product.id + "Button' class=\"shopping-list__item-wrapper__add\" onclick=\"moveToCart('" + product.id + "'); colorChangeButton('" + product.id + "')\">Add to Cart</button>\n      </div>";
                        }
                    });
                    shoppingList = document.querySelector(".shopping-list");
                    shoppingList.innerHTML = html_1;
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function moveToCart(productID) {
    try {
        axios.post('/cart/addToCart', {
            productID: productID
        }, { headers: headers });
    }
    catch (e) {
        console.error(e);
    }
}
;
function colorChangeButton(id) {
    try {
        var button = document.getElementById(id + "Button");
        var counter = document.querySelector('.nav__cart__count');
        var counterCount = parseInt(counter.innerText);
        button.style.background = 'red';
        button.style.color = 'white';
        button.innerHTML = 'selected';
        counterCount = counterCount + 1;
        counter.innerText = counterCount;
        button.disabled = true;
    }
    catch (e) {
        console.error(e);
    }
}
function findProductbySearchTerm(searchTerm) {
    return __awaiter(this, void 0, void 0, function () {
        var userRegEx_1, allProducts, searchResults, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userRegEx_1 = new RegExp(searchTerm, 'gmi');
                    return [4 /*yield*/, axios.get("/publicUsers/getAllProducts", { headers: headers })];
                case 1:
                    allProducts = _a.sent();
                    searchResults = allProducts.data.products.filter(function (productItem) { return userRegEx_1.test(productItem.description); });
                    return [2 /*return*/, searchResults];
                case 2:
                    e_3 = _a.sent();
                    console.error(e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleKeyUp(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var searchTerm, results, er_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    searchTerm = ev.target.value;
                    return [4 /*yield*/, findProductbySearchTerm(searchTerm)];
                case 1:
                    results = _a.sent();
                    renderProductList(results);
                    return [3 /*break*/, 3];
                case 2:
                    er_1 = _a.sent();
                    console.error(er_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
document.getElementById("searching").addEventListener("keyup", handleKeyUp);
function viewProduct(productID) {
    try {
        window.location.href = "/productview.html?productID=" + productID;
    }
    catch (e) {
        console.error(e);
    }
}

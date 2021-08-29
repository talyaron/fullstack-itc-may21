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
function getCartFromServer() {
    return __awaiter(this, void 0, void 0, function () {
        var cart, html_1, cartItemPrice_1, shoppingCartDOM, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/cart/getUserCart", { headers: headers })];
                case 1:
                    cart = _a.sent();
                    if (!cart) {
                        throw new Error("Cart isnt passing to this page");
                    }
                    html_1 = '';
                    cartItemPrice_1 = 1;
                    cart.data.map(function (cart) {
                        cartItemPrice_1 = cart.product.price * cart.value;
                        html_1 +=
                            "<div class= \"shopping-cart__put__item\">\n          <img class=\"shopping-cart__put__item__item-image\" src=" + cart.product.imgSrc + " alt=\"\">\n          <h2  class=\"shopping-cart__put__item__item-name\">" + cart.product.description + "</h2>\n          <h3  class=\"shopping-cart__put__item__item-price\">$" + cartItemPrice_1 + "</h3>\n          <input id=\"" + cart.product.id + "value\" class=\"shopping-cart__put__item__count\" name=\"value\" onchange=\"updateCartItemValue('" + cart.product.id + "')\" type=\"number\" value=\"" + cart.value + "\" min=\"0\" max=\"50\">\n          <h3 class=\"shopping-cart__put__item__delete\" onclick=\"deleteFromCart('" + cart.product.id + "')\">x</h3>\n           </div>";
                    });
                    shoppingCartDOM = document.querySelector(".shopping-cart__put");
                    shoppingCartDOM.innerHTML = html_1;
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
window.addEventListener("load", getCartFromServer);
var token = JSON.parse(localStorage.getItem('token'));
var headers = {
    Authorization: "Bearer " + token
};
function deleteFromCart(productID) {
    return __awaiter(this, void 0, void 0, function () {
        var newCart, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, axios["delete"]("/cart/deleteFromCart/" + productID, { headers: headers })];
                case 1:
                    newCart = _a.sent();
                    return [4 /*yield*/, getCartFromServer()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateCartItemValue(id) {
    return __awaiter(this, void 0, void 0, function () {
        var cartItem, cartItemValue, updateNewCartItemValue, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    cartItem = document.getElementById(id + "value");
                    cartItemValue = parseInt(cartItem.value);
                    return [4 /*yield*/, axios.put("/cart/updateAmountFromCart?id=" + id, {
                            updatedValue: cartItemValue
                        }, { headers: headers })];
                case 1:
                    updateNewCartItemValue = _a.sent();
                    return [4 /*yield*/, getCartFromServer()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    console.error(e_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}

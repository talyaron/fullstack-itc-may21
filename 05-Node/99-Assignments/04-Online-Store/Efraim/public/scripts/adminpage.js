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
var headersJSON = {
    Authorization: "Bearer " + token
};
function renderProductsAdmin() {
    return __awaiter(this, void 0, void 0, function () {
        var allProducts, html_1, renderDOMElement, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, axios.get("/publicUsers/getAllProducts", { headers: headersJSON })];
                case 1:
                    allProducts = _a.sent();
                    html_1 = '';
                    return [4 /*yield*/, allProducts.data.products.map(function (product) {
                            html_1 +=
                                "<div id='" + product.id + "'  class=\"shopping-list__item-wrapper\">\n                <img class=\"shopping-list__item-wrapper__item-image\" src=" + product.imgSrc + " alt=\"\">\n                <div class=\"shopping-list__item-wrapper__edit\" id='" + product.id + "edit'> - Edit the text and click update to save!</div>\n                <input class=\"shopping-list__item-wrapper__item-name\" id=\"" + product.id + "description\" value=\"" + product.description + "\">\n                <input class=\"shopping-list__item-wrapper__item-year\" id=\"" + product.id + "price\" value=\"" + product.price + "\">\n                <div class='shopping-list__item-wrapper__wrapper__save' onclick='updateProduct(\"" + product.id + "\")'>Update</div>\n                <button class=\"shopping-list__item-wrapper__wrapper__delete\" onclick=\"deleteProduct('" + product.id + "')\">Delete</button>\n                 </div>";
                        })];
                case 2:
                    _a.sent();
                    renderDOMElement = document.querySelector(".shopping-list");
                    renderDOMElement.innerHTML = html_1;
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
window.addEventListener("load", renderProductsAdmin);
function updateProduct(ID) {
    return __awaiter(this, void 0, void 0, function () {
        var newProductDescription, newProductPrice, updatedProducts, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    newProductDescription = document.getElementById(ID + "description");
                    newProductPrice = document.getElementById(ID + "price");
                    return [4 /*yield*/, axios.put("/adminUsers/updateProducts?id=" + ID, {
                            description: newProductDescription.value,
                            price: parseInt(newProductPrice.value)
                        }, { headers: headersJSON })];
                case 1:
                    updatedProducts = _a.sent();
                    return [4 /*yield*/, renderProductsAdmin()];
                case 2:
                    _a.sent();
                    alert("Update Succesful!");
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
function deleteProduct(productID) {
    return __awaiter(this, void 0, void 0, function () {
        var newCart, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, axios["delete"]("/adminUsers/deleteProduct/" + productID, { headers: headersJSON })];
                case 1:
                    newCart = _a.sent();
                    return [4 /*yield*/, renderProductsAdmin()];
                case 2:
                    _a.sent();
                    alert("item deleted!");
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
function handleSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var headersForFile, fd, imageFile, file, description, price, result, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    headersForFile = {
                        Authorization: "Bearer " + token,
                        'Content-Type': 'multipart/form-data'
                    };
                    fd = new FormData();
                    imageFile = document.getElementById("file");
                    file = imageFile.files[0];
                    fd.append('image', file, "" + file.name);
                    description = ev.target.children.description.value;
                    price = JSON.stringify(ev.target.children.price.value);
                    fd.append('description', description);
                    fd.append('price', price);
                    return [4 /*yield*/, axios.post('/adminUsers/addProduct', fd, { headers: headersForFile })];
                case 1:
                    result = _a.sent();
                    ev.target.reset();
                    return [4 /*yield*/, renderProductsAdmin()];
                case 2:
                    _a.sent();
                    alert("Product added succefully!");
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    console.error(e_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
document.getElementById("myForm").addEventListener("submit", handleSubmit);

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
var formCreate = document.getElementById("formCreate");
var btn = document.querySelector(".btn");
var idProduct;
// let isAdmin 
// let currentUser 
//  function getCookie (){
//     // console.log(decodeURIComponent(document.cookie));
//     const cookie = decodeURIComponent(document.cookie)
//     const index = cookie.indexOf('=') + 3
//      const sliceCookie = cookie.slice(index)
//      console.log(sliceCookie);
//     const cookieFinal = JSON.parse(sliceCookie)
//     console.log(cookieFinal);
//     isAdmin = cookieFinal.isAdmin
//     currentUser = cookieFinal.id
//     console.log(cookieFinal.isAdmin);
// }
// getCookie()
var createProduct = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, description, pokeType, price, image, pokePost;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                name = event.target.elements.name.value;
                description = event.target.elements.description.value;
                pokeType = event.target.elements.pokeType.value;
                price = event.target.elements.price.value;
                image = event.target.elements.image.value;
                return [4 /*yield*/, axios.post("/product/postProduct", {
                        name: name,
                        description: description,
                        pokeType: pokeType,
                        price: price,
                        image: image
                    })];
            case 1:
                pokePost = _a.sent();
                console.log(pokePost.data);
                event.target.reset();
                renderPoke(pokePost.data);
                return [2 /*return*/];
        }
    });
}); };
formCreate.addEventListener("submit", createProduct);
var getProduct = function () { return __awaiter(_this, void 0, void 0, function () {
    var product, dataProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios("/product/getProduct")];
            case 1:
                product = _a.sent();
                dataProduct = product.data;
                console.log(dataProduct);
                renderPoke(dataProduct);
                return [2 /*return*/];
        }
    });
}); };
var deletePoke = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var deletePost;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.post("/product/deleteProduct/" + id)];
            case 1:
                deletePost = _a.sent();
                getProduct(deletePost);
                return [2 /*return*/];
        }
    });
}); };
var renderPoke = function (data) {
    var root = document.getElementById("root");
    var html = "";
    data.pokeProduct.forEach(function (element) {
        html += "\n\n     \n     <div class=\"pokemon\">\n        <div class=\"pokemon__container\">\n      \n        <div class=\"pokemon__container__image\">\n        <img src=\"" + element.image + "\" alt=\"\">\n        </div>\n        <div class=\"pokemon__container__name\">\n        <h2>" + element.name + "</h2>\n        </div>\n      \n        <div class=\"pokemon__container__description\">\n        <h4>" + element.description + "</h4>\n        </div>\n      \n        <div class=\"pokemon__container__pokeType\">\n        <h5>" + element.pokeType + "</h5>\n        </div>\n        \n        <div class=\"pokemon__container__price\">\n        <p>$" + element.price + "</p>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary itemInfo\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" onclick='editPoke(\"" + element.id + "\")' checked>Edit</button>\n        <div\n        class=\"modal fade\"\n        id=\"exampleModal\"\n        tabindex=\"-1\"\n        aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\n              <button\n                type=\"button\"\n                class=\"btn-close\"\n                data-bs-dismiss=\"modal\"\n                aria-label=\"Close\"\n              ></button>\n            </div>\n            <div class=\"modal-body\">\n              <form id=\"formEdit\" onsubmit=\"handleEdit(event)\">\n                <div class=\"container__input-name\">\n                  <legend>Pokemon Name</legend>\n                  <input type=\"text\" name=\"name\" class=\"name\" />\n                </div>\n\n                <div class=\"container__input-imageUrl\">\n                  <legend>Pokemon Description</legend>\n                  <textarea\n                    name=\"description\"\n                    class=\"description\"\n                    id=\"description\"\n                    cols=\"30\"\n                    rows=\"10\"\n                  ></textarea>\n                </div>\n\n                <div class=\"container__input-typePoke\">\n                  <legend>Pokemon Type</legend>\n                  <input type=\"text\" name=\"pokeType\"  class=\"pokeType\"/>\n                </div>\n\n                <div class=\"container__input-price\">\n                  <legend>Pokemon Price</legend>\n                  <input type=\"text\" name=\"price\" class=\"price\" />\n                </div>\n\n                <div class=\"container__input-image\">\n                  <legend>Pokemon Imag</legend>\n                  <input type=\"url\" name=\"image\" class=\"image\" />\n                </div>\n\n                <div class=\"container__button\">\n                  <button class=\"btn btn-warning\" type=\"submit\">Send</button>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button\n                type=\"button\"\n                class=\"btn btn-secondary\"\n                data-bs-dismiss=\"modal\"\n              >\n                Close\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n        <button class =\"btn btn-danger\"  'delete' onclick='deletePoke(\"" + element.id + "\")'>X</button>\n        <div class=\"pokemon__container__buy-button\">\n        <button  onclick='addCartProduct(\"" + element.id + "\")'>Buy</button>\n        </div>\n      \n        </div>\n    \n\n      </div>\n     \n    ";
    });
    root.innerHTML = html;
};
var editPoke = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var editPoke, name, description, pokeType, price, image;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.get("/product/editProduct/" + id)];
            case 1:
                editPoke = _a.sent();
                name = document.querySelector('.name');
                description = document.querySelector('.description');
                pokeType = document.querySelector('.pokeType');
                price = document.querySelector('.price');
                image = document.querySelector('.image');
                name.value = editPoke.data.name;
                description.value = editPoke.data.description;
                pokeType.value = editPoke.data.pokeType;
                price.value = editPoke.data.price;
                image.value = editPoke.data.image;
                console.log(editPoke);
                idProduct = id;
                return [2 /*return*/];
        }
    });
}); };
var handleEdit = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, description, pokeType, price, image, newData, pokePost, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                console.log(idProduct);
                name = event.target.elements.name.value;
                description = event.target.elements.description.value;
                pokeType = event.target.elements.pokeType.value;
                price = event.target.elements.price.value;
                image = event.target.elements.image.value;
                newData = { name: name, description: description, pokeType: pokeType, price: price, image: image };
                return [4 /*yield*/, axios.post("/product/edit/" + idProduct, newData)];
            case 1:
                pokePost = _a.sent();
                console.log(newData);
                resp = pokePost.data.products;
                getProduct(resp);
                return [2 /*return*/];
        }
    });
}); };
var addCartProduct = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var addCart, dataCart;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios.post("/product/addToCart/" + id)];
            case 1:
                addCart = _a.sent();
                dataCart = addCart.data.cart;
                console.log(dataCart);
                return [2 /*return*/];
        }
    });
}); };
getProduct();

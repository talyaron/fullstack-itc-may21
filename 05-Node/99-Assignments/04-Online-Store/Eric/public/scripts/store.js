/*
problemas a resolver:
1-ahora no me funciona el boton delete cuando ingreso como admin
2- decriptar contraseña
3-ahora no funciona edit button
4-armar parte de carrito con stock para admin
5-en pagina de admin, ver las compras seleccionadas por el usuario

*/
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
var form = document.querySelector('.form').addEventListener('submit', addProduct);
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, productos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/product/getAllProducts')];
                case 1:
                    response = _a.sent();
                    productos = response.data;
                    renderProducts(productos);
                    return [2 /*return*/];
            }
        });
    });
}
;
var isAdmin;
var currentUser;
function getCookie() {
    console.log(decodeURIComponent(document.cookie));
    var cookie = decodeURIComponent(document.cookie);
    var index = cookie.indexOf('=j:') + 3;
    var sliceCookie = cookie.slice(index);
    var cookieFinal = JSON.parse(sliceCookie);
    isAdmin = cookieFinal.isAdmin;
    currentUser = cookieFinal.id;
    console.log(cookieFinal.isAdmin);
}
getCookie();
function renderProducts(productToRender) {
    var btnAdd = document.querySelector('.btnAdd');
    var root = document.querySelector('.productoContenedor');
    var html = '';
    if (isAdmin) {
        btnAdd.style.display = 'block';
        productToRender.forEach(function (product) {
            html += "\n        \n            \n            <div class=\"producto\">\n                <div onclick='showDescription(\"" + product.id + "\")'><img class=\"producto__imagen\" src=" + product.image + " alt=\"imagen camisa\" ></div>\n\n                <div class=\"producto__informacion\">\n                    <p class=\"producto__nombre\" href=\"productView.html\">Name: " + product.name + "</p>\n                    <p class=\"producto__precio\" href=\"productView.html\">Price: " + product.price + "</p>\n                    <p class=\"producto__precio\" href=\"productView.html\">Quantity: " + product.quantity + "</p>\n                    <button type=\"button\" class=\"btn btn-danger\" onclick=\"deleteProduct('" + product.id + "')\">Delete</button>\n                    \n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@getbootstrap\" onclick=\"editProdId('" + product.id + "')\">Edit</button>\n                    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                 <div class=\"modal-header\">\n                                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit product</h5>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                                    <div class=\"modal-body\">\n                                    <form onsubmit=\"handleModal(event)\">\n                                            <div class=\"form-group\">\n                                        <label for=\"recipient-name\" class=\"col-form-label\">Name:</label>\n                                        <input type=\"text\" class=\"form-control name\" id=\"recipient-name\" name=\"name\">\n                                            </div>\n                                                <div class=\"form-group\">\n                                                <label for=\"recipient-name\" class=\"col-form-label\">Price:</label>\n                                                <input type=\"number\" class=\"form-control price\" id=\"recipient-name\" name=\"price\">\n                                                    </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"recipient-name\" class=\"col-form-label\">Quantity:</label>\n                                                            <input type=\"number\" class=\"form-control quantity\" id=\"recipient-name\" name=\"quantity\">\n                                                    </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"message-text\" class=\"col-form-label\">Description:</label>\n                                                            <textarea class=\"form-control description\" id=\"message-text\" name=\"description\"></textarea>\n                                                        </div>\n                                                                <div class=\"form-group\">\n                                                                    <label for=\"recipient-name\" class=\"col-form-label\">Image:</label>\n                                                                    <input type=\"url\" class=\"form-control image\" id=\"recipient-name\" name=\"image\">\n                                                            </div>\n                                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                                    </form>\n                                 </div>\n                                    <div class=\"modal-footer\"></div>\n                      </div>\n                    </div>\n                  </div> \n                  \n                </div>\n            </div>";
        });
    }
    else {
        productToRender.forEach(function (product) {
            html += "\n            <div class=\"producto\">\n                <div onclick='showDescription(\"" + product.id + "\")'><img class=\"producto__imagen\" src=" + product.image + " alt=\"imagen camisa\" ></div>\n                    <div class=\"producto__informacion\">\n                        <p class=\"producto__nombre\" href=\"productView.html\">Name: " + product.name + "</p>\n                        <p class=\"producto__precio\" href=\"productView.html\">Price: " + product.price + "</p>\n                        <p class=\"producto__precio\" href=\"productView.html\">Quantity: " + product.quantity + "</p>                  \n                    </div>\n            </div>";
        });
    }
    ;
    root.innerHTML = html;
}
;
function showDescription(productId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            window.location.href = "productView.html?id=" + productId;
            console.log(productId);
            return [2 /*return*/];
        });
    });
}
function editProdId(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var editId, name, price, quantity, description, image;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.put("/product/bring/" + productId)];
                case 1:
                    editId = _a.sent();
                    name = document.querySelector('.name');
                    price = document.querySelector('.price');
                    quantity = document.querySelector('.quantity');
                    description = document.querySelector('.description');
                    image = document.querySelector('.image');
                    name.value = editId.data.product.name;
                    price.value = editId.data.product.price;
                    quantity.value = editId.data.product.quantity;
                    description.value = editId.data.product.description;
                    image.value = editId.data.product.image;
                    return [2 /*return*/];
            }
        });
    });
}
function handleModal(e) {
    return __awaiter(this, void 0, void 0, function () {
        var name, description, image, price, quantity, newProdData, response, productos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    name = e.target.elements.name.value;
                    description = e.target.elements.description.value;
                    image = e.target.elements.image.value;
                    price = e.target.elements.price.value;
                    quantity = e.target.elements.quantity.value;
                    newProdData = { name: name, description: description, image: image, price: price, quantity: quantity };
                    return [4 /*yield*/, axios.post('/product/edit', newProdData)];
                case 1:
                    response = _a.sent();
                    productos = response.data;
                    window.location.reload();
                    renderProducts(productos);
                    return [2 /*return*/];
            }
        });
    });
}
function addProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, description, price, quantity, image, newProduct, data, products, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    description = ev.target.elements.description.value;
                    price = ev.target.elements.price.value;
                    quantity = ev.target.elements.quantity.value;
                    image = ev.target.elements.image.value;
                    newProduct = {
                        name: name,
                        description: description,
                        price: price,
                        quantity: quantity,
                        image: image
                    };
                    return [4 /*yield*/, axios.post('/product/productos', { newProduct: newProduct })];
                case 1:
                    data = (_a.sent()).data;
                    products = data.products;
                    renderProducts(products);
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
function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, error, productList, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/product/deleteProduct/" + productId)];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    productList = data.allProducts.productList;
                    renderProducts(productList);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}

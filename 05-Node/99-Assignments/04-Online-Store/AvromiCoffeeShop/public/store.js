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
function getStorage() {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    return (user);
}
function displayAdmin() {
    var role = getStorage().role;
    var admin = document.querySelector(".admin");
    if (role === "admin") {
        admin.style.display = "block";
    }
}
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var res, allProducts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/products/')];
                case 1:
                    res = _a.sent();
                    allProducts = res.data;
                    renderProducts(allProducts);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
    getAllProducts();
    getStorage();
    displayAdmin();
};
function addProduct(name, description, price, imgSrc) {
    return __awaiter(this, void 0, void 0, function () {
        var res, allProducts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/products/addProduct', { name: name, description: description, price: price, imgSrc: imgSrc })];
                case 1:
                    res = _a.sent();
                    allProducts = res.data;
                    renderProducts(allProducts);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function editProducts(id, name, description, price, imgSrc) {
    return __awaiter(this, void 0, void 0, function () {
        var res, allProducts, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.put("/products/editProduct?id=" + id, { name: name, description: description, price: price, imgSrc: imgSrc })];
                case 1:
                    res = _a.sent();
                    allProducts = res.data;
                    renderProducts(allProducts);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function () {
        var res, allProducts, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios["delete"]("/products/delete?id=" + id)];
                case 1:
                    res = _a.sent();
                    allProducts = res.data;
                    renderProducts(allProducts);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderProducts(data) {
    try {
        var productsDiv = document.querySelector("#divcont");
        var html_1 = "";
        var role = getStorage().role;
        if (role === 'admin') {
            data.forEach(function (product) {
                html_1 += " <div class='products'>  <div class=\"product-card\">\n        <div class=\"product-image\">\n          <img src=\"" + product.imgSrc + "\">\n        </div>\n        <div class=\"product-info\">\n          <h5>" + product.name + "</h5>\n        <p>" + product.description + "</p>\n        <p>" + product.price + "</p>\n        <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + product.id + "','" + product.name + "','" + product.description + "','" + product.price + "','" + product.imgSrc + "')\">Edit</button>\n        </div>\n        </div>";
            });
            productsDiv.innerHTML = html_1;
        }
        if (role === 'public') {
            data.forEach(function (product) {
                html_1 += " <div class='products'>  <div class=\"product-card\">\n        <div class=\"product-image\">\n          <img src=\"" + product.imgSrc + "\">\n        </div>\n        <div class=\"product-info\">\n          <h5>" + product.name + "</h5>\n        <p>" + product.description + "</p>\n        <p>" + product.price + "</p>\n        <button onclick=\"handleAddToCart('" + product.id + "','" + product.name + "','" + product.description + "','" + product.price + "','" + product.imgSrc + "')\">Add To Cart</button>\n        </div>\n        </div>";
            });
            productsDiv.innerHTML = html_1;
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
var edit = document.querySelector(".formDiv");
edit.style.display = "none";
function handleEdit(id, name, description, price, imgSrc) {
    // swal("Write something here:", {
    //     content: "input",
    //   })
    //   .then((value) => {
    //     swal(`You typed: ${value}`);
    //   });
    var html = '';
    html += "\n    <form id=\"" + id + "\" onsubmit=\"handleEditSubmit(event)\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" id=\"nameInput\" name=\"name\" value=\"" + name + "\">\n\n    <label for=\"description\">Description</label>\n    <input type=\"text\" id=\"descriptionInput\" name=\"description\" value=\"" + description + "\">\n\n    <label for=\"price\">Price</label>\n    <input type=\"text\" id=\"priceInput\" name=\"price\" value=\"" + price + "\">\n\n    <label for=\"imgSrc\">Image Source</label>\n    <input type=\"text\" id=\"imgSrcInput\" name=\"imgSrc\" value=\"" + imgSrc + "\">\n\n    <input type=\"submit\" value=\"Submit\">\n    <input onclick=\"closeEditWindow()\" type=\"button\" value=\"Cancel\" id=\"cancel\"> \n\n</form>";
    edit.innerHTML = html;
    edit.style.display = "block";
}
function handleEditSubmit(ev) {
    ev.preventDefault();
    var id = ev.target.id;
    var newName = ev.target.elements.name.value;
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.value;
    var imgSrc = ev.target.elements.imgSrc.value;
    editProducts(id, newName, description, price, imgSrc);
    edit.style.display = "none";
}
function handleSubmit(ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.value;
    var imgSrc = ev.target.elements.imgSrc.value;
    addProduct(name, description, price, imgSrc);
    add.style.display = "none";
}
var add = document.querySelector(".addProductsDiv");
add.style.display = "none";
var addButton = document.querySelector('#addButton');
addButton.addEventListener('click', function () {
    var html = '';
    html += "\n    <form onsubmit=\"handleSubmit(event)\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" id=\"nameInput\" name=\"name\" placeholder=\"Product Name...\">\n\n    <label for=\"description\">Description</label>\n    <input type=\"text\" id=\"descriptionInput\" name=\"description\" placeholder=\"Product Description...\">\n\n    <label for=\"price\">Price</label>\n    <input type=\"text\" id=\"priceInput\" name=\"price\" placeholder=\"Product Price ($0.99)\">\n\n    <label for=\"imgSrc\">Image Source</label>\n    <input type=\"text\" id=\"imgSrcInput\" name=\"imgSrc\" placeholder=\"Image Source (http://image.png)\">\n\n    <input type=\"submit\" value=\"Submit\">\n    <input onclick=\"closeEditWindow()\" type=\"button\" value=\"Cancel\" id=\"cancel\"> \n\n</form>";
    add.innerHTML = html;
    add.style.display = "block";
});
function closeEditWindow(event) {
    edit.style.display = "none";
    add.style.display = "none";
}
function handleDelete(id) {
    deleteProduct(id);
}

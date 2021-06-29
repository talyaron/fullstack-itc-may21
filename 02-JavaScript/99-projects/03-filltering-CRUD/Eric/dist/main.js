var inputNameFilter = document.querySelector("#filtername");
var product_qty = document.querySelectorAll(".filter-option");
var Product = /** @class */ (function () {
    function Product(ProductName, Type, Description, Origin, Quantity) {
        this.ProductName = ProductName;
        this.Type = Type;
        this.Description = Description;
        this.Quantity = Quantity;
        this.Origin = Origin;
        this.ProductId = Math.random().toString(16).slice(2);
        ;
    }
    return Product;
}());
var Products = /** @class */ (function () {
    function Products() {
        this.products = [];
        this.productsFilter = [];
    }
    Products.prototype.add = function (product) {
        this.products.push(product);
        this.productsFilter.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    };
    ;
    Products.prototype.addProducts = function (productsArray) {
        var _this = this;
        productsArray.forEach(function (product) {
            var newProduct = new Product(product.ProductName, product.Type, product.Description, product.Origin, product.Quantity);
            _this.products.push(newProduct);
            _this.productsFilter.push(newProduct);
        });
    };
    Products.prototype.searchProduct = function (inputNameFilter) {
        var regrExp = "" + inputNameFilter;
        var searchTermReg = new RegExp(regrExp, 'i');
        this.products = this.productsFilter.filter(function (elem) { return searchTermReg.test(elem.ProductName); });
        this.renderProducts();
    };
    //filter qty
    Products.prototype.filterOption = function (Quantity) {
        if (Quantity === 7 || Quantity === 3) {
            this.products = this.productsFilter.filter(function (elem) { return elem.Quantity === Quantity; });
        }
        else {
            this.products = this.productsFilter.filter(function (elem) { return elem.Quantity === 3 || elem.Quantity === 7; });
        }
        this.renderProducts();
    };
    //eliminar
    Products.prototype.removeProduct = function (ProductId) {
        this.products = this.products.filter(function (prod) { return prod.ProductId !== ProductId; });
        this.renderProducts();
    };
    //editar
    Products.prototype.editProduct = function (ProductId) {
    };
    //  Update id
    //  updateProduct(ProductId: string) {}
    Products.prototype.renderProducts = function () {
        var table = document.querySelector(".product-list");
        var html = "";
        this.products.forEach(function (product) {
            html += "<tbody>\n       <tr>\n        <td>" + product.ProductName + "</td>\n        <td>" + product.Type + "</td> \n        <td>" + product.Description + "</td> \n        <td>" + product.Origin + "</td> \n        <td>" + product.Quantity + "</td> \n        <td> <i onclick='handleEdit(\"" + product.ProductId + "\")' class=\"fas fa-pencil-alt\"></i></td>\n        <td> <i onclick='handleDelete(\"" + product.ProductId + "\")'id=\"del\" class=\"fas fa-trash\"></i></td>\n        </tr>";
        });
        table.innerHTML = html;
    };
    ;
    Products.prototype.getProductsFromStorage = function () {
        JSON.parse(localStorage.getItem("products"));
    };
    ;
    return Products;
}());
var products = new Products();
products.addProducts(productsData);
products.renderProducts();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var ProductName = ev.target.elements.name.value;
    var Type = ev.target.elements.type.value;
    var Description = ev.target.elements.description.value;
    var Origin = ev.target.elements.origin.value;
    var Quantity = ev.target.elements.quantity.value;
    var product = new Product(ProductName, Type, Description, Origin, Quantity);
    products.add(product);
    products.renderProducts();
    ev.target.reset();
};
//delete products
var handleDelete = function (ProductId) {
    products.removeProduct(ProductId);
    console.log(products);
};
//edit products
var handleEdit = function (ProductId) {
    products.editProduct(ProductId);
};
//search products
inputNameFilter.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    products.searchProduct(inputNameFilter.value);
}
function filterOption() {
    var _loop_1 = function (i) {
        product_qty[i].addEventListener("click", function () {
            products.filterOption(product_qty[i].nodeType);
        });
    };
    for (var i = 0; i < product_qty.length; i++) {
        _loop_1(i);
    }
}

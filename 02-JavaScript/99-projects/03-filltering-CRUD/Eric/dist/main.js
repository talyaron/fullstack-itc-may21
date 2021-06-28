var inputSearch = document.querySelector("#search");
var Product = /** @class */ (function () {
    function Product(ProductName, Description, Origin, Quantity) {
        this.ProductName = ProductName;
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
            var newProduct = new Product(product.ProductName, product.Description, product.Origin, product.Quantity);
            _this.products.push(newProduct);
            _this.productsFilter.push(newProduct);
        });
    };
    Products.prototype.searchProduct = function (letters) {
        var regrExp = "" + letters;
        var searchTermReg = new RegExp(regrExp, 'i');
        this.products = this.products.filter(function (elem) { return searchTermReg.test(elem.ProductName); });
        this.renderProducts();
    };
    //eliminar
    Products.prototype.removeProduct = function (ProductId) {
        this.products = this.products.filter(function (prod) { return prod.ProductId !== ProductId; });
        this.renderProducts();
    };
    //  Update id
    //  updateProduct(ProductId: string) {}
    Products.prototype.renderProducts = function () {
        var table = document.querySelector(".product-list");
        var html = "";
        this.products.forEach(function (product) {
            html += "<tbody>\n       <tr>\n        <td>" + product.ProductName + "</td>\n        <td>" + product.Description + "</td> \n        <td>" + product.Origin + "</td> \n        <td>" + product.Quantity + "</td> \n        <td>" + product.ProductId + "</td>\n        <td> <i onclick='handleEdit(\"" + product.ProductId + "\")' class=\"fas fa-pencil-alt\"></i></td>\n        <td> <i onclick='handleDelete(\"" + product.ProductId + "\")'id=\"del\" class=\"fas fa-trash\"></i></td>\n        </tr>";
            table.innerHTML = html;
        });
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
    var Description = ev.target.elements.description.value;
    var Origin = ev.target.elements.origin.value;
    var Quantity = ev.target.elements.quantity.value;
    var product = new Product(ProductName, Description, Origin, Quantity);
    products.add(product);
    products.renderProducts();
    ev.target.reset();
};
//delete products
var handleDelete = function (ProductId) {
    products.removeProduct(ProductId);
};
//search products
inputSearch.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    products.searchProduct(inputSearch.value);
}

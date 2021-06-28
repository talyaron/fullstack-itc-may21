var Producto = /** @class */ (function () {
    function Producto(product, brand, price, stock, description) {
        this.product = product;
        this.brand = brand;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.id = Math.random().toString(16).slice(2);
    }
    return Producto;
}());
var ListProducto = /** @class */ (function () {
    function ListProducto() {
        this.list = [];
    }
    ListProducto.prototype.addList = function (add) {
        this.list.push(add);
        this.renderData();
        localStorage.setItem("product", JSON.stringify(list));
    };
    ListProducto.prototype.addObject = function (prodArray) {
        var _this = this;
        prodArray.forEach(function (prd) {
            var prods = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
            _this.list.push(prods);
        });
        this.renderData();
    };
    ListProducto.prototype.itemDelete = function (id) {
        this.list = this.list.filter(function (prod) { return prod.id !== id; });
        this.renderData();
    };
    ListProducto.prototype.renderData = function () {
        var container = document.querySelector(".container_products");
        var html = "";
        this.list.forEach(function (prod) {
            html += " <div class=\"container-product item\">\n                        <p>" + prod.product + "</p>\n                    </div>\n                    <div class=\"container-brand item\">\n                        <p>" + prod.brand + "</p>\n                    </div>\n                    <div class=\"container-price item\">\n                        <p>" + prod.price + "</p>\n                    </div>\n                    <div class=\"container-stock item\">\n                        <p>" + prod.stock + "</p>\n                    </div>\n                    <div class=\"container-description item\">\n                        <p>" + prod.description + "</p>\n                    </div>\n                    <div class=\"container-icons item\">\n                    <button href=\"\"><i class=\"fas fa-trash icono_productos icono_productos_delete\"></i></button>\n                    <button href=\"\" onclick=\"handleDelete('" + prod.id + "')\"><i  class=\"fas fa-edit icono_productos icono_productos_edit\"></i></button>\n                    </div>";
        });
        container.innerHTML = html;
    };
    return ListProducto;
}());
var listP = new ListProducto();
listP.addObject(productos);
console.log(listP);
listP.renderData();
var handleDelete = function (id) {
    listP.itemDelete(id);
};
var filterSelect = listP.filter(function (el) {
});
var handleSubmit = function (event) {
    event.preventDefault();
    var product = event.target.elements.producto.value;
    var brand = event.target.elements.brand.value;
    var price = event.target.elements.price.valueAsNumber;
    var stock = event.target.elements.stock.valueAsNumber;
    var description = event.target.elements.description.value;
    var producto = new Producto(product, brand, price, stock, description);
    console.log(producto);
    listP.addList(producto);
    event.target.reset();
};

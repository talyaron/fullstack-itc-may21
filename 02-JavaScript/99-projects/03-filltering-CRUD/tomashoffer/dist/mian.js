var Producto = /** @class */ (function () {
    function Producto(product, brand, price, stock, description, id) {
        this.product = product;
        this.brand = brand;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.id = id;
    }
    return Producto;
}());
var ListProducto = /** @class */ (function () {
    function ListProducto() {
        this.list = [];
    }
    ListProducto.prototype.addList = function (add) {
        this.list.push(add);
    };
    ListProducto.prototype.addCars = function (prodArray) {
        var _this = this;
        prodArray.forEach(function (prd) {
            var prods = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description, prd.id);
            _this.list.push(prods);
        });
    };
    return ListProducto;
}());
var listP = new ListProducto();
listP.addCars(productos);
console.log(listP);
var handleSubmit = function (event) {
    event.preventDefault();
    var product = event.target.elements.producto.value;
    var brand = event.target.elements.brand.value;
    var price = event.target.elements.price.value;
    var stock = event.target.elements.stock.value;
    var description = event.target.elements.description.value;
    var id = Math.random().toString(16).slice(2);
    var producto = new Producto(product, brand, price, stock, description, id);
    console.log(producto);
    listP.addList(producto);
};

var select = document.querySelector(".select");
var boton = document.querySelector(".boton_trash");
var editBtn = document.getElementById('nameInput');
var modal = document.getElementById('Mymodal');
// VARIABLE GLOBAL
var list = [];
var updateID;
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
// ADD JSON TO LIST ARRAY
function addObject() {
    productos.forEach(function (prd) {
        prd = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
        list.push(prd);
    });
}
addObject();
function remove(id) {
    var filtrado = list.filter(function (prod) { return prod.id !== id; });
    list = filtrado;
    renderData(list);
}
function edit(id) {
    updateID = id;
}
select.addEventListener('change', function () {
    var selectedValue = Number(select.value);
    console.log(typeof selectedValue);
    var arr = [];
    arr = list;
    var arr2 = [];
    arr2 = list;
    var arr3 = [];
    arr3 = list;
    if (selectedValue === 100) {
        var priceFilter = arr.filter(function (prod) { return prod.price >= selectedValue; });
        arr = priceFilter;
        renderData(arr);
    }
    else if (selectedValue === 200) {
        var priceFilter1 = arr2.filter(function (prod) { return prod.price >= selectedValue; });
        arr2 = priceFilter1;
        renderData(arr2);
    }
    else {
        var priceFilter2 = arr3.filter(function (prod) { return prod.price >= selectedValue; });
        arr3 = priceFilter2;
        renderData(arr3);
    }
});
function renderData(listado) {
    var container = document.querySelector(".container_products");
    var html = "";
    listado.forEach(function (element) {
        html += " <div class=\"container-product item\">\n                    <p>" + element.product + "</p>\n                </div>\n                <div class=\"container-brand item\">\n                    <p>" + element.brand + "</p>\n                </div>\n                <div class=\"container-price item\">\n                    <p>" + element.price + "</p>\n                </div>\n                <div class=\"container-stock item\">\n                    <p>" + element.stock + "</p>\n                </div>\n                <div class=\"container-description item\">\n                    <p>" + element.description + "</p>\n                </div>\n                <div class=\"container-icons item\">\n                <button href=\"#\" onclick='remove(\"" + element.id + "\")'><i class=\"fas fa-trash icono_productos icono_productos_delete\"></i></button>\n                <button href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" onclick='edit(\"" + element.id + "\")'><i class=\"fas fa-edit icono_productos icono_productos_edit\"></i></button>\n                </div>";
    });
    container.innerHTML = html;
}
renderData(list);
var handleSubmit = function (event) {
    event.preventDefault();
    var product = event.target.elements.producto.value;
    var brand = event.target.elements.brand.value;
    var price = event.target.elements.price.valueAsNumber;
    var stock = event.target.elements.stock.valueAsNumber;
    var description = event.target.elements.description.value;
    var producto = new Producto(product, brand, price, stock, description);
    // ADD NEW PRODUCT TO LIST ARRAY
    list.unshift(producto);
    renderData(list);
    console.log(producto);
    event.target.reset();
};
var handleEdit = function (event) {
    event.preventDefault();
    var productModal = event.target.elements.productoModal.value;
    var brandModal = event.target.elements.brandModal.value;
    var priceModal = event.target.elements.priceModal.valueAsNumber;
    var stockModal = event.target.elements.stockModal.valueAsNumber;
    var descriptionModal = event.target.elements.descriptionModal.value;
    var edit = list.find(function (prod) { return prod.id === updateID; });
    edit.product = productModal;
    edit.brand = brandModal;
    edit.price = priceModal;
    edit.stock = stockModal;
    edit.description = descriptionModal;
    console.log(productModal, brandModal, priceModal, stockModal, descriptionModal);
    console.log(edit);
    renderData(list);
};
console.log(updateID);

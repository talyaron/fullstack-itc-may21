// QUERIES SELECTORS
var select = document.querySelector(".select");
var boton = document.querySelector(".boton_trash");
var editBtn = document.getElementById('nameInput');
var modal = document.getElementById('Mymodal');
var searchBar = document.querySelector("#searchBar");
// VARIABLE GLOBAL
var list = [];
var updateID;
var searchValue;
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
// EVENTS LISTENERS
// select.addEventListener('change', selectFilter); //YS: Nice! 
// searchBar.addEventListener('keyup', search);
// FUNCTIONS
// ADD JSON TO LIST ARRAY
function addObject() {
    productos.forEach(function (prd) {
        /*YS: No! The prd above and the prd below are not the same. It is a different thing and you should make a new variable.
         You are lucky this worked for you, but it is incorrect. Should be:

          const myOtherProdThatisNotTheSameAsMyCallback = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
          list.push(myOtherProdThatisNotTheSameAsMyCallback)

         */
        prd = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
        list.push(prd);
    });
}
addObject();
// DELETE PRODUCTvariable
function remove(id) {
    var filtrado = list.filter(function (prod) { return prod.id !== id; });
    list = filtrado;
    renderData(list);
}
// TAKING ID FOR EDIT, THEN I USED AT THE handleEdit()
function edit(id) {
    updateID = id;
}
// TAKING FILTERS VALUES 
var filters = function (event) {
    event.preventDefault();
    var parentElements = event.target.parentElement.parentElement.parentElement.elements;
    var selectPrice = parentElements.select.value;
    var searchBar = parentElements.searchBar.value;
    filterFunction(selectPrice, searchBar);
    console.log(selectPrice, searchBar);
};
var formElement = document.querySelector("#filterForm");
formElement.addEventListener('change', filters);
formElement.addEventListener('keyup', filters);
// LINKING FILTERS
var filterFunction = function (selectPrice, searchBar) {
    var filterArray = list;
    if (searchBar) {
        var regExp = "^" + searchBar;
        var searchTermReg_1 = new RegExp(regExp, 'i');
        filterArray = filterArray.filter(function (elem) { return searchTermReg_1.test(elem.product) && elem.price >= selectPrice; });
        renderData(filterArray);
    }
    if (selectPrice !== 'allproducts') {
        filterArray = filterArray.filter(function (prod) { return prod.price >= selectPrice; });
        renderData(filterArray);
    }
    else {
        renderData(list);
    }
};
// RENDER DATA
function renderData(listado) {
    var container = document.querySelector(".container_products");
    var html = "";
    listado.forEach(function (element) {
        html += " <div class=\"container-product item\">\n                    <p>" + element.product + "</p>\n                </div>\n                <div class=\"container-brand item\">\n                    <p>" + element.brand + "</p>\n                </div>\n                <div class=\"container-price item\">\n                    <p>" + element.price + "</p>\n                </div>\n                <div class=\"container-stock item\">\n                    <p>" + element.stock + "</p>\n                </div>\n                <div class=\"container-description item\">\n                    <p>" + element.description + "</p>\n                </div>\n                <div class=\"container-icons item\">\n                    <button href=\"#\" class=\"btn_icons\" onclick='remove(\"" + element.id + "\")'><i class=\"fas fa-trash icono_productos icono_productos_delete\"></i></button>\n                    \n                    <button href=\"#\" class=\"btn_icons\" data-toggle=\"modal\" data-target=\"#myModal\" onclick='edit(\"" + element.id + "\")'><i class=\"fas fa-edit icono_productos icono_productos_edit\"></i></button>\n                </div>";
    });
    container.innerHTML = html;
}
renderData(list);
// HANDLE DATA FROM PRINCIPAL FORM
var handleSubmit = function (event) {
    try {
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
        console.log(producto); //YS: Console log! 
        event.target.reset();
    }
    catch (e) {
        console.error(e);
    }
};
// HANDLEING DATA FROM MODAL TO EDIT
var handleEdit = function (event) {
    try {
        event.preventDefault();
        var productModal = event.target.elements.productoModal.value;
        var brandModal = event.target.elements.brandModal.value;
        var priceModal = event.target.elements.priceModal.valueAsNumber;
        var stockModal = event.target.elements.stockModal.valueAsNumber;
        var descriptionModal = event.target.elements.descriptionModal.value;
        var edit_1 = list.find(function (prod) { return prod.id === updateID; });
        edit_1.product = productModal;
        edit_1.brand = brandModal;
        edit_1.price = priceModal;
        edit_1.stock = stockModal;
        edit_1.description = descriptionModal;
        console.log(productModal, brandModal, priceModal, stockModal, descriptionModal); //YS: Console.log!
        console.log(edit_1);
        renderData(list);
    }
    catch (e) {
        console.error(e);
    }
};
console.log(updateID);

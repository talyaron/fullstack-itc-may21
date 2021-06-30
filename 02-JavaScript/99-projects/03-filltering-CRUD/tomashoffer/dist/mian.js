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
select.addEventListener('change', selectFilter);
searchBar.addEventListener('keyup', search);
// FUNCTIONS
// ADD JSON TO LIST ARRAY
function addObject() {
    productos.forEach(function (prd) {
        prd = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
        list.push(prd);
    });
}
addObject();
// DELETE PRODUCT
function remove(id) {
    var filtrado = list.filter(function (prod) { return prod.id !== id; });
    list = filtrado;
    renderData(list);
}
// TAKING ID FOR EDIT, THEN I USED AT THE handleEdit()
function edit(id) {
    updateID = id;
}
// FILTER BY SELECTS OPTIONS [see event]
function selectFilter() {
    try {
        var selectedValue_1 = Number(select.value);
        if (selectedValue_1 > 300)
            throw new Error('You have an error in your value');
        console.log(typeof selectedValue_1);
        var arr = [];
        arr = list;
        var arr2 = [];
        arr2 = list;
        var arr3 = [];
        arr3 = list;
        if (selectedValue_1 === 100) {
            var priceFilter = arr.filter(function (prod) { return prod.price >= selectedValue_1; });
            arr = priceFilter;
            renderData(arr);
        }
        else if (selectedValue_1 === 200) {
            var priceFilter1 = arr2.filter(function (prod) { return prod.price >= selectedValue_1; });
            arr2 = priceFilter1;
            renderData(arr2);
        }
        else if (selectedValue_1 === 0) {
            renderData(list);
        }
        else {
            var priceFilter2 = arr3.filter(function (prod) { return prod.price >= selectedValue_1; });
            arr3 = priceFilter2;
            renderData(arr3);
        }
    }
    catch (e) {
        console.error(e);
    }
}
// TAKING VALUE FROM INPUT FOR USE IT AT searchRegEx()
function search(e) {
    try {
        searchValue = e.target.value;
        searchRegEx(searchValue);
    }
    catch (e) {
        console.error(e);
    }
}
// RegEx FOR FILTER BY PRODUCTS NAME
function searchRegEx(inputSearch) {
    var regExp = "^" + inputSearch;
    var searchTermReg = new RegExp(regExp, 'i');
    var filterSearch = list.filter(function (elem) { return searchTermReg.test(elem.product); });
    renderData(filterSearch);
}
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
        console.log(producto);
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
        console.log(productModal, brandModal, priceModal, stockModal, descriptionModal);
        console.log(edit_1);
        renderData(list);
    }
    catch (e) {
        console.error(e);
    }
};
console.log(updateID);

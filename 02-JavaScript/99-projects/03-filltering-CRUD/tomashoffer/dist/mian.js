var list = [];
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
var boton = document.querySelector(".boton_trash");
function remove(id) {
    var filtrado = list.filter(function (prod) { return prod.id !== id; });
    list = filtrado;
    renderData(list);
}
function edit(id) {
    var edit = list.find(function (prod) { return prod.id === id; });
    console.log(edit);
    edit.price = 1000;
    renderData(list);
}
var select = document.querySelector(".select");
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
        html += " <div class=\"container-product item\">\n                    <p>" + element.product + "</p>\n                </div>\n                <div class=\"container-brand item\">\n                    <p>" + element.brand + "</p>\n                </div>\n                <div class=\"container-price item\">\n                    <p>" + element.price + "</p>\n                </div>\n                <div class=\"container-stock item\">\n                    <p>" + element.stock + "</p>\n                </div>\n                <div class=\"container-description item\">\n                    <p>" + element.description + "</p>\n                </div>\n                <div class=\"container-icons item\">\n                <button href=\"\" onclick='remove(\"" + element.id + "\")'><i class=\"fas fa-trash icono_productos icono_productos_delete\"></i></button>\n                <button href=\"\" onclick='edit(\"" + element.id + "\")'><i class=\"fas fa-edit icono_productos icono_productos_edit\"></i></button>\n                </div>";
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
console.log(list);
// class ListProducto{
//     list:Array<Producto> = [];
//     addList(add: Producto){
//         this.list.push(add)
//         this.renderData();
//         localStorage.setItem(`product`, JSON.stringify(list));
//     }
//     addObject(prodArray:Array<Producto|ProdInterface>){
//         prodArray.forEach(prd=>{
//             const prods = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
//             this.list.push(prods);
//         })
//         this.renderData();
//      }
//      itemDelete(id:string){
//         this.list = this.list.filter((prod) => prod.id !== id);
//         this.renderData();
//     }S
//     renderData(){
//         const container: HTMLElement = document.querySelector(".container_products")
//         let html: string = "";
//         this.list.forEach((prod) => {
//            html += ` <div class="container-product item">
//                         <p>${prod.product}</p>
//                     </div>
//                     <div class="container-brand item">
//                         <p>${prod.brand}</p>
//                     </div>
//                     <div class="container-price item">
//                         <p>${prod.price}</p>
//                     </div>
//                     <div class="container-stock item">
//                         <p>${prod.stock}</p>
//                     </div>
//                     <div class="container-description item">
//                         <p>${prod.description}</p>
//                     </div>
//                     <div class="container-icons item">
//                     <button href=""><i class="fas fa-trash icono_productos icono_productos_delete"></i></button>
//                     <button href="" onclick="handleDelete('${prod.id}')"><i  class="fas fa-edit icono_productos icono_productos_edit"></i></button>
//                     </div>`
//         });
//         container.innerHTML = html;
//     }
// }

// create one page with data constructed of an array of objects (of your preferred subject)
// show all objects on the DOM (responsively)
// filter it with a select-option button
// DELETE: each item can be deleted using a button on the bottom of the item.
// UPDATE: The user can also edit the item product
// CREATE: the user can create a new item
// there will be a free search input text, to search within the items (I'll teach you to search on Friday) (RegEx)
// interface ProductosInterface {
//     product: string;
//     brand: string;
//     price: number;
//     stock: number;
//     description: string;
// }
var Product = /** @class */ (function () {
    function Product(product, brand, price, stock, description) {
        this.product = product;
        this.brand = brand;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.id = Math.random().toString(16).slice(2);
    }
    return Product;
}());
var ProductList = /** @class */ (function () {
    function ProductList() {
    }
    ProductList.prototype.addItem = function (prod) {
        this.pepe.push(prod);
    };
    return ProductList;
}());
var nuevoProducto = new ProductList();
var handleSubmit = function (e) {
    e.preentDefault();
    var product = e.target.elements.product.value;
    var brand = e.target.elements.brand.value;
    var price = e.target.elements.price.value;
    var stock = e.target.elements.stock.value;
    var description = e.target.elements.description.value;
    var newProduct = new Product(product, brand, price, stock, description);
    nuevoProducto.addItem(newProduct);
    console.log(nuevoProducto);
};
// DOM
// const option = document.querySelector(".employees__option");
// const select = document.querySelector(".employees__select");
// const container = document.querySelector(".container");
// const result = document.querySelector(".result");
// const form = document.querySelector(".form");
// console.log(productos);
// Interface
// interface ProductosInterface {
//     product: string;
//     brand: string;
//     price: number;
//     stock: number;
//     description: string;
// }
// // Class 
// class Product{
//     product: string;
//     brand: string;
//     price: number;
//     stock: number;
//     description: string;
//     id: string;
//     constructor(product:string, brand:string, price:number, stock:number, description: string){
//         this.product = product;
//         this.brand = brand;
//         this.price = price;
//         this.stock = stock;
//         this.description = description;
//         this.id = Math.random().toString(16).slice(2);
//     }
// }
// class ProductList{
//     productosArray: Array<Product> = [];
//     add(prod: Product) {
//         this.productosArray.push(prod)
//         localStorage.setItem(`productosArray`, JSON.stringify(this.productosArray)) // ESTO!!!!!!
//     };
//     addProd(prodArray:Array<Product|ProductosInterface>){
//         prodArray.forEach(pro=>{
//             const newPro = new Product(pro.product, pro.brand, pro.price, pro.stock, pro.description)
//             this.productosArray.push(newPro);
//         })
//         console.log(this.productosArray);
//     }
// }
// const newProd = new ProductList();
// HANDLE SUBMIT
// const handleSubmit = (ev: any) => {
//      ev.preventDefault();
//     const product = ev.target.elements.product.value;
//     const brand = ev.target.elements.brand.value;
//     const price = ev.target.elements.price.value;
//     const stock = ev.target.elements.stock.value;
//     const description = ev.target.elements.description.value;
//     const producto = new Product(product, brand, price, stock, description);
//     newProd.add(producto);
//     console.log(newProd);
//     cars.add(producto);
//     cars.renderCars()
//     console.log(producto)
//     ev.target.reset()
// }
// LOCAL STORAGE
// let productosStorage = JSON.stringify(productos);
// // OPTIONS 
// productos.forEach(prod => {
//     let newOption = document.createElement('option');
//     select.appendChild(newOption);
// 	newOption.innerHTML = `<option  product="emp_selected" class="employees__option">${prod.product}</option>`;
// // GET SELECTED VALUE 
//     select.addEventListener('change', ()=> {
//         let resultado:string = select.options[select.selectedIndex].value;
//           console.log(resultado)
//             if(prod.product == resultado){
//                 result.innerText = `product: ${prod.product} - brand: ${prod.brand} - Location: ${prod.price}`
//             }
//       })
// });

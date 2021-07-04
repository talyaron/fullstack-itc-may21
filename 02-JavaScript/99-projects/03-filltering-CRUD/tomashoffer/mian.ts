// QUERIES SELECTORS
const select: any = document.querySelector(".select");
const boton = document.querySelector(".boton_trash");
const editBtn = document.getElementById('nameInput');
const modal = document.getElementById('Mymodal')
const searchBar = document.querySelector("#searchBar");

// VARIABLE GLOBAL
let list: Array<Producto> = [];
let updateID;
let searchValue;


// INTERFACES AND CLASES
interface ProdInterface {
    product: string;
    brand: string;
    price: number;
    stock: number;
    description: string;
}

class Producto {
    product: string;
    brand: string;
    price: number;
    stock: number;
    description: string;
    id: string;

    constructor(product: string, brand: string, price: number, stock: number, description: string) {
        this.product = product;
        this.brand = brand;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.id = Math.random().toString(16).slice(2);
    }
}

// EVENTS LISTENERS
// select.addEventListener('change', selectFilter); //YS: Nice! 
// searchBar.addEventListener('keyup', search);

// FUNCTIONS
// ADD JSON TO LIST ARRAY
function addObject() {
    productos.forEach(prd => {
        /*YS: No! The prd above and the prd below are not the same. It is a different thing and you should make a new variable.
         You are lucky this worked for you, but it is incorrect. Should be: 

          const myOtherProdThatisNotTheSameAsMyCallback = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description); 
          list.push(myOtherProdThatisNotTheSameAsMyCallback)

         */
        
        prd = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description); 
        list.push(prd);
    })
}
addObject();

// DELETE PRODUCTvariable
function remove(id) {
    const filtrado = list.filter((prod) => prod.id !== id);
    list = filtrado;
    renderData(list);
}

// TAKING ID FOR EDIT, THEN I USED AT THE handleEdit()
function edit(id) { //YS: Is this function really necessary? 
    updateID = id;
}

// TAKING FILTERS VALUES 
const filters = (event) =>{
    event.preventDefault();
    const parentElements = event.target.parentElement.parentElement.parentElement.elements;
    const selectPrice = parentElements.select.value;
    const searchBar = parentElements.searchBar.value;

    filterFunction(selectPrice, searchBar);
    console.log(selectPrice, searchBar);
    
}
const formElement = document.querySelector("#filterForm");
formElement.addEventListener('change', filters);
formElement.addEventListener('keyup', filters);


// LINKING FILTERS
const filterFunction = (selectPrice, searchBar) =>{
    let filterArray = list;
    if(searchBar){
        const regExp: string = `^${searchBar}`;
        const searchTermReg: RegExp = new RegExp(regExp, 'i');
        filterArray = filterArray.filter(elem => searchTermReg.test(elem.product) && elem.price >= selectPrice)
        renderData(filterArray);
    }
    if(selectPrice !== 'allproducts'){
        filterArray = filterArray.filter((prod) => prod.price >= selectPrice); 
        renderData(filterArray);
    }else{
        renderData(list);
    }

}

// RENDER DATA
function renderData(listado) {
    const container: HTMLElement = document.querySelector(".container_products")
    let html: string = "";
    listado.forEach((element) => {
        html += ` <div class="container-product item">
                    <p>${element.product}</p>
                </div>
                <div class="container-brand item">
                    <p>${element.brand}</p>
                </div>
                <div class="container-price item">
                    <p>${element.price}</p>
                </div>
                <div class="container-stock item">
                    <p>${element.stock}</p>
                </div>
                <div class="container-description item">
                    <p>${element.description}</p>
                </div>
                <div class="container-icons item">
                    <button href="#" class="btn_icons" onclick='remove("${element.id}")'><i class="fas fa-trash icono_productos icono_productos_delete"></i></button>
                    
                    <button href="#" class="btn_icons" data-toggle="modal" data-target="#myModal" onclick='edit("${element.id}")'><i class="fas fa-edit icono_productos icono_productos_edit"></i></button>
                </div>`
    });
    container.innerHTML = html;
}
renderData(list);

// HANDLE DATA FROM PRINCIPAL FORM
const handleSubmit = (event) => {
    try {
        event.preventDefault();

        const product: string = event.target.elements.producto.value;
        const brand: string = event.target.elements.brand.value;
        const price: number = event.target.elements.price.valueAsNumber;
        const stock: number = event.target.elements.stock.valueAsNumber;
        const description: string = event.target.elements.description.value;


        const producto = new Producto(product, brand, price, stock, description);
        // ADD NEW PRODUCT TO LIST ARRAY
        list.unshift(producto);
        renderData(list);
        console.log(producto); //YS: Console log! 

        event.target.reset();
    } catch (e) {
        console.error(e);
    }
};

// HANDLEING DATA FROM MODAL TO EDIT
const handleEdit = (event) => {
    try {
        event.preventDefault();

        const productModal: string = event.target.elements.productoModal.value;
        const brandModal: string = event.target.elements.brandModal.value;
        const priceModal: number = event.target.elements.priceModal.valueAsNumber;
        const stockModal: number = event.target.elements.stockModal.valueAsNumber;
        const descriptionModal: string = event.target.elements.descriptionModal.value;

        const edit = list.find((prod) => prod.id === updateID);
        edit.product = productModal;
        edit.brand = brandModal;
        edit.price = priceModal;
        edit.stock = stockModal;
        edit.description = descriptionModal;


        console.log(productModal, brandModal, priceModal, stockModal, descriptionModal); //YS: Console.log!
        console.log(edit);
        renderData(list);
    } catch (e) {
        console.error(e);
    }
}
console.log(updateID);

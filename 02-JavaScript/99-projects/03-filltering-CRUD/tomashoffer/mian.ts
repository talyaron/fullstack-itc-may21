const select:any = document.querySelector(".select");
const boton = document.querySelector(".boton_trash");
const editBtn = document.getElementById('nameInput');
const modal = document.getElementById('Mymodal')
// VARIABLE GLOBAL
let list: Array<Producto> = [];
let updateID;

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
// ADD JSON TO LIST ARRAY
function addObject() {
    productos.forEach(prd => {
        prd = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description);
        list.push(prd);
    })
}
addObject();



function remove(id) {
    const filtrado = list.filter((prod) => prod.id !== id);
    list = filtrado;
    renderData(list);
}

function edit(id){
    
    updateID = id;

}


select.addEventListener('change', function(){
        const selectedValue = Number(select.value);
        console.log(typeof selectedValue);
        let arr = [];
        arr = list;
        let arr2 = [];
        arr2 = list;
        let arr3 = [];
        arr3 = list;
        if(selectedValue === 100){
            let priceFilter = arr.filter((prod)=>prod.price >= selectedValue);
            arr = priceFilter;
            renderData(arr);
        }
        else if(selectedValue === 200){
            let priceFilter1 = arr2.filter((prod)=>prod.price >= selectedValue);
            arr2 = priceFilter1;
            renderData(arr2);
        }
        else{
            let priceFilter2 = arr3.filter((prod)=>prod.price >= selectedValue);
            arr3 = priceFilter2;
            renderData(arr3);
        }
      
}) 

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
                <button href="#" onclick='remove("${element.id}")'><i class="fas fa-trash icono_productos icono_productos_delete"></i></button>
                <button href="#" data-toggle="modal" data-target="#myModal" onclick='edit("${element.id}")'><i class="fas fa-edit icono_productos icono_productos_edit"></i></button>
                </div>`
    });
    container.innerHTML = html;
}


renderData(list);

const handleSubmit = (event) => {
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
    console.log(producto);

    event.target.reset();

};

const handleEdit = (event) => {
    event.preventDefault();

    const productModal: string = event.target.elements.productoModal.value;
    const brandModal: string = event.target.elements.brandModal.value;
    const priceModal: number = event.target.elements.priceModal.valueAsNumber;
    const stockModal: number = event.target.elements.stockModal.valueAsNumber;
    const descriptionModal: string = event.target.elements.descriptionModal.value;

    const edit = list.find((prod)=> prod.id === updateID);
    edit.product = productModal;
    edit.brand = brandModal;
    edit.price = priceModal;
    edit.stock = stockModal;
    edit.description = descriptionModal;
    

    console.log(productModal, brandModal, priceModal, stockModal, descriptionModal);
    console.log(edit);
    renderData(list);
}
console.log(updateID);




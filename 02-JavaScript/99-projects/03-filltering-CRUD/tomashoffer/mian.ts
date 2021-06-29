interface ProdInterface {
    product: string;
    brand: string;
    price: number;
    stock: number;
    description: string;
}
let list: Array<Producto> = [];


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
const boton = document.querySelector(".boton_trash");


function remove(id) {
    const filtrado = list.filter((prod) => prod.id !== id);
    list = filtrado;
    renderData(list);
}

function edit(id){
    const edit = list.find((prod)=> prod.id === id);
    console.log(edit);
    edit.price = 1000;
    renderData(list);
}

const select:any = document.querySelector(".select");
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
                <button href="" onclick='remove("${element.id}")'><i class="fas fa-trash icono_productos icono_productos_delete"></i></button>
                <button href="" onclick='edit("${element.id}")'><i class="fas fa-edit icono_productos icono_productos_edit"></i></button>
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

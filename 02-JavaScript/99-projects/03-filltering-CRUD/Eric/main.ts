const botonAdd = (<HTMLButtonElement>document.querySelector(".btn-product")) //YS: You dont need the first and last parenthesis
const table: HTMLElement = document.querySelector(".product-list")

//search-regrex
const inputFilter = (<HTMLInputElement>document.querySelector("#filterN")) //YS: You dont need the first and last parenthesis

//data-edit    //YS: Why are all these variable names in different formats? In JS we use camelCase: description, productQty, type, origin, quantity..
const product_qty = <NodeList>document.querySelectorAll(".filter-option");
const ProductN = (<HTMLInputElement>document.querySelector(".product-name")) //YS: You dont need the first and last parenthesis
const Type = (<HTMLInputElement>document.querySelector(".product-type"))
const Description = (<HTMLInputElement>document.querySelector(".product-description")) //YS: You dont need the first and last parenthesis
const Origin = (<HTMLInputElement>document.querySelector(".product-origin")) //YS: You dont need the first and last parenthesis
const Quantity = (<HTMLInputElement>document.querySelector(".product-quantity")) //YS: You dont need the first and last parenthesis

//filter
const selector:any = document.querySelector(".selector");



interface ProductsInterface {
    ProductName: string;
    Type:string;
    Description: string;
    Origin: string;
    Quantity:number;
}

class Product {
    ProductName: string;
    Type:string
    Description: string;
    Origin: string;
    Quantity:number;
    ProductId:string;

    constructor(ProductName: string, Type:string, Description: string, Origin: string, Quantity:number) {

        this.ProductName=ProductName;   //YS: These varbiables shouldnt be capitalized.
        this.Type=Type;
        this.Description=Description;
        this.Quantity=Quantity
        this.Origin = Origin;
        this.ProductId = Math.random().toString(16).slice(2);;
    }
}

class Products {
    products: Array<Product> = [];
    productsFilter: Array<Product> = [];

    add(product: Product) {
        this.products.push(product)
        this.productsFilter.push(product)
        localStorage.setItem(`products`, JSON.stringify(products))
    };

    addProducts(productsArray:Array<Product|ProductsInterface>){
        productsArray.forEach(product=>{
            const newProduct = new Product(product.ProductName, product.Type, product.Description, product.Origin, product.Quantity)
            this.products.push(newProduct); //YS: Why not unshift to add your product at the beginning of the array? 
            this.productsFilter.push(newProduct)
        })
    }

//search
    searchProduct(inputFilter:string){  //YS: Nice! 
        
        const regrExp: string = `${inputFilter}`; //YS: You dont need template literals here: < const regrExp: string = inputFilter >
        const searchTermReg: RegExp = new RegExp(regrExp, 'i');
        this.products = this.productsFilter.filter(elem => searchTermReg.test(elem.ProductName))
        this.renderProducts();
    }
   
//eliminar
    removeProduct(ProductId: string) {
        this.products = this.products.filter((prod) => prod.ProductId !== ProductId); //YS:  Nice
        this.renderProducts();
    }

//editar
    getProduct(ProductId: string):string{  //YS: Nice! 
        this.products.forEach(element => {
            if(element.ProductId === ProductId){
                ProductN.value=element.ProductName;
                Type.value=element.Type;
                Description.value=element.Description;
                Origin.value=element.Origin;
                Quantity.value=String(element.Quantity);
                
            }
        });
        return ProductId
    }

//filtar


    editProduct(product: Product, productId){

        try {

        this.products.forEach(element => {
            if(element.ProductId === productId){
                if (ProductN.value === "" || Type.value === "" || Description.value === "" || Origin.value === "" || parseInt(Quantity.value) === NaN) throw new Error("Check all the inputs before continue"); //YS: Good!
                element.ProductName=ProductN.value;
                element.Type=Type.value;
                element.Description=Description.value;
                element.Origin=Origin.value;
                element.Quantity=Number(Quantity.value);                
            }

        });
    } catch (e) {
        console.log(e)
    }
    }

    renderProducts() {
        let html: string = "";
        try {
        this.products.forEach((product) => {
          if (!table) throw new Error("Imposible render");
           html += `<tbody>
       <tr>
        <td>${product.ProductName}</td>
        <td>${product.Type}</td> 
        <td>${product.Description}</td> 
        <td>${product.Origin}</td> 
        <td>${product.Quantity}</td> 
        <td> <i onclick='handleGet("${product.ProductId}")' class="fas fa-pencil-alt"></i></td>
        <td> <i onclick='handleDelete("${product.ProductId}")'id="del" class="fas fa-trash"></i></td>
        </tr>`;
        });
    
        table.innerHTML = html;
    } catch (error) {
        console.log(error)
    }
    };

    getProductsFromStorage() { //YS: You didnt really need local storage since you basically have 1 js file.
        JSON.parse(localStorage.getItem(`products`))
    }; 
}

const products = new Products();
products.addProducts(productsData);
products.renderProducts();
let productId:string;


const handleSubmit = (ev: any): void => {
    ev.preventDefault();
    const ProductName: string = ev.target.elements.name.value;
    const Type: string = ev.target.elements.type.value;
    const Description: string = ev.target.elements.description.value;
    const Origin: string = ev.target.elements.origin.value;
    const Quantity: number = ev.target.elements.quantity.value;
    const product = new Product(ProductName, Type, Description, Origin, Quantity)
    products.add(product);
    products.renderProducts()
    ev.target.reset()
}

const handleEdit = (ev: any): void => {
    ev.preventDefault();
    const p: string =  ProductN.value;
    const t:string = Type.value;
    const d:string = Description.value;
    const o:string = Origin.value;
    const q:number = Number(Quantity.value);
    const product = new Product(p, t, d, o, q)
    products.editProduct(product,productId)
    products.renderProducts()
    botonAdd.disabled=false
    console.log(botonAdd) //YS: Dont leave console.logs. 
    ev.target.reset()
}

//delete products
const handleDelete = (ProductId:string):void =>{
    products.removeProduct(ProductId);
    console.log(products);
};
//edit products
const handleGet = (ProductId:string):void =>{
    productId = products.getProduct(ProductId);
    botonAdd.disabled=true
    console.log(botonAdd) //YS: Dont leave console.logs.
};
//search products
inputFilter.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    try {
    products.searchProduct(inputFilter.value)
} catch (e) {
    console.log(e)
}   
}


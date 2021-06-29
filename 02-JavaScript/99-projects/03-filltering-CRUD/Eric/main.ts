const inputNameFilter = (<HTMLInputElement>document.querySelector("#filtername"))
const product_qty = <NodeList>document.querySelectorAll(".filter-option");
const ProductN = (<HTMLInputElement>document.querySelector(".product-name"))
const Type = (<HTMLInputElement>document.querySelector(".product-type"))
const Description = (<HTMLInputElement>document.querySelector(".product-description"))
const Origin = (<HTMLInputElement>document.querySelector(".product-origin"))
const Quantity = (<HTMLInputElement>document.querySelector(".product-quantity"))
const btnAdd = (<HTMLButtonElement>document.querySelector(".btn-product"))


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

        this.ProductName=ProductName;
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
            this.products.push(newProduct);
            this.productsFilter.push(newProduct)
        })
    }


    searchProduct(inputNameFilter:string){
        
        const regrExp: string = `${inputNameFilter}`;
        const searchTermReg: RegExp = new RegExp(regrExp, 'i');
        this.products = this.productsFilter.filter(elem => searchTermReg.test(elem.ProductName))
        this.renderProducts();
    }

   
   
//eliminar
    removeProduct(ProductId: string) {
        this.products = this.products.filter((prod) => prod.ProductId !== ProductId);
        this.renderProducts();
    }

    //editar
    getProduct(ProductId: string):string{
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
    editProduct(product: Product, productId){
        this.products.forEach(element => {
            if(element.ProductId === productId){
                element.ProductName=ProductN.value;
                element.Type=Type.value;
                element.Description=Description.value;
                element.Origin=Origin.value;
                element.Quantity=Number(Quantity.value);
                               
            }

        });
    }

    //  Update id
    //  updateProduct(ProductId: string) {}
    
    renderProducts() {
        const table: HTMLElement = document.querySelector(".product-list")
        let html: string = "";
        this.products.forEach((product) => {
            
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
    };


    getProductsFromStorage() {
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
    btnAdd.disabled=false
    console.log(btnAdd)
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
    btnAdd.disabled=true
    console.log(btnAdd)
};
//search products
inputNameFilter.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    products.searchProduct(inputNameFilter.value)
       
}


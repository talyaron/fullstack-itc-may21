const inputSearch = (<HTMLInputElement>document.querySelector("#search"))

interface ProductsInterface {
    ProductName: string;
    Description: string;
    Origin: string;
    Quantity:number;
}

class Product {
    ProductName: string;
    Description: string;
    Origin: string;
    Quantity:number;
    ProductId:string;

    constructor(ProductName: string, Description: string, Origin: string, Quantity:number) {

        this.ProductName=ProductName;
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
            const newProduct = new Product(product.ProductName, product.Description, product.Origin, product.Quantity)
            this.products.push(newProduct);
            this.productsFilter.push(newProduct)
        })
       
    }

    searchProduct(letters:string){
        
        const regrExp: string = `${letters}`;

        const searchTermReg: RegExp = new RegExp(regrExp, 'i');

        this.products = this.products.filter(elem => searchTermReg.test(elem.ProductName))

        this.renderProducts();
    }
   
 
//eliminar
    removeProduct(ProductId: string) {
        this.products = this.products.filter((prod) => prod.ProductId !== ProductId);
        this.renderProducts();
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
        <td>${product.Description}</td> 
        <td>${product.Origin}</td> 
        <td>${product.Quantity}</td> 
        <td>${product.ProductId}</td>
        <td> <i onclick='handleEdit("${product.ProductId}")' class="fas fa-pencil-alt"></i></td>
        <td> <i onclick='handleDelete("${product.ProductId}")'id="del" class="fas fa-trash"></i></td>
        </tr>`;
      table.innerHTML = html;
        });
    };


    getProductsFromStorage() {
        JSON.parse(localStorage.getItem(`products`))
    }; 
    
}
const products = new Products();
products.addProducts(productsData)
products.renderProducts();


const handleSubmit = (ev: any): void => {
    ev.preventDefault();
    const ProductName: string = ev.target.elements.name.value;
    const Description: string = ev.target.elements.description.value;
    const Origin: string = ev.target.elements.origin.value;
    const Quantity: number = ev.target.elements.quantity.value;
    const product = new Product(ProductName, Description, Origin, Quantity)
    products.add(product);
    products.renderProducts()
    ev.target.reset()
}

//delete products
const handleDelete = (ProductId:string):void =>{
    products.removeProduct(ProductId);
};
//search products
inputSearch.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    products.searchProduct(inputSearch.value)   
}
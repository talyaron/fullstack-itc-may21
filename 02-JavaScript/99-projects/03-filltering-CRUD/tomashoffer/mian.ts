interface ProdInterface{
    product:string;
    brand:string;
    price: number;
    stock: number;
    description: string;
    id:string;
}

class Producto {
    product:string;
    brand:string;
    price: number;
    stock: number;
    description: string;
    id:string;

    constructor(product:string, brand:string, price: number, stock:number, description: string, id:string){
     this.product=product;
     this.brand=brand;
     this.price=price;
     this.stock=stock;
     this.description=description;
     this.id= id
     }
}

class ListProducto{
    list:Array<Producto> = [];

    addList(add:Producto){
        this.list.push(add)
    }
    addObject(prodArray:Array<Producto|ProdInterface>){
        prodArray.forEach(prd=>{
            const prods = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description, prd.id)
            this.list.push(prods);
        })
     }
    renderData(){

    }

}
const listP = new ListProducto()
listP.addObject(productos);
console.log(listP);


const handleSubmit = (event) => {
    event.preventDefault();
  
    const product: string = event.target.elements.producto.value;
    const brand: string = event.target.elements.brand.value; 
    const price: number = event.target.elements.price.value; 
    const stock: number = event.target.elements.stock.value; 
    const description: string = event.target.elements.description.value; 
    let id = Math.random().toString(16).slice(2);


    const producto = new Producto(product, brand, price, stock, description, id);
    
    console.log(producto);
    listP.addList(producto);

  };
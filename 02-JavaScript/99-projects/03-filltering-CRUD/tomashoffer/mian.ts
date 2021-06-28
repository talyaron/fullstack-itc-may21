interface ProdInterface{
    product:string;
    brand:string;
    price: number;
    stock: number;
    description: string;

}

class Producto {
    product:string;
    brand:string;
    price: number;
    stock: number;
    description: string;
    id:string;

    constructor(product:string, brand:string, price: number, stock:number, description: string){
     this.product=product;
     this.brand=brand;
     this.price=price;
     this.stock=stock;
     this.description=description;
     this.id= Math.random().toString(16).slice(2);
     }
}

class ListProducto{
    list:Array<Producto> = [];

    addList(add: Producto){
        this.list.push(add)
        this.renderData();
    }
    addObject(prodArray:Array<Producto|ProdInterface>){
        prodArray.forEach(prd=>{
            const prods = new Producto(prd.product, prd.brand, prd.price, prd.stock, prd.description)
            this.list.push(prods);
        })
        this.renderData();
     }
     itemDelete(id:string){
        this.list = this.list.filter((prod) => prod.id !== id);
        this.renderData();
    }
    renderData(){
        const container: HTMLElement = document.querySelector(".container_products")
        let html: string = "";
        this.list.forEach((prod) => {
            
           html += ` <div class="container-product item">
                        <p>${prod.product}</p>
                    </div>
                    <div class="container-brand item">
                        <p>${prod.brand}</p>
                    </div>
                    <div class="container-price item">
                        <p>${prod.price}</p>
                    </div>
                    <div class="container-stock item">
                        <p>${prod.stock}</p>
                    </div>
                    <div class="container-description item">
                        <p>${prod.description}</p>
                    </div>
                    <div class="container-icons item">
                    <a href=""><i class="fas fa-trash icono_productos icono_productos_delete"></i></a>
                    <a href="" onclick="handleDelete('${prod.id}')"><i  class="fas fa-edit icono_productos icono_productos_edit"></i></a>
                    </div>`
                  
                    
        });
        container.innerHTML = html;
    }

}



const listP = new ListProducto()
listP.addObject(productos);
console.log(listP);
listP.renderData();

const handleDelete = (id:string):void=>{
      listP.itemDelete(id);
}

const handleSubmit = (event) => {
    event.preventDefault();
  
    const product: string = event.target.elements.producto.value;
    const brand: string = event.target.elements.brand.value; 
    const price: number = event.target.elements.price.value; 
    const stock: number = event.target.elements.stock.value; 
    const description: string = event.target.elements.description.value; 



    const producto = new Producto(product, brand, price, stock, description);
    
    console.log(producto);
    listP.addList(producto);
    event.target.reset();

  };


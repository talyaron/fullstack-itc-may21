export { };

const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

export const readAllProducts = () => {
    const allUProducts = fs.readFileSync("models/data/products.json");
    return JSON.parse(allUProducts);
}

export class Product {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    description: string;

    constructor(id: string, name: string, image: string, price: number, quantity: number, description: string) {
        console.log(id, name, image, price, quantity, description)
        this.id = id || uuidv4();
        this.name = name;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
        this.description = description;

    }
}

export class Products {
    productList: Array<Product>;

    constructor() {
        this.productList = readAllProducts();
    }

    addItem(product: Product) {
        this.productList.push(product);
        this.updateProducts();
    }

    deleteProduct(productId: string) {
        try {
            this.productList = this.productList.filter(product => product.id !== productId);
            this.updateProducts();
        } catch (e) {
            console.log(e);
        }
    }

    updateProducts() {
        fs.writeFileSync("models/data/products.json", JSON.stringify(this.productList));
    }


    // editProducto(productIndex, editData){
    //     const allProducts = readAllProducts();
    //     allProducts[productIndex].name = editData.name;
    //     allProducts[productIndex].description = editData.description;
    //     allProducts[productIndex].image = editData.image;
    //     allProducts[productIndex].price = editData.price;
    //     allProducts[productIndex].quantity = editData.quantity;
    //     fs.writeFileSync("models/data/products.json", JSON.stringify(allProducts));
    //     return allProducts;
    //   }
    
}


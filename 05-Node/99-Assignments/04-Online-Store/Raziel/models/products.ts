
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const productsJsonPath = path.resolve(__dirname, "./products.json");

const readProductsJson = () => {

    try {
        const productsList = fs.readdirSync(productsJsonPath);
        return JSON.parse(productsList);
    } catch (error) {
        console.error(error);
    }

}

 export class Product {
    uuid: string;
    picture: string;
    name: string;
    price: number;
    quantity: number;
    constructor(picture, name, price, quantity) {
        this.uuid = uuidv4();
        this.picture = picture;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
//Methods
 export class Products {
    products: Array<Product>;

    constructor() {
        this.products =  readProductsJson();
    }

    updateProductsJson() {
        try {
            fs.writeFileSync(productsJsonPath, JSON.stringify(this.products));
        } catch (error) {
            console.error(error);
        }
    }


    createProducts(product) {
        try {
            this.products.push(product);
            this.updateProductsJson();
        }
        catch (error) {
            console.error(error);
        }
    }


    deleteProduct(id) {
        try {
            this.products = this.products.filter(product => product.uuid !== id);
            this.updateProductsJson();
        } catch (error) {
            console.error(error);
        }
    }


}





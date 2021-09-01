const { uuid } = require('uuidv4');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'products.json')

class Product {
    name: string;
    description: string;
    price: string;
    id: string;
    imgSrc: string;
    constructor(name:string, description:string, price:string, imgSrc:string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgSrc = imgSrc;
        this.id = uuid()

    }

}





function getAllProducts() {
    const allProducts = fs.readFileSync(filePath)
    const parsedProducts = JSON.parse(allProducts)

    // let arr = parsedProducts;
    // let i = 0, ln = arr.length;
    // for (i; i < ln; i++) {
    //     arr[i].price = "$0.99"
    // }
    // const write = fs.writeFileSync(filePath, JSON.stringify(arr))
 
    return parsedProducts;
}


function addProduct(name, description, price, imgSrc) {

    const allProducts = getAllProducts();
    const product = new Product(name, description, price, imgSrc)

    allProducts.unshift(product);

    fs.writeFileSync(filePath, JSON.stringify(allProducts));
    return allProducts
}

function deleteProduct(id) {

    const allProducts = getAllProducts();

    const filteredProducts = allProducts.filter(product => product.id !== id)

    fs.writeFileSync(filePath, JSON.stringify(filteredProducts));
    return filteredProducts;
}

function editProducts(id, newName, newDescription, newPrice, newImgSrc) {
    console.log("inside model");
    const allProducts = getAllProducts();
    const productToEdit = allProducts.find(product => product.id === id);
    productToEdit.name = newName;
    productToEdit.description = newDescription;
    productToEdit.price = newPrice;
    productToEdit.imgSrc = newImgSrc;

    console.log(productToEdit)
    fs.writeFileSync(filePath, JSON.stringify(allProducts));
    return allProducts
}




exports.getAllProducts = getAllProducts
exports.addProduct = addProduct
exports.deleteProduct = deleteProduct
exports.editProducts = editProducts
export { };

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

import { Product, Products, readAllProducts } from "../models/products";



export function getAll(req, res) {
    const allproducts = readAllProducts();
    res.send(allproducts)
}


export function addProduct(req, res) {
    try {
        const productClass = new Products();

        const {id,  name, image, price, quantity, description } = req.body.newProduct;
        console.log(id, name, image, price, quantity, description);
        const product = new Product(id, name, image, price, quantity, description);
        res.cookie('cookieName', `id: ${id}`, { maxAge: 30000000, httpOnly: true });
        productClass.addItem(product);
        res.send({ products: productClass.productList });

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
}

export function deleteProduct(req, res) {

    const { productId } = req.body;
    const allProducts = new Products();
    allProducts.deleteProduct(productId);
    res.send({ deleteProduct: true, allProducts })
}


export function bringProduct(req: any, res: any) {
    const allProducts = readAllProducts();
    const { idEditProd } = req.cookies;
    const product = allProducts.find((prod) => prod.id === idEditProd)
    res.send({ "ok": 'success edit', product: product })
}

export function editProduct(req, res) {

    const allProducts = readAllProducts();
    const { idEditProd } = req.cookies;
    
    const product = allProducts.find((prod) => prod.id === idEditProd)
    const { name, image, price, quantity, description } = req.body;
    product.name = name
    product.image = image
    product.price = price
    product.quantity = quantity
    product.description = description

    fs.writeFileSync("models/data/products.json", JSON.stringify(allProducts));
    res.send({ products: allProducts });
    

}

export function bringselectedById(req: any, res: any) {
    const allProducts = readAllProducts();
    const productSelectedById = req.params;
    console.log(req.params);
    
    const product = allProducts.find((prod) => prod.id === productSelectedById)
    console.log(product);

    res.send(product)
    
}

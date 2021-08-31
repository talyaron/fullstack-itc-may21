export {};

import { Product, Products } from "../models/products";

export function newProduct(req, res) {
  try {
    const { picture, name, description, price, stock } = req.body;
    const newProduct = new Product(picture, name, description, price, stock);
    const allProducts = new Products();

    allProducts.createProducts(newProduct);
    res.send({ message: "A new Product was added", allProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
export function getAllProducts(req, res) {
    try {
        const allProducts = new Products();
        res.send({ allProducts });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
export function removeProduct(req, res) {
    try {
        const { id } = req.params;
        const allProducts = new Products();
        const productDelete = allProducts.deleteProduct(id);
        res.send({ message: "Poof! Your product has been deleted!", productDelete });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function editProduct(req, res) {
    try {
        const { id } = req.params;
        const allProducts = new Products();
        const productToUpdate = allProducts.detailsProduct(id);
        productToUpdate.name = req.body.product;
        productToUpdate.description = req.body.description;
        productToUpdate.picture = req.file.filename;
        productToUpdate.price = req.body.price;
        productToUpdate.stock = req.body.stock;
        allProducts.updateProductsJson();

        res.send({ message: "The product was edited", allProducts });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

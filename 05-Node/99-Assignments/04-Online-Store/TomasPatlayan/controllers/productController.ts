import { addProduct, Product, readProduct } from "../models/productsModel";
export {};
const fs = require("fs");
export const postProduct = (req: any, res: any) => {
  const product = new Product(
    req.body.id,
    req.body.name,
    req.body.description,
    req.body.pokeType,
    req.body.price,
    req.body.image
  );
  const addProducts = addProduct(product);
  res.send({ pokeProduct: addProducts });
};

export const getProduct = (req: any, res: any) => {
  const allProduct = readProduct();
  res.send({ pokeProduct: allProduct });
};

export const deleteProduct = (req: any, res: any) => {
  let { id } = req.params;
  const allProduct = readProduct();
  const deltePoke = allProduct.filter((element) => element.id !== id);
  fs.writeFileSync("./db/products.json", JSON.stringify(deltePoke));
  res.send(deltePoke);
};

export const bringInfo = (req: any, res: any, next) => {
  let { id } = req.params;

  const allProduct = readProduct();
  const editPoke = allProduct.find((element) => element.id === id);


  res.send(editPoke);
next()
};


export const editProduct = (req: any, res: any) => {
 
  const {name,description,pokeType,price,image}= req.body
  // const name = req.body.name;
  // const description = req.body.description;
  // const pokeType = req.body.pokeType;
  // const price = req.body.price;
  // const image = req.body.image;
  
  
  const allProduct = readProduct();
  const editPoke = allProduct.find(e=>e.id === req.params.idProduct)

  
  
 editPoke.name = name;
  editPoke.description = description;
  editPoke.pokeType = pokeType;
  editPoke.price = price;
  editPoke.image = image;
  
  fs.writeFileSync("./db/products.json", JSON.stringify(allProduct));
  res.send({products:allProduct});
};

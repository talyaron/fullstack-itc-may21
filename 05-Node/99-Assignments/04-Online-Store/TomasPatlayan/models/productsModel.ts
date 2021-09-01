export {};
//!FIJARME SI CON PONER PRIVATE ES LO MISMO
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const pasthtoProductJson = path.resolve(__dirname, "../db/products.json");

export const readProduct = () => {
  const product = fs.readFileSync(pasthtoProductJson);
  return JSON.parse(product);
};

// export const wirteProduct= (data)=> {
// const product =fs.writeFileSync(pasthtoProductJson);
// return JSON.stringify(product)
// }

export const addProduct = (product) => {
  const allProduct = readProduct();
  allProduct.push(product);
  fs.writeFileSync(pasthtoProductJson, JSON.stringify(allProduct));
  return allProduct;
};
export class Product {
  id: string;
  name: string;
  description: string;
  pokeType: string;
  price: number;
  image: string;

  constructor(
    id: string,
    name: string,
    description: string,
    pokeType: string,
    price: number,
    image: string
  ) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.pokeType = pokeType;
    this.price = price;
    this.image = image;
  }
}

export class Products {
  product: Array<Product> = [];
}

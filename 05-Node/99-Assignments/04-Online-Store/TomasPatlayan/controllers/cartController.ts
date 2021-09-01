export {};
import { Product, readProduct } from "../models/productsModel";
import { addUser, Cart, readUsers } from "../models/userModel";
const fs = require("fs");

export const addToCart = (req, res) => {
  // let {id}= req.params;

  let { id } = req.params;
  const allProduct = readProduct();
  const allUser = readUsers();
  const findP = allProduct.find((element) => element.id === id);

  const cart = new Cart(findP.ident,findP.name, findP.price,findP.image);
  const getCookie = JSON.parse(req.cookies.cookieName);
  const currentUserId = getCookie.id;
  const finCurrentUser = allUser.find((el) => el.id === currentUserId);
  finCurrentUser.cart.push(cart);
 
  fs.writeFileSync("./db/users.json", JSON.stringify(allUser));
 
  res.send({cart:allUser});
  // console.log(finCurrentUser);
  
 
};
 
export const getCart = (req,res)=> {
  
  const allUser = readUsers();
  const getCookie = JSON.parse(req.cookies.cookieName);
  const currentUserId = getCookie.id;
  const finCurrentUser = allUser.find((el) => el.id === currentUserId);
  console.log(finCurrentUser);
  res.send( finCurrentUser );
}
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require('path');
const pasthtoUserJson = path.resolve(__dirname,'../db/users.json')
 

export const readUsers = () => {
  const users = fs.readFileSync(pasthtoUserJson);
  return JSON.parse(users);
};
export const readCart = () => {
  const product = fs.readFileSync(pasthtoUserJson);
  return JSON.parse(product.cart);
};
export const  addUser = (user)=> {
  const allUser = readUsers();
  allUser.push(user)
 fs.writeFileSync(pasthtoUserJson,JSON.stringify(allUser));    
 return allUser
}


export class Cart {
  id:string;
  name: string;
  price: number;
  image:string;
 constructor(id:string,name:string,price:number,image:string) {
  this.id = uuidv4(),
  this.name =  name,
   this.price = price,
   this.image = image
 }
}

export class User {
  id:string;
  name: string;
  email: string;
  password: string;
  
  cart: Array<Cart>;
  constructor(
    id:string,
    name: string,
    email: string,
    password: string,

    cart: Array<Cart>
  ) {
this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
  }
}
// export class Admin {
//   id: string;
//   email: string;
//   password: string;
//   constructor(id: string, email: string, password: string) {
//     this.id = id;
//     this.email = email;
//     this.password = password;
//   }
// }

// export class Users {
//   users: Array<User>;
// }

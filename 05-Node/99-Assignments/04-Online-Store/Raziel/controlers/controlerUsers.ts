export {};
const { v4: uuidv4 } = require('uuid');

import { User,Users} from '../models/users';
// import {Cart,Carts} from '../models/cart';


export function registerUser(req,res) {
try {
    let{username,email,password,role}=req.body;
    const user= new User(username,email,password,role)
    console.log( user);
    const allUsers = new Users();
    allUsers.createNewUser(user);

    // const products=null;
    // const unprchCart= new Cart(regEmail,products);
    // const allCarts=new Carts();
    // allCarts.addProductsToCart(unprchCart);

    res.send({message:"New user was added"});
} catch (error) {
    console.error(error);
   res.status(500).send(error.message);
}



}

// export function findUser(req, res) {
//     try {
//         const { email } = req.params;
//         const allUsers = new Users();
//         let userInfo;

//         if (req.email) {
//             userInfo = allUsers.findUser(req.email);
//         } else {
//             userInfo = allUsers.findUser(email);
//         }
//         res.send({ message: "Username was found", userInfo });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error.message);
//     }
// }

export function login(req, res) {
    try {
        // const {email}  = req.body;
        res.send({ message: "Logged in successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
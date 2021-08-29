"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
app.use(express.json());

var Ajv = require("ajv");

var ajv = new Ajv();

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express["static"]('public')); // const multer = require('multer');
// const upload = multer({dest: __dirname + '/images'});

var publicUsersRoute = require('./routes/publicUsersRoute');

var adminUserRoute = require('./routes/adminUserRoute');

app.use('/publicUsers', publicUsersRoute);
app.use('/adminUsers', adminUserRoute); // function createGuestCookie(req, res, next) {
//     const user = users.users.find(user => req.body.email === user.email && req.body.password === user.password)
//     if (user) {
//         const userCookie = JSON.stringify(user.userID)
//         res.cookie('user', userCookie, { maxAge: 300000000, httpOnly: true });
//     }
//     next();
//   };
//   function isUserLoggedIn(req, res, next) {
//     if (req.cookies.user) {
//         next()
//     }else
//     res.status(400).send("session expired, please log back in")
//   };
// function getUserCookieID(req) {
//     try {
//         const { user } = req.cookies
//         const userID = JSON.parse(user);
//         return userID
//     } catch (e) {
//         console.error(e)
//     }
// }
// class User {
//     email: string;
//     password: string;
//     role: string;
//     userID: string;
//     cart: Array<Cart>
//     constructor(email, password, role) {
//         this.email = email;
//         this.password = password;
//         this.role = role
//         this.userID = "id" + Math.random().toString(16).slice(2);
//         this.cart = []
//     }
// }
// interface Cart {
//     product: Product, 
//     value: number
// }
// class Users {
//     users: Array<User>
//     constructor() {
//         this.users = [];
//     }
//     addUser(user: User) {
//         try {
//             this.users.push(user);
//         } catch (e) {
//             console.error(e)
//         }
//     };
// }
// const users: Users = new Users();
// users.addUser(new User("aiden.dimbleby@gmail.com", '1', "admin"))
// class Product {
//     imgSrc: string;
//     description: string;
//     price: number;
//     id: string;
//     value:number
//     constructor(imgSrc: string, description: string, price: number) {
//         try {
//             this.imgSrc = imgSrc;
//             this.description = description;
//             this.price = price;
//             this.id = "id" + Math.random().toString(16).slice(2);
//             this.value = 1
//         } catch (e) {
//             console.error(e);
//         }
//     }
// }
// class Products {
//     products: Array<Product> = [];
//     constructor() {
//     }
//     addProduct(product: Product) {
//         try {
//             this.products.push(product);
//         } catch (e) {
//             console.error(e)
//         }
//     };
//     findIndexes(productId: string) {
//         const index = this.products.findIndex(prd => prd.id === productId)
//         return index;
//     }
//     findProduct(productId: string): Product {
//         try {
//             const product: Product = this.products.find(prd => prd.id === productId);
//             if (product) {
//                 return product
//             }
//         } catch (e) {
//             console.error(e)
//         }
//     }
// }
// const products: Products = new Products();
// products.addProduct(new Product("images/coffee.png", 'Stainless Steel Travel Mug', 20))
// products.addProduct(new Product("/images/beanie.png", 'Boundary Rib Beanie', 20))
// products.addProduct(new Product("/images/3.png", 'PUMA 2021 Clash Guernsey', 30))
// products.addProduct(new Product("/images/4.png", 'PUMA 2021 Home Guernsey', 25))
// products.addProduct(new Product("/images/5.png", '2020 Three of a Kind Hoodie', 44))
// products.addProduct(new Product("/images/6.png", 'Puma 2021 Iconic Tee', 33))
// products.addProduct(new Product("/images/7.png", 'PUMA 2021 Training Singlet', 20))
// products.addProduct(new Product("/images/8.png", 'Dustin Martin Tee', 15))
// products.addProduct(new Product("/images/9.png", '2021 PUMA Padded Vest', 20))
// products.addProduct(new Product("/images/10.png", 'Super Soft Touch Sherrin', 40))
// products.addProduct(new Product("/images/11.png", 'Premiers 2020 Wall Flag', 30))
// products.addProduct(new Product("/images/12.png", 'Dustin Martin Monatge Wall Flag', 20))
// app.get('/getAllUsers', (req, res) => {
//     try {
//         res.send(users)
//     } catch (e) {
//         console.error(e)
//     }
// })
// app.post('/addUser', checkEmailValid, checkPassword, (req, res) => {
//     try {
//         const schema = {
//             type: "object",
//             properties: {
//                 email: {
//                     type: "string"
//                 },
//                 password: {
//                     type: "string"
//                 },
//                 repassword: {
//                     type: "string"
//                 },
//                 role: {
//                     type: "string"
//                 }
//             },
//             required: ["email", "password", "repassword", "role"],
//             additionalProperties: false
//         }
//         const validate = ajv.compile(schema)
//         const {
//             body
//         } = req;
//         const valid = validate(body)
//         if (!valid) {
//             validate.errors.forEach(err =>
//                 console.log(err.message)
//             )
//             throw new Error("Invalid data was transferd")
//         }
//         users.addUser(new User(body.email, body.password, body.role))
//         res.send("Register Succesful!")
//     } catch (e) {
//         console.log(e)
//         res.status(400).send({
//             error: e.message
//         });
//     }
// })
// function checkAdminLogin(req, res, next) {
//     const adminCheck = users.users.find(user => req.body.email === user.email && req.body.password === user.password)
//     if (adminCheck.role === "admin") {
//         const adminUserCookie = JSON.stringify(adminCheck.userID)
//         res.cookie('adminUser', adminUserCookie, { maxAge: 300000000, httpOnly: true });
//         res.send("/adminpage.html")
//     } else {
//         next();
//     }
// }
// function checkPassword(req, res, next) {
//     const {password, repassword} = req.body
//     console.log(password)
//     if(password === repassword){
//         next()
//     }else {
//         res.status(400).send("passwords don't match!")
//     }
// }
// function checkAdminForAllReq(req, res, next) {
//     const { adminUser } = req.cookies
//     const adminUserID = JSON.parse(adminUser);
//     const adminCheck = users.users.find(user => user.userID === adminUserID)
//     if (adminCheck.role === "admin") {
//         next();
//     } else {
//         res.status(400).send("you are not authorised to do that!!");
//     }
// }
// function checkEmailValid(req, res, next) {
//     const {email} = req.body
//    const emailValidation = users.users.find(user=> user.email === email)
//    console.log(emailValidation)
//     if (emailValidation) {
//         res.status(400).send("email already taken")
//     } else {
//         next()
//     }
// }
// app.post('/login', checkAdminLogin, createGuestCookie, (req, res) => {
//     try {
//         const schema = {
//             type: "object",
//             properties: {
//                 password: {
//                     type: "string"
//                 },
//                 email: {
//                     type: "string"
//                 }
//             },
//             required: ["password", "email"],
//             additionalProperties: false
//         }
//         const validate = ajv.compile(schema)
//         const {
//             body
//         } = req;
//         const valid = validate(body)
//         if (!valid) {
//             validate.errors.forEach(err =>
//                 console.log(err.message)
//             )
//             throw new Error("Invalid data was transferd")
//         }
//         res.send("/productlist.html");
//     } catch (e) {
//         console.log(e)
//         res.status(400).send({
//             error: e.message
//         });
//     }
// })
// app.get('/getAllProducts', (req, res) => {
//     try {
//         res.send(products)
//     } catch (e) {
//         console.error(e)
//     }
// })
// app.post('/addToCart', isUserLoggedIn, (req, res) => {
//     try {
//         const schema = {
//             type: "object",
//             properties: {
//                 productID: {
//                     type: "string"
//                 }
//             },
//             required: ["productID"],
//             additionalProperties: false
//         }
//         const validate = ajv.compile(schema)
//         const {
//             body
//         } = req;
//         const valid = validate(body)
//         if (!valid) {
//             validate.errors.forEach(err =>
//                 console.log(err.message)
//             )
//             throw new Error("Invalid data was transferd")
//         }
//         const userID = getUserCookieID(req)
//         const productToCart = products.products.find(product => product.id === body.productID)
//         users.users.find(user => user.userID === userID).cart.push({product: productToCart, value: 1})
//         res.send("users")
//     } catch (e) {
//         console.log(e)
//         res.status(400).send({
//             error: e.message
//         });
//     }
// })
// app.get("/productID", (req, res) => {
//     const { id } = req.query
//     const productToView = products.products.find(product => product.id === id)
//     res.send(productToView)
// })
// app.get("/getUserCart", isUserLoggedIn, (req, res) => {
//     const userID = getUserCookieID(req)
//     const userCart = users.users.find(user => user.userID === userID)
//     res.send(userCart.cart)
// })
// app.delete("/deleteFromCart/:productID", isUserLoggedIn, (req, res) => {
//     try {
//         const { productID } = req.params
//         console.log(productID)
//         const userID = getUserCookieID(req)
//         console.log(userID)
//         const userCart = users.users.find(user => user.userID === userID).cart.filter(cart => cart.product.id != productID)
//         const userIndex = users.users.findIndex(user => user.userID === userID)
//         users.users[userIndex].cart = userCart
//         res.send(users.users[userIndex].cart)
//     } catch (e) {
//         console.error(e)
//     }
// })
// app.put('/updateAmountFromCart', isUserLoggedIn, (req, res) => {
//     try {
//         const schema = {
//             type: "object",
//             properties: {
//                 updatedValue: {
//                     type: "number"
//                 }
//             },
//             required: ["updatedValue"],
//             additionalProperties: false
//         }
//         const validate = ajv.compile(schema)
//         const {
//             body
//         } = req;
//         const valid = validate(body)
//         if (!valid) {
//             validate.errors.forEach(err =>
//                 console.log(err.message)
//             )
//             throw new Error("Invalid data was transferd")
//         }
//         const { id } = req.query
//         const { updatedValue } = body
//         const userID = getUserCookieID(req)
//         let userToUpdate = users.users.find(user => user.userID === userID)
//         const userToUpdateIndex = users.users.findIndex(user => user.userID === userID)
//         let productToUpdate = userToUpdate.cart.find(cart => cart.product.id === id)
//         const productToUpdateIndex = userToUpdate.cart.findIndex(cart => cart.product.id === id)
//         productToUpdate.value = updatedValue
//         userToUpdate.cart[productToUpdateIndex].value = updatedValue
//         users.users[userToUpdateIndex] = userToUpdate
//         res.send("Success!")
//     } catch (e) {
//         console.log(e)
//         res.status(400).send({
//             error: e.message
//         });
//     }
// })
// app.put('/updateProducts', checkAdminForAllReq, (req, res) => {
//     try {
//         const schema = {
//             type: "object",
//             properties: {
//                 description: {
//                     type: "string"
//                 },
//                 price: {
//                     type: "number"
//                 },
//             },
//             required: ["description", "price"],
//             additionalProperties: false
//         }
//         const validate = ajv.compile(schema)
//         const {
//             body
//         } = req;
//         const valid = validate(body)
//         if (!valid) {
//             validate.errors.forEach(err =>
//                 console.log(err.message)
//             )
//             throw new Error("Invalid data was transferd")
//         }
//         const { id } = req.query
//         const { description, price } = body
//         console.log(description)
//         console.log(id)
//         const productToUpdate = products.products.find(product => product.id === id)
//         const productToUpdateIndex = products.products.findIndex(product => product.id === id)
//         productToUpdate.description = description
//         productToUpdate.price = price
//         products.products[productToUpdateIndex] = productToUpdate
//         res.send("Success!")
//     } catch (e) {
//         console.log(e)
//         res.status(400).send({
//             error: e.message
//         });
//     }
// })
// app.delete("/deleteProduct/:productID", checkAdminForAllReq, (req, res) => {
//     try {
//         const { productID } = req.params
//         const newProductList = products.products.filter(products=> products.id != productID)
//         products.products = newProductList
//         res.send("deleted")
//     } catch (e) {
//         console.error(e)
//     }
// })
// app.post('/addProduct',  (req, res) => {
//     try {
//         const schema = {
//             type: "object",
//             properties: {
//                img: {
//                    type: "string"
//                },
//                 description: {
//                     type: "string"
//                 },
//                 price: {
//                     type: "number"
//                 },
//             },
//             required: ["img", "description", "price"],
//             additionalProperties: false
//         }
//         const validate = ajv.compile(schema)
//         const {
//             body
//         } = req;
//         const valid = validate(body)
//         if (!valid) {
//             validate.errors.forEach(err =>
//                 console.log(err.message)
//             )
//             throw new Error("Invalid data was transferd")
//         }
//         console.log(body.img)
//         products.addProduct(new Product(body.img, body.description, body.price))
//         res.send("Success!")
//     } catch (e) {
//         console.log(e)
//         res.status(400).send({
//             error: e.message
//         });
//     }
// })
// app.post('/upload', upload.single('photo'), (req, res) => {
//     if(req.file) {
//         products.addProduct(new Product(req.file, "poo", 4))
//         res.send(products)
//     }
//     else throw 'error';
// });

app.listen(port, function () {
  console.log("Listening on port " + port + "...");
});
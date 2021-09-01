"use strict";
exports.__esModule = true;
exports.User = exports.Cart = exports.addUser = exports.readCart = exports.readUsers = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require('path');
var pasthtoUserJson = path.resolve(__dirname, '../db/users.json');
exports.readUsers = function () {
    var users = fs.readFileSync(pasthtoUserJson);
    return JSON.parse(users);
};
exports.readCart = function () {
    var product = fs.readFileSync(pasthtoUserJson);
    return JSON.parse(product.cart);
};
exports.addUser = function (user) {
    var allUser = exports.readUsers();
    allUser.push(user);
    fs.writeFileSync(pasthtoUserJson, JSON.stringify(allUser));
    return allUser;
};
var Cart = /** @class */ (function () {
    function Cart(id, name, price, image) {
        this.id = uuidv4(),
            this.name = name,
            this.price = price,
            this.image = image;
    }
    return Cart;
}());
exports.Cart = Cart;
var User = /** @class */ (function () {
    function User(id, name, email, password, cart) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.cart = cart;
    }
    return User;
}());
exports.User = User;
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

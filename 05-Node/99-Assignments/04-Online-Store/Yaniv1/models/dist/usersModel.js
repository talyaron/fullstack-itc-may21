"use strict";
exports.__esModule = true;
exports.Users = exports.User = exports.CartProduct = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var path = require("path");
var usersJsonPath = path.resolve(__dirname, "../users.json");
var storeJsonPath = path.resolve(__dirname, "../store.json");
var _a = require('./storeModel'), readStoreJson = _a.readStoreJson, Product = _a.Product, Store = _a.Store;
var readUsersJson = function () {
    try {
        var users = fs.readFileSync(usersJsonPath);
        return JSON.parse(users);
    }
    catch (error) {
        console.error(error.message);
    }
};
var CartProduct = /** @class */ (function () {
    function CartProduct(productUuid) {
        this.productUuid = productUuid;
        this.totalPrice = 0;
        this.quantity = 0;
    }
    return CartProduct;
}());
exports.CartProduct = CartProduct;
var User = /** @class */ (function () {
    function User(email, username, password) {
        this.userUuid = uuidv4();
        this.email = email;
        this.username = username;
        this.password = password;
        this.stores = [];
        this.cart = [];
        this.purchased = [];
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        this.users = readUsersJson();
    }
    Users.prototype.updateUsersJson = function () {
        try {
            fs.writeFileSync(usersJsonPath, JSON.stringify(this.users));
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.findUserIndex = function (userUuid, userEmail) {
        try {
            var userIndex = (userUuid) ? this.users.findIndex(function (user) { return user.userUuid === userUuid; })
                : this.users.findIndex(function (user) { return user.email === userEmail; });
            if ((userIndex === -1) && (userUuid))
                throw new Error("no user with uuid " + userUuid);
            return userIndex;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.storeUuid = function () {
        try {
            var firstAdminIndex = this.users.findIndex(function (user) { return user.stores.length > 0; });
            var storeUuid = void 0;
            if (firstAdminIndex === -1) {
                storeUuid = uuidv4(); /// if a store doesn't exist - create it
                var store = readStoreJson();
                store.storeUuid = storeUuid;
                fs.writeFileSync(storeJsonPath, JSON.stringify(store));
            }
            else
                storeUuid = this.users[firstAdminIndex].stores[0]; // else - assign the existing store (currently only 1 exists)
            return storeUuid;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.addUser = function (userEmail, userUsername, userPassword, shopperToAdmin, userIndex, role) {
        try {
            var user = new User(userEmail, userUsername, userPassword);
            var storeUuid = (role === 'admin') ? this.storeUuid() : undefined;
            var userUuid = (shopperToAdmin) ? this.users[userIndex].userUuid : user.userUuid;
            if (role === 'admin') {
                if (shopperToAdmin) {
                    this.users[userIndex].stores.push(storeUuid); // convert shopper to admin
                }
                else {
                    user.stores.push(storeUuid);
                    this.users.push(user); // add admin
                }
            }
            else
                this.users.push(user); // add shopper
            this.updateUsersJson();
            return { userUuid: userUuid, storeUuid: storeUuid };
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.completeCartProductDetails = function (quantity, productUuid) {
        try {
            var store = readStoreJson();
            var product = store.products.find(function (product) { return product.productUuid === productUuid; });
            var productPrice = product.productPrice;
            var cartProduct = new CartProduct(productUuid);
            cartProduct.productName = product.productName;
            cartProduct.quantity = quantity;
            cartProduct.totalPrice = productPrice * quantity;
            return cartProduct;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.addCartProduct = function (shopperUuid, productUuid) {
        try {
            var shopperIndex = this.findUserIndex(shopperUuid, null);
            var cartProduct = this.completeCartProductDetails(0, productUuid);
            this.users[shopperIndex].cart.push(cartProduct);
            var cartProductIndex = this.users[shopperIndex].cart.length - 1;
            this.updateUsersJson();
            return cartProductIndex;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.findCartProduct = function (shopperIndex, productUuid, mathSign) {
        try {
            var cartProductIndex = this.users[shopperIndex].cart.findIndex(function (cartProduct) { return cartProduct.productUuid === productUuid; });
            if ((cartProductIndex === -1) && (mathSign === '+'))
                cartProductIndex = this.addCartProduct(this.users[shopperIndex].userUuid, productUuid);
            return cartProductIndex;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.deleteCartProduct = function (shopperUuid, productUuid) {
        try {
            var shopperIndex = this.findUserIndex(shopperUuid, null);
            this.users[shopperIndex].cart = this.users[shopperIndex].cart.filter(function (cartProduct) { return cartProduct.productUuid !== productUuid; });
            this.updateUsersJson();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.updateCartProductQuantity = function (shopperUuid, productUuid, mathSign) {
        try {
            var shopperIndex = this.findUserIndex(shopperUuid, null);
            var cartProductIndex = this.findCartProduct(shopperIndex, productUuid, mathSign);
            if (mathSign === '+')
                this.users[shopperIndex].cart[cartProductIndex].quantity++;
            else
                this.users[shopperIndex].cart[cartProductIndex].quantity--;
            var cartProductQuantity = this.users[shopperIndex].cart[cartProductIndex].quantity;
            var cartProduct = void 0;
            if (cartProductQuantity === 0)
                this.deleteCartProduct(shopperUuid, productUuid);
            else {
                cartProduct = this.completeCartProductDetails(cartProductQuantity, productUuid);
                this.users[shopperIndex].cart[cartProductIndex] = cartProduct;
            }
            this.updateUsersJson();
            return cartProduct;
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.updatePurcased = function (shopperIndex /*, storeUuid: string*/) {
        var _this = this;
        try {
            this.users[shopperIndex].cart.forEach(function (cartProduct) {
                var cartProductIndex = _this.users[shopperIndex].purchased.findIndex(function (cartProductPurchased) { return cartProductPurchased.productUuid == cartProduct.productUuid; });
                if (cartProductIndex === -1)
                    _this.users[shopperIndex].purchased.push(cartProduct);
                else {
                    _this.users[shopperIndex].purchased[cartProductIndex].quantity += cartProduct.quantity;
                    _this.users[shopperIndex].purchased[cartProductIndex].totalPrice += cartProduct.totalPrice;
                }
            });
            var store_1 = readStoreJson();
            this.users[shopperIndex].cart.forEach(function (cartProduct) {
                var productIndex = store_1.products.findIndex(function (product) { return product.productUuid === cartProduct.productUuid; });
                store_1.products[productIndex].inStock -= cartProduct.quantity;
            });
            fs.writeFileSync(storeJsonPath, JSON.stringify(store_1));
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Users.prototype.emptyCart = function (shopperUuid /*, storeUuid: string*/) {
        try {
            var shopperIndex = this.findUserIndex(shopperUuid, null);
            this.updatePurcased(shopperIndex /*, storeUuid*/); // storeUuid will be used when there is more than 1 store
            this.users[shopperIndex].cart = [];
            this.updateUsersJson();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Users;
}());
exports.Users = Users;

var _a = require('../models/classes'), users = _a.users, products = _a.products;
function addCart(productID, userID) {
    try {
        var productToCart = products.findProduct(productID);
        users.findUser(userID).cart.push({ product: productToCart, value: 1 }); //YS: Split this into more variables. (findUser in one line, push in another line)
    }
    catch (e) {
        console.error(e);
    }
}
function deleteCart(userID, productID) {
    try {
        var userCart = users.findUser(userID).cart.filter(function (cart) { return cart.product.id != productID; }); //YS: Split this into more variables. (findUser in one line, filter in another line)
        var userIndex = users.findIndexofUser(userID);
        users.users[userIndex].cart = userCart;
        return userCart;
    }
    catch (e) {
        console.error(e);
    }
}
function updateCartItemValue(userID, productID, updatedValue) {
    try {
        var userToUpdate = users.findUser(userID);
        var userToUpdateIndex = users.findIndexofUser(userID);
        var productToUpdate = userToUpdate.cart.find(function (cart) { return cart.product.id === productID; }); //YS: Split this into more variables.
        var productToUpdateIndex = userToUpdate.cart.findIndex(function (cart) { return cart.product.id === productID; }); //YS: Split this into more variables.
        productToUpdate.value = updatedValue;
        userToUpdate.cart[productToUpdateIndex].value = updatedValue; //YS: Split this into more variables.
        users.users[userToUpdateIndex] = userToUpdate; //YS: Split this into more variables.
    }
    catch (e) {
        console.error(e);
    }
}
module.exports = { addCart: addCart, deleteCart: deleteCart, updateCartItemValue: updateCartItemValue };

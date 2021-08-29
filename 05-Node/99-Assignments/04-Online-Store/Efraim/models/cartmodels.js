var _a = require('../models/classes'), users = _a.users, products = _a.products;
function addCart(productID, userID) {
    try {
        var productToCart = products.findProduct(productID);
        users.findUser(userID).cart.push({ product: productToCart, value: 1 });
    }
    catch (e) {
        console.error(e);
    }
}
function deleteCart(userID, productID) {
    try {
        var userCart = users.findUser(userID).cart.filter(function (cart) { return cart.product.id != productID; });
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
        var productToUpdate = userToUpdate.cart.find(function (cart) { return cart.product.id === productID; });
        var productToUpdateIndex = userToUpdate.cart.findIndex(function (cart) { return cart.product.id === productID; });
        productToUpdate.value = updatedValue;
        userToUpdate.cart[productToUpdateIndex].value = updatedValue;
        users.users[userToUpdateIndex] = userToUpdate;
    }
    catch (e) {
        console.error(e);
    }
}
module.exports = { addCart: addCart, deleteCart: deleteCart, updateCartItemValue: updateCartItemValue };

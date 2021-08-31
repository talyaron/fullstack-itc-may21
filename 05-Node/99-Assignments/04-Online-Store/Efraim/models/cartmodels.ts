const { users, products } = require('../models/classes')

function addCart(productID, userID){
    try{
    const productToCart = products.findProduct(productID)
    users.findUser(userID).cart.push({ product: productToCart, value: 1 })
}catch (e) {
    console.error(e)
}}

function deleteCart(userID, productID){
    try{
        const userCart = users.findUser(userID).cart.filter(cart => cart.product.id != productID)
        const userIndex: number = users.findIndexofUser(userID)
        users.users[userIndex].cart = userCart
        return userCart
    }catch (e) {
    console.error(e)
}}

function updateCartItemValue(userID, productID, updatedValue){
    try{
        let userToUpdate = users.findUser(userID)
        const userToUpdateIndex: number = users.findIndexofUser(userID)
        let productToUpdate = userToUpdate.cart.find(cart => cart.product.id === productID)
        const productToUpdateIndex: number = userToUpdate.cart.findIndex(cart => cart.product.id === productID)
        productToUpdate.value = updatedValue
        userToUpdate.cart[productToUpdateIndex].value = updatedValue
        users.users[userToUpdateIndex] = userToUpdate
    }catch (e) {
    console.error(e)
}}




module.exports = { addCart, deleteCart, updateCartItemValue }
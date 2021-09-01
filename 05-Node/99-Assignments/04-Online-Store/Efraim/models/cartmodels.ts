const { users, products } = require('../models/classes')

function addCart(productID, userID){
    try{
    const productToCart = products.findProduct(productID)
    users.findUser(userID).cart.push({ product: productToCart, value: 1 }) //YS: Split this into more variables. (findUser in one line, push in another line)
}catch (e) {
    console.error(e)
}}

function deleteCart(userID, productID){
    try{
        const userCart = users.findUser(userID).cart.filter(cart => cart.product.id != productID) //YS: Split this into more variables. (findUser in one line, filter in another line)
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
        let productToUpdate = userToUpdate.cart.find(cart => cart.product.id === productID) //YS: Split this into more variables.
        const productToUpdateIndex: number = userToUpdate.cart.findIndex(cart => cart.product.id === productID) //YS: Split this into more variables.
        productToUpdate.value = updatedValue
        userToUpdate.cart[productToUpdateIndex].value = updatedValue //YS: Split this into more variables.
        users.users[userToUpdateIndex] = userToUpdate //YS: Split this into more variables.
    }catch (e) {
    console.error(e)
}}




module.exports = { addCart, deleteCart, updateCartItemValue }
async function getCartFromServer() {
  try {
    const cart = await axios.get("/cart/getUserCart", {headers: headers})
    if (!cart) {
      throw new Error("Cart isnt passing to this page");
    }
    let html: string = ''
    let cartItemPrice: number = 1
    cart.data.map((cart) => {
      cartItemPrice = cart.product.price * cart.value
      html +=
        `<div class= "shopping-cart__put__item">
          <img class="shopping-cart__put__item__item-image" src=${cart.product.imgSrc} alt="">
          <h2  class="shopping-cart__put__item__item-name">${cart.product.description}</h2>
          <h3  class="shopping-cart__put__item__item-price">$${cartItemPrice}</h3>
          <input id="${cart.product.id}value" class="shopping-cart__put__item__count" name="value" onchange="updateCartItemValue('${cart.product.id}')" type="number" value="${cart.value}" min="0" max="50">
          <h3 class="shopping-cart__put__item__delete" onclick="deleteFromCart('${cart.product.id}')">x</h3>
           </div>`

    })

    const shoppingCartDOM: HTMLElement = document.querySelector(".shopping-cart__put");
    shoppingCartDOM.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}
window.addEventListener("load", getCartFromServer)

const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      Authorization: `Bearer ${token}`,
    };

async function deleteFromCart(productID: string) {
  try {
    
    const newCart = await axios.delete(`/cart/deleteFromCart/${productID}`, {headers: headers})
    await getCartFromServer()
  } catch (e) {
    console.error(e)
  }
}

async function updateCartItemValue(id) {
  try {
    const cartItem: HTMLElement = document.getElementById(`${id}value`)
    const cartItemValue: number = parseInt(cartItem.value)
    const updateNewCartItemValue = await axios.put(`/cart/updateAmountFromCart?id=${id}`, {
      updatedValue: cartItemValue
    }, {headers: headers})
    await getCartFromServer()
  } catch (e) {
    console.error(e)
  }
}


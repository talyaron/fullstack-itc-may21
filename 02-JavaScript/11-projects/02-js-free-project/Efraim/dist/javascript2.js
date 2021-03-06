// if had more time/required a third page, i would have liked to have made this a form to be able to collect the input of the number
//of items the customer wanted..
function getCartFromStorage(domElement) {
    try {
        var cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            throw new Error('Cart isnt passing to this page');
        }
        var html = cart.map(function (cart) {
            return ("<div class= \"shopping-cart__put__item\">"
                +
                    ("<img class=\"shopping-cart__put__item__item-image\" src=" + cart.imgSrc + " alt=\"\">") +
                ("<h2  class=\"shopping-cart__put__item__item-name\">" + cart.description + "</h2>") +
                ("<h3  class=\"shopping-cart__put__item__item-price\">$" + cart.price + "</h3>") +
                "<input class=\"shopping-cart__put__item__count\" name=\"value\" type=\"number\" value=\"0\" min=\"0\" max=\"50\">" +
                " </div>");
        }).join('');
        domElement.innerHTML = html;
    }
    catch (e) {
        console.error(e);
    }
}
try {
    var shoppingCartDOM = document.querySelector('.shopping-cart__put');
    if (!shoppingCartDOM) {
        throw new Error('No cart to display items');
    }
    getCartFromStorage(shoppingCartDOM);
}
catch (e) {
    console.error(e);
}
//original plan continued
// function renderProducts(domElement: any) {
//     let cart:Array<string> = JSON.parse(localStorage.getItem('cart'));
//     console.log(cart);
//     for(let i=0; i < cart.length; i++){
//     let html1:string = `<div class= "item"> ${cart[i]} 
//         <div class="quantity">
//             <button class="plus-btn" type="button" name="button">
//                 <img src="plus.svg" alt="" />
//             </button>
//             <input class="count" type="number" value="0" min="0" max="50">
//             <button class="minus-btn" type="button" name="button">
//                 <img src="minus.svg" alt=""/>
//             </button>
//         </div>
//     </div><br>`;
//     let html = '';
//     html += html1;
//     domElement.innerHTML = html;
//   }}

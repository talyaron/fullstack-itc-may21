
function getCartFromStorage(domElement: any){
  let cart:Array<any> = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
  let html: string = cart.map(cart => {
    return (
      `<div class= "shopping-cart__put__item">`
       +
      `<img class="shopping-cart__put__item__item-image" src=${cart.imgSrc} alt="">` +
      `<h2  class="shopping-cart__put__item__item-name">${cart.description}</h2>` +
      `<h3  class="shopping-cart__put__item__item-price">$${cart.price}</h3>` +
      `<input class="shopping-cart__put__item__count" type="number" value="0" min="0" max="50">`+
      ` </div>` )
  }).join('')

  domElement.innerHTML = html;
  
  }



const shoppingCartDOM = document.querySelector('.shopping-cart__put');
getCartFromStorage(shoppingCartDOM);





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





















// $('.like-btn').on('click', function() {
//     $(this).toggleClass('is-active');
//  });


function renderProducts(domElement: any) {
    let cart:Array<string> = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    for(let i=0; i < cart.length; i++){
    let html1:string = `<div class= "item"> ${cart[i]} 
        <div class="quantity">
            <button class="plus-btn" type="button" name="button">
                <img src="plus.svg" alt="" />
            </button>
            <input class="count" type="number" value="0" min="0" max="50">
            <button class="minus-btn" type="button" name="button">
                <img src="minus.svg" alt=""/>
            </button>
        </div>
    </div><br>`;
    let html = '';
    html += html1;
    
    domElement.innerHTML = html;
  }}








  
  const shoppingListDOM = document.querySelector('.put');
  renderProducts(shoppingListDOM);


  function addToCart() {
    let divs:any = document.querySelectorAll('.plus-btn');
    let divs1:any = document.querySelectorAll('.minus-btn');
    let counter:number = document.querySelectorAll('.count').val;
    for (let i = 0; i < divs1.length; i++) {
        let counters = counter[i];
        divs1[i].addEventListener('click', function() {
          counters = counters - 1;
          counter[i] = counters;
          console.log(counters)
        });}
    for (let i = 0; i < divs.length; i++) {
        let counters = counter[i];
        divs[i].addEventListener('click', function() {
         
          counters = counters + 1;
          counter[i] = counters;
          console.log(counters)
        });}
};
  addToCart();
  const count = document.querySelector(".count");
  console.log(count);









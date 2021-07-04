class Product {
  imgSrc: string;
  description: string;
  price: number;
  id: string;

  constructor(imgSrc: string, description: string, price: number) {
    try {
      this.imgSrc = imgSrc;
      this.description = description;
      this.price = price;
      this.id = "id" + Math.random().toString(16).slice(2)
    } catch (e) {
      console.error(e);
    }
  }

}
class Cart {
  cart: Array<Product> = [];

  addToCart(product: Product) {
    try {
      this.cart.push(product);
    } catch (e) {
      console.error(e)
    }
  }
}



class Products {
  products: Array<Product> = [];
  constructor() {

  }

  addProduct(product: Product) {
    try {
      this.products.push(product);
    } catch (e) {
      console.error(e)
    }
  };

  renderProducts(domElement: Element) {
    try{
    let html: string = this.products.map(product => {
      return (
        `<div id='${product.id}'  class="shopping-list__item-wrapper">` +
        `<img class="shopping-list__item-wrapper__item-image" src=${product.imgSrc} alt="">` +
        `<h2  class="shopping-list__item-wrapper__item-name">${product.description}</h2>` +
        `<h3  class="shopping-list__item-wrapper__item-price">$${product.price}</h3>` +
        `<button  id='${product.id}' class="shopping-list__item-wrapper__add" onclick="moveToCart('${product.id}')">Add to Cart</button>` +
        ` </div>`
      )
    }).join('')

    domElement.innerHTML = html;
  }catch(e){
    console.error(e)
  }
}

  findProduct(productId: string): Product | false {
    try{
    const product: Product = this.products.find(prd => prd.id === productId);
    if (product) {
      return product
    } else {
      return false;
    }
  }catch(e){
    console.error(e)
  }
}
}

const products: Products = new Products();
const cart: Cart = new Cart();
const moveToCart = (productId: string) => {
  try {
  const product: Product | false = products.findProduct(productId)
  console.log(product);
  if (product !== false) {
    cart.addToCart(product);
    
    window.localStorage.setItem('cart', JSON.stringify(cart.cart));
  }}catch(e){
    console.error(e)
  }
};



try{
const shoppingListDOM = document.querySelector('.shopping-list');
if (!shoppingListDOM){
  throw new Error('No shopping list to hold items!')
}
products.addProduct(new Product("coffee.png", 'Stainless Steel Travel Mug', 12.99))
products.addProduct(new Product("beanie.png", 'Boundary Rib Beanie', 15.95))
products.addProduct(new Product("3.png", 'PUMA 2021 Clash Guernsey', 39.95))
products.addProduct(new Product("4.png", 'PUMA 2021 Home Guernsey', 39.95))
products.addProduct(new Product("5.png", '2020 Three of a Kind Hoodie', 49.99))
products.addProduct(new Product("6.png", 'Puma 2021 Iconic Tee', 29.95))
products.addProduct(new Product("7.png", 'PUMA 2021 Training Singlet', 79.95))
products.addProduct(new Product("8.png", 'Dustin Martin Tee', 39.95))
products.addProduct(new Product("9.png", '2021 PUMA Padded Vest', 79.95))
products.addProduct(new Product("10.png", 'Super Soft Touch Sherrin', 15.99))
products.addProduct(new Product("11.png", 'Premiers 2020 Wall Flag', 27.95))
products.addProduct(new Product("12.png", 'Dustin Martin Monatge Wall Flag', 39.95))
products.renderProducts(shoppingListDOM);

}catch(e){
  console.error(e)
}


//function works.. can't solve the error, tried lots of try and catch and it seems to disable the function
function colorChangeButton() {
  let button: Array<any> = document.querySelectorAll(".shopping-list__item-wrapper__add");
  let counter: number = parseInt(document.querySelector('.nav__cart__count').innerHTML);
  for (let i = 0; i <= button.length; i++) {
    button[i].addEventListener('click', function () {
      button[i].style.background = 'red';
      button[i].style.color = 'white'
      button[i].innerHTML = 'selected'
      counter = counter + 1;
      document.querySelector('.nav__cart__count').innerHTML = counter;
      button[i].disabled = true;
    })
  }
};
colorChangeButton();


//original plan


// function addToCart() {
//   let divs:any = document.querySelectorAll('.shopping-list__item-wrapper__add');
//   let divs1:any = document.querySelectorAll('.shopping-list__item-wrapper');
//   let cart:Array<string> = [];
//   

//   for (let i = 0; i < divs.length; i++) {
//       divs[i].addEventListener('click', function() {
//        let purchase = divs1[i].children[0].outerHTML + divs1[i].children[1].outerHTML + divs1[i].children[2].outerHTML ;
//         cart.push(purchase);
//         console.log(cart);
//         console.log(JSON.stringify(cart));

//         localStorage.setItem('cart', JSON.stringify(cart));
//         
//         console.log(counter)
//       });
// }};
// addToCart();


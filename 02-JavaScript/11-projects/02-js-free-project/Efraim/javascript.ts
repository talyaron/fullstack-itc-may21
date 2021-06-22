class Product {
  imgSrc: string;
  description: string;
  price: number;
  id: string;

  constructor(imgSrc: string, description: string, price: number) {
    this.imgSrc = imgSrc;
    this.description = description;
    this.price = price;
    this.id = "id" + Math.random().toString(16).slice(2)
  }

}
class Cart {
  cart: Array<Product> = [];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
  }

  
}



class Products {
  products: Array<Product> = [];
  constructor() {

  }

  addProduct(product: Product) {
    this.products.push(product);
  };

  renderProducts(domElement: any) {
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
  }

  findProduct(productId: string): Product | false {
    const product: Product = this.products.find(prd => prd.id === productId);
    if (product) {
      return product
    } else {
      return false;
    }
  }

}
const moveToCart = (productId: string) => {
  console.log(productId)
  const product: Product | false = products.findProduct(productId)
  console.log(product);
  if (product !== false) {
    cart.addToCart(product);
    console.log(cart)
    window.localStorage.setItem('cart', JSON.stringify(cart.cart));
  }

};




const shoppingListDOM = document.querySelector('.shopping-list');
const products:Products = new Products();
const cart: Cart = new Cart();

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
console.log(products)

function colorChangeButton() {
  let button:Array<any> = document.querySelectorAll(".shopping-list__item-wrapper__add");
  let counter:number = parseInt(document.querySelector('.nav__cart__count').innerHTML);
  for (let i=0; i <= button.length; i++ ) {
  button[i].addEventListener('click', function() {
    button[i].style.background = 'red';
    button[i].style.color = 'white'
    button[i].innerHTML = 'selected'
    counter = counter + 1;
    document.querySelector('.nav__cart__count').innerHTML = counter;
    button[i].disabled = true;
  })}
}
colorChangeButton();



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


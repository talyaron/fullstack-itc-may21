class Cart {
  
  products:Array<Product>= [];
  
}
class PurchaseList {
  purchases: Array<Cart> = [];

  add(purchases: Purchase) {
    this.purchases.push(purchases);
  }

}

class Product {
  imgSrc: string;
  descrioption: string;
  price: number;
  id:string;

  constructor(imgSrc: string, description: string, price: number) {
    this.imgSrc = imgSrc;
    this.descrioption = description;
    this.price = price;
    this.id = "id" + Math.random().toString(16).slice(2)
  }

}

class Products {
  products: Array<Product> = [];

  addProduct(product: Product) {
    this.products.push(product);
  };

  renderProducts(domElement: any) {
    let html: string = this.products.map(product => {
      return (
        `<div class="shopping-list__item-wrapper">` +
        `<img class="shopping-list__item-wrapper__item-image" src=${product.imgSrc} alt="">` +
        `<h2 class="shopping-list__item-wrapper__item-name">${product.descrioption}</h2>` +
        `<h3 class="shopping-list__item-wrapper__item-price">$${product.price}</h3>` +
        `<button class="shopping-list__item-wrapper__add">Add to Cart</button>` +
        ` </div>`
      )
    }).join('')

    domElement.innerHTML = html;
  }

  addToCart(cart:Cart, productId:string){
    //find the product and copy to the purchse list\

    // push to the cart
  }
}

const shoppingListDOM = document.querySelector('.shopping-list');
const products = new Products();

products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/640w/products/1390/2659/425520f6ae9f161c0678d9ba5afa2dda224db51d__32420.1620949986.jpg?c=2",'Stainless Steel Travel Mug', 12))
console.log(products)
products.renderProducts(shoppingListDOM)
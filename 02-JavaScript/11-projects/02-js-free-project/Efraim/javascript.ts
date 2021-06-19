class Cart {
  products:Array<Product>= [];
  
}
class PurchaseList {
  purchases: Array<Cart> = [];
}

class Product {
  imgSrc: string;
  description: string;
  price: number;
  id:string;

  constructor(imgSrc: string, description: string, price: number) {
    this.imgSrc = imgSrc;
    this.description = description;
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
        `<div id='${product.id}' class="shopping-list__item-wrapper">` +
        `<img class="shopping-list__item-wrapper__item-image" src=${product.imgSrc} alt="">` +
        `<h2  class="shopping-list__item-wrapper__item-name">${product.description}</h2>` +
        `<h3  class="shopping-list__item-wrapper__item-price">$${product.price}</h3>` +
        `<button  class="shopping-list__item-wrapper__add" onclick"addToCart()">Add to Cart</button>` +
        ` </div>`
      )}).join('')

    domElement.innerHTML = html;
  }
  addToCart(product1: Product) {
    let arr = [];
    arr = this.products.push(product1);
    console.log(arr);
    }
  
  }


  //addToCart(cart:Cart, productId:string){
    //find the product and copy to the purchse list\
    //console.log(cart);
    //console.log(productId);
    // push to the cart
 

const shoppingListDOM = document.querySelector('.shopping-list');
const products = new Products();
const cart = new 
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/640w/products/1390/2659/425520f6ae9f161c0678d9ba5afa2dda224db51d__32420.1620949986.jpg?c=2",'Stainless Steel Travel Mug', 12.00))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1379/2647/9GA050Z014__93656.1619403744.png?c=2", 'Boundary Rib Beanie', 15.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1371/2627/759626_01__RFC_Clash_Guernsey01_002__92484.1618454507.png?c=2", 'PUMA 2021 Clash Guernsey', 39.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1322/2541/759621_01_RFC_Home_Guernsey01__30436.1614059477.jpg?c=2", 'PUMA 2021 Home Guernsey', 39.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1324/2556/769650_01-RFC-Iconic-Tee__91755.1615440284.jpg?c=2", 'Puma 2021 Iconic Tee', 29.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1264/2435/AF9693S-MENS-3-OF-A-KIND-HOOD__82679.1606193169.PNG?c=2", '2020 Three of a Kind Hoodie', 49.00))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/882/1766/2020TLSS-PumaRange-Training-Singlet__73065.1597898097.jpg?c=2", 'PUMA 2021 Training Singlet', 79.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1268/2441/AF9699S_MENS_DUSTY_TEE__42254.1606705553.PNG?c=2", 'Dustin Martin Tee', 39.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/896/1755/2020TLSS-PumaRange-Media-Vest__74361.1601614986.jpg?c=2", '2021 PUMA Padded Vest', 79.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1384/2648/252777c475a00693fdb29634278ee50b1284711e__02750.1620258223.jpg?c=2", 'Super Soft Touch Sherrin', 15.00))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1391/2660/AFL20489W__92918.1620951389.jpg?c=2", 'Premiers 2020 Wall Flag', 27.95))
products.addProduct(new Product("https://cdn11.bigcommerce.com/s-ivqh5iw8nz/images/stencil/320w/products/1277/2455/AFL20489V-Dustin-Martin-Norm-Smith-Montage-Wall-Flag__70849.1611015471.jpg?c=2", 'Dustin Martin Monatge Wall Flag', 39.95))
products.renderProducts(shoppingListDOM);




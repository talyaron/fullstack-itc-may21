"use strict";

// variables and constants
var cartContainer = document.querySelector('.cart-container');
var productList = document.querySelector('.product-list');
var cartList = document.querySelector('.cart-list');
var cartTotalValue = document.getElementById('cart-total-value');
var cartCountInfo = document.getElementById('cart-count-info');
var cartItemID = 1;
eventListeners(); // all event listeners

function eventListeners() {
  window.addEventListener('DOMContentLoaded', function () {
    // loadJSON();
    loadCart();
  }); // toggle navbar when toggle button is clicked

  document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
  }); // show/hide cart container

  document.getElementById('cart-btn').addEventListener('click', function () {
    cartContainer.classList.toggle('show-cart-container');
  }); // add to cart

  productList.addEventListener('click', purchaseProduct); // delete from cart

  cartList.addEventListener('click', deleteProduct);
} // update cart info


function updateCartInfo() {
  var cartInfo = findCartInfo();
  cartCountInfo.textContent = cartInfo.productCount;
  cartTotalValue.textContent = cartInfo.total;
} // load product items content form JSON file
// function loadJSON(){
//     fetch('furniture.json')
//     .then(response => response.json())
//     .then(data =>{
//         let html = '';
//         data.forEach(product => {
//             html += `
//                 <div class = "product-item">
//                     <div class = "product-img">
//                         <img src = "${product.imgSrc}" alt = "product image">
//                         <button type = "button" onclick="openLoginForm()"    class = "add-to-cart-btn">
//                         <i class="far fa-edit"></i>Edit
//                         </button>
//                         <button type = "button" class = "add2-to-cart-btn">
//                         <i class="fas fa-trash-alt"></i>Delete
//                     </button>
//                     </div>
//                     <div class = "product-content">
//                         <h3 class = "product-name">${product.name}</h3>
//                         <span class = "product-category">${product.category}</span>
//                         <p class = "product-price">$${product.price}</p>
//                     </div>
//                 </div>
//             `;
//         });
//         productList.innerHTML = html;
//     })
//     .catch(error => {
//         alert(`User live server or local server`);
//     })
// }
// purchase product


function purchaseProduct(e) {
  if (e.target.classList.contains('add-to-cart-btn')) {
    var product = e.target.parentElement.parentElement;
    getProductInfo(product);
  }
} // get product info after add to cart button click


function getProductInfo(product) {
  var productInfo = {
    id: cartItemID,
    imgSrc: product.querySelector('.product-img img').src,
    name: product.querySelector('.product-name').textContent,
    category: product.querySelector('.product-category').textContent,
    price: product.querySelector('.product-price').textContent
  };
  cartItemID++;
  addToCartList(productInfo);
  saveProductInStorage(productInfo);
} // add the selected product to the cart list


function addToCartList(product) {
  var cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-id', "".concat(product.id));
  cartItem.innerHTML = "\n        <img src = \"".concat(product.imgSrc, "\" alt = \"product image\">\n        <div class = \"cart-item-info\">\n            <h3 class = \"cart-item-name\">").concat(product.name, "</h3>\n            <span class = \"cart-item-category\">").concat(product.category, "</span>\n            <span class = \"cart-item-price\">").concat(product.price, "</span>\n        </div>\n\n        <button type = \"button\" class = \"cart-item-del-btn\">\n            <i class = \"fas fa-times\"></i>\n        </button>\n    ");
  cartList.appendChild(cartItem);
} // save the product in the local storage


function saveProductInStorage(item) {
  var products = getProductFromStorage();
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
  updateCartInfo();
} // get all the products info if there is any in the local storage


function getProductFromStorage() {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []; // returns empty array if there isn't any product info
} // load carts product


function loadCart() {
  var products = getProductFromStorage();

  if (products.length < 1) {
    cartItemID = 1; // if there is no any product in the local storage
  } else {
    cartItemID = products[products.length - 1].id;
    cartItemID++; // else get the id of the last product and increase it by 1
  }

  products.forEach(function (product) {
    return addToCartList(product);
  }); // calculate and update UI of cart info 

  updateCartInfo();
} // calculate total price of the cart and other info


function findCartInfo() {
  var products = getProductFromStorage();
  var total = products.reduce(function (acc, product) {
    var price = parseFloat(product.price.substr(1)); // removing dollar sign

    return acc += price;
  }, 0); // adding all the prices

  return {
    total: total.toFixed(2),
    productCount: products.length
  };
} // delete product from cart list and local storage


function deleteProduct(e) {
  var cartItem;

  if (e.target.tagName === "BUTTON") {
    cartItem = e.target.parentElement;
    cartItem.remove(); // this removes from the DOM only
  } else if (e.target.tagName === "I") {
    cartItem = e.target.parentElement.parentElement;
    cartItem.remove(); // this removes from the DOM only
  }

  var products = getProductFromStorage();
  var updatedProducts = products.filter(function (product) {
    return product.id !== parseInt(cartItem.dataset.id);
  });
  localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion

  updateCartInfo();
}
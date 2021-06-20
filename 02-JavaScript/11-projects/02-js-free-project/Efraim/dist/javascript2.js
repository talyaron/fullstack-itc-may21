// $('.like-btn').on('click', function() {
//     $(this).toggleClass('is-active');
//  });
function renderProducts(domElement) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    for (var i = 0; i < cart.length; i++) {
        var html1 = "<div class= \"item\"> " + cart[i] + " \n        <div class=\"quantity\">\n            <button class=\"plus-btn\" type=\"button\" name=\"button\">\n                <img src=\"plus.svg\" alt=\"\" />\n            </button>\n            <input class=\"count\" type=\"number\" value=\"0\" min=\"0\" max=\"50\">\n            <button class=\"minus-btn\" type=\"button\" name=\"button\">\n                <img src=\"minus.svg\" alt=\"\"/>\n            </button>\n        </div>\n    </div><br>";
        var html = '';
        html += html1;
        domElement.innerHTML = html;
    }
}
var shoppingListDOM = document.querySelector('.put');
renderProducts(shoppingListDOM);
function addToCart() {
    var divs = document.querySelectorAll('.plus-btn');
    var divs1 = document.querySelectorAll('.minus-btn');
    var counter = document.querySelectorAll('.count').val;
    var _loop_1 = function (i) {
        var counters = counter[i];
        divs1[i].addEventListener('click', function () {
            counters = counters - 1;
            counter[i] = counters;
            console.log(counters);
        });
    };
    for (var i = 0; i < divs1.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        var counters = counter[i];
        divs[i].addEventListener('click', function () {
            counters = counters + 1;
            counter[i] = counters;
            console.log(counters);
        });
    };
    for (var i = 0; i < divs.length; i++) {
        _loop_2(i);
    }
}
;
addToCart();
var count = document.querySelector(".count");
console.log(count);

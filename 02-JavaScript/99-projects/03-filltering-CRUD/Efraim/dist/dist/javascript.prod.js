"use strict";var Product=function(t,e,r){try{this.imgSrc=t,this.description=e,this.price=r,this.id="id"+Math.random().toString(16).slice(2),this.id2="id"+Math.random().toString(16).slice(2),this.id3="id"+Math.random().toString(16).slice(2)}catch(t){console.error(t)}},Products=function(){function t(){this.products=[]}return t.prototype.addProduct=function(t){try{this.products.push(t)}catch(t){console.error(t)}},t.prototype.renderProducts=function(t){try{var e=this.products.map(function(t){return"<div id='"+t.id+'\'  class="shopping-list__item-wrapper"><img class="shopping-list__item-wrapper__item-image" src='+t.imgSrc+' alt=""><div id=\''+t.id2+'\'> - Edit the text and click to save for next time</div><h2  class="shopping-list__item-wrapper__item-name edit" id="'+t.id3+'" contenteditable="true">'+t.description+'</h2><h3  class="shopping-list__item-wrapper__item-price">'+t.price+'</h3><input type="button"  value="save my edits" onclick="saveEdits(\''+t.id+"', '"+t.description+"', '"+t.id2+'\')"/><button class="shopping-list__item-wrapper__add" onclick="deleteProduct(\''+t.id+"')\">Delete</button> </div>"}).join("");t.innerHTML=e}catch(t){console.error(t)}},t.prototype.findIndexes=function(e){return this.products.findIndex(function(t){return t.id===e})},t.prototype.findProduct=function(e){try{var t=this.products.find(function(t){return t.id===e});if(t)return t}catch(t){console.error(t)}},t}(),products=new Products,deleteProduct=function(t){try{var e=document.querySelector(".shopping-list"),r=products.findIndexes(t);console.log(r),products.products.splice(r,1),products.renderProducts(e)}catch(t){console.error(t)}};try{var shoppingListDOM=document.querySelector(".shopping-list");if(!shoppingListDOM)throw new Error("No shopping list to hold items!");products.addProduct(new Product("coffee.png","Stainless Steel Travel Mug",2007)),products.addProduct(new Product("beanie.png","Boundary Rib Beanie",2010)),products.addProduct(new Product("3.png","PUMA 2021 Clash Guernsey",2021)),products.addProduct(new Product("4.png","PUMA 2021 Home Guernsey",2017)),products.addProduct(new Product("5.png","2020 Three of a Kind Hoodie",2020)),products.addProduct(new Product("6.png","Puma 2021 Iconic Tee",2021)),products.addProduct(new Product("7.png","PUMA 2021 Training Singlet",2021)),products.addProduct(new Product("8.png","Dustin Martin Tee",2019)),products.addProduct(new Product("9.png","2021 PUMA Padded Vest",2021)),products.addProduct(new Product("10.png","Super Soft Touch Sherrin",2010)),products.addProduct(new Product("11.png","Premiers 2020 Wall Flag",2020)),products.addProduct(new Product("12.png","Dustin Martin Monatge Wall Flag",2018)),products.renderProducts(shoppingListDOM)}catch(t){console.error(t)}function handleSubmit(t){t.preventDefault();var e=t.target.children.imgSrc.value,r=t.target.children.description.value,o=t.target.children.year.value,n=document.querySelector(".shopping-list");products.addProduct(new Product('"'+e+'"',""+r,""+o)),products.renderProducts(n),console.log(products.products),sessionStorage.setItem("products",JSON.stringify(products.products)),t.target.reset()}var nameUpdate=products.products.map(function(t){return t.description});function saveEdits(t,e,r){var o=products.findIndexes(t);console.log(o);var n=document.querySelectorAll(".edit");nameUpdate.length=n.length,nameUpdate[o]=n[o].innerHTML,console.log(nameUpdate),sessionStorage.userEdits=JSON.stringify(nameUpdate),document.getElementById(""+r).innerHTML="Edits saved!"}function checkEdits(){var t=JSON.parse(sessionStorage.getItem("products"));if(null!=t&&(addToDom1(t),products.products=t,nameUpdate=t),null!=sessionStorage.userEdits){var e=[JSON.parse(sessionStorage.userEdits)];console.log(e);for(var r=document.querySelectorAll(".edit"),o=0;o<r.length;o++)r[o].innerHTML=e[0][o]}}console.log(nameUpdate);var findProductbySearchTerm=function(t,e){var r=new RegExp(e,"gmi");return t.filter(function(t){return r.test(t.description)})},addToDom1=function(t){var e=document.querySelector(".shopping-list");e.innerHTML="",0!==t.length?t.forEach(function(t){return e.innerHTML+="<div id='"+t.id+'\'  class="shopping-list__item-wrapper"><img class="shopping-list__item-wrapper__item-image" src='+t.imgSrc+' alt=""><div id=\''+t.id2+'\'> - Edit the text and click to save for next time</div><h2  class="shopping-list__item-wrapper__item-name edit" id="'+t.id3+'" contenteditable="true">'+t.description+'</h2><h3  class="shopping-list__item-wrapper__item-price">'+t.price+'</h3><input type="button"  value="save my edits" onclick="saveEdits(\''+t.id+"', '"+t.description+"', '"+t.id2+'\')"/><button class="shopping-list__item-wrapper__add" onclick="deleteProduct(\''+t.id+"')\">Delete</button> </div>"}):e.innerHTML="no results to show"},handleSubmit1=function(t){try{t.preventDefault();var e=t.target.elements.search.value,r=findProductbySearchTerm(products.products,e);addToDom1(r),t.target.reset()}catch(t){console.error(t)}},handleKeyUp=function(t){try{t.preventDefault();var e=t.target.value,r=findProductbySearchTerm(products.products,e);addToDom1(r)}catch(t){console.error(t)}},filterYear=function(t){var e=parseInt(t.target.value),r=products.products.filter(function(t){return t.price===e});addToDom1(r)};
class Purchase {
    imageURL:string;
    itemName:string;
    itemPrice:number;

    constructor(imageURL:string, itemName:string, itemPrice:number){
        this.imageURL = imageURL;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.addPurchases();
    }
    addPurchases(){
        let buttonClick:any = [];
        buttonClick = document.querySelectorAll('.shopping-list__item-wrapper__add');
        buttonClick.click(function(e){
            e.preventDefault();
            console.log('heeeee');
            var allButtons = document.querySelectorAll('div[class^=button]');
console.log("Found", allButtons.length, "div which class starts with “button”.");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    console.clear();
    console.log("You clicked:", this.innerHTML);
  });
}
        })
    }
}
class PurchaseList {
    purchases: Array<Purchase> = [];
  
    add(purchases: Purchase) {
      this.purchases.push(purchases);
    }
  
   }
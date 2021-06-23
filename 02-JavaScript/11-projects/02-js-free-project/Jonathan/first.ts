class newCustomer {
    name:string;
    city:string;
    stars:string;
    status:string;
    price:number;

    constructor(name:string,city:string,stars:string, status:string, price:number){
        this.name = name;
        this.city = city;
        this.stars = stars;
        this.status = status;
        this.price = price;
    }
}

function handleSumbit(event:any):void{
    
    event.preventDefault();

    try{
    const name = event.target.elements.name.value;
    const city = event.target.elements.cities.value;
    const stars = event.target.elements.stars.value;
    const status = event.target.elements.status.value;
    const price = event.target.elements.cash.value;

    if(price <=0) throw new Error("You have to put some money on the input");
    
    const customer = new newCustomer(name,city,stars,status,price);
    
    localStorage.setItem("newCustomer",JSON.stringify(customer))

    

    window.location.href = "second.html"

    if(!window.location.href) throw new Error("The page does not exist");
  } catch(e){
    console.log(e);
  }

}
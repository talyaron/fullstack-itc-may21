class newCustomer {
    name:string;
    city:string;
    stars:string;
    status:string;
  //  fromdate:Date;
  //  todate:Date;
    price:number;

    constructor(name:string,city:string,stars:string, status:string, price:number){
        this.name = name;
        this.city = city;
        this.stars = stars;
        this.status = status;
      //  this.fromdate = fromdate;
       // this.todate = todate;
        this.price = price;

    }
}

function handleSumbit(event:any):void{
    
    event.preventDefault();

    const name = event.target.elements.name.value;
    const city = event.target.elements.cities.value;
    const stars = event.target.elements.stars.value;
    const status = event.target.elements.status.value;
   // const fromdate = event.target.elements.fromdate.value;
  //  const todate = event.target.elements.todate.value;
    const price = event.target.elements.cash.value;
    
    const customer = new newCustomer(name,city,stars,status,price);
    
    localStorage.setItem("newCustomer",JSON.stringify(customer))

    window.location.href = "hotel.html"

    //booking.getCustomer(customer);
    //booking.renderBooking();

}
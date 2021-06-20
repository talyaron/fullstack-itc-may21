const welcomeRoot = document.querySelector('#welcome')

class Customer{
    name:string;
    city:string;
    stars:string;

    constructor(name:string,city:string,stars:string){
        this.name = name;
        this.city = city;
        this.stars = stars;
    }
}

class Booking {
   
   renderBooking(customer:Customer){

       let welcome:string = '';

       if (customer.city === 'telaviv'){
        welcome += `<p>Welcome ${customer.name} to our page!!</p>`
       } else{
           welcome += `a`
       }
       
       welcomeRoot.innerHTML = welcome;
   }

}


//get by localStorage all the information
const getCustomer = JSON.parse(localStorage.getItem('newCustomer'))

const booking = new Booking();

const customer = new Customer(getCustomer.name, getCustomer.city, getCustomer.stars)
booking.renderBooking(customer);




function handleSumbite(event:any):void{
    event.preventDefault();
    window.location.href = "formhotel.html"

}
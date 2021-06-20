const boardSumbit = document.querySelector('#board')


class Customer {
    name:string;
    city:string;
    stars:string;

    constructor(name:string,city:string,stars:string){
        this.name = name;
        this.city = city;
        this.stars = stars;

    }
}


class bookingList {
    booking:Array<Customer> = [];

   getCustomer(customer:Customer){
       this.booking.push(customer)
   }

   renderBooking(){
  
       let html:string = '';

       this.booking.forEach(booking => {
           html += `<p>${booking.name} ${booking.city} ${booking.stars}</p>`
       })
       
       console.log(this.booking);
       boardSumbit.innerHTML = html;
   }

}


const booking = new bookingList();

const names:string = localStorage.getItem('name');
const city:string = localStorage.getItem('city');
const stars:string = localStorage.getItem('stars');


const customer = new Customer(names,city,stars);
booking.getCustomer(customer);
booking.renderBooking();

function handleSumbite(event:any):void{
    event.preventDefault();
    window.location.href = "formhotel.html"

}
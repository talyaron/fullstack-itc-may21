const welcomeRoot = document.querySelector('#welcome')
const imgRoot = document.querySelector('#img')
const getCustomer = JSON.parse(localStorage.getItem('newCustomer'))



class Customer {
    name: string = getCustomer.name;
    city: string = getCustomer.city;
    stars: string = getCustomer.stars;
    status: string = getCustomer.status;
    fromdate: Date = getCustomer.fromdate;
    todate: Date = getCustomer.todate;
    price: number = getCustomer.price;
}

class Booking {
    name: string;
    status: string;
    date: Date;
    city: string;
    imageUrl: string;
    description: string;
    price: number;
}

class BookingList {
    //para que guarde en un array para ver cuales tiene en vista
    booking: Array<Booking> = []

    getBooking(booking: Booking) {
        this.booking.push(booking)
    }

    renderBooking(customer: Customer) {

        interface Hotel {
            imageURL: string;
            name: string;
            description: string;
            city: string;
            stars:string;
            price:number;
        }

        const Hotels: Array<Hotel> = [
            {
                imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
                name: "Cucu Hotel",
                description: "Habitación Doble Clásica",
                city: "telaviv",
                stars: "fivestar",
                price: 880,
                
            },
            {
                imageURL: 'https://cf.bstatic.com/xdata/images/hotel/square600/13274862.webp?k=bf0a35e9accb7f8bc68500adbe6549e2effc4da9eae15face3d9e63fd1457f7c&o=',
                name: "Embassy",
                description: "Centro",
                city: "telaviv",
                stars: "fivestar",
                price: 500,
            },
            {
                imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109512203.jpg?k=530a61f98c4ba39fddfc3c831504e28b31cde3764ecc4d324afebea8fdc195bd&o=&hp=1',
                name: "Abraham Hostel Jerusalem",
                description: "67 Hanevi'im Street, Davidka Square, Jerusalén, 94702, Israel",
                city: "jerusalem",
                stars: "fivestar",
                price: 300,
            }
            
        ]

        
        //mira todos los hoteles segun el requerimiento del usuario
        let welcome: string = '';
        let img: string = '';

        welcome += `<h1>Welcome ${customer.name} to our page!!</h1>`

        //not mandatory complete which city or stars but price yes

        const result = Hotels.filter(tel => 
            ((tel.city === customer.city) && (tel.stars === customer.stars)) && (tel.price <= customer.price))

        for(let i=0;i<result.length;i++){
            img+= `<p>${result[i].name}</p><img src="${result[i].imageURL}"  width="300" height="300">
                    <span>${result[i].price}</span>`
        }
        

        welcomeRoot.innerHTML = welcome;
        imgRoot.innerHTML = img;
    }

}


//get by localStorage all the information

const booking = new BookingList();
const customer = new Customer();
booking.renderBooking(customer);



function handleSumbite(event: any): void {
    event.preventDefault();
    window.location.href = "main.html"
    localStorage.clear();

}




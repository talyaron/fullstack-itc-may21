const welcomeRoot = document.querySelector('#welcome')
const imgRoot = document.querySelector('#img')
const getCustomer = JSON.parse(localStorage.getItem('newCustomer'))
let newHotel:any;



class Customer {
    name: string = getCustomer.name;
    city: string = getCustomer.city;
    stars: string = getCustomer.stars;
    status: string = getCustomer.status;
    // fromdate: Date = getCustomer.fromdate;
    // todate: Date = getCustomer.todate;
    price: number = getCustomer.price;
}

class Booking {
    name: string;
    status: string;
    // date: Date;
    city: string;
    imageUrl: string;
    description: string;
    price: number;
    stars: string;

    constructor(name: string, status: string, city: string, imageURL: string, description: string, price: number, stars: string) {
        this.name = name;
        this.status = status;
        this.city = city;
        this.imageUrl = imageURL;
        this.description = description;
        this.price = price;
        this.stars = stars;

    }
}

class BookingList {
    
    booking: Array<Booking> = []

    getBooking(booking: Booking){
        this.booking.push(booking) 
        
    }

    checkBooking(){

        const checks: any = document.getElementsByClassName('checks');
        let myArray:any = [];
        for(let i=0;i<count;i++){
           
            if (checks[i].checked === true ){
                myArray.push(this.booking[i])
            }
        }
        localStorage.setItem('checkedHotel',JSON.stringify(myArray))
    }

    renderBooking(customer: Customer):number {

        interface Hotel {
            imageURL: string;
            name: string;
            description: string;
            city: string;
            stars: string;
            price: number;
            status: string;
        }

        const Hotels: Array<Hotel> = [
            {
                imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
                name: "Cucu Hotel",
                description: "Welcome to Cucu Hotel, your Tel Aviv second home. Cucu Hotel aims to make your visit as relaxing and enjoyable as possible, which is why so many guests continue to come back year after year",
                city: "telaviv",
                stars: "fivestar",
                price: 880,
                status: "single",

            },
            {
                imageURL: 'https://cf.bstatic.com/xdata/images/hotel/square600/13274862.webp?k=bf0a35e9accb7f8bc68500adbe6549e2effc4da9eae15face3d9e63fd1457f7c&o=',
                name: "Embassy",
                description: "This unpretentious hotel is located opposite the US Embassy, a 6-minute walk from the closest beach along the Mediterranean Sea.",
                city: "telaviv",
                stars: "fivestar",
                price: 500,
                status: "married",
            },
            {
                imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109512203.jpg?k=530a61f98c4ba39fddfc3c831504e28b31cde3764ecc4d324afebea8fdc195bd&o=&hp=1',
                name: "Abraham Hostel Jerusalem",
                description: "67 Hanevi'im Street, Davidka Square, Jerusalén, 94702, Israel",
                city: "jerusalem",
                stars: "fivestar",
                price: 300,
                status: "children"
            }

        ]


        //mira todos los hoteles segun el requerimiento del usuario
        let welcome: string = '';
        let img: string = '';

        welcome += `<h1>Welcome to Booking 😊 ${customer.name}. Have a nice Journey </h1>`

        //not mandatory complete which city or stars but price yes

        const result = Hotels.filter(element =>
            ((element.city === customer.city) && (element.stars === customer.stars)) && (element.price <= customer.price))

    
        if (result.length === 0) {
            img += `<p class="return">Sorry we don't have rooms for that request. Just return to the form</p>`
        } else {

            for (let i = 0; i < result.length; i++) {
                img +=
                    `<div class="gola">
                    <div class = "gola_container">
                        <p class="a">${result[i].name}</p>
                        <img src="${result[i].imageURL}" width="400" height="300" class="img__gola">
                        <p class="hola">${result[i].description}</p>
                        <div class = "vemos">
                            <span class = "price">Cost: ${result[i].price} ₪ 
                            <input type="checkbox" id="cbox${i}" value="first_checkbox${i}" class="checks"> 
                            </span>
                    </div>
                </div>
            </div>`

                newHotel = new Booking(result[i].name, result[i].status, result[i].city, result[i].imageURL, result[i].description, result[i].price, result[i].stars);

                booking.getBooking(newHotel);    

            }

        }

        welcomeRoot.innerHTML = welcome;
        imgRoot.innerHTML = img; //el padre de padres
        return result.length;
    }


}


//get by localStorage all the information

const booking = new BookingList();
const customer = new Customer();
let count:number = booking.renderBooking(customer);


function handleSumbite(event: any): void {
    event.preventDefault();
    window.location.href = "main.html"
    localStorage.clear();
}


function handleNextPage(event: any): void {
    event.preventDefault();
    booking.checkBooking();
    window.location.href = "fulldescription.html"
}




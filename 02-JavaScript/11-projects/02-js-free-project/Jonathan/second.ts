const welcomeRoot: HTMLElement = document.querySelector('#welcome')
const imgRoot: HTMLElement = document.querySelector('#boardHotel')
const getCustomer = JSON.parse(localStorage.getItem('newCustomer'))
let newHotel: any;


class Customer {
    name: string = getCustomer.name;
    city: string = getCustomer.city;
    stars: string = getCustomer.stars;
    status: string = getCustomer.status;
    price: number = getCustomer.price;
}

class Booking {
    name: string;
    status: string;
    city: string;
    imageUrl: string;
    address: string;
    price: number;
    stars: string;

    constructor(name: string, status: string, city: string, imageURL: string, address: string, price: number, stars: string) {
        this.name = name;
        this.status = status;
        this.city = city;
        this.imageUrl = imageURL;
        this.address = address;
        this.price = price;
        this.stars = stars;
    }
}

class BookingList {

    booking: Array<Booking> = []

    getBooking(booking: Booking) {
        this.booking.push(booking)
    }

    checkBooking() {

        const checks: any = document.getElementsByClassName('boardHotel__container__box--checks'); //

        try {
            if (!checks) throw new Error("The checks does not working");

            let arrayChecked: any = [];
            for (let i = 0; i < count; i++) {
                if (checks[i].checked === true) {
                    arrayChecked.push(this.booking[i])
                }
            }

            if (arrayChecked.length === 0) {
                throw new Error("No checked hotel to have an description");
            } else {
                localStorage.setItem('checkedHotel', JSON.stringify(arrayChecked))
                window.location.href = "third.html";
            }
        } catch (e) {
            console.log(e);
        }
    }

    renderBooking(customer: Customer): number {

        try {

            if(!customer) throw new Error("LocalStorage is empty");
            
            interface Hotel {
                imageURL: string;
                name: string;
                address: string;
                city: string;
                stars: string;
                price: number;
                status: string;
            }

            const Hotels: Array<Hotel> = [
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
                    name: "Cucu Hotel",
                    address: "Dizengoff St 83, Tel Aviv-Yafo",
                    city: "telaviv",
                    stars: "fivestar",
                    price: 880,
                    status: "single",

                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/square600/13274862.webp?k=bf0a35e9accb7f8bc68500adbe6549e2effc4da9eae15face3d9e63fd1457f7c&o=',
                    name: "Embassy",
                    address: "Shalom Aleichem St 5, Tel Aviv-Yafo, 6380606",
                    city: "telaviv",
                    stars: "fivestar",
                    price: 500,
                    status: "single",
                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109512203.jpg?k=530a61f98c4ba39fddfc3c831504e28b31cde3764ecc4d324afebea8fdc195bd&o=&hp=1',
                    name: "Abraham Hostel Jerusalem",
                    address: "67 Hanevi'im Street, Davidka Square, Jerusalén, 94702, Israel",
                    city: "jerusalem",
                    stars: "fivestar",
                    price: 300,
                    status: "single"
                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/250744836.jpg?k=c0831284c5bafa39a02fb1691c5d0faaee80441f204a1d2366b28f9015246ead&o=&hp=1',
                    name: "Eden Hotel",
                    address: "8 Shmaryahu Levin Street, Haifa, 33101, Israel",
                    city: "haifa",
                    stars: "threestar",
                    price: 400,
                    status: "married"
                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/229779320.jpg?k=5cdc43ee0fd39adbd8991edf983d56cb281b3af71b3460cff8fc84c84a08b680&o=&hp=1',
                    name: "Hashimi Hotel",
                    address: "Khan El Zeit St. No 73 Old City-Jerusalem, Jerusalén,",
                    city: "jerusalem",
                    stars: "twostar",
                    price: 200,
                    status: "married"
                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/40888968.jpg?k=543a1a0c9e1616444e1407237df26c4c8a7bd1c5587a848ac404fc21ac751a2b&o=&hp=1',
                    name: "Club Hotel Eilat - 5 Stars Superior",
                    address: "Ha'arava Road P.O 4444, Eilat, 88000, Israel ",
                    city: "eilat",
                    stars: "fourstar",
                    price: 500,
                    status: "single"
                }
            ]

            let welcome: string = '';
            let html: string = '';

            welcome += `<h1 class = "header__title">Welcome to Booking 😊 ${customer.name}. Have a nice Journey </h1>`

            const result = Hotels.filter(element =>
                ((element.city === customer.city) && (element.stars === customer.stars)) && (element.price <= customer.price) && (element.status === customer.status))

            if (result.length === 0) {
                html += `<p class="boardHotel__nohotel">Sorry we don't have hotel for that request. Just return to the form</p>`
            } else {
                for (let i = 0; i < result.length; i++) {
                    html +=
                        `<div class = "boardHotel__container">
                        <p class="boardHotel__container--name">${result[i].name}</p>
                        <img src="${result[i].imageURL}" width="350" height="300" class="boardHotel__container--img">
                        <p class="boardHotel__container--address">${result[i].address}</p>
                        <div class = "boardHotel__container__box">
                            <span class = "boardHotel__container__box--price">Cost: ${result[i].price} ₪ 
                            <input type="checkbox" id="cbox${i}" value="checkbox${i}" class="boardHotel__container__box--checks"> 
                            </span>
                        </div>
                    </div>`
                    newHotel = new Booking(result[i].name, result[i].status, result[i].city, result[i].imageURL, result[i].address, result[i].price, result[i].stars);
                    booking.getBooking(newHotel);
                }

            }

            if (!welcomeRoot) throw new Error("The Welcome Root does not exist");
            if (!imgRoot) throw new Error("The Welcome Root does not exist");

            welcomeRoot.innerHTML = welcome;
            imgRoot.innerHTML = html;
            return result.length;

        }
        catch (e) {
            console.log(e);
        }
    }
}

const booking = new BookingList();
const customer = new Customer();
let count: number = booking.renderBooking(customer);


function handlePrevPage(event: any): void {
    event.preventDefault();
    window.location.href = "first.html"
    localStorage.clear();
}

function handleNextPage(event: any): void {
    event.preventDefault();
    booking.checkBooking();

}




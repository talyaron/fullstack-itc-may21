var welcomeRoot = document.querySelector('#welcome');
var imgRoot = document.querySelector('#boardHotel');
var getCustomer = JSON.parse(localStorage.getItem('newCustomer'));
var newHotel;
var Customer = /** @class */ (function () {
    function Customer() {
        this.name = getCustomer.name;
        this.city = getCustomer.city;
        this.stars = getCustomer.stars;
        this.status = getCustomer.status;
        this.price = getCustomer.price;
    }
    return Customer;
}());
var Booking = /** @class */ (function () {
    function Booking(name, status, city, imageURL, address, price, stars) {
        this.name = name;
        this.status = status;
        this.city = city;
        this.imageUrl = imageURL;
        this.address = address;
        this.price = price;
        this.stars = stars;
    }
    return Booking;
}());
var BookingList = /** @class */ (function () {
    function BookingList() {
        this.booking = [];
    }
    BookingList.prototype.getBooking = function (booking) {
        this.booking.push(booking);
    };
    BookingList.prototype.checkBooking = function () {
        var checks = document.getElementsByClassName('boardHotel__container__box--checks'); //
        try {
            if (!checks)
                throw new Error("The checks does not working");
            var arrayChecked = [];
            for (var i = 0; i < count; i++) {
                if (checks[i].checked === true) {
                    arrayChecked.push(this.booking[i]);
                }
            }
            if (arrayChecked.length === 0) {
                throw new Error("No checked hotel to have an description");
            }
            else {
                localStorage.setItem('checkedHotel', JSON.stringify(arrayChecked));
                window.location.href = "third.html";
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    BookingList.prototype.renderBooking = function (customer) {
        try {
            if (!customer)
                throw new Error("LocalStorage is empty");
            var Hotels = [
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56431315.jpg?k=659e126bcf6b4aed537ea28f9c3085ae4a25e72164670ef7192af495120d12e6&o=&hp=1',
                    name: "Cucu Hotel",
                    address: "Dizengoff St 83, Tel Aviv-Yafo",
                    city: "telaviv",
                    stars: "fivestar",
                    price: 880,
                    status: "single"
                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/square600/13274862.webp?k=bf0a35e9accb7f8bc68500adbe6549e2effc4da9eae15face3d9e63fd1457f7c&o=',
                    name: "Embassy",
                    address: "Shalom Aleichem St 5, Tel Aviv-Yafo, 6380606",
                    city: "telaviv",
                    stars: "fivestar",
                    price: 500,
                    status: "single"
                },
                {
                    imageURL: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/109512203.jpg?k=530a61f98c4ba39fddfc3c831504e28b31cde3764ecc4d324afebea8fdc195bd&o=&hp=1',
                    name: "Abraham Hostel Jerusalem",
                    address: "67 Hanevi'im Street, Davidka Square, Jerusalén, 94702, Israel",
                    city: "jerusalem",
                    stars: "fivestar",
                    price: 300,
                    status: "children"
                }
            ];
            var welcome = '';
            var html = '';
            welcome += "<h1 class = \"header__title\">Welcome to Booking \uD83D\uDE0A " + customer.name + ". Have a nice Journey </h1>";
            var result = Hotels.filter(function (element) {
                return ((element.city === customer.city) && (element.stars === customer.stars)) && (element.price <= customer.price) && (element.status === customer.status);
            });
            if (result.length === 0) {
                html += "<p class=\"boardHotel__nohotel\">Sorry we don't have hotel for that request. Just return to the form</p>";
            }
            else {
                for (var i = 0; i < result.length; i++) {
                    html +=
                        "<div class = \"boardHotel_container\">\n                        <p class=\"boardHotel_container--name\">" + result[i].name + "</p>\n                        <img src=\"" + result[i].imageURL + "\" width=\"400\" height=\"300\" class=\"boardHotel__container--img\">\n                        <p class=\"boardHotel__container--address\">" + result[i].address + "</p>\n                        <div class = \"boardHotel__container__box\">\n                            <span class = \"boardHotel__container__box--price\">Cost: " + result[i].price + " \u20AA \n                            <input type=\"checkbox\" id=\"cbox" + i + "\" value=\"checkbox" + i + "\" class=\"boardHotel__container__box--checks\"> \n                            </span>\n                        </div>\n                    </div>";
                    newHotel = new Booking(result[i].name, result[i].status, result[i].city, result[i].imageURL, result[i].address, result[i].price, result[i].stars);
                    booking.getBooking(newHotel);
                }
            }
            if (!welcomeRoot)
                throw new Error("The Welcome Root does not exist");
            if (!imgRoot)
                throw new Error("The Welcome Root does not exist");
            welcomeRoot.innerHTML = welcome;
            imgRoot.innerHTML = html;
            return result.length;
        }
        catch (e) {
            console.log(e);
        }
    };
    return BookingList;
}());
var booking = new BookingList();
var customer = new Customer();
var count = booking.renderBooking(customer);
function handlePrevPage(event) {
    event.preventDefault();
    window.location.href = "first.html";
    localStorage.clear();
}
function handleNextPage(event) {
    event.preventDefault();
    booking.checkBooking();
}

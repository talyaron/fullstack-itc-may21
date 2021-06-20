var boardSumbit = document.querySelector('#board');
var Customer = /** @class */ (function () {
    function Customer(name, city, stars) {
        this.name = name;
        this.city = city;
        this.stars = stars;
    }
    return Customer;
}());
var bookingList = /** @class */ (function () {
    function bookingList() {
        this.booking = [];
    }
    bookingList.prototype.getCustomer = function (customer) {
        this.booking.push(customer);
    };
    bookingList.prototype.renderBooking = function () {
        var html = '';
        this.booking.forEach(function (booking) {
            html += "<p>" + booking.name + " " + booking.city + " " + booking.stars + "</p>";
        });
        console.log(this.booking);
        boardSumbit.innerHTML = html;
    };
    return bookingList;
}());
var booking = new bookingList();
var names = localStorage.getItem('name');
var city = localStorage.getItem('city');
var stars = localStorage.getItem('stars');
var customer = new Customer(names, city, stars);
booking.getCustomer(customer);
booking.renderBooking();
function handleSumbite(event) {
    event.preventDefault();
    window.location.href = "formhotel.html";
}

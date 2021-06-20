var welcomeRoot = document.querySelector('#welcome');
var Customer = /** @class */ (function () {
    function Customer(name, city, stars) {
        this.name = name;
        this.city = city;
        this.stars = stars;
    }
    return Customer;
}());
var Booking = /** @class */ (function () {
    function Booking() {
    }
    Booking.prototype.renderBooking = function (customer) {
        var welcome = '';
        if (customer.city === 'telaviv') {
            welcome += "<p>Welcome " + customer.name + " to our page!!</p>";
        }
        else {
            welcome += "a";
        }
        welcomeRoot.innerHTML = welcome;
    };
    return Booking;
}());
//get by localStorage all the information
var getCustomer = JSON.parse(localStorage.getItem('newCustomer'));
var booking = new Booking();
var customer = new Customer(getCustomer.name, getCustomer.city, getCustomer.stars);
booking.renderBooking(customer);
function handleSumbite(event) {
    event.preventDefault();
    window.location.href = "formhotel.html";
}

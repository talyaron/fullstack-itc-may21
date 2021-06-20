var newCustomer = /** @class */ (function () {
    function newCustomer(name, city, stars, status, fromdate, todate, price) {
        this.name = name;
        this.city = city;
        this.stars = stars;
        this.status = status;
        this.fromdate = fromdate;
        this.todate = todate;
        this.price = price;
    }
    return newCustomer;
}());
function handleSumbit(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var city = event.target.elements.cities.value;
    var stars = event.target.elements.stars.value;
    var status = event.target.elements.status.value;
    var fromdate = event.target.elements.fromdate.value;
    var todate = event.target.elements.todate.value;
    var price = event.target.elements.cash.value;
    var customer = new newCustomer(name, city, stars, status, fromdate, todate, price);
    localStorage.setItem("newCustomer", JSON.stringify(customer));
    window.location.href = "hotel.html";
    //booking.getCustomer(customer);
    //booking.renderBooking();
}

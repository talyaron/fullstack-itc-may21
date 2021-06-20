function handleSumbit(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var city = event.target.elements.cities.value;
    var stars = event.target.elements.stars.value;
    var status = event.target.elements.status.value;
    var fromdate = event.target.elements.fromdate.value;
    var todate = event.target.elements.todate.value;
    var price = event.target.elements.cash.value;
    //const customer = new Customer(name,city,stars,status,fromdate,todate,price);
    localStorage.setItem('name', name);
    localStorage.setItem('city', city);
    localStorage.setItem('stars', stars);
    localStorage.setItem('status', status);
    localStorage.setItem('fromdate', fromdate);
    localStorage.setItem('todate', todate);
    localStorage.setItem('price', price);
    window.location.href = "sumbit_hotel.html";
    //booking.getCustomer(customer);
    //booking.renderBooking();
}

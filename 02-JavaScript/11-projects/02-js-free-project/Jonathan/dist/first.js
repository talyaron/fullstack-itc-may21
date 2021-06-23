var newCustomer = /** @class */ (function () {
    function newCustomer(name, city, stars, status, price) {
        this.name = name;
        this.city = city;
        this.stars = stars;
        this.status = status;
        this.price = price;
    }
    return newCustomer;
}());
function handleSumbit(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var city = event.target.elements.cities.value;
        var stars = event.target.elements.stars.value;
        var status = event.target.elements.status.value;
        var price = event.target.elements.cash.value;
        if (price <= 0)
            throw new Error("You have to put some money on the input");
        var customer = new newCustomer(name, city, stars, status, price);
        localStorage.setItem("newCustomer", JSON.stringify(customer));
        window.location.href = "second.html";
    }
    catch (e) {
        console.log(e);
    }
}

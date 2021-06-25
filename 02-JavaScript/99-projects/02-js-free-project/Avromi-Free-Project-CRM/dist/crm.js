var handleSubmit = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var email = ev.target.elements.email.value;
    var phone = ev.target.elements.phone.value;
    var address = ev.target.elements.address.value;
    var imgURL = ev.target.elements.imgURL.value;
    var customerId = Math.random().toString(16).slice(2);
    var customer = new Customer(name, email, phone, address, imgURL, customerId);
    customers.add(customer);
    // customers.renderCustomers();
    // customer.renderCustomerProfile();
    window.location.href = "customer-profile.html?customerId=" + customerId;
    ev.target.reset();
};
var Customer = /** @class */ (function () {
    function Customer(name, email, phone, address, imgURL, customerId) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.imgURL = imgURL;
        this.customerId = customerId;
    }
    return Customer;
}());
var Customers = /** @class */ (function () {
    function Customers() {
        this.customers = []; //YS: It is better practice to put this in a constructor. 
    }
    Customers.prototype.add = function (customer) {
        this.customers.push(customer);
        this.customers.sort(function (a, b) { return (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1); });
        localStorage.setItem("customers", JSON.stringify(this.customers));
    };
    Customers.prototype.getCustoemrsFromStorage = function () {
        try {
            var tempCustomers = JSON.parse(localStorage.getItem('customers'));
            if (tempCustomers) {
                this.customers = tempCustomers;
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Customers;
}());
var customers = new Customers();
customers.getCustoemrsFromStorage();

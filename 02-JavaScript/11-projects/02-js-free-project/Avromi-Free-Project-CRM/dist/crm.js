var handleSubmit = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var email = ev.target.elements.email.value;
    var phone = ev.target.elements.phone.value;
    var address = ev.target.elements.address.value;
    var imgURL = ev.target.elements.imgURL.value;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(imgURL);
    var customer = new Customer(name, email, phone, address, imgURL);
    customers.add(customer);
    customers.renderCustomers(customer);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("imgURL", imgURL);
    window.location.href = './customer-profile.html';
    ev.target.reset();
};
var Customer = /** @class */ (function () {
    function Customer(name, email, phone, address, imgURL) {
        this.customerId = "id" + Math.random().toString(16).slice(2);
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.imgURL = imgURL;
    }
    return Customer;
}());
var Customers = /** @class */ (function () {
    function Customers() {
        this.customers = [];
    }
    Customers.prototype.add = function (customer) {
        this.customers.push(customer);
        console.log(this.customers);
        localStorage.setItem("customers", JSON.stringify(this.customers));
    };
    Customers.prototype.getCustoemrsFromStorage = function () {
        try {
            var tempCustomers = JSON.parse(localStorage.getItem('customers'));
            if (tempCustomers) {
                this.customers = tempCustomers;
            }
            console.log(this.customers);
        }
        catch (e) {
            console.error(e);
        }
    };
    Customers.prototype.renderCustomers = function () {
        var customerList = document.querySelector(".customer__list");
        var html = "";
        this.customers.forEach(function (customer) {
            html +=
                "<h4>Customer</h4>\n            <img src=\"" + customer.imgURL + "\">\n            <p>" + customer.name + "</p>\n            <p>" + customer.email + "</p>\n            <p>" + customer.phone + "</p>\n            <p>" + customer.address + "</p>\n            <p>" + customer.customerId + "</p>";
        });
        customerList.innerHTML = html;
        localStorage.setItem("innerHTML", html);
    };
    return Customers;
}());
var customers = new Customers();
customers.getCustoemrsFromStorage();
function goBack() {
    window.history.back();
}

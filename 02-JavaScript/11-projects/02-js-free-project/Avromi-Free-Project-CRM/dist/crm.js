var handleSubmit = function (ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var email = ev.target.elements.email.value;
    var phone = ev.target.elements.phone.value;
    var address = ev.target.elements.address.value;
    var imgURL = ev.target.elements.imgURL.value;
    var customer = new Customer(name, email, phone, address, imgURL);
    customers.add(customer);
    customers.renderCustomers();
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
    // sortCustomers(){
    //     console.log(this.customers)
    // }
    Customers.prototype.renderCustomers = function () {
        // const customerList: HTMLElement = document.querySelector(".customer__list");
        var html = "";
        this.customers.forEach(function (customer) {
            html +=
                "<p>" + customer.name + "</p>";
            // <p>${customer.email}</p>
            // <p>${customer.phone}</p>
            // <p>${customer.address}</p>
            // <p>${customer.customerId}</p>
        });
        // customerList.innerHTML = html;
        localStorage.setItem("innerHTML", html);
    };
    return Customers;
}());
var customers = new Customers();
customers.getCustoemrsFromStorage();
var customerList = localStorage.getItem("innerHTML");
document.querySelector(".customer__list").innerHTML = customerList;
// customers.sortCustomers()
function goBack() {
    window.history.back();
}

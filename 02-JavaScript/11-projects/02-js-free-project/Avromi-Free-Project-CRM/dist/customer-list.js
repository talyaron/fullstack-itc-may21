function getCustoemrsFromStorage() {
    try {
        var tempCustomers = JSON.parse(localStorage.getItem('customers'));
        if (tempCustomers) {
            this.customers = tempCustomers;
        }
    }
    catch (e) {
        console.error(e);
    }
}
function renderCustomers() {
    // const customerList: HTMLElement = document.querySelector(".customer__list");
    this.customers.forEach(function (customer) {
        var customerList = document.querySelector(".customer__list");
        var html = "<p>Customer: <a href=\"customer-profile.html?customerId=" + customer.customerId + "\">" + customer.name + "</a></p>";
        customerList.insertAdjacentHTML("afterbegin", html);
    });
    // customerList.innerHTML = html;
}
function handleClick(id) {
    // const customerId = id
    // window.location.href = `customer-profile.html?customerId=${customerId}`;
}
function myFilter() {
    var _this = this;
    document.querySelector("#myFilter").addEventListener("keyup", function (event) {
        var searchInput = event.key;
        console.log(searchInput);
        var customerList = document.querySelector(".customer__list");
        var result = _this.customers.filter(function (customer) { return customer.name.includes(searchInput); });
        console.log(result);
        if (result.length >= 0) {
            result.forEach(function (customer) {
                var customerList = document.querySelector(".customer__list");
                var html = "<p>Customer: <a href=\"customer-profile.html?customerId=" + customer.customerId + "\">" + customer.name + "</a></p>";
                customerList.insertAdjacentHTML("afterbegin", html);
            });
        }
        else {
            renderCustomers();
        }
    });
}
getCustoemrsFromStorage();
renderCustomers();

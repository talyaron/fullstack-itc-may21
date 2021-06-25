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
        var html = "<div class=\"p\"><p><a href=\"customer-profile.html?customerId=" + customer.customerId + "\">" + customer.name + "</a></p>\n        <p><a href=\"tel:" + customer.phone + "\">" + customer.phone + "</a></p>\n        <p><a href=\"mailto:" + customer.email + "\">" + customer.email + "</a></p>\n        <p><button onclick=\"handleDelete(\"" + customer.customerId + "\")\">Delete</button></p>\n        </div>";
        customerList.insertAdjacentHTML("afterbegin", html);
    });
    // customerList.innerHTML = html;
}
;
function removeCustomer(customerId) {
    this.customers = this.customers.filter(function (cus) { return cus.customerId !== customerId; });
    console.log(this.articles);
    this.renderCustomers();
}
;
function handleDelete(customerId) {
    removeCustomer(customerId);
}
;
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
                var html = "<div class=\"p\"><a href=\"customer-profile.html?customerId=" + customer.customerId + "\">" + customer.name + "</a>\n                <a href=\"tel:" + customer.phone + "\">" + customer.phone + "</a>\n                <a href=\"mailto:" + customer.email + "\">" + customer.email + "</a>\n                </div>";
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

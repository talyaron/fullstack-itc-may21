function getCustoemrsFromStorage() {
    try {
        let tempCustomers = JSON.parse(localStorage.getItem('customers'))
        if (tempCustomers) {
            this.customers = tempCustomers;
        }


    } catch (e) {
        console.error(e)
    }
}

function renderCustomers() {

    // const customerList: HTMLElement = document.querySelector(".customer__list");


    this.customers.forEach((customer) => {
        const customerList: HTMLElement = document.querySelector(".customer__list")

        const html = `<p>Customer: <a href="customer-profile.html?customerId=${customer.customerId}">${customer.name}</a></p>`

        customerList.insertAdjacentHTML(`afterbegin`, html)


    });

    // customerList.innerHTML = html;



}

function handleClick(id) {

    // const customerId = id
    // window.location.href = `customer-profile.html?customerId=${customerId}`;
}



function myFilter() { //needs work
    document.querySelector("#myFilter").addEventListener("keyup", event => {
        const searchInput: any = event.key

        console.log(searchInput)
        const customerList: HTMLElement = document.querySelector(".customer__list")


        const result = this.customers.filter(customer => customer.name.includes(searchInput));
        console.log(result)
        if (result.length >= 0) {
            result.forEach((customer) => {

                const customerList: HTMLElement = document.querySelector(".customer__list")
                const html = `<p>Customer: <a href="customer-profile.html?customerId=${customer.customerId}">${customer.name}</a></p>`
                customerList.insertAdjacentHTML(`afterbegin`, html)

            });
        }else {
            renderCustomers();
        }
    


    });


}





getCustoemrsFromStorage();
renderCustomers();

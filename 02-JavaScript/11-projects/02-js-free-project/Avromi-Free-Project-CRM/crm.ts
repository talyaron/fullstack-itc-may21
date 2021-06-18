var handleSubmit = (ev: any): void => {
    ev.preventDefault()

    const name: string = ev.target.elements.name.value;
    const email: string = ev.target.elements.email.value;
    const phone: string = ev.target.elements.phone.value;
    const address: string = ev.target.elements.address.value;
    const imgURL: string = ev.target.elements.imgURL.value;
    
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(address)
    console.log(imgURL)
    const customer = new Customer(name, email, phone, address, imgURL);
    customers.add(customer);
    customers.renderCustomers(customer);
    localStorage.setItem(`name`, name)
    localStorage.setItem(`email`, email)
    localStorage.setItem(`phone`, phone)
    localStorage.setItem(`address`, address)
    localStorage.setItem(`imgURL`, imgURL)
    

    window.location.href = './customer-profile.html'
    ev.target.reset()
}

class Customer {
    name: string;
    email: string;
    phone: string;
    address: string;
    imgURL: string;
    customerId: string = "id" + Math.random().toString(16).slice(2)

    constructor(name: string, email: string, phone: string, address: string, imgURL: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.imgURL = imgURL;
    }
}

class Customers {
    customers: Customer = [];

    add(customer: Customer) {
        this.customers.push(customer);
    }


    renderCustomers() {
        const customerList: HTMLElement = document.querySelector(".customer__list");

        let html: string = "";
        this.customers.forEach((customer) => {
            html +=

            `<h4>Customer</h4>
            <img src="${customer.imgURL}">
            <p>${customer.name}</p>
            <p>${customer.email}</p>
            <p>${customer.phone}</p>
            <p>${customer.address}</p>
            <p>${customer.customerId}</p>`

        });
        customerList.innerHTML = html;
        localStorage.setItem(`innerHTML`, html)
    
    }
    
}
const customers = new Customers();

function goBack() {
    window.history.back();
  }
 
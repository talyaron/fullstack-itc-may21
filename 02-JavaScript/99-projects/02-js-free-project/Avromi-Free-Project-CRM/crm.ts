var handleSubmit = (ev: any): void => {   //YS: We don't use var, only const or let
    ev.preventDefault()

    const name: string = ev.target.elements.name.value;
    const email: string = ev.target.elements.email.value;
    const phone: string = ev.target.elements.phone.value;
    const address: string = ev.target.elements.address.value;
    const imgURL: string = ev.target.elements.imgURL.value;
    const customerId: string = Math.random().toString(16).slice(2)

    const customer = new Customer(name, email, phone, address, imgURL, customerId);
    customers.add(customer);
    // customers.renderCustomers();
    // customer.renderCustomerProfile();

    window.location.href = `customer-profile.html?customerId=${customerId}`
    ev.target.reset()
}

class Customer {
    name: string;
    email: string;
    phone: string;
    address: string;
    imgURL: string;
    customerId: string

    constructor(name: string, email: string, phone: number, address: string, imgURL: string, customerId: string) {
        this.name = name;
        this.email = email
        this.phone = phone;
        this.address = address;
        this.imgURL = imgURL;
        this.customerId = customerId;
    }


}

class Customers {
    customers: Array<Customer> = []; //YS: It is better practice to put this in a constructor. 

    add(customer: Customer) {
        this.customers.push(customer);
        this.customers.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
        localStorage.setItem(`customers`, JSON.stringify(this.customers));

    }

    getCustoemrsFromStorage() {
        try {
            let tempCustomers = JSON.parse(localStorage.getItem('customers'))
            if (tempCustomers) {
                this.customers = tempCustomers;
            }


        } catch (e) {
            console.error(e)
        }
    }



}


const customers = new Customers();
customers.getCustoemrsFromStorage();

























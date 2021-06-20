var handleSubmit = (ev: any): void => {
    ev.preventDefault()

    const name: string = ev.target.elements.name.value;
    const email: string = ev.target.elements.email.value;
    const phone: string = ev.target.elements.phone.value;
    const address: string = ev.target.elements.address.value;
    const imgURL: string = ev.target.elements.imgURL.value;


    const customer = new Customer(name, email, phone, address, imgURL);
    customers.add(customer);
    customers.renderCustomers();
    // customer.renderCustomerProfile();
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
    phone: number;
    address: string;
    imgURL: string;
    customerId: string = "id" + Math.random().toString(16).slice(2)

    constructor(name: string, email: string, phone: number, address: string, imgURL: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.imgURL = imgURL;
    }

    // renderCustomerProfile() {
    //     let profileHtml: string = "";
    
    //         profileHtml +=

    //             `<p>${customer.name}</p>
    //         <p>${customer.email}</p>
    //         <p>${customer.phone}</p>
    //         <p>${customer.address}</p>
    //         <p>${customer.customerId}</p>`

    //     }
    //     localStorage.setItem(`Profile HTML`, profileHtml)
    //     console.log(profileHtml)
    // }
}

class Customers {
    customers: Array<Customer> = [];

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

    // sortCustomers(){

    //     console.log(this.customers)
    // }


    renderCustomers() {

        // const customerList: HTMLElement = document.querySelector(".customer__list");

        let html: string = "";
        this.customers.forEach((customer) => {

            html +=

                `<p>${customer.name}</p>`
            // <p>${customer.email}</p>
            // <p>${customer.phone}</p>
            // <p>${customer.address}</p>
            // <p>${customer.customerId}</p>

        });
        // customerList.innerHTML = html;
        localStorage.setItem(`innerHTML`, html)

    }

 

}


const customers = new Customers();
customers.getCustoemrsFromStorage();

const customerList = localStorage.getItem(`innerHTML`)
document.querySelector(".customer__list").innerHTML = customerList;
// customers.sortCustomers()



function goBack() {
    window.history.back();
}




  






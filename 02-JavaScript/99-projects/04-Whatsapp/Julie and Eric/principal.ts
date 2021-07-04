//render in the first page
const render: HTMLElement = document.querySelector(".chats")


//search-regrex first page, take id from the input search
const inputFilter = <HTMLInputElement>document.querySelector("#filterN") 



interface ContactsInterface {
    contactName: string;
    image: string;
    phone: number;
}

class ContactGenerator {
    contactName: string;
    image: string;
    phone: number;
    contactId: string;


    constructor(contactName: string, image: string, phone: number) {

        this.contactName = contactName;
        this.image = image;
        this.phone = phone;
        this.contactId = Math.random().toString(16).slice(2);;
    }
}

class Contacts {
    contacts: Array<ContactGenerator> = [];
    contactsFilter: Array<ContactGenerator> = [];

    add(add: ContactGenerator): void {
        this.contacts.push(add);
        this.renderContacts();
        this.contactsFilter.push(add)

    }
    addList(addlist: Array<ContactGenerator | ContactsInterface>) {
        addlist.forEach((element) => {
            const contac = new ContactGenerator(
                element.contactName,
                element.image,
                element.phone
            );
            this.contacts.push(contac);
            this.contactsFilter.push(contac)

        });

        this.renderContacts();
    }



    renderContacts() {
        let html: string = "";
        
            this.contacts.forEach((element) => {
              

                html += `<div class="chat1"> <img src="${element.image}" alt="" class="photo2"> <h4 class="nameContact">${element.contactName}</h4> </div>`;
            });

            render.innerHTML = html;
            console.log(html)
    
}

        searchContact(inputFilter:string){  
        
        const regrExp: string = inputFilter; 
        const searchTermReg: RegExp = new RegExp(regrExp, 'i');
        this.contacts = this.contactsFilter.filter(elem => searchTermReg.test(elem.contactName))
        this.renderContacts();
    }
   

}

const contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);


inputFilter.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    try {
    contacts.searchContact(inputFilter.value)
} catch (e) {
    console.log(e)
}   
}

const render: HTMLElement = document.querySelector(".chats")





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

    add(add: ContactGenerator): void {
        this.contacts.push(add);
        this.renderContacts();
    }
    addList(addlist: Array<ContactGenerator | ContactsInterface>) {
        addlist.forEach((element) => {
            const contac = new ContactGenerator(
                element.contactName,
                element.image,
                element.phone
            );
            this.contacts.push(contac);
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
}

const contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);

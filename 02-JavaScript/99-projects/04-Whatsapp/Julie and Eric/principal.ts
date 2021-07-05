//render in the first page
const render: HTMLElement = document.querySelector(
  ".wrapper__container--chats"
);

//search-regrex first page, take id from the input search
const inputFilter = <HTMLInputElement>document.querySelector("#filterN");

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
    this.contactId = Math.random().toString(16).slice(2);
  }
}

class Contacts {
  contacts: Array<ContactGenerator> = [];
  contactsFilter: Array<ContactGenerator> = [];

  add(add: ContactGenerator): void {
    this.contacts.push(add);
    this.renderContacts();
    this.contactsFilter.push(add);
  }
  addList(addlist: Array<ContactGenerator | ContactsInterface>) {
    addlist.forEach((element) => {
      const contac = new ContactGenerator(
        element.contactName,
        element.image,
        element.phone
      );
      this.contacts.push(contac);
      this.contactsFilter.push(contac);
    });

    this.renderContacts();
  }

  renderContacts() {
    let html: string = "";

    this.contacts.forEach((element) => {

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
      html += `<div>
      <div class="chat1" onclick="redirect()">

      <img src="${element.image}" alt="" class="photo2"> 

      <h4 class="nameContact">${element.contactName}</h4>
      </div>
      <div>
      <i onclick='handleDelete("${element.contactId}")' class="far fa-trash-alt" id="delete" > </i>
      </div>
      </div>`;
    });
    render.innerHTML = html;

  }

  searchContact(inputFilter: string) {
    const regrExp: string = inputFilter;
    const searchTermReg: RegExp = new RegExp(regrExp, "i");
    this.contacts = this.contactsFilter.filter((elem) =>
      searchTermReg.test(elem.contactName)
    );
    this.renderContacts();
  }
}

function handleDelete(contactId) {
  this.conta
  const reducedContacts = contacts.contacts.filter(contact => contactId !== contact.contactId);
  console.log(reducedContacts);
  contacts.contacts = reducedContacts;
  contacts.renderContacts();
}

const contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);

inputFilter.addEventListener("keyup", handleKeyUp);

function handleKeyUp() {
  try {
    contacts.searchContact(inputFilter.value);
  } catch (e) {
    console.log(e);
  }
}

function redirect() {
  try {
    window.location.href = "chat.html";
    if (!window.location.href)
      throw new Error("The page where you want to redirect it doesn´t exist!");
  } catch (error) {
    console.error(error);
  }
}

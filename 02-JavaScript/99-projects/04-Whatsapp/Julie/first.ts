//render in the first page
const render: HTMLElement = document.querySelector(".wrapper__container--chats");

//popup to add a new contact
const btnModal = (<HTMLButtonElement>document.querySelector('.modal-btn')) //YS: You dont need the outer parenthesis: < const btnModal = <HTMLButtonElement>document.querySelector('.modal-btn') > 
const bgModal = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const inputName = (<HTMLInputElement>document.querySelector('#name'))   //YS: Same as above
const inputPhone = (<HTMLInputElement>document.querySelector('#phone')) //YS: Same as above
const faPlus = (<HTMLButtonElement>document.querySelector('.fa-plus'))  //YS: Same as above

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


  add(add: ContactGenerator): void { //YS: Better name than add? Ex. newContact. 
    this.contacts.push(add);
    this.renderContacts(); //YS: You are rendering your contacts here and also after you use this function in line 135 - you only need one. 
    this.contactsFilter.push(add);
    localStorage.setItem('contactsData', JSON.stringify(this.contacts));

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

  renderContacts() { /* YS: It would have been a lot better/easier and programatically correct to pass an array as a parameter in this function and then render that array. 
                        instead of always rendering your this.contacts array  */
    let html: string = "";
    const joni = JSON.parse(localStorage.getItem('contactsData'))
    joni.forEach((element) => {
      html += `<div class="containerChat">
                    <div class="chat1" onclick=redirect("${element.contactId}")>
                      <img src="${element.image}" alt="" class="chat1__photo"> 
                      <h4 class="chat1__name">${element.contactName}</h4>
                    </div>
                    <div>
                      <i onclick='handleDelete("${element.contactId}")' class="far fa-trash-alt" id="delete"> </i>
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
  const reducedContacts = contacts.contacts.filter(
    (contact) => contactId !== contact.contactId
  );
  contacts.contacts = reducedContacts; //YS: When you refresh the contacts are not deleted since you are not adding this to localstorage. 
  contacts.renderContacts(); //YS: Should be: contacts.renderContacts(reducedContacts)
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

function redirect(contactId) {
  try {
    localStorage.setItem("contactID", contactId);

    window.location.href = `second.html?id=${contactId}`;

    if (!window.location.href)
      throw new Error("The page where you want to redirect it doesn´t exist!");
  } catch (error) {
    console.error(error);
  }
}
console.log(contacts)
const handleSubmit = (event) => {
  event.preventDefault();
  try {
    const contactName: string = event.target.elements.name.value;
    const image: string = event.target.elements.image.value;
    const phone: number = event.target.elements.phone.value;
    if (contactName === "") throw Error("Put a contact name"); //YS: Incorrect syntax: throw new Error()
    if (phone === null) throw Error("Put a number"); //YS: Should be: if(!phone)

    const generator = new ContactGenerator(contactName, image, phone);

    const joni2 = JSON.parse(localStorage.getItem('contactsData'))

    contacts.add(generator, joni2);

    
    console.log("a",joni2)

    contacts.renderContacts();
    cerrar(); //YS: You already have a closeModal function. 
  } catch (error) {
    alert(error);
  }
  event.target.reset();
};

function cerrar() {
  window.close();
}

faPlus.addEventListener('click', (e) => openModal(e))


//open modal window
function openModal(e) {
  e.preventDefault()
  bgModal.classList.add('bg-active')
}


//close modal windows
modalClose.addEventListener('click', closeModal)



function closeModal() {
  bgModal.classList.remove('bg-active')
}



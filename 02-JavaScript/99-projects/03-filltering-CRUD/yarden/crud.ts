//This is a simple contacts list with possibility to add and remove contacts

//The class for input from user, to add to an array later:
class Contact {
  phoneNumber: number;
  contactName: string;
  email: string;
  address: string;
  onWhatsapp: boolean;
  photo: string;
  id: string;

  constructor(
    phoneNumber: number,
    contactName: string,
    email: string,
    address: string,
    onWhatsapp: boolean,
    photo: string
  ) {
    this.phoneNumber = phoneNumber;
    this.contactName = contactName;
    this.email = email;
    this.address = address;
    this.onWhatsapp = onWhatsapp;
    this.photo = photo;
    this.id = Math.random().toString(16).slice(2);
  }
}
//Selecting the relevant elements on the DOM:
const phoneNumber = document.querySelector("#phone-number");
const contactName = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const onWhatsapp = document.querySelector("#on-Whatsapp");
const photo = document.querySelector("#photo");
//Contacts class for methods and storage of the instances on an array:
class Contacts {
  contacts: Array<Contact> = [];
//Function for rendering an instance to the DOM:
  render() {
    try {
      let rootDiv = document.querySelector(".saved-contacts-root");
      let htmlPattern = "";
      this.contacts.forEach((contact) => {
        htmlPattern += `<div class="contact">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
        <img class="contact__img" src="${contact.photo}" alt="Contact image">
        <div class="contact__inner-wrapper">
            <h3 contenteditable="false" class="contact__inner-wrapper__name">${contact.contactName}</h3>
            <div class="contact__inner-wrapper__phone-wrapper">
                <p class="contact__number">${contact.phoneNumber}</p>
                <i class="fa fa-whatsapp fa" aria-hidden="true"></i>
            </div>
        </div>
        <p class="contact__address">${contact.address}</p>
        <p class="contact__email">${contact.email}</p>
        <i class="fas fa-edit fa-lg" style="cursor:pointer;" onclick="handleEdit('${contact.id}')"></i>
        <i class="far fa-trash-alt fa-lg" style="cursor:pointer;" onclick="handleDelete('${contact.id}')"></i>
        </div>`;
      });
      rootDiv.innerHTML = htmlPattern;
    } catch (error) {
      console.error(error)
    }
  }
  //Update method - did not manage to finish it:
  update(id: string) {
    try {
      const indexToEdit = this.contacts.findIndex(
        (element) => element.id === id
      );
      this.contacts[indexToEdit].contactName;
    } catch (error) {
      console.error(error)
    }
  }
  //Remove method that works with handle-delete function:
  remove(id: string): void {
    try {
      const indexToRemove = this.contacts.findIndex(
        (element) => element.id === id
      );
      this.contacts.splice(indexToRemove, 1);
      this.render();
    } catch (error) {
      console.error(error)
    }
  }
  //search method - had to skip it! Did not have time ):
  search(params: void) {}
}
//The array instance of Contacts class for this page:
let savedContacts = new Contacts();

//Clicking on the edit button -should have- made the name and phone number contenteditable="true"; and show it visually for editing; could not finish this on time
function handleEdit(idToEdit) {
  try {    
      savedContacts.update(idToEdit);
      const elmToEdit = savedContacts.contacts.find(e => {
        e.id === idToEdit
        console.dir(elmToEdit);
      })
      // eToEdit.contactName = 
      // console.dir(eToEdit);


  } catch (error) {
    console.error(error)
  }
}


const handleDelete = (id) => {
  try {
    savedContacts.remove(id);
  } catch (error) {}
};

//Adding a contact after form submission:
const handleSubmit = (event: any) => {
  try {
    event.preventDefault();

    const phoneNumber = event.target[0].value;
    const contactName = event.target[1].value;
    const email = event.target[2].value;
    const address = event.target[3].value;
    const onWhatsapp = event.target[4].checked;
    const photo = event.target[5].value;

    const newContact = new Contact(
      phoneNumber,
      contactName,
      email,
      address,
      onWhatsapp,
      photo
    );
    savedContacts.contacts.push(newContact);
    savedContacts.render();

    event.target.reset();
  } catch (error) {
    console.error(error);
  }
}
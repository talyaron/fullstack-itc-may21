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
            <h3 contenteditable="false" id="${contact.id}" class="contact__inner-wrapper__name" onkeyup="handleEditName(event)">${contact.contactName}</h3>
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
    } catch (error) { } //YS: And? Wheres the error handling? 
  }
  //Update method - did not manage to finish it:
  update(id: string) {
    try {
      const indexToEdit = this.contacts.findIndex(
        /*YS: Ok you were close. Here you had to make the this.contacts[indexToEdit].contactName = something */
        (element) => element.id === id
      );

      const changeEditable = document.getElementById(`${id}`);
      changeEditable.setAttribute("contenteditable", "true"); 
      document.getElementById('contactName').style.border = "1px solid black";

      console.log(changeEditable);

      this.contacts[indexToEdit].contactName = changeEditable.textContent;
      console.log(this.contacts[indexToEdit]);

      this.render();
    } catch (error) { }
  }
  //Remove method that works with handle-delete function:
  remove(id: string): void {
    try {
      const indexToRemove = this.contacts.findIndex(
        (element) => element.id === id
      );
      this.contacts.splice(indexToRemove, 1);
      /*YS: Notice that with splice you are changing the original array 
      while with other methods like filter you create a new array. Always be aware of what the method returns 
      and if it modifies the original array or not.*/
      this.render();
    } catch (error) { } //YS: Error handling? You cant just leave it empty. At least console.log(error)
  }
  //search method - had to skip it! Did not have time ):
  search(params: void) { }
}
//The array instance of Contacts class for this page:
let savedContacts = new Contacts();

//Clicking on the edit button -should have- made the name and phone number contenteditable="true"; and show it visually for editing; could not finish this on time
function handleEdit(id) {
  try {
    savedContacts.update(id);
  } catch (error) { } //YS: Error handling
}

const handleDelete = (id) => {
  try {
    savedContacts.remove(id);
  } catch (error) { } //YS: Error handling
};

//Adding a contact after form submission:
const handleSubmit = (event: any) => {
  try {
    event.preventDefault();

    const phoneNumber = event.target[0].value; //YS: ev.target.elements.phone-number.value;
    const contactName = event.target[1].value; //YS: ev.target.elements.name.value;
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
    console.error(error); //YS: Mazal Tov!!!  
  }
};

function handleEditName(ev:any){
  //get the id
  console.log(ev)
  const id = ev.target.id;
  const name = ev.target.innerText;
  console.log(id, name)

  //get the new name
}

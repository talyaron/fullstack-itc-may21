//render in the first page
var render = document.querySelector(".wrapper__container--chats");
//popup to add a new contact
var btnModal = document.querySelector('.modal-btn'); //YS: You dont need the outer parenthesis: < const btnModal = <HTMLButtonElement>document.querySelector('.modal-btn') > 
var bgModal = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var inputName = document.querySelector('#name'); //YS: Same as above
var inputPhone = document.querySelector('#phone'); //YS: Same as above
var faPlus = document.querySelector('.fa-plus'); //YS: Same as above
//search-regrex first page, take id from the input search
var inputFilter = document.querySelector("#filterN");
var ContactGenerator = /** @class */ (function () {
    function ContactGenerator(contactName, image, phone) {
        this.contactName = contactName;
        this.image = image;
        this.phone = phone;
        this.contactId = Math.random().toString(16).slice(2);
    }
    return ContactGenerator;
}());
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.contacts = [];
        this.contactsFilter = [];
    }
    Contacts.prototype.add = function (add) {
        this.contacts.push(add);
        this.renderContacts(); //YS: You are rendering your contacts here and also after you use this function in line 135 - you only need one. 
        this.contactsFilter.push(add);
        localStorage.setItem('contactsData', JSON.stringify(this.contacts));
    };
    Contacts.prototype.addList = function (addlist) {
        var _this = this;
        addlist.forEach(function (element) {
            var contac = new ContactGenerator(element.contactName, element.image, element.phone);
            _this.contacts.push(contac);
            _this.contactsFilter.push(contac);
        });
        this.renderContacts();
    };
    Contacts.prototype.renderContacts = function () {
        var html = "";
        this.contacts.forEach(function (element) {
            html += "<div class=\"containerChat\">\n                    <div class=\"chat1\" onclick=redirect(\"" + element.contactId + "\")>\n                      <img src=\"" + element.image + "\" alt=\"\" class=\"chat1__photo\"> \n                      <h4 class=\"chat1__name\">" + element.contactName + "</h4>\n                    </div>\n                    <div>\n                      <i onclick='handleDelete(\"" + element.contactId + "\")' class=\"far fa-trash-alt\" id=\"delete\"> </i>\n                    </div>\n                </div>";
        });
        render.innerHTML = html;
    };
    Contacts.prototype.searchContact = function (inputFilter) {
        var regrExp = inputFilter;
        var searchTermReg = new RegExp(regrExp, "i");
        this.contacts = this.contactsFilter.filter(function (elem) {
            return searchTermReg.test(elem.contactName);
        });
        this.renderContacts();
    };
    return Contacts;
}());
function handleDelete(contactId) {
    var reducedContacts = contacts.contacts.filter(function (contact) { return contactId !== contact.contactId; });
    contacts.contacts = reducedContacts; //YS: When you refresh the contacts are not deleted since you are not adding this to localstorage. 
    contacts.renderContacts(); //YS: Should be: contacts.renderContacts(reducedContacts)
}
var contacts = new Contacts();
contacts.renderContacts();
contacts.addList(contactsData);
inputFilter.addEventListener("keyup", handleKeyUp);
function handleKeyUp() {
    try {
        contacts.searchContact(inputFilter.value);
    }
    catch (e) {
        console.log(e);
    }
}
function redirect(contactId) {
    try {
        localStorage.setItem("contactsData", JSON.stringify(contacts.contacts));
        localStorage.setItem("contactID", contactId);
        window.location.href = "second.html?id=" + contactId;
        if (!window.location.href)
            throw new Error("The page where you want to redirect it doesn´t exist!");
    }
    catch (error) {
        console.error(error);
    }
}
var handleSubmit = function (event) {
    event.preventDefault();
    try {
        var contactName = event.target.elements.name.value;
        var image = event.target.elements.image.value;
        var phone = event.target.elements.phone.value;
        if (contactName === "")
            throw Error("Put a contact name"); //YS: Incorrect syntax: throw new Error()
        if (phone === null)
            throw Error("Put a number"); //YS: Should be: if(!phone)
        var generator = new ContactGenerator(contactName, image, phone);
        contacts.add(generator);
        contacts.renderContacts();
        cerrar(); //YS: You already have a closeModal function. 
    }
    catch (error) {
        alert(error);
    }
    event.target.reset();
};
function cerrar() {
    window.close();
}
faPlus.addEventListener('click', function (e) { return openModal(e); });
//open modal window
function openModal(e) {
    e.preventDefault();
    bgModal.classList.add('bg-active');
}
//close modal windows
modalClose.addEventListener('click', closeModal);
function closeModal() {
    bgModal.classList.remove('bg-active');
}

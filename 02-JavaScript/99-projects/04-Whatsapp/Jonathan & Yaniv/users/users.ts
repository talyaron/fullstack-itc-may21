class User {
    userImg: string;
    userName: string;
    userPhone: string;
    userGroups: Array<string>;

    constructor (userImg: string, userName: string, userPhone: string, userGroups: Array<string>) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }
}

class ContactList {
    allContacts: Array<User>;

    constructor (allContacts: Array<User>) {
        if (allContacts === null) {
            this.allContacts = []; 
            const userItemsElements: NodeList = document.querySelectorAll('.users__item');
            let contactToPush: User;
            userItemsElements.forEach(contact => {
                const contactImg: string = contact.firstChild.parentElement.querySelector("#user_img").getAttribute('src');
                const contactNameContainer: HTMLElement = contact.firstChild.parentElement.querySelector("#user_name");
                const contactName: string = contactNameContainer.innerText;
                const contactPhoneContainer: HTMLElement = contact.firstChild.parentElement.querySelector("#user_phone");
                const contactPhone: string = contactPhoneContainer.innerText;    
                const contactGroups: Array<string> = [];

                contactToPush = new User(contactImg, contactName, contactPhone, contactGroups);
                
                this.allContacts.push(contactToPush);
            });
            return;
        }
        this.allContacts = allContacts;
    }

    findContact(contactPhone) {
        const contact = this.allContacts.find(contactItem => contactItem.userPhone === contactPhone);
        return contact;
    }

    // addContact(contact: User) {
    //     this.allContacts.push(contact);
    // }
}

let allContacts: ContactList;
if (JSON.parse(localStorage.getItem('contactList')) !== null) allContacts = new ContactList(JSON.parse(localStorage.getItem('contactList')).allContacts);
else {
    allContacts = new ContactList(null);
    localStorage.setItem('contactList',JSON.stringify(allContacts));
}

const usersContainer: HTMLElement = document.querySelector('.users');

usersContainer.addEventListener('click', ev => userPicker(ev));

const userPicker = (ev: any) : void => {

    if (ev.target.className === 'users') return;
    
    let userContainer: HTMLElement;
    if (ev.target.id.indexOf('user_') === -1) userContainer = ev.target;
    else userContainer = ev.target.parentElement;
    
    const userImg: string = userContainer.querySelector("#user_img").getAttribute('src');
    const userNameContainer: HTMLElement = userContainer.querySelector("#user_name");
    const userName: string = userNameContainer.innerText;
    const userPhoneContainer: HTMLElement = userContainer.querySelector("#user_phone");
    const userPhone: string = userPhoneContainer.innerText;    
    const userGroups: Array<string> = allContacts.findContact(userPhone).userGroups;
    
    const pickedUser: User = new User(userImg, userName, userPhone, userGroups);

    localStorage.setItem('currentUser',JSON.stringify(pickedUser));
}
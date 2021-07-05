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
        this.allContacts = allContacts;
    }

    renderContactsToNewChatMenu() {
        try {
            const newChatContactsContainer: HTMLElement = document.querySelector(".options");
            
            this.allContacts.forEach((contact) => {
                if (contact.userPhone === loggedInUser.userPhone) return;
                const contactHTML = `
                <div class="options__item options__item--contact" id="${contact.userPhone}">
                    <img src="${contact.userImg}" class="new_contact_img">
                    <h3 class="new_contact_name">${contact.userName}</h3>
                    <p class="new_contact_status">The world is awesome</p>
                </div>`;
                newChatContactsContainer.insertAdjacentHTML('beforeend',contactHTML);
            });
          } catch (er) {
            console.error(er);
          }
    }
}

const allContacts: ContactList = new ContactList(JSON.parse(localStorage.getItem('contactList')).allContacts);

const loggedInUser: User = new User(JSON.parse(localStorage.getItem('currentUser')).userImg, JSON.parse(localStorage.getItem('currentUser')).userName, JSON.parse(localStorage.getItem('currentUser')).userPhone, JSON.parse(localStorage.getItem('currentUser')).userGroups);

const pageTitle: HTMLElement = document.querySelector('title');
pageTitle.innerText = `${loggedInUser.userName}'s groups`;

const addChatBtn: HTMLElement = document.querySelector('.controls__item--plus');

addChatBtn.addEventListener('click', ev => showNewChatMenu(ev));

const showNewChatMenu = (ev: any): void => {
    const newChatMenu: HTMLElement = document.querySelector('.new_chat');
    allContacts.renderContactsToNewChatMenu();
    newChatMenu.style.display = 'unset';
    
    
}

const cancelChatBtn: HTMLElement = document.querySelector('.title__item--cancel_btn');

cancelChatBtn.addEventListener('click', ev => hideNewChatMenu(ev));

const hideNewChatMenu = (ev: any): void => {
    const newChatMenu: HTMLElement = document.querySelector('.new_chat');
    newChatMenu.style.display = 'none';
}

const newChatOptions: HTMLElement = document.querySelector('.options');

newChatOptions.addEventListener('click', ev => directToChat(ev));
newChatOptions.addEventListener('click', ev => showNewGroupForm(ev));

const directToChat = (ev: any): void => {

    let contactToChat: HTMLElement;
    if ((ev.target.className !== 'options__item options__item--contact') && (ev.target.className.indexOf('new_contact_') === -1)) return;
    if (ev.target.className.indexOf('new_contact_') !== -1) contactToChat = ev.target.parentElement;
    else contactToChat = ev.target;

    //JN
    //I will need allcontact list eventually
    
    localStorage.setItem("contactId", JSON.stringify(contactToChat.id))

    window.location.href = `../chat/chat.html?${loggedInUser.userPhone}&${contactToChat.id}`;
}

const showNewGroupForm = (ev: any): void => {

    let newGroupForm: HTMLElement;
    if ((ev.target.className !== 'options__item options__item--group') && (ev.target.id.indexOf('new_group_') === -1)) return;
    if (ev.target.id.indexOf('new_group_') !== -1) newGroupForm = ev.target.parentElement;
    else newGroupForm = ev.target;
    console.log(newGroupForm);
}
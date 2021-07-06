//JN
const messageChat = JSON.parse(localStorage.getItem("messageChat"))


const pageTitle: HTMLElement = document.querySelector('title');
pageTitle.innerText = `${loggedInUser.userName}'s chats`;

const profileImg: HTMLElement = document.querySelector('.controls__item--profile_img');
profileImg.setAttribute('src',loggedInUser.userImg)

loggedInUser.renderChatsToChatsList();

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
newChatOptions.addEventListener('click', ev => showNewGroupMenu(ev));



const directToChat = (ev: any): void => {

    let contactToChat: HTMLElement;
    if ((ev.target.className !== 'options__item options__item--contact') && (ev.target.className.indexOf('new_contact_') === -1)) return;
    if (ev.target.className.indexOf('new_contact_') !== -1) contactToChat = ev.target.parentElement;
    else contactToChat = ev.target;

    const contactToChatPhone: string = contactToChat.id;
    const contactToChatImg: string = contactToChat.querySelector('.new_contact_img').getAttribute('src');
    const contactToChatNameContainer: HTMLElement = contactToChat.querySelector('.new_contact_name');
    const contactToChatName: string = contactToChatNameContainer.innerText;
    const chatUsers: Array<string> = [loggedInUser.userPhone, contactToChat.id];

    
    const group: Group = new Group(contactToChatPhone, contactToChatImg, contactToChatName, chatUsers, messageChat);
    loggedInUser.addGroup(group);
    localStorage.setItem('currentUser',JSON.stringify(loggedInUser));
    allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
    localStorage.setItem('contactList',JSON.stringify(allContacts));

    localStorage.setItem('contactId',JSON.stringify(contactToChat.id))

    window.location.href = `../chat/chat.html?${loggedInUser.userPhone}&${contactToChat.id}`;
}

const showNewGroupMenu = (ev: any): void => {

    if ((ev.target.className !== 'options__item options__item--group') && (ev.target.id.indexOf('new_group_') === -1)) return;
    const newGroupMenu: HTMLElement = document.querySelector('.new_group');
    allContacts.renderContactsToNewGroupMenu();
    newGroupMenu.style.display = 'unset';
}

const backToNewChatMenuBtn: HTMLElement = document.querySelector('.title__item--back_btn');

backToNewChatMenuBtn.addEventListener('click', ev => hideNewGroupMenu(ev));

const hideNewGroupMenu = (ev: any): void => {
    const newGroupMenu: HTMLElement = document.querySelector('.new_group');
    newGroupMenu.style.display = 'none';
}

const newGroupSubmit: HTMLElement = document.querySelector('#new_group_submit');

newGroupSubmit.addEventListener('submit', ev => createNewGroup(ev));

const createNewGroup = (ev: any): void => {
    try {
        ev.preventDefault();

        const groupId: string = null;
        const imgLabel: HTMLElement = document.querySelector('#add_photo');
        const groupImg: string = imgLabel.getAttribute('alt');
        const groupName: string = ev.target.elements.groupName.value;
        const contactsCheckboxes: Array<HTMLInputElement> = ev.target.querySelectorAll('.checkbox');
        const groupUsers: Array<string> = [];
        contactsCheckboxes.forEach(contact => {
            if (contact.checked) groupUsers.push(contact.value);
        });

    
        const group: Group = new Group(groupId, groupImg, groupName, groupUsers,messageChat);

        loggedInUser.addGroup(group);
        localStorage.setItem('currentUser',JSON.stringify(loggedInUser));
        allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
        localStorage.setItem('contactList',JSON.stringify(allContacts));
        hideNewGroupMenu(ev);
        hideNewChatMenu(ev);
        
        ev.target.reset();
    } catch (er) {
        console.error(er);
    }
}
    
const logOutBtn = document.querySelector('.controls__item--ellipsis');

logOutBtn.addEventListener('click', ev => logOut(ev));

const logOut = (ev: any): void => {
    localStorage.setItem('currentUser',null);
    window.location.href = `../users/users.html`;
}
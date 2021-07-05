const pageTitle: HTMLElement = document.querySelector('title');
pageTitle.innerText = `${loggedInUser.userName}'s chats`;

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

    const contactToChatPhone: string = contactToChat.id;
    const contactToChatImg: string = contactToChat.querySelector('.new_contact_img').getAttribute('src');
    const contactToChatNameContainer: HTMLElement = contactToChat.querySelector('.new_contact_name');
    const contactToChatName: string = contactToChatNameContainer.innerText;
    const chatUsers: Array<string> = [loggedInUser.userPhone, contactToChat.id];
    
    const group: Group = new Group(contactToChatPhone, contactToChatImg, contactToChatName, chatUsers);
    loggedInUser.addGroupIfNew(group.groupId);
    localStorage.setItem('currentUser',JSON.stringify(loggedInUser));
    allContacts[allContacts.findContactIndex(loggedInUser.userPhone)] = loggedInUser;
    localStorage.setItem('contactList',JSON.stringify(loggedInUser));

    //JN
    localStorage.setItem("contactListUser", JSON.stringify(allContacts))
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

const logOutBtn = document.querySelector('.controls__item--ellipsis');

logOutBtn.addEventListener('click', ev => logOut(ev));

const logOut = (ev: any): void => {
    localStorage.setItem('currentUser',null);
    window.location.href = `../users/users.html`;
}

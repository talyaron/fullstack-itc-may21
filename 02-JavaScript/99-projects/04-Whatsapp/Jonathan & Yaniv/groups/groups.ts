class Group {
    groupImg: string;
    groupName: string;
    groupUsers: Array<string> // userPhone numbers
    groupId: string;
    groupMsgs: Array<Message>;

    constructor ()
}

class User {
    userImg: string;
    userName: string;
    userPhone: string;
    userGroups: Array<Group>;

    constructor (userImg: string, userName: string, userPhone: string, userGroups: Array<Group>) {
        this.userImg = userImg;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userGroups = userGroups;
    }

    addGroup() {
        try {
            this.userGroups.push()
          } catch (er) {
            console.error(er);
          }
    }

    renderChatsToChatsList() {
        try {
            const ChatsContainer: HTMLElement = document.querySelector(".chats");
            ChatsContainer.innerHTML = ``;
            this.userGroups.forEach((group) => {
                const contactHTML = `
                <div class="chats__item chat" id="${group.groupId}">
                <img class="chat__item chat__item--img" src="${group.groupImg}" />
                <h3 class="chat__item chat__item--name">${group.groupName}</h2>
                    <p class="chat__item chat__item--last_msg_time">${group.groupMsgs[group.groupMsgs.length -1].dateMsg}</p>
                    <p class="chat__item chat__item--last_msg_content">${group.groupMsgs[group.groupMsgs.length -1].content}</p>
                    <i class="chat__item chat__item--delete fas fa-trash"></i>
            </div>`;
            ChatsContainer.insertAdjacentHTML('beforeend',contactHTML);
            });
          } catch (er) {
            console.error(er);
          }
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
            newChatContactsContainer.innerHTML = `
            <div class="options__item options__item--group">
                    <img id="new_group_logo" src="https://static.thenounproject.com/png/61728-200.png">
                    <h3 id="new_group_title">New Group</h3>
                </div>`;
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


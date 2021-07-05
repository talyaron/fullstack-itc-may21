class Group {
    groupId: string; // userPhone or "group" + Math.random().toString(16).slice(2);
    groupImg: string;
    groupName: string;
    groupUsers: Array<string> // userPhone numbers
    groupMsgs: Array<Message>;

    constructor (groupId: string, groupImg: string, groupName: string, groupUsers: Array<string>) {
        this.groupId = groupId;
        this.groupImg = groupImg;
        this.groupName = groupName;
        this.groupUsers = groupUsers;
    }
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

    addGroupIfNew(groupId: string) {
        try {
            const groupIndex = this.userGroups.findIndex(group => group.groupId === groupId);
            if (groupIndex !== -1) return;
            this.userGroups.push();
          } catch (er) {
            console.error(er);
          }
    }

    renderChatsToChatsList() {
        try {
            const ChatsContainer: HTMLElement = document.querySelector(".chats");
            ChatsContainer.innerHTML = ``;
            this.userGroups.forEach((group) => {
                const groupHTML: string = `
                <div class="chats__item chat" id="${group.groupId}">
                <img class="chat__item chat__item--img" src="${group.groupImg}" />
                <h3 class="chat__item chat__item--name">${group.groupName}</h2>
                    <p class="chat__item chat__item--last_msg_time">${group.groupMsgs[group.groupMsgs.length -1].dateMsg}</p>
                    <p class="chat__item chat__item--last_msg_content">${group.groupMsgs[group.groupMsgs.length -1].content}</p>
                    <i class="chat__item chat__item--delete fas fa-trash"></i>
            </div>`;
            ChatsContainer.insertAdjacentHTML('beforeend',groupHTML);
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

    findContactIndex(contactPhone) {
        const contactIndex = this.allContacts.findIndex(contactItem => contactItem.userPhone === contactPhone);
        return contactIndex;
    }

    renderContactsToNewChatMenu() {
        try {
            this.allContacts = this.allContacts.sort((a: User, b: User) => {
                const aName = a.userName;
                const bName = b.userName;
                if (aName < bName) {return -1;}
                if (aName > bName) {return 1;}
                return 0;
            });
            const newChatContactsContainer: HTMLElement = document.querySelector(".options");
            newChatContactsContainer.innerHTML = `
            <div class="options__item options__item--group">
                    <img id="new_group_logo" src="https://static.thenounproject.com/png/61728-200.png">
                    <h3 id="new_group_title">New Group</h3>
                </div>`;
            this.allContacts.forEach((contact) => {
                if (contact.userPhone === loggedInUser.userPhone) return;
                const contactHTML: string = `
                <div class="options__item options__item--contact" id="${contact.userPhone}">
                    <img class="new_contact_img" src="${contact.userImg}">
                    <h3 class="new_contact_name">${contact.userName}</h3>
                    <p class="new_contact_status">The world is awesome</p>
                </div>`;
                newChatContactsContainer.insertAdjacentHTML('beforeend',contactHTML);
            });
          } catch (er) {
            console.error(er);
          }
    }

    renderContactsToNewGroupMenu() {
        try {
            this.allContacts = this.allContacts.sort((a: User, b: User) => {
                const aName = a.userName;
                const bName = b.userName;
                if (aName < bName) {return -1;}
                if (aName > bName) {return 1;}
                return 0;
            });
            const newGroupContactsContainer: HTMLElement = document.querySelector("#add_group_form");
            newGroupContactsContainer.innerHTML = `
            <div class="options__item">
                <label for="group_img_form" id="add_photo">Add<br /> Group<br /> Image</label>
                <input type="file" name="groupImg" id="group_img_form" onchange="readURL(this);" style="display:none" />
                <img id="groupImg">
            </div>
            <div class="options__item">
                <label for="group_name_form">Group Name</label>
                <input type="text" name="groupName" id="group_name_form" />
            </div>`;
            this.allContacts.forEach((contact) => {
                if (contact.userPhone === loggedInUser.userPhone) return;
                const contactHTML: string = `
                <div class="options__item options__item--contact" id="${contact.userPhone}">
                    <img class="new_contact_img" src="${contact.userImg}">
                    <h3 class="new_contact_name">${contact.userName}</h3>
                    <p class="new_contact_status">The world is awesome</p>
                    <input type="checkbox" id="${contact.userPhone}" name="${contact.userPhone}" value="${contact.userPhone}">
                </div>`;
                newGroupContactsContainer.insertAdjacentHTML('afterbegin',contactHTML);
            });

            const submitHTML: string = `<input class="options__item options__item--submit" type="submit" name="submit"
            value="🡢" />`;
            newGroupContactsContainer.insertAdjacentHTML('beforeend',submitHTML);

          } catch (er) {
            console.error(er);
          }
    }
}

const allContacts: ContactList = new ContactList(JSON.parse(localStorage.getItem('contactList')).allContacts);

const loggedInUser: User = new User(JSON.parse(localStorage.getItem('currentUser')).userImg, JSON.parse(localStorage.getItem('currentUser')).userName, JSON.parse(localStorage.getItem('currentUser')).userPhone, JSON.parse(localStorage.getItem('currentUser')).userGroups);
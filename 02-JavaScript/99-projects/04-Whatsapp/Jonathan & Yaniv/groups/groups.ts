class Message {
    content: string;
    userPhone: string; 
    dateMsg: string;
    groupID: string;
    msgID: string;
    lastMessageName: string;
    timeMsgSec : number;
    contactPhone:string;
}

class Group {
    groupId: string; // userPhone or "group" + Math.random().toString(16).slice(2);
    groupImg: string;
    groupName: string;
    groupUsers: Array<string> // userPhone numbers // in User class - add a method to push new messages, like this: this.userGroups.groupMsgs.push(newMsg: Message). After calling this method - currentUser and contactList in the localStorage should be updated. When entering the Chat page, a new localStorage item should be set: currentGroup. The Group Class on the chat.ts file should include a renderMsgs() method to show all past group messages from localStorage.
    groupMsgs: Array<Message> = []
    constructor (groupId: string, groupImg: string, groupName: string, groupUsers: Array<string>) {
        this.groupId = groupId ? groupId : "group" + Math.random().toString(16).slice(2);
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

    addGroup(newGroup: Group) {
        try {
            this.userGroups.push(newGroup);
            this.renderChatsToChatsList(null);
          } catch (er) {
            console.error(er);
          }
    }

    addGroupIfNew(groupToCheck:Group){
        try {

            const existingGroup = this.userGroups.find(group=>group.groupId === groupToCheck.groupId);

            if(existingGroup === undefined){
                 this.userGroups.push(groupToCheck);
                 this.renderChatsToChatsList(null);
            }
          
            if(existingGroup === undefined) return true;
            else return false;
       
    } catch (er) {
            console.error(er);
          }

    }

    filterGroups(groupFilter: string) {
        try {
            let filteredGroups: Array<Group> = this.userGroups;
            const groupRegEx = groupFilter ? new RegExp(groupFilter,'gmi') : undefined;
        
            if (groupFilter !== "") {
                const byMsg: Array<Group> = this.userGroups.filter(group => group.groupMsgs.find(msg=>groupRegEx.test(msg.content)) !== undefined);
                const byName: Array<Group> = this.userGroups.filter(group => groupRegEx.test(group.groupName));
                const byUser: Array<Group> = this.userGroups.filter(group => group.groupUsers.find(user=>groupRegEx.test(user)) !== undefined); // not by users name, only phone numbers
                filteredGroups = [...byMsg,...byName,...byUser];
                filteredGroups = filteredGroups.filter((v,i,a)=>a.findIndex(t=>(t.groupId === v.groupId))===i);
            }

            this.renderChatsToChatsList(filteredGroups);

        } catch (er) {
            console.error(er);
          }  
    }

    renderChatsToChatsList(FilteredGroupsToRender: Array<Group>) {
        try {
            const ChatsContainer: HTMLElement = document.querySelector(".chats");
            ChatsContainer.innerHTML = ``;
            
            const groupsToRender: Array<Group> = FilteredGroupsToRender ? FilteredGroupsToRender : this.userGroups;
            groupsToRender.forEach((group) => {

                const datemsg = group.groupMsgs[group.groupMsgs.length-1] ? group.groupMsgs[group.groupMsgs.length-1].dateMsg : "" ;    
                const content = group.groupMsgs[group.groupMsgs.length-1] ? group.groupMsgs[group.groupMsgs.length-1].content : "" ; 

                const groupHTML: string = `
                <div class="chats__item chat" id="${group.groupId}">
                <img class="chat__item chat__item--img" src="${group.groupImg}" />
                <h3 class="chat__item chat__item--name">${group.groupName}</h3>
                    <p class="chat__item chat__item--last_msg_time">${datemsg}</p>
                    <p class="chat__item chat__item--last_msg_content">${content}</p>
                    <i class="chat__item chat__item--delete fas fa-trash" onclick='handleDelete("${group.groupId}")'></i>
            </div>`; // for lines 47-48 - add "$" before "{" once the Message class is linked
            ChatsContainer.insertAdjacentHTML('beforeend',groupHTML);
            });
          } catch (er) {
            console.error(er);
          }
    }

    extractGroup(groupId:string){
        try {
            const existingGroup = this.userGroups.find(group=>group.groupId === groupId)
            return existingGroup;
        } catch (er) {
            console.error(er);
          }
    }

    //JN
    deleteGroup(groupID:string){
        try {

            console.log(groupID)

            this.userGroups = this.userGroups.filter(group=>group.groupId !== groupID)
            this.renderChatsToChatsList(this.userGroups)

        } catch (er) {
            console.error(er);
          }
    }

    //
}

class ContactList {
    allContacts: Array<User>;

    constructor (allContacts: Array<User>) {
        this.allContacts = allContacts;
    }

    findContactIndex(contactPhone) {
        try {
            const contactIndex = this.allContacts.findIndex(contactItem => contactItem.userPhone === contactPhone);
            return contactIndex;
        } catch (er) {
            console.error(er);
        }
    }

    filterContacts(contactFilter: string,type: string) {
        try {
            let filteredContacts: Array<User> = this.allContacts;
            const contactRegEx = contactFilter ? new RegExp(contactFilter,'gmi') : undefined;
        
            if (contactFilter !== "") {
                const byName: Array<User> = this.allContacts.filter(contact => contactRegEx.test(contact.userName));
                const byPhone: Array<User> = this.allContacts.filter(contact => contactRegEx.test(contact.userPhone));
                filteredContacts = [...byName,...byPhone];
                filteredContacts = filteredContacts.filter((v,i,a)=>a.findIndex(t=>(t.userPhone === v.userPhone))===i);
            }

            if (type === 'privateChat') this.renderContactsToNewChatMenu(filteredContacts);
            if (type === 'groupChat') this.renderContactsToNewGroupMenu(filteredContacts);
        } catch (er) {
            console.error(er);
          }
    }

    renderContactsToNewChatMenu(FilteredContactsToRender: Array<User>) {
        try {
            const contactsToRender: Array<User> = FilteredContactsToRender ? FilteredContactsToRender : this.allContacts;

            contactsToRender.sort((a: User, b: User) => {
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
                contactsToRender.forEach((contact) => {
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

    renderContactsToNewGroupMenu(FilteredContactsToRender: Array<User>) {
        try {
            const contactsToRender: Array<User> = FilteredContactsToRender ? FilteredContactsToRender : this.allContacts;

            contactsToRender.sort((a: User, b: User) => {
                const aName = a.userName;
                const bName = b.userName;
                if (aName < bName) {return -1;}
                if (aName > bName) {return 1;}
                return 0;
            });

            const newGroupContactsContainer: HTMLElement = document.querySelector("#add_group_controls");
            newGroupContactsContainer.innerHTML = `
            <div class="options__item options__item--group_img">
                <label for="group_img_form" id="add_photo">Add Group Image</label>
                <input type="file" name="groupImg" id="group_img_form" onchange="readURL(this);" style="display:none" required />
            </div>
            <div class="options__item options__item--group_name">
                <input type="text" maxlength="25" placeholder="Group's Topic" name="groupName" id="group_name_form" required />
            </div>`;
            contactsToRender.forEach((contact) => {
                if (contact.userPhone === loggedInUser.userPhone) return;
                const contactHTML: string = `
                <div class="options__item options__item--contact" id="${contact.userPhone}">
                    <img class="new_contact_img" src="${contact.userImg}">
                    <h3 class="new_contact_name">${contact.userName}</h3>
                    <p class="new_contact_status">The world is awesome</p>
                    <input type="checkbox" class="checkbox" id="${contact.userPhone}" name="${contact.userPhone}" value="${contact.userPhone}">
                </div>`;
                newGroupContactsContainer.insertAdjacentHTML('afterbegin',contactHTML);
            });

          } catch (er) {
            console.error(er);
          }
    }
}

const allContacts: ContactList = new ContactList(JSON.parse(localStorage.getItem('contactList')).allContacts);

const loggedInUser: User = new User(JSON.parse(localStorage.getItem('currentUser')).userImg, JSON.parse(localStorage.getItem('currentUser')).userName, JSON.parse(localStorage.getItem('currentUser')).userPhone, JSON.parse(localStorage.getItem('currentUser')).userGroups);

const readURL = (input: any) => {
    try {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (e)=> {
                const label: HTMLElement = document.querySelector('#add_photo');
                label.setAttribute('alt',`${e.target.result}`);
                label.style.backgroundImage = `url("${e.target.result}")`;
                label.style.backgroundSize = '100% 100%';
                label.innerText = '';
                label.style.padding = '0';
                label.style.height = '200px';
                label.style.width = '200px';
                return e.target.result
        }
        reader.readAsDataURL(input.files[0]);
        }
    } catch (er) {
        console.error(er);
      }
}

//JN

function handleDelete(groupId:string){
    loggedInUser.deleteGroup(groupId)
}
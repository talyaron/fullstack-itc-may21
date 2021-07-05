// VARIABLES GLOBALES
let contactsGroup = JSON.parse(localStorage.getItem("contactos"));
let arraysOfNames:Array<any> = [];
let groups:Array<Group> = [];

// CLASS GROUP
class Group{
    groupName: string;
    groupIMG: string;
    contactsOfGroup: Array<string>; 
    id: string;
    constructor(groupName: string, groupIMG: string, contactsOfGroup: Array<string>) {
        this.groupName = groupName;
        this.groupIMG = groupIMG;
        this.contactsOfGroup = contactsOfGroup;
        this.id = Math.random().toString(16).slice(2);
    }
}

function renderModalGroupData() {
    const containerContact: HTMLElement = document.querySelector("#contacts_group");
    let modalContact: string = "";
    contactsGroup.forEach((el) => {
        modalContact += `
        <div class="contacts_chat_modal">
            <img class="contacts_img_modal" src="${el.profileImg}" alt="">
  
            <div class="contacts_info_modal">
                <h3 class="contacts_name_modal">${el.name}</h3>
                <p>${el.phone}</p>
            </div>
            <input type="checkbox" class="check" value="${el.name}">
        </div>`
    });
    containerContact.innerHTML = modalContact;
}
renderModalGroupData();  

const deleteGroup = (id) =>{
    let groupDelete = JSON.parse(localStorage.getItem("groups"));
    const deleteGroup = groupDelete.filter((group) => group.id !== id);
    groups = deleteGroup;
    localStorage.setItem("groups", JSON.stringify(groups));
    render()
 
}

document.getElementById('btn').onclick = function() { 
    const nameGroup: string = document.querySelector("#nameGroup").value;
    const GroupImg: string = document.querySelector("#imgGroup").value; 
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
    for (var checkbox of markedCheckbox) {  
        arraysOfNames.push(checkbox.value);  
    }  
    const contactsGroup:Array<string> = arraysOfNames;
    const newGroup = new Group(nameGroup, GroupImg, contactsGroup);
        console.log(newGroup);
    groups.unshift(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));
    render()
  }  


 
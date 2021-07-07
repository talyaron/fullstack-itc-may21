// VARIABLES GLOBALES
const contactsGroup = JSON.parse(localStorage.getItem("contactos"));
let arraysOfNames: Array<any> = [];
let groups: Array<Group> = [];
const iconGroup = document.querySelector("#iconGroup");

// CLASS GROUP
class Group {
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
// EVENT LISTENER
iconGroup.addEventListener('click', renderModalGroupData);

function renderModalGroupData() {

    const containerContact: HTMLElement = document.querySelector("#contacts_group");
    let modalContact: string = "";
    const jsonGroup = JSON.parse(localStorage.getItem("contactos"));
    jsonGroup.forEach((el) => {
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

const deleteGroup = (id) => {
    try {
        const deleteGroup = groups.filter((group) => group.id !== id);
        groups = deleteGroup;
        localStorage.setItem("groups", JSON.stringify(groups));
        render(groups);
    } catch (e) {
        console.error(e)
    }
}

document.getElementById('btn').onclick = function () {
    const nameGroup: string = document.querySelector("#nameGroup").value;
    const GroupImg: string = document.querySelector("#imgGroup").value;
    let markedCheckbox: any = document.querySelectorAll('input[type="checkbox"]:checked');

    for (let checkbox of markedCheckbox) {
        arraysOfNames.push(checkbox.value);
    }
    const newGroup = new Group(nameGroup, GroupImg, arraysOfNames);
    arraysOfNames = [];

    groups.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));
    render(groups);
}



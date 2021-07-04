// VARIABLES GLOBALES
let contactsGroup = JSON.parse(localStorage.getItem("contactos"));
let arraysOfNames:Array<any> = [];

// contactsGroup.forEach(element => {  
//     const names = element.name;
//     arraysOfNames.push(names);
// });   

// console.log(arraysOfNames);


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


const handleGroup = (ev)=>{
    ev.preventDefault();

    const nameGroup: string = ev.target.elements.nameGroup.value;
    const GroupImg: string = ev.target.elements.imgGroup.value;



    // const newContacto = new Contact(name, phone, profileImg);
    // allContacts.unshift(newContacto);
    // localStorage.setItem("contactos", JSON.stringify(allContacts));
    // renderData();
}

// const getNames = ()=>{
//     let checks = document.querySelector('.check');
//     let str = "";

//     for(let i = 0;i < 2000; i++ ){
//         if(checks[i].checked === true){
//             str += checks[i].value + " ";
//             console.log(str);
//         }

        
//     }
// }
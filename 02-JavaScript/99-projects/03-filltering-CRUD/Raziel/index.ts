//--CONSTS--//
const rootHtml:HTMLElement=document.querySelector('#root');
const searchName = (<HTMLInputElement>document.querySelector("#search"))
const genderNode:any=document.querySelectorAll(".gender");
filterGender();
class Contact{
     name:string
     fname:string
     phone:string
     email:string
     gender:string
     id:string;
     constructor(name: string, fname: string, phone: string,email:string,gender:string) {
        this.name = name;
        this.fname = fname;
        this.phone = phone;
        this.email = email;
        this.gender=gender;
        this.id =  this.id="id"+Math.random().toString(16).slice(2);
    }
}

class List{
    contactList:Array<Contact>=[];
    filteredArray:Array<Contact>=[];
    addToList(list:Contact){
        try {
           this.contactList.push(list); 
        } catch (e) {
            console.log("Error");
        }
    }
  
 
    renderList(filteredArray: Array<Contact>):void{
        const arrayToRender = filteredArray ? filteredArray : this.contactList; //YS: Nice
        let html:string="";
        arrayToRender.forEach(element=>{
            if(element.gender=='male'){ html+= `<div class = "record-item"><div class = "record-el">
            <span>&#128113;&#127999;</span>
        </div>`
            }
            if(element.gender=='female'){
                html+= `<div class = "record-item"><div class = "record-el">
            <span>&#128105;</span>
        </div>`
            }
            if(element.gender=='unicorn'){
                html+= `<div class = "record-item"><div class = "record-el">
                <span>🦄</span>
            </div>`
            }
            if(element.gender=='helicopter'){
                html+= `<div class = "record-item"><div class = "record-el">
                <span>🚁</span>
            </div>`
            }
            html+=`<div class = "record-item">
            <div class = "record-el">
                <span>Name:${element.name} </span>
            </div>
            <div class = "record-el">
                <span>Family Name:${element.fname} </span>
            </div>
            <div class = "record-el">
                <span >Phone Number:${element.phone} </span>
            </div>
            <div class = "record-el">
                <span>Email Address :${element.email} </span>
            </div>
            <button type = "button" id = "delete-btn" onclick='handelRemove("${element.id}")'>
                <span>
                    <i class = "fas fa-trash"></i>
                </span> Delete
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap  onclick='editContact("${element.id}")'  </button>
            <span>
                <i class = "fas fa-trash"></i>
            </span> Edit
        </button>
        </div>
    </div>
    </div>
`
        });
        rootHtml.innerHTML=html;
    }
    
    deleteContact(id:string):void{
       this.contactList= this.contactList.filter(ev=>ev.id!==id);
       this.renderList(null);
    }
    editContacts(id:string){  //YS: Where is the input?
     
        
    }
    bringContact(id:string){
        let bringContact=id;
    }
  
    searchContact(name:string){
        
        const regEx: string = `${name}`; //YS: You dont need template literals here. 

        const searchName: RegExp = new RegExp(regEx, 'i');

        this.filteredArray = this.contactList.filter(elem => searchName.test(elem.name))

        this.renderList(this.filteredArray);
    }

    filterByGender(gender:string){
  
        if (gender === "female" || gender === "male" || gender==="unicorn" || gender==="helicopter") {
            this.contactList=  this.filteredArray.filter(elem => elem.gender === gender)
       
         } else {
            this.contactList=  this.filteredArray.filter(elem => elem.gender === 'male' || elem.gender === 'female'|| gender==="unicorn" || gender==="helicopter")
         }

        this. renderList( this.filteredArray)

    }


}

const lists=new List();
//--SUBMIT FORM--//
const handelForm = (ev) => {
    ev.preventDefault();
    const name: string = ev.target.elements.firstName.value;
    const fname: string = ev.target.elements.lastName.value;
    const phone: string = ev.target.elements.phone.value;
    const email: string = ev.target.elements.email.value;
    const gender:string=ev.target.elements.gender.value;
    //--email and phone validation--//

    const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      const emailReg = new RegExp(validEmail,'gmi');
      if (!emailReg.test(email)) {
        alert('Your Email seems to be wrong. Please correct it or use a different Email address');
        throw new Error('Wrong email address');
      }
      const validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      const phoneReg = new RegExp(validPhone,'gmi');
      if (!phoneReg.test(phone)) {
        alert('Please enter a valid phone number');
        throw new Error('Wrong phone number');
      }
    const  contact= new Contact(name,fname,phone,email,gender);
   
    lists.addToList(contact);
    lists.renderList(null);
    console.log(lists);
    ev.target.reset()
  };


  //------------FUNCTIONS----------//
  const handelRemove = (id: string): void => {
    lists.deleteContact(id);
  }
const editContact=(id:string):void=>{
    lists.editContacts(id);
    console.log("hey"); //YS: Dont leave console.logs 
}
  searchName.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    lists.searchContact(searchName .value)   
}

const genderFilter=document.querySelector('#genderFilter');

genderFilter.addEventListener("click",filterGender);

function filterGender() {
    genderNode.forEach(node=>{
      if(node.checked){
     const filterGenderList=lists.contactList.filter(contact=>contact.gender==node.value);
     lists.renderList(filterGenderList); //YS: How do you go back to the original list after filtering? 
      }
    })
}
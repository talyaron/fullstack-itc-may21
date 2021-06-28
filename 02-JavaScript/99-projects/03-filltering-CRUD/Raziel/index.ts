
const rootHtml:HTMLElement=document.querySelector('#root');

class Contact{
     name:string
     fname:string
     phone:string
     email:string
     id:string;
     constructor(name: string, fname: string, phone: string,email:string) {
        this.name = name;
        this.fname = fname;
        this.phone = phone;
        this.email = email;
        this.id =  this.id="id"+Math.random().toString(16).slice(2);
    }
}

class List{
    contactList:Array<Contact>=[];

    addToList(list:Contact){
        try {
           this.contactList.push(list); 
        } catch (e) {
            console.log("Error");
        }
    }
   emailValid(inputEmail:string){
        const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.contactList.forEach(email=>{
            if(email.email.match(validEmail)){
                alert("Valid email address!");
                 return true;
            }
            else{
                alert("You have entered an invalid email address!");
                return false;
            }
        }
            )

    }
    phoneValid(phone:string){
        const validphone= /^\+?([0-10]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-10]{4})$/;
        this.contactList.forEach(phone=>{
            if(phone.phone.match(validphone)){
                alert("Valid phone number!");
                 return true;
            }
            else{
                alert("You have entered an invalid phone number!");
                return false;
            }
        }
            )
    }
    renderList():void{
        let html:string="";
        this.contactList.forEach(element=>{

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
            <button type = "button" id = "delete-btn" onclick='handelRemove("${element.id}")'>
                <span>
                <i class="fas fa-edit"></i>
                </span> Edit
            </button>
        </div>
    
    </div>
`
        });
        rootHtml.innerHTML=html;
    }
    deleteContact(id:string):void{
       this.contactList= this.contactList.filter((ev)=>ev.id!==id);
       this.renderList();
    }
    editContact(){}
    searchContact(){}
}

const lists=new List();
const handelForm = (ev) => {
    ev.preventDefault();
    const name: string = ev.target.elements.firstName.value;
    const fname: string = ev.target.elements.lastName.value;
    const phone: string = ev.target.elements.phone.value;
    const email: string = ev.target.elements.email.value;
    const  contact= new Contact(name,fname,phone,email);
    lists.addToList(contact);
     lists.emailValid(email);
     lists.phoneValid(phone);
     lists.renderList()
    console.log(lists);
    ev.target.reset()
  };
  const handelRemove = (id: string): void => {
    lists.deleteContact(id);
  }
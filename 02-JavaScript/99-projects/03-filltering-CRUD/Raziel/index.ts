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
    renderList(){
        
    }
    deleteContact(){}
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
    console.log(lists);
    ev.target.reset()
  };
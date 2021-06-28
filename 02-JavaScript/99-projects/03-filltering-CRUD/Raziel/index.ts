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
    emailValid(inputEmail){
        const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputEmail.value.match(validEmail))
{
alert("Valid email address!");
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
    }
    phoneValid(){}
    renderList(){}
    deleteContact(){}
    editContact(){}
    searchContact(){}
}

const list=new List();
const handelForm = (ev) => {
    ev.preventDefault();
    const name: string = ev.target.elements.firstName.value;
    const fname: string = ev.target.elements.lastName.value;
    const phone: string = ev.target.elements.phone.value;
    const email: string = ev.target.elements.email.value;
    const  contact= new Contact(name,fname,phone,email);
    list.addToList(contact);
    console.log(list);
    ev.target.reset()
  };
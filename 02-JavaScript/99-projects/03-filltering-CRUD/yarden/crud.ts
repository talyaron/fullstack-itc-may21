//I am creating a simple contact form with Responsive SCSS

class Contact {
    phoneNumber: number
    name: string
    email: string
    address: string
    onWhatsapp: boolean
    photo: string

    constructor(phoneNumber:number, name:string, email:string, address:string, onWhatsapp:boolean, photo:string) {
        this.phoneNumber = phoneNumber
        this.name = name
        this.email = email
        this.address = address
        this.onWhatsapp = onWhatsapp
        this.photo = photo
    }
}

class Contacts {
    contacts: Array<Contact> = []    

    create(params:void) {
        
        }
        
    update(params:void) {
            
        }
        
    remove(params:void) {
            
    }
}
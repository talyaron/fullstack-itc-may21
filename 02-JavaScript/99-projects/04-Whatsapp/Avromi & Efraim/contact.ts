class Contacts {
    name: string ;
    imgUrl: string;
    phone: number;
    chats: Array<string>;
    contactId: string;
    constructor(name, imgUrl, phone, chats){
        this.name = name;
        this.imgUrl = imgUrl;
        this.phone = phone;
        this.chats = chats;
        this.contactId = Math.random().toString(16).slice(2);
    }


}

const Dumi = new Contacts("Dumi", "hhtps://", 774, ["chat one ","chats","three chat"])

console.log(Dumi);
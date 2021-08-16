export{}

export class Survey {
    title: string;
    questions: Array<string>;
    admin:string;
    id:string;

    constructor (title:string , questions: Array<string> , admin: string, id:string) {

        this.title = title;
        this.questions = questions;
        this.admin = admin;
        this.id = id
    }
}



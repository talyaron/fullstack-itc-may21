export class Response {
    id: string;
question:Array<string>;  
calification:Array<number>;
constructor(id: string,questrion:Array<string>,calification:Array<number>) {
    this.id = id;
    this.question = questrion;
    this.calification =calification;
}
}
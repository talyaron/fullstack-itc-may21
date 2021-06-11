class Person {
    name:string;

    constructor(name:string) {
        this.name = name;
    }
    setName(name:string){
        this.name = name;

    }
    tell() {
        return `My name is ${this.name}`;
    }
}
const person = new Person("Ben");
export default person



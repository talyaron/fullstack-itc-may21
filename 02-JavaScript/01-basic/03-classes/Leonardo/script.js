/* create a class for a person and add her address (state, city, street, homeNumber)
create a class that says the person's full address */

class Person {
    constructor(name, state, city, street, homeNumber){
        this.name = name;
        this.state = state;
        this.city = city;
        this.street = street;
        this.homeNumber = homeNumber; 
    }

    sayAddress(){
        console.log(`The address of ${this.name} is ${this.street} ${this.homeNumber} in ${this.state}-${this.city}.`)
    }
}

const person01 = new Person("Juan", "Capital", "Mendoza", "Bardas Blancas", 1250);
const person02 = new Person("Pepe", "Godoy Cruz", "Mendoza", "San Martin", 57);

person01.sayAddress();
person02.sayAddress();
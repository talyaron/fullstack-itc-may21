class PersonAdress {
  constructor(name, lastName, state, city, street, homeNumber) {
    this.name = name;
    this.lastName = lastName;
    this.state = state;
    this.city = city;
    this.street = street;
    this.homeNumber = homeNumber;
  }



}

const pepe = new PersonAdress('Pepe', 'Peperoni','PeperoniLand','City of Peps' ,'Pepins', 22001);
console.dir(pepe);


class adrress {
  constructor(state, street, city, homeNumber) {
    try {
      if (typeof state !== "string") throw new Error("state isnt a string!");
      if (typeof street !== "string") throw new Error("street isnt a string!");
      if (typeof city !== "string") throw new Error("city isnt a string!");
      if (typeof homeNumber !== "number")
        throw new Error("Home number isnt a number!");

      this.state = state;
      this.street = street;
      this.city = city;
      this.homeNumber = homeNumber;
    } catch (error) {
      console.log(error);
    }
  }
  info() {
    const Personinfo = `personal adrress is: ${this.state},${this.street},${this.city},${this.homeNumber}`;
    console.log(Personinfo);
  }
}
const person1 = new adrress("israel", "menashe", "modiin", 3);
const person2 = new adrress("usa", "meldovitch", "miami", 58);

person1.info();
person2.info();
console.log(object);
console.dir(object);

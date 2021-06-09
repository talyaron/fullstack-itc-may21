// create a class for a person and add her address (state, city, street, homeNumber)
// create a class that says the person's full address
class Address {
    constructor (state, city, street, homeNumber) {
        try {
            if (typeof state !== 'string') {throw new Error('state is not a string');}
            if (typeof city !== 'string') {throw new Error('city is not a string');}
            if (typeof street !== 'string') {throw new Error('street is not a string');}
            if (typeof homeNumber !== 'number') {throw new Error('state is not a number');}
            this.state = state;
            this.city = city;
            this.street = street;
            this.homeNumber = homeNumber;

        } catch(er) {
            return er;
        }
    }

    sayAddress() {
        return `Your address is ${this.homeNumber} ${this.street} st. ${this.city}, ${this.state}`
    }
}

adrs1 = new Address('Israel','Beer Sheva','Shimshon Amitsur',15);
console.log(adrs1.sayAddress());
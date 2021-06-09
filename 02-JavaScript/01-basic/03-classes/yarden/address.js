class Address{
    constructor(state, city, street, num) {
        try {
            if (typeOf(state) !== 'string') throw new Error ('state is not a string')
            if (typeOf(city) !== 'string') throw new Error ('city is not a string')
            if (typeOf(street) !== 'string') throw new Error ('street is not a string')
            if (typeOf(num) !== 'number') throw new Error ('num is not a number')

            this.state = state
            this.city = city
            this.street = street
            this.num = num

        } catch (error) {
            console.error(error)
    }
    
    logAddress() 
        (`Your address is at ${this.num}th ${this.street} street, ${this.city}, ${this.state}.`)

}}

const yardenAddress = new Address ('Israel', 'Haifa', 'Kaspi', 14)

Address.logAddress(yardenAddress)
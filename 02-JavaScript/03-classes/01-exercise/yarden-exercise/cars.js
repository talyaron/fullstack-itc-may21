class Car {

    constructor(carID, brand, model, price, amount) {
        try {
            
            if(typeof carID !== "object") throw new Error('not an object')

            this.carID = carID
            this.brand = brand
            this.model = model
            this.price = price
            this.amount. amount

            this.agency = document.querySelector('#agency')
            this.createCar()
            this.totalCarPrice()
            this.carInfo()

        } catch (e) {
            console.error(e)
        }
    }
}

        createCar(); {
            try {
                
                this.car = document.createElement('img')
                this.agency.appendChild(this.car)

            } catch (error) {
                console.error(e) 
            }
        }

        totalCarPrice(); {
            try {
                
                console.log(toyotaCorolla['price'] + suzukiJimmy['price']+ skodaOctavia['price']);

            } catch (error) {
                console.error(e) 
            }
        }


        const toyotaCorolla = new Car ('#toyotaCorolla', 'Toyota', 'Corolla', '140,000', '16')

        const suzukiJimmy = new Car ('#suzukiJimmy', 'Suzuki', 'Jimmy', '220,000', '6')
        
        const skodaOctavia = new Car ('#skodaOctavia', 'Skoda', 'Octavia', '120,000', '22')
        
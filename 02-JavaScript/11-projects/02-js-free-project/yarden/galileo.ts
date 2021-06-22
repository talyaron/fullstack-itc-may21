// Create a Planet class:
class Planet {
    name:string
    distanceFromEarth: number
    expeditionName:string
    pastExpeditions: number
    pastTravelers: number
    imageSrc:string

    constructor(name:string, distanceFromEarth: number, expeditionName:string, pastExpeditions: number, pastTravelers: number, imageSrc:string) {
        this.name = name
        this.distanceFromEarth = distanceFromEarth
        this.expeditionName = expeditionName
        this.pastExpeditions = pastExpeditions
        this.pastTravelers = pastTravelers
        this.imageSrc = imageSrc
    }    
}
//Create the 3 planets:
const mars = new Planet('Mars', 288.33, 'Mars Expedition', 43, 308, 'https://d2pn8kiwq2w21t.cloudfront.net/images/Mars-800h-v2_02.width-1024.png')
const venus = new Planet('Venus', 230.64, 'Venus Expedition', 18, 167, 'https://upload.wikimedia.org/wikipedia/commons/9/93/Venus_globe_-_transparent_background.png')
const moon = new Planet('Moon', 384.40, 'Moon Expedition', 154, 797, './images/pngfind.com-full-moon-png-319821.png')

//Query-select the info for the different expeditions:
const planetName = document.querySelector('.starTop__starName')
const distanceFromEarth = document.querySelector('.starTop__distance')
const expeditionName = document.querySelector('.starMain__headline')
const pastExpeditions = document.querySelector('.starFooter__left__number')
const pastTravelers = document.querySelector('.starFooter__right__number')
const imageSrc = document.querySelector('.planetPic__image').getAttribute(' src')

//Function for planet-change:
const changePlanet = (planetChoice: string) => {

try {

    let planet: Planet;
    switch (planetChoice) {
        case "moon":
            planet = moon
            break;
        case "venus":
            planet = venus
            break;
        case "mars":
            planet = mars
            break;
        default:
            planet = mars            
    }

    planetName.innerHTML = planet.name + ' to Earth';
    distanceFromEarth.innerHTML = planet.distanceFromEarth.toString() + ' million km';
    expeditionName.innerHTML = planet.expeditionName
    pastExpeditions.innerHTML = planet.pastExpeditions.toString()
    pastTravelers.innerHTML = planet.pastTravelers.toString()
    console.log(planet.imageSrc);
    
    document.querySelector('.planetPic__image').setAttribute('src', planet.imageSrc)

} catch (error) {
    console.error(error)
}   
}

//Submit the date and Expedition:
let date:Date

const handleSubmit = (event:any)=> {

    try {      
        event.preventDefault();
        date = event.target.elements.date.value

        localStorage.setItem('date', date.toString())
        localStorage.setItem('expedition', expeditionName.innerHTML.toString())

        //Transfer to the Form page:
        window.location.href = './form.html'
    } catch (error) {
        console.error(error)
    }
}

//The user class for the expedition form: 
class user {
    name:string
    date:Date
    planet:Planet
    isCertified:Boolean

    constructor(name:string, date:Date, planet:Planet, isCertified:Boolean) {
        this.name = name
        this.date = date
        this.planet = planet
        this.isCertified = isCertified
    }
}
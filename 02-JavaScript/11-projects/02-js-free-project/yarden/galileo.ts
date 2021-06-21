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

const mars:Planet = new Planet('Mars', 288, 'Mars Expedition', 43, 308, 'https://d2pn8kiwq2w21t.cloudfront.net/images/Mars-800h-v2_02.width-1024.png')
const venus:Planet = new Planet('Venus', 230.64, 'Venus Expedition', 18, 167, 'https://upload.wikimedia.org/wikipedia/commons/9/93/Venus_globe_-_transparent_background.png')

const moon:Planet = new Planet('Moon', 384.40, 'Moon Expedition', 154, 797, '02-JavaScript\11-projects\02-js-free-project\yarden\images\pngfind.com-full-moon-png-319821.png')

//Query-select the info for the different expeditions:

let planetName:HTMLElement = document.querySelector('.starTop__starName')
let distanceFromEarth:HTMLElement = document.querySelector('.starTop__distance')
let expeditionName:HTMLElement = document.querySelector('.starTop__distance')
let pastExpeditions:HTMLElement = document.querySelector('.starFooter__left__number')
let pastTravelers:HTMLElement = document.querySelector('.starFooter__right__number')
let imageSrc:HTMLElement = document.querySelector('.planetPic__image')

//Query-select the 3 Expedition options to render on the page:
const selectMars:HTMLElement = document.querySelector('#select-Mars')
const selectVenus:HTMLElement = document.querySelector('#select-Venus')
const selectMoon:HTMLElement = document.querySelector('#select-Moon')



const handleSubmit = (ev:any)=> {
    ev.preventDefault();
}

// const name:string = ev.target.elements.name.value;



class user {
    name:string
    date:Date
    planet:Planet
    certified:Boolean

    constructor(name:string, date:Date, planet:Planet, certified:Boolean) {
        this.name = name
        this.date = date
        this.planet = planet
        this.certified = certified
    }
}
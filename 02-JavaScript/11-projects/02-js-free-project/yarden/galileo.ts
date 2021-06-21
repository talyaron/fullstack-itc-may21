// Create Planet class:
class Planet {
    name:string
    distanceFromEarth: number
    pastExpeditions: number
    pastTravelers: number
    imageSrc:string

    constructor(name:string, distanceFromEarth: number, pastExpeditions: number, pastTravelers: number, imageSrc:string) {
        this.name = name
        this.distanceFromEarth = distanceFromEarth
        this.pastExpeditions = pastExpeditions
        this.pastTravelers = pastTravelers
        this.imageSrc = imageSrc
    }    
}

//Create the 3 planets:

const mars:Planet = new Planet('Mars', 288, 43, 308, 'https://d2pn8kiwq2w21t.cloudfront.net/images/Mars-800h-v2_02.width-1024.png')
const venus:Planet = new Planet('Venus', 230.64, 18, 167, 'https://upload.wikimedia.org/wikipedia/commons/9/93/Venus_globe_-_transparent_background.png')

const moon:Planet = new Planet('Moon', 384.40, 154, 797, '02-JavaScript\11-projects\02-js-free-project\yarden\images\pngfind.com-full-moon-png-319821.png')
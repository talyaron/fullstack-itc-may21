// Create a Planet class:
var Planet = /** @class */ (function () {
    function Planet(name, distanceFromEarth, expeditionName, pastExpeditions, pastTravelers, imageSrc) {
        this.name = name;
        this.distanceFromEarth = distanceFromEarth;
        this.expeditionName = expeditionName;
        this.pastExpeditions = pastExpeditions;
        this.pastTravelers = pastTravelers;
        this.imageSrc = imageSrc;
    }
    return Planet;
}());
//Create the 3 planets:
var mars = new Planet('Mars', 288.33, 'Mars Expedition', 43, 308, 'https://d2pn8kiwq2w21t.cloudfront.net/images/Mars-800h-v2_02.width-1024.png');
var venus = new Planet('Venus', 230.64, 'Venus Expedition', 18, 167, 'https://upload.wikimedia.org/wikipedia/commons/9/93/Venus_globe_-_transparent_background.png');
var moon = new Planet('Moon', 384.40, 'Moon Expedition', 154, 797, './images/pngfind.com-full-moon-png-319821.png');
//Query-select the info for the different expeditions:
var planetName = document.querySelector('.starTop__starName');
var distanceFromEarth = document.querySelector('.starTop__distance');
var expeditionName = document.querySelector('.starMain__headline');
var pastExpeditions = document.querySelector('.starFooter__left__number');
var pastTravelers = document.querySelector('.starFooter__right__number');
var imageSrc = document.querySelector('.planetPic__image').getAttribute(' src');
//Function for planet-change:
var changePlanet = function (planetChoice) {
    try {
        var planet = void 0;
        switch (planetChoice) {
            case "moon":
                planet = moon;
                break;
            case "venus":
                planet = venus;
                break;
            case "mars":
                planet = mars;
                break;
            default:
                planet = mars;
        }
        planetName.innerHTML = planet.name + ' to Earth';
        distanceFromEarth.innerHTML = planet.distanceFromEarth.toString() + ' million km';
        expeditionName.innerHTML = planet.expeditionName;
        pastExpeditions.innerHTML = planet.pastExpeditions.toString();
        pastTravelers.innerHTML = planet.pastTravelers.toString();
        document.querySelector('.planetPic__image').setAttribute('src', planet.imageSrc);
    }
    catch (error) {
        console.error(error);
    }
};
//Submit the date and Expedition:
var date;
var handleSubmit = function (event) {
    try {
        event.preventDefault();
        date = event.target.elements.date.value;
        localStorage.setItem('date', date.toString());
        localStorage.setItem('expedition', expeditionName.innerHTML.toString());
        //Transfer to the Form page:
        window.location.href = './form.html';
        event.target.reset();
    }
    catch (error) {
        console.error(error);
    }
};

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
var mars = new Planet('Mars', 288, 'Mars Expedition', 43, 308, 'https://d2pn8kiwq2w21t.cloudfront.net/images/Mars-800h-v2_02.width-1024.png');
var venus = new Planet('Venus', 230.64, 'Venus Expedition', 18, 167, 'https://upload.wikimedia.org/wikipedia/commons/9/93/Venus_globe_-_transparent_background.png');
var moon = new Planet('Moon', 384.40, 'Moon Expedition', 154, 797, '02-JavaScript\11-projects\02-js-free-project\yarden\images\pngfind.com-full-moon-png-319821.png');
//Query-select the info for the different expeditions:
var planetName = document.querySelector('.starTop__starName');
var distanceFromEarth = document.querySelector('.starTop__distance');
var expeditionName = document.querySelector('.starTop__distance');
var pastExpeditions = document.querySelector('.starFooter__left__number');
var pastTravelers = document.querySelector('.starFooter__right__number');
var imageSrc = document.querySelector('.planetPic__image');
//Query-select the 3 Expedition options to render on the page:
var selectMars = document.querySelector('#select-Mars');
var selectVenus = document.querySelector('#select-Venus');
var selectMoon = document.querySelector('#select-Moon');
var handleSubmit = function (ev) {
    ev.preventDefault();
};
// const name:string = ev.target.elements.name.value;
var user = /** @class */ (function () {
    function user(name, date, planet, certified) {
        this.name = name;
        this.date = date;
        this.planet = planet;
        this.certified = certified;
    }
    return user;
}());

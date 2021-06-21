var allPets = JSON.parse(localStorage.getItem('pet'));
var root = document.querySelector('#root');
function renderPets() {
    var html = this.allPets.allPets.map(function (element) {
        return ("<div id='" + element.name + "' class=\"pet__item__wrapper\">" +
            ("<div><img class=\"pet__item__image\" src=\"" + element.image + "\" alt=\"\"></div>") +
            "<div class=\"pet__item__information__wrapper\">" +
            ("<div>Name: <b>" + element.name.toUpperCase() + "</b></div>") +
            ("<div>Age: <b>" + element.age + "</b></div>") +
            " </div>" +
            ("<div class=\"pet__item__information__description\">" + element.description + "</div>") +
            "<div class=\"pet__item__information__wrapper\">" +
            ("<div><b>" + element.city.toUpperCase() + "</b></div>") +
            ("<div>Contact:<b>" + element.contactNumber + "</b></div>") +
            " </div>" +
            ("<div class=\"pet__item__information__description\">" + element.gender.toUpperCase() + "</div>") +
            " </div>");
    }).join('');
    root.innerHTML = html;
}
//Delete duplicate elements in an array
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function filterPerAge() {
    var agePets = [];
    var selectAge = document.querySelector('[name="age"]');
    ;
    allPets.allPets.forEach(function (element) {
        agePets.push(element.age);
    });
    var uniqueAgePets = agePets.filter(onlyUnique);
    var selectAgeToAdd = uniqueAgePets.map(function (element) {
        return ("<option value=\"" + element + "\">" + element + "</option>");
    }).join('');
    selectAge.innerHTML = selectAgeToAdd;
}
function filterPerCity() {
    var cityPets = [];
    var selectCity = document.querySelector('[name="city"]');
    ;
    allPets.allPets.forEach(function (element) {
        var cityUppercased = element.city.toUpperCase();
        cityPets.push(cityUppercased);
    });
    var uniqueCityPets = cityPets.filter(onlyUnique);
    var selectCityToAdd = uniqueCityPets.map(function (element) {
        return ("<option value=\"" + element + "\">" + element + "</option>");
    }).join('');
    selectCity.innerHTML = selectCityToAdd;
}
function filterPerGender() {
    var genderPets = [];
    var selectGender = document.querySelector('[name="gender"]');
    ;
    allPets.allPets.forEach(function (element) {
        var genderUppercased = element.gender.toUpperCase();
        genderPets.push(genderUppercased);
    });
    var uniqueGenderPets = genderPets.filter(onlyUnique);
    var selectGenderToAdd = uniqueGenderPets.map(function (element) {
        return ("<option value=\"" + element + "\">" + element + "</option>");
    }).join('');
    selectGender.innerHTML = selectGenderToAdd;
}
function handleFilter() {
    var age = document.querySelector('.filter__age');
    var city = document.querySelector('.filter__city');
    var gender = document.querySelector('.filter__gender');
    var petsFiltered = allPets.allPets.filter(function (element) { return (element.age === age.value) && (element.city.toUpperCase() === city.value) && (element.gender.toUpperCase() === gender.value); });
    localStorage.setItem('petFiltered', JSON.stringify(petsFiltered));
    window.location.href = 'filteredPets.html';
}
function goBack() {
    window.location.href = 'index.html';
}
renderPets();
filterPerAge();
filterPerCity();
filterPerGender();

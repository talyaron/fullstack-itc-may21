var allPets = JSON.parse(localStorage.getItem('pet'));
var root = document.querySelector('#root');
function renderPets() {
    try {
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
        if (!html)
            throw new Error('An error happens when you want to render the pets!');
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//Delete duplicate elements in an array
function onlyUnique(value, index, self) {
    try {
        return self.indexOf(value) === index;
    }
    catch (error) {
        console.error(error);
    }
    ;
}
;
function filterPerAge() {
    try {
        var agePets_1 = [];
        var selectAge = document.querySelector('[name="age"]');
        if (!selectAge)
            throw new Error('You don´t select the age!');
        if (!allPets)
            throw new Error('You can´t access to the pets');
        allPets.allPets.forEach(function (element) {
            agePets_1.push(element.age);
        });
        var uniqueAgePets = agePets_1.filter(onlyUnique);
        var selectAgeToAdd = uniqueAgePets.map(function (element) {
            return ("<option value=\"" + element + "\">" + element + "</option>");
        }).join('');
        selectAge.innerHTML = selectAgeToAdd;
    }
    catch (error) {
        console.error(error);
    }
}
function filterPerCity() {
    try {
        var cityPets_1 = [];
        var selectCity = document.querySelector('[name="city"]');
        if (!selectCity)
            throw new Error('You don´t select the city!');
        if (!allPets)
            throw new Error('You can´t access to the pets');
        allPets.allPets.forEach(function (element) {
            var cityUppercased = element.city.toUpperCase();
            cityPets_1.push(cityUppercased);
        });
        var uniqueCityPets = cityPets_1.filter(onlyUnique);
        var selectCityToAdd = uniqueCityPets.map(function (element) {
            return ("<option value=\"" + element + "\">" + element + "</option>");
        }).join('');
        selectCity.innerHTML = selectCityToAdd;
    }
    catch (error) {
        console.error(error);
    }
}
function filterPerGender() {
    try {
        var genderPets_1 = [];
        var selectGender = document.querySelector('[name="gender"]');
        ;
        if (!selectGender)
            throw new Error('You don´t select the gender!');
        if (!allPets)
            throw new Error('You can´t access to the pets');
        allPets.allPets.forEach(function (element) {
            var genderUppercased = element.gender.toUpperCase();
            genderPets_1.push(genderUppercased);
        });
        var uniqueGenderPets = genderPets_1.filter(onlyUnique);
        var selectGenderToAdd = uniqueGenderPets.map(function (element) {
            return ("<option value=\"" + element + "\">" + element + "</option>");
        }).join('');
        selectGender.innerHTML = selectGenderToAdd;
    }
    catch (error) {
        console.error(error);
    }
}
function handleFilter() {
    try {
        //With this I obtain the values of the filters that the user select
        var age_1 = document.querySelector('.filter__age');
        var city_1 = document.querySelector('.filter__city');
        var gender_1 = document.querySelector('.filter__gender');
        var petsFiltered = allPets.allPets.filter(function (element) { return (element.age === age_1.value) && (element.city.toUpperCase() === city_1.value) && (element.gender.toUpperCase() === gender_1.value); });
        localStorage.setItem('petFiltered', JSON.stringify(petsFiltered));
        window.location.href = 'filteredPets.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
//Call this function to go back to the main page
function goBack() {
    try {
        window.location.href = 'index.html';
        if (!window.location.href)
            throw new Error('The page where you want to redirect it doesn´t exist!');
    }
    catch (error) {
        console.error(error);
    }
}
//Call this functions to render all the pets
renderPets();
//Call this functions to show what to select in the filters
filterPerAge();
filterPerCity();
filterPerGender();

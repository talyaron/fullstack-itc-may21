const allPets = JSON.parse(localStorage.getItem('pet'));
const root: HTMLElement = document.querySelector('#root')

function renderPets(): void {
    let html: string = this.allPets.allPets.map(element => {
        return (
            `<div id='${element.name}' class="pet__item__wrapper">` +
            `<div><img class="pet__item__image" src="${element.image}" alt=""></div>` +
            `<div class="pet__item__information__wrapper">` +
            `<div>Name: <b>${element.name.toUpperCase()}</b></div>` +
            `<div>Age: <b>${element.age}</b></div>` +
            ` </div>` +
            `<div class="pet__item__information__description">${element.description}</div>` +
            `<div class="pet__item__information__wrapper">` +
            `<div><b>${element.city.toUpperCase()}</b></div>` +
            `<div>Contact:<b>${element.contactNumber}</b></div>` +
            ` </div>` +
            `<div class="pet__item__information__description">${element.gender.toUpperCase()}</div>` +
            ` </div>`
        )
    }).join('');
    root.innerHTML = html;
}

//Delete duplicate elements in an array
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function filterPerAge(): void {
    const agePets: Array<any> = [];
    const selectAge = document.querySelector('[name="age"]');;
    allPets.allPets.forEach(element => {
        agePets.push(element.age);
    });
    const uniqueAgePets = agePets.filter(onlyUnique);
    let selectAgeToAdd = uniqueAgePets.map(element => {
        return (
            `<option value="${element}">${element}</option>`
        )
    }).join('');
    selectAge.innerHTML = selectAgeToAdd;
}

function filterPerCity(): void {
    const cityPets: Array<any> = [];
    const selectCity = document.querySelector('[name="city"]');;
    allPets.allPets.forEach(element => {
        let cityUppercased = element.city.toUpperCase();
        cityPets.push(cityUppercased);
    });
    const uniqueCityPets = cityPets.filter(onlyUnique);
    let selectCityToAdd = uniqueCityPets.map(element => {
        return (
            `<option value="${element}">${element}</option>`
        )
    }).join('');
    selectCity.innerHTML = selectCityToAdd;
}

function filterPerGender(): void {
    const genderPets: Array<any> = [];
    const selectGender = document.querySelector('[name="gender"]');;
    allPets.allPets.forEach(element => {
        let genderUppercased = element.gender.toUpperCase();
        genderPets.push(genderUppercased);
    });
    const uniqueGenderPets = genderPets.filter(onlyUnique);
    let selectGenderToAdd = uniqueGenderPets.map(element => {
        return (
            `<option value="${element}">${element}</option>`
        )
    }).join('');
    selectGender.innerHTML = selectGenderToAdd;
}

function handleFilter() {
    const age: any = document.querySelector('.filter__age');
    const city: any = document.querySelector('.filter__city');
    const gender: any = document.querySelector('.filter__gender');

    const petsFiltered = allPets.allPets.filter(element => (element.age === age.value) && (element.city.toUpperCase() === city.value) && (element.gender.toUpperCase() === gender.value));
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

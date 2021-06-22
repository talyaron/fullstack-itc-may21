const allPets = JSON.parse(localStorage.getItem('pet'));
const root: HTMLElement = document.querySelector('#root')

function renderPets(): void {
    try { 
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
        if (!html) throw new Error('An error happens when you want to render the pets!')
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

//Delete duplicate elements in an array
function onlyUnique(value: number, index: number, self: any): boolean {
    try {
        return self.indexOf(value) === index;
    } catch (error) {
        console.error(error);
    }
}

function filterPerAge(): void {
    try {
        const agePets: Array<any> = [];
        const selectAge = document.querySelector('[name="age"]');
        if (!selectAge) throw new Error('You don´t select the age!')
        if (!allPets) throw new Error ('You can´t access to the pets');
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
    } catch (error) {
        console.error(error);
    }
}

function filterPerCity(): void {
    try {
        const cityPets: Array<any> = [];
        const selectCity: HTMLElement = document.querySelector('[name="city"]');
        if (!selectCity) throw new Error('You don´t select the city!')
        if (!allPets) throw new Error ('You can´t access to the pets');
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
    } catch (error) {
        console.error(error);
    }
}

function filterPerGender(): void {
    try {
        const genderPets: Array<any> = [];
        const selectGender: HTMLElement = document.querySelector('[name="gender"]');;
        if (!selectGender) throw new Error('You don´t select the gender!')
        if (!allPets) throw new Error ('You can´t access to the pets');
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
    } catch (error) {
        console.error(error);
    }
}

function handleFilter(): void {
    try {
        //With this I obtain the values of the filters that the user select
        const age: any = document.querySelector('.filter__age');
        const city: any = document.querySelector('.filter__city');
        const gender: any = document.querySelector('.filter__gender');

        const petsFiltered = allPets.allPets.filter(element => (element.age === age.value) && (element.city.toUpperCase() === city.value) && (element.gender.toUpperCase() === gender.value));
        localStorage.setItem('petFiltered', JSON.stringify(petsFiltered));
        window.location.href = 'filteredPets.html';
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!');
    } catch (error) {
        console.error(error);
    }
}

//Call this function to go back to the main page
function goBack(): void {
    try {
        window.location.href = 'index.html';
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!');
    } catch (error) {
        console.error(error);
    }
}

//Call this functions to render all the pets
renderPets();

//Call this functions to show what to select in the filters
filterPerAge();
filterPerCity();
filterPerGender();
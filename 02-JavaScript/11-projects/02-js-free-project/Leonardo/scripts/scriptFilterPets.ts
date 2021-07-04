const filterPets = JSON.parse(localStorage.getItem('petFiltered'));
const rootFilter: HTMLElement = document.querySelector('#root')

function renderPetsFilter(): void {
    try {
        let html: string = this.filterPets.map(element => {
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
        if (!html) throw new Error('An error happens when you want to render the pets filtered!')
        rootFilter.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

//Function to show the completly list of the pets with out a filter
function goBack() {
    try {
        window.location.href = 'listOfPets.html';
        if (!window.location.href) throw new Error('The page where you want to redirect it doesn´t exist!')
    } catch (error) {
        console.error(error);
    }
};

//Shows the pets filteres
renderPetsFilter();

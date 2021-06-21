var filterPets = JSON.parse(localStorage.getItem('petFiltered'));
var rootFilter = document.querySelector('#root');
function renderPetsFilter() {
    var html = this.filterPets.map(function (element) {
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
    rootFilter.innerHTML = html;
}
renderPetsFilter();
function goBack() {
    window.location.href = 'listOfPets.html';
}

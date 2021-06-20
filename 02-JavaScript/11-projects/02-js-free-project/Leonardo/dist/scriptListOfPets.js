var allPets = JSON.parse(localStorage.getItem('pet'));
var root = document.querySelector('#root');
function renderPets() {
    var html = this.allPets.allPets.map(function (element) {
        return ("<div id='" + element.name + "' class=\"pet__item__wrapper\">" +
            ("<div><img class=\"pet__item__image\" src=\"" + element.image + "\" alt=\"\"></div>") +
            "<div class=\"pet__item__information__wrapper\">" +
            ("<div>Name: <b>" + element.name + "</b></div>") +
            ("<div>Age: <b>" + element.age + "</b></div>") +
            " </div>" +
            ("<div class=\"pet__item__information__description\">" + element.description + "</div>") +
            "<div class=\"pet__item__information__wrapper\">" +
            ("<div><b>" + element.city + "</b></div>") +
            ("<div>Contact:<b>" + element.contactNumber + "</b></div>") +
            " </div>" +
            " </div>");
    }).join('');
    root.innerHTML = html;
}
renderPets();

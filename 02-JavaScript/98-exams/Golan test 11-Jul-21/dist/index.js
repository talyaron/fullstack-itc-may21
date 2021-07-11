//add class for each individual person
var Person = /** @class */ (function () {
    function Person(name, color) {
        this.textId = "id" + Math.random().toString(16).slice(2);
        this.name = name;
        this.color = color;
    }
    return Person;
}());
//class to push every person to an array in local storage
var AllPpl = /** @class */ (function () {
    function AllPpl() {
        this.persons = JSON.parse(localStorage.getItem('AllPpl')) ? JSON.parse(localStorage.getItem('AllPpl')) : [];
    }
    //method to push new person to the array
    AllPpl.prototype.addNewPerson = function (person) {
        this.persons.push(person);
        localStorage.setItem("AllPpl", JSON.stringify(this.persons));
    };
    //unfortunately couldn't make the delete function to work on time, but tried my best in two ways here below:
    AllPpl.prototype.deletePerson = function (textID) {
        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons.textID[i] === textID) {
                this.persons.splice(i, 1);
                return;
                // const index = this.persons.indexOf(textID);
                // if (index > -1 {
                //     this.persons.splice(index, 1);
                //     console.log(persons);
                // }
            }
            //the logic I tried to follow for the 2nd way:
            //    const array = [2, 5, 9];
            //     console.log(array);
            //     const index = array.indexOf(5);
            //     if (index > -1) {
            //       array.splice(index, 1);
            //     }
            //     // array = [2, 9]
            //     console.log(array); 
        }
    };
    return AllPpl;
}());
var allOfPpl = new AllPpl();
// handle submit - user can add people(name and image).
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var person = new Person(name, color);
        allOfPpl.addNewPerson(person);
    }
    catch (er) {
        console.error(er);
    }
    // Show on dom - ppl added - The list of people will be shown in this page. (check - add json?)
    function showOnDOM() {
        var allOfPpl = JSON.parse(localStorage.getItem('AllPpl'));
        var lastUserIndex = allOfPpl.length - 1;
        var lastUser = allOfPpl[lastUserIndex];
        var data = document.querySelector(".wrpr__submitted-grps--ppl");
        data.insertAdjacentHTML('beforeend', "<div>" + lastUser.name + "'s favorite color is \"" + lastUser.color + "\" and was added to the list. <div class=\"wrpr__submitted-grps--color\" style=\"background-color:" + lastUser.color + "\">" + lastUser.name + "</div><button class=\"wrpr__input--button\" onclick=\"deletePerson()\">Delete</button>");
    }
    showOnDOM();
}

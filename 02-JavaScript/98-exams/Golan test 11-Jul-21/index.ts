//add class for each individual person
class Person {
    name: string;
    color: string;
    textId: string = "id" + Math.random().toString(16).slice(2);
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;

    }
}
//class to push every person to an array in local storage
class AllPpl {
    persons: Array<Person> = JSON.parse(localStorage.getItem('AllPpl')) ? JSON.parse(localStorage.getItem('AllPpl')) : [];
    //method to push new person to the array
    addNewPerson(person) {
        this.persons.push(person);
        localStorage.setItem("AllPpl", JSON.stringify(this.persons));

    }


    //unfortunately couldn't make the delete function to work on time, but tried my best in two ways here below:
    deletePerson(textID: string) {
        for (let i = 0; i < this.persons.length; i++) {
            if (this.persons.textID[i] === textID) {
                this.persons.splice(i, 1)
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
    }


}
const allOfPpl = new AllPpl();



// handle submit - user can add people(name and image).
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        const name: string = ev.target.elements.name.value;
        const color: string = ev.target.elements.color.value;
        const person: Person = new Person(name, color);
        allOfPpl.addNewPerson(person);
    } catch (er) {
        console.error(er);
    }



    // Show on dom - ppl added - The list of people will be shown in this page. (check - add json?)
    function showOnDOM() {
        const allOfPpl = JSON.parse(localStorage.getItem('AllPpl'));
        const lastUserIndex = allOfPpl.length - 1;
        const lastUser = allOfPpl[lastUserIndex];


        const data: HTMLElement = document.querySelector(".wrpr__submitted-grps--ppl");
        data.insertAdjacentHTML('beforeend', `<div>${lastUser.name}'s favorite color is "${lastUser.color}" and was added to the list. <div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><button class="wrpr__input--button" onclick="deletePerson()">Delete</button>`);

    }
    showOnDOM();




}


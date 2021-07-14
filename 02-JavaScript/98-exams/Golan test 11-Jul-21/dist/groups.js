//unfortunately I didn't get to the second page
// On the second page, the people will be shown in groups(according to the number set by the user on the first page).
// every time the page will be reloaded, new random groups will be generated.The groups should be ordered in a column if on mobile(up to 500 px), in 2 columns in tablet(750 px) and 3 columns on screens bigger than 750px;
function showOnDOM() {
    var allOfPpl = JSON.parse(localStorage.getItem('AllPpl'));
    var lastUserIndex = allOfPpl.length - 1;
    var lastUser = allOfPpl[lastUserIndex];
    var data = document.querySelector(".submitted-ppl");
    data.insertAdjacentHTML('beforeend', "<div>\"" + lastUser.name + "\" was added to the list. <img class=\"submitted_img\" src=\"" + lastUser.profileImg + "\" alt=\"\"><button>Remove user</button><td><input type=\"button\" value=\"Delete Row\" onclick=\"deleteUser()\"></td></div>");
    //the right img url is grabbed but something goes wrong and it can't show it
    function deletePerson() {
        var toDelete = lastUser.name;
        var remove = toDelete.parentNode; // the row to I want to remove
        remove.parentNode.removeChild(remove); //try filter & map instead!
        //the user remove functionality is currently not working  
    }
    // function organizePerson(ev) { // or handleSubmit(ev); //not sure where to place this - I want to diffrentiate it from the other handleSubmit function 
    //     try {
    //         ev.preventDefault();
    //         const profileImg: string = ev.target.elements.profile.value; //might need to look this up
    //         console.log(name, profileImg);
    //         const person: Person = new Person(name, profileImg);
    //         allOfPpl.addNewPerson(person);
    //         // window.location.reload();
    //     } catch (er) {
    //         console.error(er);
    //     }
    // }
    deletePerson();
    // organizePerson();
    // });
}
showOnDOM();

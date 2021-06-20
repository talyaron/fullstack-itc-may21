/* choose a project that you like. you can take ideas from existing sites.
It should consist of at least 2 pages, that you can navigate between them (using href ot js redirect)
the user must enter data, and you share the data over the 2 screens.
for example, the user enter an image to a bank of images, and we see each image in a seprate page.

preferbly use OOP, or at least functional programing.
use scss, and make it beutiful.
use animations

use google if you dont know how to do things.
 */

class Pet {
    id: string;
    name: string;
    age: number;
    gender: string;
    city: string;
    image: any;
    description: string;
    contactNumber: number;

    constructor(name: string, age: number, gender: string, city: string, image: any, description: string, contactNumber: number) {
        this.id = "id" + Math.random().toString(16).slice(2);;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.image = image;
        this.description = description;
        this.contactNumber = contactNumber;
    }
}

class Pets {
    allPets: Array<Pet> = [];

    addPet(name: string, age: number, gender: string, city: string, image: any, description: string, contactNumber: number): void {
        let newPet: Pet = new Pet(name, age, gender, city, image, description, contactNumber)
        this.allPets.push(newPet);
    }
}

//I initialice a new array that will contains all the pets:
const pets = new Pets();

//Declare the image as a global scope because I
const image = "";

const doingSubmit = (ev: any): void => {
    ev.preventDefault();

    const name: string = ev.target.elements.namePet.value;
    const gender: string = ev.target.elements.gender.value;
    const age: number = ev.target.elements.age.value;
    const city: string = ev.target.elements.city.value;
    const description: string = ev.target.elements.description.value;
    const contactNumber: number = ev.target.elements.contactNumber.value;
    /* const image = "https://th.bing.com/th/id/R9628dae276a7714797e55fd555be26b2?rik=B2Cbzvw7Cjp6dQ&pid=ImgRaw"; */
    const image = document.querySelector('#ima').getAttribute("src");

    pets.addPet(name, age, gender, city, image, description, contactNumber);

    localStorage.setItem('pet', JSON.stringify(pets))
};

function redirect() {
    window.location.href = 'listOfPets.html'
}

//Function to show the previous image in the form:
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = (e)=> {
            document.querySelector('#ima').setAttribute("src", `${e.target.result}`);
            return e.target.result
        }
        reader.readAsDataURL(input.files[0]);
    }
}
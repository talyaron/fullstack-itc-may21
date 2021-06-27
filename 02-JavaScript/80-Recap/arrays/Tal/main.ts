//EXAMPLE

// arrays are a tool for working with lists of data (espescialy with objects)
interface People {
    name: string
}



//CRUD -> Create, Read, Update, delete

//CREATE
const people: Array<People> = [
    { name: "adam" },
    { name: 'Eve' },
    { name: 'Kein' },
    { name: "Abel" }
];

//add
people.push({ name: 'Seth' })

console.log(people)

people.unshift({ name: 'none' });
console.log(people)

//Read
//put on the DOM
renderPeople(people);

function renderPeople(people: Array<People>) {
    let html = people.map(person => `<p>${person.name}</p>`).join('');

    let html1 = '';
    people.forEach(person => {
        html1 += `<p>${person.name}</p>`
    })
    
    document.querySelector("#rootPeople").innerHTML = html;
}

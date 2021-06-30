//destructors

const person={
    name2:"Dan",
    street:'Herzel'
}

const cities=['Tel-Aviv','Jerusalem','Beer-Sheva']

// const personName = person.name;
// const personStreet = person.street;

const {name2, street} = person;
console.log(name2, street);

const [firstCity,secondCity] = cities;
console.log(firstCity,secondCity);

const residents = [{name:'aa', street:'Hanevel'},{name:'bb', street:'blo'},{name:'cc', street:'Bla'}]
const [rs1, rs2, rs3] = residents;

function addToResidents( {name, street}:{street:string, name:string}):void{
   
    residents.push({name:name, street:street})
}

//create a function which get height, width, deepth (all of type number). the function returns the qubick volume
//which equals to height * width * deepth
//do it with destucotr

addToResidents({name:"Yossi", street:"Borchov"})

console.log(residents)


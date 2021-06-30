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

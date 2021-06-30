const city={
    name2:'Holon',
    population:"165000",
    age:"70",
    streets:["eilat","sokolov","reafel eitan"]
}

const{name2,age}=city;
console.log(name2,age);
const{streets}=city
console.log(streets);

function volume({width,height,deepth})
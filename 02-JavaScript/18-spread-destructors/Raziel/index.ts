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

const cube={width:100,height:200,depth:900}

function volume({width,height,depth}:{width:number,height:number,depth:number}){
 
    return  console.log(width*height*depth);
}

volume({width:200,height:200,depth:100});
volume(cube);
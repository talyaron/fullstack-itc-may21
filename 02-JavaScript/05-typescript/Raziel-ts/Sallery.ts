



function Avrg(x:number):string{
var avrgMonth=x/12;
var avrgString= avrgMonth.toString();
return `Your avrage for month is:${avrgString} `
}

console.log(Avrg(156000));

interface Person{
    name:string,
    bDay:Date
}

var person1: Person={
name:'Raziel',
bDay: new Date (1993, 6, 5)
}
var person2: Person={
    name:'Dan',
    bDay: new Date (1947, 4, 20)
    }



console.log(person1.name);
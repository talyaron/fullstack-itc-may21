



function Avrg(x:number):string{
var avrgMonth=x/12;
var avrgString= avrgMonth.toString();
return `Your avrage for month is:${avrgString} `
}

console.log(Avrg(156000));
////////////////////////////----------------------------------------//////////////////
interface Person{
    name:string,
    bDay:number
}

var person1: Person={
name:'Raziel',
bDay: 1993
}
var person2: Person={
    name:'Dan',
    bDay: 1947
    }
    var person3: Person={
        name:'Moshe',
        bDay: 875
        }

    var getAge=(Person:any):number=>{
        var currentDate:number = new Date().getFullYear();
        var currentYear:number = Person.bDay;
       let differnce:number=currentDate-currentYear;
        return differnce ;
    }

console.log( person1.name,getAge(person1));
console.log( person2.name,getAge(person2));
console.log( person3.name,getAge(person3));

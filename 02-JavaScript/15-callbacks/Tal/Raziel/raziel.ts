interface person{
    name:string;
    id:number;
}

let persons:Array<person>=[
{ name:'Raziel',
id:10}
,{ name:'Danni',
id:11},
{ name:'HANA',
id:12},
{ name:'Raziel',
id:13}
  
]

console.log(persons.filter(person=>person.name=='HANA'));

let X:any=persons.filter(person=>person.name!=="Danni").splice(0); //remove person+array
console.log(X);

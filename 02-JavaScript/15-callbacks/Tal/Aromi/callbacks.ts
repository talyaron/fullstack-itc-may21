 let q = 3;

 interface customers{
 name: string 
 phone: number 
 }

const customers = [
     {name: `abe`, phone: 123},
     {name: `abe`, phone: 456},
     {name: `same`, phone: 789},
     {name: `mike`, phone: 124},
     {name: `jim`, phone: 321},
 ]



 var filtered = customers.filter(function(value){ 
    return value.name  !== `abe`;
});

var mikeOrJim = customers.filter(function(value){ 
    return value.name  !== `mike` && value.name !== `jim`;
});

var samsPhone = customers.find(({name}) => name == 'sam' );



console.log(filtered);
console.log(mikeOrJim);
console.log(samsPhone);

//  customers.forEach()
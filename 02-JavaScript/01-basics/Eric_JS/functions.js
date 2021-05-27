
//1

function Hello(name) {
    return 'hello ' + name;
}

const Name = 'Eric';

console.log(Hello(Name));


let hi = function (name) {
    return 'hello ' + name;
}

const othername = 'Ericc';

console.log(hi(othername));


let xx = (firstName)=>{
    return 'hello ' + firstName;
}

const othernames = 'Ericcc';

console.log(xx(othernames));


//3
var x = 7
var result = x;
for(var i=x-1; i>=1; i--){
    result = result*i
}

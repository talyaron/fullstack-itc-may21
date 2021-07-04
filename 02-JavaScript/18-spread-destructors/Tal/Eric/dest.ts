const person = {
    name:"Eric",
    street:'Sarmiento'
}

const personName=person.name
const personStreet=person.street

console.log(personStreet)

const cities=['concordia', 'rosario', 'buenos-aires']
const[firstCity,,secondCity]=cities
console.log(firstCity,secondCity)

const countries = [{names:'aa', streets:'bbb'},{names:'dlfkm',streets:'dfddf'}]
const [cs1,cs2]=countries

function addToCountries({names,streets}):void{
    countries.push({names:names, streets:streets})  
}
addToCountries({names:'eric', streets:'jajajajaj'})
console.log(countries)

//create a function with get height, width,  (deep all type number), the functiom will return qubick volume
//which equals to height*width*deepth
//do it with destructors

const cubics = ['height', 'width', 'deepth']

function getQubick({height, width, deepth}:{height:number, width:number, deepth:number}):any {
    const cubicVol = height * width * deepth    
    return cubicVol
}

console.log(getQubick({height:10,width:2, deepth:1}))
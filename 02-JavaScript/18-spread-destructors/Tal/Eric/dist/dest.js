var person = {
    name: "Eric",
    street: 'Sarmiento'
};
var personName = person.name;
var personStreet = person.street;
console.log(personStreet);
var cities = ['concordia', 'rosario', 'buenos-aires'];
var firstCity = cities[0], secondCity = cities[2];
console.log(firstCity, secondCity);
var countries = [{ names: 'aa', streets: 'bbb' }, { names: 'dlfkm', streets: 'dfddf' }];
var cs1 = countries[0], cs2 = countries[1];
function addToCountries(_a) {
    var names = _a.names, streets = _a.streets;
    countries.push({ names: names, streets: streets });
}
addToCountries({ names: 'eric', streets: 'jajajajaj' });
console.log(countries);
//create a function with get height, width,  (deep all type number), the functiom will return qubick volume
//which equals to height*width*deepth
//do it with destructors
var cubics = ['height', 'width', 'deepth'];
function getQubick(_a) {
    var height = _a.height, width = _a.width, deepth = _a.deepth;
    var cubicVol = height * width * deepth;
    return cubicVol;
}
console.log(getQubick({ height: 10, width: 2, deepth: 1 }));

var equipos = [
    {
        name: 'Velez',
        posicion: 'Primero'
    },
    {
        name: 'Boca',
        posicion: 'Segundo'
    },
    {
        name: 'River',
        posicion: 'Tercero'
    },
    {
        name: 'Racing',
        posicion: 'Cuarto'
    },
    {
        name: 'San Lorenzo',
        posicion: 'Quinto'
    },
];
console.log('Array original', equipos);
//Esta es la parte importante de la desestructuracion, la variable queda creada con ese nombre (en este caso eq1 o etc...) 
//No se usa tanto con array de objetos, si no mas bien con arrays
var eq1 = equipos[0], eq2 = equipos[1], eq5 = equipos[4];
console.log(eq1.name, eq2.name, eq5.name);
var nuevaVariable = eq1.posicion;
console.log('I create this new variable:', nuevaVariable);
//create a function which get height, width, deep (all of type number). the function returns the quick volume
//which equals to height * width * deepth
//do it with destructor
function getVolume(height, width, deep) {
    return height * width * deep;
}
;
var variables = { height: 15, width: 10, deep: 20 };
var height = variables.height, width = variables.width, deep = variables.deep;
console.log(getVolume(height, width, deep));

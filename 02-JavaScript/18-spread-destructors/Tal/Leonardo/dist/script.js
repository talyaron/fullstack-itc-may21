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

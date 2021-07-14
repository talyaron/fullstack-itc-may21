/* 1) create a closure function.
the function will get the name of the resident

welcome('Efraim')
-> Hello Efraim, You are resident number 1

the function will return "Hello <Name>, you are resident number X", and it will count the number of residents

2) create a function that will hold all the name of the residents in its closure.
if the input arguement is 'l' return an array with all the residents
welcome('l')...

3) create it for building A, and for building B;*/
/*  const miContador = (function (){
      let _contador=0
     
      function incrementar (){
          return _contador++;
      }
     
      function valor (){
          return _contador
      }
      return {
          incrementar:incrementar,
          valor:valor
      }
 
  })();

miContador.valor()



console.log(miContador.incrementar()) */
function incrementar() {
    var cont = 0;
    function _valor(name) {
        cont++;
        return "name:" + name + ",count " + cont;
    }
    return _valor;
}
var nuevo = incrementar();
console.log(nuevo('Joni'));
console.log(nuevo('Joni'));
var arrayName = ['joni', 'jo'];
for (var i = 0; i < 2; i++) {
    console.log(nuevo(arrayName[i]));
}

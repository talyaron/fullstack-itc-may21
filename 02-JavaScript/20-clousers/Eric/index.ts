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

 function incrementar (){
     let cont=0
     function _valor(name:string){
        cont++;
         return `Hello ${name}, you are the number ${cont}`

     }
     return _valor
 }

const nuevo = incrementar()
 console.log(nuevo('Joni'))
 console.log(nuevo('Eric'))
 console.log(nuevo('Leo'))

//  const arrayName = ['joni', 'jo']
//  for(let i=0; i<2; i++){
//      console.log(nuevo(arrayName[i]))
//  }

//  function resident(){
  
//      let counter = 0;
//      function welcome(name){
//          let nombreResidente = name;
//          counter++;
//          return 'Hello ' + nombreResidente + ', you are resident number ' + counter
//      }
//      return welcome;
//  }

//  const newResident = resident();
//  console.log(newResident("Tomas"));
// console.log(newResident('Matias'));



//2 and 3


function open(): any {

      let residents: Array<string> = [];
      function openResident(resident: string): Array<string> | string {
        
          if (resident === "l") return residents;
          residents.push(resident);
          return `Welcome ${resident}, you are resident number ${residents.length}`;
        
      }
      return openResident;
    
  }
  
  const residentA = open();
  const residentB = open();
  
  
  function handleSubmitResidentA(ev: any): void {
    try {
      ev.preventDefault();
      const resident: string = ev.target.elements.resident.value;
      console.log(residentA(resident));
      ev.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmitResidentB(ev: any): void {
    try {
      ev.preventDefault();
      const resident: string = ev.target.elements.resident.value;
      console.log(residentB(resident));
      ev.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

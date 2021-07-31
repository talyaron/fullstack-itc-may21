 interface drinks{
     name: string;
     scr: string;
 }
 
 
 
//  function getInfo(){
//     fetch('/getData')
//     .then(r=>r.json())
//     .then(drinks=>{
//         console.log(drinks);
       
//         renderDrinks(drinks);
// })
// }
async function get(){
const drinks=await getInfo();
console.log(drinks);
}
function getInfo(){
    return new Promise((resolve, reject) => {
  fetch('/getData')
  .then(drinks=>{
      resolve(drinks)
  })
  .catch(e=>{
      reject(e); 
  })
    })
}

get();

function renderDrinks(data){
    console.log(data)
    let html = '';
    data.forEach(drinks=>{
        html += `<p>${drinks.name}</p> <img src="${drinks.src}">`
    })

    document.getElementById('root').innerHTML = html;
}





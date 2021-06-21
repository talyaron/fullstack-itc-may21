// const getCv = JSON.stringify(localStorage.getItem("completeCv"));
// const show: HTMLElement = document.querySelector("#show");

// function pe() {
//     let html: string = this.cvs.cvs.map( element => {
//         return (
//          `<h1>${element.name}</h1>`
      
//         )
//     }).join('');
//     show.innerHTML = html;
// }

// pe();


const printCv = localStorage.getItem('completeCv');
console.log(printCv);
document.querySelector('#show').innerHTML = printCv;


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
// const printCv = JSON.parse(localStorage.getItem("completeCv"));
// const pato: HTMLElement = document.querySelector("#show");
var root = document.querySelector("#show");
var renderPost = JSON.parse(localStorage.getItem("completeCv"));
function render() {
    var p = this.renderPost.renderPost.forEach(function (element) {
        "<h1 class=\"posts_title\">" + element[0].name + "</h1></div>";
    });
    console.log(renderPost);
    root.innerHTML = p;
}
render();
// console.log(printCv);
// function renderPets(): void {
//   let pepe: string = this.printCv.printCv.map((pepito) => {
//     pepe += `<p> hola ${pepito.name}<p>`;
//   })
//   pato.innerHTML = pepe;
// }
// console.log(renderPets());
// console.log(printCv);
// renderPets()
// const allPets = JSON.parse(localStorage.getItem('completeCv'));
// const root: HTMLElement = document.querySelector('#show')
// console.log(allPets);
// function renderPets(): void {
//     let html: string = this.allPets.allPets.map(element => {
//         return (
//             `<div id='${element.name}' class="pet__item__wrapper">`  
//         )
//     }).join('');
//     root.innerHTML = html;
// }
// renderPets()

//1) create a closure function.
// the function will get the name of the resident

// welcome('Efraim')
// -> Hello Efraim, You are resident number 1

// the function will return "hello resident <Name>, you are resident number X", and it will count the number of residents

// 2) create a  closure function to the holds in its closure, all the names of the residents.
// if the input argument is 'l' return an array with all the residents
// welcome('l')...

// 3) create it for building A, and for building B;

class Tenant {
    name: string;
    building: string;
    Id: string = "id" + Math.random().toString(16).slice(2);
    constructor(name: string, building: string) {
        this.name = name;
        this.building = building;
        
    }
}
//class to push every person to an array in local storage
class AllTenants {
    tenants: Array<Tenant> = JSON.parse(localStorage.getItem('AllTenants')) ? JSON.parse(localStorage.getItem('AllTenants')) : []; 

    addNewTenant(tenant) {
        this.tenants.push(tenant);
        localStorage.setItem("AllPpl", JSON.stringify(this.tenants));
        alert(`Hello ${tenant.name}, you are resident number ${tenant.length}`);

    }
}
// function hello(): any {
//     try {
//         function helloWelcome() {

//         }
//         return helloWelcome;
//     } catch (error) {
//         console.error(error);
//     }
// }
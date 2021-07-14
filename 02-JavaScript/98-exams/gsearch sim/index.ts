// //pg1 - Google search plus an I'm feeling lucky btn:
// 1. create a class/constructur


// 2. access hardcoded Data
// 3. put data in array

// pg2 -  search car data/JSON of data by passing a quarry and rendering results on another page
// And for more points we create a search history to access something. 


//add class for individual srch querry
class Search {
    text: string;
    textId: string = "id" + Math.random().toString(16).slice(2);
    constructor(text: string) {
        this.text = text;
        
    }
}
//class to provide an array of all srchs to local storage
class AllSrchs {
    srchs: Array<Search> = JSON.parse(localStorage.getItem('Allsrchs')) ? JSON.parse(localStorage.getItem('Allsrchs')) : [];
    //method to push new srch to the array
    addNewSrch(srch) {
        this.srchs.push(srch);
        localStorage.setItem("Allsrchs", JSON.stringify(this.srchs));

    }
}
const allOfSrchs = new AllSrchs();
//function for collecting text input
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        const text = ev.target.elements.text.value;
        const srch: Search = new Search(text);
        allOfSrchs.addNewSrch(srch);
        console.log(text);
        window.location.reload();
        location.href = "results.html"
    } catch (er) {
        console.error(er);
    }

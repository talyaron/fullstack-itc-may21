/* www.youtube.com/CodeExplained */

// SELECT ELEMENTS
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// SELECT BTNS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// INPUT BTS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// VARIABLES
let ENTRY_LIST=[];
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// // LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
// ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
// updateUI();

// EVENT LISTENERS
expenseBtn.addEventListener("click",function(){
    show(expenseEl);
    hide( [incomeEl, allEl] );
    active( expenseBtn );
    inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function(){
    show(incomeEl);
    hide( [expenseEl, allEl] );
    active( incomeBtn );
    inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function(){
    show(allEl);
    hide( [incomeEl, expenseEl] );
    active( allBtn );
    inactive( [incomeBtn, expenseBtn] );
})

addExpense.addEventListener("click",addExpense1)


async function addExpense1(){
 try {
    if(!expenseTitle.value || !expenseAmount.value ) return;
    let expense = {
        type : "expense",
        title : expenseTitle.value,
        amount : parseInt(expenseAmount.value)
    }
const res= await axios.post("/addExpense",expense)
console.log(res.data);
const data=res.data;
// const data= await res.json();
ENTRY_LIST.push(...data)
console.log(ENTRY_LIST);
        updateUI();
        clearInput( [expenseTitle, expenseAmount] )  

 } catch (error) {
     console.error(error);
 }


}


    // IF ONE OF THE INPUTS IS EMPTY => EXIT
//     try {
//         if(!expenseTitle.value || !expenseAmount.value ) return;

//         // SAVE THE ENTRY TO ENTRY_LIST
//         let expense = {
//             type : "expense",
//             title : expenseTitle.value,
//             amount : parseInt(expenseAmount.value)
//         }
//         ENTRY_LIST.push(expense);
        
//        const data = {type : "expense",tile :expenseTitle.value,amount : parseInt(expenseAmount.value)}
//        const options={
//            method:'POST',
//            headers: {
//             'Content-Type': 'application/json'
           
//           },
//           body: JSON.stringify(data) // body data type must match "Content-Type" header

//        }
//        fetch('/addExpense',options);
//         updateUI();
//         clearInput( [expenseTitle, expenseAmount] )  
//     } catch (error) {
//         console.error(error)
//     }
    
// })

addIncome.addEventListener("click",addIncome1());
//     // IF ONE OF THE INPUTS IS EMPTY => EXIT
//     if(!incomeTitle.value || !incomeAmount.value ) return;

//     // SAVE THE ENTRY TO ENTRY_LIST
//     let income = {
//         type : "income",
//         title : incomeTitle.value,
//         amount : parseInt(incomeAmount.value)
//     }
//     ENTRY_LIST.push(income);
//     const data = {type : "income",tile :incomeTitle.value,amount : parseInt(incomeAmount.value)}
//        const options={
//            method:'POST',
//            headers: {
//             'Content-Type': 'application/json'
           
//           },
//           body: JSON.stringify(data) // body data type must match "Content-Type" header

//        }
//        fetch('/addIncome',options);
//     updateUI();
//     clearInput( [incomeTitle, incomeAmount] )
// })
async function addIncome1(){

try {
    let income = {
        type : "income",
        title : incomeTitle.value,
        amount : parseInt(incomeAmount.value)
    }
    const res= await axios.post("/addIncome", income);
    console.log(res.data);
    const data=res.data;
    ENTRY_LIST.push(...data)
    console.log(ENTRY_LIST);
    updateUI();
    clearInput( [incomeTitle, incomeAmount] )
} catch (error) {
    console.error(error);
}

}
incomeList.addEventListener("click", deleteOrEdit);
expenseList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit);

// HELPERS

function deleteOrEdit(event){
    const targetBtn = event.target;

    const entry = targetBtn.parentNode;

    if( targetBtn.id == DELETE ){
        deleteEntry(entry);
    }else if(targetBtn.id == EDIT ){
        editEntry(entry);
    }
}

// function deleteEntry(entry){
//     ENTRY_LIST.splice( entry.id, 1);

//     updateUI();
// }
 async function  deleteEntryt(id){

    const res=await axios.delete(`/deleteEntry/${id}`);
    updateUI();
 }
function editEntry(entry){
    console.log(entry)
    let ENTRY = ENTRY_LIST[entry.id];

    if(ENTRY.type == "income"){
        incomeAmount.value = ENTRY.amount;
        incomeTitle.value = ENTRY.title;
    }else if(ENTRY.type == "expense"){
        expenseAmount.value = ENTRY.amount;
        expenseTitle.value = ENTRY.title;
    }

    deleteEntry(entry);
}

function updateUI(){
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance = Math.abs(calculateBalance(income, outcome));

    // DETERMINE SIGN OF BALANCE
    let sign = (income >= outcome) ? "$" : "-$";

    // UPDATE UI
    balanceEl.innerHTML = `<small>${sign}</small>${balance}`;
    outcomeTotalEl.innerHTML = `<small>$</small>${outcome}`;
    incomeTotalEl.innerHTML = `<small>$</small>${income}`;

    clearElement( [expenseList, incomeList, allList] );

    ENTRY_LIST.forEach( (entry, index) => {
        if( entry.type == "expense" ){
            showEntry(expenseList, entry.type, entry.title, entry.amount, index)
        }else if( entry.type == "income" ){
            showEntry(incomeList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    });

    updateChart(income, outcome);

    // localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function showEntry(list, type, title, amount, id){

    const entry = ` <li id = "${id}" class="${type}">
                        <div class="entry">${title}: $${amount}</div>
                        <div id="edit"></div>
                        <div id="delete"></div>
                    </li>`;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements){
    elements.forEach( element => {
        element.innerHTML = "";
    })
}

function calculateTotal(type, list){
    let sum = 0;

    list.forEach( entry => {
        if( entry.type == type ){
            sum += entry.amount;
        }
    })

    return sum;
}

function calculateBalance(income, outcome){
    return income - outcome;
}

function clearInput(inputs){
    inputs.forEach( input => {
        input.value = "";
    })
}
function show(element){
    element.classList.remove("hide");
}

function hide( elements ){
    elements.forEach( element => {
        element.classList.add("hide");
    })
}

function active(element){
    element.classList.add("active");
}

function inactive( elements ){
    elements.forEach( element => {
        element.classList.remove("active");
    })
}
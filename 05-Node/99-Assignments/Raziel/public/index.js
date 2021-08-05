//the consts

const balance=document.querySelector(".balance .value");
const outcomeTotal=document.querySelector("outcome-total");
const incomeTotal =document.querySelector("income-total");

//the chart
const chart = document.querySelector(".chart");

// SELECT BTNS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");
//output
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");


const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

//input_status
const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");




//dunctions for disabling and enabiling


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



//disable and enable expense income and all btns


expenseBtn.addEventListener("click", ()=>{
    show(expenseEl);
    hide( [incomeEl, allEl] );
    active( expenseBtn );
    inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", ()=>{
    show(incomeEl);
    hide( [expenseEl, allEl] );
    active( incomeBtn );
    inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", ()=>{
    show(allEl);
    hide( [incomeEl, expenseEl] );
    active( allBtn );
    inactive( [incomeBtn, expenseBtn] );
})

/////// adding income and expness to array
let ENTRY_LIST=[];

addIncome.addEventListener("click", function(){
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!incomeTitle.value || !incomeAmount.value ) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let income = {
        type : "income",
        title : incomeTitle.value,
        amount : parseInt(incomeAmount.value)
     
    }
    ENTRY_LIST.push(income);

    updateUI();
    clearInput( [incomeTitle, incomeAmount] )
})

addExpense.addEventListener("click", function(){
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!expenseTitle.value || !expenseAmount.value ) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let expense = {
        type : "expense",
        title : expenseTitle.value,
        amount : parseInt(expenseAmount.value)
    }
    ENTRY_LIST.push(expense);

    updateUI();
    clearInput( [expenseTitle, expenseAmount] )
})


//////////////
function calculateTotal(type,ENTRY_LIST){
    let sum;
    ENTRY_LIST.forEach(entry=>{
        if(type.entry==type){
            sym+=entry.amount;
        }

    })

    return sum;
}

function calculateBalance(income,outcome){
    return income-outcome;
}

/////////////////////////////////
//each time i add an income/out come the balance and the incom/outcom will be updated.
function updateUI(){
income=calculateTotal("income",ENTRY_LIST);
outcome=calculateTotal("expense",ENTRY_LIST);
balance=  calculateBalance(income,outcome);

incomeTotal.innerHTML=`<small>$<small>${income}`;
outcomeTotal.innerHTML=`<small>$<small>${outcome}`;

clearElement([incomeList,expenseList,allList]);


}
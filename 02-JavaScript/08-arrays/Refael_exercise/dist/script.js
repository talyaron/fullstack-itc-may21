var sticks = [
    {
        company: "Ziljian",
        size: "5A",
        amount: 30
    },
    {
        company: "Vic Firth",
        size: "7A",
        amount: 10
    },
    {
        company: "Blocks",
        size: "5B",
        amount: 3
    },
];
sticks.forEach(function (sticks) {
    console.log(sticks.amount);
});
var SticksAmountForDOM = sticks
    .map(function (Sticks) {
    return "<p>" + Sticks.company + " company has " + Sticks.amount + " sticks in inventory</p>";
})
    .join(" ");
console.log(SticksAmountForDOM);
var dom = document.querySelector(".dom");
dom.innerHTML = SticksAmountForDOM;
var SticksCompaniesForDOM = sticks
    .map(function (Sticks) {
    return "<p>" + Sticks.company + " has " + Sticks.amount + " sticks in inventory </p>";
})
    .join(" ");
console.log(SticksAmountForDOM);
// const dom = document.querySelector(".dom");
dom.innerHTML = SticksAmountForDOM;

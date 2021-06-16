var Transaction = /** @class */ (function () {
    function Transaction(transAmount, transBiz) {
        this.transDate = new Date();
        this.transId = "id" + Math.random().toString(16).slice(2);
        this.transBiz = transBiz;
        this.transAmount = transAmount;
    }
    return Transaction;
}());
document.querySelector("#total_amount").innerHTML = "₪0";
var Account = /** @class */ (function () {
    function Account() {
        this.allTransactions = [];
        this.totalAmount = Number(document.querySelector("#total_amount").innerHTML.replace("₪", ""));
    }
    // constructor (profImageUrl : string) { // YA: out of scope for this task
    //     this.profImageUrl = profImageUrl;
    // }
    Account.prototype.addTrans = function (transaction) {
        this.allTransactions.push(transaction);
        this.addTransToDOM(transaction);
        this.refreshTotal(transaction.transAmount);
    };
    Account.prototype.addTransToDOM = function (transaction) {
        try {
            var transContainer = document.querySelector(".transactions");
            var signFAClass = transaction.transAmount >= 0 ? "plus" : "minus";
            var signTitle = transaction.transAmount >= 0 ? "Income" : "Expense";
            var transColor = transaction.transAmount >= 0 ? "green" : "red";
            var transFormatedDate = transaction.transDate.getDate() + "-" + (transaction.transDate.getMonth() + 1) + "-" + transaction.transDate.getFullYear();
            var totalBeforeContainer = document.querySelector("#total_amount");
            var transHTML = "<div class=\"transactions__item transactions__item--action\">\n      <i id=\"sign\" class=\"fas fa-2x fa-" + signFAClass + "-circle\" title=\"" + signTitle + "\" style=\"color: " + transColor + ";\"></i>\n      <div id=\"trans_amount\" style=\"color: " + transColor + ";\">\n        \u20AA" + Math.abs(transaction.transAmount) + "\n      </div>\n      <div id=\"temp_total\">Balace: \u20AA" + (Number(totalBeforeContainer.innerHTML.replace('₪', '')) + transaction.transAmount) + "</div>\n      <div id=\"trans_date\">" + transFormatedDate + "</div>\n      <div id=\"trans_business\">" + transaction.transBiz + "</div>\n      <div id=\"trans_id\">" + transaction.transId + "</div>\n    </div>";
            transContainer.insertAdjacentHTML('beforeend', transHTML);
            var totalDateContainer = document.querySelector("#total_date");
            totalDateContainer.innerText = "For Date: " + transFormatedDate;
        }
        catch (er) {
            console.error(er);
        }
    };
    Account.prototype.refreshTotal = function (transAmount) {
        this.totalAmount += transAmount;
        this.updateDOMTotal(this.totalAmount);
    };
    Account.prototype.updateDOMTotal = function (totalAmount) {
        try {
            var domTotal = document.querySelector("#total_amount");
            domTotal.innerText = "\u20AA" + totalAmount;
            if (totalAmount >= 0) {
                domTotal.style.color = "green";
            }
            else {
                domTotal.style.color = "red";
            }
        }
        catch (er) {
            console.error(er);
        }
    };
    return Account;
}());
var isModalOpen = false;
var openModal = function () {
    try {
        var addTransBtn = document.querySelector(".transactions__item--add");
        var modal_1 = document.querySelector(".modalWrapper");
        var modalBox_1 = document.querySelector(".modalBox");
        addTransBtn.addEventListener("click", function (ev) {
            isModalOpen = true;
            modal_1.style.display = "flex";
            modalBox_1.style.display = "unset";
        });
    }
    catch (er) {
        console.error(er);
    }
};
var closeModal = function () {
    try {
        var close = document.querySelector(".close");
        var modal_2 = document.querySelector(".modalWrapper");
        var modalBox_2 = document.querySelector(".modalBox");
        close.addEventListener("click", function (ev) {
            isModalOpen = false;
            console.log('hi');
            modal_2.style.display = "none";
            modalBox_2.style.display = "none";
        });
    }
    catch (er) {
        console.error(er);
    }
};
var transactions = new Account();
var handleSubmit = function (ev) {
    try {
        ev.preventDefault();
        var transAmount = Number(ev.target.elements.transAmount.value);
        var transBiz = ev.target.elements.transBiz.value;
        var transaction = new Transaction(transAmount, transBiz);
        transactions.addTrans(transaction);
        var modal = document.querySelector(".modalWrapper");
        var modalBox = document.querySelector(".modalBox");
        isModalOpen = false;
        modal.style.display = "none";
        modalBox.style.display = "none";
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
openModal();
closeModal();

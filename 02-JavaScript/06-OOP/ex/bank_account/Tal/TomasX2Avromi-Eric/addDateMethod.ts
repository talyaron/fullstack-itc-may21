class Transaction {
    amount: number;
    date: Date;
    place: string;
    description: string;
    transactionId: string = "id" + Math.random().toString(16).slice(2);


    constructor(amount: number, date: Date, place: string, description: string) {
        this.amount = amount;
        this.date = date;
        this.place = place;
        this.description = description;


    }
}





class Account {
    account: Array<Transaction> = [];
    name: string = '';
    constructor(name) {
        this.name = name
    }

    addNewTransaction(amount: number, date: Date, place: string, description: string): string {
        let newTransaction: Transaction = new Transaction(amount, date, place, description)
        this.account.push(newTransaction);
        return newTransaction.transactionId;
    }

    calculateSum(): number {
        const sum = this.account.reduce((sum, transaction) => { return sum + transaction.amount }, 0)
        return sum;
    }

    editTransaction(transactionIdToEdit: string, updatedDescription: string) {
        try {
            //find the transactiond
            const transactionIndex: number = this.account.findIndex(transaction => transaction.transactionId === transactionIdToEdit );
            console.log(transactionIndex)
            //want to edit
            this.account[transactionIndex].description = updatedDescription;
        } catch (e) {
            console.error(e);
        }
    }
    filterDate(fromDate: Date, toDate: Date){
      try{
          const filteredByDates : Array<Transaction> = this.account.filter((transaction)=> ((transaction.date >= fromDate) && (transaction.date <= toDate)))
          return filteredByDates;
      }catch(er){
          console.log(er)
      }
            
    }
}

let account = new Account('Yaniv');
const transactionId1 = account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date('2008-06-26'), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date('2009-07-31'), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date('2010-08-21'), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date('2006-09-12'), 'Ramat-Gan', 'ATM redrwal'); 
account.addNewTransaction(-300, new Date('2007-04-10'), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date('2011-09-09'), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
console.log(account.filterDate(new Date('2008-06-26'), new Date('2010-08-21')))

console.log(account.calculateSum());
console.log(JSON.stringify(account))

account.editTransaction(transactionId1, 'Walllllaaaaa!!!');
console.log(account)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
var startDate = new Date("2015-08-04");
var endDate = new Date("2015-08-12");
=======
// var startDate = new Date("2015-08-04");
//         var endDate = new Date("2015-08-12");
>>>>>>> Stashed changes

//         var resultProductData = product_data.filter(function (a) {
//             var hitDates = a.ProductHits || {};
//             // extract all date strings
//             hitDates = Object.keys(hitDates);
//             // improvement: use some. this is an improment because .map()
//             // and .filter() are walking through all elements.
//             // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
//             hitDateMatchExists = hitDates.some(function(dateStr) {
//                 var date = new Date(dateStr);
//                 return date >= startDate && date <= endDat
//             });
//             return hitDateMatchExists;
//         });
//         console.log(resultProductData);
=======



// var startDate = new Date("2006-08-04");
//                 var endDate = new Date("2009-08-12");




        // var resultProductData = product_data.filter(function (a) {
        //     var hitDates = a.ProductHits || {};
        //     // extract all date strings
        //     hitDates = Object.keys(hitDates);
        //     // improvement: use some. this is an improment because .map()
        //     // and .filter() are walking through all elements.
        //     // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
        //     hitDateMatchExists = hitDates.some(function(dateStr) {
        //         var date = new Date(dateStr);
        //         return date >= startDate && date <= endDate
        //     });
        //     return hitDateMatchExists;
        // });
        // console.log(resultProductData);
>>>>>>> Stashed changes

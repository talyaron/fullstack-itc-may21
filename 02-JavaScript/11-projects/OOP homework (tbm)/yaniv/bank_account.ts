class Transaction {
    transBiz : string;
    transAmount : number;
    transDate : Date;
    transId : string;

    constructor (transBiz : string, transAmount : number) {
        this.transBiz = transBiz;
        this.transAmount = transAmount;
        this.transDate = new Date();
        this.transId = "id" + Math.random().toString(16).slice(2);
    }

}

class Account {
    profImageUrl : string;
    allTransactions : Array<Transaction>;
    totalAmount : number;

    constructor (profImageUrl : string) {
        this.profImageUrl = profImageUrl;
    }

    addTrans() : void {

    }

    refreshTotal() : number {

        return this.totalAmount;
    }
}


const transactions = new Account(img);

var handleSubmit = (ev: any) => {
    ev.preventDefault();

    const imageUrl: string = ev.target.elements.imageUrl.value;
    const description: string = ev.target.elements.description.value;


    const article = new Article(imageUrl, description);

    articles.add(article);
    articles.renderArticles();

    console.log(articles)

}
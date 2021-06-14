var Transaction = /** @class */ (function () {
    function Transaction(transBiz, transAmount) {
        this.transBiz = transBiz;
        this.transAmount = transAmount;
        this.transDate = new Date();
        this.transId = "id" + Math.random().toString(16).slice(2);
    }
    return Transaction;
}());
var Account = /** @class */ (function () {
    function Account(profImageUrl) {
        this.profImageUrl = profImageUrl;
    }
    Account.prototype.addTrans = function () {
    };
    Account.prototype.refreshTotal = function () {
        return this.totalAmount;
    };
    return Account;
}());
var transactions = new Account(img);
var handleSubmit = function (ev) {
    ev.preventDefault();
    var imageUrl = ev.target.elements.imageUrl.value;
    var description = ev.target.elements.description.value;
    var article = new Article(imageUrl, description);
    articles.add(article);
    articles.renderArticles();
    console.log(articles);
};

var handleSumbit = function (ev) {
    ev.preventDefault();
    console.dir(ev);
};
var Article = /** @class */ (function () {
    function Article(imgUrl, description, articleId) {
        this.imgUrl = imgUrl;
        this.description = description;
        this.articleId = "id" + Math.random().toString(16).slice(2);
    }
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray() {
    }
    return ArticleArray;
}());

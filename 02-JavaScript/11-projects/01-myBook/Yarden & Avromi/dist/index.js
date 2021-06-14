"use strict";
exports.__esModule = true;
var handleSumbit = function (ev) {
    ev.preventDefault();
    console.dir(ev);
};
var Article = /** @class */ (function () {
    function Article(imgUrl, description, articleId) {
        this.imgUrl = imgUrl;
        this.description = description;
        this.articleId = articleId;
    }
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray(article) {
        this.article = article;
    }
    return ArticleArray;
}());

var Article = /** @class */ (function () {
    function Article(imageUrl, description) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.articleId = "id" + Math.random().toString(16).slice(2);
    }
    return Article;
}());
var ArticlesList = /** @class */ (function () {
    function ArticlesList() {
        this.articles = [];
    }
    ArticlesList.prototype.add = function (article) {
        this.articles.push(article);
    };
    ArticlesList.prototype.removeArticle = function (articleId) {
        this.articles = this.articles.filter(function (art) { return art.articleId !== articleId; });
        console.log(this.articles);
        this.renderArticles();
    };
    ArticlesList.prototype.updateArticle = function (articleId) {
    };
    ArticlesList.prototype.renderArticles = function () {
        var articlesRoot = document.querySelector('#articlesRoot');
        //loop over articles
        var html = '';
        this.articles.forEach(function (article) {
            html += "<div><img src='" + article.imageUrl + "' alt='" + article.description + "' />" +
                ("<p>" + article.description + "</p><button onclick='handleDelete(\"" + article.articleId + "\")'>DELETE</button></div>");
        });
        console.log(html);
        articlesRoot.innerHTML = html;
    };
    return ArticlesList;
}());
var articles = new ArticlesList();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var imageUrl = ev.target.elements.imageUrl.value;
    var description = ev.target.elements.description.value;
    var article = new Article(imageUrl, description);
    articles.add(article);
    articles.renderArticles();
    console.log(articles);
};
var handleDelete = function (articleId) {
    articles.removeArticle(articleId);
};

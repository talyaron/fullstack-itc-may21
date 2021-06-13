var Article = /** @class */ (function () {
    function Article(image, description, articleId) {
        this.image = image;
        this.description = description;
        this.articleId = articleId;
    }
    Article.prototype.changeDescription = function () {
    };
    Article.prototype.changeImageUrl = function () {
    };
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray(articles) {
        this.articles = articles;
    }
    ArticleArray.prototype.add = function () {
        this.piece = document.createElement('img');
        this.piece.setAttribute('src', this.articles);
        this.piece.classList.add("piece");
        this.boardGamed.appendChild(this.piece);
    };
    ArticleArray.prototype.remove = function (articleId) {
    };
    ArticleArray.prototype.renderArray = function () {
    };
    ArticleArray.prototype.renderArticle = function (articleId) {
    };
    return ArticleArray;
}());

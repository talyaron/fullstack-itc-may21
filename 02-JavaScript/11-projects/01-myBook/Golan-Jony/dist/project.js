var Article = /** @class */ (function () {
    function Article(imageURL, description, articleId) {
        this.imageURL = imageURL;
        this.description = description;
        this.articleId = articleId;
    }
    Article.prototype.changeDescription = function () {
    };
    Article.prototype.changeImageURL = function () {
    };
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray() {
    }
    ArticleArray.prototype.Add = function (article) {
    };
    ArticleArray.prototype.Remove = function () {
    };
    ArticleArray.prototype.renderArray = function () {
    };
    ArticleArray.prototype.renderArticle = function () {
    };
    return ArticleArray;
}());
function handlerSumbit(event) {
    event.preventDefault();
    var root = document.querySelector('.div');
    var inputURL = event.target.elements.imageURL.value;
    var description = event.target.elements.description.value;
    var article = document.createElement('div');
    article.className = "divArt";
    article.style.width = "100px";
    article.style.height = "100px";
    article.style.backgroundColor = "red";
    var container = document.createElement('.container');
    container.appendChild(container);
}

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
    function ArticleArray(articles) {
        this.articles = articles;
    }
    ArticleArray.prototype.Add = function () {
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
    var root = document.querySelector('.inputDiv');
    var inputURL = event.target.elements.imageURL.value;
    var description = event.target.elements.description.value;
    var container = document.querySelector(".container");
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.backgroundColor = "red";
}

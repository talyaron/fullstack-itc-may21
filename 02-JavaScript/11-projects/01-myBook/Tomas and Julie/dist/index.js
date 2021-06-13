function handleSubmit(ev) {
    ev.preventDefault();
    var name = ev.target.children.name.value;
    var url = ev.target.children.url.value;
    newArticle = new Article("" + name, url);
    articleArray.add;
}
var Article = /** @class */ (function () {
    function Article(desc, url, id) {
        this.desc = desc;
        this.url = url;
        this.id = id;
    }
    Article.prototype.changeDesc = function () {
        this.desc =
        ;
    };
    Article.prototype.changeImageUrl = function () { };
    return Article;
}());
var articleArray = /** @class */ (function () {
    function articleArray() {
    }
    articleArray.prototype.Add = function () { };
    articleArray.prototype.Remove = function () { };
    articleArray.prototype.renderArticle = function () { };
    return articleArray;
}());

var Article = /** @class */ (function () {
    function Article(image, description) {
        this.image = image;
        this.description = description;
        this.articleId = "id" + Math.random().toString(16).slice(2);
    }
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray() {
    }
    ArticleArray.prototype.add = function (article) {
        this.atricles.push(article);
    };
    ArticleArray.prototype.render = function () {
        var articlesSection = document.querySelector(".articles");
    };
    return ArticleArray;
}());
var articles = new ArticleArray();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var imgUrl = ev.target.elements.imgUrl.value;
    var desc = ev.target.elements.desc.value;
    var article = new Article(imgUrl, desc);
    articles.add(article);
    ev.target.reset();
};
// ArticleArray {
//     [
//         Article {
//             image : string;
//             description : string;
//             articleId : number;          
//     },
//         Article {
//             image : string;
//             description : string;
//             articleId : number;          
//     },
//         Article {
//             image : string;
//             description : string;
//             articleId : number;          
//     },
//  ]
// }

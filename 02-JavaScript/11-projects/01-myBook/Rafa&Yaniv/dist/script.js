var Article = /** @class */ (function () {
    function Article(image, description) {
        this.image = image;
        this.description = description;
        this.articleId = "id" + Math.random().toString(16).slice(2);
    }
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray(atricles) {
        this.atricles = articles;
    }
    return ArticleArray;
}());
var articles;
var allArticles = new ArticleArray(articles);
var handleSubmit = function (ev) {
    ev.preventDefault();
    var imgUrl = ev.target.elements.imgUrl.value;
    var desc = ev.target.elements.desc.value;
    var article = new Article(imgUrl, desc);
    articles.push(article);
    var articlesSection = document.querySelector(".articles");
    articles[articles.length - 1].addArticleToDOM(articlesSection);
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

var articles = [];
function handleSubmit(ev) {
    ev.preventDefault();
    var imgUrl = ev.target.elements.imgUrl.value;
    var desc = ev.target.elements.desc.value;
    articles.push(new Article(imgUrl, string, desc, string));
    var articlesSection = document.querySelector(".articles");
    articles[articles.length - 1].addArticleToDOM(articlesSection);
    ev.target.reset();
}
var Article = /** @class */ (function () {
    function Article(image, description, articleId) {
    }
    return Article;
}());
var ArticleArray = /** @class */ (function () {
    function ArticleArray(atricles) {
        this.atricles = articles;
    }
    return ArticleArray;
}());
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

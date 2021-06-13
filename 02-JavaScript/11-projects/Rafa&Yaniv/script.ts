var articles = [];

function handleSubmit(ev) {
    ev.preventDefault();
    const imgUrl : string = ev.target.elements.imgUrl.value;
    const desc : string = ev.target.elements.desc.value;

    articles.push(new Article(imgUrl : string, desc : string));

    const articlesSection = document.querySelector(".articles");
    articles[articles.length - 1].addArticleToDOM(articlesSection);

    ev.target.reset();
}

class Article {
    image : string;
    description : string;
    articleId : number;

    constructor (image : string, description : string, articleId : number) {

    }
}

class ArticleArray {
    atricles:Array<Article>;

    constructor (atricles : Array<Article>) {
        this.atricles = articles; 

    }
}


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
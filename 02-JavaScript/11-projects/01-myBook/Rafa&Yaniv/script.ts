class Article {
    image : string;
    description : string;
    articleId : string;

    constructor (image : string, description : string) {
        this.image = image; 
        this.description = description; 
        this.articleId = `id${Math.random().toString(16).slice(2)}`; 

    }
}

class ArticleArray {
    atricles:Array<Article>;

    constructor (atricles : Array<Article>) {
        this.atricles = articles; 
        
    }
}

let articles : Array<Article>;
let allArticles = new ArticleArray(articles);

let handleSubmit = (ev : any) => {
    ev.preventDefault();
    const imgUrl : string = ev.target.elements.imgUrl.value;
    const desc : string = ev.target.elements.desc.value;

    const article = new Article(imgUrl, desc);
    
    articles.push(article);

    const articlesSection = document.querySelector(".articles");
    articles[articles.length - 1].addArticleToDOM(articlesSection);

    ev.target.reset();
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
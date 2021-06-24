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

    add(article : Article) {
        this.atricles.push(article);
    }

    render() {
        const articlesSection = document.querySelector(".articles");
    }
}

const articles = new ArticleArray();

let handleSubmit = (ev : any) : void => {
    ev.preventDefault();
    const imgUrl : string = ev.target.elements.imgUrl.value;
    const desc : string = ev.target.elements.desc.value;

    const article = new Article(imgUrl, desc);
    
    articles.add(article);

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
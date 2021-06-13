class Article {
    imageUrl: string;
    description: string;
    articleId: string;

    constructor(imageUrl: string, description: string) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.articleId = "id" + Math.random().toString(16).slice(2);
    }
}

class ArticlesList {
    articles: Array<Article> = [];


    add(article: Article) {
        this.articles.push(article);
    }


    removeArticle(articleId:string){

    }

    updateArticle(articleId:string){

    }

    renderArticles(){
        const articlesRoot:HTMLElement = document.querySelector('#articlesRoot');

        //loop over articles

        let html:string='';
        this.articles.forEach(article=>{
            html += `<div><img src='${article.imageUrl}' alt='${article.description}' />`+
            `<p>${article.description}</p></div>`
        });
        console.log(html);
        articlesRoot.innerHTML = html;

    }
}
const articles = new ArticlesList();

var handleSubmit = (ev: any) => {
    ev.preventDefault();

    const imageUrl: string = ev.target.elements.imageUrl.value;
    const description: string = ev.target.elements.description.value;


    const article = new Article(imageUrl, description);

    articles.add(article);
    articles.renderArticles();

    console.log(articles)

}
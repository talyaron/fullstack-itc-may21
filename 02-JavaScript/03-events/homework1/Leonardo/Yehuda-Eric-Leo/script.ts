class Article { 
    image: string;
    description: string;
    articleId: string;

    constructor(image: string, description: string, articleId: string){
        this.image = image;
        this.description = description;
        this.articleId = articleId;
    }

    changeDescription(){

    }

    changeImageUrl(){

    }
}

class ArticleArray {
    articles: [Article];

    constructor(articles: [Article]){
        this.articles = articles;
    }

    add(){
        this.piece = document.createElement('img');
        this.piece.setAttribute('src', this.articles);
        this.piece.classList.add("piece");
        this.boardGamed.appendChild(this.piece);
    }

    remove(articleId){

    }

    renderArray(){

    }

    renderArticle(articleId){

    }
}
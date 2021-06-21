// Funcion para tomar info de formulario
const handleSubmit = (ev: any):void => {
    ev.preventDefault();
    
    const title: string= ev.target.elements.title.value;
    let url: string = ev.target.elements.url.value;
    const description:string = ev.target.elements.description.value;
    
    // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
    const newPosts = new Post(title, url, description);

    newPost.addPost(newPosts);
    newPost.storePost(newPost);
    console.log(newPosts)
}

class Post{
    title: string;
    url: string;
    description: string;
    constructor(title: string, url: string, description: string){
        this.title = title;
        this.url = url;
        this.description = description;
    } 
}
 
class PostList{
    posts: Array<Post> = [];
    addPost(post: Post) {
        this.posts.push(post);
    }
    storePost(data:any){
        let postsScreen = JSON.stringify(data);

        localStorage.setItem("posts", postsScreen); 
        window.location.href = 'posts.html';

    }
}

const newPost = new PostList();




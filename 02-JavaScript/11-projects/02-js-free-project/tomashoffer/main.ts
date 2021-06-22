

class Post{
    title: string;
    file: any;
    description: string;
    constructor(title: string, file: any, description: string){
        this.title = title;
        this.file = file;
        this.description = description;
    } 
}
 
class PostList{
    posts: Array<Post> = [];
    addPost(post: Post) {
        this.posts.push(post);
        let postsScreen = JSON.stringify(post);

        localStorage.setItem("posts", postsScreen); 
        window.location.href = "posts.html";
    }
}
// Funcion para tomar info de formulario
const handleSubmit = (ev: any):void => {
    ev.preventDefault();
    
    const title: string= ev.target.elements.title.value;
    let file: string = ev.target.elements.file.value;
    const description:string = ev.target.elements.description.value;
    
    // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
    const newPosts = new Post(title, file, description);

    newPost.addPost(newPosts);
    console.log(newPosts)
}
const newPost = new PostList();




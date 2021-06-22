var Post = /** @class */ (function () {
    function Post(title, file, description) {
        this.title = title;
        this.file = file;
        this.description = description;
    }
    return Post;
}());
var PostList = /** @class */ (function () {
    function PostList() {
        this.posts = [];
    }
    PostList.prototype.addPost = function (post) {
        this.posts.push(post);
        var postsScreen = JSON.stringify(post);
        localStorage.setItem("posts", postsScreen);
        window.location.href = "posts.html";
    };
    return PostList;
}());
// Funcion para tomar info de formulario
var handleSubmit = function (ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var file = ev.target.elements.file.value;
    var description = ev.target.elements.description.value;
    // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
    var newPosts = new Post(title, file, description);
    newPost.addPost(newPosts);
    console.log(newPosts);
};
var newPost = new PostList();

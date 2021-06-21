// Funcion para tomar info de formulario
var handleSubmit = function (ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var url = ev.target.elements.url.value;
    var description = ev.target.elements.description.value;
    // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
    var newPosts = new Post(title, url, description);
    newPost.addPost(newPosts);
    newPost.storePost(newPost);
    console.log(newPosts);
};
var Post = /** @class */ (function () {
    function Post(title, url, description) {
        this.title = title;
        this.url = url;
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
    };
    PostList.prototype.storePost = function (data) {
        var postsScreen = JSON.stringify(data);
        localStorage.setItem("posts", postsScreen);
        window.location.href = 'posts.html';
    };
    return PostList;
}());
var newPost = new PostList();

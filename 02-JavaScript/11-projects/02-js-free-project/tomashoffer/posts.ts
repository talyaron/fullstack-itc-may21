const root = document.querySelector('.posts');
const renderPost = JSON.parse(localStorage.getItem("posts"));
const img = JSON.parse(localStorage.getItem("image"));
console.log(img);

root.innerHTML = `<div class="posts_items"><h1 class="posts_title">${renderPost.title}</h1><img class="posts_img" src='' alt=""><p>${renderPost.description}</p></div>`;

document.querySelector(".posts_img").setAttribute('src', img)
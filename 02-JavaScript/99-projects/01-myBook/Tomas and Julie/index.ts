function handleSubmit(ev) {
  ev.preventDefault();
  let name = ev.target.children.name.value;
  let url = ev.target.children.url.value;
  newArticle = new Article(`${name}`, url);
  articleArray.add;
}

class Article {
  desc: string;
  url: string;
  id: number;
  constructor(desc: string, url: string, id: number) {
    this.desc = desc;
    this.url = url;
    this.id = id;
  }
  changeDesc() {
    this.desc =  
  }
  changeImageUrl() {}
  changeDesc() {}
  changeImageUrl() {
    if (i <= articleArray.length) {
      i++;
    }
    imageGallery.src = articleArray[i];
  }
}



class articleArray {
  constructor() {}
  Add() {}
  Remove() {}
  renderArticle() {}
}

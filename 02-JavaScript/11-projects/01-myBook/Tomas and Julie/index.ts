function handleSubmit(ev) {
  ev.preventDefault();
  let name = ev.target.children.name.value;
  let url = ev.target.children.url.value;
  newArticle = new Article(`${name}`, url);
  articleArray.add;
}

class Article {
  name: string;
  url: string;
  id: number;
  constructor(name: string, url: string, id: number) {
    this.name = name;
    this.url = url;
    this.id = id;
  }
  changeDesc() {}
  changeImageUrl() {}
}

class articleArray {
  constructor() {}
  Add() {}
  Remove() {}
  renderArticle() {}
}

class IdsGenerator {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Ids {
  id: Array<IdsGenerator> = [];

  add(add: IdsGenerator) {
    this.id.push(add);
  }
}

const ids = new Ids();

const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;

    const generator = new IdsGenerator(name);
}
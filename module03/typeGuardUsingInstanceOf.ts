{
  class Animal {
    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log("I am making sound!");
    }
  }

  class Cat extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log(`${this.name} is calling meaw meas!`);
    }
  }

  class Dog extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`${this.name} is calling ghew ghew`);
    }
  }

  const dog1 = new Dog("German Shepherd", "dog");
  const cat = new Cat("Persian", "cat");
  // function for reuseable checking

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(dog1);
}

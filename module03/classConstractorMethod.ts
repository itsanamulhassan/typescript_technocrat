{
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log("sound " + this.sound);
    }
  }

  const dog1 = new Animal("Neri Kutta", "dog", "Ghew Ghew");
  const cat1 = new Animal("Bilai", "Cat", "Meaw, Meaw");

  cat1.makeSound();
}

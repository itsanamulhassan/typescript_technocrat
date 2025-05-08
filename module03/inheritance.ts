{
  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(hours: number) {
      console.log(
        `${this.name} will sleep ${hours} ${hours > 1 ? "hours" : "hour"}`
      );
    }
  }
  class Student extends Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public roll: number
    ) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public designation: string
    ) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Shan", 21, "Poland", 20);
  const teacher1 = new Teacher("Ten", 121, "Jelen", "prof");
}

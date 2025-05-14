{
  class Person {
    getSleep() {
      console.log("Everyday, I sleep for 8 hours.");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("Everyday, I sleep for 7  hours.");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("Everyday, I sleep for 6 hours.");
    }
  }

  const getSleepHour = (person: Person) => {
    person.getSleep();
  };

  const instance1 = new Person();
  const instance2 = new Student();
  const instance3 = new Developer();

  getSleepHour(instance1);
  getSleepHour(instance2);
  getSleepHour(instance3);
}

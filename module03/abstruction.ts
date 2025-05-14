{
  // abstraction: 1. interface, 2. abstract

  interface Vehicle {
    stopEngine(): void;
    startEngine(): void;
    move(): void;
  }

  //   when we use the interface with object, we can understand the real senario about the object by following the type/ interface
  // However, with class we can't say exactly the senario by following the interface / type

  class Car implements Vehicle {
    stopEngine(): void {
      console.log("The engine is being stopped!");
    }

    startEngine(): void {
      console.log("The engine is being started!");
    }
    move(): void {
      console.log("The engine is being started!");
    }
  }

  const car1 = new Car();
  car1.startEngine();

  abstract class Car2 {
    abstract stopEngine(): void;
    abstract startEngine(): void;
    abstract move(): void;

    test(): void {
      console.log("I am the test method");
    }
  }

  class Car3 extends Car2 {
    startEngine(): void {
      console.log("Start Engine");
    }
    stopEngine(): void {
      console.log("Stop Engine");
    }
    move(): void {
      console.log("Move ");
    }
  }

  // we can not make instance with abstract class.
  //   const car5 = new Car2();

  const car10 = new Car3();
  car10.stopEngine();
}

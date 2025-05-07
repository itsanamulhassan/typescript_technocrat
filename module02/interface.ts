{
  // Type vs Interface
  // Both `type` and `interface` can be used to define the shape of an object in TypeScript.
  // Use `interface` when you want to define a contract for objects or classes.
  // Use `type` when you need to define more complex types like unions or intersections.

  // type UserType = {
  //     name: string;
  //     age: number;
  // };
  interface User1 {
    name: string;
    age: number;
  }

  type Roll = "manager" | "developer" | "designer"; // We can use "type" with primitive types, unions, and intersections.
  interface User2 {
    name: string;
    age: number;
    role: Roll;
  }

  type User4 = User2 & {
    email: string;
    phone: string;
  };
  interface User3 extends User2 {
    email: string;
    phone: string;
  }

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;
}

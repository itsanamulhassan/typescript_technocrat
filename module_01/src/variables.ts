// Primitive Types
let age: number = 25; // Number
let fullName: string = "John Doe"; // String
let isStudent: boolean = true; // Boolean
let nothing: null = null; // Null
let notDefined: undefined = undefined; // Undefined
let uniqueId: symbol = Symbol("id"); // Symbol

// Non-Primitive Types
let numbersArray: number[] = [1, 2, 3, 4, 5]; // Array
let person: { name: string; age: number } = { name: "Alice", age: 30 }; // Object
let mixedArray: (string | number)[] = ["hello", 42, "world"]; // Mixed Array
let tuple: [string, number] = ["John", 25]; // Tuple

// Function
let greet: (name: string) => string = (name) => `Hello, ${name}!`;

// Any Type (can hold any value)
let randomValue: any = "This can be anything";
randomValue = 42;

// Unknown Type (safer alternative to any)
let unknownValue: unknown = "Could be anything";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// practice
const myName: string = "Anamul Hassan";
const myAge: number = 29;
const isMarried: boolean = false;
const wifeName: null = null;
const babies: undefined = undefined;

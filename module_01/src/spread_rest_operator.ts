{
  // What is the spread operator?
  // The spread operator is a syntax that allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.

  // Spread operator example
  const numbers = [1, 2, 3, 4, 5];
  const moreNumbers = [6, 7, 8, 9, 10];
  const allNumbers = [...numbers, ...moreNumbers]; // Spread operator to combine arrays
  console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Spread operator with objects
  const person = { name: "John", age: 30 };
  const address = { city: "New York", country: "USA" };
  const personWithAddress = { ...person, ...address }; // Spread operator to combine objects
  console.log(personWithAddress); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

  // Spread operator with string
  const str = "Hello";
  const strArray = [...str]; // Spread operator to convert string to array of characters
  console.log(strArray); // Output: ['H', 'e', 'l', 'l', 'o']

  // Spread operator with Set
  const set1 = new Set([1, 2, 3]);
  const set2 = new Set([4, 5, 6]);
  const combinedSet = new Set([...set1, ...set2]); // Spread operator to combine sets
  console.log(combinedSet); // Output: Set(6) { 1, 2, 3, 4, 5, 6 }
  // Spread operator with Map
  const map1 = new Map([
    ["a", 1],
    ["b", 2],
  ]);
  const map2 = new Map([
    ["c", 3],
    ["d", 4],
  ]);
  const combinedMap = new Map([...map1, ...map2]); // Spread operator to combine maps
  console.log(combinedMap); // Output: Map(4) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }

  // What is the rest operator?
  // The rest operator is a syntax that allows us to represent an indefinite number of arguments as an array.
  //   Rest Operator
  function sum(...args: number[]) {
    // Rest operator to accept variable number of arguments
    return args.reduce((acc, curr) => acc + curr, 0);
  }
}

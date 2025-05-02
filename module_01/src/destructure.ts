{
  // Destructuring an object with a type annotation
  // This is a common pattern in TypeScript to ensure type safety

  const myInformation: {
    name: {
      firstName: string;
      lastName: string;
      middleName?: string;
    };
    contactName: string;
    age: number;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  } = {
    name: {
      firstName: "John",
      lastName: "Doe",
      middleName: "Smith",
    },
    contactName: "0134124212412",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
  };

  const {
    name: { firstName, lastName: nickName, middleName },
    contactName,
    age,
    address,
  } = myInformation as {
    name: {
      firstName: string;
      lastName: string;
      middleName?: string;
    };
    contactName: string;
    age: number;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };

  //   Destructuring an array with a type annotation
  // This is a common pattern in TypeScript to ensure type safety
  const myArray: [number, string, boolean] = [1, "Hello", true];

  const [myNumber, myString, myBoolean] = myArray as [number, string, boolean];

  console.log(myNumber); // Output: 1
  console.log(myString); // Output: Hello
  console.log(myBoolean); // Output: true

  console.log(firstName); // Output: John
  console.log(nickName); // Output: Doe
  console.log(middleName); // Output: Smith
  console.log(contactName); // Output: 0134124212412
  console.log(age); // Output: 30
  console.log(address); // Output: { street: '123 Main St', city: 'New York', state: 'NY', zipCode: '10001' }

  const myFriends: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

  const [myBestFriend, ...restOfFriends] = myFriends as string[];
  console.log(myBestFriend); // Output: Charlie
  console.log(restOfFriends); // Output: [ 'David', 'Eve' ]
}

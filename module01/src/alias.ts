{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    contactNumber?: string;
    address: string;
    gender?: string;
  };

  const student1: Student = {
    name: "John Doe",
    age: 20,
    contactNumber: "123-456-7890",
    address: "123 Main St, Springfield, USA",
  };
  const student2: Student = {
    name: "Jane Smith",
    age: 22,
    address: "456 Elm St, Springfield, USA",
  };

  type UserName = string;
  type UserAge = number;
  type isAdmin = boolean;

  type Add = (number1: number, number2: number) => number;

  const add: Add = (number1, number2) => number1 + number2;
}

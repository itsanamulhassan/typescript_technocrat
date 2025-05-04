{
  // Union types allow a variable to hold multiple types of values.
  type FrontendDeveloper = "Newbie" | "Intermediate" | "Expert";

  const newDeveloper: FrontendDeveloper = "Newbie";

  type BloodGroup = "A" | "B" | "AB" | "O";

  type User = {
    name: string;
    age: number;
    bloodGroup: BloodGroup;
    isMarried: boolean;
    isEmployed: boolean;
  };

  const user1: User = {
    name: "John",
    age: 30,
    bloodGroup: "B",
    isMarried: true,
    isEmployed: false,
  };

  // Intersection types allow a variable to hold multiple types of values.

  type Developer = {
    name: string;
    age: number;
    isMarried: boolean;
  };
  type Employee = {
    id: number;
    isEmployed: boolean;
  };
  type DeveloperEmployee = Developer & Employee;
  const developerEmployee: DeveloperEmployee = {
    name: "John",
    age: 30,
    id: 1,
    isEmployed: true,
    isMarried: false,
  };
}

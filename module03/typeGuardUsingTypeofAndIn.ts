{
  // typeof guard
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add(11, 11));
  console.log("11" + 11);

  // type in
  type User = {
    name: string;
    email: string;
  };
  type Admin = User & {
    role: "admin";
  };

  const getUser = (user: User | Admin) => {
    if ("role" in user) {
      console.log(user.role);
    } else {
      console.log(user.name);
    }
  };
}

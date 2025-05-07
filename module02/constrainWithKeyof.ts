{
  interface Vehicle {
    bike: string;
    car: string;
    cycle: string;
  }

  type User = "bike" | "car" | "cycle"; // did manually

  type UserAuto = keyof Vehicle;

  const user: User = "cycle";

  const userAuto: UserAuto = "car";

  const getValueByKey = <T1, T2 extends keyof T1>(obj: T1, key: T2) => {
    return obj[key];
  };

  const userNew = {
    name: "Ne",
    email: "mail@mail.com",
    roll: 20,
  };

  const result = getValueByKey(userNew, "email");
}

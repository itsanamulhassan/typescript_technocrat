{
  type a1 = string;
  type a2 = number;

  type a3 = a1 extends string ? true : false;

  type a4 = a1 extends number ? true : false;

  type Seakh = {
    name: string;
    age: number;
    email: string;
  };

  type CheckVehicle<T> = T extends keyof Seakh ? true : false;

  type HasBike = CheckVehicle<"name">;
}

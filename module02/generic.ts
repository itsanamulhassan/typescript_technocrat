{
  type GenericArray<T> = Array<T>;

  //   const Marks: number[] = [13, 14, 15, 16, 17, 18, 19, 20];
  //   const Marks: Array<number> = [13, 14, 15, 16, 17, 18, 19, 20];
  const Marks: GenericArray<number> = [13, 14, 15, 16, 17, 18, 19, 20];

  //   const Students: string[] = [
  //     "John Doe",
  //     "Jane Smith",
  //     "Alice Johnson",
  //     "Bob Brown",
  //   ];
  //   const Students: Array<string> = [
  //     "John Doe",
  //     "Jane Smith",
  //     "Alice Johnson",
  //     "Bob Brown",
  //   ];
  const Students: GenericArray<string> = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
  ];

  //   const PassedStudents: boolean[] = [false, true, true, false, true, false];
  //   const PassedStudents: Array<boolean> = [
  //     false,
  //     true,
  //     true,
  //     false,
  //     true,
  //     false,
  //   ];
  const PassedStudents: GenericArray<boolean> = [
    false,
    true,
    true,
    false,
    true,
    false,
  ];

  const users: GenericArray<{
    name: string;
    age: number;
  }> = [
    {
      name: "John Doe",
      age: 25,
    },
    {
      name: "Doe",
      age: 25,
    },
  ];

  type GenericTuple<T1, T2> = [T1, T2];
  const user: GenericTuple<string, number> = ["John Doe", 25];
}

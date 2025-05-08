{
  // Pick

  type Person = {
    name: string;
    age: number;
    address?: string;
    email?: string;
    phone: string;
  };

  type PersonName = Pick<Person, "name">; // { name: string }
  type PersonNameAndAge = Pick<Person, "name" | "age">; // { name: string; age: number }

  // Omit
  type PersonInfo = Omit<Person, "name" | "age" | "address">; // { name: string; age: number }

  //   Required
  type PersonPickRequired = Required<Person>;
  type PersonRequired = Required<Pick<Person, "address" | "name">>;

  // Partial;

  type PersonPartial = Partial<PersonPickRequired>;
  type PersonPickPartial = Partial<
    Pick<PersonPickRequired, "address" | "name">
  >;

  // ReadOnly

  type PersonReadOnly = Readonly<Person>;

  const personInformation: PersonReadOnly = {
    name: "hassan",
    email: "hello",
    address: "gello",
    phone: "then",
    age: 23,
  };

  // personInformation.address = 23;

  // Record

  // type KeyPair = {
  //   a: string;
  //   b: string;
  // };

  type KeyPairDynamic = Record<string, string>;

  type KeyPairDynamic1 = Record<string, unknown>;

  const keyPair: KeyPairDynamic1 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 44,
  };
}

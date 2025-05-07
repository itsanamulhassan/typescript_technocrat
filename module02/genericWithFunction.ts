{
  const createArray = (param: string): string[] => [param];

  const createArrayWithGenerics = <T>(param: T): T[] => [param];

  const result = createArray("Hello World");
  const result2 = createArrayWithGenerics<string>("Hello World");
  const result3 = createArrayWithGenerics<boolean>(true);
  interface User<T1 = null, T2 = undefined> {
    name: string;
    age: number;
    email: string;
    brand?: T2 | T1;
  }
  const result4 = createArrayWithGenerics<User<null, string>>({
    name: "hassan",
    age: 32,
    email: "itsanamulhassan@gmail.com",
  });

  console.log(result);
}

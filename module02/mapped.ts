{
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num: number) => num * 2);

  type Area = {
    height: string;
    width: string;
    depth: string;
  };

  //   type Box = {
  //     [key in "height" | "width" | "depth"]: number;
  //   };

  type Box = {
    [key in keyof Area]: number;
  };

  // Look up types in the documentation
  type Height = Box["height"]; // number
  type Width = Area["width"]; // string

  // Mapped with generics

  type GenericMapped<T> = {
    [key in keyof T]: T[key];
  };

  const area: GenericMapped<{ height: number; width: number; depth: number }> =
    {
      height: 1,
      width: 2,
      depth: 3,
    };
}

function add(number1: number, number2: number): number {
  return number1 + number2;
}

add(3, 4); // 7
add(3, "4"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

const addArrow = (number1: number, number2: number): number =>
  number1 + number2;

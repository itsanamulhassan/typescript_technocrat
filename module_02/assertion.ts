{
  // Type Assertion
  // Type assertion is a way to tell the compiler that you know better than it does

  let anything: any;
  // anything = "hello world";
  anything = 100;
  //   (anything as string).charAt(0); // "h"
  (anything as number).toFixed(2); // "100.00"

  // or
  const kg2Gm = (
    kg: number | string | undefined
  ): number | string | undefined => {
    if (typeof kg === "string") {
      return `${parseFloat(kg) * 1000} gm`;
    }

    if (typeof kg === "number") {
      return kg * 1000;
    }
  };

  const result1 = kg2Gm(200) as number; // 200000 gm
  const result2 = kg2Gm("200") as string; // 200000 gm

  const result3 = kg2Gm(undefined) as undefined; // undefined
}

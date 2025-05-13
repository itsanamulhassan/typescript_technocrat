{
  class Counter {
    static count: number = 0;
    // increment() {
    static increment() {
      //   this.count += 1;
      Counter.count += 1;
    }
    // decrement() {
    static decrement() {
      //   this.count -= 1;
      Counter.count -= 1;
    }
  }

  const instance1 = new Counter();
  const instance2 = new Counter();

  //   instance1.increment();
  //   instance1.increment();
  //   instance1.increment();
  //   instance2.decrement();

  Counter.decrement();
  Counter.increment();

  console.log(Counter.count);
  console.log(instance2);
}

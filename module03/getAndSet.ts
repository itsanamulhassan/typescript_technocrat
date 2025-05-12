{
  class Bank {
    constructor(
      private id: number,
      public name: string,
      private _balance: number
    ) {}
    set deposit(amount: number) {
      this._balance += amount;
    }
    get balance() {
      return this._balance;
    }
    set withdraw(amount: number) {
      this._balance -= amount;
    }
  }
  class Student extends Bank {
    constructor(
      id: number,
      name: string,
      _balance: number,
      private studentId: number
    ) {
      super(id, name, _balance);
    }
    get getInfo() {
      return this.name;
    }
  }

  const student1 = new Student(111, "jele", 500, 42423);
  student1.deposit = 300;
  student1.withdraw = 100;

  console.log(student1.balance);
}

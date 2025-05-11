{
  class Bank {
    constructor(
      readonly id: number,
      public name: string,
      //   private _balance: number
      protected _balance: number
    ) {}
    depositBalance(amount: number) {
      if (amount > 0) {
        this._balance += amount;
      }
    }
    withdrawBalance(amount: number) {
      if (this._balance >= amount) {
        this._balance -= amount;
      }
    }
  }

  class Student extends Bank {
    test() {
      this.depositBalance(200);

      // if we want to access the parent private property, we can use protected instead of private
      //   this._balance
    }
  }

  const user1 = new Bank(121312, "Sakib", 200);
  user1.depositBalance(200);
  user1.withdrawBalance(500);
  user1.withdrawBalance(300);
  console.log(user1);
}

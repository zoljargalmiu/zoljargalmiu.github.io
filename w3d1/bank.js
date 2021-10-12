class Bank {
  constructor() {
    this._accounts = [];
  }

  static _add = 0;

  static getAdd() {
    return Bank._add++;
  }

  addAccount() {
    const add = Bank.getAdd();
    const newAccount = new Account(add);
    this._accounts[add] = newAccount;

    return add;
  }

  addSavingsAccount(interest) {
    const add = Bank.getAdd();
    const newAccount = new SavingsAccount(add, interest);
    this._accounts[add] = newAccount;

    return add;
  }

  addCheckingAccount(overdraft) {
    const add = Bank.getAdd();
    const newAccount = new CheckingAccount(add, overdraft);
    this._accounts[add] = newAccount;

    return add;
  }

  closeAccount(number) {
    this._accounts[number] = null;
  }

  accountReport() {
    return this._accounts
      .filter((item) => item !== null)
      .map((item) => item.toString())
      .join("\n");
  }

  endOfMonth() {
    return this._accounts
      .filter((item) => item !== null)
      .map((item) => item.endOfMonth())
      .join("\n");
  }
}

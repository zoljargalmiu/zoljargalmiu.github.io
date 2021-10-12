describe("Account", () => {
  it("Getting the account information", () => {
    let acct = new Account(5753482000);
    assert.strictEqual(5753482000, acct.getNumber());
  });

  it("Getting the balance of the account", () => {
    let acct = new Account(5753482000);
    assert.strictEqual(0, acct.getBalance());
  });

  it("Checking deposit and withdraw transaction", () => {
    let acct = new Account(5753482007);
    acct.deposit(50000);
    acct.deposit(17000);
    acct.withdraw(45000);
    acct.deposit(3000);
    assert.strictEqual(25000, acct.getBalance());
  });

  it("Exception during invalid deposit", () => {
    let acct = new Account(470012087);
    assert.throws(
      () => {
        acct.deposit(0);
      },
      RangeError,
      "Deposit amount must be greater than zero"
    );
  });

  it("Exception during invalid withdraw", () => {
    let acct = new Account(470012087);
    assert.throws(
      () => {
        acct.withdraw(-10);
      },
      RangeError,
      "Withdraw amount must be greater than zero"
    );
  });

  it("Insufficient funds exception during withdraw", () => {
    let acct = new Account(470012087);
    assert.throws(
      () => {
        acct.withdraw(5753482000);
      },
      Error,
      "Insufficient funds"
    );
  });
});

describe("Savings Account", () => {
  it("Report of endOfMonth()", () => {
    let acct = new SavingsAccount(5753482005, 20);
    acct.deposit(3500000);
    assert.strictEqual(
      "Interest added to the savings account 5753482005: balance 3500000 interest: 700000",
      acct.endOfMonth()
    );
  });

  it("Setting interest to the savings account", () => {
    let acct = new SavingsAccount(5753482000, 12);
    acct.setInterest(15);
    assert.strictEqual(15, acct.getInterest());
  });

  it("Calculating interest for savings account", () => {
    let acct = new SavingsAccount(470012089, 15);
    acct.deposit(458000);
    assert.strictEqual(68700, acct.addInterest());
    assert.strictEqual(526700, acct.getBalance());
  });
});

describe("Checking Account", () => {
  it("Setting over draft limit to the checking account", () => {
    let acct = new CheckingAccount(5753482000, 150000);
    acct.setOverdraftLimit(300000);
    assert.strictEqual(300000, acct.getOverdraftLimit());
  });

  it("Exception during set over draft limit", () => {
    let acct = new CheckingAccount(5753482000, 30000);
    assert.throws(
      () => {
        acct.setOverdraftLimit(-152000);
      },
      RangeError,
      "Overdraft limit must be equal or greater than zero"
    );
  });

  it("Checking deposit and withdraw transaction for checking account", () => {
    let acct = new CheckingAccount(5753482000, 580000);
    acct.withdraw(40000);
    acct.deposit(190000);

    assert.strictEqual(150000, acct.getBalance());
  });

  it("Insufficient funds exception during withdraw", () => {
    assert.throws(
      () => {
        new CheckingAccount(5753482000, 150000).withdraw(5753482000);
      },
      Error,
      "Insufficient funds"
    );
  });

  it("Report of endOfMonth()", () => {
    assert.strictEqual(
      "CheckingAccount 5753482000: balance 0: overdraft limit 580000",
      new CheckingAccount(5753482000, 580000).endOfMonth()
    );
  });
});

describe("Bank", () => {
  it("Add account to the bank", () => {
    let bank = new Bank();
    bank.addAccount();
    assert.strictEqual(new Account(0).toString(), bank.accountReport());
  });

  it("Add savings account to the bank", () => {
    let bank = new Bank();
    bank.addSavingsAccount(1);
    assert.strictEqual(
      new SavingsAccount(1, 1).toString(),
      bank.accountReport().split("\n")[0]
    );
  });

  it("Add checking account to the bank", () => {
    let bank = new Bank();
    bank.addCheckingAccount(1);
    assert.strictEqual(
      new CheckingAccount(2, 1).toString(),
      bank.accountReport().split("\n")[0]
    );
  });

  it("Closing the account", () => {
    let bank = new Bank();
    bank.addAccount();
    bank.closeAccount(1);
    assert.strictEqual(undefined, bank.accountReport().split("\n")[1]);
  });
});

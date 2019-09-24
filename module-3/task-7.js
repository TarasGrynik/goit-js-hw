/* eslint-disable no-restricted-syntax */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let idTransaction = 0;

const account = {
  balance: 0,
  transaction: [],
  deposit(amount) {
    idTransaction += 1;
    this.balance += amount;
    this.addTransaction({ id: idTransaction, type: Transaction.DEPOSIT, amount });
  },
  withdraw(amount) {
    idTransaction += 1;
    if (amount > this.balance) return console.log(`Недостатньо грошей на рахунку!`);
    this.balance -= amount;
    this.addTransaction({ id: idTransaction, type: Transaction.WITHDRAW, amount });
  },
  addTransaction(transaction) {
    this.transaction.push(transaction);
  },

  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    const transactionById = [];
    for (const key of this.transaction) {
      if (key.id === id) {
        transactionById.push(key);
      }
    }
    return transactionById[0];
  },
  getTransactionTotal(type) {
    const typeTransaction = [];
    for (const key of this.transaction) {
      if (key.type === type) {
        typeTransaction.push(key);
      }
    }

    return typeTransaction;
  },
};


account.deposit(111);
account.deposit(111);
account.withdraw(41);
account.deposit(111);
account.withdraw(41);
account.deposit(111);
account.withdraw(41);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));

console.log(account.transaction);
console.log(account.getTransactionTotal('withdraw'));

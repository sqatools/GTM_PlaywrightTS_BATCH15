//  when one class contains abstract method, then that class is known as abstract class.

abstract class BankAccount{
    balance: number
    constructor(balance: number) {
         console.log("Initial Balance :", balance)
        this.balance = balance
    }

    deposit(amount: number): void {
        this.balance += amount
        console.log("Amount credited to bank :", amount)
    }

    // abstract has to impliment in the child class
    abstract withdrawl(amount: number): void
}

class SavingAccount extends BankAccount {
    constructor(balance: number) {
        super(balance)
    }

    withdrawl(amount: number): void {
        this.balance -= amount
        console.log("Amount debited from bank:", amount)
    }

    ShowBalance(){
       console.log("Total Balance :", this.balance)
    }
}
const SObject = new SavingAccount(5000)
SObject.deposit(10000)
SObject.ShowBalance()
SObject.withdrawl(8000)
SObject.ShowBalance()
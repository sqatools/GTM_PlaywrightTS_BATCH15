// interface is purely abstract class, where we declare the method variables name
// has to impliment in the child class.

interface BankAccount{
    balance: number
    deposit(amount: number): void
    withdrawl(amount: number): void
}

class SavingAccount implements BankAccount {
    balance: number
    constructor(balance: number) {
        console.log("Initial Balance :", balance)
        this.balance = balance
    }

    deposit(amount: number): void {
        this.balance += amount
        console.log("Amount credited to bank:", amount)
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

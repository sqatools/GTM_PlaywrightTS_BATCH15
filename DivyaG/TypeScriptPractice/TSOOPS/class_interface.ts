//Interface is an abstract class, where we can declare the method variables
//has to implement in the child class

interface BankAccount{

    balance: number
    deposit(amount:number):void
    withdrawal(amount:number):void
}

class SavingAccount implements BankAccount{
    balance:number
     constructor(balance: number){
    console.log("Initial balance:",balance)
    this.balance = balance
     }
deposit(amount: number): void {
    this.balance+=amount
    console.log("Amount credited to balance",amount)
}
withdrawal(amount: number): void {
    this.balance-=amount
    console.log("Amount debited from account",amount)
}
showBalance(){
    console.log("Total balance:",this.balance)
}
}

const obj1=new SavingAccount(5000)
obj1.deposit(5000)
obj1.showBalance()
obj1.withdrawal(2000)
obj1.showBalance()

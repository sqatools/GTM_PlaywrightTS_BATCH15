//When one class contains abstract method it is called abstract class
//Interface is an abstract class, where we can declare the method variables
//has to implement in the child class

abstract class BankAccount{

    balance: number
    constructor(balance: number){
    this.balance=balance
    console.log("Initial balance:",this.balance)
    }

    deposit(amount:number):void{
         this.balance+=amount
    console.log("Amount credited to balance",amount)
    }
    //Implement abstract method in child class
    abstract withdrawal(amount:number):void
}

class SavingAccount extends BankAccount{
    constructor(balance: number){
        super(balance)
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

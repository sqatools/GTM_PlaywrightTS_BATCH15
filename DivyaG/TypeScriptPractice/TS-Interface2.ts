interface bankAccount {
    userName: string,
    age: number,
    address: string,
    emailId: string,
    phoneNumber: number,
    accountNumber: number,
    balance: number
}

var DivyaAccountBalance: bankAccount = {

    userName: "Divya",
    age:34,
    address:"Hyderabad",
    emailId:'divya@gmail.com',
    phoneNumber: 9980777689,
    accountNumber: 40006789909,
    balance: 500000
}

console.log(DivyaAccountBalance)

var HarishAccountBalance: bankAccount = {

    userName: "Harish",
    age:34,
    address:"Bangalore",
    emailId:'harish@gmail.com',
    phoneNumber: 9980777677,
    accountNumber: 40006789977,
    balance: 900000
}

console.log(HarishAccountBalance)
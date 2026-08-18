interface BankAccount {
    username : string
    phone: number,
    address: string, 
    accountNumber: string,
    balance: number
}


var RahulAccount:BankAccount = {
    username: "Rahul",
    phone: 4656456,
    address: "Pune, Balewadi", 
    accountNumber: '92354345345',
    balance: 5000000
}

console.log(RahulAccount.username)
console.log(RahulAccount.balance)


var ShrikanthAccount:BankAccount = {
    username: "Shrikanth",
    phone: 9999898989,
    address: "Bangalore BTM Layout", 
    accountNumber: '44546556465',
    balance: 20000000909
}


console.log(ShrikanthAccount)
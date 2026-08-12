interface data {
    username : string
    phone: number,
    address: string 
}


//User data should same as interface

const userData: data = {
    username : "Rekha",
    phone: 5435435435,
    address: "Mumbai boriwali" 

}

console.log(userData)


const userData2: data = {
    username : "Rahul",
    phone: 6665575566,
    address: "Pune boriwali" 
}

console.log(userData2)

console.log("-------------------")
userData2.username = "Rohit"
console.log(userData2)
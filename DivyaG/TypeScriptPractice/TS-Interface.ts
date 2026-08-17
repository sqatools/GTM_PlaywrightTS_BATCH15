interface data {
    name: string,
    phone: number,
    address: string

}

//user data should same as interface
const userData1: data={
    name : "Divya",
    phone: 99780,
    address: "hyderabad"
}
console.log(userData1)

const userData2: data={
    name : "Harish",
    phone: 997802,
    address: "hyderabad"
}
console.log(userData2)

// userData2.email={'div@gmail.com'}--throws an error because email is not declared in the interface


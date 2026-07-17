//object

let user = {
  name: "Deepesh",
  age: 25,
  isActive: true
};

//array
let fruits = ["apple", "banana", "mango"];

//function
function greet() {
  return "Hello!";
}


let user1 = {
  name: "Deepesh",     // string
  age: 25,             // number
  isLoggedIn: true,    // boolean
  balance: 1000000000000000000n, // BigInt
  id: Symbol("id"),    // symbol
  hobbies: ["coding", "music"], // array
  address: null        // null
};
console.log(typeof user1);
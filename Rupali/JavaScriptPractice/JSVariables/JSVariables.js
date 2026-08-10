//Variable declaration
let name = "Rupali";
var age = 25;
const isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

var a=20;
console.log("Value of a:", a);

var a=50;
console.log("Value of a after redeclaration:", a);

a=100;
console.log("Value of a after reassignment:", a);


var a=200;
console.log("Value of a after redeclaration again:", a);


console.log("---------------------------------------------------");



// let variable declaration
let b=20;
console.log("Value of b:", b);
let b =25;
console.log("Value of b after redeclaration:", b);

b= 30;
console.log("Value of b after reassignment:", b);

let b=40;
console.log("Value of b after redeclaration again:", b);

console.log("---------------------------------------------------");

// block scope example

if (true) {
var x = 10;
let y = 20;
console.log("Value of x:", x);
console.log("Value of y:", y);
}
console.log("Value of x outside block:", x); // Accessible
console.log("Value of y outside block:", y); // Not Accessible, will throw an error

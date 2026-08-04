// npm install prompt-sync

//const prompt = require('prompt-sync')();
//const name=prompt("Enter your Name:  ")
//console.log("Name:", name)


const prompt = require('prompt-sync')();
const numb = Number(prompt("Enter the number to find the factorial value: "));
let fact = 1;
for (let i = numb; i >= 1; i--) {
    fact *= i;
}
console.log("Factorial Value of num", numb, "is:", fact);

//When array and string use for loop and for of loop and for in loop
//for loop is used to iterate over the array and string and for of loop is 
// used to iterate over the array and string and for in loop is used to iterate
//  over the object.
//  example of for loop
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

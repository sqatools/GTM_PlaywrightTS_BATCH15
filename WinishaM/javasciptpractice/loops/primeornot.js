// Check if a number is prime or not
/* const prompt = require('prompt-sync')();
const num = parseInt(prompt("enter number:"))
let isPrime = true;
for  {
console.log("even no.")
}
else {
console.log("odd no.")

}
*/

//to check whether a number is prime or not by using arrow function
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

//write a arrow program to sum of all even numbers from 1 to 30
const sumOfEvens = () => {
  let sum = 0;
  for (let i = 2; i <= 30; i += 2) {
    sum += i;
  }
  return sum;
};

//write an arrow function to check if a number is prime or not.
const isPrime = (num) => {
  if (num <= 1) return false;

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};


console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(13));  // true
console.log(isPrime(1));   // false

console.log("##############################")

//write arrow function to remove duplicate numbers from a string of numbers separated by spaces.
const removeDuplicateNumbers = (str) =>
  [...new Set(str.split(" ").map(Number))].join(" ");

console.log(removeDuplicateNumbers("1 2 3 2 4 1 5"));
// Output: "1 2 3 4 5"

console.log("##############################")

//Write a arrow function program to do a sum of all even numbers from 1 to 30.

//write a arrow function to create a calculate add, sub, mul, division

console.log("##############################")
//write a arrow function to find sum of all value that are divisible by 3 and 5 between 1 to 100
var sumDivisibleBy3And5 = () => {
  var sum = 0;

  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumDivisibleBy3And5()); // 315
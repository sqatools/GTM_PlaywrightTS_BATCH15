//Write a arrow function to check given number is prime or not
//simple way to check prime number
/*const isPrime = (num) => {
    if (num <= 1) return false; // numbers less than or equal to 1 are not prime    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
            console.log(num+" is not a prime number");
        }
    }
    return true; 
        console.log(num+" is a prime number");
}         

//write a arrow function to check sum of all even numbers betweeen 1 to 30
var sumOfEvens = () => {
    var sum = 0;

    for (var i = 1; i <= 30; i++) {
        if (i % 2 === 0) {
            sum += i;
        }       
    }
    return sum;
    console.log("Sum of all even numbers between 1 to 30 is: " + sum);
}*/
//write a arrow function program to find sum of all values are divisible by 3 and 5 between 1 to 100
var sumDivisibleBy3And5 = () => {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log("Sum of all values divisible by 3 and 5 between 1 to 100 is: " + sumDivisibleBy3And5());

//write a arrow function to calculate addition,subtraction,multiplication and division of two numbers
var calculateOperations = (num1, num2) => {
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = num1 / num2;
    return { addition, subtraction, multiplication, division };
};

var result = calculateOperations(10, 5);
console.log("Addition: " + result.addition);
console.log("Subtraction: " + result.subtraction);
console.log("Multiplication: " + result.multiplication);
console.log("Division: " + result.division);

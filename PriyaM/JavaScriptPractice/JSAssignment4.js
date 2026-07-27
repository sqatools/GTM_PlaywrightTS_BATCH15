

//Q1 write arrow function to check given number is prime or not
const isPrime = (num) => {
    for (var i=2; i<num;i++) {
        if(num%i === 0) {
            return false
        }
    }
    return true
}
console.log("Is 7 prime? :", isPrime(7)) // true
console.log("Is 10 prime? :", isPrime(10)) // false

//Q2 write a arrow function to removed duplicate numbers from string.
const removeDuplicateLetters = (str) => {
    return [...new Set(str)].join("")
}
console.log("Remove duplicate letters from 'hello world' :", removeDuplicateLetters("hello world")) // "helo wrd"

//Q3 write a arrow program to sum of all even number from 1to 30
const EvenSum = () => {
    var sum=0
    for (let i = 1; i<=30; i++) {
        if(i%2 === 0) {
            sum += i
        }
    } return sum
}
console.log("The sum of even numbers from 1 to 30 is :", EvenSum())

//Q4 write a arrow function create a calculate add, multi , subtraction, division
const Calculater = (num1, num2, operation) => {

    if (operation === "add") {
        return  num1 + num2
    } else if (operation === "multi") {
        return num1 * num2
    } else if (operation === "subtraction") {
        return num1 - num2
    } else if (operation === "division") {
        return num1 / num2
    } else {
        console.log("Invalid operation")
    }
}
console.log("the calculator function of 2 numbers is :", Calculater(10,20,"division"))

//Q5 write a arrow function to find sum all value are divisible 3 and 5 between 1 to 100
const sumDivisibleBy3and5 = () => {
    var sum = 0
  for (i=1; i<=100; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log(i)
            sum += i
        }
  } return sum
}
console.log (" Sum of all values divisible by 3 and 5 between 1 to 100 is :",sumDivisibleBy3and5()) 
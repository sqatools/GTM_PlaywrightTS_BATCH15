// write arrow function to check whether given no is prime or not
// write a arrow function to remove duplicate numbers from string
// write a arrow function to sum all even numbers from  1 to 30.
// P4 : write a arrow function to create a calculator which can perform addition, subtraction, multiplication and division operations.
// P5 : write a arrow function to find sum of all values are divisible by 3 and 5 from 1 to 100.

// P1 : write arrow function to check whether given no is prime or not
PrimeCheck = (num) => {
    var prime = true // true
    for (var i=2; i<num; i++) { // (2, 6)
        if (num%i == 0) { // 5%2 == 0, 5%3== 0, 5%4 == 0
            prime = false
            console.log("This is not an prime number:", num)
            break 
        }
    }
    if (prime) {
        console.log("This is a prime number:", num)
    }
}

PrimeCheck(16)


// Program 2 :
// P2 : write a arrow function to remove duplicate numbers from string
RemoveDuplicates = (str) => {
    var arr = str.split(",")
    var uniqueArr = [...new Set(arr)]
    return uniqueArr.join(",")
}
console.log(RemoveDuplicates("1,2,3,4,5,1,2,3"))

// Program 3 :
// write a arrow function to sum all even numbers from  1 to 30.
SumEvenNumbers = (num) => {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};
console.log(SumEvenNumbers(8));

 // P5 : write a arrow function to find sum of all values are divisible by 3 and 5 from 1 to 100.
DivisibleBy3And5Sum = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }   
    }
    return sum;
};
console.log(DivisibleBy3And5Sum(30));

// P4 : write a arrow function to create a calculator which can perform addition, subtraction, multiplication and division operations.  

Calculator = (operation, a, b) => { 
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: Division by zero";
        }   
    } else {
        return "Error: Invalid operation";
    }
};
console.log("Addition of 5 and 3: " + Calculator("add", 5, 3));
console.log("Subtraction of 10 and 3: " + Calculator("subtract", 10, 3));
console.log("Multiplication of 5 and 3: " + Calculator("multiply", 5, 3));
console.log("Division of 10 and 0: " + Calculator("divide", 10, 0));
console.log("Test123" + Calculator("test", 10, 5));

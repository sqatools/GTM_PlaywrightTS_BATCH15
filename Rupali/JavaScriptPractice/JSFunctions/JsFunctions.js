// write program to check given number is prime or not using arrow function
var sumEvenNumbers = (x) => {
    var sum = 0;
    for (var i = 2; i <= x; i += 2) {
        sum += i;
    }
    return sum;
}

var result = sumEvenNumbers(30);


console.log("sum of all even numbers from 1 to 30 is:", result );
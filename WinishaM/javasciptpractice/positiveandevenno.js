//Check whether a number is positive and even.
function isPositiveAndEven(num) {
    return num > 0 && num % 2 === 0;
}   
console.log(isPositiveAndEven(4)); // true
console.log(isPositiveAndEven(-2)); // false
console.log(isPositiveAndEven(3)); // false
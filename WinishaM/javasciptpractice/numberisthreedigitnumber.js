//Check whether a number is a three-digit number.
function isThreeDigitNumber(num) {
    return num >= 100 && num <= 999;
}
console.log(isThreeDigitNumber(123)); // true
console.log(isThreeDigitNumber(12)); // false
console.log(isThreeDigitNumber(1234)); // false
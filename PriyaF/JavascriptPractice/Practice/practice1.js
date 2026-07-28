var sumEvenNumbers = (num1, num2) => {
    var sum = 0;

    for (var i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }

    return sum
}

console.log("Sum of evennumbers from 1 to 30: ", + sumEvenNumbers(1, 30))

///////
var removeDuplicateNumbers = (str) => {
    var result = "";

    for (var char of str) {
        if (!result.includes(char)) {
            result += char
        }
    }

    return result
}

console.log(removeDuplicateNumbers("112233445566"));
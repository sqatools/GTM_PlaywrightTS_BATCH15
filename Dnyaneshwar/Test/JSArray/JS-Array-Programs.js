//Q1 : write a program to find out the max value from array.
var arr2 = [20, 30, 100, 101, 15, 27]
var maxVal = 0
for (var val of arr2) { // 20, 30, 100, 10, 15
    if(val > maxVal) { // 20 > 0 | 30 > 20 | 100 > 30 | 10 > 100 | 15 > 100 | 27 > 100
        maxVal = val // 20, 30, 100
    } else {
        continue
    }

}
console.log("Max value:", maxVal)

console.log("#######################################")
//Q2 : write a program to shift all positive left side and negative at right side.
var arr3 = [-3, 16, 18, -2, 27, -12, 45, -78]
var output = []
for(var val of arr3) {
    if (val > 0) {
        // add value at begining of array
        output.unshift(val)
    } else {
        // add value at the end of the array.
        output.push(val)
    }
}

console.log(output)
/*
[
  45, 27,  18,  16,
  -3, -2, -12, -78
]
*/

console.log("#######################################")
// Q3 : program to find out the second max value.
var array1 = [30, 50, 60, 2, 155, 4, 6, 200]
var maxVal = 0
var secMax = 0

for (var num of array1) { // 30, 50, 60
    if(num > maxVal) { // 30 > 0 | 50 > 30 | 60 > 50 | 2 > 50
        secMax = maxVal // 0, 30, 50
        maxVal = num // 30, 50, 60
    } else if (num > secMax && num < maxVal) {
        secMax = num
    }
}

console.log("Max value :", maxVal)
console.log("Second Max value :", secMax)

console.log("#######################################")
//Q4 write a program to get value from array which are primt number.
var primeValues = [4, 6, 7, 11, 13, 16, 25, 29]

//Q5: write a program to get combination of two values who sum is 10
var array2 = [4, 6, 7, 12, 9, 3, -2, 8, 2, 1] 

//Q6: write a program to print square of even values and cube of odd values.
var array3 = [4, 7, 9, 3, 6, 12, 15]

// Q7: write a program to remove duplicate value.
var array4 = [7, 8, 2, 5, 7, 5, 4, 8]
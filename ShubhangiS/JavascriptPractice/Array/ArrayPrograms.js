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





// 4. Program to get values from array which are prime number.

var input= [4,6,7,11,13,16,25,29]


 for(var num of input) {
    var prime = true
 for(var i=2; i<num; i++) {
    if (num%i == 0) {
        prime=false
        break // it will terminate the loop execution
    }
}

if (prime == true) {
    console.log("This is prime number :", num)
} else {
    console.log("This is not an prime number:", num)
}
 }

 // 5. write a program to print square of even number and cube of odd number from given array.

var input= [4,7,9,3,6,12,15]
var result=[]
for(var num of input) {
    if(num%2==0) {
        result.push(num**2)
    } else {
        result.push(num**3)
    }
}
console.log("Result:", result)

// 6. Write a program to remove duplicate values from array

var arr4=[7,8,2,5,7,5,4,8]

var output=[]
for(var num of arr4) {
    if(!output.includes(num)) {         
        output.push(num)
    }   

}
console.log("After removing duplicate values from array:", output)

// 7. Write a program to get combination of two values whose sum is 10 from given array.

var array2 = [4, 6, 7, 12, 9, 3, -2, 8, 2, 1]
for(var i=0; i<array2.length; i++) {

    for(var j=i+1; j<array2.length; j++) {
        if(array2[i]+array2[j]==10) {
            console.log("Combination of two values whose sum is 10:", array2[i], array2[j])
        }
    }
}


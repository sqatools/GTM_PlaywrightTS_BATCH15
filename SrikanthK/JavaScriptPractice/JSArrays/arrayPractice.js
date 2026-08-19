//Q1. Write a program to find out the max value from an Array



// Prime no from given array

array1 = [3,7,11,13,90,117, 137,999,1000]
for (var val of array1) { // num=5
    var prime = true // true
    for (var i=2; i<=val/2; i++) { 
        if (val%i == 0) {  
            prime = false
            break 
        }
    }
    if (prime) {
        console.log(val)
    }
}

// Q3 :  write a program to get combination of two values whose sum is 10
var array2 = [4, 6, 7, 12, 9, 3, -2, 8, 2, 1];
console.log('************');

for (var i = 0; i < array2.length; i++) {
    for (var j = i + 1; j < array2.length; j++) {
        if (array2[i] + array2[j] === 10) {
            console.log(array2[i]);
            console.log(array2[j]);
            break;
        }
    }
}


// Q3 : write a program to print square of even valuesa nd cube of odd values

var array3 = [4,7,9,3,6,12,15]
 
//Q4 : write a program to remove duplicate values from given array
var array4 = [7,8,2,5,7,5,4,8]
var newarray = [];

for (var i=0;i<array4.length;i++) {
    if (!newarray.includes(array4[i])) {
        newarray.push(array4[i])
    }
}

console.log(newarray)
            
            
 


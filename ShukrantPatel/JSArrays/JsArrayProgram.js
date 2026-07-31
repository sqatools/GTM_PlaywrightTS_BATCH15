// write a program to get value from array which are prime number 
var primeValues=[4,6,7,11, 13, 16, 25, 29]

var primes = [];
var k = 0;

for (var i = 0; i < primeValues.length; i++) {
    var isPrime = true;

    for (var j = 2; j < primeValues[i]; j++) {
        if (primeValues[i] % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (primeValues[i] > 1 && isPrime) {
        primes[k] = primeValues[i];
        k++;
    }
}

console.log(primes);


console.log("##############################")
//Write a program to get a combination of 2 values whose sum is 10 
var array2=[4,6,7,1,9,3,-2,8,2,1]
var target = 10;

for (var i = 0; i < array2.length; i++) {
    for (var j = i + 1; j < array2.length; j++) {
        if (array2[i] + array2[j] === target) {
            console.log(array2[i] + " + " + array2[j] + " = " + target);
        }
    }
}
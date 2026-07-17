// Javascript Loop : when we want execute a certain condition n number of times
//then  we can user loop

// for loop

// https://sqatools.in/javascript-loop/


for(var i=0; i<=10; i++) {
    console.log(i)
}

console.log("###################################")
// apply for loop with reverse values.

for(var i=5; i>=0; i--) {
    console.log(i)
}


console.log("###################################")
// table of given value
var num = 30
for(var i=1; i<=10; i++) {
    console.log(i, "*", num, ":", i*num)
    setTimeout(1000)
}


console.log("###################################")
console.log("get factorial of given values")
// 5 = 5*4*3*2*1
//var numA = 7
const prompt = require('prompt-sync')();
const numA = prompt("Enter your number:")
var fact=1
for (var i=Number(numA); i>0; i--) {
    fact *= i 
} 


console.log("###################################")
console.log("Factorial output :", fact)

// apply loop on string datatye
var str1 = "Hello JS"
for(var val of str1) {
    console.log(val)
}

var array1 = [5, 7, 3, 4]
for (var n of array1) {
    console.log(n)
}


var s3 = ["Hello", "js"]
for (var a of s3)  {
    console.log(a)
}
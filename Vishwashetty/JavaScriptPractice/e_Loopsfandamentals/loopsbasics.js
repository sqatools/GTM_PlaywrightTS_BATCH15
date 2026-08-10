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
// var num = 30
// for(var i=1; i<=10; i++) {
//     console.log(i, "*", num, ":", i*num)
//     setTimeout(1000)
// }


console.log("###################################")
console.log("get factorial of given values")
// 5 = 5*4*3*2*1
//var numA = 7
/*
const prompt = require('prompt-sync')();
const numA = prompt("Enter your number:")
var fact=1
for (var i=Number(numA); i>0; i--) {
    fact *= i 
} 
*/

console.log("###################################")
//console.log("Factorial output :", fact)

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

console.log("###############################")
// write a program to check given number is prime or not.
// prime number :  the number can devide one and with same.

var num=17
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


console.log("###############################")
// Nested for loop : In nested for loop, for one single value of outer loop
// entire inner will be executed.
/*
// outer loop
for (condition) {
   // inner loop  
    for (condition) {
        code block
        }
}

*/


for(var i=1; i<=5; i++) { //i = 1, 2, 3
    console.log("Addresss :i:", i)
    for (var j=1; j<=3; j++) { // j = 1, 2, 3
         console.log("Package :j:", j)
    }
    console.log("----")
}


console.log("##################################")
// get list of all prime number from 1to 100
for (var num=1; num<=100; num++) { // num=5
    var prime = true // true
    for (var i=2; i<num; i++) { // (2, 6)
        if (num%i == 0) { // 5%2 == 0, 5%3== 0, 5%4 == 0
            prime = false
            break 
        }
    }
    if (prime) {
        console.log(num)
    }
}


console.log("##################################")
// get list of all prime number from 1to 100
var arr1 = [5, 6, 7, 12, 11, 45, 17, 89]
for (var num of arr1) { // num=5
    var prime = true // true
    for (var i=2; i<num; i++) { // (2, 6)
        if (num%i == 0) { // 5%2 == 0, 5%3== 0, 5%4 == 0
            prime = false
            break 
        }
    }
    if (prime) {
        console.log(num)
    }
}



console.log("##################################")
// while loop : when the number of occurrences is not fixed, then we should use while loop
// for loop: when the number of occurrences is fixec, then we can user for loop
/*
while(condition) {
    code block
}

*/

var n1 = 0
while (n1<=10) {
    console.log(" value of n :", n1)
    n1 += 1 // n1 = n1 + 1
}


console.log("infinite loop")
var k1=0
while (true) {
    k1 += 1;
    console.log(k1)
    if (k1 == 1000) {
        break
    }
}



console.log("##################################")
// do while loop : this type loop is required when we want to execute atleast once.
var m=21
do {
    console.log(m)
    m += 1
} while(m<=20)


// check do while condition for login program.
var db_user = "Admin"
var db_password = "admin123"
var ActiveStatus = true

var username = "Admin"
var password = "admin123"

var num = 3

do {
    if (db_user == username && db_password == password) {
        console.log("Login Successful")
    } else {
        console.log("Login Failed")
        ActiveStatus = false
    }

    if (ActiveStatus) {
        for (var i = 1; i<=10; i++) {
            console.log(i, "*", num, ":", i*num)
        }
    
    }
    num += 1

    if (num == 10) {
        break
    }
} while(ActiveStatus)
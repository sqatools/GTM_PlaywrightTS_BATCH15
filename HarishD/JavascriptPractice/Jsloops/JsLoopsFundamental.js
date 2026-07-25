//Loops : when we want to execute a certain condition  "n" number times then we can use loops

// https://sqatools.in/javascript-loop/


//for loop
for (var i = 0; i <= 10; i++) {
    console.log("value of i is :", i)
}
console.log("#######################")

for (var i = 10; i >= 0; i--) {
    console.log("value of i is :", i)
}

var num = 4
for (var i = 1; i <= 10; i++) {
    console.log(num, " * ", i, "=", num * i)
}

console.log("#######################")

console.log("get the factorial of a number")
var fact = 1
for (var i = 6; i > 0; i--) {
    fact *= i   //fact = i*fact    
    /*fact = 6*1=6
    fact =6*5=30
    fact=30*4=120
    fact=120*3=360
    fact=360*2=720
    fact=720*1=720   */

}
console.log("get the factorial of a number:", fact)


console.log("#######################")
const prompt = require("prompt-sync")();
const numA = prompt("enter the values: ");
var fact = 1
for (var i = Number(numA); i > 0; i--)    // 

{
    fact *= i   //fact = i*fact    

}
console.log("get the factorial of a number:", fact)


console.log("#######################")
var str = "Hello World"
for (var word of str) {
    console.log(word)
}

var arr1 = [2, 4, 6, 8, 9]
for (var num of arr1) {
    console.log(num)
}

var arr2 = ["hello", "world"]
for (var a of arr2) {
    console.log(a)
}

//write a program to check given number is prime or not

var num = 11
var prime = true
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        prime = false
        break
    }
}
if (prime) {
    console.log("Given num is prime :", num)
}
else {
    console.log("given num is not prime :", num)
}


//Nested for loop : In nested for loop, one single value of outer loop entire inner loop will be executed
/*
// outer loop
for (condition) {
     // inner loop
   for(condition)
   {
    code block
   }
}
   */

//write a proogram to check prime number form 1to 100

for (var num = 2; num <= 100; num++) {     //for suppose n=5
    var prime1 = true  //suppose we though thet 5 is prime
    for (var i = 2; i < num; i++) {          //2,5
        if (num % i == 0) {       // 5%2, 5%3,5%4  all are flase so it does notventire in to loop 
            prime1 = false
            break
        }
    }
    if (prime1) {
        console.log("Given num is prime :", num)
    }
}


console.log("#######################")
for (var i = 1; i <= 5; i++) {
    console.log("address of  i is :", i)
    for (var j = 1; j <= 3; j++) {
        console.log("package of  j is :", j)
    }
    console.log("---------------------------------")
}


console.log("###########################")

var arr1 = [5, 8, 12, 15, 19, 23, 43];

for (var value of arr1) {

    var prime1 = true;

    for (var i = 2; i < value; i++) {

        if (value % i == 0) {
            prime1 = false;
            break;
        }

    }

    if (prime1) {
        console.log("Given num is prime :", value);
    }

}

//while loop :when number of occurance are not fixed , we can use while loop
//for loop : when number of occurance are fixed we can use for loop


/*
while(condition)
{
code block
}
*/

var n1 =0
while (n1<=10)
{
    console.log("print the number of n1 :" , n1)
    n1+=1
}

console.log("infinate loop")
var k1 =0
while (true)
{
    k1+=1
    console.log(k1)
}


//do while loop : this type of loop is required when we wan to execute atleast once

var m=2
do
{
    console.log(m)
    m+=1
}while(m<=20)
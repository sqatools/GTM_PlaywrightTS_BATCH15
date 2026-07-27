// if condition is a considtion which is used to check the condition and if the condition 
// is true then it will execute the block of code inside the if statement
/*
var a=10
var b=20
if(a<b){
    console.log("a is less than b")
}

// true and false are boolean values which are used to check the condition
var c=30
var d=40    
if(c>d){
    console.log("c is greater than d")
}else{
    console.log("c is less than d")
}

var a=36
console.log("Value of a",a)
if(a%3==0){
    console.log("Even:",a)
}else{
    console.log("Odd:",a)
}
*/

let num = 13;
let prime = true; // 🚩 Assume it IS prime (raise the flag)
for (let i = 2; i < num; i++) 
    {  
    if (num % i === 0)
        { 
          // % means "remainder". 0 remainder = divides evenly   
    prime = false;     
          //   // ❌ Not prime! Lower the flag  
            break;              
          //  // 🛑 Stop checking, no point continuing 
        }}
if (prime)
{  console.log(num + " is prime");

} else
{  console.log(num + " is NOT prime");

}


/// Nested if else condition is a condition which is used to check the condition and 
// if the condition
// is true then it will execute the block of code inside the 
// if statement and if the condition is false then it will check the
//  next condition and if the next condition is true then it will execute 
// the block of code inside the if statement and if the next condition is 
// false then it will check the next condition and so on until it finds a 
// true condition or until it reaches the end of the conditions.
//Say we have 3 condition -> Then if one conditions  is true then it will execute 
// the block of code inside the if statement and if the condition is false then it
//  will check the next condition and if the next condition is true then it will 
// execute the block of code inside the if statement and if the next condition is 
// false then it will check the next condition and so on until it finds a
//  true condition or until it reaches the end of the conditions.



// Ternary operator is a condition which is used to check the condition and 
// if the condition is true then it will execute the block of code inside the
//  if statement and if the condition is false then it will execute the block 
// of code inside the else statement. It is a shorthand way of writing an if
//  else statement. It is also known as conditional operator.
//  It takes three operands. The first operand is a condition, the second operand 
// is a value to be returned if the condition is true,
//  and the third operand is a value to be returned if the condition is false. 
// The syntax of ternary operator is as follows:
// condition ? value if true : value if false

var num=30
var result=num%2==0 ? "Even" : "Odd" //Example of ternary operator
console.log("The number is",result)

//for loop is a loop which is used to execute a block of code for a specified number of times. It is also known as a for loop. It is used when we know the number of times we want to execute a block of code. The syntax of for loop is as follows:
// for(initialization; condition; increment/decrement){
//     // block of code to be executed
// }

for(var i=0; i<=10;i++)
{
    console.log(i)
}

for(var i=10;i>=0;i--){
    console.log(i)
}

//Table of 4
var numb=6
for(var i=1; i<=10 ;i++)
{
    console.log(numb,"*",i,"=",i*numb)
}
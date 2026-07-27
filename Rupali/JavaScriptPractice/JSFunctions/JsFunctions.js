// Function declaration

function greeting(){
    console.log("we are learning playwright");
}
greeting();
greeting();
greeting();


//Function with parameters - pass by value

function addition(num1, num2)
{
    console.log("addition:", num1+num2);
}

// addition(20,30);

// addition(2,5);

var c =100;
var d =200;
//addition(c,d);


for (var i=5;i<=20;i+=5){
    addition(i,d)
}

// Function with parameters- pass by reference

function multiply(a,b){
    console.log("multiplication:", a*b);
}

var x= 20;
var y =30;

multiply(x,y)
multiply(30,2)


// find Even numbers

function GetEvenNumbers(arr){
    for(var val of arr){
        if(val%2==0){
            console.log(val)
        }
    }
}
GetEvenNumbers([12,23,11,24,54,43,19,91])

// function with default values
function greet(name ="sachin"){
    console.log("hello" + name);
}
greet()
greet("rupali")


function sum(a=1,b=5){
    console.log(a+b)
}
sum()
sum(1,2)

// function with return value

function add(a,b){
    return a+b;
}
var result =add(10,20);
console.log(result)


function factorial(num){
    var fact =1;
    for (var i=num; i>0; i--){
        fact =fact *i
    }
    return fact;
}
var output = factorial(5)
console.log(output)


// Arrow function

var sumResult =(num) =>{
var sum =0;
for(var i =1; i<=num; i++)
{
    sum +=i
}
return sum;
}
var sumValue =sumResult(10);

console.log(sumValue)

console.log("-----------------")

var add = (a, b) =>{
    //console.log(a+b);
    return a+b;
}
console.log("result is ", add(10,12))


// callback function

function RepeatString(n, func){
    for(var i=1; i<=n;i++){
        func();
    }
}

function hello(){
    console.log("Hello good morning");
}

RepeatString(5,hello);


console.log("----------------------")

RepeatString(7,()=>{
    console.log("Learning Programming")
})


// simple arrow function program to split the string

var result =(strInput)=>{
    return strInput.split(" ");
}

var output = result("We are learning an Javascript using Playwright")
console.log( output)



console.log("---------------------")

function firstFunction(callback) {
    console.log("First function executed");

    callback();
}

function secondFunction() {
    console.log("Callback function executed");
}

firstFunction(secondFunction);

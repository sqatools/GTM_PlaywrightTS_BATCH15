// Function is block of code that we can use it for different parameters.
// Function help us to reduce code redundancy 
// we can call function from one module to another.

/*

function functionName(parameter) {
    code block
}

functioName(parameterValue)
*/

// function without parameter
function greeting() {
    console.log("We are Learning JavaScript")
}

//  call function
// greeting()
// greeting()
// greeting()


console.log("##############################")
// function with parameters
addition(70, 80)

function addition(num1, num2) {
    console.log("addition of num1 and num2 :", num1+num2)
}


// if we declare duplicate function name, then it will consider only latest defined method.
// function addition(num1, num2) {
//     console.log("addition2 of num1 and num2 :", num1+num2)
// }



//  There are 2 ways to provide values to the function
// 1. Pass by value : while calling the function we can provide values to the function parameter directly.
// addition(30, 40)
// addition(300, 500)
// addition(50, 60)

// 2. Pass by Reference : while calling the function, we can get different variable name and there reference
// to provide the values.

var x = 400
var y = 700
addition(x, y)


for(var y=5; y<=20; y+=5) {
    addition(x, y)
}

console.log("#######################")
function GetEvenValues(arr) {
    for (var val of arr) {
        if (val%2 == 0) {
            console.log(val)
        } 
    }
}


GetEvenValues([5, 7, 8, 2, 3, 15, 4, 10])
/*
8
2
4
10
*/


console.log("#######################")
var arr2 = [4, 6, 7, 8, 23, 12]
for(var v1 of arr2) {
    console.log(v1)
}


console.log("#######################")
// function with default parameters.
// in this function v2 has default value as 30
function multiplication(v1, v2=30) {
    console.log(`multiplication of ${v1} ${v2} : ${v1*v2}`)
}



// provide value of v1 and v2 will remain with default value. v1=5, v2=30
multiplication(5)
// update default and override it, v1=10, v2=20
multiplication(10, 20)


function GetUserDetails(user) {
    console.log(user)
    // console.log(user['name'])
    // console.log(user['age'])
    // console.log(user['email'])
    // console.log(user['phone'])
    console.log(Object.entries(user))
    for(var [key, value] of Object.entries(user)) {
        console.log(key, ":", value)
    }
    
}

GetUserDetails({name: "Rahul", age: 40, email: 'rahul@gmail.com', 'phone': 344534544})

// { name: 'Rahul', age: 40, email: 'rahul@gmail.com', phone: 344534544 }
// name : Rahul
// age : 40
// email : rahul@gmail.com
// phone : 344534544

console.log("#############################")
// function with return value.

function factorial(num) {
    var fact = 1
    for(var i=num; i>0; i--) {
        fact = fact*i
    }
    return fact
}

// this function has property to return a value, that we have to store in variable.
var output = factorial(5)
console.log("factorial output :", output)


console.log("########################################")
// arrow function: arrow function is nothing but anonymous function that we can define anywhere
// without providing the name of function.

var SumResult = (num) => {
    var sum = 0
    for(var i=1; i<=num; i++) {
        sum += i
    }
    return sum
}

var sumvalue = SumResult(10)
console.log("sum of values :", sumvalue)


console.log("########################################")
// callback function, when we provide function as parameter to another function, then it is called
// callback function.
function RepeatString(n, func) {
    for(var i=1; i<=n; i++) {
        func()
    }
}

function hello() {
    console.log("Hello, good morning")
}

// provide custom function as parameter.
RepeatString(5, hello)


// provide arrow function as parameter.
RepeatString(7, ()=> {
    console.log("Learning JavaScript")
})

console.log("####################")
var result = (strInput) => {
    return strInput.split(" ")
}

var output = result("Learning Programming is Fun")
console.log(output)
// [ 'Learning', 'Programming', 'is', 'Fun' ]


//Q1 write arrow function to check given number is prime or not
//Q2 write a arrow function to removed duplicate numbers from string.
//Q3 write a arrow program to sum of all even number from 1to 30
//Q4 write a arrow function create a calculate add, multi , subtraction, division
//Q5 write a arrow function to find sum all value are divisible 3 and 5 between 1 to 100
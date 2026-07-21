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
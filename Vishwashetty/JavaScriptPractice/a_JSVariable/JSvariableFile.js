// variable declaration and their types.
// var, let, const

// var variable and properties.
// 1. var variable can be redeclare and re-assign.
// 2. It has function scope.
// 3. we can re-user n number of times.
// 4. we can declare variable without initializing it.

// declare a variable with name as "a" and assign value 20
var a = 20
// var : keyword
// a: variable name
// = : assignment operator
// 20 : value to assign into variable.

// re-decalre variable
var a = 50
console.log("value of a :", a)
// re-assign
a = 100
console.log("value of a :", a) // value of a : 100


console.log("#######################################")
// let variable
// 1. let variable can not re-declare.
// 2. user can re-assign value.
// 3. it has block scope.

// declare variable a P and assign value as 100
let P = 100
console.log("value of P :", P)

let Q = 200
console.log("value of Q :", Q)

//re-assign value
Q = 300
console.log("value of Q :", Q)

// Identifier 'Q' has already been declared
// let Q = 500 // not allowed
// console.log("value of Q :", Q)

// block scope
if(true) {
    var x = 250
    let y = 300
    console.log("var x inside scope :", x)
    console.log("let y inside scope :", y)
}

// console.log("var x outside scope :", x) // var x outside scope : 250
// console.log("let y outside scope :", y) // ReferenceError: y is not defined


function greeting() {
    var x1 = 50
    if(true) {
        var x2 = 60
        console.log("value of x1 :", x1)
    }

    if(true) {
        console.log("x2 :", x2)
        console.log("value of x1 in block:", x1)
    }
}

greeting()

var R
console.log(R) // undefined


console.log("#######################################")
// const variable.
// 1. can not re-declare, can not re-assign const variable
// 2. it has block scope.
// 3. we have to initialize the const variable.


const P1=300
console.log("P1 :", P1)
// const P1=500 // SyntaxError: Identifier 'P1' has already been declared
// console.log("P1 :", P1)

// re-assign const variable
//P1 = 500 // TypeError: Assignment to constant variable.
// console.log("P1 :", P1)


//###########################################
// rules to declare variable name:

//1. variable name should not start with number.
var p1 = 400 // valid variable
//var 123p = 500 // invalid

//2. variable name should not contain special characters except $ and _

var user_name = "John"
var $Password = "user@1234"
//var emai&id = "rahul@gmail.com" // invalid.

//3. variable name should not be a reserved keyword.
//var let = 500 // invalid let is reserved keyword.
//var class = 800 // invalid

//4. variable name should not contain space.
var User_pass = "P@ssw0rd"
var EmailPass = "user1234"
//var user value = 500 // invalid.


//5. variable name should be meaningful.
var emailI_id = "john@gmail.com"
var YXTYD = "john@yahoo.com"


//6. variable name should be in camelCase.
var myUserName = "javascriptuser@gmail.com"

//7. Variable name are case sensitive.

let Name = "Rohit"
let NAME = "Rahul"
let NAme = "Raghav"
let NaME = "Ravi"
console.log(Name, NAME, NAme, NaME)

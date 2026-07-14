// assignment operator

//= : assignment operator

var x= 500
console.log ("value of x :", x)
//+=: add and assign operator
x+=100  // x= x+100
console.log ("value of x after x+=100:", x)

//-=: substarct and assign operator
x-=50 //x=x-50
console.log("value of x after x-=50 :", x)

//*=: multiply and assign operator
x*=2 //x =x*2
console.log("value of z after x*=2:", x)

// /=: divide and assign operator
x/=2 //x=x/2
console.log("value of x afte x/=2 :", x)

// %=: modulas and assign operator
x%=4
console.log("value of x afte x%=3 :", x)

// ** = exponential and assign operator
x**=5 //x=x**
console.log("value of x after x**=5 :" , x)

console.log("#############################")

//comparision operator

// == : equal (data only)

var a = 10
var b = "10"
var c = 20
console.log("a==b :", a==b)
console.log("a==c :", a==c)


// === : strict equal (check data and data type)
console.log("a===b :", a===b)  
console.log("a===c :", a===c)

// != : not equal
console.log("a!=b :" ,a!=b) // false
console.log("a!=c :", a!=c) //true


// !== : not equal with data type check

console.log("a!==b :" ,a!==b) 
console.log("a!==c :", a!==c) //true

console.log("##################################")

var p = 100
var q = 500
var r = 100
// >: greater then
console.log("q>p :", q>p)

// < : less then
console.log("p<r :", p<r)
// >= : greater then equal
console.log ("q>=p :",q>=p)
// <= :less then equal
console.log("p<=r :", p<=r)

console.log("########  locial operator  ########")

// conditioal operator

// && : and operator
// cond1 && cond 2
   var M = 100
   var N = 200
   var O = 300

//1. false && false  : false
   console.log("M>N && N>O :",M>N && N>O )

//2.false && true : false
    console.log("M>N && N>M :" , M>N && N>M ) 

//3.true && true : true
    console.log("O>M && N>M :" , O>M && N>M ) 


console.log("#### OR OPERATOR ####")

// ||  or operator
// cond1 || cond 2
   var M = 100
   var N = 200
   var O = 300

//1. false || false  :   false
   console.log("M>N || N>O :",M>N || N>O )

//2.false || true : true
    console.log("M>N || N>M :" , M>N || N>M ) 

//3.true || true : true
    console.log("O>M || N>M :" , O>M || N>M ) 






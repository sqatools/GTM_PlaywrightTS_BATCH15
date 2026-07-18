// https://sqatools.in/javascript-if-condition/
/*
if cond1 {
    block
}

*/

var n1 = 20
console.log(n1%2 == 0)

if (n1%2 == 0) {
    console.log("Even :", n1)
} else {
    console.log("odd :", n1)
}

// odd : 17

var a = 30
var b = 30
var c = 20

if (a == c) {
    console.log("A and C has equal value")
}

if (a == b) {
    console.log("A and B has equal value")
}


// write a program to check given number is divisible 3 and 5
// if (cond1 && cond2) {
//    code block
//  } else {
//     code block
// }

var num = 15
if (num%3 == 0 && num%5 == 0) {
    console.log("This number is divisible by 3 and 5:", num)
} else {
    console.log("This number is not divisible by 3 and 5:", num)
}


/*
if (cond1 or cond2) {
   code block
} else {
    code block
}
*/

var numA = 25
// False || False : False 
// False || True : True

if (numA%3 == 0 || numA%5 == 0) {
    console.log("Number is divisible by 3 or 5:", numA)
} else {
    console.log("Number is not divisible by 3 or 5:", numA)
}

console.log("###################################")
/*
if (cond1) {
    code block
} else if (cond2) {
    code block    
} else if (cond3) {
    code block
} else {
    code block
    }

*/

var x = 19
var y = 400
var z = 50
if (x > y && x > z) {
    console.log("X has greater value:", x)
} else if (y > x && y> z) {
    console.log("Y has greater value :", y)
} else if ( z>x && z> y ) {
    console.log("Z has greater value")
} else {
    console.log("No one has greater value:", z)
}

//need to do assignment given in the documents 

//17-07-2026 class
// Nested if condition


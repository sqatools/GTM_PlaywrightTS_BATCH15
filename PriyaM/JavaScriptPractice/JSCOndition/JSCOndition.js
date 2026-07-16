/*
if cond1 {
    block
}

*/

var n1 = 17
if (n1%2 == 0) {
    console.log("Even :", n1)
} else {
    console.log("odd :", n1)
}

// Check if a person is eligible to vote or not
var age = 14
if (age >= 18) {
    console.log("Person is eligible to vote")
} else {
    console.log("Person is not eligible to vote")
}

// Check if number is divisble by 7 and 11
var num = 70

if (num%7 == 0 && num%11 == 0) {
    console.log("Number is divisible by 7 and 11:", num)
} else {
    console.log("Number is not divisible by 7 and 11:", num)
}

// Check student grade as per marks recieved

var marks = 65
if (marks >= 80 ) {
    console.log("Grade obtained is A for marks scored :", marks)
} else if (marks >= 60  && marks < 80 ) {
     console.log("Grade obtained is B for marks scored :", marks)
} else if (marks >= 40  && marks < 60 ) {
    console.log("Grade obtained is C for marks scored :", marks)
} else {
    console.log("Grade obtained is fail", marks)
}

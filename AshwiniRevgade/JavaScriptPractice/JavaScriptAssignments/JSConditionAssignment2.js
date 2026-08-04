// Q1. write a if condition program to check person is eligible to vote or not.
// Q2. write a if condition check given number is divisible 7 and 11.
// Q3. write a if else-if  program to check the student grade as per marks received.

// Q1. write a if condition program to check person is eligible to vote or not.
var age= 5
if (age > 18){
    console.log("Peron is Eligible for vote")
} else {
    console.log("Peroson is not elligilble for vote")
}


 //Q2. write a if condition check given number is divisible 7 and 11.
 var num = 770

if (num%7 == 0 || num%11 == 0) {
    console.log("Number is divisible by 7 or 11:", num)
} else {
    console.log("Number is not divisible by 7 or 11:", num)
}

//Q3. write a if else-if  program to check the student grade as per marks received.
var marks =90;
if (marks>=75 && marks<=100) {
    console.log("Student has got Distinct");
}else if (marks>=60) {
        console.log("Student got First class");
    } else if (marks>=35) {
        console.log("Student got pass class");
    }
    else {
        console.log("Student is failed");
}
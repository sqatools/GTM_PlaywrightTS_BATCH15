var age = 20;

if (age >= 18) {
    console.log("eligible to vote.");
} else {
    console.log("not eligible to vote.");
}

var num=77;
if (num % 7 === 0 && num % 11 === 0) {
    console.log(num + " is divisible by both 7 and 11.");
} else {
    console.log(num + " is not divisible by both 7 and 11.");
}

let marks = 95;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else if (marks >= 85) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else if (marks >= 0) {
    console.log("Grade F (Fail)");
} else {
    console.log("Invalid");
}
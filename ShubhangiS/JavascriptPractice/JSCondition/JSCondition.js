// 1. Check if a person is eligible to vote based on their age:

var age= 25;

if(age>=18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



// 2. Check if a number is divisible by 7 and 11:

var number= 77;

if(number%7==0 && number%11==0){
    console.log("The number is divisible by both 7 and 11.");
} else {
    console.log("The number is not divisible by both 7 and 11.");
}

//3. if else-if program to check the student grade as per marks received:

var marks= 85;

if(marks>=90){
    console.log("Grade: A");
} else if(marks>=80){
    console.log("Grade: B");
} else if(marks>=70){
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// 4. Check whether a number is a three-digit number:
var threeDigitNumber = 123;

if (threeDigitNumber >= 100 && threeDigitNumber <= 999) {
    console.log("The number is a three-digit number.");
} else {
    console.log("The number is not a three-digit number.");
}

// 5. Check whether a number is a four-digit number:

var fourDigitNumber = 12345;

if (fourDigitNumber >= 1000 && fourDigitNumber <= 9999) {
    console.log("The number is a four-digit number.");
} else {
    console.log("The number is not a four-digit number.");
}

// 6. Check whether a number is positive and even:

var num = 8;

if(num > 0 && num % 2==0)
{
console.log("The number is a positive and even");
} else {
    console.log("The number is not a positive and even");
}

// 7. Check whether a person can enter a movie (age >= 18 and has a ticket).

var personAge = 17;
var hasTicket = true;

if (personAge >= 18 && hasTicket) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Not Allowed");
}


// 8. Check whether a username is "admin":

var username = "admin";

if (username === "admin") {
    console.log("Welcome, admin!");
}else{
    console.log("Invalid username.");
}

// 9. Check whether a user is logged in:

var isLoggedIn = true;

if (isLoggedIn) {
    console.log("User is logged in.");
} else {
    console.log("User is not logged in.");
}

// 10. Check whether an email contains "@":

var email = "user@example.com";

if (email.includes("@")) {
    console.log("Email contains '@'.");
} else {
    console.log("Email does not contain '@'.");
}

// 11. Check whether a mobile number has exactly 10 digits:

var mobileNumber = "1234567890";

if (mobileNumber.length === 10) {       
    console.log("The mobile number has exactly 10 digits.");
} else {
    console.log("The mobile number does not have exactly 10 digits.");
}

// 12. Check whether a number is divisible by either 2 or 3:

var number= 14
if(num% 2==0 || num%3==0){

    console.log("a number is divisible by either 2 or 3");
}else{

    console.log("a number is not divisible by either 2 or 3");
}
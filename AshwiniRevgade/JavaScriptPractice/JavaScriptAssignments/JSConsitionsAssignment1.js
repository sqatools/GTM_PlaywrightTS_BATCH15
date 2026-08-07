// 15 July 2026.
// Programs to Practice.
//Assign a grade based on marks.
//Check whether a number is a three-digit number.
//Check whether a number is a four-digit number.
//Check whether a number is positive and even.
//Check whether a person can enter a movie (age >= 18 and has a ticket).
//Check whether a username is "admin".
//Check whether a user is logged in.
//Check whether an email contains "@".
//Check whether a mobile number has exactly 10 digits.
//Check whether a number is divisible by either 2 or 3.


//1. Assign a grade based on marks.
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

//2. Check whether a number is a three-digit number.
let num=300;
if(num>=100 && num<=999) {
    console.log("Number is Three digit");
}else{
    console.log("Number is not Three digit");
}

//3. Check whether a number is a four-digit number.
let num1=300;
if(num1>=1000 && num1<=9999) {
    console.log("Number is four digit");
}else{
    console.log("Number is not four digit");
}

//4. Check whether a number is positive and even.
var n1 = 45
console.log(n1%2 == 0)

if (n1%2 == 0) {
    console.log("number is postive and Even :", n1)
} else {
    console.log("number is not postive and Even :", n1)
}
//5. Check whether a person can enter a movie (age >= 18 and has a ticket).
var age= 4
if (age >= 18){
    console.log("Peron can be allowed to watch Movie");
} else if(age<18 && age >= 5){
    console.log("Peron has half tikcet to watch Movie");
}else {
    console.log("Person has not allowed into movie");
}

//6. Check whether a username is "admin".
let username="admin";
if(username=="admin"){
    console.log("Access Granted");
}else{
    console.log("Access is denied");
}

//7. Check whether a user is logged in.
let IsLoggedIn= true;
if(IsLoggedIn==true)
{
    console.log("User is able to loggedin");
}else{
    console.log("User is not able to loggedin");
}

//8. Check whether an email contains "@".
let email= "ash@gmail.com";
if(email.includes("@")){
    console.log("Email Id is valid");
}
else{
    console.log("Email Id is not valid");
}

//9.Check whether a mobile number has exactly 10 digits.
let mobilenumber= "8967452345";
if(mobilenumber.length==10)
{
    console.log("Mobile number is Valid");
}else{
    console.log("Mobile number is Invalid");
}

//10.Check whether a number is divisible by either 2 or 3.
var num2 = 8;
if (num2%2 == 0 || num2%3 == 0) {
    console.log("Number is divisible by 2 or 3:", num2)
} else {
    console.log("Number is not divisible by 2 or 3:", num2)
}
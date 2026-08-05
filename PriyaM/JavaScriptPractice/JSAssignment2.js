// 15th July 2026
// Program on Conditions to practice:

//Assign a grade based on marks.
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

//Check whether a number is a three-digit number.
var num = 123
 if (num > 99 && num <= 999)
    console.log(num,": is a 3 digit number")
else
    console.log(num,": is a not a 3 digit number")


//Check whether a number is a four-digit number.
var num = 1000
 if (num > 999 && num <= 9999)
    console.log(num,": is a 4 digit number")
else
    console.log(num,": is a not a 4 digit number")



//Check whether a number is positive and even.
let number = -1
if (number%2 == 0 && number > 0) (
    console.log("The number is positive and even :", number)
)
else{
    console.log("The number is not positive and even :", number)
}

//Check whether a person can enter a movie (age >= 18 and has a ticket).
var age = 19
var ticket = "no"
if (age >= 18 && ticket == "yes") {
    console.log("Person with age ", age, "can enter the movie")
} else {
     console.log("Person with age ", age, "cannot enter the movie")
}

//Check whether a username is "admin".
var username = "Admin"

if (username == "admin" || username == "Admin") {
    console.log(username, ": username is admin")
}
else {
    console.log(username, ": username is not admin")
}

//Check whether a user is logged in.
var username = "admin"
let password = "password"
if (username === "admin" && password === "password") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

//Check whether an email contains "@"
var email = "testemail@gmail.com"
if (email.includes("@")) {  
    console.log(email, ": contains @")
} else {
    console.log(email, ": does not contain @")
}

//Check whether a mobile number has exactly 10 digits.
var mobileNumber = "1234567890"
if (mobileNumber.length === 10) {
    console.log(mobileNumber, ": is a 10 digit mobile number")
} else {
    console.log(mobileNumber, ": is not a 10 digit mobile number")
}

//Check whether a number is divisible by either 2 or 3.
var num = 71

if (num%2 == 0 || num%3 == 0) {
    console.log("Number is divisible by 2 or 3:", num)
} else {
    console.log("Number is not divisible by 2 or 3:", num)
}


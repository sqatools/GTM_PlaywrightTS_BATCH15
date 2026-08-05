//Write a if condition program to check a person is eligible to vote or not
//Write a if condition program to check a number is divisible by 7 and 11
//Write a if , else if program to check the student grade as per marks received

var a=18
if (a>=18){
    console.log("Person is eligible to vote");
}
else{
    console.log("Person is not eligible to vote");
}
var num=77
if(num%7==0 && num%11==0){
    console.log("Number is divisible by 7 and 11");
}
else{
    console.log("Number is not divisible by 7 and 11");
}   
var marks=85
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
//Factorial of a number using for loop
var num=5;
var factorial=1;
for(var i=1; i<=num; i++){
    factorial=factorial*i;
}
console.log("Factorial of " + num + " is " + factorial);

//reverse a string using for loop
var str="Hello World";
var reversedStr="";
for(var i=str.length-1; i>=0; i--){
    reversedStr=reversedStr+str[i];
}
console.log("Reversed string is: " + reversedStr);

//calculate the length of a string without using length property
var str="Hello World";
var length=0;
for(var i=0; i<str.length; i++){
    length++;
}
console.log("Length of string is: " + length);

//palindrome check using for loop
var str="madam";
var reversedStr="";
for(var i=str.length-1; i>=0; i--){
    reversedStr=reversedStr+str[i];
}
if(str===reversedStr){
    console.log("String is a palindrome");
}
else{
    console.log("String is not a palindrome");
}   
//fibonacci series using for loop
var n=10;
var a=0, b=1, nextTerm;
console.log("Fibonacci Series:");
for(var i=1; i<=n; i++){
    console.log(a);
    nextTerm=a+b;
    a=b;
    b=nextTerm;
}
//vowel check using loop
var str="Hello World";
var vowels="aeiouAEIOU";
var count=0;
for(var i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
console.log("Number of vowels in the string is: " + count);
//print the vowels in the string
var str="Hello World";
var vowels="aeiouAEIOU";
var vowelStr="";
for(var i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        vowelStr=vowelStr+str[i];
    }
}
console.log("Vowels in the string are: " + vowelStr);
//print the consonants in the string
var str="Hello World";
var vowels="aeiouAEIOU";
var consonantStr="";
for(var i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        // Do nothing, it's a vowel
    }
    else{
        consonantStr=consonantStr+str[i];
    }
}
console.log("Consonants in the string are: " + consonantStr);
// 15 July 2026.
/* Programs to Practice.
Assign a grade based on marks.
Check whether a number is a three-digit number.
Check whether a number is a four-digit number.
Check whether a number is positive and even.
Check whether a person can enter a movie (age >= 18 and has a ticket).
Check whether a username is "admin".
Check whether a user is logged in.
Check whether an email contains "@".
Check whether a mobile number has exactly 10 digits.
Check whether a number is divisible by either 2 or 3.*/
// assign a grade based on marks
var marks=85;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
// check whether a number is a three-digit number
var num=123;
if(num>=100 && num<=999){
    console.log("Number is a three-digit number");
}
else{
    console.log("Number is not a three-digit number");
}
// check whether a number is a four-digit number
var num=1234;
if(num>=1000 && num<=9999){
    console.log("Number is a four-digit number");
}
else{
    console.log("Number is not a four-digit number");
}
// check whether a number is positive and even
var num=4;
if(num>0 && num%2===0){
    console.log("Number is positive and even");
}
else{
    console.log("Number is not positive and even");
}
// check whether a person can enter a movie (age >= 18 and has a ticket)
var age=20;
var hasTicket=true;
if(age>=18 && hasTicket){
    console.log("Person can enter the movie");
}
else{
    console.log("Person cannot enter the movie");
}
// check whether a username is "admin"
var username="admin";
if(username==="admin"){
    console.log("Username is admin");
}
else{
    console.log("Username is not admin");
}
// check whether a user is logged in
var isLoggedIn=true;
if(isLoggedIn){
    console.log("User is logged in");
}
else{
    console.log("User is not logged in");
}   
// check whether an email contains "@"
var email="user@example.com";
if(email.includes("@")){
    console.log("Email contains @");
}
else{
    console.log("Email does not contain @");
}   
// check whether a mobile number has exactly 10 digits
var mobileNumber="1234567890";
if(mobileNumber.length===10){
    console.log("Mobile number has exactly 10 digits");
}
else{
    console.log("Mobile number does not have exactly 10 digits");
}
// check whether a number is divisible by either 2 or 3
var num=6;
if(num%2===0 || num%3===0){
    console.log("Number is divisible by either 2 or 3");
}
else{
    console.log("Number is not divisible by either 2 or 3");
}
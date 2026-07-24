// 15 July 2026.
// Programs to Practice.
//Assign a grade based on marks.
/*Check whether a number is a three-digit number.
Check whether a number is a four-digit number.
Check whether a number is positive and even.
Check whether a person can enter a movie (age >= 18 and has a ticket).
Check whether a username is "admin".
Check whether a user is logged in.
Check whether an email contains "@".
Check whether a mobile number has exactly 10 digits.
Check whether a number is divisible by either 2 or 3.*/


//whether a number is a three-digit number
var num=123;
if(num>=100 && num<=999){
    console.log("The number is a three-digit number",num)
}
 else{
    console.log("The number is not a three-digit number",num)
}

//whether a number is a four-digit number
var num=1234;
if(num>=1000 && num<=9999){
    console.log("The number is a four-digit number",num)
}

//whether a number is positive and even
var num=12;     

if(num>0 && num%2==0){
    console.log("The number is positive and even",num)
}

else{
    console.log("The number is not positive and even",num)
}   

//whether a person can enter a movie (age >= 18 and has a ticket)
var age=20;
var hasTicket=true;     

if(age>=18 && hasTicket==true){
    console.log("The person can enter the movie",age,hasTicket)
}
else{
    console.log("The person cannot enter the movie",age,hasTicket)
}
//whether a username is "admin"
var username="admin";   

if(username=="admin"){
    console.log("The username is admin",username)
}
else{
    console.log("The username is not admin",username)
}

//whether a user is logged in
var isLoggedIn=true;  
    
if(isLoggedIn==true){
    console.log("The user is logged in",isLoggedIn)
}
//whether an email contains "@"
var email="user@example.com";
if(email.includes("@")){
    console.log("The email contains '@'",email)
}
else{
    console.log("The email does not contain '@'",email)
}
//whether mobile number has exactly 10 digit
num=1234567890
if(num==10){
    console.log("The mobile number has exactly 10 digit",num)
}
else{

    console.log("The mobile number has not exactly 10 digit",num)
}

//whether a number is divisible by either 2 or 3

num=12
if(num/2==0 || num/3==0){
console.log("The number is divisible by 2 or 3 ",num)
}
else{

    console.log("The number is not divisible by 2 or 3 ",num)
}

//Write a program  count the number of vowels in given 
var s2="We are learning javascript"
var vowels="aeiouAEIOU";
var count=0;
for(var i=0; i<s2.length; i++){
    if(vowels.includes(s2[i])){
        count++;
    }
    
}
console.log("The number of vowels in the string is: ", count);
 
    




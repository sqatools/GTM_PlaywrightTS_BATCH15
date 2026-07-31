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


//write a program to repeat of first character of each word twice
var str="Rohit Virat Vaibhav Abhishek Survya"
var words=str.repeat(" Rohit Virat Vaibhav Abhishek Survya").split(" ");
var result="";
for(var i=0; i<words.length; i++){
    result+=words[i][0]+words[i][0]+" ";
}
console.log("The string with first characters repeated is: ", result);

//write a program to get first and last character of each word 
var str="Rohit Virat Vaibhav Abhishek Survya"
var words=str.split(" ");
var result="";
for(var i=0; i<words.length; i++){
    result+=words[i][0]+words[i][words[i].length-1]+" ";
}
console.log("The string with first and last characters of each word is: ", result);


//write a program to remove duplicate words from a string

var str="Rohit Virat Vaibhav Abhishek Survya Rohit Virat Vaibhav Abhishek Survya";
var words=str.split(" ");
console.log("The original string is: ", str);
var uniqueWords=[];
for(var i=0; i<words.length; i++){
    if(uniqueWords.includes(words[i])==false){
        uniqueWords.push(words[i]);
    }
}
console.log("The string with duplicate words removed is: ", uniqueWords.join(" "));

// write a program to get value from array which are prime number
var primeValues=[4,6,7,11,13,16,25,29]
var primeNumbers=[];
for(var i=0; i<primeValues.length; i++){
    var isPrime=true;
    for(var j=2; j<primeValues[i]; j++){
        if(primeValues[i]%j==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime==true && primeValues[i]>1){
        primeNumbers.push(primeValues[i]);
    }   
    console.log("The prime numbers in the array are: ", primeNumbers);

}

//write a program to get combination of two values who sum is 10

var array2 = [4, 6, 7, 12, 9, 3, -2, 8, 2, 1]

var sum = 10;
var combinations = [];
var addition = 0;
for (var i = 0; i < array2.length; i++) {
    for (var j = i + 1; j < array2.length; j++) {

        addition = array2[i] + array2[j];
        if (addition === sum) {
            console.log("The combination of two values whose sum is 10: ", array2[i], array2[j]);

        }
        else{
            console.log("The combination of two values whose sum is not 10: ", array2[i], array2[j]);

        }
    }
}

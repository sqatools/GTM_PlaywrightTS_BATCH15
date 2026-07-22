/*
if cond1 {
    block
}

*/
var a=6
if (a%2 == 0) {
    console.log("Even number:",a)
    } else{
        console.log("Odd number:",a)
    }


    //Q1.Write a if condition to check person is eligible for voting or not. (age>=18)

    var age=19
    if(age >= 18){
        console.log("This person is eligible to vote:",age)
    }else{
        console.log("This person is not eligible to vote",age)
    }

    //Q2: to check given number is divisible by 7 and 11

    var num=77
    if(num % 7==0 && num % 11==0){
        console.log("It is divisble by 7 and 11:",num)
    }else{
        console.log("It is not divisible by 7 and 11:",num)
    }

    //Q3:if else if program to check the student grade as per marks received
    var total=300
    if(total >= 400){
        console.log("A Grade")
    }else if(total>=300 && total < 400){
        console.log("B Grade")
    }else if (total>=250 && total < 300){
        console.log("C Grade")
    }else{
        console.log("fail")
    }


   //Check whether a number is a three-digit number.

   var a=123
   if((a>99 && a<1000)){
    console.log("It is a 3-digit number")
   }else{
    console.log("It is not a 3-digit number")
   }

   //Check whether a number is a four-digit number.
   var a=1234
   if(a>=1000 && a<=10000){
    console.log("It is a 4 digit number")
   }else{
    console.log("It is not a 4 digit number")
   }

   //Check whether a person can enter a movie (age >= 18 and has a ticket).
   var age=20
   if(age>=18){
    console.log("He has a movie ticket")
   }else{
    console.log("There is no movie tiket")
   }

   //Check whether a username is "admin".
   var username = "admin"
   if(username=== "admin" ){
    console.log("username is admin")
   }else{
    console.log("username is not admin")
   }

   //Check whether a user is logged in.
   var swipe = "Yes"
   if(swipe==="Yes"){
    console.log("User logged in")
   }else{
    console.log("User not logged in")
   }

   //Check whether a mobile number has exactly 10 digits.
   var mobile= 9876543216
   if(mobile>=1000000000 && mobile<=100000000000){
    console.log("mobile has 10 digits")
   }else{
    console.log("Mobile has no 10 digits")
   }

   //Check whether a number is divisible by either 2 or 3.
   var a=9
   if(a%2==0 || a%3==0)
   {
    console.log("It is either divisible by 2 or 3")
   }else{
    console.log("It is not divisible by either 2 or 3")
   }

   //Nested If cond

   /*if cond(){
   code of block
   if Cond(){
   code of block
   }else
    {
    code of block
}else{
    code of block
}
} */

var round1="fail"
var round2="pass"
if(round1=="pass"){
    console.log("Round1 is clear")
if(round2=="pass"){
    console.log("Round2 is clear")
}else
    {
      console.log("Failed in round2. Try it next time")
    }
}else{
   console.log("Failed in round1")
}

//ternary operator
var num=9
var result= num%2==0 ? "Even": "odd"
console.log(result)
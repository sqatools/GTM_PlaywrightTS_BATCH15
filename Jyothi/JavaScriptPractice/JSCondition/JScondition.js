var n1=12
if(n1%2==0)
{
    console.log("n1 is even",n1);
}
else
{
    console.log("n1 is odd",n1);
}

//1.write a if condition program to check person is eligible to vote or not
var age=18
if(age>=18)
{
    console.log("Person is eligible to vote",age);
}
else
{
    console.log("Person is not eligible to vote",age);
}




//2.Write a program to check given number is divisible by 7 and 11
var n1=77
if(n1%7==0 && n1%11==0)
{
    console.log("Given number is divisible by 7 and 11",n1);
}
else
{
    console.log("Given number is not divisible by 7 and 11",n1);
}

//write a program if else if condition to check student grade as per marks

var marks=85
if(marks>90 && marks<100)
{
    console.log("Student grade: A");
}
else if(marks>80 && marks<90)
{
    console.log("Student grade: B");
}
else
{
    console.log("Student grade: C");
}


//Check weather a number is positive and even

var n1=12
if(n1>0 && n1%2==0)
{
    console.log("Given number is positive and even",n1)
}
else
{
    console.log("Given number is not positive and even",n1)
}

//Check weather a person can enter movie(age >=18 and has tocket)

var age=20
var hasTicket=true
if(age>=18 && hasTicket===true)
{
    console.log("Person can enter")
}
else
{
    console.log("Person cannot enter")
}



//Check whether a number is a three-digit number.
var num=233
if(num>=100 && num<=999)
{
    console.log("Given number is a three-digit number",num)
}
else
{
    console.log("Given number is not a three-digit number",num)
}



//Check whether a number is a four-digit number.


var num3=2335
if(num>=1000 && num<=9999)
{
    console.log("four digit number",num3)
}
else
{
    console.log("Not fourdigit number",num3)
}


//Check whether a username is "admin".


var username="admin"

if(username=="admin")
{
    console.log("Username is admin")
}
else
{
    console.log("Username is not admin")
}


//Check whether a user is logged in.
var userisLoggedin=true

if(userisLoggedin===true)
{
    console.log("User is logged in")
}
else
{
    console.log("User is not logged in")
}

//Check whether an email contains "@".


var email="jyothic@gmail.com"

if(email.includes("@"))
{
    console.log("Email contains @")
}
else
{
    console.log("Email does not contain @")
}

//Check whether a mobile number has exactly 10 digits.
//Check whether a number is divisible by either 2 or 3.


//nested if condition

var round1="fail"
var round2="pass"
var rund3="pass"

if(round1=="pass")
{
    console.log("1st round clear")
    if(round2=="pass")
    {
       console.log("2st round clear") 
    }

else 
{
    console.log("failed in 2nd round")
}
}
else
{
    console.log("failed in 1st round")
}
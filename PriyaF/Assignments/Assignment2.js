// 1 Assign Grade base on Mark 
var mark = 75;


if(mark >= 90)
{
    console.log("Grade Is A+: ")
}
else if( mark >= 80 )
{
    console.log(" grade is A")
}
else if(mark >= 70 && mark < 80)

    {
        console.log("Grade id B+ ")
    }

    else if( mark >60 && mark <=70)
        {
console.log("Grade is B")
        }
    
        else if(mark < 35 )
        {
            console.log("Fail")
        }
        else{
            console.log(" Inavalid marks")
        }

        //2.Check whether a number is a three-digit number.
        var a=12
        if(a >= 100 && a<=999 )
{
    console.log("Number is 3 Digit")
}
else{
    console.log("Number is not 3 digit")
}

//3.Check whether a number is a four-digit number.
   var num=999
        if(num > 999 && num<=9999)
{
    console.log("Number is 4 Digit")
}
else{
    console.log("Number is not 4 digit")
}

//4.Check whether a number is positive and even.
var a1=15
if(a1 > 0 && a1%2==0)
    console.log("NUmber is positive and even")
else
    console.log("Number is not positive and even")

//5 Check whether a person can enter a movie (age >= 18 and has a ticket).
var age=40
var ticket=true
if(age >= 18 && ticket == true)
{

    console.log("Person can enter the movie")
}
else{
    console.log("Person cannot enter the movie")
}

//5 Check whether a username is "admin".
var name="admin"
if(name=="admin")
{
    console.log("admin user")
}
else(
    console.log("Normal user")
)

//6 Check whether a user is logged in.
var loggedIn=true
if(loggedIn==true)
{
    console.log("User is logged in")

}
else{
    console.log("User is not logged in")
}   
//7Check whether an email contains "@".

var email="xyzgmail.com"
if(email.includes("@"))
{   
        console.log("Email is valid")
}   
else 
{
    console.log("Email is not valid")
}

//8Check whether a mobile number has exactly 10 digits.

var mobileNumber = 123456789

if(mobileNumber > 999999999 && mobileNumber <=9999999999 )
{
    console.log("Mobile number contains 10 digits")
}
else
{
    console.log("Mobile number does not contain 10 digits")
}   

//9 Check whether a number is divisible by either 2 or 3.
var num =46;

if(num %2==0 || num %3==0)
{
    console.log("number is divisible by 2 or 3")
}
else
{
    console.log("number is not divisible by 2 or 3")
}




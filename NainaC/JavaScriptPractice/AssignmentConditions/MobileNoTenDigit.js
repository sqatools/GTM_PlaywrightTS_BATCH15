// Check weather the mobile no has exactly 10 digit or not.
var mobileNo= 1234567891
if(mobileNo.toString().length === 10)
{
    console.log("Mobile no has exactly 10 digit")
}
else
{
    console.log("Mobile no does not have exactly 10 digit")
}

//2nd way
var mobileNo= 123456789
console.log(mobileNo.toString().length === 10 ? "Mobile no has exactly 10 digit" : "Mobile no does not have exactly 10 digit");
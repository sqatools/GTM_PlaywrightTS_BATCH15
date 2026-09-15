// check weather email contains @ or not
var Email= "nayanachidegmail.com"
if(Email.includes ("@"))
{
    console.log("Email contains @")
}
else
{
    console.log("Email does not contains @")
}

//2nd way
var EmailContains = "nayanachide@gmail.com"
console.log(EmailContains.includes("@") ? "Email contains @" : "Email does not contains @");
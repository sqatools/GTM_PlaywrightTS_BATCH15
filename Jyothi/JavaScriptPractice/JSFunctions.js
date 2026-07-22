//Function with parameter
function addition(num1,num2)
{
    console.log("Addition:",num1+num2)
}
addition(30,40)

//pass by reference

var x=400
var y=700
addition(x,y)

for(var y=5;y<=20;y+=5)
{
addition(x,y)
}



//Function with default parameter

function multiplication(v1,v2=30)
{
    console.log(`multiplication:${v1*v2}`)
}
multiplication(5)
//update default & override
multiplication(5,50)



function Getuserdetails(user)
{
    console.log(user)
    console.log(Object.entries(user))
    for(var[key,value] of Object.entries(user))
    {
        console.log(key,":",value)
    }
}
Getuserdetails({name: "jyo",age:60,email:"jyo@gmail.com"})


//Function with return type

function factorial(num)
{
    var fact=1
    for(var i=num;i>0;i--)
    {
        fact=fact*i
    }
    return fact
}
var output=factorial(5)
console.log("Factorial:",output)
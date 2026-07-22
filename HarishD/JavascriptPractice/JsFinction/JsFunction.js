// Function : function is a block of code that we can use it for different parameters
// Function help us to reduce the  code redudancy
//we can call function from one module to another

/*
function functionName(Parameter)
{
  code block
}
functioName(ParameterValue)

*/

// Function without paraameter
function greating() {
    console.log("we are learning javascript")
}
// without using call function output will not print
greating()  // call function

//function with parameter

function addition(num1, num2)   // function defination
{
    console.log("addition of num1 and num2 :", num1 + num2)  // execute the function
}
// if we declear duplicate function name , it will execute the latest function

/*
function addition(num1,num2)   // function defination
{ 
    console.log("addition1 of num1 and num2 :", num1+num2)  // execute the function
}   
    */

// There are 2 ways to provide the values in the function
//1.pass by value:while calling the function we can provide the value to the function parameter directly
addition(20, 30)  // function call
addition(60, 100)

// function will execute in the order : function defination> function call >execute  the function


//2. pass by reference: while calling the function , we can get different variable name and their reference to provide the values


function addition1(num1, num2)   // function defination
{
    console.log("addition1 of num1 and num2 :", num1 + num2)  // execute the function
}

var x = 120
var y = 140
addition1(x, y)

// x  is fixed value 120 , now i am updating y value dynamically
for (var y = 5; y <= 20; y += 5) {
    addition1(x, y)
}


console.log("#######################")
function GetEvenValues(arr) {
    for (var val of arr) {
        if (val % 2 == 0) {
            console.log(val)
        }
    }
}

GetEvenValues([5, 7, 8, 2, 3, 15, 4, 10])


console.log("#####################################")
// function with default parameter
// In the function only v2 has default value
function multiplication(v1,v2=40)
// backticks (`), 
/*Backticks allow you to:
Insert variables directly using ${}
Perform calculations inside ${}   
 */

{
    console.log(`multiplication of ${v1} ${v2}, ${v1*v2}`)
}
// provide value for v1 and v2 wii remain the default value
multiplication(5)
// update default and override it, v1=10, v2=20
multiplication(10,20)


function addition(x1, x2=20)
{
    console.log(`addition of ${x1} ${x2}, ${x1+x2} `)
}
addition(30)


console.log("#############################")

function GetUserDetails(user) {
    // console.log(user)
    // console.log(user['name'])
    // console.log(user['age'])
    // console.log(user['email'])
    // console.log(user['phone'])
    console.log(Object.entries(user))
     for(var [key, value] of Object.entries(user)) {
        console.log(key, ":", value)
    } 
    
}

GetUserDetails({name: "rama", age: 25, email: 'ramu@gmail.com', 'phone': 8897890987})







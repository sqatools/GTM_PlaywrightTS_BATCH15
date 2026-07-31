// Function is a block of code 
// Function Without parameters

function functionName(){
    console.log("Learning Functions")
}

functionName()
functionName()

// Function with Parameter 
function addition(num1,num2,num3){
    console.log("Value of number num1 , num2 is: ",num1+num2+num3)
}
addition(30, 50,0)
addition(15,45) // When no value is mentioned its shows as "Value of number num1 , num2 is:  NaN
                     //Value of number num1 , num2 is:  NaN"
addition(0,50)

// if we declare dupicate function name, then it will consider the latest defined method


// pass by reference: while calling the function we can get different variable name and their reference 
//to provide the values
//we can call function insidw a loop 

var x=400
var y=500
addition(x,y)

for (var y=5 ; y<=20;y+=5){
    addition(x,y)
}

//Array function
//find the even number 

function getevennumber(arra1)
{
    for (var numb of arra1){
        if(numb%2==0){
            console.log("Print the number", numb)
        }
    }
}

getevennumber([2,5,8,25,30,60])

//Function with defalut parameter
function multiple(v1, v2 = 40) {
    console.log(`Multiple the value of ${v1} ${v2}: ${v1 * v2}`)
}
multiple(20)

//Update the default value 
function multiple(v1, v2 = 40) {
    console.log(`Multiple the value of ${v1} ${v2}: ${v1 * v2}`)
}
multiple(20,70)

// User Details
function userDetails(user){
    console.log(user)

}
userDetails({name: "Hema" ,DOB: "March 26" , Married: "Yes" })

// Function with return value
function factorial(num){
    var fact=1
    for (var i=num; i>0 ;i--){
        fact=fact*i
    }
    return fact
}

var output=factorial(5)
//console.log("Factonial output :" , output)

// Arrow Function 


// callback function , where we provide function as parameter to other function,
// then it is called as callback function

function RepeatString(n,func){
    for(var i=1; i<n ; i ++){
        func()
    }
}
function hello(){
    console.log(("Hello, good morning"))
}
function hello2(){
    console.log(("Hello, good evening"))
}
RepeatString(5, hello)
RepeatString(5, hello2)
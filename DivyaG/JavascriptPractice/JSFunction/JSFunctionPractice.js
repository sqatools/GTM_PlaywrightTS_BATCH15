//Function is a block of code that we are using for different parameters a
// function help us to reduce the code redundancy.
//we can call function from one module to another.

/* /*function functionname(parameter)
{
    code block
 } 

    functionname(parametervalue){

    } */

    //function without parameter
    function greeting(){
        console.log("We are learning JavaScript")
    }

    //calling function
    greeting()
      greeting()
        greeting()

        //function with parameter
        function addition(num1,num2)
        {
            console.log("Addition of two numbers:",num1+num2)
        }
//There are two ways to provide values to the function
//Pass by value : while calling the function we are providing values to the function directly
        addition(34,2)
        addition(400,500)
        addition(3,5)

        //If we declare duplicate function name, It will consider latest function name
         
        function addition(num1,num2)
        {
            console.log("Addition of two numbers:",num1+num2)
        }
       function addition(num1,num2)
       {
        console.log("addition of these two numbers are:",num1+num2)
       }
       //It will call latest function
        addition(34,2)
        addition(400,500)
        addition(3,5)



        //call by reference(pass by refernce)
        //while calling the function we can get different varaible name and their reference 
        // to  provide the value

        var x=100
        var y=500
        function addition(num1,num2)
        {
            console.log("Addition of two numbers:",num1+num2)
        }
       
        addition(x,y)
        //function inside the loop

        for(var y=5;y<20;y+=5)
        {
             addition(x,y)
        }

        //Even numbers(funtion in the loop)

        function getEvenNumber(arr){
        for (var val of arr)
        {
            if(val%2==0){
            console.log(val)
            }
        }
    }

        getEvenNumber([5,7,8,9,10,17,12,34])

        //function with default parameters
        function multiplication (v1,v2=30)
        {
            console.log(`multiplication of two numbers ${v1} ${v2} :${v1*v2}`)
        }

        multiplication(5)

        //updating default value and override it
        function multiplication (v1,v2=30)
        {
            console.log(`multiplication of two numbers ${v1} ${v2} :${v1*v2}`)
        }

        multiplication(5,10)
//

function getUserDetails(user){
    console.log(user)
}

getUserDetails({name:"Rahul" , age:50 , email:"rahul@user.com" , phone:7890678906})

//
function getUserDetails(user){
    for(var [key,value] of Object.entries(user)){
    console.log(key, ":" , value)
    }
}

getUserDetails({name:"Rahul" , age:50 , email:"rahul@user.com" , phone:7890678906})

//function with return value

function factorial(num){
    var fact = 1
    for(var i=num ; i>0 ;i--){
        fact *= i
    }
    return(fact)
}
var output=factorial(5)
console.log("factorial of a number", output)

//Arrow function is an anonymous function. we can define it anywhere with out name of the function
//just  store the value. 
var sumValue = (num) => {
    var sum=0
    for(i=0; i<=num; i++)
    {
        sum += i
    }
    return sum
}
var sumResult = sumValue(10)
console.log("Result is:", sumResult)

//callback function: when we call a function as parameter to another function

function repeatString(n, func){
    for(var i=1; i<n; i++){
        func()
    }
}

function hello(){
    console.log("Hello GM")
}

//custom function as parameter
repeatString(5, hello)

//arrow function as parameter
repeatString(7, () =>{

    console.log("Hi Divya")
})

//##############
var result = (strInput) => {
    return strInput.split(" ")
}
var output = result("Hi Divya")
console.log(output)

//write an arrow function whether it is a prime number or ot

  var prime=true
  var result = (num) =>{
  for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        prime=false
        break
    }
}
if(prime){
    console.log("It is a prime number")
}else{
    console.log("It is not a prime number")
}
  }
result(7)

//write an arrow function to remove duplicate letters from string
var str1 =(strInput) =>
{
   var output = " "
for(var val of strInput)
{
    if(output.includes(val))
    {
        continue
    }
    else{
        output += val
    }
}

return output

}
var duplicate = str1("Divya is a good girl")
console.log(duplicate)

//write an arrow program to sum of all even number from 1 to 30

var getEvenNumber = (num) => {
    var sum=0
    for(var i=2;i<=num;i++){
        if(i%2==0){
        sum += i
    }
}
        return sum
}
var result = getEvenNumber(30)
console.log("Sum of even numbers:",result)

//write a arrow function create a calculate add,multi,suntraction,division

var add = (n1,n2) =>n1+n2;
var sub =(n1,n2) => n1-n2;
var mul =(n1,n2) => n1*n2;
var div=(n1,n2) => n1/n2;

 console.log("sum of two numbers",add(3,4))
 console.log("diff of two numbers",sub(4,3))
 console.log("mul of two numbers",mul(4,5))
 console.log("div of two numbers",div(4,2))

 //write a arrow function to find sum of all value are divisible 3 and 5 between 1 to 100

 var divisibleByTwoNum = (num) =>{
    var sum = 0;
    for(var i=0; i<=num; i++)
    {
        if(i%3==0 && i%5==0)
        {
            sum += i
        }
    }
    return sum
 }

 var output = divisibleByTwoNum(100)
 console.log("sum is:",output)




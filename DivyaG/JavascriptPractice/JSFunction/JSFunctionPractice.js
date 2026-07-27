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
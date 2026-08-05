// function is block of code we can use different parameters and we can call it multiple times in our code

// function help us to reduce the code redundancy and we can use it multiple times in our code

// we can call function from one modul to another module.

/*

function functionName(parameters){
    // code block

}

functionName(arguments)  // function call


*/


function gretting(){

console.log("we are learning function in js")

}

gretting()  // function call


// Function with parameters

function Addition(num1,num2){

    console.log("addition of two number is " , num1+num2)
}

Addition(10,20)



function Multiplication (num1,num2){

    console.log("multiplication of two number is ", num1*num2)
}
var x=5
var y=6

Multiplication(x,y)


// function with find even value

function GetEvenValue(array)
{
    for(var val of array)
    {
        if(val %2==0)
        {
            console.log("Even value of given array is ",val)
        }
    }

}
GetEvenValue([1,2,3,4,5,6,7,8,9,11,54])



// function with default parameters.
// in this function v2 has default value as 30

function Multiplication1(v1,v2=30)
{
console.log(`multiplication of  ${v1}  ${v2} :  ${v1*v2}`)
}
 //provide value of v1 and v2 will be remain with default favlue as 30

 Multiplication1(5)

 // update default value and override it v1=10 , v=20

 Multiplication1(10,20)
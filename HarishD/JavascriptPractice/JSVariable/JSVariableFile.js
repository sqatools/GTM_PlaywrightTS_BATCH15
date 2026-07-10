//Variable : variable are used to store the data
//three types of variable : Var , let,const

// Properties of var
//1. var variable can be re-declare and re-assign
//2. It has a function scope
//3. we can re use n number of times
//4. we can declare a variable without initializing it


// declare avariable with name as 'a' and assign the value '20'
var a=20;
//var is akeyword
// a: varaiable name
// = assignment operator
//20 : value assign to a variable


// redeclare avariable
var a= 40
console.log("value of a :", a)
a =100
console .log("the value of a :", a)

a= 105
console.log("the value of a:",a)


console.log("################################################")

//Let variable
// let variable cannot re declare
//user can reassign value
//it has block scope

//declare variable as p and assign value as 110

let P = 110
console.log(" the value of p is :", P)

let Q = 150
console.log(" the value of Q is :", Q)

//reasign value

Q = 200
console.log(" the  value of Q is :", Q)

//Identifier Q has already been declared

//let Q =  400  // it not allowed
//console.log("the value of Q is :",Q)

//Block scope
if (true){


    var x = 350
    let y=450
    console.log(" Var x inside the scope:", x)
    console.log(" Let y inside the scope:", y)
}
    console.log(" Var x outside the scope:", x)
   // console.log(" Let y outside the scope:", y)   //ReferenceError: y is not defined


    function greeting()
    {
        var x1 =20
        if (true)
        {
            var x2 =60
            console.log(" the  value of x1 is :", x1)

        }

         if (true)
        {
            console.log(" x2 is :", x2)
            console.log(" the  value of x1 is :", x1)

        }
    }
    greeting()
       var r
       console.log(r)


       console.log("################################################")

       //const variable
       //const variable cannot be re declare and re assign
       //it has block scope
       //const variable must be initialized at the time of declaration

  
       const P1 = 500
       console.log(" the value of P1 is :", P1)
      // const P11 = 600
     //  console.log(" the value of P1 is :", P1)  // Identifier 'P1' has already been declared

     //reassign constant value
     // P1 = 700
     // console.log(" the value of P1 is :", P1)  // Assignment to constant variable.
     //
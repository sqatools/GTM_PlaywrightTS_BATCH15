// Variable declaration and their Types
//Var , let, const

// var variables and can be redeclared and updated
// It has function scope and can be accessed before initialization (hoisting)
// we can redeclare and update the var variable
// we can declare var variable without initialization and it will be undefined
/*
var a=20
// var is a inbuilt keyword to declare a variable
// a is the variable name
// = assignment operator
//20 is the value assigned to the variable a


function greeting(){
var x1=50
if(true){
    var x2=60
    console.log("value of x1 inside if block:", x1); 
}
if(true){
  
    console.log("value of x2 inside if block:", x2); 
    console.log("value of x1 inside if block:", x1);
}
}

greeting()

*/

//var a=20
//console.log("Value of a",a)
//var a=100
//console.log("Value of a",a)

//let p=100
//console.log("Value of p",p)
//let Q=200
//console.log("value is",Q)

//Q=400  -- Let can be redecleared 
//console.log("value is Q",Q)

//let Q=500   --Let cannot be reassigned  
//console.log("value is Q",Q)
/*
if(true){
    var a=100
    let b=200
    console.log("Value insdie and outside scope",a)
    console.log("Value inside the scope",b)

}
console.log("Value insdie and outside scope",a)
 //console.log("Value outside scope does not work",b)
 */

/*
const p1=100
console.log("Value p1",p1)
const p1=200// SyntaxErroR: Identifier p1 has already been delared
console.log("value p1",p1)
*/
// // variable declearication and there type

// // var ,let ,const

// // ver variable and there properties

// //1. var variable can be redeclared and reassigned

// //2. it hase fucntion scope
// //3.we can use re-use n number of times
// //4.we can declare var variable without initialization

// // declear variable without initialization
// var a = 10;
// console.log("value ofa ",a);
// // re-declare variable
// var a = 20;
// console.log("value of ",a);


// // let variable 

// //1. let variable can be reassigned but not redeclared

// //2. it hase block scope
// //3.we can use re-use n number of times
// //4.we can declare let variable without initialization  

// // declear variable and assign value

// let c = 10;
// console.log("value of c ",c);

// let d = 20; 

// console.log("value of d ",d);

// // a=30;
// // console.log("value of ",a);

// // let a=40;
// // console.log("value of ",a);


// // block scope example

// if(true){
// {
//     var x=200
//     let y=300
//     console.log("var x inside scope ",x);
//    // console.log("let y inside scope ",y);
// }
// console.log("var x outside scope ",x);// accesable outside the block scope
// console.log("let y outside scope ",y);// not accesable outside the block scope
// }


// function gretting() {

//     var x1=50;

//     if(true){
//         var x2=60;
//         console.log("value of x1 :",x1);
//     }
//     if(true){
//         consolve.log("x2:",x2)
//         consolve.log("value of x1 in vlock:",x1);
// }
// }

//constant  variable 

// can not re-declare and reassign the value of constant variable
// it hase block scope
// we can not declare constant variable without initialization


const pi = 3.14;
console.log("value of pi ",pi); 

p=500
console.log("value of p ",p); 

//rules to declear variable in js
//1. variable name should not be a reserved keyword
//2. variable name should not start with number
//3. variable name should not contain space
//4. variable name should not contain special character except $ and _
//5. variable name should be meaningful
// variable name should be case sensitive


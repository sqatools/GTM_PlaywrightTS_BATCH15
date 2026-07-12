// var, let, const

var a= 50 
console.log("value of a:" , a)
a=100
console.log("value of a :", a)

// #################################################


let p= 100
console.log("value of p:", p)
let q =200
console.log("value of q:", q)
q=300
console.log("value of q:", q)

if (true)
{
    var x= 250
    let y = 300
    console.log("var x inside scope:", x)
    console.log("let y inside scope:", y)
}
console.log("var x outside scope:", x)
console.log("let y outside scope:", y) 

//let q= 500
//console.log("value of q:", q)

//####################################

const p1= 300
console.log("value of p1:", p1)

//const p2= 500 not allowed
//console.log("p1=:", p1)

// reassign not allowed 
// p1=500 
//console.log("value of p1:", p1)

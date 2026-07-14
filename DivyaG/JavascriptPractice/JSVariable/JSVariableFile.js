var a
a=10
console.log("Print a",a)
var a=20
console.log("Print a",a)
a=30
console.log("Print a",a)

let b
b=10
console.log("Print b",b)
//let b=20//Identifier 'b' has already been declared
b=20
console.log("Print b",b)

const c=10
console.log("Print c",c)
//c=20//Assignment to constant variable.
//const c=20//Identifier 'c' has already been declared
//c=20//Assignment to constant variable.
console.log("Print c",c)

if(true){
    var a=100
    console.log("Print a",a)
}
if(true){
    let b=100
    console.log("Print b",b)
}
if(true){
    const c=100
    console.log("Print c",c)
}
if(true){
    var a=1000
    let b=1000
    const c=1000
    console.log("Print a",a)
}
if(true){
    var a=1000
    let b=1000
    const c=1000
    console.log("Print a",a)
}
console.log("Print a",a)//prints 1000
console.log("Print b",b)//prints 20
console.log("Print c",c)//prints 10
if(true){
    const c=1000
    console.log("Print c",c)
}
console.log("Print c",c)//prints 10
//c=50//Assignment to constant variable.
console.log("Print c",c)//prints 10
//let b=50//Identifier 'b' has already been declared
console.log("Print b",b)//prints 20
b=50
console.log("Print b",b)//prints 50
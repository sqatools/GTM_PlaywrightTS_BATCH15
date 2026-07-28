//Implicit datatype conversion - The implicit data type conversion is the process of 
// converting one data type to another data type automatically by the JavaScript engine.
//  It is also known as type coercion.
// coversion of string to number
var a="10"  
console.log(a+"Hello") // output will be 10Hello because string is concatenated with number
console.log(a-5) // output will be 5 because string is converted to number and then subtracted
console.log(a-"3") // output will be 7 because string is converted to number and then subtracted
// conversion of number to string
var b=10
console.log(b+"Hello") // output will be 10Hello because number is converted to string and then concatenated
console.log(b+5) // output will be 15 because number is added to number
console.log(b+"3") // output will be 103 because number is converted to string and then concatenated

//explicit datatype conversion - The explicit data type conversion is the process of
//  converting one data type to another data type manually by the programmer.
//  It is also known as type casting.

var c="10"
console.log(Number(c)+5) // output will be 15 because string is converted to number and then added
console.log(String(c)+5) // output will be 105 because number is converted to string and then concatenated
console.log(Boolean(c)) // output will be true because string is converted to boolean and then evaluated
//1.Implicit data type conversion
//convert number to string
var a=10
console.log(a + "hello")

//convert string to number
var b=20
console.log(b - "10")

//2.Explicit data type conversion

//convert srting to number
var a="308900"
var s1=Number(a)
console.log(s1, ":", typeof(s1)) //308900 : number

//convert number to string

var b=45678
var s2=String(b)
console.log(s2, ":", typeof(s2), s2[2]) //45678 : string 6

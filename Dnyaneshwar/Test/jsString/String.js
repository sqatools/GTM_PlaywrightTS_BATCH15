/*
string is immutable in nature and we can not modify , update original string

string follow indexing and its start from 0




*/

var name = "Dnyaneshwar";
var age = 25;
var city = "mumbai";
var email ="dnyaneshwar@gmail.com"


console.log(name)
console.log(age)
console.log(city)
console.log(email)  

console.log("4th character of name is :",name[7])

// sting concatination
console.log("my name is "+name+" and my age is ",+age+" and city is " +city+ " and mail id is "+email)

//bactical concact string

console.log(`my name is ${name} age is  ${age}  and city is  ${city}  and ${email}`)

// String Method 

// 1. to uppercase , to lowercase

var s4= "we are LearMing javA script fUndamental"
console.log(s4)

console.log(s4.toLocaleUpperCase())
console.log(s4.toLocaleLowerCase())

// include : this method return true if any charractor / substring is available in target string

var a= " we are learning JS fundamental"

console.log(a.includes("JS"))

//replace - will replace one word to another word from given string

var e="we are learning javascript and its easy to learn javascript "

console.log(e.replace ("javascript" , "java"))

// replaceall 

console.log(e.replaceAll("javascript","Java"))

// trim - its is used to 

var a1= "  programming language"
console.log(a1.trim())
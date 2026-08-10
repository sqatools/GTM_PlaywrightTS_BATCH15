var name= "Harish Deshpande"
var age =28
var phonenumber= 2356789098
var email= "javapractice@gmail.com"


//print string value
console.log("name :" ,name ,typeof name)

//get the character from string using index
console.log("Character of string :", name[8] )


//concatination with plus operator
var result = " name:" +name+ "   age:"  +age+ "  phonenumber:"  +phonenumber+ "   email :" +email
console.log(result)

//concatination with blacttick
var result1 =`name: ${name}, age: ${age}, phonenumber:${phonenumber}, email :${email}`
console.log(result1)

console.log("#########################################")

//ToUppercase , ToLowerCase :converting the string into upper to lower and lower to upper 

var string1= "LeArNing tHe JavascRipt"
console.log(string1)
console.log("To uppercase :" ,string1.toUpperCase())
console.log("To uppercase :" ,string1.toLowerCase())


//include methode:this method return true if any character/substring is availble in the targated string
var string2 = "We are learning the fundamentals of JS concepts";
console.log(string2.includes("ing")); // true

console.log("###########################")
// replace method:replace one word from anoth word in given string

var string3="we are learning JavaScript and it is easy to learn JavaScript "
//console.log("replace the string :", string3.replace("JavaScript","Java"))

//replcae all
console.log( string3.replaceAll("JavaScript","TypeScript"))

console.log("################################")

var s2 = "  Programming Language  "
console.log(s2.trim()) // Programming Language

console.log("#################################")
// split method : this method split string in words with help of delimeters.

var s3= "Hello-we-are-Learning-JavaScript"
var result = s3.split("-")
console.log("result :", result) // [ 'Hello', 'we', 'are', 'Learning', 'JavaScript' ]

var s4= "India won First T20"
// split string with space
console.log(s4.split(" ")) // [ 'India', 'won', 'First', 'T20' ]


console.log("#################################")
// indexof method: This method provide index position of any given string or character.
// if multiple matching characters are there, then only first occurent result will be visible
var s5 =  "Learning JavaScript is Fun Java" 
console.log(s5.indexOf("J")) // 9

// if given character or substring is not available, then it will return -1
console.log(s5.indexOf("W")) // -1


console.log("#################################")
// slice method : This method return small string from long string.
// slice(start index, last index)

var s6 = "JavaScript Programming"
console.log(s6.slice(0, 10)) // JavaScript
console.log(s6.slice(11))
console.log(s6.slice(0, 5))


console.log("#################################")
// concat method : This methhod combine the string values and generate new string.

var a1 = "Hello"
var a2 = "Good Morning"

var result = a1.concat(" ", a2)
console.log("result :", result) // Hello Good Morning

console.log("#################################")
// ASCII value
// A-Z : 65-90
// a-z : 97-122

var r1 = "A".charCodeAt(0)
console.log(r1) // 65

var r2 = "n".charCodeAt(0)
console.log(r2) // 90

// get character using ASCII value
console.log(String.fromCharCode(65))

// get all character into string.
var result = ""
for(var i=65; i<=90; i++) {
  result += String.fromCharCode(i)
}
console.log(" result :", result) 

// ABCDEFGHIJKLMNOPQRSTUVWXYZ


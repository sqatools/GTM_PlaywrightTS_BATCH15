/*
- string is immutable in nature, we can update or modify the original string.
- string follows indexing
  0  1  2   3  4
" H  E  L   L  0"
*/


var name = "Ravi"
var age = 30
var email = "rahul@gmail.com"
var phone  = 8978798798

// print string value
console.log("name :", name, typeof name) // name : Rahul string

// get character from string using indexing.
console.log("value of index 2 :", name[2]) // value of index 2 : h

// cocatenation with plus operator
var result = "my name is "+name+"  and age is "+age+", email :"+ email+ ", phone: "+phone
console.log(result)

// cacatenation with backtick
var result3 = `my name is ${name}  and age is ${age}, email : ${email}, phone: ${phone}`
console.log(result3)
// my name is Rahul  and age is 30, email : rahul@gmail.com, phone: 8978798798

console.log("#################################")
// string methods.

// ToUpperCase, ToLowerCase: these convert string into upper and lower case.
var s11 = "We arE learning JavAScriPt FundaMeNtals"
console.log(s11)
console.log("Upper cases :", s11.toUpperCase())
console.log("Lower case :", s11.toLowerCase())
// Upper cases : WE ARE LEARNING JAVASCRIPT FUNDAMENTALS
// Lower case : we are learning javascript fundamentals

console.log("Lower case :", s11.toLocaleLowerCase())


console.log("#################################")
// includes method : this method return true if any character/substring is available in target strng.

var s1 = "Lering JS is function"
console.log(s1.includes("JS")) // true

console.log("#################################")
// replace string: replace method replace one word from another word in given string.

var s2 = "we are learning Javascript and Its easy to learn Javascript"
console.log(s2.replace("Javascript", "JAVA"))
// we are learning JAVA and Its easy to learn Javascript

// replace all content
console.log(s2.replaceAll("Javascript", "Python"))
// we are learning Python and Its easy to learn Python


console.log("#################################")
// trim method : this method remove all trailing spaces from given string.
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
//1.String is immutable in nature. we can't update or modify the original string
//2.String follows indexing , it starts from 0
/*
0 1 2 3 4
"H E L L O"
*/
var name = "Divya"
var age = 30
var email = "divya@yopmail.com"
var phone = 9087698076

//print the name of the person
console.log("Name of the person is :", name ,  typeof name)
//retrieve character of a name
console.log("Value of index 2:", name[2] )
//concatenation with + operator
var result = "My name is:" +name+ " My age is:" +age+ " My emailid is:" +email+ " My phone number is:"+phone
console.log(result)
//concatenation with backtick
var result = `My name is: ${name} My age is: ${age} My emailid is: ${email}  My phone number is ${phone}`
console.log(result)

//String methods
//To uppercase: this method converts string into upper case from lower case
var s1 = "We are lEArNing JavaScript"
console.log("Uppercase:",s1.toUpperCase())
console.log("Lower case:",s1.toLowerCase())

//include method:It returns true if ouput of any character or 
// substring is available in target string
var s1 = "Learning JS"
console.log(s1.includes('JS'))

//replace: It replaces the one word with another in a given string
var s1 = "Learning JS is fun and its easy to learn JS"
console.log(s1.replace('JS','Javascript'))
//replace all
console.log(s1.replaceAll('JS','Python'))
//trim:It removes all trailing spaces from given string
var s3 = " JS is a Programming Language "
console.log(s3.trim())
//split: This method split string with words with delimeters
var s4 = "Hello-we-are-learning-Javascript"
var result = s4.split("-")
console.log(result)

var s4 = "India won T20"
console.log(s4.split(" "))
//Index of:This method provide index position of any given element of
//  given string or character
//If multiple matching characters are there the it consider first occurence
//If given character is not in the string it returns -1


var s5 = "Learning Javascript is fun"
console.log(s5.indexOf('J'))
console.log(s5.indexOf('W'))
//slice method: This method returns small string from long string
//It requires (start index,last index)
//It considers space also
var s6 = "Javascript programming"
console.log(s6.slice(0,10))
console.log(s6.slice(11))

//concatenation of two strings
//This method combines two strings and generate a new string
var s1 = "Hello"
var s2 = "Good Morning"
var result = s1.concat("", s2) 
console.log(result)

//ASCII Value
//A-Z 65 to 90
//a-z 97 to 122

var r1 = ('A'.charCodeAt(0))
console.log(r1)

var r2 = "Zn".charCodeAt(1)
console.log(r2)

//get character from ASCII value
console.log(String.fromCharCode(65))

//get all the characters in a string
var result = ""
for( var i=65;i<=90;i++){
    result += String.fromCharCode(i)
}
console.log(result)

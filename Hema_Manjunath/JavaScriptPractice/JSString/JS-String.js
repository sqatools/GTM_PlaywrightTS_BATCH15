var name='Hemalatha'
var age=38
var email='hema@email.com'
var phoneno=6756468

// Print String value
console.log("name:", typeof name)
//get the letter/charachter from the string using Indexing
console.log("Print the Index :", name[5])

//concatenation with plus operator
var result="My Name is :" +name+" i am "+age+"old and myPhone num"+phoneno
console.log(result)

var result2=`My name is ${name} and age is ${age} , email:${email}`
console.log(result2)

//String method

//toUppercase, ToLowerCase :these convert string into upper and lower case 
var s11="We ARe leaRning JS"
console.log("Convert to all Uppercase :", s11.toLocaleUpperCase())
console.log("Convert to lowercase :",s11.toLowerCase())

// include menthod: This method return true if any character /substring is
//  availabe in target string

var S22="We are learning JS script "
console.log("This is Included " , S22.includes('JS'))

//replace method 
var s33="We are learning  Playwright using JS Script,Playwright is best with TS Script"
console.log("This is Included " , s33.replace('JS', 'TS'))
console.log("I want to replace completly :" , s33.replaceAll('Playwright', 'Selenium'))

//trim method
var s1="  Programming      Language"
console.log(s1.trim())

// Split method
var s2="we-are-learning-java, script"
var result=s2.split("-")
console.log("result:", result)

// Indexof method : 
var v4="Learning  JavaScript is a fun "
console.log(v4.indexOf("J"))

// if given search character is not avalable it throws -1
console.log(v4.indexOf("Y"))

//Slice method : This method return small string from long String
//Slice(Start Index, last Index)

var v2="Javascript learning"
console.log(v2.slice(0,10))
console.log(v2.slice(4,10))

//concat method
//Its combine the two value and combine

var a1="hello"
var a2="Welcome"

var result=a1.concat(" ",a2)
console.log(result)
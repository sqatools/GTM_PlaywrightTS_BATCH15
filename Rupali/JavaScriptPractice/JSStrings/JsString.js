var name = "Rahul"
var age = 30;
var email = "rahul@gmail.com";
var phone = 987654321;

console.log("person nameis:", name, typeof name)

console.log(" value at index 3 :", name[3]);

// concat with + operator
var result = "My name is" +name+ "age is" +age+ "email is" +email
console.log(result)


// backtick
//var result2 = `My name is ${name} age is ${age} email is ${email}`
var name = "Rahul";
var age = 30;
var email = "rahul@gmail.com";
var phone = 987654321;

var result3 = `my name is ${name} and age: ${age}, email : ${email}, phone: ${phone}`;
console.log(result3);

// string methods

var s2 ="WE are LeaRning JAVAScript PrograMS WITH PlayWriGHT"
console.log(s2)
console.log("Lower Case:", s2.toLowerCase());
console.log("Upper Case:", s2.toUpperCase())

// includes method
var s3 =" We are learning JS laungage"
console.log(s3.includes("JS"))

// Replace method

var s4 = "We are learning Javascript and its easy to learn Javascript"

console.log(s4.replace('Javascript','JAVA'))

//replace all
console.log(s4.replaceAll("Javascript", "Python"))

//trim method

var s5 = " programming Launguage"

console.log(s5.trim())


// split method

var s6 = "We-are-learning-JavaScript language"

console.log(s6.split("-"));

var s7 = "We love our home very much"
console.log(s7.split(' '))

var s8 = "Learning Java is fun"

console.log(s8.indexOf('J'))

console.log(s8.indexOf('k'))

// slice method

var str1 ="Programming Launguage"

console.log(str1.slice(0,11))

console.log(str1.slice(11))
//console.log(str1.slice(-1,3))

// concatenation

var a1 = "Hello"
var a2 ="Good morning"

var R1= a1.concat(a2)
console.log(R1)

var R2 = a1.concat(" ", a2)
console.log(R2)


let str = "Playwright";

console.log(str.startsWith("Play"));

console.log(str.startsWith("wright"));

let str = "Playwright";

console.log(str.endsWith("Play"));
console.log(str.endsWith("wright"));
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
var result3 = `my name is ${name} and age: ${age}, email : ${email}, phone: ${phone}`
console.log(result3)

// string methods

var s2 ="WE are LeaRning JAVAScript PrograMS WITH PlayWriGHT"
console.log(s2)
console.log("Lower Case:", s2.toLowerCase());
console.log("Upper Case:", s2.toUpperCase())

// includes methos
var s3 =" We are learning JS laungage"
console.log(s3.includes("JS"))

// Replace method

var s4 = "We are learning Javascript and its easy to learn Javascript"

console.log(s4.replace('Javascript','JAVA'))

//replace all
console.log(s4.replaceAll("Javascript", "Python"))

//trim method

var s5 = "programming Launguage"

console.log(s5.trim())
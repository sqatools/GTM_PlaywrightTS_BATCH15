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

console.log9("###########################")
// replace method:replace one word from anoth word in given string

var string3="we are learning JavaScript and it is easy to learn JavaScript "
//console.log("replace the string :", string3.replace("JavaScript","Java"))

//replcae all
console.log( string3.replaceAll("JavaScript","TypeScript"))

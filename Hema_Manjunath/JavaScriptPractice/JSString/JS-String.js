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
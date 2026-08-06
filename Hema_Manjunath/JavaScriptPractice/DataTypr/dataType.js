/* Premitive Datatype: The data type that hold only one value 
at time and it is immutable. 
*/
//1. Number
var n1=0
var n2=8.9
var n3=7867
var n4= 787879
var n5= -789    
console.log(n1, ":", typeof n1) 
console.log(n2, ":", typeof n2)
console.log(n3, ":", typeof n3)
console.log(n4, ":", typeof n4)
console.log(n5, ":", typeof n5)

//2. String  - The String is a sequence of characters enclosed in single quotes, double quotes or backticks.
var s1="H"
var s2='World'
var s3=`Hello World , Welcome to JavaScript. Learning Java script is a worderful topic`
var s4= "123"
var s5= "He123455@#$%^&*World"
console.log(s1, ":", typeof s1)
console.log(s2, ":", typeof s2)
console.log(s3, ":", typeof s3)
console.log(s4, ":", typeof s4)
console.log(s5, ":", typeof s5)
console.log("Length of s3:",s3.length)
//String  follows indexing and indexing starts from 0.
console.log("Index of s3:",s3[0])
console.log("Index of s3:",s3[1])
console.log("Index of s3:",s3[25])

//3. Boolean - The Boolean data type has only two values: true and false    .
 var b1=true
var b2=false
console.log(b1, ":", typeof b1)
console.log(b2, ":", typeof b2)

var p=100
var q=200
var r=300
console.log("Value of p==q",p==q)
console.log("Value of p==r",p==r)
console.log("Value of p!=q",p!=q)
console.log("Value of p!=r",p!=r)
//Undefined - The undefined data type has only one value: undefined. 
// A variable that has not been assigned a value is of type undefined.
var u1
console.log(u1, ":", typeof u1)

//null - The null data type has only one value: null.
var n1=null
console.log(n1, ":", typeof n1)

// Non premitive Data Type: The data type that can hold multiple 
// values at time and it is mutable.

// Array - The array is a collection of values. It can hold multiple values of different data types.
// Ararry can story all type of value in square brackets and it is mutable.
//each value in the array has its index position as like String and indexing starts from 0.
var arr1=[30,3.4, "Hello", true, null, undefined, [1,2,3], {name:"Hema", age:30}]
console.log(arr1, ":", typeof arr1)
console.log("Length of arr1:",arr1.length)
console.log("Index of arr1:",arr1[18])

// Object - The object is a collection of key-value pairs. It can hold multiple values of different 
// data types.
// Object can story all type of value in curly brackets and it is mutable.
//each value in the object has its key as like String and indexing starts from 0.
//no restriction on the key name but it should be unique and it should be in string format. 
var person={name:"Hema",
age:30,email:'hema@email.com',
Phone:67988}
console.log(person, ":", typeof person)
// added property to the object
person.address="Bangalore"
console.log(person, ":", typeof person)
// remove property from the object
delete person.Phone
console.log(person, ":", typeof person)

person.isMarried=true
console.log(person, ":", typeof person)
console.log(person.isMarried)

console.log(person.name)
console.log(person.age)
console.log(person['name'])

person.name="Hema Manjunath"
console.log(person.name)

//Function - The function is a block of code that can be executed when called. 
// It can hold multiple values of different data types.

function addition(n1,n2){
    console.log("Addition number:" , n1+n2)

}
addition(30,40)

// Provide me the simple function example 
function greet(name){
    console.log("Hello " + name + ", Welcome to JavaScript!")
}
greet("Hema")

function multiple(a,b){
console.log("Multiplication of :",a,"and",b,"is:",a*b)
}
multiple(5,8)

function gretting(name){
    console.log("Hello!",name,"Welcome to the javaworld")
}
gretting("Hema")


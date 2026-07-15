// Premative Data Types : The datatypes that hold only one value at atime and it is immutable in nature
// 1. number
       var n1 = 0
       var n2 = 5.5
       var n3 = 7867
       var n4 = 99087678
       var n5 = -778967
       console.log(n1, ":", typeof n1)
       console.log(n2, ":", typeof n2)
       console.log(n3, ":", typeof n3)
       console.log(n4, ":", typeof n4)
       console.log(n5, ":", typeof n5)



 // 2.string
var s1 = "h"
var s2 = "Hello"
var s3 = "Today, I will continue testing the remaining scenarios."
var s4 = "1234#$%haello"

console.log("s1 :", s1,":",typeof(s1))
console.log("s2 :", s2,":",typeof(s2))
console.log("s3 :", s2,":",typeof(s3))
console.log("s4 :", s4,":",typeof(s4))

//2.STRING
//string follow indexing where each character in the string is assigned a unique
 var a="hello"

 // H  e  l  l  o
 // 0  1  2  3  4

 console.log("value of index 0 :", a[0])
 console.log("value of index 1 :", a[1])
 console.log("value of index 2 :", a[2])
 console.log("value of index 3 :", a[3])
 console.log("value of index 4 :", a[4])


 //3.BOOLEAN
 // boolean contain only two values
 // boolean is the output of any condition

 var p=100
 var q=200
 var r =100
 console.log(p==q)
 console.log(p==r)
 // 4.UNDEFINED : when we declare variable and dont assign value, then default data type is undefined

 var x
 var y
 console.log("x :", x, typeof x)
 console.log("y :", x, typeof y)

//5. null :intentionally keep null value
var h1 = null
console.log("h1 :", h1, ":", typeof h1 )


console.log("#############################")
// Non Premative Data Types

//Non Premative : data type contain multiple values and mutable in nature

//1. array : array can store all types of value in square bracket
//Each value of array has its index position as like string
     //     0    1       2           3                 4         5       6
var arr1 = [30, 4.5, 'Javascript', [5,7, 8], { a :300, b :456}, true , false]

console.log("print all the value in arr1", arr1)
console.log("print the value of index number 2 ;" ,arr1[2])
console.log("print the child array in arr1 :", arr1[3] )
console.log("print the child array in arr1 :", arr1[4]['a'] )

arr1.push(600)
console.log(arr1)

console.log("#####################################")

//2. object
// object datatype store value in key value format in curly braces
//it only store unique key , duplicate keys are not allowed
//there is no restriction in values

var person= { name : "harish", age :28, email: "havascript@gmail.com", phone :23456789}
console.log(person)
// add property to object datatype
person.address= "Hyderabad"
console.log(person)
// remove property from object datatype
delete person.phone
console.log("post delete output :" ,person)
 
// get the user detail with key
console.log(person['name'])

// updating the value 
person['name']= "Virat"
console.log(person)

console.log("####################################")

//3.Function
// Block of code that help as to reduce the duplicacy code and we can re -use number of times

function addition(n1,n2)
{
  console.log("addition :", n1+n2)
}
//call function
addition(20, 30)


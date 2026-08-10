//Primitive data type

//1.number
n1 = 0
n2 = 8.9
n3 = 7890
n4 = 788999999999999
n5 = -98989
console.log(n1,":", typeof n1)
console.log(n2,":", typeof n2)
console.log(n3,":", typeof n3)
console.log(n4,":", typeof n4)
console.log(n5,":", typeof n5)

//2.String
var s1="d"
var s2="divya"
var s3="divya is best"
var s4="23"
console.log("s1 :", s1 ,":",typeof(s1))
console.log("s2 :", s2 ,":",typeof(s2))
console.log("s3 :", s3,":",typeof(s3))
console.log("s4 :", s4,":",typeof(s4))

// String follows indexing, where each character in the string is assigned a unique index starting from 0. For example, in the string "hello", 'h' is at index 0, 'e' is at index 1, 'l' is at index 2, and so on. This allows for easy access and manipulation of individual characters within the string.

var a="hello"
//  0  1  2  3  4   indexing
//  H  e  l  l  o
console.log("value of a[1] :",a[1])
console.log("value of a[3] :",a[3])

//3. boolean : boolean contains only 2 value, true or false
// boolean is the output of any condition.
var a=10
var b=20
var c=10
console.log(a==b)
console.log(a==c)

// 4: undefined : when we declare variable and don't assign value, then default data type is undefined.
var x;
var y;
console.log("value of x:",x,typeof x)
console.log("value of y:",y,typeof y)

//
// 5. null : Intetionally keep blank value.
var x=null
console.log("value of x:",x,typeof x)

console.log("####################################")
// non-premitive : data type contains multiple values and mutable in nature.
//1. array : array can store all types of values in square bracket
// each value in the array has its index position as like string.
var arr1=[3, 4.5, -6, 'scripting', [2, 4, 8], [0, 3, 5], {a:124 ,b:234}, true,false]
console.log(arr1)
console.log(arr1[2], arr1[3], arr1[5],arr1[6])
arr1.push([6,8,9])
console.log(arr1[9])

console.log("#################################")
//2. object : object data type store values in key value format in curly braces.
// it only store unique keys, duplicate keys are not allowed.
// there is no restriction on value.

var person = {name: 'Divya', age:40, email:'abc@abc.com', phone:6789045678}
    console.log(person)
    //Add new property  to object data type
    person.address='nizampet'
    console.log(person)
    //Remove property from object data type
   delete person.email
   console.log(person)
   //get user details with key
   console.log(person['name'])
   //updating property in object data type
   person['name']="DivyaG"
   console.log(person)
   //3. function : function is block of code that help us to reduce the 
// duplicacy code and we can re-use number of times.

function addition(x,y)
{
    console.log("addition of two numbers:", x+y)
}

//call function
addition(10,3)

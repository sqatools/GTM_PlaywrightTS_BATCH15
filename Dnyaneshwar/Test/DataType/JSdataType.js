//premitive data types : the data type that hold only one value at a time and it is immutable in nature

//1. Number : it is used to store numeric values

var n1=0;
var n2=10;
var n3=20.5;    
var n4=-5;
var n5=-6767755
console.log(n1, ":", typeof n1)
console.log(n2 ,":",  typeof n2);
console.log(n3 ,":",  typeof n3);
console.log(n4 ,":",  typeof n4);
console.log(n5 ,":",  typeof n5);


//String 

var s1="Hello";
var s2='World';
var s3="hallo we are learning javascript";
var s3="!@#hhfhhf5677";

console.log("s1 : " ,s1,":",typeof (s1));
console.log("s2: " , s2, ",",typeof (s2))
console.log("s3 :" , s3, ": " , typeof (s3))

// String follows indexing, where each character in the string is assigned a unique index starting from 0. For example, in the string "hello", 'h' is at index 0, 'e' is at index 1, 'l' is at index 2, and so on. This allows for easy access and manipulation of individual characters within the string.

var a = "Hello"

//  0  1  2  3  4   indexing
//  H  e  l  l  o

console.log("value of index 1 :", a[1]) // value of index 1 : e
console.log("value of index 3 :", a[3]) // value of index 3 : l


//3. boolean : boolean contains only 2 value, true or false
// boolean is the output of any condition.
var p = 100
var q = 200
var r = 100
console.log(p == q) // false
console.log(p == r) // true

// 4: undefined : when we declare variable and don't assign value, then default data type is undefined.
var x;
var y;
console.log("value of x :", x, typeof x)
// value of x : undefined undefined
console.log("value of x :", y, typeof y)
// value of x : undefined undefined


// 5. null : Intetionally keep blank value.
var h1 = null
console.log(h1, typeof h1) // null object


console.log("####################################")
// non-premitive : data type contains multiple values and mutable in nature.
//1. array : array can store all types of values in square bracket
// each value in the array has its index position as like string.

//          0    1    2            3           4                5     6
var arr1 = [30, 4.5, 'JavaScript', [5, 7, 8], {a: 123, b: 456}, true, false]
console.log(arr1)

console.log(arr1[2])
console.log("child array :", arr1[3]) // child array : [ 5, 7, 8 ]
console.log("child object :", arr1[4]['a']) //child object : 123

arr1.push(100)
console.log(arr1)



console.log("#################################")
//2. object : object data type store values in key value format in curly braces.
// it only store unique keys, duplicate keys are not allowed.
// there is no restriction on value.


var person = {name: "Rohit", age: 40, email: 'rohit@gmail.com', phone: 68767687690}
console.log(person)

// Add new peoperty to object data type
person.address = "Pune, Baner"
console.log(person)

// remove property from object data type
delete person.email
console.log("output post delete :", person)
// { name: 'Rohit', age: 40, phone: 68767687690, address: 'Pune, Baner' }


// get user details with key
console.log(person['name']) // Rohit

person['name'] = 'Virat'
console.log(person)
// { name: 'Virat', age: 40, phone: 68767687690, address: 'Pune, Baner' }


//3. function : function is block of code that help us to reduce the 
// duplicacy code and we can re-user number of times.

function addition(n1, n2) {
    console.log("Addition :", n1+n2)
}

// call function
addition(30, 40)
addition(30, "Hello")

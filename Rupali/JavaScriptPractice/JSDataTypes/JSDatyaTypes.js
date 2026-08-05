//data types

//premitive data types  -- immutable in nature
//number
var n1=0;
var n2=8.9;
var n3= 8767;
var n4= 2131312323;
var n5 = -45;

console.log(n1, typeof n1);
console.log(n2, typeof n2);
console.log(n3, typeof n3);
console.log(n4, typeof n4);
console.log(n5, typeof n5);

//string
var s1 ="hi";
var s2 = 'hello';
var s3 = `welcome to the testing world! enjoy the journey`;
var s4 = "123%$%Rupali";;
console.log(s1, typeof s1);
console.log(s2, typeof s2);
console.log(s3, typeof s3);
console.log(s4, typeof s4);

// boolean

var p= 100;
var q=200;
var r=100;
console.log(p==q);
console.log(p==r);


// undefined 

var u1;
console.log(u1, typeof u1); 
var u2 = undefined;
console.log(u2, typeof u2);


// null
var n1 = null;
console.log(n1, typeof n1); // null object 


console.log("---------------------------------------------------");
// non premitive data types -- mutable in nature
// Array
var arr1 = [23,4.5,"Javascript", [5,6,7],{name:"Rupali", age:25},true,false];
console.log(arr1, typeof arr1);
console.log(arr1[2]);
console.log("child object:", arr1[3]);
console.log("child object property:", arr1[4]['name']);
arr1.push(100);
console.log(arr1);


// Object
var person = {name:"Rupali", age:25, email:"rupali@example.com", phone: 1234567890};
console.log(person, typeof person);
console.log("Name:", person.name);
console.log("Age:", person['age']);

//Remove property from object
delete person.phone;
console.log("After removing phone property:", person);

//add property to object
person.address = "123 Main St";
console.log("After adding address property:", person);

//update property in object
person.age = 26;
console.log("After updating age property:", person);    


// Function
function addition (n1,n2){
    console.log("Addition of", n1+n2);
}
addition(10,20);
addition(100,"hello");
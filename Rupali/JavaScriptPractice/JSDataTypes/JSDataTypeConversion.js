//implicit conversion

// convert number to string
var s1= 23;
console.log(s1+" is a number");

// string to number
var n1= "23";
console.log(n1+7);



//Explicit conversion

// convert number to string
var n1= 23;
var s1= String(n1);
console.log(s1, typeof s1);

// convert string to number
var s2= "23";
var n2= Number(s2);
console.log(n2, typeof n2);
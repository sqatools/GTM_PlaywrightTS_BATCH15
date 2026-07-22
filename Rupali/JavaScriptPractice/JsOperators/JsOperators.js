var x=100;
var y=50;

console.log("value of x :", x);
console.log("value of y :", y);
console.log("addition :", x+y);
console.log("subtraction :", x-y);
console.log("multiplication :", x*y);
console.log("division :", x/y);
console.log("modulus :", x%y);


console.log("#######################################")
//Assignment Operators
var a= 50;

console.log("value of a :", a);

a += 10; // a = a + 10
console.log("value of a after addition :", a);

a -= 10; // a = a - 10
console.log("value of a after subtraction :", a);

a *= 10; // a = a * 10
console.log("value of a after multiplication :", a);

a /= 10; // a = a / 10
console.log("value of a after division :", a);

a %= 10; // a = a % 10
console.log("value of a after modulus :", a);

a **= 10; // a = a ** 10
console.log("value of a after exponentiation :", a);


console.log("#######################################")
//Comparison Operators
var a =10;
var b="10";
var c=20;

// == operator
console.log("a==b:", a==b);
console.log("a==c:", a==c);

//=== operator
console.log("a===b:", a===b);
console.log("a===c:", a===c);

//!= operator

console.log("a!=b :", a!=b);
console.log("a!=c :", a!=c);


//!== operator

console.log("a!==b:", a!==b);
console.log("a!==c:", a!==c);


//> operator
var p =100;
var q=200;
var r=100;

console.log("p>q:", p>q);

//< operator
console.log("p<q:", p<q);

//>= operator
console.log("q>=p:", q>=p);

//<= operator
console.log("p<=q:", p<=q);
console.log("q<=r:", q<=r);



console.log("#######################################")
//Logical Operators
var M = 100;
var N = 200;
var O = 300;
console.log("M<N && N<O :", M<N && N<O);
console.log("M<N || N<O :", M<N || N<O);
console.log("!(M<N) :", !(M<N));


console.log("#######################################")
//Ternary Operator
var num = 10;
var result = (num%2==0) ? "Even Number" : "Odd Number";
console.log(num, "is", result);

var age = 18;
var eligibility = (age>=18) ? "Eligible to vote" : "Not Eligible to vote";
console.log("Age:", age, "-", eligibility);

var num1 = 15;
var result1 = (num1%3==0) ? "Divisible by 3" : "Not Divisible by 3";
console.log(num1, "is", result1);

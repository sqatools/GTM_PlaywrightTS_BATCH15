// Operators in JAVAScript
/* + : plus
 - : minus
 * : multiply
 / : divide
 % : modulus operator
 **: exponential operator
*/ 


var x = 100
var y = 50
console.log("val of x:", x)
console.log("value of y:", y)
console.log("Addition of x, y :", x+y)
console.log("Subtractios :", x-y)
console.log("division of values :", x/ y)
console.log("module operato", 20%3) // module operato 2
console.log("Square of numbers:", 5**3)
console.log("multiplication :", 30*3)

//1.    Area of Triangle	(Base × Height) / 2
//2	    Perimeter of Triangle:	Side1 + Side2 + Side3
//3.	Area of Parallelogram:	Base × Height
//4.	Area of Rhombus:	(Diagonal1 × Diagonal2) / 2
//5.	Area of Trapezium:	((Base1 + Base2) × Height) / 2
//6.	Volume of Cylinder:	π × Radius² × Height
//7.	Surface Area of Cylinder	2 × π × Radius × (Radius + Height)
// 8	Volume of Cone	(π × Radius² × Height) / 3
// 9	Volume of Sphere	(4/3) × π × Radius³
// 10	Surface Area of Sphere	4 × π × Radius²
// 11	Speed	:Distance / Time
// 12	Distance	Speed × Time
// 13	Time 	Distance / Speed
// 14	Force	Mass × Acceleration
// 15	Work Done	Force × Distance
// 16	Power	Work / Time
// 17	Kinetic Energy	(1/2) × Mass × Velocity²
// 18	Potential Energy	Mass × Gravity × Height
// 19	Momentum	Mass × Velocity
// 20	Pressure	Force / Area
// 21	Density	Mass / Volume
// 22	Simple Interest	(Principal × Rate × Time) / 100
// 23	Compound Interest	Principal × (1 + Rate/100)^Time − Principal
// 24	Total Amount (SI)	Principal + Simple Interest
// 25	Discount Amount	(Price × Discount%) / 100
// 26	Final Price	Price − Discount
// 27	GST Amount	(Price × GST%) / 100
// 28	Total Bill with GST	Price + GST
// 29	Profit	Selling Price − Cost Price
// 30	Loss	Cost Price − Selling Price
// 31	Profit Percentage	(Profit / Cost Price) × 100
// 32	Loss Percentage	(Loss / Cost Price) × 100
// 33	Percentage	(Obtained / Total) × 100
// 34	Average of 5 Numbers	(a+b+c+d+e)/5

console.log("##############################################")
// Assignment Operators


// = : assignment operator
var x = 50
console.log("value of x :", x)
// += : add and assign operator
x += 10 // x = x + 10
console.log("value of x :  x += 10:", x) // x += 10: 60

// -= : subtract and assign operator
x -= 5 // x = x -5
console.log("value of x : x -= 5:", x) //  x -= 5: 55

// *= : multiply and assign operator
x *= 10 // x = x * 10
console.log("value of x : x *= 10:", x) // x *= 10: 550
// /= : divide and assign operator

x /= 5 // x = x /5
console.log("value of x : x /= 5:", x) // 110

// %= : modulus and assign operator
x %= 3 // x = x/11
console.log("value of x : x %= 11:", x) // 2
// **= : exponential and assign operator

x **= 4 // x = x**4
console.log("value of x : x **= 4:", x) // 16


console.log("###################################")
// comparision operator
var a = 10
var b = "10"
var c = 20
var d = 10
// == : equal(data only)
console.log("a == b: ", a == b)
console.log("a == c: ", a == c)

// === : strict equal(check data and data type)
console.log("a === b: ", a === b)
console.log("a === c: ", a === c)

// != : not equal
console.log("a != b: ", a != b) // false
console.log("a != c: ", a != c) // true

// ! == : not equal with data type check
console.log("a !== b: ", a !== b) // true
console.log("a !== c: ", a !== c) // true

var p = 100
var q = 200
var r = 100
// > : greater than
console.log("q > p :", q > p) // q > p : true

// < : less than
console.log("p < r:", r > p) // p < r: false

// >= : greater than equal
console.log("q >= p:", q >= p) // q >= p: true

// <= : less than equal
console.log("p <= r:", q >= p)

console.log("############ Logical operator ##################")
// and codition
var M = 100
var N = 200
var o  = 300 
// cond1 && cond2 
//1. false && false : false
console.log("M > N && N > o: ", M > N && N > o)  // M > N && N > o:  false

// 2. true && false : false
console.log("N > M && N > o :", N > M && N > o) // N > M && N > o : false

//3. false && true
console.log("N > o && M > N", N > o && M > N) // false

//4.true && true : true
console.log("o > N && o > M:", o > N && o > M) // true



console.log("#############################")
var M = 100
var N = 200
var o  = 300 

// or condition 
// cond1 || cond2

//1. false || false : false
console.log("M > N || N > o: ", M > N || N > o)  // M > N || N > o:  false

// 2. true || false : true
console.log("N > M || N > o :", N > M || N > o) // N > M || N > o : true

//3. false || true
console.log("N > o || N > M: ", N > o || N > M) // true

//4.true || true : true
console.log("o > N || o > M:", o > N || o > M) // true
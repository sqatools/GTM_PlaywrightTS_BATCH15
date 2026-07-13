var x = 10;
var y = 5;


// *******************************

console.log("Addition: " + (x + y));
console.log("Subtraction: " + (x - y));
console.log("Multiplication: " + (x * y));
console.log("Division: " + (x / y));
console.log("Modulus: " + (x % y));
console.log("Exponentiation: " + (x ** y));
console.log("Increment: " + (++x));
console.log("Decrement: " + (--y));
console.log("Assignment: " + (x += y));
console.log("Comparison: " + (x > y));
console.log("Logical AND: " + (x > 5 && y < 10));
console.log("Logical OR: " + (x > 5 || y < 10));
console.log("Logical NOT: " + !(x > 5));


// *******************************

// Area of triangle = 1/2 * base * height 
var base = 10;
var height = 20;
var area = 1/2 * base * height;
console.log("Area of triangle is: " + area);

//perimeter of triangle = a + b + c
var a = 10;
var b = 20;
var c = 30;
var perimeter = a + b + c;
console.log("Perimeter of triangle is: " + perimeter);

// area of parellogram = base * height
var base = 10;
var height = 20;
var area = base * height;
console.log("Area of parellogram is: " + area);

// area of rhombus = 1/2 * d1 * d2
var d1 = 10;
var d2 = 20;
var area = 1/2 * d1 * d2;
console.log("Area of rhombus is: " + area);

// area of trapezium = 1/2 * (a + b) * h
var a = 10;
var b = 20;
var h = 30;
var area = 1/2 * (a + b) * h;
console.log("Area of trapezium is: " + area);

// volume of cylinder = π * r^2 * h
var r = 10;
var h = 20;
var volume = Math.PI * Math.pow(r, 2) * h;
console.log("Volume of cylinder is: " + volume);


//surface area of cylinder = 2 * π * r * (r + h)
var r = 10;
var h = 20;
var surfaceArea = 2 * Math.PI * r * (r + h);
console.log("Surface area of cylinder is: " + surfaceArea);


// volume of cone = 1/3 * π * r^2 * h
var r = 10;
var h = 20;
var volume = 1/3 * Math.PI * Math.pow(r, 2) * h;
console.log("Volume of cone is: " + volume);

// volume of sphere = 4/3 * π * r^3
var r = 10;
var volume = 4/3 * Math.PI * Math.pow(r, 3);
console.log("Volume of sphere is: " + volume);


// surface area of sphere = 4 * π * r^2
var r = 10;
var surfaceArea = 4 * Math.PI * Math.pow(r, 2);
console.log("Surface area of sphere is: " + surfaceArea);

// speed = distance / time
var distance = 100;
var time = 10;
var speed = distance / time;
console.log("Speed is: " + speed);

// distance = speed * time
var speed = 100;
var time = 10;
var distance = speed * time;
console.log("Distance is: " + distance);


// time = distance / speed
var distance = 100;
var speed = 10;
var time = distance / speed;
console.log("Time is: " + time);

// force = mass * acceleration
var mass = 10;
var acceleration = 20;
var force = mass * acceleration;
console.log("Force is: " + force);

// work = force * distance
var force = 10;
var distance = 20;
var work = force * distance;
console.log("Work is: " + work);

// power = work / time
var work = 10;
var time = 20;
var power = work / time;
console.log("Power is: " + power);

// kinetic energy = 1/2 * mass * velocity^2
var mass = 10;
var velocity = 20;
var kineticEnergy = 1/2 * mass * Math.pow(velocity, 2);
console.log("Kinetic energy is: " + kineticEnergy);

// potential energy = mass * gravity * height
var mass = 10;
var gravity = 9.8;
var height = 20;
var potentialEnergy = mass * gravity * height;
console.log("Potential energy is: " + potentialEnergy);

// momentum = mass * velocity
var mass = 10;
var velocity = 20;
var momentum = mass * velocity;
console.log("Momentum is: " + momentum);

// pressure = force / area
var force = 10;
var area = 20;
var pressure = force / area;
console.log("Pressure is: " + pressure);

// density = mass / volume
var mass = 10;
var volume = 20;
var density = mass / volume;
console.log("Density is: " + density);

// simple interest = (principal * rate * time) / 100
var principal = 1000;
var rate = 5;
var time = 2;
var simpleInterest = (principal * rate * time) / 100;
console.log("Simple interest is: " + simpleInterest);

// compound interest = principal * (1 + rate/100)^time − principal
var principal = 1000;
var rate = 5;
var time = 2;
var compoundInterest = principal * Math.pow((1 + rate/100), time) - principal;
console.log("Compound interest is: " + compoundInterest);

// total amount (SI) = principal + simple interest
var principal = 1000;
var simpleInterest = 100;
var totalAmount = principal + simpleInterest;
console.log("Total amount (SI) is: " + totalAmount);

// discount amount = (price * discount%) / 100
var price = 1000;
var discount = 10;
var discountAmount = (price * discount) / 100;
console.log("Discount amount is: " + discountAmount);

// final price = price − discount
var price = 1000;
var discount = 100;
var finalPrice = price - discount;
console.log("Final price is: " + finalPrice);

// GST amount = (price * GST%) / 100
var price = 1000;
var gst = 18;
var gstAmount = (price * gst) / 100;
console.log("GST amount is: " + gstAmount);

// total bill with GST = price + GST
var price = 1000;
var gstAmount = 180;
var totalBill = price + gstAmount;
console.log("Total bill with GST is: " + totalBill);

// profit = selling price − cost price
var sellingPrice = 1200;
var costPrice = 800;
var profit = sellingPrice - costPrice;
console.log("Profit is: " + profit);

// loss = cost price − selling price
var costPrice = 1000;
var sellingPrice = 600;
var loss = costPrice - sellingPrice;
console.log("Loss is: " + loss);

// profit percentage = (profit / cost price) × 100
var profit = 200;
var costPrice = 800;
var profitPercentage = (profit / costPrice) * 100;
console.log("Profit percentage is: " + profitPercentage);

// loss percentage = (loss / cost price) × 100
var loss = 200;
var costPrice = 1000;
var lossPercentage = (loss / costPrice) * 100;
console.log("Loss percentage is: " + lossPercentage);

// percentage = (obtained / total) × 100
var obtained = 10;
var total = 100;
var percentage = (obtained / total) * 100;
console.log("Percentage is: " + percentage);

// average of 5 numbers = (a+b+c+d+e)/5
var a = 20;
var b = 20;
var c = 40;
var d = 40;
var e = 60;
var average = (a + b + c + d + e) / 5;
console.log("Average of 5 numbers is: " + average);



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

// Assigment operators  
// = : assigment operator
var x = 50
console.log("value of x : ", +x )

// += : add and assigment operator
x+= 10 // x= x+10
console.log("value of x : ", +x )

// -= : subtract and assigment operator
x-= 10 // x= x-10
console.log("value of x : ", +x )

// *= : multiply and assigment operator
x*= 10 // x= x*10
console.log("value of x : ", +x )

// /= : divide and assigment operator
x/= 10 // x= x/10
console.log("value of x : ", +x )

// %= : modulus and assigment operator
x%= 10 // x= x%10
console.log("value of x : ", +x )

// **= : exponentiation and assigment operator
x**= 10 // x= x**10
console.log("value of x : ", +x )

// comparison operators

// == : equal to operator
var x = 10;
var y = "10";
console.log("value of x == y : ", + (x == y) ) // true  

// === : equal value and equal type operator
var x = 10;
var y = "10";
console.log("value of x === y : ", + (x === y) ) // false   

// != : not equal operator
var x = 10;
var y = 20;
console.log("value of x != y : ", + (x != y) ) // true  

// !== : not equal value or not equal type operator
var x = 10;
var y = "10";
console.log("value of x !== y : ", + (x !== y) ) // true    

// > : greater than operator
var x = 10;
var y = 5;
console.log("value of x > y : ", + (x > y) ) // true

// < : less than operator
var x = 10;
var y = 5;
console.log("value of x < y : ", + (x < y) ) // false   

// >= : greater than or equal to operator
var x = 10;
var y = 5;
console.log("value of x >= y : ", + (x >= y) ) // true

// <= : less than or equal to operator
var x = 10;
var y = 5;
console.log("value of x <= y : ", + (x <= y) ) // false 

// logical operators

// && : logical AND operator
var x = 10;
var y = 5;
console.log("value of x > 5 && y < 10 : ", + (x > 5 && y < 10) ) // true    


// || : logical OR operator
var x = 10;
var y = 5;
console.log("value of x > 5 || y < 10 : ", + (x > 5 || y < 10) ) // true    

// ! : logical NOT operator
var x = 10;
console.log("value of !(x > 5) : ", + !(x > 5) ) // false

// typeof : type of operator        
var x = 10;
console.log("value of typeof x : ", + typeof x ) // number

// instanceof : instance of operator
var x = 10;
console.log("value of x instanceof Number : ", + (x instanceof Number) ) // false   

// in : in operator
var x = {name: "John", age: 30};
console.log("value of 'name' in x : ", + ('name' in x) ) // true    

//  delete : delete operator
var x = {name: "John", age: 30};
delete x.age;
console.log("value of x : ", + x ) // {name: "John"}

// new : new operator
var x = new Date();
console.log("value of x : ", + x ) // current date and time


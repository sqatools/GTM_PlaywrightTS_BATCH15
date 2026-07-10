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

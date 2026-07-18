//1.    Area of Triangle    (Base × Height) / 2

var base = 5;
var height = 10;git
console.log("Area of Triangle: " + (base * height) / 2);


//2     Perimeter of Triangle:  Side1 + Side2 + Side3

var side1 = 5;
var side2 = 6;
var side3 = 7;
console.log("Perimeter of Triangle: " + (side1 + side2 + side3));

//3.    Area of Parallelogram:  Base × Height

var base = 5;
var height = 10;
console.log("Area of Parallelogram: " + (base * height));


//4.    Area of Rhombus:    (Diagonal1 × Diagonal2) / 2
var diagonal1 = 8;
var diagonal2 = 6;
console.log("Area of Rhombus: " + (diagonal1 * diagonal2) / 2);



//5.    Area of Trapezium:  ((Base1 + Base2) × Height) / 2
var base1 = 5;
var base2 = 7;
var height = 10;
console.log("Area of Trapezium: " + ((base1 + base2) * height) / 2);


//6.    Volume of Cylinder: π × Radius² × Height
var radius = 5;
var height = 10;
console.log("Volume of Cylinder: " + (Math.PI * Math.pow(radius, 2) * height));


//7.    Surface Area of Cylinder    2 × π × Radius × (Radius + Height)
var radius = 5;
var height = 10;
console.log("Surface Area of Cylinder: " + (2 * Math.PI * radius * (radius + height)));

// 8    Volume of Cone  (π × Radius² × Height) / 3
var radius = 5;
var height = 10;
console.log("Volume of Cone: " + (Math.PI * Math.pow(radius, 2) * height) / 3);

// 9    Volume of Sphere    (4/3) × π × Radius³
var radius = 5;
console.log("Volume of Sphere: " + ((4 / 3) * Math.PI * Math.pow(radius, 3)));

// 10   Surface Area of Sphere  4 × π × Radius²
var radius = 5;
console.log("Surface Area of Sphere: " + (4 * Math.PI * Math.pow(radius, 2)));

// 11   Speed   :Distance / Time
var distance = 100;
var time = 10;
console.log("Speed: " + (distance / time));

// 12   Distance    Speed × Time
var speed = 10;
var time = 10;
console.log("Distance: " + (speed * time));

// 13   Time    Distance / Speed
var distance = 100;
var speed = 10;
console.log("Time: " + (distance / speed));

// 14   Force   Mass × Acceleration
var mass = 10;
var acceleration = 5;
console.log("Force: " + (mass * acceleration));

// 15   Work Done   Force × Distance
var force = 10;
var distance = 10;
console.log("Work Done: " + (force * distance));

//Filename : Assignment1.js
//Status : Done


var x1 =12
var x2 =33
var x3 =11

if(x1>x2 && x1> x3){
    console.log ("X1 is eligible to vote :" + x1) 
}
else if (x2>x1 && x2> x3){
    console.log ("X2 is eligible to vote :" + x2) 
}
else if (x3>x1 && x3> x2){
    console.log ("X3 is eligible to vote :" + x3) 
}


var x1 = 77 


if (x1%7 == 0 && x1%11 == 0) {
    console.log("This number is divisible by 7 and 11:", x1)
} else {
    console.log("This number is not divisible by 7 and 11:", x1)
}

var mark =65;

if (mark >= 90 && mark <= 100) {
    console.log("A Grade")
}   else if (mark >= 80 && mark < 90) {
    console.log("B Grade")
}   else if (mark >= 70 && mark < 80) {
    console.log("C Grade")
}   else if (mark >= 60 && mark < 70) {
    console.log("D Grade")
}       
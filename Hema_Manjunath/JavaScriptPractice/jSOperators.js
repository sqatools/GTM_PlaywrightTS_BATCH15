/*
+  : plus
-  : minus
*  : multiply
/  : divide
%  : modulus operator
** : exponential operator
*/
/*
var x = 100;
var y = 50;

console.log("val of x:", x);
console.log("value of y:", y);
console.log("Addition of x, y :", x + y);
console.log("Subtractions :", x - y);
console.log("division of values :", x / y);
console.log("module operator", 20 % 3);
console.log("Square of numbers:", 5 ** 3);
console.log("multiplication :", 30 * 3);

var triangleBase = 10;
var triangleHeight = 5;
console.log("1. Area of Triangle =", (triangleBase * triangleHeight) / 2);

var side1 = 3;
var side2 = 4;
var side3 = 5;
console.log("2. Perimeter of Triangle =", side1 + side2 + side3);

var parallelogramBase = 8;
var parallelogramHeight = 6;
console.log("3. Area of Parallelogram =", parallelogramBase * parallelogramHeight);

var rhombusDiagonal1 = 10;
var rhombusDiagonal2 = 8;
console.log("4. Area of Rhombus =", (rhombusDiagonal1 * rhombusDiagonal2) / 2);

var trapeziumBase1 = 8;
var trapeziumBase2 = 12;
var trapeziumHeight = 5;
console.log("5. Area of Trapezium =", ((trapeziumBase1 + trapeziumBase2) * trapeziumHeight) / 2);

var cylinderRadius = 3;
var cylinderHeight = 7;
console.log("6. Volume of Cylinder =", Math.PI * cylinderRadius ** 2 * cylinderHeight);
console.log("7. Surface Area of Cylinder =", 2 * Math.PI * cylinderRadius * (cylinderRadius + cylinderHeight));

var coneRadius = 3;
var coneHeight = 9;
console.log("8. Volume of Cone =", (Math.PI * coneRadius ** 2 * coneHeight) / 3);

var sphereRadius = 4;
console.log("9. Volume of Sphere =", (4 / 3) * Math.PI * sphereRadius ** 3);
console.log("10. Surface Area of Sphere =", 4 * Math.PI * sphereRadius ** 2);

/*
Formulas
1. Area of Triangle = (Base × Height) / 2
2. Perimeter of Triangle = Side1 + Side2 + Side3
3. Area of Parallelogram = Base × Height
4. Area of Rhombus = (Diagonal1 × Diagonal2) / 2
5. Area of Trapezium = ((Base1 + Base2) × Height) / 2
6. Volume of Cylinder = π × Radius² × Height
7. Surface Area of Cylinder = 2 × π × Radius × (Radius + Height)
8. Volume of Cone = (π × Radius² × Height) / 3
9. Volume of Sphere = (4/3) × π × Radius³
10. Surface Area of Sphere = 4 × π × Radius²
11. Speed = Distance / Time
12. Distance = Speed × Time
13. Time = Distance / Speed
14. Force = Mass × Acceleration
15. Work Done = Force × Distance
16. Power = Work / Time
17. Kinetic Energy = (1/2) × Mass × Velocity²
18. Potential Energy = Mass × Gravity × Height
19. Momentum = Mass × Velocity
20. Pressure = Force / Area
21. Density = Mass / Volume
22. Simple Interest = (Principal × Rate × Time) / 100
23. Compound Interest = Principal × (1 + Rate/100)^Time − Principal
24. Total Amount (SI) = Principal + Simple Interest
25. Discount Amount = (Price × Discount%) / 100
26. Final Price              Price − Discount

27. GST Amount               (Price × GST%) / 100

28. Total Bill with GST      Price + GST

29. Profit                   Selling Price − Cost Price

30. Loss                     Cost Price − Selling Price

31. Profit Percentage        (Profit / Cost Price) × 100

32. Loss Percentage          (Loss / Cost Price) × 100

33. Percentage               (Obtained / Total) × 100

34. Average of 5 Numbers     (a + b + c + d + e) / 5
*/
/*
var a=500
var b=300
console.log("Value of a",a)
console.log("Value of b",b)
console.log("Value of c",a+b)
console.log("Value of c",a-b)
console.log("Value of c",a*b)
console.log("Value of c",a/b)
console.log("Value of c",a%b)
console.log("Value of c",5**3)
*/


/*
//1. Area of Triangle = (Base × Height) / 2
var a1=10
var b1=20
console.log("Area of Triangle",(a1*b1)/2)

//2. Perimeter of Triangle = Side1 + Side2 + Side3
var s1=10
var s2=20
var s3=30
console.log("Perimeter of Triangle",s1+s2+s3)

//3. Area of Parallelogram = Base × Height
var p1=10
var p2=30
console.log("Area of Parallelogram",p1*p2)

//4. Area of Rhombus = (Diagonal1 × Diagonal2) / 2
var r1=20
var r2=30
console.log("Area of Rhombus", (r1*r2)/2)

//5. Area of Trapezium = ((Base1 + Base2) × Height) / 2
var t1=10
var t2=20
var t3=30
console.log("Area of Trapezium",((t1+t2)*t3)/2)


//6. Volume of Cylinder = π × Radius² × Height
var c1=10
var c2=20
console.log("Volume of Cylinder",Math.PI*c1**2*c2)

// Volume of Cone = (π × Radius² × Height) / 3
  var co1=10
  var co2=20
  console.log("Volume of Cone",(Math.PI*co1**2*co2)/3)

// Volume of Sphere = (4/3) × π × Radius³
var s1=10
console.log("Volume of Sphere",(4/3)*Math.PI*s1**3)

// Surface Area of Sphere = 4 × π × Radius²
var s2=10
console.log("Surface Area of Sphere",4*Math.PI*s2**2)

*/

let num = 13;
let prime = true; // 🚩 Assume it IS prime (raise the flag)
for (let i = 2; i < num; i++) 
    {  
    if (num % i === 0)
        { 
          // % means "remainder". 0 remainder = divides evenly   
    prime = false;     
          //   // ❌ Not prime! Lower the flag  
            break;              
          //  // 🛑 Stop checking, no point continuing 
        }}
if (prime)
{  console.log(num + " is prime");

} else
{  console.log(num + " is NOT prime");

}

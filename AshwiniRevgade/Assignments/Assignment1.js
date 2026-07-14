var base=10
var height=20
var side1=5
var side2=7
var side3=9
var diagonal1=15
var diagonal2=20
var base1=25
var base2=30
var radius=24
var distance=200
var time=50
var speed=30
var mass=40
var acceleration=30
var force=70
var work=20
var velocity=30
var gravity=9.8
var principal=200
var rate=5
var area=50
var simpleInterest=(principal*rate*time)/100

//const discountRate = 0.10; // 10%
//const gstRate = 0.18;      // 18%
//const sellingPrice = 300;

const discount=0.10
const GST=0.18
var sellingprice=300
var costprice=200
//costprice=400
var price=500
var profit=sellingprice-costprice
var loss=costprice-sellingprice
var Obtained=80
var Total=100
var a=10
var b=20
var c=30
var d=40
var e=50



console.log("Area of triangle is:",(base*height)/2)
console.log("Perimeter of trainagle :", side1+side2+side3)
console.log("Area of Parallelogram:",	base * height)
console.log("Area of Rhombus:",(diagonal1 * diagonal2) / 2)
console.log("Area of Trapezium:",((base1 + base2) * height) / 2)
console.log("Volume of Cylinder:",	Math.PI*Math.pow(radius, 2) * height)
console.log("Surface Area of Cylinder:",	2*Math.PI*radius*(radius + height))
console.log("Volume of Cone:",(Math.PI*Math.pow(radius, 2) * height) / 3)
console.log("Volume of Sphere:",	(4/3)*Math.PI*Math.pow(radius, 3))
console.log("Surface Area of Sphere",	4 * Math.PI * Math.pow(radius, 2))
console.log("Speed is:",distance/time)
console.log("Distance is:", speed*time)
console.log("Time is:", distance/speed)
console.log("Force is:",mass*acceleration) 
console.log("Work Done is:", force*distance)
console.log("Power is:",work/time)
console.log("Kinetic Energy is:", (1/2)*mass*Math.pow(velocity, 2))
console.log(" Potential Energy is:", mass*gravity*height)
console.log("Momentum is:", mass *velocity)
console.log("Pressure is:", force/area)
console.log("Density is:", (mass/velocity))
console.log("Simple Interest is:",(principal*rate*time)/100)

console.log("Compound Interest is:", principal*(Math.pow(1+rate/100, time) - 1))
console.log("Total Amount (SI) is:", principal + simpleInterest)
console.log("Discount Amount is:",(price*discount))
console.log("Final Price is:", price-(price*discount))
console.log("GST Amount is:",(price*GST))
console.log("Total Bill with GST is:", price+(price*GST))
console.log("Profit is:", sellingprice- costprice)
console.log("Loss is",costprice-sellingprice)
console.log("Profit Percentage is:", (profit/costprice)*100)
console.log("loss Percetange is:",(loss/costprice)*100)
console.log("Percentage is:",(Obtained/Total)*100)
console.log("Average of 5numbers is:",(a+b+c+d+e)/5)


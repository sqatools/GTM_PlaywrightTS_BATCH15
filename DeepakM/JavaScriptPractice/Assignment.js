//Area of traingle
var base = 5
var height = 5

console.log("Area of traingle is :", base*height)

//Perimeter of triangle Side1+Side2+Side3
var side1 = 5
var side2 = 5
var side3 = 5

console.log("Perimeter of traingle is :", side1+side2+side3)

//Area of Parallelogram:	Base × Height
var base1 = 3
let height1 = 5
console.log("Area of Parallelogram:", base1*height1)

//Area of Rhombus:	(Diagonal1 × Diagonal2) / 2
const Diagoal1 =10
const Diagonal2 =12
console.log("Area of Rhombbus:", (Diagoal1*Diagonal2)/2)

//"Write a Program to print area of trapezium using base1, base2 and height"
var base1 = 100
var base2 = 50
var height = 30
var area = ((base1 + base2) * height) / 2
console.log("Area of Trapezium :", area)

//"Volume of Cylinder:	π × Radius² × Height
var radius = 100
var height = 50
var volume = Math.PI * radius**2 * height     // Math.PI * Math.pow(radius, 2) * height
console.log("Volume of Cylinder :", volume)

//Surface Area of Cylinder	2 × π × Radius × (Radius + Height)
var radius = 100
var height = 50
var surfaceArea = 2 * Math.PI * radius * (radius + height)
console.log("Surface Area of Cylinder :", surfaceArea)

//Volume of Cone	(π × Radius² × Height) / 3
var radius = 100
var height = 50
var volume = (Math.PI * Math.pow(radius, 2) * height) / 3
console.log("Volume of Cone :", volume) 

//Volume of Sphere	(4/3) × π × Radius³
var radius = 100
var volume = (4 / 3) * Math.PI * Math.pow(radius,3)
console.log("Volume of Sphere :", volume)

//Surface Area of Sphere	4 × π × Radius²
var radius = 100
var surfaceArea = 4 * Math.PI * Math.pow(radius, 2)
console.log("Surface Area of Sphere :", surfaceArea)    

//Speed	:Distance / Time
var distance = 100
var time = 50
var speed = distance / time
console.log("Speed :", speed)

//Distance	Speed × Time
var speed = 100
var time = 50
var distance = speed * time
console.log("Distance :", distance) 

//Time 	Distance / Speed
var distance = 100
var speed = 50
var time = distance / speed
console.log("Time :", time)

console.log("Write a program to print force using mass and acceleration")
var mass = 100
var acceleration = 50
var force = mass * acceleration
console.log("Force :", force)

console.log("Write a program to print work done using force and distance")
var force = 100
var distance = 50
var workDone = force * distance
console.log("Work Done :", workDone)

console.log("Write a program to print power using work and time")
var work = 100
var time = 50
var power = work / time
console.log("Power :", power)

console.log("Write a program to print kinetic energy using mass and velocity")
var mass = 10
var velocity = 5
var kineticEnergy = (1 / 2) * mass * velocity**2 //Math.pow(velocity, 2)
console.log("Kinetic Energy :", kineticEnergy)

console.log("Write a program to print potential energy using mass, gravity and height")
var mass = 100
var gravity = 9.8
var height = 50
var potentialEnergy = mass * gravity * height
console.log("Potential Energy :", potentialEnergy)

console.log("Write a program to print momentum using mass and velocity")
var mass = 100
var velocity = 50
var momentum = mass * velocity
console.log("Momentum :", momentum)

console.log("Write a program to print pressure using force and area")
var force = 100
var area = 50
var pressure = force / area
console.log("Pressure :", pressure) 

console.log("Write a program to print density using mass and volume")
var mass = 100
var volume = 50
var density = mass / volume
console.log("Density :", density)

console.log("Write a program to print simple interest using principal, rate and time")
var principal = 100
var rate = 5
var time = 2
var simpleInterest = (principal * rate * time) / 100
console.log("Simple Interest :", simpleInterest)

console.log("Write a program to print compound interest using principal, rate and time")
var principal = 100
var rate = 5
var time = 2
var compoundInterest = principal * (1 + rate / 100) ** time - principal
console.log("Compound Interest :", compoundInterest)

console.log("Write a program to print total amount using principal and simple interest")
var principal = 100
var simpleInterest = 10
var totalAmount = principal + simpleInterest
console.log("Total Amount :", totalAmount)  

console.log("Write a program to print discount amount using price and discount percentage")
var price = 100
var discountPercentage = 10
var discountAmount = (price * discountPercentage) / 100
console.log("Discount Amount :", discountAmount)    

console.log("Write a program to print final price using price and discount")
var price = 100
var discount = 10
var finalPrice = price - discount
console.log("Final Price :", finalPrice)

console.log("Write a program to print GST amount using price and GST percentage")
var price = 100
var gstPercentage = 18
var gstAmount = (price * gstPercentage) / 100
console.log("GST Amount :", gstAmount)  

console.log("Write a program to print total bill with GST using price and GST")
var price = 100
var gst = 18
var totalBillWithGST = price + gst
console.log("Total Bill with GST :", totalBillWithGST)

console.log("Write a program to print profit using selling price and cost price")
var sellingPrice = 100
var costPrice = 50
var profit = sellingPrice - costPrice
console.log("Profit :", profit)

console.log("Write a program to print loss using cost price and selling price")
var costPrice = 100
var sellingPrice = 50
var loss = costPrice - sellingPrice
console.log("Loss :", loss)     

console.log("Write a program to print profit percentage using profit and cost price")
var profit = 50
var costPrice = 100
var profitPercentage = (profit / costPrice) * 100
console.log("Profit Percentage :", profitPercentage)    

console.log("Write a program to print loss percentage using loss and cost price")
var loss = 50
var costPrice = 100
var lossPercentage = (loss / costPrice) * 100
console.log("Loss Percentage :", lossPercentage)    

console.log("Write a program to print percentage using obtained and total")
var obtained = 60
var total = 120
var percentage = (obtained / total) * 100
console.log("Percentage :", percentage)

console.log("Write a program to print average of 5 numbers using a, b, c, d and e")
var a = 10
var b = 20
var c = 30
var d = 40
var e = 50
var average = (a + b + c + d + e) / 5
console.log("Average :", average) 

// 10th July 2026
// Program for Operators to practice:

//1.    Area of Triangle	(Base × Height) / 2
var base = 10
var height = 5
console.log("Base of Triangle is :", base)
console.log("Height of Triangle is :", height)
console.log("Area of Triangle is :", (base*height)/2)
console.log("\n")

//2	    Perimeter of Triangle:	Side1 + Side2 + Side3
var Side1 = 10
var Side2 = 20
var Side3 = 25
console.log("Side 1 of Triangle is :", Side1)
console.log("Side 2 of Triangle is :", Side2)
console.log("Side 3 of Triangle is :", Side3)
console.log("Perimeter of Triangle is :", (Side1+Side2+Side3))
console.log("\n")

//3.	Area of Parallelogram:	Base × Height
var base = 10
var height = 5
console.log("Base of Parallelogram is :", base)
console.log("Height of Parallelogram is :", height)
console.log("Area of Parallelogram is :", base*height)
console.log("\n")

//4.	Area of Rhombus:	(Diagonal1 × Diagonal2) / 2
var Diagonal1 = 10
var Diagonal2 = 5
console.log("Diagonal2 of Rhombus is :", Diagonal1)
console.log("Diagonal2 of Rhombus is :", Diagonal2)
console.log("Area of Rhombus: is :", (Diagonal1*Diagonal2)/2)
console.log("\n")

//5.	Area of Trapezium:	((Base1 + Base2) × Height) / 2
var Base1 = 10
var Base2 = 20
var height = 25
console.log("Base 1 of Trapezium is :", Base1)
console.log("Base 2 of Trapezium is :", Base2)
console.log("Height of Trapezium is :", height)
console.log("Area of Trapezium is :", ((Base1+Base2)*height)/2)
console.log("\n")

//6.	Volume of Cylinder:	π × Radius² × Height

var Radius = 10
var Height = 5
console.log("Radius of Cylinder is :", Radius)
console.log("Height of Cylinder is :", Height)
console.log("Volume of Cylinder is :", (Math.PI * Radius * Radius * Height))
console.log("\n")

//7.	Surface Area of Cylinder	2 × π × Radius × (Radius + Height)
var Radius = 10
var Height = 5
console.log("Radius of Cylinder is :", Radius)
console.log("Height of Cylinder is :", Height)
console.log("Surface Area of Cylinder is :", (2*Math.PI * Radius * (Radius + Height)))
console.log("\n")


// 8	Volume of Cone	(π × Radius² × Height) / 3
var Radius = 10
var Height = 5
console.log("Radius of Cone is :", Radius)
console.log("Height of Cone is :", Height)
console.log("Volume of Cone is :", (Math.PI * Radius * Radius * Height)/3)
console.log("\n")


// 9	Volume of Sphere	(4/3) × π × Radius³
var Radius = 10
console.log("Radius of Sphere is :", Radius)
console.log("Volume of Sphere is :", (4*Math.PI * Radius * Radius * Radius)/3)
console.log("\n")


// 10	Surface Area of Sphere	4 × π × Radius²
var Radius = 10
console.log("Radius of Sphere is :", Radius)
console.log("Surface Area of Sphere is :", (4*Math.PI * Radius * Radius))
console.log("\n")

// 11	Speed	:Distance / Time
var Distance = 10
var Time = 5
console.log("Value of  of Distance is :", Distance)
console.log("Value of Time is :", Time)
console.log("Speed is :", (Distance / Time))
console.log("\n")


// 12	Distance	Speed × Time
var Speed = 2
var Time = 5
console.log("Value of  of Speed is :", Speed)
console.log("Value of Time is :", Time)
console.log("Distance is :", (Speed * Time))
console.log("\n")


// 13	Time 	Distance / Speed
var Distance = 10
var Speed = 2
console.log("Value of  of Distance is :", Distance)
console.log("Value of Speed is :", Speed)
console.log("Time is :", (Distance / Speed))
console.log("\n")


// 14	Force	Mass × Acceleration
var Mass = 10
var Acceleration = 2
console.log("Value of  of Mass is :", Mass)
console.log("Value of Acceleration is :", Acceleration)
console.log("Force is :", (Mass * Acceleration))
console.log("\n")



// 15	Work Done	Force × Distance
var Force = 10
var Distance = 20
console.log("Value of  of Force is :", Force)
console.log("Value of Distance is :", Distance)
console.log("Work Done is :", (Force * Distance))
console.log("\n")



// 16	Power	Work / Time
var Work = 10
var Time = 5
console.log("Value of  of Work is :", Work)
console.log("Value of Time is :", Time)
console.log("Power is :", (Work / Time))
console.log("\n")


// 17	Kinetic Energy	(1/2) × Mass × Velocity²
var Mass = 10
var Velocity = 2
console.log("Value of  of Mass is :", Mass)
console.log("Value of Velocity is :", Velocity)
console.log("Kinetic Energy :", (Mass * Velocity * Velocity)/2)
console.log("\n")



// 18	Potential Energy	Mass × Gravity × Height
var Mass = 10
var Gravity = 9.8
var Height = 5
console.log("Value of  of Mass is :", Mass)
console.log("Value of Gravity is :", Gravity)
console.log("Value of Height is :", Height)
console.log("Potential Energy :", (Mass * Velocity * Height))
console.log("\n")



// 19	Momentum	Mass × Velocity
var Mass = 10
var Velocity = 2
console.log("Value of  of Mass is :", Mass)
console.log("Value of Velocity is :", Velocity)
console.log("Momentumis :", (Mass * Velocity))
console.log("\n")



// 20	Pressure	Force / Area
var Force = 10
var Area = 50
console.log("Value of  of Force is :", Force)
console.log("Value of Area is :", Area)
console.log("Pressure is :", (Force / Area))
console.log("\n")



// 21	Density	Mass / Volume
var Mass = 10
var Volume = 50
console.log("Value of  of Mass is :", Mass)
console.log("Value of Volume is :", Volume)
console.log("Density is :", (Mass / Volume))
console.log("\n")


// 22	Simple Interest	(Principal × Rate × Time) / 100
var Principal = 100
var Rate = 5
var Time = 2
console.log("Value of  of Principal is :", Principal)
console.log("Value of Rate is :", Rate)
console.log("Value of  of Time is :", Time)
console.log("Simple Interest is :", (Principal * Rate * Time)/100)
console.log("\n")


// 23	Compound Interest	Principal × (1 + Rate/100)^Time − Principal
var Principal = 100
var Rate = 5
var Time = 2
console.log("Value of  of Principal is :", Principal)
console.log("Value of Rate is :", Rate)
console.log("Value of  of Time is :", Time)
console.log("Compound Interest is :", (Principal + (1+(Rate/100))**Time) - Principal )
console.log("\n")



// 24	Total Amount (SI)	Principal + Simple Interest
var Principal = 100
var Rate = 5
var Time = 2
console.log("Value of  of Principal is :", Principal)
console.log("Value of Rate is :", Rate)
console.log("Value of  of Time is :", Time)
console.log("Total amount is :", Principal + (Principal * Rate * Time)/100)
console.log("\n")



// 25	Discount Amount	(Price × Discount%) / 100

var Price = 10
var Discount = 5
console.log("Value of  of Price is :", Price)
console.log("Value of Discount percentage is :", Discount)
console.log("Discount Amount is :", (Price * Discount)/100)
console.log("\n")



// 26	Final Price	Price − Discount
var Price = 10
var Discount = 5
console.log("Value of  of Price is :", Price)
console.log("Value of Discount percentage is :", Discount)
console.log("Final Price after discount is :", Price - (Price * Discount)/100)
console.log("\n")



// 27	GST Amount	(Price × GST%) / 100
var Price = 10
var GST = 18
console.log("Value of  of Price is :", Price)
console.log("Value of GST percentage is :", GST)
console.log("GST Amount is :", (Price * GST)/100)
console.log("\n")



// 28	Total Bill with GST	Price + GST
var Price = 10
var GST = 18
console.log("Value of  of Price is :", Price)
console.log("Value of GST percentage is :", GST)
console.log("Total Bill with GST is :", Price + (Price * GST)/100)
console.log("\n")



// 29	Profit	Selling Price − Cost Price
var SellingPrice = 10
var CostPrice = 5
console.log("Selling Price is :", SellingPrice)
console.log("Cost Price is :", CostPrice)
console.log("Profit Amount is :", SellingPrice - CostPrice)
console.log("\n")


// 30	Loss	Cost Price − Selling Price
var SellingPrice = 10
var CostPrice = 15
console.log("Selling Price is :", SellingPrice)
console.log("Cost Price is :", CostPrice)
console.log("Loss Amount is :", CostPrice - SellingPrice)
console.log("\n")


// 31	Profit Percentage	(Profit / Cost Price) × 100
var SellingPrice = 10
var CostPrice = 5
console.log("Selling Price is :", SellingPrice)
console.log("Cost Price is :", CostPrice)
console.log("Profit Percentage is :", ((SellingPrice - CostPrice)/CostPrice)*100)
console.log("\n")


// 32	Loss Percentage	(Loss / Cost Price) × 100
var SellingPrice = 10
var CostPrice = 15
console.log("Selling Price is :", SellingPrice)
console.log("Cost Price is :", CostPrice)
console.log("Loss Percentage is :", ((CostPrice - SellingPrice)/CostPrice)*100)
console.log("\n")


// 33	Percentage	(Obtained / Total) × 100
var Obtained = 450
var Total = 500
console.log("Marks Obtained is :", Obtained)
console.log("Total Marks is :", Total)
console.log("Percentage is :", (Obtained / Total)*100)
console.log("\n")


// 34	Average of 5 Numbers	(a+b+c+d+e)/5
var num1 = 10
var num2 = 20
var num3 = 30
var num4 = 40
var num5 = 50
console.log("value of number 1 is :", num1)
console.log("value of number 2 is :", num2)
console.log("value of number 3 is :", num3)
console.log("value of number 4 is :", num4)
console.log("value of number 5 is :", num5)
console.log("average of 5 numbers is :", (num1+num2+num3+num4+num5)/5)


//1.    Area of Triangle	(Base × Height) / 2
var base=10
var height=20
console.log("Area of triangle is:",(base*height)/2)

//2	    Perimeter of Triangle:	Side1 + Side2 + Side3
var side1=5
var side2=7
var side3=9
console.log("Perimeter of trainagle :", side1+side2+side3)

//3.	Area of Parallelogram:	Base × Height
var base=20
var height=50
console.log("Area of Parallelogram:",	base * height)

//4.. Area of Rhombus:	(Diagonal1 × Diagonal2) / 2
var diagonal1=15
var diagonal2=20
console.log("Area of Rhombus:",(diagonal1 * diagonal2) / 2)

//5.	Area of Trapezium:	((Base1 + Base2) × Height) / 2
var base1=10
var base2=15
var height=15
console.log("Area of Trapezium:",((base1 + base2) * height) / 2)

//6.	Volume of Cylinder:	π × Radius² × Height
var radius=7
var height=10
console.log("Volume of Cylinder:",	Math.PI*Math.pow(radius, 2) * height)

//7.	Surface Area of Cylinder	2 × π × Radius × (Radius + Height)
var radius=7
var height=10
console.log("Surface Area of Cylinder:",	2*Math.PI*radius*(radius + height))

// 8	Volume of Cone	(π × Radius² × Height) / 3
var radius=10
var height=20
console.log("Volume of Cone:",(Math.PI*Math.pow(radius, 2) * height) / 3)

// 9	Volume of Sphere	(4/3) × π × Radius³
var radius=9
console.log("Volume of Sphere:",	(4/3)*Math.PI*Math.pow(radius, 3))

// 10	Surface Area of Sphere	4 × π × Radius²
var radius=5
console.log("Surface Area of Sphere",	4 * Math.PI * Math.pow(radius, 2))

// 11	Speed	:Distance / Time
var distance=100
var time=20
console.log("Speed is:",distance/time)

 //12	Distance	Speed × Time
var speed=30
var tim=20
console.log("Distance is:", speed*time)

// 13	Time 	Distance / Speed
var distance=60
var speed=10
console.log("Time is:", distance/speed)

// 14	Force	Mass × Acceleration
var mass=50
var acceleration=10
console.log("Force is:",mass*acceleration) 

// 15	Work Done	Force × Distance
var force=60
var distance=20
console.log("Work Done is:", force*distance)

// 16	Power	Work / Time
var work=40
var time=20
console.log("Power is:",work/time)

// 17	Kinetic Energy	(1/2) × Mass × Velocity²
var mass=20
var velocity=10
console.log("Kinetic Energy is:", (1/2)*mass*Math.pow(velocity, 2))

// 18	Potential Energy	Mass × Gravity × Height
var mass=50
var gravity=9.8
var height=10
console.log("Potential Energy is:", mass*gravity*height)

// 19	Momentum	Mass × Velocity
var mass=20
var velocity=10
console.log("Momentum is:", mass *velocity)

// 20	Pressure	Force / Area
var force=100
var area=200
console.log("Pressure is:", force/area)

// 21	Density	Mass / Volume
var mass=50
var volume=10
console.log("Density is:", mass/volume)

// 22	Simple Interest	(Principal × Rate × Time) / 100
var principal=200
var rate=5
var time=2
console.log("Simple Interest is:",(principal*rate*time)/100)

// 23	Compound Interest	Principal × (1 + Rate/100)^Time − Principal
var principal=200
var rate=5
var time=2
console.log("Compound Interest is:", principal*(Math.pow(1+rate/100, time) - 1))

// 24	Total Amount (SI)	Principal + Simple Interest
var principal=200
var SimpleInterest=0.2
console.log("Total Amount (SI) is:", principal + SimpleInterest)

// 25	Discount Amount	(Price × Discount%) / 100
var price=200
var discount=0.10
console.log("Discount Amount is:",(price*discount))

// 26	Final Price	Price − Discount
var price=2000
var discount=0.10
console.log("Final Price is:", price-(price*discount))

// 27	GST Amount	(Price × GST%) / 100
var price=300
var GST=0.18
console.log("GST Amount is:",(price*GST))

// 28	Total Bill with GST	Price + GST
var price=500
var GST=0.18
console.log("Total Bill with GST is:", price+(price*GST))

// 29	Profit	Selling Price − Cost Price
var costprice=200
var sellingprice=300
console.log("Profit selling price is:", sellingprice- costprice)

// 30	Loss	Cost Price − Selling Price
var costprice=600
var sellingprice=400
console.log("Loss is",costprice-sellingprice)

// 31	Profit Percentage	(Profit / Cost Price) × 100
var profit=100
var costprice=500
console.log("Profit Percentage is:", (profit/costprice)*100)

// 32	Loss Percentage	(Loss / Cost Price) × 100
var loss=200
var costprice=1000
console.log("loss Percetange is:",(loss/costprice)*100)

// 33	Percentage	(Obtained / Total) × 100
var obtained=80
var total=100
console.log("Percentage is:",(obtained/total)*100)

// 34	Average of 5 Numbers	(a+b+c+d+e)/5
var a=10
var b=20
var c=30
var d=40
var e=50
console.log("Average of 5numbers is:",(a+b+c+d+e)/5)


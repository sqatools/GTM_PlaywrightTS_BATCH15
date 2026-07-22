//Area of traingle
var base=2
var height=3
console.log("Area of triangle is:",(base*height)/2)

//Perimeter of triangle
var s1=2;
var s2=3;
var s3=4;
console.log("Perimeter of triangle is:",s1+s2+s3)

//Area of parellogram
var base1=4
var height1=5
console.log("Area of parallelogram:",base1*height1)

//Area of Rhombus
var Diagnol1=4
var Diagnol2=7
console.log("Area of Rhombus:",(Diagnol1*Diagnol2)/2)

//Area of Trapezium
var baset1=4
var baset2=5
var heightt1=6
console.log("Area of Trapezium:",((baset1+baset2)*height)/2)

//Volume of cylinder
var radius=2
var heightc=4
console.log("Volume of cylinder:",3.14*radius*radius*height)

//Surface Area of Cylinder
var radius1=6
var heightc1=4
console.log("Surface Area of Cylinder",2*3.14*radius1*(radius1+heightc1))

//Volume of cone
var radiuscone=2
var heightcone=5
console.log("Volume of cone:",(3.14*radiuscone*radiuscone*heightcone)/3)

//Volume of Sphere
var radiussphere=3
console.log("Volume of Sphere:",(4/3)*3.14*radiussphere*radiussphere*radiussphere)

//Surface Area of Sphere
var r=2
console.log("Surface Area of Sphere:",4*3.14*r*r)

//Speed/Distance/Time
var distance=3
var time=4
var speed=0.75
console.log("Speed",distance/time)
console.log("Distance",speed*time)
console.log("Time",distance/speed)

//Force
var Mass=2
var Acceleration=5
var Distance1=7
console.log("Force",Mass*Acceleration)
console.log("Work Done",Force*Distance1)


//Power
var Work=3
var TimeP=7
console.log("Power",Work/TimeP)

//Energy
var Mass1=4
var Velocity=2
var Gravity=3
var HeightE=5
console.log("Kinetic Energy",(1/2)*Mass*Velocity*Velocity)
console.log("Potential Energy",Mass1*Gravity*HeightE)
console.log("Momentum",Mass1*Velocity)

//Pressure
var Force=5
var Area=6
console.log("Pressure",Force/Area)

//Density
var MassD=6
var VolumeD=3
console.log("Density",MassD/VolumeD)

//Interest
var PrincipalI=2
var TimeI=4
var ROI=7
console.log("Simple Interest",(PrincipalI*TimeI*ROI)/100)
console.log("Compound Interest",(PrincipalI*((1+ROI/100)*TimeI))-PrincipalI)
console.log("Total Amount",PrincipalI+((PrincipalI*TimeI*ROI)/100))

//Discount
var Discount=6
var Price=4
var GSTAmount=2
console.log("Discount Amount",(Price*Discount)/100)
console.log("Final Price",Price-Discount)
console.log("GST Amount",(Price*GSTAmount)/100)
console.log("Total Bill with GST",Price+GSTAmount)

//Profit
var SP=3
var CP=2
console.log("Profit",SP-CP)
console.log("Loss",CP-SP)
console.log("Profit Percentage",((SP-CP)/CP)*100)
console.log("Loss Percentage",((CP-SP)/SP)*100)

//Percentage
var total=70
var obtained=60
console.log("Percentage",(obtained/total)*100)
//Average
var Eng=50
var Sci=45
var Soc=46
var Mat=50
var Tel=46
console.log("Average of 5 Numbers",(Eng+Sci+Soc+Mat+Tel)/5)


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

//Assignment Operators

console.log("##################Arthmetic operators###############")

//=: Assignment operator
var x=50
console.log("Vaue of x:",x) //50

//+= :add and assign operator
x+=10 //X=X+10
console.log("Vaue of x +=10:",x) //60

//-=: subtract and assign operator
x-=5 //x=x-5
console.log("Vaue of x -=5:",x) //55

//*= : multiply and assign operator
x*=10 //x=x*10
console.log("Vaue of x *=10:",x) //550

// /= :Divide and assign operator
x/=5 //x=x/5
console.log("Vaue of x /=5:",x) //110

// %= :Modulus and assign operator
x%=3 //x=x%3
console.log("Vaue of x %3=:",x) //2

//**= exponential and assign operator
x**=4 //x*x*x*X
console.log("Vaue of x **4:",x) //16


//comparision operators
console.log("##############comparision operators#############")

var a=10
var b="10"
var c=20

//== :(equal data only)
console.log("a==b",a==b) //true
console.log("a==c",a==c) //false

//=== :(strict equal check data and data type )
console.log("a===b",a===b) //false
console.log("a===c",a===c) //false

//!= :(not equal data only)
console.log("a!=b",a!=b) //false
console.log("a!=c",a!=c) //true

//!== :(not equal with data and data type)
console.log("a!==b",a!==b) //true
console.log("a!==c",a!==c) //true

var p=100
var q=200
var r=300
var s=100
//> : greater than
console.log("q > p :",q>p) //true
console.log("q > r :",q>r) //false

//< : less than
console.log("q < r :",q<r) //true
console.log("r <= p :",r<=p) //false

//>= : greater than equal
console.log("r >= p :",r>=p) //true
console.log("p >= q:",p>=q) //false
console.log("s >= p :",s>=p) //true

//<= : less than equal
console.log("p <= r :",p<=r) //true
console.log("q <= p :",q<=p) //false
console.log("p <= s :",p<=s) //true

//Logical operator
console.log("################# Logical operator ################")
var M=100
var N=200
var O=300
//and condition
//cond1 && cond 2

//1.false && false : false
console.log("M>N && N>O :", M>N && N>O)

//2.true && false : false
console.log("N>M && M>O :", N>M && M>O)

//3.false && true : false
console.log("M>O && O>N :",M>O && O>N)

//4.true && true : true
console.log("N>M && O>N :",N>M && O>N)

//or condition
//cond1 || cond2

//1.false || false : false
console.log("M>N || N>O :", M>N || N>O)

//2.true || false : true
console.log("N>M || M>O :", N>M || M>O)

//3.false || true : true
console.log("M>O || O>N :",M>O || O>N)

//4.true && true : true
console.log("N>M || O>N :",N>M || O>N)




//Operators in Javascript
// addition +
//substraction -
//multification *
//division /
//modulas  %
// exponential operator  **

var x= 100
var y = 50

console.log("addition of two number :" , x+y)
console.log("substarction of two numbers :", x-y)
console.log("multiplication of x and y is :",x*y )
console.log("divison of x and y is :", x/y )
console.log("modulas of x and y is :", x%y)
console.log("exponential  :", x*x*x)


console.log("####################################")

var x=2
var y=3
var z=4
console.log("Area of triangle is",(x*y)/2)
console.log("Perimeter of triangle is",x+y+z)
console.log("Area of parallelogram:",x*y)
console.log("Area of Rhombus:",(x*y)/2)
console.log("Area of Trapezium:",((x+y)*z)/2)
console.log("Volume of cylinder:",3.14*x*x*y)
console.log("Surface Area of Cylinder",2*3.14*x*(x=y))
console.log("Volume of cone:",(3.14*x*x*y)/3)
console.log("Volume of Sphere:",(4/3)*3.14*x*x*x)
console.log("Surface Area of Sphere:",4*3.14*x*x)
console.log("Speed",x/y)
console.log("Distance",x*y)
console.log("Time",x/y)
console.log("Force",x*y)

var force = 100
var distance= 200
console.log("Work",force*distance)

// 16.power=Work / Time
    var work = 200
    var time = 10
    console.log("power",work/time)  

// 17. Kinetic Energy	(1/2) × Mass × Velocity²
    var mass = 50
    var velocity = 20
    console.log("Kinetic Energy",0.5 * mass * velocity * velocity)
// 18. Potential Energy	Mass × Gravity × Height
    var mass = 50
    var gravity = 9.8
    var height = 10
    console.log("Potential Energy",mass * gravity * height)
//19. Pressure	Force / Area
    var force = 100
    var area = 20
    console.log("Pressure",force/area)  

// 20. Momentum	Mass × Velocity
    var mass = 50
    var velocity = 20
    console.log("Momentum",mass * velocity)


// 21	Density	Mass / Volume
    var mass = 50   
    var volume = 10
    console.log("Density",mass/volume)

// 22	Simple Interest	(Principal × Rate × Time) / 100
    var principal = 1000
    var rate = 5
    var time = 2
    console.log("Simple Interest", (principal * rate * time) / 100)

//23.compound Interest	Principal × (1 + Rate / 100) ^ Time - Principal 
    var principal = 1000
    var rate = 5
    var time = 2
    console.log("Compound Interest :", principal * (1 + rate / 100)**time - principal)   

//24.Total Amount (SI)	Principal + Simple Interest
     var pricipal =50000
     var rate =8
     var time =2
     console.log("Total amount :", pricipal+(pricipal * rate * time) / 100)

//25.Discount Amount (Price × Discount%) / 100
     var price = 4000
     var Discount = 5
     console.log("Discount amount :",(price * Discount)/ 100)

//26.Final Price Price − Discount

      var price =4000
     var discount = 200
     var final =price-discount
    console.log("The value of final is "+final)

//27.GST Amount	(Price × GST%) / 100
      var price=10
      var gst=3
      var gstamount =(price*gst*100)/100
      console.log("The gstamount is "+gstamount)

//28.Total Bill with GST	Price + GST
       var gst=price+gst
       console.log("The value of gst "+gst)  

//29.Profit	Selling Price − Cost Price
       var selling_price = 15000
       var cost_price =10000
       console.log("profit selling :", selling_price-cost_price)
//30.Loss	Cost Price − Selling Price
       var selling_price = 15000 
       var cost_price =100000
       console.log("profit selling :", cost_price-selling_price)

//31.Profit Percentage	(Profit / Cost Price) × 100
       var selling_price = 15000
       var cost_price =10000
       var profit = 5000
       console.log("profit percentage :",(5000/10000)*100)

//32.Loss Percentage	(Loss / Cost Price) × 100
       var selling_price = 15000 
       var cost_price =100000
       var loss =85000
       console.log("loss percentage:", (loss/cost_price)*100)


//33.Percentage	(Obtained / Total) × 100
//34.Average of 5 Numbers	(a+b+c+d+e)/5
       var english = 80
       var maths = 75
       var science =75
       var social = 87
       var language =81
       console.log("Average :", (english+maths+science+social+language)/5)












     



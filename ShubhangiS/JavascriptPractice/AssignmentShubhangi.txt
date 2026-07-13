
//1. Area of Triangle:
var base=10
var height=5
var area=0.5*base*height
console.log("Area of triangle is: "+area)

//2. Perimeter of Triangle:
var side1=5
var side2=6
var side3=7             
var perimeter=side1+side2+side3
console.log("Perimeter of triangle is: "+perimeter)

//3. Area of Parallelogram:
var areaOfParallelogram=base*height
console.log("Area of parallelogram is: "+areaOfParallelogram)

//4. Area of Rhombus:
var diagonal1=8
var diagonal2=6
var areaOfRhombus=0.5*diagonal1*diagonal2
console.log("Area of rhombus is: "+areaOfRhombus)


//5. Area of Trapezium:
var base1=10            
var base2=15
var height=8
var areaOfTrapezium=0.5*(base1+base2)*height
console.log("Area of trapezium is: "+areaOfTrapezium)

//6. Volume of Cylinder:
var height=12
var radius=7
var volumeOfCylinder=Math.PI*radius*radius*height
console.log("Volume of cylinder is: "+volumeOfCylinder)

//7. Surface Area of Cylinder:
var surfaceAreaOfCylinder=2*Math.PI*radius*(radius+height)
console.log("Surface area of cylinder is: "+surfaceAreaOfCylinder)

//8. Volume of Cone:
var volumeofCone=(1/3)*Math.PI*radius*radius*height
console.log("Volume of cone is: "+volumeofCone)

//9. Volume of Sphere:
var volumeOfSphere=(4/3)*Math.PI*radius*radius*radius
console.log("Volume of sphere is: "+volumeOfSphere)

//10. Surface Area of Sphere:
var surfaceAreaOfSphere=4*Math.PI*radius*radius
console.log("Surface area of sphere is: "+surfaceAreaOfSphere)


// 11. Speed:
var distance=100
var time=2
var speed=distance/time
console.log("Speed is: "+speed)

//12. Distance:
console.log("Distance is: " + (speed * time))

//13. Time:
console.log("Time is: " + (distance / speed))

//14. Force::
var mass=50
var acceleration=9.8
var force=mass*acceleration
console.log("Force is: "+force)

//15. Work Done:
console.log("work done is: "+(force*distance))

// 16	Power:
var time=5
var work=45
var power=work/time
console.log("Power is: "+power)

// 17. Kinetic Energy:
var mass=50
var velocity=10
var kineticEnergy=0.5*mass*velocity*velocity
console.log("Kinetic energy is: "+kineticEnergy)

// 18. Potential Energy:
var mass=50
var height=10
var potentialEnergy=mass*9.8*height
console.log("Potential energy is: "+potentialEnergy)

// 19. Momentum:
var mass=50
var velocity=10
var momentum=mass*velocity
console.log("Momentum is: "+momentum)

// 20. Pressure:
var force=100
var area=5
var pressure=force/area
console.log("Pressure is: "+pressure)

// 21. Density:
var mass=50
var volume=10
var density=mass/volume
console.log("Density is: "+density)

// 22. Simple Interest:
var principal=1000
var rate=5
var time=2
var simpleInterest=(principal*rate*time)/100
console.log("Simple interest is: "+simpleInterest)

// 23. Compound Interest:
var principal=1000
var rate=5
var time=2
var compoundInterest=principal*(Math.pow((1+rate/100),time))-principal
console.log("Compound interest is: "+compoundInterest)

// 24. Total Amount (SI):
var totalAmountSI=principal+simpleInterest
console.log("Total amount (SI) is: "+totalAmountSI)

// 25. Discount Amount:
var originalPrice=1000
var discountPercentage=10
var discountAmount=(originalPrice*discountPercentage)/100
console.log("Discount amount is: "+discountAmount)

// 26. Final Price:
var finalPrice=originalPrice-discountAmount
console.log("Final price is: "+finalPrice)

// 27. GST Amount:
var gstPercentage=18
var gstAmount=(finalPrice*gstPercentage)/100
console.log("GST amount is: "+gstAmount)

// 28. Total Bill with GST
var totalBillWithGST=finalPrice+gstAmount
console.log("Total bill with GST is: "+totalBillWithGST)

// 29. Profit:
var costPrice=1000
var sellingPrice=1200
var profit=sellingPrice-costPrice
console.log("Profit is: "+profit)

// 30. Loss:
var costPrice=1000
var sellingPrice=800
var loss=costPrice-sellingPrice
console.log("Loss is: "+loss)

// 31. Profit Percentage:
var costPrice=1000
var sellingPrice=1200
var profit=sellingPrice-costPrice
var profitPercentage=(profit/costPrice)*100
console.log("Profit percentage is: "+profitPercentage)

// 32. Loss Percentage:
var costPrice=1000
var sellingPrice=800
var loss=costPrice-sellingPrice
var lossPercentage=(loss/costPrice)*100
console.log("Loss percentage is: "+lossPercentage)

// 33. Percentage:
var totalMarks=500
var obtainedMarks=400
var percentage=(obtainedMarks/totalMarks)*100
console.log("Percentage is: "+percentage)

// 34. Average of 5 Numbers:
var num1=10
var num2=20
var num3=30
var num4=40
var num5=50
var average=(num1+num2+num3+num4+num5)/5
console.log("Average of 5 numbers is: "+average)
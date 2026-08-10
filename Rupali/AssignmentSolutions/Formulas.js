// 1. area of triangle
var base = 10
var height = 5
var area = 0.5 * base * height
console.log("area of triangle: " + area)

// 2. perimeter of triangle
var side1 = 5
var side2 = 6
var side3 = 7
var perimeter = side1 + side2 + side3
console.log("perimeter of triangle: " + perimeter)

// 3. area of parallelogram
var base = 8
var height = 4
var area = base * height
console.log("area of parallelogram: " + area)

// 4. Area of rombus
var diagonal1 = 6
var diagonal2 = 8
var area = 0.5 * diagonal1 * diagonal2
console.log("area of rombus: " + area)

//5. area of trapezium
var base1 = 5
var base2 = 7   
var height = 4
var area = 0.5 * (base1 + base2) * height
console.log("area of trapezium: " + area)   

//6. volume of cylinder
var radius = 3
var height = 10
var volume = Math.PI * radius * radius * height
console.log("volume of cylinder: " + volume)    

// 7. surface area of cylinder
var radius = 3
var height = 10
var surfaceArea = 2 * Math.PI * radius * (radius + height)
console.log("surface area of cylinder: " + surfaceArea)

// 8. volume of cone
var radius = 3
var height = 10
var volume = (1/3) * Math.PI * radius * radius * height
console.log("volume of cone: " + volume)

// 9. volume of sphere
var radius = 3
var volume = (4/3) * Math.PI * Math.pow(radius, 3)
console.log("volume of sphere: " + volume)  

//10. volume of sphere
var radius = 3
var volume = (4/3) * Math.PI * Math.pow(radius, 3)
console.log("volume of sphere: " + volume)  

// 11.surface area of sphere
var radius = 3
var surfaceArea = 4 * Math.PI * Math.pow(radius, 2)
console.log("surface area of sphere: " + surfaceArea)

// 12. speed:distance/time
var distance = 100
var time = 2
var speed = distance / time
console.log("speed: " + speed)

// 13. Distance: speed * time
var speed = 50
var time = 2
var distance = speed * time
console.log("distance: " + distance)

// 14. Time: distance/speed
var distance = 100
var speed = 50
var time = distance / speed
console.log("time: " + time)

// 15. force: mass * acceleration
var mass = 10
var acceleration = 5
var force = mass * acceleration
console.log("force: " + force)

// 16. work: force * distance
var force = 10
var distance = 5
var work = force * distance
console.log("work: " + work)

// 17. power: work/time 
var work = 100
var time = 5
var power = work / time
console.log("power: " + power)

// 18. Potential Energy
var mass = 10
var height = 5
var gravity = 9.8
var potentialEnergy = mass * gravity * height
console.log("potential energy: " + potentialEnergy)

// 19. momentum
var mass = 10
var velocity = 5
var momentum = mass * velocity
console.log("momentum: " + momentum)

// 20. pressure
var force = 100
var area = 5
var pressure = force / area
console.log("pressure: " + pressure)

// 21. Density
var mass = 10
var volume = 5
var density = mass / volume
console.log("density: " + density)

// 22. simple interest
var principal = 1000
var rate = 5
var time = 2
var simpleInterest = (principal * rate * time) / 100
console.log("simple interest: " + simpleInterest)

// 23. compound interest
var principal = 1000
var rate = 5    
var time = 2
var compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal
console.log("compound interest: " + compoundInterest)

// 24.total amount
var principal = 1000
var rate = 5    
var time = 2
var totalAmount = principal * (principal * rate * time) / 100
console.log("total amount: " + totalAmount) 


// 25. discount amount
var originalPrice = 1000
var discountRate = 10
var discountAmount = (originalPrice * discountRate) / 100
console.log("discount amount: " + discountAmount)

// 26. final price
var originalPrice = 1000
var discountRate = 10
var discountAmount = (originalPrice * discountRate) / 100
var finalPrice = originalPrice - discountAmount
console.log("final price: " + finalPrice)

// 27. GST amount
var originalPrice = 1000
var gstRate = 18
var gstAmount = (originalPrice * gstRate) / 100
console.log("GST amount: " + gstAmount)

// 28. total bill with GST
var originalPrice = 1000
var gstRate = 18
var gstAmount = (originalPrice * gstRate) / 100
var totalBill = originalPrice + gstAmount
console.log("total bill with GST: " + totalBill)

// 29. profi
var costPrice = 1000
var sellingPrice = 1200
var profit = sellingPrice - costPrice
console.log("profit: " + profit)


// 30. loss
var costPrice = 1000
var sellingPrice = 800
var loss = costPrice - sellingPrice
console.log("loss: " + loss)

// 31. profit percentage
var costPrice = 1000
var sellingPrice = 1200
var profit = sellingPrice - costPrice
var profitPercentage = (profit / costPrice) * 100
console.log("profit percentage: " + profitPercentage)   

// 32. loss percentage
var costPrice = 1000
var sellingPrice = 800  
var loss = costPrice - sellingPrice
var lossPercentage = (loss / costPrice) * 100
console.log("loss percentage: " + lossPercentage)

// 33. percentage
var obtained = 50
var Total = 200
var percentage = (obtained / Total) * 100
console.log("percentage: " + percentage)


// 34. average of 5 numbers
var num1 = 10
var num2 = 20
var num3 = 30   
var num4 = 40
var num5 = 50
var average = (num1 + num2 + num3 + num4 + num5) / 5
console.log("average of 5 numbers: " + average) 
//Q1 write a program to get each value from array and store in object
// where is value is key and its square as value.

var Data = [5,6,4,7,8]
var output={}
for(var val of Data)
{
    output[val]=val**2
}
console.log(output)
//{ '4': 16, '5': 25, '6': 36, '7': 49, '8': 64 }

//Write  a program to find max value from object
var objB ={
    'a' : 300,
    'b' : 400,
    'c' : 500,
    'd' :778
}
var output = 0
for(var val in objB){
    
    if(objB[val]>output){
        output=objB[val]
    }
}
console.log(output)
//778

//write a program to calculate the total bill as per the  fruits purchase by customers
var fruitInventory = {Apple:100, Banana:200, Mango:300, watermelon:150, Litchi:500,
     PineApple:300, orange:450}

var fruitsWithValue = {Apple:50, Banana:30, Mango:60, watermelon:100, Litchi:150,
     PineApple:75, orange:45}

var fruitsPurchased = {Apple:20, Banana:50, Mango:30, Litchi:25, watermelon:10}  
var totalBill =0

for(var fruit in fruitsPurchased){

    var fruitName = fruit
    var fruitVal = fruitsWithValue[fruit]
    var fruitPur = fruitsPurchased[fruit]
    var fruitInv = fruitInventory[fruit]
    var fruitBill = fruitVal*fruitPur
    fruitInventory[fruit] = fruitInventory[fruit] - fruitPur
    console.log("FruitDetails:",`fruit:${fruitName}, cost:${fruitVal}, Price: ${fruitPur}, total: ${fruitBill}` )
    totalBill = totalBill + fruitBill
}
console.log("Total Bill:", totalBill)
console.log("Inventory:",fruitInventory)
/*FruitDetails: fruit:Apple, cost:50, Price: 20, total: 1000
FruitDetails: fruit:Banana, cost:30, Price: 50, total: 1500
FruitDetails: fruit:Mango, cost:60, Price: 30, total: 1800
FruitDetails: fruit:Litchi, cost:150, Price: 25, total: 3750
FruitDetails: fruit:watermelon, cost:100, Price: 10, total: 1000
Total Bill: 9050
Inventory: {
  Apple: 80,
  Banana: 150,
  Mango: 270,
  watermelon: 140,
  Litchi: 475,
  PineApple: 300,
  orange: 450
} */

//write  a program to calculate the total electricity bill as number of units consumed for each customer
//If totalunit <=100 : per unit charge is 25 rupee
//If totalunit >=100 and <=300: per unit charge is 50 rupee
//If totalunit >300 : perunit is 100 ruppee
var  customerDetails = {
    Rahul : 200,
    Mohan : 250,
    Ravi : 300,
    Rohan : 350,
    Raghav :450
}
var totalBill ={}
for(var val in customerDetails)
{
    var units = customerDetails[val]
    var name = val
   
    //console.log(name,units)
   if(units<=100){
        totalBill=25*units
       console.log(`name: ${name}, units: ${units}, totalBill: ${totalBill}`)
    }
    else if(units>=100 && units<=300)
    {
        totalBill=50*units
         console.log(`name : ${name}, units: ${units}, totalBill: ${totalBill}`)
        
    }
    else
    {
        totalBill=100*units
        console.log(`name : ${name}, units: ${units}, totalBill: ${totalBill}`)
    }   
}
/*name : Rahul, units: 200, totalBill: 10000
name : Mohan, units: 250, totalBill: 12500
name : Ravi, units: 300, totalBill: 15000
name : Rohan, units: 350, totalBill: 35000
name : Raghav, units: 450, totalBill: 45000*/


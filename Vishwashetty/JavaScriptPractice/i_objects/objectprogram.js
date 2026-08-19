//Q1 write a program to get each value from array and store in object
// where is value is key and its square as value.

var Data = [5, 7, 8, 9, 10]
var output = {}
for(var val of Data) {
    output[val] = val**2
}
console.log(output)
// { '5': 25, '7': 49, '8': 64, '9': 81, '10': 100 }

//Q2 write a program find the max value from object.
var objB = {
    'a': 300,
    'b' : 800,
    'c': 500,
    'd' : 778,
}
console.log("")

var maxVal = 0
for(var k in objB) {
    console.log(k, objB[k])
    if (objB[k] > maxVal) {
        maxVal = objB[k]
    }
}

console.log("Max value :", maxVal)

console.log("______________________________")
for(var val of Object.entries(objB)) {
    console.log(val)
}

// [ 'a', 300 ]
// [ 'b', 400 ]
// [ 'c', 500 ]
// [ 'd', 778 ]


console.log("######################################")
// write a program to calculate the total bill as per fruits purchased by customers.

var FruitsInventory = {Apple: 100, Banana: 200, Mango:300, waterMelon: 150, lichhi:500,
     PineApple: 300, Orange: 450 }

var FruitsWithPrice = {Apple: 50, Banana: 30, Mango: 60, waterMelon: 100, lichhi: 150,
     PineApple: 75, Orange: 45 }

var FruitPurchased = {waterMelon: 10, lichhi: 25, Apple: 20, Banana: 50, Mango: 30}

var TotalBill = 0

for (var fruit in FruitPurchased) {
    //console.log(fruit)
    var fruitName = fruit
    var FruitPrice = FruitsWithPrice[fruit]
    var FruitQuantity = FruitPurchased[fruit]
    var FruitBill = FruitPrice * FruitQuantity
    //update fruit inventory.
    FruitsInventory[fruit] = FruitsInventory[fruit] - FruitQuantity
    console.log(fruitName, FruitPrice, FruitQuantity, FruitBill)
    TotalBill = TotalBill + FruitBill
}
console.log("------------------------")
console.log("Total bill :", TotalBill)

console.log("Remaining Inventory :",FruitsInventory)


console.log("#####################################")
CustomersDetails = {
    Rahul: 200,
    Mohan : 250,
    Ravi: 300,
    Rohan : 350,
    Raghav: 450
}

//output :

billdetails = {
    Rahul: {units:200, bill: 0},
    Mohan : {units:250, bill: 0},
    Ravi: {units:300, bill: 0},
    Rohan : {units:350, bill: 0},
    Raghav: {units:450, bill: 0}
}
// write a program to calculate the total eletricity bill as number of units consumed for each customer.
// If totalunit <= 100 : per unit charge is 25 rupee.
// If totalunit >=100 and <=300 : per unit charge is 50 rupee
// if totalunit >300 : per unit is 100 rupee
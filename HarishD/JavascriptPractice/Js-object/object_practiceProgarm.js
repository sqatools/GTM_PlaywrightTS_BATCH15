//write a program get each value from array and store in object
// where  value is key and its square as value.
var arr1 = [5, 7, 8, 9, 10]
var obj1 = {}
for (var val of arr1) {
    obj1[val] = val ** 2
}
console.log(obj1)

//write aprogram to find the max value from object
var obj2 = { 'a': 300, 'b': 800, 'c': 500, 'd': 778 }
var maxVal = 0
for (var k in obj2) {
    console.log(k, obj2[k])
    if (obj2[k] > maxVal) {
        maxVal = obj2[k]
    }
}
console.log("Max value:", maxVal)



// when we apply loop on a array we can simply use of(of → gives value)
//in → gives index/key 

// of operator we can use with string and array

console.log("#############################")

var obj = { 'a': 300, 'b': 800, 'c': 500, 'd': 778 }
for (var val in obj) {
    console.log(obj[val])
}

var obj1 = { 'a': 300, 'b': 800, 'c': 500, 'd': 778 }

for (var val of obj1) {
    console.log(val)   //TypeError: obj1 is not iterable

}

var obj2 = { 'a': 300, 'b': 800, 'c': 500, 'd': 778 }

for (var val of Object.entries(obj2))  // of value cannot apply on obj2 because  does not have the indexing.so we have to use the method called object.entries
{
    console.log(val)
}

//write a program to calculate the total bill as per fruits purchased by customers.
var FruitInventory = {
    waterMelon: 25, lichhi: 50, Apple: 30,
    Banana: 67, Mango: 55, PineApple: 80, Orange: 55
}

var FruitsWithPrice = {
    Apple: 50, Banana: 30, Mango: 60, waterMelon: 100, lichhi: 150,
    PineApple: 75, Orange: 45
}
var FruitPurchased = { waterMelon: 10, lichhi: 25, Apple: 20, Banana: 50, Mango: 30 }

var TotalBill = 0
for (var fruit in FruitPurchased) {
    //console.log(fruit)
    var fruitName = fruit
    var FruitPrice = FruitsWithPrice[fruit]
    //  var FruitPrice = FruitsWithPrice["waterMelon"]  
    // waterMelon: 100
    // FruitPrice = 100

    var FruitQuantity = FruitPurchased[fruit]
    var FruitBill = FruitPrice * FruitQuantity
    console.log("Fruit Name:", fruitName, "Fruit Price:", FruitPrice,
        "Fruit Quantity:", FruitQuantity, "Fruit Bill:", FruitBill)
    TotalBill += FruitBill

    // update the inventory
    FruitInventory[fruit]=FruitInventory[fruit]-FruitQuantity


}
console.log("Total Bill:", TotalBill)
console.log("Inventory of fruit :",FruitInventory )



// write a program to calculate the total eletricity bill as number of units consumed for each customer.
// If totalunit <= 100 : per unit charge is 25 rupee.
// If totalunit >=100 and <=300 : per unit charge is 50 rupee
// if totalunit >300 : per unit is 100 rupee


CustomersDetails = {
    Rahul: 200,
    Mohan : 250,
    Ravi: 300,
    Rohan : 350,
    Raghav: 450 
}
for (var bills in CustomersDetails)
{
    console.log(CustomersDetails[bills])
}
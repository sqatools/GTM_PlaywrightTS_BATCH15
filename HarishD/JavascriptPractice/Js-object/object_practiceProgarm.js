//write a program get each value from array and store in object

var arr = [['a', 20], ['b', 45], ['c', 345], ['d', 98]];
var obj = {};

for (var i = 0; i < arr.length; i++) {
    var key = arr[i][0];   // arr[0][0] = 'a' | arr[1][1] = b arr[2][0] = c | arr[3][0] = d
    var value = arr[i][1]; // arr[0][1] = 20 | arr[1][1] = 45 | arr[2][1] = 345 | arr[3][1] = 98

    obj[key] = value;   //obj['a'] = 20 | obj['b'] = 45 | obj['c'] = 345 | obj['d'] = 98
}

console.log(obj);


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

for (var val of Object.entries(obj2))
// of value cannot apply on obj2 because  does not have the indexing.
// so we have to use the method called object.entries
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
    FruitInventory[fruit] = FruitInventory[fruit] - FruitQuantity


}
console.log("Total Bill:", TotalBill)
console.log("Inventory of fruit :", FruitInventory)



// write a program to calculate the total eletricity bill as number of units consumed for each customer.
// If totalunit <= 100 : per unit charge is 25 rupee.
// If totalunit >=100 and <=300 : per unit charge is 50 rupee
// if totalunit >300 : per unit is 100 rupee


var CustomersDetails = {
    Rahul: 200,
    Mohan: 250,
    Ravi: 300,
    Rohan: 350,
    Raghav: 450
}

for (var customer in CustomersDetails) {

    var totalUnit = CustomersDetails[customer]
    var perUnitCharge

    if (totalUnit <= 100) {
        perUnitCharge = 25
    }
    else if (totalUnit > 100 && totalUnit <= 300) {
        perUnitCharge = 50
    }
    else {
        perUnitCharge = 100
    }

    var totalBill = totalUnit * perUnitCharge

    console.log(
        "Customer:", customer,
        "Units:", totalUnit,
        "Per Unit:", perUnitCharge,
        "Total Bill:", totalBill
    )
}
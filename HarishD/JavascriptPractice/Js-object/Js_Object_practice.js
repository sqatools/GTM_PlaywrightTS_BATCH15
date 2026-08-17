//Object datatypes
// Object data store the values in Key value pair {key :value}
//object datatype does not allow duplicate key but it allow duplicate value
//if we specify any duplicate key then it will take the last value of that key
//object can contain any type of date
//object does not allow indexing
//object is mutable type of data, it can modify any point of time

var object = {
    name: "Hari",
    age: 38,
    email: "test@gmail.com",
    Phonenumber: 789087125,
    hobies: { games: 'cricket', music: 'rockin songs', Food: 'healthy food' },
    personLikedCities: ["Hyderabad", "bangalore", "udupi"],
    marriedstatus: true
};

console.log(object);

//get the values from object using key and with key name in square bracket

console.log(object['hobies'])
//get values from object with key 
console.log(object.email)

console.log("##############################")
//add new key value pair of object

var object1 = { a: 200, b: 20, c: 500, d: 2567 }
//adding new key to object
object1.e = 130
object1.f = 158
console.log(object1)

//delete entry from object data type

var object3 = { a: 20, b: 45, c: 345, d: 98 }
delete object3.c
console.log(object3)

var object4 = {
    name: "Hari",
    age: 38,
    email: "test@gmail.com",
    Phonenumber: 789087125,
    hobies: { games: 'cricket', music: 'rockin songs', Food: 'healthy food' },
    personLikedCities: ["Hyderabad", "bangalore", "udupi"],
    marriedstatus: true
};

console.log(object4);
console.log(object4.hobies.games)
console.log(object4.personLikedCities[1])

console.log("################################")

/*Object Method
Object.keys()
Object.values()  */

var object5 = { a: 20, b: 45, c: 345, d: 98 }
delete object5.c
console.log(object5)
console.log(Object.keys(object5))
console.log(Object.values(object5))


//Entries Method :This method return array of array where each key value store in child array
var object6 = { a: 20, b: 45, c: 345, d: 98 }
console.log(Object.entries(object6))

//apply loop on object values
for (var data of Object.entries(object6)) {
    console.log(data)
}

//apply loop on object keys
var object7 = { a: 200, b: 122, c: 234, d: 899, e: 124 }
for (var key in object7) {
    console.log(key, " : ", object7[key])
}


//Assign method : This method  is to combine multiple object values and create anew object
var obj1 = { a: 20, b: 10 }
var obj2 = { c: 14, d: 99 }
var obj3 = { e: 55, f: 66 }
var output = Object.assign({}, obj1, obj2, obj3)
console.log("New object :", output)

console.log("#########################")
var NonAdminUsers = {
    user01: { name: 'Rahul', type: 'Nonadmin', active: false },
    user02: { name: 'Mohit', type: 'Nonadmin', active: true },
    user03: { name: 'Raghav', type: 'Nonadmin', active: false },
    user07: { name: 'Raghav', type: 'Nonadmin', active: false },
}

var AdminUser = {
    user04: { name: 'Ravi', type: 'admin', active: false },
    user05: { name: 'Rohit', type: 'admin', active: true },
    user06: { name: 'raman', type: 'admin', active: false },
    user07: { name: 'Vishnu', type: 'admin', active: false },
}

console.log(NonAdminUsers['user07'])
console.log(AdminUser['user07'])

var AllUsers = Object.assign(NonAdminUsers, AdminUser)
console.log(AllUsers)

console.log("###########################################")
// Freeze() method : this method does not allow to modify the object values.

var Details = { name: 'Adam', age: 35, email: 'adam@gmail.com', phone: 56734243 }
Object.freeze(Details)
//Details.address = "Mumbai, Bandra"
//console.log(Details)
// Cannot add property address, object is not extensible


// Details.age = 40
// console.log(Details)
//  Cannot assign to read only property 'age' of object '#<Object>'

// seal method : This method does not allow to add or delete any property from object
// user can upated existing poperties.

var EmployeeDetails = { name: 'Adam', age: 35, email: 'adam@gmail.com', phone: 56734243 }
Object.seal(EmployeeDetails)

// Try to add new property.
// EmployeeDetails.salary = 100000
//console.log(EmployeeDetails)  //Cannot add property salary, object is not extensible

// Delete Property from object
//delete EmployeeDetails.age
//console.log(EmployeeDetails) // TypeError: Cannot delete property 'age' of #<Object>

// update existing property.
EmployeeDetails.age = 40.00.
    console.log(EmployeeDetails)

console.log("###########################################")
// hasOwn method : This method return True if certain key is available in the object.
var objA = { name: 'Adam', age: 40, email: 'adam@gmail.com', phone: 56734243 }
// check object contains email key.
console.log("Check object contains key :", Object.hasOwn(objA, 'email'))

// check object contains address key.
console.log("Check object contains key :", Object.hasOwn(objA, 'address'))

 console.log(objA.age == 40) // true

console.log("-------------------------------------------------------")

// fromEntries() : method help us to create object from array of key value pair.
//Object.fromEntries() in JavaScript, it is used to convert an array of key-value pairs into an object.

var Fruits = [
  ['Apple', 100], ['Banana', 200], ['Mango', 300], ['watermelon', 400]

]
console.log(Object.fromEntries(Fruits))
// { Apple: 100, Banana: 200, Mango: 300, watermelon: 400 }

console.log(Fruits)









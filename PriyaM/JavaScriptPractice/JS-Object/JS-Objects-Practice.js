// Object data types.
/*
- Object data store values in key value pair. e.g {key: value}
- Object does not allow duplicate key, we can use duplicate values.
- If we specify any duplicate key, then it will only consider latest
  defined value.
- Object can contains any type of data.
- Object does not follow indexing.
- Object is mutable data type, that we can modify any point of time.
- Object can only only null key allowed.
*/

 

var object1 = {
    name : "Rahul",
    age : 25,
    email : 'rahul@gmail.com',
    phone: 678687678,
    hobbies : { game: 'cricket', music: 'rocking songs', food: 'healthy food'},
    precitis : ['Pune', 'Bangalore', 'Mumbai'],
    v1 : 4.5,
    married : true,
    age: 35

}

/*
{
  name: 'Rahul',
  age: 35,
  email: 'rahul@gmail.com',
  phone: 678687678,
  hobbies: { game: 'cricket', music: 'rocking songs', food: 'healthy food' },
  precitis: [ 'Pune', 'Bangalore', 'Mumbai' ],
  v1: 4.5,
  married: true
}
*/

console.log(object1)

// get value from object using key and with key name is square brackets
console.log(object1['hobbies'])
// { game: 'cricket', music: 'rocking songs', food: 'healthy food' }

// get value from object with key with dont.
console.log(object1.precitis)
// [ 'Pune', 'Bangalore', 'Mumbai' ]

console.log("#######################################")
// add new key value pair to object.
var obj1 = {a: 123, b: 456, c: 678}
// add new key to object.
obj1.d = 50
obj1.e = 100
console.log(obj1)

// delete entry from object data.
 var result = {p: 111, q: 222, r: 455}
 delete result.p
 console.log(result) // { q: 222, r: 455 }


 var object2 = {
    name : "Rahul",
    age : 25,
    email : 'rahul@gmail.com',
    phone: 678687678,
    hobbies : { game: 'cricket', music: 'rocking songs', food: 'healthy food'},
    precitis : ['Pune', 'Bangalore', 'Mumbai'],
    v1 : 4.5,
    married : true,
    age: 35
}
console.log(object2.hobbies)
console.log(object2.hobbies.music)
console.log(object2.precitis[0]) // Pune


console.log("Object methods")
// ###################################################
// Objects.keys()
//Object.values()
console.log(Object.keys(object2))
console.log(Object.values(object2))


// Entries method : This method return array of array where each key value
// store in child array.
var obj3 = {a: 333, b: 555, c: 666}
console.log(Object.entries(obj3))
// [ [ 'a', 333 ], [ 'b', 555 ], [ 'c', 666 ] ]

console.log("################################")
// apply loop on object values.

for (var data of Object.entries(obj3)) {
    console.log(data)
}
/*
[ 'a', 333 ]
[ 'b', 555 ]
[ 'c', 666 ]
*/

console.log("-----------------------------------------")
// Apply loop on object key using key
var obj5 = {a: 333, b: 555, c: 666, d: 678, e: 5678}
for (var key in obj5) {
  console.log(key, ":", obj5[key])
}

/*
a : 333
b : 555
c : 666
d : 678
e : 5678
*/




console.log("#################################")
//Assign Method : This method combine mulitple object values and create new object.

var ob1 = {a: 444, b: 567}
var ob2 = {p: 333, q: 123}
var ob3 = {x: 555, y: 999, a: 500}
var output = Object.assign(ob1, ob2, ob3)
console.log("Output :", output) 
// { a: 444, b: 567, p: 333, q: 123, x: 555, y: 999 }


var NonAdminUsers = {
  user01: {name: 'Rahul', type: 'Nonadmin', active: false},
  user02: {name: 'Mohit', type: 'Nonadmin', active: true},
  user03: {name: 'Raghav', type: 'Nonadmin', active: false},
  user07: {name: 'Raghav', type: 'Nonadmin', active: false},
}

var AdminUser = {
  user04: {name: 'Ravi', type: 'admin', active: false},
  user05: {name: 'Rohit', type: 'admin', active: true},
  user06: {name: 'raman', type: 'admin', active: false},
  user07: {name: 'Vishnu', type: 'admin', active: false},
}

console.log(NonAdminUsers['user07'])
console.log(AdminUser['user07'])

var AllUsers = Object.assign(NonAdminUsers, AdminUser)
console.log(AllUsers)

/*

{
  user01: { name: 'Rahul', type: 'Nonadmin', active: false },
  user02: { name: 'Mohit', type: 'Nonadmin', active: true },
  user03: { name: 'Raghav', type: 'Nonadmin', active: false },
  user07: { name: 'Vishnu', type: 'admin', active: false },
  user04: { name: 'Ravi', type: 'admin', active: false },
  user05: { name: 'Rohit', type: 'admin', active: true },
  user06: { name: 'raman', type: 'admin', active: false }
}
*/

console.log("###########################################")
// Freeze() method : this method does not allow to modify the object values.

const Details = {name: 'Adam', age: 35, email: 'adam@gmail.com', phone: 56734243}
Object.freeze(Details)

//Details.address = "Mumbai, Bandra"
//console.log(Details)
// Cannot add property address, object is not extensible


// Details.age = 40
// console.log(Details)
//  Cannot assign to read only property 'age' of object '#<Object>'

console.log("###########################################")
// seal method : This method does not allow to add or delete any property from object
// user can upated existing poperties.

const EmployeeDetails = {name: 'Adam', age: 35, email: 'adam@gmail.com', phone: 56734243}
Object.seal(EmployeeDetails)

// Try to add new property.
// EmployeeDetails.salary = 100000
//console.log(EmployeeDetails)
//  Cannot add property salary, object is not extensible

// Delete Property from object
//delete EmployeeDetails.age
//console.log(EmployeeDetails)
// TypeError: Cannot delete property 'age' of #<Object>

// update existing property.

EmployeeDetails.age = 40
console.log(EmployeeDetails)
// { name: 'Adam', age: 40, email: 'adam@gmail.com', phone: 56734243 }


console.log("_________________________________________")
// hasOwn method : This method return True if certain key is available in the object.
var objA = { name: 'Adam', age: 40, email: 'adam@gmail.com', phone: 56734243 }
// check object contains email key.
console.log("Check object contains key :", Object.hasOwn(objA, 'email'))
// Check object contains key : true

// check object contains address key.
console.log("Check object contains key :", Object.hasOwn(objA, 'address'))
// Check object contains key : false

 console.log(objA.age == 40) // true

console.log("-------------------------------------------------------")
// fromEntries() : method help us to create object from array of key value pair.

var Fruits = [
  ['Apple', 100], ['Banana', 200], ['Mango', 300], ['watermelon', 400]

]
console.log(Object.fromEntries(Fruits))
// { Apple: 100, Banana: 200, Mango: 300, watermelon: 400 }

console.log(Fruits)
/*

[
  [ 'Apple', 100 ],
  [ 'Banana', 200 ],
  [ 'Mango', 300 ],
  [ 'watermelon', 400 ]
]
*/


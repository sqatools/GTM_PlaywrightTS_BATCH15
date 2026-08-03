//Object data type
/* object data type store values in Key value pair e.g {key : value}
object data type doesn't allow duplicate key, we can use duplicate values
IF we specify duplicate key,It will consider latest defined value for that key
object can contain any type of data
object doesn't follow indexing
object is mutable datatype, we can modify any point of time
object can only one null key allowed*/

var object1 = {
    name : "Rahul",
    age  : 25,
    email: "rahul@gmail.com",
    phone: 789067890,
    hobbies: {game: 'cricket', music: 'Rock songs', food: 'healthy food'},
    precitis : ['pune', 'Banglore', 'Mumbai'],
    v1  :4.5,
    married:true,
    age : 35
}
console.log(object1)

//get value from object using key name in square
console.log(object1['hobbies'])
//{ game: 'cricket', music: 'Rock songs', food: 'healthy food' }
//get value from object using key with dot(.)
console.log(object1.precitis)
//[ 'pune', 'Banglore', 'Mumbai' ]

//add new key value pair to object

var obj1 = {a:123, b:456, c:678}
//add new key to object
obj1.d = 500
obj1.e =100
console.log(obj1)
//{ a: 123, b: 456, c: 678, d: 500, e: 100 }

//delete entry from object data type
var result = {p:111, q:222, r:455}
delete result.p
console.log(result)
//{ q: 222, r: 455 }

//
var object2 = {
    name : "Rahul",
    age  : 25,
    email: "rahul@gmail.com",
    phone: 789067890,
    hobbies: {game: 'cricket', music: 'Rock songs', food: 'healthy food'},
    precitis : ['pune', 'Banglore', 'Mumbai'],
    v1  :4.5,
    married:true,
    age : 35
}
console.log(object2.hobbies)
//{ game: 'cricket', music: 'Rock songs', food: 'healthy food' }
console.log(object2.hobbies.music)
//Rock songs
console.log(object2.hobbies[0])
//undefined(indexing is not allowed in key value pair except array)
console.log(object2.precitis[0])
//pune

//object methods
//Object.keys() : Returns keys
//Object.values() : Returns values

console.log(Object.keys(object2))
/*[
  'name',    'age',
  'email',   'phone',
  'hobbies', 'precitis',
  'v1',      'married'
]*/
console.log(Object.values(object2))
/*[
  'Rahul',
  35,
  'rahul@gmail.com',
  789067890,
  { game: 'cricket', music: 'Rock songs', food: 'healthy food' },
  [ 'pune', 'Banglore', 'Mumbai' ],
  4.5,
  true
]*/

//entries method: This method returns aray of array where each key value pair store in child array
var obj3 ={a:222, b:333, c:555}
console.log(Object.entries(obj3))
//[ [ 'a', 222 ], [ 'b', 333 ], [ 'c', 555 ] ]

//apply loop on object values

for(var data of Object.entries(obj3)){
    console.log(data)
}
/*
[ 'a', 222 ]
[ 'b', 333 ]
[ 'c', 555 ]
*/

//Apply loop  on object key   using key
var obj5 ={a: 333, b:555, c:666, d:678, e:567}
for(var key in obj5)
{
    console.log(key, ":", obj5[key])
}
/* a : 333
b : 555
c : 666
d : 678
e : 567
*/

//Assign method: This method combines multiple obj to create a new method

var obj1 = {a:444, b:555}
var obj2 ={p:333, q:123}
var obj3 = {x:555, y:999}
var output = Object.assign({},obj1,obj2,obj3)
// or var output = Object.assign(obj1,obj2,obj3)
console.log(output)
//{ a: 444, b: 555, p: 333, q: 123, x: 555, y: 999 }

//assign

var NonAdminUsers = {
    user01: {name:'Rohit', type:'nonadmin', active:true},
    user02: {name:'Ravi', type:'nonadmin', active:false},
    user03: {name:'Ravan', type:'nonadmin', active:true},
}
var AdminUser= {
    user01: {name:'Rajeev', type:'admin', active:true},
    user02: {name:'Raman', type:'admin', active:false},
    user03: {name:'Raju', type:'admin', active:true},
}
var AllUsers = Object.assign({},NonAdminUsers, AdminUser)
console.log(AllUsers)

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



//Freeze:this method doesn't allow to modify the object values
var details ={name:"Adam", age:35, email : "adam@gmail.com", phone:890908900}
Object.freeze(details)
//details.address ="Mumbai, Bandra"
//console.log(details)
//Cannot add property address, object is not extensible
details.age ='40'
console.log(details)
//Cannot assign to read only property 'age' of object '#<Object>'

//seal method: This method doesn't allow to add or delete property from obj
 //user can upated existing poperties.
 var employeeDetails ={name:"Adam", age:35, email : "adam@gmail.com", phone:890908900}
 Object.seal(employeeDetails)
 //employeeDetails.salary = 10000
 //console.log(employeeDetails)
//Cannot add property salary, object is not extensible
//delete employeeDetails.age
//console.log(employeeDetails)
// Cannot delete property 'age' of #<Object>

//updating existing key value
employeeDetails.age=40
console.log(employeeDetails)
//{ name: 'Adam', age: 40, email: 'adam@gmail.com', phone: 890908900 }

// hasOwn method : This method return True if certain key is available in the object.
var objA ={name:"Adam", age:35, email : "adam@gmail.com", phone:890908900}
console.log(Object.hasOwn(objA,'email'))//true
console.log(Object.hasOwn(objA, 'address'))//false
console.log(objA.age==40)//false

// fromEntries() : method help us to create object from array of key value pair.
var fruits=[['Apple',100],['Banana',200],['Orange',45],['Mango',250]]
console.log(Object.fromEntries(fruits))
//{ Apple: 100, Banana: 200, Orange: 45, Mango: 250 }


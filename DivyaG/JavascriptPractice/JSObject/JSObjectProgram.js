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




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

// apply loop on object values.

for (var data of Object.entries(obj3)) {
    console.log(data)
}
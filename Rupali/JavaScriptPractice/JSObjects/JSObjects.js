const { use } = require("react")

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
console.log(object1)

// add key value pair to object
var obj1 ={a:123, b:456, c:678}
obj1.d=50
obj1.e=100

console.log(obj1)

//delete entry from onject

var result ={p:111, q:222, r:456}

delete result.p
console.log(result)

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
console.log(object2.precitis[0])


// object methods
// object.keys
var obj_1 ={a:333,b:555, c:666}
console.log(Object.keys(obj_1))

//object.values

console.log(Object.values((obj_1)))
//entries method
var obj3 ={a:333,b:555, c:666}
console.log(Object.entries(obj3))


//loop on object
for(var data of Object.entries(obj3)){
    console.log(data)
}

// loop with keys
var obj4 ={a:222, b:333, c:444, d :555}
for(var key in obj4){
    console.log(key, ":",obj4[key])
}

// assign method

var ob1 ={ a:444, b:567}
var ob2 ={p: 555, q:666}
var ob3 ={x:777, y:789}

var output =Object.assign(ob1,ob2,ob3)
console.log(output)


// freeze method
var details = { name: 'adam', age :40, email :'adam@gmail.com', phone:21324556}
Object.freeze(details)
//details.address ='mumbai'
console.log(details)

// seal method
var userDetails = { name: 'rupali', age :35, email :'rupali@gmail.com', phone:21324556}
Object.seal(userDetails)
// userDetails.address ='mumbai'
// console.log(userDetails)

// delete userDetails.age
// console.log(userDetails)
userDetails.age =40
console.log(userDetails)

// hasown method

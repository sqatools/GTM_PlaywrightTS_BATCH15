
 var object2 = {
    name : "Rahul",
    age : 25,
    email : 'rahul@gmail.com',
    phone: 678687678,
    hobbies : { game: 'cricket', music: 'rocking songs', food: 'healthy food'},
    precitis : ['Pune', 'Bangalore', 'Mumbai'],
    hello() { return console.log("Hello World")},
    v1 : 4.5,
    married : true,
    age: 35
}

// console.log(object2)
// console.log(Object.keys(object2))
// console.log(Object.values(object2))
console.log(Object.entries(object2))
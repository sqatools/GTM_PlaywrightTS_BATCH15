
var obj1= {name : "Deepak", age:"34", Class : "javascript"}

console.log(obj1.Class)
console.log(obj1.age)

// add new key value pair to object.
var obj2 = {a: 123, b: 456, c: 678}
obj2.a = 33
obj2.b =56
console.log(obj2)

//delete entry from object
var del =delete obj2.a
console.log(obj2)
console.log(del)

// Entries method : This method return object to array where each key value
// store in child array.
var object1 = {
    name : "Deepak",
    age : 25,
    email : 'Deepak@gmail.com',
    phone: 678687678,
    hobbies : { game: 'cricket', music: 'rocking songs', food: 'healthy food'},
    precitis : ['Pune', 'Bangalore', 'Mumbai'],
    v1 : 4.5,
    married : true,
    age: 35

}

console.log(Object.entries(object1))

for(var Ary of Object.entries(object1)){
    console.log(Ary)

}


//write a progrm to find the max value frm object

const scores = {
  alice: 85,
  bob: 92,
  charlie: 78,
  diana: 95,
  evan: 88
};

let maxValue = 0; // Start with the smallest possible number

for (let key in scores) {
    console.log(key)
  if (scores[key] > maxValue) {
    maxValue = scores[key];
  }
}

console.log(maxValue); // Output: 95
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

var object1={a:200,b:20,c:500,d:2567}
//adding new key to object
object1.e=130
object1.f=158
console.log(object1)

//delete entry from object data type

var object3={ a:20,b:45,c:345,d:98}
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

var object5={ a:20,b:45,c:345,d:98}
delete object5.c
console.log(object5)
console.log(Object.keys(object5))
console.log(Object.values(object5))


//Entries Method :This method return array of array where each key value store in child array
var object6={ a:20,b:45,c:345,d:98}
console.log(Object.entries(object6))



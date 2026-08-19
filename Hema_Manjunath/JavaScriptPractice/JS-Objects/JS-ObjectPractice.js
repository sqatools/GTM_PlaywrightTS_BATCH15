//Object data type: The data type that hold multiple values at time and it is mutable.
// Object data Store values in key value pair: e.g {Key: Value}
//Object does not allow duplicate key , we can use duplicate values 
// Obect can contain any type of Data 
// Object does not follow indeexing 
// it is mutable datatype , That we can modify any point of them
// Object can only null key 
/*
var object1={
    name:'Hema',
    age:35,
    phoneno:6776566576,
    email:'latha@email.com',
    hobbies:{game:'cricket', music:'rocking songs' ,food:'healthlyfood'},
    Cities:['puna','Bengalore','Hyd']
}
console.log(object1)

// Provide the dupilicate filed


var object1={
    name:'Hema',
    age:35,
    phoneno:6776566576,
    email:'latha@email.com',
    hobbies:{game:'cricket', music:'rocking songs' ,food:'healthlyfood'},
    Cities:['puna','Bengalore','Hyd'],
    age:40  // It prints latest value as it consider the LIFO
}
console.log(object1) 

//Get a value from Object using Key 
console.log(object1['hobbies'])  // Only hobbies details will shows up
console.log(object1.email) // key can be called using Brackets and dot 

*/


// Lets do More Oprations 
// Add new key value pair to Object 
var obj1={
    a:10,
    b:20,
    c:30
}
obj1.d=70
obj1.e=80
console.log(obj1)

// Difference between array and Object ?

//delete entry from Object datatype
var resl={p:121,r:345,s:78}
delete resl.p
console.log(resl) //{ r: 345, s: 78 }

//

var object2={
    name:'Hema',
    age:35,
    phoneno:6776566576,
    email:'latha@email.com',
    hobbies:{game:'cricket', music:'rocking songs' ,food:'healthlyfood'},
    Cities:['puna','Bengalore','Hyd']
}
console.log(object2.hobbies)
console.log((object2.hobbies.music))
console.log(object2.Cities[1])


// Object Methods, 
// 1. Objects.keys()
// 2. Objects.Values()

//console.log(object2.keys())
//console.log(object2.values())
console.log(Object.keys(object2))
console.log(Object.values(object2))



var objectA = {
    name : 'Latha',
    age: 38,
    email:'Hema@email.com',
    working: true,
    faxnumber:'8687-8786',
    cities:['Pune','Hyd','bengalore'],
    hobbies:{game:'cricket', music:'rocking songs' ,food:'healthlyfood'},
}
//console.log(objectA.hobbies.music) //  we can call the values 
//console.log(objectA.cities[2]) // we can call by indexing
//console.log(objectA)
console.log(Object.keys(objectA))
console.log(Object.values(objectA))
/*
var result = {
    p:111,
    q:222,
    r:676
}
delete result.p
console.log(result)
*/

var object2={a:333,b:444,c:7777}
//console.log((Object.entries(object2)))

// Apply loop on object Values

for (var data1 of Object.entries(object2)){
    console.log(data1)
}

//apply loop on Object key Using key 
var object2={a:333,b:444,c:7777}
for (var data2 of Object.keys(object2)){
    console.log(data2,":",object2[data2])
}

// Create a Menthod to comboine multiple object values and create a New Object 
// say 3 obj

var obj1= {a:444 ,b:555}
var obj2= {c:56666 ,e:555}
var obj3= {f:444 ,g:555}
var output = Object.assign({}, obj1, obj2, obj3)
console.log(output)

//Nonadm

var nonAdminUser ={
    user01 : {name :'Hema' ,type:'nonadmin' ,Active:false},
    user02 : {name :'latha' ,type:'nonadmin' ,Active:true},
    user03 : {name :'plant' ,type:'nonadmin' ,Active:false}
}

var AdminUser ={
    user04 : {name :'flower' ,type:'Admin' ,Active:true},
    user05 : {name :'leaf' ,type:'Admin' ,Active:true},
    user06 : {name :'stem' ,type:'Admin' ,Active:false}
}
var combinedUsers = Object.assign({}, nonAdminUser, AdminUser)
console.log(combinedUsers) 

console.log(nonAdminUser.user03)
console.log(AdminUser.user05)



var student = {
    name: 'Hema',
    age: 35,
    details() {
        console.log("The name of Student is", this.name, "and age is", this.age)
    }
}
student.details()
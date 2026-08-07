// var employee = {

// name : 'Pranali',
// surname : 'Dandale',
// State : 'maharastra',
// precity:['pune','mumbai','kolkatta'],

// jobDetails:{post :'CA',JobType: 'Full time',salary : 123012},

// AddressDetails : 'B 114 padmavati nagar mumbai'

// }
// var employee2 = {

// name : 'viraj',
// surname : 'Dandale',
// State : 'maharastra',
// precity:['pune','mumbai','jalna'],

// jobDetails:{post :'IPS',JobType: 'Full time',salary : 32123421},

// AddressDetails : 'janla maharastra'

// }
// // object method
// //keys

// console.log(Object.keys(employee))

// // values

// console.log(Object.keys(employee2))
// console.log(Object.values(employee))

// // Entries method : This method return array of array where each key value
// // store in child array.

// var obj3 = {a: 333, b: 555, c: 666}
// console.log(Object.entries(obj3))
// // [ [ 'a', 333 ], [ 'b', 555 ], [ 'c', 666 ] ] 

// // apply loop on object values.

// for(var data of Object.entries(obj3)){
//     console.log(data);
// }

// // Apply loop on object key using key

// var obj5 = {a: 333, b: 555, c: 666, d: 678, e: 5678}

// for(var key in obj5)
// {
//     console.log(key,obj5[key])
// }


// //Assign Method : This method combine mulitple object values and create new object.


// var a ={a: 444, b: 567}
// var b ={p: 333, q: 123}
// var c ={x: 555, y: 999, a: 500}     

// console.log(Object.assign(a, b, c))

// // Freeze() method : this method does not allow to modify the object values.

// var Details = {name: 'Adam', age: 35, email: 'adam@gmail.com', phone: 56734243}
// Object.freeze(Details)

// // Details.name = 'John' // not allowed
// // Details.age = 45 // not allowed 
// // console.log(Details) // { name: 'Adam', age: 35, email: '


// // seal method : This method does not allow to add or delete any property from object
// // user can upated existing poperties.

// var EmployeeDetails = {name: 'Adam', age: 35, email: 'adam@gmail.com', phone: 56734243}
// Object.seal(EmployeeDetails)

// // EmployeeDetails.age = 45 // allowed
// // EmployeeDetails.email = 'john@gmail.com' // allowed

// // EmployeeDetails.salary = 123456 // not allowed
// // delete EmployeeDetails.phone // not allowed 
// // console.log(EmployeeDetails) // { name: 'Adam', age: 45, email: '


// EmployeeDetails.age = 45 // allowed
// console.log(EmployeeDetails)


// hasown property method : This method check the property is present in object or not. It return boolean value.

var employee={name:'adam',age:35,email:'adam@gmail.com'}


console.log("check object contain key ",Object.hasOwn(employee, 'email'))

console.log("check object contain key as age",Object.hasOwn(employee, 'address'))
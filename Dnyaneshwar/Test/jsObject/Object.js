var obj ={name:"Dnyaneshwar", age:30, city:"mumbai"};
var obj1 = {name:"Rahul", age:25, city:"Mumbai"};  


console.log(obj.name); // Dnyaneshwar
console.log(obj.age);   
console.log(obj.city);  

console.log(obj1); 

var data1={
empname : "viraj",
empID   :121,
empsalary :1200000,
Address : 'Mumbai',
State :'maharastra'

}

// for (var key in data1) {
//     console.log(key);          // key
//     console.log(data1[key]);

//     console.log(key,data1[key])
// }

console.log(data1.State)
console.log(data1.empname)
console.log(data1.empsalary)



var employee = {

name : 'Pranali',
surname : 'Dandale',
State : 'maharastra',
precity:['pune','mumbai','kolkatta'],

jobDetails:{post :'CA',JobType: 'Full time',salary : 123012},

AddressDetails : 'B 114 padmavati nagar mumbai'

}

console.log(employee)
console.log(employee.jobDetails.salary)
console.log(employee.precity[2])
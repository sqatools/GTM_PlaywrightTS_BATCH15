// It is a builtin collection object, that maintain unique values
// duplicate data is not allowed
// If we provide duplicate value,it will ignore those

const SetValues = new Set(['Rohit','Ram','Rohit','Rahul','Raghav','Ram'])
console.log(SetValues)
/* Set(4) { 'Rohit', 'Ram', 'Rahul', 'Raghav' } */
//add values
SetValues.add('Rajesh')
console.log(SetValues)
//Set(5) { 'Rohit', 'Ram', 'Rahul', 'Raghav', 'Rajesh' }

//delete values
SetValues.delete('Ram')
console.log(SetValues)
// Set(4) { 'Rohit', 'Rahul', 'Raghav', 'Rajesh' }

// check given data is available or not
console.log("Rohit is available:",SetValues.has("Rohit"))
// Rohit is available: true

//clear all data from set
// SetValues.clear()
// console.log(SetValues)
// Set(0) {}

// apply loop

for(var val of SetValues){
    console.log(val)
}
/* Rohit
Rahul
Raghav
Rajesh */

var arr1 = [4,5,6,7,8,4,5,6]
var SetArrayValues = new Set(arr1)
console.log(SetArrayValues)
// Set(5) { 4, 5, 6, 7, 8 }

// map function
//map():Transform
// It helps us to transform the array values in the same pattern
// How it works: It loops each value in the array passes each item into callback function
// and builds a brand new array using the returned values
var arr2 = [4,5,6,7,8]
const output = arr2.map(num =>num*10)
console.log(output)
// [ 40, 50, 60, 70, 80 ]


// Filter():It selects the value
// selector
//filter values from array using Filter() method
var array3 = [4,3,5,6,7,8,9,10]
var output = array3.filter(num => num%2==0)
console.log("Even values:",output)
// Even values: [ 4, 6, 8, 10 ]

// reduce method:It returns combine result as an array
const totalSum = array3.reduce((a,b) => {return a+b})
console.log(totalSum)//52
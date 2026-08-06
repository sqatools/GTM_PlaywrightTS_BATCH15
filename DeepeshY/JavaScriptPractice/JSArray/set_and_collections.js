// Set is an builtin collection object, that maintain unique values.
// duplicate data is not allowed.
// if we provide duplicate value, it will ignore those.

const SetValues = new Set(['Rohit', 'Ram', 'Mohan', 'Rohit', 'Raghav', 'Ram'])
console.log(SetValues) // Set(4) { 'Rohit', 'Ram', 'Mohan', 'Raghav' }
// add value to set
SetValues.add('Mohit')
SetValues.add('Rohit')
console.log(SetValues)
// { 'Rohit', 'Ram', 'Mohan', 'Raghav', 'Mohit' }

//Delete value from set
SetValues.delete("Ram")
console.log(SetValues)
//{ 'Rohit', 'Mohan', 'Raghav', 'Mohit' }

// check given data is available or not
console.log("has Rohit is available :", SetValues.has("Rohit"))
// has Rohit is available : true

// clear all data from set
// SetValues.clear()
// console.log("Set Values :", SetValues)

console.log(SetValues)

// apply loop set data
for(var val of SetValues) {
    console.log(val)
}

/*
Rohit
Mohan
Raghav
Mohit
*/


const MixValues = new Set([10, 20, 'a', 30, 'b', 40, 'c', 'd', 20, 10, 'a', 'b'])
console.log(MixValues)

var arr1 = [5, 6, 7, 2, 1, 3, 5, 7, 6]
var SetArrayValues = new Set(arr1)
console.log(SetArrayValues)
// Set(6) { 5, 6, 7, 2, 1, 3 }

console.log("#######################################")
// map() :Transformer
// map() : when you want to change every element in an array in the exact same way

// map help us to transform the array values in the same pattern.
// How it works: It loops through your array, passes each item into a callback function, 
// and builds a brand-new array using the returned values.

var Arr2 = [4, 6, 7, 8, 2, 5, 6]
const output = Arr2.map(a => a*10)
console.log("map output :", output)

// map output : [
//   40, 60, 70, 80,
//   20, 50, 60
// ]


var Num1 = [4, 6, 7, 8]
var str2 = ['a', 'b', 'c', 'd']

const NumOutput = Num1.map(a => a**2)
const StrOutput = str2.map(b => b.repeat(2))
console.log("Num output :", NumOutput) // [ 16, 36, 49, 64 ]
console.log("String output :", StrOutput) //  [ 'aa', 'bb', 'cc', 'dd' ]
console.log(NumOutput.concat(StrOutput)) 

// [
//   16,   36,   49,
//   64,   'aa', 'bb',
//   'cc', 'dd'
// ]


console.log("#######################################")
// Filter(): Selector
// fiter value from array using filter method.

var Array3 = [4, 6, 7, 8, 20, 21, 13, 45]
var Filteroutput = Array3.filter(num => num%2 == 0)
console.log("Even values:", Filteroutput) // values: [ 4, 6, 8, 20 ]


// reduce method : this method return combine result from array
const totalSum = Array3.reduce((a, b)=> {return a+b})
console.log("total sum value :", totalSum) //  124
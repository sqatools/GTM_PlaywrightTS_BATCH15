// Array Fundamentals
/*
- Array can contains any types of data.
- Array is mutable data type, we can update values at any point of time.
- Array follows indexing as like string.
*/

//          0   1       2    3     4           5                6     7
var arr = [34, 'Hello', 4.5, 4565, [4, 6, 7], {a: 123, b: 456}, true, false]
//
console.log(arr)
/*
[
  34,
  'Hello',
  4.5,
  4565,
  [ 4, 6, 7 ],
  { a: 123, b: 456 },
  true,
  false
]

*/

//          0   1       2    3     4           5                6     7
var arr1 = [34, 'Hello', 4.5, 4565, [4, 6, 7], {a: 123, b: 456}, true, false]
// get array values with the help of indexing.
console.log(arr1[0]) // 34
console.log(arr1[4]) // [ 4, 6, 7 ]
console.log(arr1[4][1]) // 6
console.log(arr1[5]) // { a: 123, b: 456 }
console.log(arr1[5]['a']) // 123



console.log("###########################")
// get each avalue of array using loop
var arr3 = [5, 6, 7, 8, 12]
for(var val of arr3) {
    console.log(val)
}

/*

5
6
7
8
12

*/

// Apply loop and get indexing of each value in the array.
var arr4 = [5, 6, 7, 8, 12]
for(var i in arr4) {
    console.log(i, arr4[i])
}

console.log("############ Array Methods ##########")
// push : This method help to push data at end of the array.
var a1= [4, 5, 6, 19]
a1.push(100)
console.log("A1 :", a1) // A1 : [ 4, 5, 6, 19, 100 ]

// more than 1 value
a1.push(33, 44, 55, 66, 77)
console.log("A1 :", a1)

// A1 : [
//    4,  5,  6, 19, 100,
//   33, 44, 55, 66,  77
// ]

console.log("############ Array Methods ##########")
// unshift : help to add at begining of the array.\
var b1 = [4, 6, 7, 22, 44]
b1.unshift(123)
console.log("b1 :", b1) 
// [ 123, 4, 6, 7, 22, 44 ]


console.log("############ Array Methods ##########")
// pop method : this method remove value from end of the array and return it.

var a3 = [5, 7, 8, 2, 15]
var removed_value = a3.pop()
console.log("removed value :", removed_value) // removed value : 15
console.log(a3) // [ 5, 7, 8, 2 ]

console.log("############ Array Methods ##########")
// shift method: this will remove data from begining of array.
var s4 = [5, 6, 7, 8, 34]
var val = s4.shift()
console.log("removed value :", val) // removed value : 5
console.log("s4 :", s4) // s4 : [ 6, 7, 8, 34 ]

console.log("#########################################")
// splice method: this method required three parameter. (Index value, Delete Count, new values to add)
// splice(index; delete count; value to add)
var str5 =  ["we", "are", "learning", "Typescript"]

str5.splice(1, 0, "JavaScript")
console.log("Array 5 :", str5)
// [ 'we', 'JavaScript', 'are', 'learning', 'Typescript' ]


str5.splice(1, 1, "Python")
console.log("Array 5 :", str5)
// [ 'we', 'Python', 'are', 'learning', 'Typescript' ]

// add JAVA at index 1 and remove 2 values from that position.
str5.splice(1, 2, "JAVA")
console.log("Array 5 :", str5)
// [ 'we', 'JAVA', 'learning', 'Typescript' ]
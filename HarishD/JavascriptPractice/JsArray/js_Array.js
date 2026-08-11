// Array Fundamentals
/*
- Array can contains any types of data.
- Array is mutable data type, we can update values at any point of time.
- Array follows indexing as like string.
*/

//          0   1       2    3     4           5                6     7
var arr = [34, 'Hello', 4.5, 4565, [4, 6, 7], { a: 123, b: 456 }, true, false]

console.log(arr)

//          0   1       2    3     4           5                6     7
var arr1 = [34, 'Hello', 4.5, 4565, [4, 6, 7], { a: 123, b: 456 }, true, false]
// get array values with the help of indexing.
console.log(arr1[0]) // 34
console.log(arr1[4]) // [ 4, 6, 7 ]
console.log(arr1[4][1]) // 6
console.log(arr1[5]) // { a: 123, b: 456 }
console.log(arr1[5]['a']) // 123


console.log("###########################")
// get each avalue of array using loop
var arr3 = [5, 6, 7, 8, 12]
for (var val of arr3) {
    console.log(val)
}


// Apply loop and get indexing of each value in the array.
var arr4 = [5, 6, 7, 8, 12]
for (var i in arr4) {
    console.log(i, arr4[i])
}

console.log("############ Array Methods ##########")
// push : This method help to push data at end of the array.
var a1 = [4, 5, 6, 19]
a1.push(100)
console.log("A1 :", a1) // A1 : [ 4, 5, 6, 19, 100 ]

// more than 1 value
a1.push(33, 44, 55, 66, 77)
console.log("A1 :", a1)


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
var str5 = ["we", "are", "learning", "Typescript"]

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

console.log("############################")
var arrA = [5, 6, 7, 2, 4, 12, 56]
// Add 3 values at index 3 and remove 1 value
arrA.splice(3, 1, 100, 200, 'Hello')
console.log("arr A :", arrA)
// [ 5, 6, 7, 100, 200, 'Hello', 4, 12, 56 ]


arrA.splice(2, 3, 500, 700, 'JavaScript')
console.log("arr A :", arrA)
// arr A : [ 5, 6, 500, 700, 'JavaScript', 'Hello', 4, 12, 56 ]

var arrB = [5, 7, 8, 2, 4, 15]
var out = arrB.pop() * 100
console.log("Array Output :", out) // 1500


console.log("############################")
// foreach loop: iterate through each value of array.
var arrC = [5, 7, 8, 2, 3]
arrC.forEach((item) => console.log(item, item ** 2))

console.log("##########################")
// slice method: it will return sub array from target array.
// slice(start index, end inded)
// Output will include stat index and exclude to last index. 
var arrD = ['JOhn', 'jack', 'Frank', 3, 5, 6, 7]
console.log(arrD.slice(1, 5)) // [ 'jack', 'Frank', 3, 5 ]
console.log("Arr: ", arrD) // [ 'JOhn', 'jack', 'Frank', 3, 5, 6, 7 ]

console.log("##########################")
//include method : It will return True or False if value is avalab;e
var A1 = [5, 7, 8, 23, 45]
console.log(A1.includes(35)) // false
console.log(A1.includes(23)) // true

console.log("##########################")
// sorting of araray
var S1 = [15, 6, 7, 8, 23, 45, 2]

// sort array in ascending order
var output = S1.sort((a, b) => a - b)
console.log(output)

var output2 = S1.sort((a, b) => b - a)
console.log(output2)

/*
[
  45, 23, 15, 8,
   7,  6,  2
]
*/

console.log("##########################")
// reverse the array value.
var arrT = [5, 6, 2, 7, 12, 45]
var result = arrT.reverse()
console.log("Result :", result)
// [ 45, 12, 7, 2, 6, 5 ]


var arrU = [50, 6, 20, 7, 12, 45]
var result2 = []
for (var val of arrU) {
    console.log(val, result2)
    result2.unshift(val)
}
console.log("result2 :", result2)
// result2 : [ 45, 12, 7, 20, 6, 50 ]

console.log("###############################")
// join method : this method join array values.
var Users = ["Rahul", "Rohit", "Roman", "Raghav"]
var result = Users.join(" ")
console.log("result :", result)
// Rahul Rohit Roman Raghav
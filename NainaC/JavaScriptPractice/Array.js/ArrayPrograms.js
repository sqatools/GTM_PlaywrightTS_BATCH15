//// Array Fundamentals
/*
- Array can contains any types of data.
- Array is mutable data type, we can update values at any point of time.
- Array follows indexing as like string.
*/
var array =[34, 'Hello', 3.5, 567434, [4,6,7],  {a:123 , b: 456}, true, false ]
console.log(array)
// get array values with the help of indexing.


console.log(array[0])
console.log(array[4])
console.log(array[4][1]) // 6
console.log(array[5]) // { a: 123, b: 456 }
console.log(array[5]['a']) // 123


// get each value of array using loop
var array1= [5,6,7,8,12]
for (var value of array1 ){
    console.log(value)
}

// // Apply loop and get indexing of each value in the array.
var arr4 = [5, 6, 7, 8, 12]
for(var i in arr4) {
    console.log(i, arr4[i])
}

// push : This method help to push data at end of the array.
var array =  [4, 5, 6, 19]
array.push(100)
console.log(array)

// more than 1 value
array.push(33, 44, 55, 66, 77)
console.log("A1 :", array)

// unshift : help to add at begining of the array.\
var b1 = [4, 6, 7, 22, 44]
b1.unshift(12)
console.log(b1)

// pop method : this method remove value from end of the array and return it.
var a3 = [5, 7, 8, 2, 15]
var removed_value = a3.pop()
console.log("removed value :", removed_value) // removed value : 15
console.log(a3)

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
var out = arrB.pop()*100
console.log("Array Output :", out) // 1500


console.log("############################")
// foreach loop: iterate through each value of array.
var arrC = [5, 7, 8, 2, 3]
arrC.forEach((item) => console.log(item, item**2))
/*

5 25
7 49
8 64
2 4
3 9

*/

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
var output = S1.sort((a, b) => a-b)
console.log(output)
/*
[
   2,  6,  7, 8,
  15, 23, 45
]
*/

var output2 = S1.sort((a, b) => b-a)
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
for(var val of arrU) {
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


//WaP to find out the max value from array
var array1= [20, 30 , 100, 10, 15, 27]
var maxval= 0
for (var value of array1)
{
if(value>maxval){
    maxval = value
}
   else{
    continue
   }
}
console.log("max value :", maxval)


//WAP to shift aal +ve values at left dside n -ve values ate right side of array.
var array =[-3, 6,8,-2, 7, -12, 45, -18]
var output =[]
for(var value of array){
    if (value>0)
        {
            output.unshift(value)
        }
    else{
        output.push(value)
    }
}
console.log(output)


//WAP to find the 2nd max value.
var array = [100, 3, 77, 8, 56, 4,32]
var maxval =0
var secmax  = 0
for (var value of array){
    if(value> maxval){
        secmax = maxval 
        maxval = value
    } else if (value > secmax && value < maxval){
        secmax = value
    }
}
console.log("max value:", maxval)
console.log("sec max value:", secmax)




//write a programto get valur fromarray which are prime no,
var PrimeValues = [4, 6, 7,11,13,16,25,29]
var Prime=[]
for(var num of PrimeVlues){
    var count = 0
    for(var i=1; i<=num ; i ++)
        if(num% i===0){
            count++
        }
}
if(count ===2){
    Prime.num
}
console.log(Primes)


//WAP to to get combination of 2 values who sum is 10.
var array =[4,6,7,12,9,3,-2,8, 2,1]







//WAP to print square of even values and cube of odd values.
var array1 =[4,7,9,3,6,12,15]
for(var num of array1){
    if(num%2===0){
        console.log(num, "is even square=" ,num*num)
    } else {
        console.log(num, "is odd =", num*num*num)
    }
}


// WAP to remove duplicate values
var array =[ 7,8,2,5,7,5,4,8]
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






































//write a programto get valur fromarray which are prime no,
/*var PrimeValues = [4, 6, 7,11,13,16,25,29]
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
console.log(Primes)*/

//WAP to print square of even values and cube of odd values.
var array1 =[4,7,9,3,6,12,15]
for(var num of array1){
    if(num%2===0){
        console.log(num, "is even square=" ,num*num)
    } else {
        console.log(num, "is odd =", num*num*num)
    }
}
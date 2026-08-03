
var arr1 = [2,32,43,2,43,56,66,77,88,87,23]
console.log(arr1)

//add number at the lastof the index
arr1.push(67)
console.log(arr1)

//add number at the start of the array
arr1.unshift("testman")
console.log(arr1)

//remove element from arrray pop

console.log(arr1.pop())
console.log(arr1)

//shift method remove first element from array
console.log(arr1.shift());
console.log(arr1)

//splice--> Add/remove elements at specific index
arr1.splice(1,3)
console.log(arr1)

//foreachmethod for iteration
arr1.forEach((item)=>(
console.log(item)
))

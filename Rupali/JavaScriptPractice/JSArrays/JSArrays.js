var arr =[21, 'Rupali', 4.5,true,34234324, [1,2,4,8], {a:2,b:4}, false]

console.log(arr)

// get values from array
console.log(arr[0])
console.log(arr[5])
console.log(arr[5][2])
console.log(arr[6])
console.log(arr[6].a)
console.log(arr[6]['b'])

// traverse array using for loop
var a1 =[11,23,45,67,78,89,90]
for(var i=0; i<a1.length; i++){
    console.log(a1[i])
}

for(var val of a1){
    console.log(val)
}

// apply loop and get indexing of each value in array
var c2 =[1,3,5,7,9,11,13,15]
for(var i=0; i<c2.length; i++){
    console.log("index of ", c2[i], "is ", i)
}

for(var i in c2){
    console.log(i, c2[i])
}


// Array Methods
// push method
var a2=[2,4,6,7]
a2.push(10)
console.log(a2)

// unshift method
var a3 =[1,2,3,6,8]

a3.unshift(12)
console.log(a3)
a3.unshift(22,21)
console.log(a3)


// pop method
var a4 =[2,1,3,5,4]
var removed_val=a4.pop()
console.log(removed_val)
console.log(a4)

//shift method

var a5 = [12,34,56,78]
a5.shift()
console.log(a5)
a5.shift()
console.log(a5)

// splice method
var a6 =["we", "are", "learning", "javascript"]
a6.splice(1,0,"typescript")
console.log(a6)

a6.splice(1,1,'TS')
console.log("final value of a6:" + a6)

console.log(a6)

a6.splice(1,2,'Java')

console.log(a6)


//slice method
var a7=['John', 'jack', 'frank', 10,4,5,7]
console.log(a7.slice(1,5))
console.log(a7)

// includes method
var a8 =[1,4,2,5, 'hello',8]
console.log(a8.includes(4))
console.log(a8.includes('hello'))
console.log(a8.includes(10))


//sort method

var a10 =[45,32,6,2,10,11,9]
a10.sort()
console.log(a10)    

//reverse method
var a9 =[11,43,23,9,4,10,32]
console.log(a9.reverse())


// joins method
var a11 =[1,2,3,4,5]
// console.log(a11.join())
// console.log(a11.join(''))
// console.log(a11.join('-'))


var a12 =[5,4,3,2,1]

console.log(a12.join(a11))
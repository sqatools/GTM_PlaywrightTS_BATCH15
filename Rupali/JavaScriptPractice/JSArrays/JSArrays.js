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
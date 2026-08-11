var a9 =[11,43,23,9,4,10,32]
console.log(a9.reverse())

// using unshift
var a1= [10,2,4,31,9,52,34,21]

var output =[]
for(var val of a1){
    output.unshift(val)
}
console.log("output:", output)


//using for loop
var a1= [10,2,4,31,9,52,34,21]
var output =[]
for(var i=a1.length-1; i>=0; i--){
    output.push(a1[i])
}
console.log("output:", output)

//using for in loop
var a1= [10,2,4,31,9,52,34,21]
var output =[]
for(var i in a1){
    output.unshift(a1[i])
}
console.log("output:", output)

//using splice method
var a1= [10,2,4,31,9,52,34,21]
var output =[]
for(var i=0; i<a1.length; i++){
    output.splice(i,0,a1[i])
}
console.log("output:", output)


//using for each loop
var a1= [10,2,4,31,9,52,34,21]
var output =[]
a1.forEach(function(val){
    output.unshift(val)
})
console.log("output:", output)


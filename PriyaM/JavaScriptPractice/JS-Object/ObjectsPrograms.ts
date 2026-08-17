//Q1 write a program to get each value from array and store in object
// where is value is key and its square as value.

var Data : number[]= [5, 7, 8, 9, 10]
var output : { [key : number] : number}= {}
for(var entity of Data) {
    output[entity] = entity**2
}
console.log(output)
// { '5': 25, '7': 49, '8': 64, '9': 81, '10': 100 }

//Q1 write a program find the max value from object.
var objB = {
    'a': 300,
    'b' : 400,
    'c': 500,
    'd' : 778,
}
console.log("")
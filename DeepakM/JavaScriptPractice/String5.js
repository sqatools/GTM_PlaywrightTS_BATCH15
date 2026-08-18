//Count how many times a substring appears inside a string.
//input= Banana
//output= an ->2


var input = "Banana"

var Sub = input.substring(1, 3)
var count = input.split(Sub).length-1
console.log(count);
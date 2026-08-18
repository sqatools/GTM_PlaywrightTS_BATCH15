//Exchange the first and last characters of the string.


var input = "Deepak"

var firstchar = input[0];
var lastchar = input[input.length-1];

var middlechar = input.substring(1,input.length-1);
console.log(middlechar)

var output = lastchar + middlechar + firstchar; 


console.log(output);

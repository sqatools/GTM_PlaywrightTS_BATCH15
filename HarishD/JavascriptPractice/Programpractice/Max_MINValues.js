var numbers = [5, 2, 8, 1, 9];
var max = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Max number is :", max);

console.log("######################################");

var numbers1 = [5, 2, 8, 1, 9];
var min = numbers1[0];
for (var i = 1; i < numbers1.length; i++) {
    if (numbers1[i] < min) {
        min = numbers1[i];
    }
}
console.log("Min number is :", min);

console.log("######################################");


var number3 = [5, 2, 8, 1, 9];
var max3=number3[0]
var min3=number3[0]

for(var i=0;i<number3.length;i++)
{ 
    if(number3[i]>max3)
    {
        max3=number3[i]
    }
    if(number3[i]<min3)
    {
        min3=number3[i]
    }
}
console.log("Max number is :", max3); 
console.log("Min number is :", min3);



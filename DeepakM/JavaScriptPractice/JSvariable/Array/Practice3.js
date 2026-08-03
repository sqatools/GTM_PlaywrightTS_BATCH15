//write a program to get combination of two value who sum is 10

var array2 = [4,6,7,12,9,3,-2,8,2,1]

for (var i = 0; i < array2.length; i++) {
    for (var j = i + 1; j < array2.length; j++) {
        if (array2[i] + array2[j] === 10) {
            console.log(array2[i], array2[j]);
        }
    }
}
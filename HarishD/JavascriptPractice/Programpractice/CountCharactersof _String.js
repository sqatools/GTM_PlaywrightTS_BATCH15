var str = "HARISHDESHPADE";
var count = {}

for (var ch of str) {
    if (count[ch]) {
        count[ch]++
    }
    else {
        count[ch] = 1
    }
}
console.log(count)


console.log('######################################');

var str1 = "Deshpande";
var count1 = {};

for (var i = 0; i < str1.length; i++) {
    var character = str1[i];   // H= str[0]

    if (count1[character] == undefined) {   //    if (count[character] == undefined) {
        count1[character] = 1;
    } else {
        count1[character] = count1[character] + 1;
        // count1[character] + =1

    }
}
console.log(count1);

console.log('######################################');


var str2 = "aabbbccccddddd";
var count2 = {};
var result = 0;

for (var i = 0; i < str2.length; i++) {

    var character = str2[i];

    if (count2[character] == undefined) {
        count2[character] = 1;
    }
    else {
        count2[character] += 1;
    }
}
console.log(count2);
for (var character in count2) {
    result += count2[character];
}
console.log(result); // 14



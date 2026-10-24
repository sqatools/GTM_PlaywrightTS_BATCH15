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
    var character = str1[i];

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

    if (count2[character] == undefined)     // if (count (h)==Unde)
    {
        count2[character] = 1;
    }
    else {
        count2[character] += 1;
    }
}
console.log(count2);
for (var character in count2) {
    result = result + count2[character];
}
console.log(result); // 14

/* for (var a in count2) 
count2[a] 
result = result + count2[a]

*/

// var str = "we are learning javascript";
// var count = 0;

// for (var ch of str.toLowerCase()) {

//     if ("aeiou".includes(ch)) {
//         count++;
//     }
// }

// console.log("Total Vowels =", count);
var str = "we are learning javascript";
var count = 0;
for(var ch of str){

    if("aeiou".includes(ch)){
        count++
    }
}
console.log("Total Vowels =", count);
//write a program to count vowels in givent string
var str = "we are learning Javascript"
let count= 0 
for (let i=0; i<=str.length; i++){
    let ch = str[i].toLowerCase();
         if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}
console.log("Count vowels in given string:", output)
//write a program to repeat the first character of each word twice
function repeatFirstChar(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i][0];
        words[i] = firstChar + firstChar + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(repeatFirstChar("Hello World")); // Output: "HHello WWorld"


//remove the duplicate words from given string
let str1 = "kshitija sumeet rohit pooja kshitija rohit"
let result = [...new Set(str1.split(" "))].join(" "); 

console.log(result);

let str = "kshitija sumeet rohit pooja kshitija rohit";

let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {

    if (result.includes(words[i])) {
    } else {
        result = result + words[i] + " ";
    }
}

console.log(result);


// get the first and last 2 char
var str="kshitija"
var result = " ";
if(str.length>=2)
{
    result=str[0]+str[1]+str[str.length-2]+str[str.length-1];
}
else{
result=str;
}
console.log(result);

// lenghh of longest string in an array
var str= ["kshitija","summmeeet","Patare"]
var result=str[0];
for(var i=1; i<str.length; i++){
    if(str[i].length> result.length){
        result=str[i];
    }
}

console.log(result);

//last Two char four times
var str="kshitija"
if (str.length >= 2) {
    var lastTwo = str.slice(-2);
    var result = lastTwo.repeat(4);

    console.log(result);
} else {
    console.log("Result: " + str);
}

//reverse a string if lenth is a muliple of four
var str="code"
if(str.length%4==0){
var result=str.split("").reverse().join("");
    console.log(result);
}

//count occurreneces of substring
var str="kshiks"
var subst="ks"
var count=0;
for(var i=0;i<str.length; i++){
    if(str.startsWith(subst,i)){
        count++;
    }
}
console.log(count);

//find longest ans shortest word
var str = "I love India";
var words = str.split(" ");

var longword = words[0];
var shortword = words[0];

for (let word of words) {
    if (word.length > longword.length) {
        longword = word;
    }

    if (word.length < shortword.length) {
        shortword = word;
    }
}

console.log("Longest Word:", longword);
console.log("Shortest Word:", shortword);

//

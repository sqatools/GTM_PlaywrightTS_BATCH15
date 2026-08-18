// Q1 : write a program to count the number of vowels in given.
var s2 = "we are Learning JavaScript"
var count=0;
for(var i=0; i<=s2.length;i++){
    var ch = s2[i];
     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
     count++;
    } 
}
console.log("Number of Vowels", count);


//Write a program to repeat of first character of word twice
//output:"RRohit VVirat VVaibhav ABbhishek SSurya"
<<<<<<< HEAD
var str1= "Rohit Virat Vaibhav Abhishek Surya"
const words_array=str1.split(" ")
var output = " "
console.log("word_array:",wordS_array)
for(var word of words_array){
    console.log(word)
    var first_char=word[0]
    var newWord= '${first_char}${word}'
    output= output+" "+newWord
}
console.log(output)
=======

var str1 = "Rohit Virat Vaibhav Abhishek Surya";
const words_array = str1.split(" ");
var output = "";

console.log("words_array:", words_array);

for (var word of words_array) {
    var first_char = word[0];
    var newWord = `${first_char}${word}`;
    output = output + (output ? " " : "") + newWord;
}
console.log(output);
>>>>>>> 29f1427e4589fa5f687a83686ce8c5ab90612950

//Write a program to get first last characters of each word
//Outpt: "Rt Vt Vv Ak Sa"
var str2= "Rohit Virat Vaibhav Abhishek Surya"
console.log("H".repeat(5))

//Que 5:Write a Program to remove duplicates word from given string.
var str1= "Rohit Virat Vaibhav Surya Rohit Abhishek Surya Virat"
//Output= Rohit Virat Vaibhav Abhishek Surya"
 var words = str1.split(" ");
var result = "";

for (var i = 0; i < words.length; i++) {
    if (result.indexOf(words[i]) == -1) {
        result = result + words[i] + " ";
    }
}

console.log(result.trim());
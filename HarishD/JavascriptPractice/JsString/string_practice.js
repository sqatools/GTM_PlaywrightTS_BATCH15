// Q1 : remove duplicate characters from string
var str1 = "Cricbuzz is not associated";
var output = "";
<<<<<<< HEAD

for (var chr1 of str1) {

=======
for (var chr1 of str1) {
>>>>>>> 29f1427e4589fa5f687a83686ce8c5ab90612950
    if (output.includes(chr1)) {
        continue;
    }
    else {
        output += chr1;
    }
<<<<<<< HEAD

}

=======
}
>>>>>>> 29f1427e4589fa5f687a83686ce8c5ab90612950
console.log("output :", output);

console.log("################################")
// write a program to count vowel in the string

var str2 = "we are learning javascript"
var vowels = "aeiou";
var count = 0
for (var chr2 of str2) {
    if (vowels.includes(chr2)) {
        count++
    }
}

console.log("vowels of given string :", count)

//1. Get the First and Last 2 Characters
var str1 = "JavaScript";

if (str1.length < 2) {
    console.log("");
} else {
    let firstTwo = str1.substring(0, 2);
    let lastTwo = str1.substring(str1.length - 2);
    let result = firstTwo + lastTwo;
    console.log(result);
}


// Find the a lrgest of array 
var num = [20, 50, 10, 30, 80, 40, 60, 5];
var largest = num[0];

for (var i = 0; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}

console.log(largest);


// 2. Find the Length of the Longest String in an Array


var str2 = ["Java", "Programming", "Code"]
var largest = " "
for (var i = 0; i < str2.length; i++) {
    if (str2[i].length > largest.length) {
        largest = str2[i]
    }

}
console.log(largest)

//3. Repeat the Last Two Characters Four Times

var str3 = "coding"

var store = str3.substring(str3.length - 2)

var result = store.repeat(4)
console.log(result)


<<<<<<< HEAD


=======
//5. Count Occurrences of a Substring

var str5 = "banana"
var substring = "an"
var count = 0
for (var i = 0; i < str5.length - 1; i++) {
    if (str5.substring(i, i + substring.length) == substring) {


        count++;
    }

}
console.log(count);

//7. Find the Longest and Shortest Word
var str7 = "I love learning JavaScript";
var word = str7.split(" ");
console.log(word);
var largest = "";
var smallest = word[0] || "";

for (var i = 0; i < word.length; i++) {
    if (word[i].length > largest.length) {
        largest = word[i];
    }
    if (word[i].length < smallest.length) {
        smallest = word[i];
    }
}
console.log(largest);
console.log(smallest);


//write a program to repeat the first character of word twice
var str8 = "Rohit virat vibav surya abhishek"
var word_array = str8.split(" ")
console.log(word_array)
for (var word of word_array) {
    console.log("print :", word)
    var first_word = word[0]
    var newWord = `${first_word}${word}`
    output = output + " " + newWord
}


//write a program  first  and last character of word
var str9 = "Rohit virat vibav surya abhishek";
var word_array = str9.split(" ");
console.log(word_array);

for (var word of word_array) {
    var first_word = word[0];
    var second_word = word[word.length - 1];

    var result = `${first_word}${second_word}`;

    console.log(result);

}
//###############################################  

//8. Find the duplicate character in the word

var s10 = "programming";
var output = "";
var count = 0;

for (var char of s10) {
    if (output.includes(char)) {
        count++;
        console.log("Duplicate character:", char);
    } else {
        output = output + char;
    }
}

console.log("Duplicate count:", count);  

//8. Find the Most Frequently Repeated Character

var Input= "mpromgrammingppm"
var MFchar = ""
var MCOunt = 0
var output = {}
for(var char of Input) {
    if (Object.hasOwn(output, char)) {
        output[char] += 1
        if (output[char] >= MCOunt) {
            MCOunt = output[char]
            MFchar = char
        }
    } else {
        output[char] = 1
    }
}
console.log(output)
console.log("Max frequency character :", MFchar, MCOunt)



//9. Calculate String Length Without Using length Property

var str11 = "JAVASCRIPT"
var count = 0
for (var word of str11) {
    console.log(word)
    count++
}
console.log(count)


 //Combine Two Strings
    var str1="Hello"
    var str2="World"
    var output= str1+" "+str2
    console.log(output)

    //Count Total Consonants
  var str1="JavaScrIpt"
  var str2="aeiouAEIO"
  var count=0
  for(var val of str1)
  if(!str2.includes(val))
  {
    count++
  }
  console.log("Count of consonants:",count)

  //Print Characters at Even Positions
  var str1="JavaScript"
  var output=""
  var i=0
  for(i=0; i<=str1.length-1; i++){

    if(i%2==0){
        output+=str1[i]
    }
  }
  console.log(output)

  // //Print Characters at odd Positions
  var str1="abcdefg"
  var output=""
  var i=0
  for(i=0; i<=str1.length-1; i++){

    if(i%2!=0){
        output+=str1[i]
    }
  }
  console.log(output)
>>>>>>> 29f1427e4589fa5f687a83686ce8c5ab90612950

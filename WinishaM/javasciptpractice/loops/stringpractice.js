/*let name = "Ashwini Mohite ";
let name1 = "Ram";
console.log(name[0]);
console.log(name[8]);
console.log(name.length);
console.log(name + " " + name1);
console.log(`${name} ${name1}`);
console.log(`hello ${name} ${name1}`);
console.log(name.charAt(4));
console.log(name.at(-2));
console.log(name.at(7));
console.log(name.slice(0,4))
console.log(name.slice(0,5))
console.log(name.slice(-4,-1))
console.log(name.slice(-5))
console.log(name.substring(0,4))
console.log(name.substring(4,10))
console.log(name.indexOf("i"))  
console.log(name.indexOf("i")) 
console.log(name.indexOf("i", 0,4))
console.log(name.lastIndexOf("i"))
console.log(name.replace("Mohite", "Ram"))
console.log(name1.replace("Ram", "Mohite"))
//console.log(name.replaceAll("Hello Everyone", "Hello Everyone, Welcome to the world of JavaScript"))
 console.log(name.replaceAll("Hello world", "Ashwini Mohite"))
 console.log(name.toUpperCase())
 console.log(name.toLowerCase())
 console.log(name.trim())
 console.log(name.trimStart())
 console.log(name.trimEnd())
 console.log(name.split(" "))
 console.log(name.split("a"))
 console.log(name.split("i"))
 console.log(name.repeat(3))

 */
 

/*reverse astring using for loop
let str = "Ashwini Mohite";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr); */


/*let string = "javascript"

for(let i = string.length-1; i>=0; i--)
{
    str1 += string[i];
}
console.log("string is", str1)
*/

let string = "madam"
str1 = "";

for(let i = string.length-1; i>=0; i--)
{
str1 +=string[i];
}
if(string === str1)
{
console.log("palindrome")
}
else
{
console.log("not palindrome")
}
//Q3 : write a program to repeat of first character of word twice.

var str1 = "Rohit Virat Vaibhav Abhishek Surya"

// output = "RRohit VVirat VVaibhav AAbhishek SSurya"

//write a program to repeat of first character of word twice
var str1 = "Rohit Virat Vaibhav Abhishek Surya"
let words = str1.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result += word[0] + word;
}

console.log(result);


//write a program to display first and last character of each word
var str1 = "Rohit Virat Vaibhav Abhishek Surya"
let words = str1.split(" ");
let result = "";        
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result += word[0] + word[word.length - 1] + " ";
}



//Q5 : write a program to remove duplcates words from given string.

var str1 = "Rohit Virat Vaibhav Surya Rohit Abhishek Surya Virat"
var words = str1.split(" ");
var uniqueWords = [];

for (let i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
        uniqueWords.push(words[i]);
    }
}

// output = Rohit Virat Vaibhav Abhishek Surya"






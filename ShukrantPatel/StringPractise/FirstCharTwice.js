//write a program to repeat of first character of word twice
var str1 = "Rohit, Virat, Vaibhav, Abhishek, Surya";

var result = str1
  .split(",")
  .map(word => {
    word = word.trim();
    return word[0] + word;
  })
  .join(", ");

console.log(result);

//Write a Program to get first and last character of each word
var str1 = "Rohit, Virat, Vaibhav, Abhishek, Surya";

var result = str1
  .split(",")
  .map(word => {
    word = word.trim();
    return word[0] + word[word.length - 1];
  });

console.log(result);
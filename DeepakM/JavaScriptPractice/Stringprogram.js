//write a program to check no vowel in given string
var str= "we are learning javascript"
var vowel= "AEIOUaeiou"
var count= 0;

for(var chr of str){
    if(vowel.includes(chr))
        count=count+1;
    
}
console.log(count)

//write a program to repeat first charater of every word twice
var str= "Rohit Virat Vaibhav Abhishek Surya"
var words= str.split(" ")
for(var i=0; i<words.length; i++){
    var firstChar= words[i][0]
    words[i]= firstChar+words[i]
}
console.log(words.join(" "))


//write a program to repeat first and last charater of every word twice
var str1= "Rohit Virat Vaibhav Abhishek Surya"
var words1= str1.split(" ")
for(var word of str1){
    console.log(word)

}

//write a program to remve the duplicate word from the string

var str2= "Rohit Virat Vaibhav Abhishek Surya Rohit Virat"
var words2 = str2.split(" ")
for (var words of words2){

     if(words2 .includes(words)){
        continue

     } 
    else{
        var output = output+words
    }
    
}
console.log(output)
    

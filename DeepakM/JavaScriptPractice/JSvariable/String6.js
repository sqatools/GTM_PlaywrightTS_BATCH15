//Find the longest and shortest words in a sentence
//"I love learning JavaScript"
//Longest: JavaScript
//Shortest: I

var input = "I love learning JavaScript"
var words= input.split(" ")
var long = words[0]
var short = words[0]

for(var word of words){
    if(word.length>long.length){
        long = word
        continue
    }
    else{
        short = word
    }
        
}
console.log(long)
console.log(short)
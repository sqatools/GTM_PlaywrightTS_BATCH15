//Write a JavaScript program to find the length of the longest string from an array of strings.
//["Java", "Programming", "Code"]

var input = ["Java", "Programming", "Code"]
let longest= "";

for(var word of input){
    
    
    if(word.length>longest.length){
        longest = word;
    }
    
}
console.log(longest);

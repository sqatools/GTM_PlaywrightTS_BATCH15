// Find the length of a string using loop logic only.

var input= "Javascript"
var length= 0;

for(var char of input){
   // console.log(char)

    for(var i=0; i<char.length;i++)
        length=length+1;
}
console.log(length)




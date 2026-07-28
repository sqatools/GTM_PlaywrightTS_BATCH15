/*var Value = "Hello Javascript"
count =0;
var vowels = "aeiou"
for(var i = 0; i < Value.length; i++){
if("aeiou".includes(Value[i]))
{
count+=1;
}
}
console.log("vowels",count) */

var Value = "Hello Javascript"
count =0;
var vowels = "aeiou"
for(var i of Value.toLowerCase()){
if("aeiou".includes(i))
{
count+=1;
}
}
console.log("vowels",count)

var String = "Welcom to my Kingdom"
var vowels = "aeiou"
for(var i of String.toLowerCase())
{
if(i>='a' && i<='z' && !"aeiou".includes(i))
{
console.log("Consonents are", i)
}
}
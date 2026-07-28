var name = "Hello JavaScript"
count=0;
for(var i of name.toLowerCase())
{
if(!"aeiou".includes(i))
{
count+=1;
}
}
console.log("consonents",count)

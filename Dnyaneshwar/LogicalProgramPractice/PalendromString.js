var str='madamji'

var rev=''

for(var i=str.length-1;i>=0;i--)
{
    rev=rev+str[i]
}
console.log(rev)

if(str==rev)
{
    console.log("palendrom")
}
else{
    console.log("not pallendrom")
}
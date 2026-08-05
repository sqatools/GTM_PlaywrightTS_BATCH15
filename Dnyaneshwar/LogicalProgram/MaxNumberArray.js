
var array=[1,2,33,4,55,66,7,8,9,10]

var max=array[0]

for(var i=1;i<array.length;i++)
{
if(array[i]>max)
{
    max=array[i]
}
}
console.log("max number is :",max)
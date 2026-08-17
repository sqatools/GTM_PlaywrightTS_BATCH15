var num =123456789

var sum=0

for(var i=num;i>0;i=i/10|0)
{
    var digit=i%10
    sum =sum+digit
}
console.log(sum)
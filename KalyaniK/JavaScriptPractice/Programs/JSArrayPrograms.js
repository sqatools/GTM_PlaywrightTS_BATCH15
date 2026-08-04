//Q1wrote a program to find out the max value from array
var arr=[20,30,1015,1015,1016]
var Max=0
for(var v of arr)
{
  if(v>Max)
  {
    Max=v;
  }
  else{
    continue;
  }
}
console.log(Max);

console.log("********************************************************")
//Q2 Write a program to shift all positive left side and negative right side

arr=[1,2,-1,-4,6,7]
output=[]
for (var a of arr)
{
    if(a>=0)
    output.unshift(a);
    else
    {
        output.push(a)
    }
}
console.log(output);
//var o=output
console.log(output.sort((a,b)=>b-a))

console.log("**************************************************************")
//Q3 Write  aprogram to get values form array wchich ar eprie number
arr=[1,5,8,9,7,11,6,5,23] 
count=0
for(var i of arr)
{
  for (var j=2;j<i;j++){
    if(i%j==0)
    {
        count+=1;
        break;
        
    }
} 

  if(count==0)
  {
    console.log(i)   
  } else{count=0;}
}
console.log("**************************************************************")
//Q5.write a program to get a combinaiton of two values whose sum is 10
var a=[4,6,7,12,9,3,-2,8,2,1]
for (var i of a)
{
    for(var j of a)
    {
        if(i+j==10)
        { 
            console.log(i,j);
        }
    }
}

//Q6.write a program to print square of even values and cube of odd values
//Q7.write a program to remove duplicate values
var arr=[7,8,2,5,7,5,4,8]
Dup=[]
for(var i of arr)
{
    if(Dup.includes(i))
    {
        continue;
    }
    else{
        Dup.push(i)
    }
}
console.log(Dup)


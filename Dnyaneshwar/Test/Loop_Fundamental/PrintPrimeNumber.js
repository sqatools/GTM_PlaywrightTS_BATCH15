//login if 2 far loop


for(var i=1 ; i<=5; i++){



    console.log("Address : i ",i)

    for(var j=1 ; j<=3 ; j++)
    {
        console.log("package :j: ",j)
    }
   
{
     console.log("...........")

}
}


// get list of all prime number from 1 to 100 

for (var num =1 ; num <=100; num++)
{

var prime = true

for(var i=2 ; i<num ;i++)
{
    if(num %i==0)
    {
        prime=false
        break   
    }
}
if(prime)
{
    console.log(num)
}
}

// by using array
console.log("#######....prime Number in given array ....########")
var arr1 = [5,6,7,12,11,45,17,89]

for(var num of arr1)
{
    var prime = true
    for(var i=2 ; i<num;i++)
    {
        if(num %i ==0)
        {
            prime =false
            break
        }
    }
    if(prime)
    {
        console.log(num)    
    }
}
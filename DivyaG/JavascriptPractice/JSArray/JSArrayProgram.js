//write a program to find Max value from array
var arr2 =  [20,30,100,10,15,27]
var maxVal = 0
for(var val of arr2)//20, 30, 100, 10, 15,27
{
    if(val > maxVal){//20>0|| 30>20 || 100>30 || 10>100||15>100||27>100
        maxVal = val
    }else{
        continue
    }
}
console.log("Maxvalue:",maxVal)//max is 100

//write a program to shift all positive at left side and negative at right side

var arr3 = [-3, 16, 18, -2, 27, -12, 45, -78]

var output = []

for(var val of arr3){
    if(val>0){
        output.unshift(val)
    }else{
        output.push(val)
    }
}
console.log(output)


//write a program to get values from array which are prime number

var primeValues = [4,6,7,11,13,16,25,29]
for(var num of primeValues){    //4
var prime=true
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        prime=false
        break
    }
}
if(prime){
    console.log(num)
}
}




//Write a program to print square of even values and cube of odd values
var array3 = [4,7,9,3,6,12,15]
var output
var output1
for(var val of array3){
    if(val%2==0){
        output = val**2
        console.log("Square of a number:",output)
    }
    else{
        output1=val**3
        console.log("Cube of a number:",output1)
    }
}



//write a program to remove duplicate value
var array4 = [7,8,2,5,7,5,4,8]
var output =[]
for(var val of array4)
{
    if(output.includes(val)){
            //output.push(val)
            continue
    }
    else{
        output.push(val)
        
    }
            
}
console.log(output)//[7,8,2,5,4]

//write a program to get combination of two numbers whose sum is 10
var a = [4,6,7,12,9,3,-2,8,2,1]
for(var i=0;i<=a.length;i++)
    {
    for(var j=i;j<=a.length;j++)
        {
           var output= a[i] +a[j]
           if(output==10)
       {
    console.log(a[i],a[j])
            }
         }
       }
       /*4 6
7 3
12 -2
9 1
8 2*/

////find second max value
var arr2 =  [20,200,100,10,15,27]
var maxValue=0
var secMaxValue=0
for( var val of arr2)
{
    if(val > maxValue){        //20>0 ||200>20 || 100>200  || 10>200 ||15>200 ||27>200
        secMaxValue = maxValue  //0 ,20,
        maxValue = val          //20 ,200,
    }
else if(val > secMaxValue && val != maxValue){  //
    secMaxValue = val  //100
}
        }
    
console.log(secMaxValue)



